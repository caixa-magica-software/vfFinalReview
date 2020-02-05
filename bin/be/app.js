var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const os = require("os");
const formData = require("express-form-data");
const expressValidator = require('express-validator');
const recursiveReadSync = require('recursive-readdir-sync')
const contains = require("string-contains")

var app = express();

/**
 * Options are the same as multiparty takes.
 * But there is a new option "autoClean" to clean all files in "uploadDir" folder after the response.
 * By default, it is "false".
 */
const uploadOptions = {
  uploadDir: os.tmpdir(),
  autoClean: true
};

app.listen(process.env.PORT || 4201);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());
app.use('/',express.static(path.join(path.normalize(__dirname), '../../views')));
// parse data with connect-multiparty.
app.use(formData.parse(uploadOptions));
// clear from the request and delete all empty files (size == 0)
app.use(formData.format());
// change file objects to stream.Readable
app.use(formData.stream());
// union body and files
app.use(formData.union());

try {
  recursiveReadSync(path.join(path.normalize(__dirname), '../../logic/processes')).forEach(file => {
    if (!contains(file, '.gitkeep') && !contains(file, '.deps')) {
        app.use('/api', require(file)(app));
    }
  });

} catch (err) {
  if (err.errno === 34) {
    console.log(err);
    console.log('Path does not exist');
  } else {
    console.log(err);
    throw err;
  }
}

/**
 * avoid cors
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * welcome backend route
*/
app.get('/api/', (req, res) => {
  res.json({
      message : 'vApp backend is running',
      data: new Date()
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// This block of code is used to print the provided routes by this vApp
function split (thing) {
  if (typeof thing === 'string') {
    return thing.split('/')
  } else if (thing.fast_slash) {
    return ''
  } else {
    var match = thing.toString()
      .replace('\\/?', '')
      .replace('(?=\\/|$)', '$')
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//)
    return match
      ? match[1].replace(/\\(.)/g, '$1').split('/')
      : '<complex:' + thing.toString() + '>'
  }
}

// This block of code is used to print the provided routes by this vApp
function print (path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))))
  } else if (layer.name === 'router' && layer.handle.stack) {
    layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))))
  } else if (layer.method) {
    console.log('%s /%s',
      layer.method.toUpperCase(),
      path.concat(split(layer.regexp)).filter(Boolean).join('/'))
  }
}

// This block of code is used to print the provided routes by this vApp
app._router.stack.forEach(print.bind(null, []));

module.exports = app;