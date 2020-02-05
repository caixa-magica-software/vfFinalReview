(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shell/shell.service */ "./src/app/shell/shell.service.ts");
/* harmony import */ var _pages_PAGE_ABAEAF_PAGE_ABAEAF_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/PAGE_ABAEAF/PAGE_ABAEAF.module */ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.module.ts");


/*ROUTE-IMPORT-START-PAGE_ABAEAF*/  /*ROUTE-IMPORT-END-PAGE_ABAEAF*/
var ɵ0 = function () { return _pages_PAGE_ABAEAF_PAGE_ABAEAF_module__WEBPACK_IMPORTED_MODULE_2__["PAGE_ABAEAFModule"]; };
//ROUTES-IMPORT-MARKER
var routes = [
    // Fallback when no prior route is matched
    _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_1__["Shell"].childRoutes([
        /*ROUTE-START-PAGE_ABAEAF*/ { path: 'PAGE_ABAEAF', loadChildren: ɵ0 },
    ]),
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());




/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_i18n_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/i18n.service */ "./src/app/core/i18n.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _core_i18n_service__WEBPACK_IMPORTED_MODULE_6__["I18nService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");








var log = new _app_core__WEBPACK_IMPORTED_MODULE_7__["Logger"]('App');
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, translateService, i18nService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.translateService = translateService;
        this.i18nService = i18nService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Setup logger
        if (_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
            _app_core__WEBPACK_IMPORTED_MODULE_7__["Logger"].enableProductionMode();
        }
        log.debug('init');
        // Setup translations
        this.i18nService.init(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultLanguage, _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].supportedLanguages);
        var onNavigationEnd = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }));
        try {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open('POST', "/frontend_editor/setloaded", true); // true for asynchronous
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp.send(null);
        }
        catch (e) { }
        // Change page title on navigation or language change, based on route data
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.translateService.onLangChange, onNavigationEnd)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            var title = event['title'];
            if (title) {
                _this.titleService.setTitle(_this.translateService.instant(title));
            }
        });
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */ "../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "../node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _node_modules_swimlane_ngx_charts_release_common_tooltip_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@swimlane/ngx-charts/release/common/tooltip/tooltip.component.ngfactory */ "../node_modules/@swimlane/ngx-charts/release/common/tooltip/tooltip.component.ngfactory.js");
/* harmony import */ var _shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shell/shell.component.ngfactory */ "./src/app/shell/shell.component.ngfactory.js");
/* harmony import */ var _pages_PAGE_ABAEAF_PAGE_ABAEAF_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/PAGE_ABAEAF/PAGE_ABAEAF.component.ngfactory */ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations/browser */ "../node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ "../node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "../node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_http_http_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var _core_authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/authentication/authentication.guard */ "./src/app/core/authentication/authentication.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_app_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/app.service */ "./src/app/core/app.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ "../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core_i18n_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/i18n.service */ "./src/app/core/i18n.service.ts");
/* harmony import */ var _core_http_http_cache_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/http/http-cache.service */ "./src/app/core/http/http-cache.service.ts");
/* harmony import */ var _core_http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/http/api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
/* harmony import */ var _core_http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/http/error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony import */ var _core_http_cache_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/http/cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
/* harmony import */ var _swimlane_ngx_charts_release_common_tooltip_injection_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @swimlane/ngx-charts/release/common/tooltip/injection.service */ "../node_modules/@swimlane/ngx-charts/release/common/tooltip/injection.service.js");
/* harmony import */ var _swimlane_ngx_charts_release_common_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @swimlane/ngx-charts/release/common/tooltip/tooltip.service */ "../node_modules/@swimlane/ngx-charts/release/common/tooltip/tooltip.service.js");
/* harmony import */ var _swimlane_ngx_datatable_release_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @swimlane/ngx-datatable/release/services/scrollbar-helper.service */ "../node_modules/@swimlane/ngx-datatable/release/services/scrollbar-helper.service.js");
/* harmony import */ var _swimlane_ngx_datatable_release_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _swimlane_ngx_datatable_release_services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @swimlane/ngx-datatable/release/services/dimensions-helper.service */ "../node_modules/@swimlane/ngx-datatable/release/services/dimensions-helper.service.js");
/* harmony import */ var _swimlane_ngx_datatable_release_services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release_services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _swimlane_ngx_datatable_release_services_column_changes_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @swimlane/ngx-datatable/release/services/column-changes.service */ "../node_modules/@swimlane/ngx-datatable/release/services/column-changes.service.js");
/* harmony import */ var _swimlane_ngx_datatable_release_services_column_changes_service__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release_services_column_changes_service__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _pages_PAGE_ABAEAF_PAGE_ABAEAF_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/PAGE_ABAEAF/PAGE_ABAEAF.component */ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.ts");
/* harmony import */ var _pages_PAGE_ABAEAF_PAGE_ABAEAF_routing_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/PAGE_ABAEAF/PAGE_ABAEAF-routing.module */ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF-routing.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_route_reusable_strategy__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./core/route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _swimlane_ngx_charts_release_common_axes_axes_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @swimlane/ngx-charts/release/common/axes/axes.module */ "../node_modules/@swimlane/ngx-charts/release/common/axes/axes.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_common_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @swimlane/ngx-charts/release/common/tooltip/tooltip.module */ "../node_modules/@swimlane/ngx-charts/release/common/tooltip/tooltip.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_common_chart_common_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @swimlane/ngx-charts/release/common/chart-common.module */ "../node_modules/@swimlane/ngx-charts/release/common/chart-common.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_area_chart_area_chart_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @swimlane/ngx-charts/release/area-chart/area-chart.module */ "../node_modules/@swimlane/ngx-charts/release/area-chart/area-chart.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_bar_chart_bar_chart_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @swimlane/ngx-charts/release/bar-chart/bar-chart.module */ "../node_modules/@swimlane/ngx-charts/release/bar-chart/bar-chart.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_bubble_chart_bubble_chart_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @swimlane/ngx-charts/release/bubble-chart/bubble-chart.module */ "../node_modules/@swimlane/ngx-charts/release/bubble-chart/bubble-chart.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_force_directed_graph_force_directed_graph_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @swimlane/ngx-charts/release/force-directed-graph/force-directed-graph.module */ "../node_modules/@swimlane/ngx-charts/release/force-directed-graph/force-directed-graph.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_heat_map_heat_map_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @swimlane/ngx-charts/release/heat-map/heat-map.module */ "../node_modules/@swimlane/ngx-charts/release/heat-map/heat-map.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_line_chart_line_chart_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @swimlane/ngx-charts/release/line-chart/line-chart.module */ "../node_modules/@swimlane/ngx-charts/release/line-chart/line-chart.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @swimlane/ngx-charts/release/pie-chart/pie-chart.module */ "../node_modules/@swimlane/ngx-charts/release/pie-chart/pie-chart.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_polar_chart_polar_chart_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @swimlane/ngx-charts/release/polar-chart/polar-chart.module */ "../node_modules/@swimlane/ngx-charts/release/polar-chart/polar-chart.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_number_card_number_card_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @swimlane/ngx-charts/release/number-card/number-card.module */ "../node_modules/@swimlane/ngx-charts/release/number-card/number-card.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_tree_map_tree_map_module__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @swimlane/ngx-charts/release/tree-map/tree-map.module */ "../node_modules/@swimlane/ngx-charts/release/tree-map/tree-map.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_gauge_gauge_module__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @swimlane/ngx-charts/release/gauge/gauge.module */ "../node_modules/@swimlane/ngx-charts/release/gauge/gauge.module.js");
/* harmony import */ var _swimlane_ngx_charts_release_ngx_charts_module__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @swimlane/ngx-charts/release/ngx-charts.module */ "../node_modules/@swimlane/ngx-charts/release/ngx-charts.module.js");
/* harmony import */ var _swimlane_ngx_datatable_release_datatable_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @swimlane/ngx-datatable/release/datatable.module */ "../node_modules/@swimlane/ngx-datatable/release/datatable.module.js");
/* harmony import */ var _swimlane_ngx_datatable_release_datatable_module__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release_datatable_module__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _pages_PAGE_ABAEAF_PAGE_ABAEAF_module__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/PAGE_ABAEAF/PAGE_ABAEAF.module */ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵzNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵbaNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵsNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵwNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_router_router_lNgFactory"], _node_modules_swimlane_ngx_charts_release_common_tooltip_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["TooltipContentComponentNgFactory"], _shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ShellComponentNgFactory"], _pages_PAGE_ABAEAF_PAGE_ABAEAF_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["PAGE_ABAEAFComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_11__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_13__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_e"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_b"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], _core_http_http_service__WEBPACK_IMPORTED_MODULE_17__["HttpService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _core_http_http_service__WEBPACK_IMPORTED_MODULE_17__["HTTP_DYNAMIC_INTERCEPTORS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ɵbb"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"], _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_20__["AuthenticationGuard"], _core_authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_20__["AuthenticationGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"], _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_app_service__WEBPACK_IMPORTED_MODULE_22__["AppService"], _core_app_service__WEBPACK_IMPORTED_MODULE_22__["AppService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateStore"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateFakeLoader"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["USE_STORE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_i18n_service__WEBPACK_IMPORTED_MODULE_24__["I18nService"], _core_i18n_service__WEBPACK_IMPORTED_MODULE_24__["I18nService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_http_http_cache_service__WEBPACK_IMPORTED_MODULE_25__["HttpCacheService"], _core_http_http_cache_service__WEBPACK_IMPORTED_MODULE_25__["HttpCacheService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_26__["ApiPrefixInterceptor"], _core_http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_26__["ApiPrefixInterceptor"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_27__["ErrorHandlerInterceptor"], _core_http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_27__["ErrorHandlerInterceptor"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_http_cache_interceptor__WEBPACK_IMPORTED_MODULE_28__["CacheInterceptor"], _core_http_cache_interceptor__WEBPACK_IMPORTED_MODULE_28__["CacheInterceptor"], [_core_http_http_cache_service__WEBPACK_IMPORTED_MODULE_25__["HttpCacheService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_charts_release_common_tooltip_injection_service__WEBPACK_IMPORTED_MODULE_29__["InjectionService"], _swimlane_ngx_charts_release_common_tooltip_injection_service__WEBPACK_IMPORTED_MODULE_29__["InjectionService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_charts_release_common_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_30__["TooltipService"], _swimlane_ngx_charts_release_common_tooltip_tooltip_service__WEBPACK_IMPORTED_MODULE_30__["TooltipService"], [_swimlane_ngx_charts_release_common_tooltip_injection_service__WEBPACK_IMPORTED_MODULE_29__["InjectionService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable_release_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_31__["ScrollbarHelper"], _swimlane_ngx_datatable_release_services_scrollbar_helper_service__WEBPACK_IMPORTED_MODULE_31__["ScrollbarHelper"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable_release_services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_32__["DimensionsHelper"], _swimlane_ngx_datatable_release_services_dimensions_helper_service__WEBPACK_IMPORTED_MODULE_32__["DimensionsHelper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _swimlane_ngx_datatable_release_services_column_changes_service__WEBPACK_IMPORTED_MODULE_33__["ColumnChangesService"], _swimlane_ngx_datatable_release_services_column_changes_service__WEBPACK_IMPORTED_MODULE_33__["ColumnChangesService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_21__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_21__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_21__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_21__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_c"], "./ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_b"], { enabled: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2, p2_3) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_i"](p1_0), _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_d"](p2_0, p2_1, p2_2, p2_3)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_h"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_c"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_service_worker_service_worker_b"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_21__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTES"], function () { return [[{ path: "", component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_34__["ShellComponent"], children: [{ path: "", redirectTo: "/PAGE_ABAEAF", pathMatch: "full" }, { path: "PAGE_ABAEAF", component: _pages_PAGE_ABAEAF_PAGE_ABAEAF_component__WEBPACK_IMPORTED_MODULE_35__["PAGE_ABAEAFComponent"], data: _pages_PAGE_ABAEAF_PAGE_ABAEAF_routing_module__WEBPACK_IMPORTED_MODULE_36__["ɵ0"] }], data: { reuse: true } }], [{ path: "", component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_34__["ShellComponent"], children: [{ path: "PAGE_ABAEAF", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["ɵ0"] }], data: { reuse: true } }, { path: "**", redirectTo: "", pathMatch: "full" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouteReuseStrategy"], _core_route_reusable_strategy__WEBPACK_IMPORTED_MODULE_38__["RouteReusableStrategy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_39__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_39__["CoreModule"], [[3, _core_core_module__WEBPACK_IMPORTED_MODULE_39__["CoreModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_40__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_40__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shell_shell_module__WEBPACK_IMPORTED_MODULE_41__["ShellModule"], _shell_shell_module__WEBPACK_IMPORTED_MODULE_41__["ShellModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_common_axes_axes_module__WEBPACK_IMPORTED_MODULE_42__["AxesModule"], _swimlane_ngx_charts_release_common_axes_axes_module__WEBPACK_IMPORTED_MODULE_42__["AxesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_common_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_43__["TooltipModule"], _swimlane_ngx_charts_release_common_tooltip_tooltip_module__WEBPACK_IMPORTED_MODULE_43__["TooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_common_chart_common_module__WEBPACK_IMPORTED_MODULE_44__["ChartCommonModule"], _swimlane_ngx_charts_release_common_chart_common_module__WEBPACK_IMPORTED_MODULE_44__["ChartCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_area_chart_area_chart_module__WEBPACK_IMPORTED_MODULE_45__["AreaChartModule"], _swimlane_ngx_charts_release_area_chart_area_chart_module__WEBPACK_IMPORTED_MODULE_45__["AreaChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_bar_chart_bar_chart_module__WEBPACK_IMPORTED_MODULE_46__["BarChartModule"], _swimlane_ngx_charts_release_bar_chart_bar_chart_module__WEBPACK_IMPORTED_MODULE_46__["BarChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_bubble_chart_bubble_chart_module__WEBPACK_IMPORTED_MODULE_47__["BubbleChartModule"], _swimlane_ngx_charts_release_bubble_chart_bubble_chart_module__WEBPACK_IMPORTED_MODULE_47__["BubbleChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_force_directed_graph_force_directed_graph_module__WEBPACK_IMPORTED_MODULE_48__["ForceDirectedGraphModule"], _swimlane_ngx_charts_release_force_directed_graph_force_directed_graph_module__WEBPACK_IMPORTED_MODULE_48__["ForceDirectedGraphModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_heat_map_heat_map_module__WEBPACK_IMPORTED_MODULE_49__["HeatMapModule"], _swimlane_ngx_charts_release_heat_map_heat_map_module__WEBPACK_IMPORTED_MODULE_49__["HeatMapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_line_chart_line_chart_module__WEBPACK_IMPORTED_MODULE_50__["LineChartModule"], _swimlane_ngx_charts_release_line_chart_line_chart_module__WEBPACK_IMPORTED_MODULE_50__["LineChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_51__["PieChartModule"], _swimlane_ngx_charts_release_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_51__["PieChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_polar_chart_polar_chart_module__WEBPACK_IMPORTED_MODULE_52__["PolarChartModule"], _swimlane_ngx_charts_release_polar_chart_polar_chart_module__WEBPACK_IMPORTED_MODULE_52__["PolarChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_number_card_number_card_module__WEBPACK_IMPORTED_MODULE_53__["NumberCardModule"], _swimlane_ngx_charts_release_number_card_number_card_module__WEBPACK_IMPORTED_MODULE_53__["NumberCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_tree_map_tree_map_module__WEBPACK_IMPORTED_MODULE_54__["TreeMapModule"], _swimlane_ngx_charts_release_tree_map_tree_map_module__WEBPACK_IMPORTED_MODULE_54__["TreeMapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_gauge_gauge_module__WEBPACK_IMPORTED_MODULE_55__["GaugeModule"], _swimlane_ngx_charts_release_gauge_gauge_module__WEBPACK_IMPORTED_MODULE_55__["GaugeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_charts_release_ngx_charts_module__WEBPACK_IMPORTED_MODULE_56__["NgxChartsModule"], _swimlane_ngx_charts_release_ngx_charts_module__WEBPACK_IMPORTED_MODULE_56__["NgxChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _swimlane_ngx_datatable_release_datatable_module__WEBPACK_IMPORTED_MODULE_57__["NgxDatatableModule"], _swimlane_ngx_datatable_release_datatable_module__WEBPACK_IMPORTED_MODULE_57__["NgxDatatableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pages_PAGE_ABAEAF_PAGE_ABAEAF_routing_module__WEBPACK_IMPORTED_MODULE_36__["PAGE_ABAEAFRoutingModule"], _pages_PAGE_ABAEAF_PAGE_ABAEAF_routing_module__WEBPACK_IMPORTED_MODULE_36__["PAGE_ABAEAFRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _pages_PAGE_ABAEAF_PAGE_ABAEAF_module__WEBPACK_IMPORTED_MODULE_58__["PAGE_ABAEAFModule"], _pages_PAGE_ABAEAF_PAGE_ABAEAF_module__WEBPACK_IMPORTED_MODULE_58__["PAGE_ABAEAFModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["USE_STORE"], undefined, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/de */ "../node_modules/@angular/common/locales/de.js");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/extra/de */ "../node_modules/@angular/common/locales/extra/de.js");
/* harmony import */ var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/nl */ "../node_modules/@angular/common/locales/nl.js");
/* harmony import */ var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_locales_extra_nl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/extra/nl */ "../node_modules/@angular/common/locales/extra/nl.js");
/* harmony import */ var _angular_common_locales_extra_nl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_nl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/fr */ "../node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/extra/fr */ "../node_modules/@angular/common/locales/extra/fr.js");
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/es */ "../node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_locales_extra_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/extra/es */ "../node_modules/@angular/common/locales/extra/es.js");
/* harmony import */ var _angular_common_locales_extra_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/pt */ "../node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/extra/pt */ "../node_modules/@angular/common/locales/extra/pt.js");
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_10__);



Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_1___default.a, 'de-DE', _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_2___default.a);


Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_3___default.a, 'nl-NL', _angular_common_locales_extra_nl__WEBPACK_IMPORTED_MODULE_4___default.a);


Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5___default.a, 'fr-FR', _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_6___default.a);


Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7___default.a, 'es-ES', _angular_common_locales_extra_es__WEBPACK_IMPORTED_MODULE_8___default.a);


Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9___default.a, 'pt-PT', _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_10___default.a);
//NG-MODULE-IMPORT-MARKER
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/app.service.ts":
/*!*************************************!*\
  !*** ./src/app/core/app.service.ts ***!
  \*************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.customerID = "No information (missing login)";
        this.firstName = "No information (missing login)";
        this.lastName = "No information (missing login)";
    }
    AppService.prototype.getJSON = function (src) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get(src, { headers: headers });
    };
    AppService.prototype.getJSONRange = function (src, range) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(src, range, { headers: headers });
    };
    AppService.prototype.downloadFile = function (downloadurl, filename) {
        return __awaiter(this, void 0, void 0, function () {
            var headers;
            return __generator(this, function (_a) {
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
                headers.append('Access-Control-Allow-Methods', 'GET, POST');
                headers.append('Access-Control-Allow-Origin', '*');
                headers.append("Content-Type", "text/plain");
                this.http.get(downloadurl, { responseType: 'blob', headers: headers }).subscribe(function (data) {
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(data, filename);
                });
                return [2 /*return*/];
            });
        });
    };
    AppService.prototype.setUser = function (user) {
        console.log("IN SERVICE", user);
        this.authToken = user.userToken;
        this.customerID = user.customerId;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    };
    AppService.prototype.getUserToken = function () {
        return this.authToken;
    };
    AppService.prototype.reportError = function () {
        try {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open('POST', "/frontend_editor/senderrorreport", true); // true for asynchronous
            xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp.send(JSON.stringify({ "customerID": this.customerID, "firstName": this.firstName, "lastName": this.lastName }));
        }
        catch (e) { }
    };
    AppService.prototype.getCustomerID = function () {
        return this.customerID;
    };
    AppService.prototype.getFirstName = function () {
        return this.firstName;
    };
    AppService.prototype.getLastName = function () {
        return this.lastName;
    };
    return AppService;
}());



/***/ }),

/***/ "./src/app/core/authentication/authentication.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/authentication/authentication.guard.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/authentication/authentication.service.ts");



var log = new _logger_service__WEBPACK_IMPORTED_MODULE_1__["Logger"]('AuthenticationGuard');
var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        log.debug('Not authenticated, redirecting and adding redirect url...');
        this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
        return false;
    };
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/core/authentication/authentication.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");

var credentialsKey = 'credentials';
/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        var savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }
    }
    /**
     * Authenticates the user.
     * @param context The login parameters.
     * @return The user credentials.
     */
    AuthenticationService.prototype.login = function (context) {
        // Replace by proper authentication call
        var data = {
            username: context.username,
            token: '123456'
        };
        this.setCredentials(data, context.remember);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(data);
    };
    /**
     * Logs out the user and clear credentials.
     * @return True if the user was logged out successfully.
     */
    AuthenticationService.prototype.logout = function () {
        // Customize credentials invalidation here
        this.setCredentials();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    };
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    AuthenticationService.prototype.isAuthenticated = function () {
        return !!this.credentials;
    };
    Object.defineProperty(AuthenticationService.prototype, "credentials", {
        /**
         * Gets the user credentials.
         * @return The user credentials or null if the user is not authenticated.
         */
        get: function () {
            return this._credentials;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    AuthenticationService.prototype.setCredentials = function (credentials, remember) {
        this._credentials = credentials || null;
        if (credentials) {
            var storage = remember ? localStorage : sessionStorage;
            storage.setItem(credentialsKey, JSON.stringify(credentials));
        }
        else {
            sessionStorage.removeItem(credentialsKey);
            localStorage.removeItem(credentialsKey);
        }
    };
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(parentModule + " has already been loaded. Import Core module in the AppModule only.");
        }
    }
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/http/api-prefix.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/http/api-prefix.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ApiPrefixInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return ApiPrefixInterceptor; });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
var ApiPrefixInterceptor = /** @class */ (function () {
    function ApiPrefixInterceptor() {
    }
    ApiPrefixInterceptor.prototype.intercept = function (request, next) {
        if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({ url: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl + request.url });
        }
        return next.handle(request);
    };
    return ApiPrefixInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http/cache.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/core/http/cache.interceptor.ts ***!
  \************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-cache.service */ "./src/app/core/http/http-cache.service.ts");



/**
 * Caches HTTP requests.
 * Use ExtendedHttpClient fluent API to configure caching for each request.
 */
var CacheInterceptor = /** @class */ (function () {
    function CacheInterceptor(httpCacheService) {
        this.httpCacheService = httpCacheService;
        this.forceUpdate = false;
    }
    /**
     * Configures interceptor options
     * @param options If update option is enabled, forces request to be made and updates cache entry.
     * @return The configured instance.
     */
    CacheInterceptor.prototype.configure = function (options) {
        var instance = new CacheInterceptor(this.httpCacheService);
        if (options && options.update) {
            instance.forceUpdate = true;
        }
        return instance;
    };
    CacheInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request.method !== 'GET') {
            return next.handle(request);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
            var cachedData = _this.forceUpdate ? null : _this.httpCacheService.getCacheData(request.urlWithParams);
            if (cachedData !== null) {
                // Create new response to avoid side-effects
                subscriber.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"](cachedData));
                subscriber.complete();
            }
            else {
                next.handle(request).subscribe(function (event) {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                        _this.httpCacheService.setCacheData(request.urlWithParams, event);
                    }
                    subscriber.next(event);
                }, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
            }
        });
    };
    return CacheInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http/error-handler.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/http/error-handler.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");



var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]('ErrorHandlerInterceptor');
/**
 * Adds a default error handler to all requests.
 */
var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor() {
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) { return _this.errorHandler(error); }));
    };
    // Customize the default error handler here if needed
    ErrorHandlerInterceptor.prototype.errorHandler = function (response) {
        if (!_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            // Do something with the error
            log.error('Request error', response);
        }
        throw response;
    };
    return ErrorHandlerInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http/http-cache.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/http/http-cache.service.ts ***!
  \*************************************************/
/*! exports provided: HttpCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return HttpCacheService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");


var log = new _logger_service__WEBPACK_IMPORTED_MODULE_1__["Logger"]('HttpCacheService');
var cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
var HttpCacheService = /** @class */ (function () {
    function HttpCacheService() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param url The request URL.
     * @param data The received data.
     * @param lastUpdated The cache last update, current date is used if not specified.
     */
    HttpCacheService.prototype.setCacheData = function (url, data, lastUpdated) {
        this.cachedData[url] = {
            lastUpdated: lastUpdated || new Date(),
            data: data
        };
        log.debug("Cache set for key: \"" + url + "\"");
        this.saveCacheData();
    };
    /**
     * Gets the cached data for the specified request.
     * @param url The request URL.
     * @return The cached data or null if no cached data exists for this request.
     */
    HttpCacheService.prototype.getCacheData = function (url) {
        var cacheEntry = this.cachedData[url];
        if (cacheEntry) {
            log.debug("Cache hit for key: \"" + url + "\"");
            return cacheEntry.data;
        }
        return null;
    };
    /**
     * Gets the cached entry for the specified request.
     * @param url The request URL.
     * @return The cache entry or null if no cache entry exists for this request.
     */
    HttpCacheService.prototype.getHttpCacheEntry = function (url) {
        return this.cachedData[url] || null;
    };
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param url The request URL.
     */
    HttpCacheService.prototype.clearCache = function (url) {
        delete this.cachedData[url];
        log.debug("Cache cleared for key: \"" + url + "\"");
        this.saveCacheData();
    };
    /**
     * Cleans cache entries older than the specified date.
     * @param expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    HttpCacheService.prototype.cleanCache = function (expirationDate) {
        var _this = this;
        if (expirationDate) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__["each"])(this.cachedData, function (value, key) {
                if (expirationDate >= value.lastUpdated) {
                    delete _this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    };
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param persistence How the cache should be persisted, it can be either local or session storage, or if no value is
     *   provided it will be only in-memory (default).
     */
    HttpCacheService.prototype.setPersistence = function (persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    };
    HttpCacheService.prototype.saveCacheData = function () {
        if (this.storage) {
            this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
        }
    };
    HttpCacheService.prototype.loadCacheData = function () {
        var data = this.storage ? this.storage[cachePersistenceKey] : null;
        this.cachedData = data ? JSON.parse(data) : {};
    };
    return HttpCacheService;
}());



/***/ }),

/***/ "./src/app/core/http/http.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
/* harmony import */ var _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





// From @angular/common/http/src/interceptor: allows to chain interceptors
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (request) {
        return this.interceptor.intercept(request, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
 * HTTP_INTERCEPTORS token.
 */
var HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(httpHandler, injector, interceptors) {
        if (interceptors === void 0) { interceptors = []; }
        var _this = _super.call(this, httpHandler) || this;
        _this.httpHandler = httpHandler;
        _this.injector = injector;
        _this.interceptors = interceptors;
        if (!_this.interceptors) {
            // Configure default interceptors that can be disabled here
            _this.interceptors = [_this.injector.get(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]), _this.injector.get(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"])];
        }
        return _this;
    }
    HttpService.prototype.cache = function (forceUpdate) {
        var cacheInterceptor = this.injector.get(_cache_interceptor__WEBPACK_IMPORTED_MODULE_3__["CacheInterceptor"]).configure({ update: forceUpdate });
        return this.addInterceptor(cacheInterceptor);
    };
    HttpService.prototype.skipErrorHandler = function () {
        return this.removeInterceptor(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"]);
    };
    HttpService.prototype.disableApiPrefix = function () {
        return this.removeInterceptor(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]);
    };
    // Override the original method to wire interceptors when triggering the request.
    HttpService.prototype.request = function (method, url, options) {
        var handler = this.interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.httpHandler);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](handler).request(method, url, options);
    };
    HttpService.prototype.removeInterceptor = function (interceptorType) {
        return new HttpService(this.httpHandler, this.injector, this.interceptors.filter(function (i) { return !(i instanceof interceptorType); }));
    };
    HttpService.prototype.addInterceptor = function (interceptor) {
        return new HttpService(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
    };
    return HttpService;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));



/***/ }),

/***/ "./src/app/core/i18n.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/i18n.service.ts ***!
  \**************************************/
/*! exports provided: extract, I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return extract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ "../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony import */ var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../translations/en-US.json */ "./src/translations/en-US.json");
var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/en-US.json */ "./src/translations/en-US.json", 1);
/* harmony import */ var _translations_de_DE_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/de-DE.json */ "./src/translations/de-DE.json");
var _translations_de_DE_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/de-DE.json */ "./src/translations/de-DE.json", 1);
/* harmony import */ var _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../translations/fr-FR.json */ "./src/translations/fr-FR.json");
var _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/fr-FR.json */ "./src/translations/fr-FR.json", 1);
/* harmony import */ var _translations_pt_PT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../translations/pt-PT.json */ "./src/translations/pt-PT.json");
var _translations_pt_PT_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/pt-PT.json */ "./src/translations/pt-PT.json", 1);
/* harmony import */ var _translations_es_ES_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../translations/es-ES.json */ "./src/translations/es-ES.json");
var _translations_es_ES_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/es-ES.json */ "./src/translations/es-ES.json", 1);
/* harmony import */ var _translations_nl_NL_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../translations/nl-NL.json */ "./src/translations/nl-NL.json");
var _translations_nl_NL_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/nl-NL.json */ "./src/translations/nl-NL.json", 1);









var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]('I18nService');
var languageKey = 'language';
/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param s The string to extract for translation.
 * @return The same string.
 */
function extract(s) {
    return s;
}
var I18nService = /** @class */ (function () {
    function I18nService(translateService) {
        this.translateService = translateService;
        // Embed languages to avoid extra HTTP requests
        translateService.setTranslation('en-US', _translations_en_US_json__WEBPACK_IMPORTED_MODULE_3__);
        translateService.setTranslation('de-DE', _translations_de_DE_json__WEBPACK_IMPORTED_MODULE_4__);
        translateService.setTranslation('fr-FR', _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5__);
        translateService.setTranslation('pt-PT', _translations_pt_PT_json__WEBPACK_IMPORTED_MODULE_6__);
        translateService.setTranslation('es-ES', _translations_es_ES_json__WEBPACK_IMPORTED_MODULE_7__);
        translateService.setTranslation('nl-NL', _translations_nl_NL_json__WEBPACK_IMPORTED_MODULE_8__);
    }
    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param defaultLanguage The default language to use.
     * @param supportedLanguages The list of supported languages.
     */
    I18nService.prototype.init = function (defaultLanguage, supportedLanguages) {
        console.log(supportedLanguages);
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages;
        this.language = '';
        this.translateService.onLangChange.subscribe(function (event) {
            localStorage.setItem(languageKey, event.lang);
        });
    };
    Object.defineProperty(I18nService.prototype, "language", {
        /**
         * Gets the current language.
         * @return The current language code.
         */
        get: function () {
            return this.translateService.currentLang;
        },
        /**
         * Sets the current language.
         * Note: The current language is saved to the local storage.
         * If no parameter is specified, the language is loaded from local storage (if present).
         * @param language The IETF language code to set.
         */
        set: function (language) {
            language =
                language ||
                    this.defaultLanguage ||
                    localStorage.getItem(languageKey) ||
                    this.translateService.getBrowserCultureLang();
            var isSupportedLanguage = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["includes"])(this.supportedLanguages, language);
            // If no exact match is found, search without the region
            if (language && !isSupportedLanguage) {
                language = language.split('-')[0];
                language = this.supportedLanguages.find(function (supportedLanguage) { return supportedLanguage.startsWith(language); }) || '';
                isSupportedLanguage = Boolean(language);
            }
            // Fallback if language is not supported
            if (!isSupportedLanguage) {
                language = this.defaultLanguage;
            }
            log.debug("Language set to " + language);
            this.translateService.use(language);
        },
        enumerable: true,
        configurable: true
    });
    return I18nService;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, extract, I18nService, HTTP_DYNAMIC_INTERCEPTORS, HttpService, HttpCacheService, ApiPrefixInterceptor, CacheInterceptor, ErrorHandlerInterceptor, RouteReusableStrategy, LogLevel, Logger, AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.service */ "./src/app/core/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_1__["extract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"]; });

/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HTTP_DYNAMIC_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]; });

/* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http/http-cache.service */ "./src/app/core/http/http-cache.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return _http_http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"]; });

/* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http/api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]; });

/* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http/cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_5__["CacheInterceptor"]; });

/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlerInterceptor"]; });

/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_7__["RouteReusableStrategy"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_8__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_8__["Logger"]; });

/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.service */ "./src/app/core/app.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return _app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]; });


//export * from './authentication/authentication.service';
//export * from './authentication/authentication.service.mock';
//export * from './authentication/authentication.guard';











/***/ }),

/***/ "./src/app/core/logger.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
/*! exports provided: LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects, 'DEBUG');
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects, 'INFO');
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects, 'WARN');
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects, 'ERROR');
    };
    Logger.prototype.log = function (func, level, objects, desc) {
        var _this = this;
        if (level <= Logger.level) {
            var options = {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
            var today = new Date();
            var log = this.source
                ? ['[' + today.toLocaleDateString('en-US', options) + '][' + desc + '][' + this.source + ']'].concat(objects)
                : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
            console.log(func);
            this.post('/frontend_editor/app/log', log.toString(), null);
        }
    };
    Logger.prototype.post = function (theUrl, dataUrlEncoded, callback) {
        var xmlHttp = new XMLHttpRequest();
        console.log(theUrl, dataUrlEncoded);
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                if (callback) {
                    console.log('LOGIN-RESPONSE(' + xmlHttp.status + '): ' + xmlHttp.responseText, xmlHttp);
                    callback(xmlHttp.response, xmlHttp.status);
                }
            }
        };
        xmlHttp.open('POST', theUrl, true); // true for asynchronous
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlHttp.send(dataUrlEncoded);
    };
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    Logger.level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    Logger.outputs = [];
    return Logger;
}());



/***/ }),

/***/ "./src/app/core/route-reusable-strategy.ts":
/*!*************************************************!*\
  !*** ./src/app/core/route-reusable-strategy.ts ***!
  \*************************************************/
/*! exports provided: RouteReusableStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return RouteReusableStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
var RouteReusableStrategy = /** @class */ (function (_super) {
    __extends(RouteReusableStrategy, _super);
    function RouteReusableStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteReusableStrategy.prototype.shouldDetach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.store = function (route, detachedTree) { };
    RouteReusableStrategy.prototype.shouldAttach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.retrieve = function (route) {
        return null;
    };
    RouteReusableStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig || future.data.reuse;
    };
    return RouteReusableStrategy;
}(_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteReuseStrategy"]));



/***/ }),

/***/ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PAGE_ABAEAFRoutingModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_ABAEAFRoutingModule", function() { return PAGE_ABAEAFRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _PAGE_ABAEAF_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PAGE_ABAEAF.component */ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.ts");
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shell/shell.service */ "./src/app/shell/shell.service.ts");




var ɵ0 = { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_1__["extract"])('PAGE_ABAEAF') };
var routes = [
    _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_3__["Shell"].childRoutes([
        { path: '', redirectTo: '/PAGE_ABAEAF', pathMatch: 'full' },
        { path: 'PAGE_ABAEAF', component: _PAGE_ABAEAF_component__WEBPACK_IMPORTED_MODULE_2__["PAGE_ABAEAFComponent"], data: ɵ0 }
    ])
];
var PAGE_ABAEAFRoutingModule = /** @class */ (function () {
    function PAGE_ABAEAFRoutingModule() {
    }
    return PAGE_ABAEAFRoutingModule;
}());




/***/ }),

/***/ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_PAGE_ABAEAFComponent, View_PAGE_ABAEAFComponent_0, View_PAGE_ABAEAFComponent_Host_0, PAGE_ABAEAFComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PAGE_ABAEAFComponent", function() { return RenderType_PAGE_ABAEAFComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PAGE_ABAEAFComponent_0", function() { return View_PAGE_ABAEAFComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PAGE_ABAEAFComponent_Host_0", function() { return View_PAGE_ABAEAFComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_ABAEAFComponentNgFactory", function() { return PAGE_ABAEAFComponentNgFactory; });
/* harmony import */ var _PAGE_ABAEAF_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PAGE_ABAEAF.component.scss.shim.ngstyle */ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _node_modules_swimlane_ngx_charts_release_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/@swimlane/ngx-charts/release/line-chart/line-chart.component.ngfactory */ "../node_modules/@swimlane/ngx-charts/release/line-chart/line-chart.component.ngfactory.js");
/* harmony import */ var _swimlane_ngx_charts_release_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts/release/line-chart/line-chart.component */ "../node_modules/@swimlane/ngx-charts/release/line-chart/line-chart.component.js");
/* harmony import */ var _PAGE_ABAEAF_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PAGE_ABAEAF.component */ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/app.service */ "./src/app/core/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_PAGE_ABAEAFComponent = [_PAGE_ABAEAF_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PAGE_ABAEAFComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PAGE_ABAEAFComponent, data: {} });

function View_PAGE_ABAEAFComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 41, "div", [["class", "container"], ["style", "min-width: 100%; width: 100%; margin: 0!important;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 35, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\t\n\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 32, "table", [["style", "width:100%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 29, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 17, "td", [["style", "display: flex; height: 50vh;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 14, "div", [["style", "display: flex; flex-direction: column; justify-content: space-around; text-align: left; height: 20vh;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["style", "display: flex; text-align: center; flex-direction: column; align-items: center;  justify-content: center;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", "  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "div", [["id", "machine_name_8F3DA4_6SJDIr7vREWK0q9UT34OBQ"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "div", [["style", "display: flex; text-align: center; flex-direction: column; align-items: center;  justify-content: center;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, null, [" ", "  "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 0, "div", [["id", "sensor_id_8F3DA4_6SJDIr7vREWK0q9UT34OBQ"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 7, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 4, "ngx-charts-line-chart", [], null, [[null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("mouseleave" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).hideCircles() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_swimlane_ngx_charts_release_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_LineChartComponent_0"], _node_modules_swimlane_ngx_charts_release_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_LineChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 4898816, null, 2, _swimlane_ngx_charts_release_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { results: [0, "results"], view: [1, "view"], scheme: [2, "scheme"], legend: [3, "legend"], xAxis: [4, "xAxis"], yAxis: [5, "yAxis"], showXAxisLabel: [6, "showXAxisLabel"], showYAxisLabel: [7, "showYAxisLabel"], xAxisLabel: [8, "xAxisLabel"], yAxisLabel: [9, "yAxisLabel"], autoScale: [10, "autoScale"], gradient: [11, "gradient"], yScaleMin: [12, "yScaleMin"], yScaleMax: [13, "yScaleMax"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { tooltipTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { seriesTooltipTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t\t\t\n\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.multi_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_3 = _co.view_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_4 = _co.colorScheme_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_5 = _co.showLegend_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_6 = _co.showXAxis_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_7 = _co.showYAxis_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_8 = _co.showXAxisLabel_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_9 = _co.showYAxisLabel_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_10 = _co.xAxisLabel_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_11 = _co.yAxisLabel_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_12 = _co.autoScale_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_13 = _co.gradient_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_14 = _co.yScaleMin_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; var currVal_15 = _co.yScaleMax_8F3DA4_6SJDIr7vREWK0q9UT34OBQ; _ck(_v, 31, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("MACHINE_NAME")); _ck(_v, 14, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).transform("SENSOR_ID")); _ck(_v, 20, 0, currVal_1); }); }
function View_PAGE_ABAEAFComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-PAGE_ABAEAF", [], null, null, null, View_PAGE_ABAEAFComponent_0, RenderType_PAGE_ABAEAFComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _PAGE_ABAEAF_component__WEBPACK_IMPORTED_MODULE_5__["PAGE_ABAEAFComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _core_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PAGE_ABAEAFComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-PAGE_ABAEAF", _PAGE_ABAEAF_component__WEBPACK_IMPORTED_MODULE_5__["PAGE_ABAEAFComponent"], View_PAGE_ABAEAFComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.scss.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.scss.shim.ngstyle.js ***!
  \******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1em;\n  min-width: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 150px;\n  margin: 0 auto;\n}\nq[_ngcontent-%COMP%] {\n  font-style: italic;\n  quotes: \"\u00AB \" \" \u00BB\";\n}\n.sensor_alert[_ngcontent-%COMP%] {\n  padding: 1vw;\n  background-color: #f44336;\n  color: white;\n  text-align: center;\n  margin: 1vw;\n  border-radius: 25px;\n  border: 1px solid;\n}\n.sensor_okay[_ngcontent-%COMP%] {\n  padding: 1vw;\n  background-color: #8ADC5B;\n  color: white;\n  text-align: center;\n  margin: 1vw;\n  border-radius: 25px;\n  border: 1px solid;\n}\n.sensor_greyed[_ngcontent-%COMP%] {\n  padding: 1vw;\n  background-color: white;\n  color: grey;\n  text-align: center;\n  margin: 1vw;\n  border-radius: 25px;\n  border: 1px solid;\n}"];



/***/ }),

/***/ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.component.ts ***!
  \************************************************************/
/*! exports provided: PAGE_ABAEAFComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_ABAEAFComponent", function() { return PAGE_ABAEAFComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





//JS-IMPORT
var log = new _app_core__WEBPACK_IMPORTED_MODULE_2__["Logger"]('App');
var PAGE_ABAEAFComponent = /** @class */ (function () {
    //JS-ATTR-END-8F3DA4_6SJDIr7vREWK0q9UT34OBQ
    //JS-ATTR-MARKER
    function PAGE_ABAEAFComponent(router, appService, translate) {
        this.router = router;
        this.appService = appService;
        this.translate = translate;
        this.view_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = [(window.innerWidth * 0.7) - 44, window.innerHeight * 0.8];
        this.showXAxis_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = true;
        this.showYAxis_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = true;
        this.gradient_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = false;
        this.showLegend_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = false;
        this.showXAxisLabel_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = true;
        this.yScaleMin_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = 0;
        this.yScaleMax_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = 1000;
        this.xAxisLabel_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = 'Time';
        this.showYAxisLabel_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = true;
        this.yAxisLabel_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = 'Workload';
        this.colorScheme_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = { "domain": ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };
        this.source_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = '/vffinalreview/api/graph';
        this.autoScale_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = true;
    }
    PAGE_ABAEAFComponent.prototype.ngOnInit = function () {
        //JS-INIT-8F3DA4_6SJDIr7vREWK0q9UT34OBQ
        this.init_linechart_8F3DA4_6SJDIr7vREWK0q9UT34OBQ();
        //JS-INIT-END-8F3DA4_6SJDIr7vREWK0q9UT34OBQ
        //JS-INIT-MARKER
    };
    //JS-FNKT-8F3DA4_6SJDIr7vREWK0q9UT34OBQy		
    PAGE_ABAEAFComponent.prototype.init_linechart_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = function () {
        var _this = this;
        if (this.source_8F3DA4_6SJDIr7vREWK0q9UT34OBQ !== "none") {
            this.getData_8F3DA4_6SJDIr7vREWK0q9UT34OBQ();
            this.interval_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = setInterval(function () {
                if (document.getElementById("machine_name_8F3DA4_6SJDIr7vREWK0q9UT34OBQ") == null) {
                    clearInterval(_this.interval_8F3DA4_6SJDIr7vREWK0q9UT34OBQ);
                }
                else {
                    _this.getData_8F3DA4_6SJDIr7vREWK0q9UT34OBQ();
                }
            }, 2500);
        }
    };
    PAGE_ABAEAFComponent.prototype.getData_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = function () {
        var xmlHttp = new XMLHttpRequest();
        var env_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = this;
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                var data = JSON.parse(xmlHttp.response);
                env_8F3DA4_6SJDIr7vREWK0q9UT34OBQ.multi_8F3DA4_6SJDIr7vREWK0q9UT34OBQ = data.list_of_rows;
                document.getElementById("machine_name_8F3DA4_6SJDIr7vREWK0q9UT34OBQ").innerHTML = "<b>" + data.sensor_name + "</b>";
                document.getElementById("sensor_id_8F3DA4_6SJDIr7vREWK0q9UT34OBQ").innerHTML = "<b>" + data.sensor_id + "</b>";
                //	document.getElementById("sensor_name_8F3DA4_6SJDIr7vREWK0q9UT34OBQ").innerHTML = "<b>"+env_8F3DA4_6SJDIr7vREWK0q9UT34OBQ.multi_8F3DA4_6SJDIr7vREWK0q9UT34OBQ[0].name+"</b>";
                //	document.getElementById("sensor_alert_8F3DA4_6SJDIr7vREWK0q9UT34OBQ").className  = ((env_8F3DA4_6SJDIr7vREWK0q9UT34OBQ.multi_8F3DA4_6SJDIr7vREWK0q9UT34OBQ[0].series[0].value) >= 300) ? "sensor_alert" : "sensor_greyed";
                //	document.getElementById("sensor_okay_8F3DA4_6SJDIr7vREWK0q9UT34OBQ").className  = ((env_8F3DA4_6SJDIr7vREWK0q9UT34OBQ.multi_8F3DA4_6SJDIr7vREWK0q9UT34OBQ[0].series[0].value) < 300) ? "sensor_okay" : "sensor_greyed";
            }
        };
        xmlHttp.open('GET', this.source_8F3DA4_6SJDIr7vREWK0q9UT34OBQ.toLowerCase(), true); // true for asynchronous
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttp.send();
    };
    return PAGE_ABAEAFComponent;
}());



/***/ }),

/***/ "./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/PAGE_ABAEAF/PAGE_ABAEAF.module.ts ***!
  \*********************************************************/
/*! exports provided: PAGE_ABAEAFModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_ABAEAFModule", function() { return PAGE_ABAEAFModule; });
//import { AbTipscreenLibModule } from 'ab-tipscreen-lib';
var PAGE_ABAEAFModule = /** @class */ (function () {
    function PAGE_ABAEAFModule() {
    }
    return PAGE_ABAEAFModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shell/header/header.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/shell/header/header.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/shell/header/header.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.component */ "./src/app/shell/header/header.component.ts");
/* harmony import */ var _core_i18n_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/i18n.service */ "./src/app/core/i18n.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "dropdown-item"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setLanguage(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\n              ", "\n            "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 90, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 87, "nav", [["class", "navbar navbar-expand-lg navbar-dark appcolor"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "button", [["aria-controls", "navbar-menu"], ["aria-label", "Toggle navigation"], ["class", "navbar-toggler"], ["type", "button"]], [[1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleMenu() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "span", [["class", "navbar-toggler-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "a", [["class", "navbar-brand"], ["style", "color: white;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 75, "div", [["class", "collapse navbar-collapse float-xs-none"], ["id", "navbar-menu"]], [[2, "collapse", null], [2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], [], { collapsed: [0, "collapsed"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 18, "div", [["class", "navbar-nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\t\n\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 11, "a", [["class", "nav-item nav-link text-uppercase"], ["routerLink", "/PAGE_ABAEAF"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.toggleMenu() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \n\t\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "i", [["class", "fas fa-home"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \n\t\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \n\t\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \n\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\t\n\t\t"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\t "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 51, "div", [["class", "navbar-nav ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 16, "div", [["class", "nav-item"], ["ngbDropdown", ""], ["placement", "bottom-right"]], [[2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 212992, null, 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placement: [0, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { _menu: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { _anchor: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 3, "a", [["aria-haspopup", "true"], ["class", "nav-link dropdown-toggle"], ["id", "language-dropdown"], ["ngbDropdownToggle", ""]], [[1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).toggleOpen() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵr"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[4, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵq"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵr"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](46, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 5, "div", [["aria-labelledby", "language-dropdown"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, [[3, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵp"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HeaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 30, "div", [["class", "nav-item"], ["ngbDropdown", ""], ["placement", "bottom-right"]], [[2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](57, 212992, null, 2, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownConfig"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placement: [0, "placement"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { _menu: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { _anchor: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 5, "a", [["aria-haspopup", "true"], ["class", "nav-link dropdown-toggle"], ["id", "user-dropdown"], ["ngbDropdownToggle", ""]], [[1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).toggleOpen() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵr"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[6, 4]], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵq"], null, [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵr"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 0, "i", [["class", "fas fa-user-circle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 17, "div", [["aria-labelledby", "user-dropdown"], ["ngbDropdownMenu", ""]], [[2, "dropdown-menu", null], [2, "show", null], [1, "x-placement", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 16384, [[5, 4]], 0, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ɵp"], [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 7, "h6", [["class", "dropdown-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n              "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 2, "span", [["translate", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logged in as"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](78, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 0, "div", [["class", "dropdown-divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 2, "button", [["class", "dropdown-item"], ["translate", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.logout() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 8536064, null, 0, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateDirective"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { translate: [0, "translate"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n          "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n      "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n  "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.menuHidden; _ck(_v, 14, 0, currVal_4); var currVal_7 = "/PAGE_ABAEAF"; _ck(_v, 21, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 22, 0, currVal_8); var currVal_11 = "bottom-right"; _ck(_v, 39, 0, currVal_11); var currVal_17 = _co.languages; _ck(_v, 52, 0, currVal_17); var currVal_19 = "bottom-right"; _ck(_v, 57, 0, currVal_19); var currVal_24 = ""; _ck(_v, 74, 0, currVal_24); var currVal_26 = ""; _ck(_v, 83, 0, currVal_26); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.menuHidden; _ck(_v, 4, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).transform("APPNAME")); _ck(_v, 10, 0, currVal_1); var currVal_2 = true; var currVal_3 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).collapsed; _ck(_v, 13, 0, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).href; _ck(_v, 20, 0, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).transform("PAGE")); _ck(_v, 29, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).isOpen(); _ck(_v, 38, 0, currVal_10); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 44).dropdown.isOpen(); _ck(_v, 43, 0, currVal_12); var currVal_13 = _co.currentLanguage; _ck(_v, 46, 0, currVal_13); var currVal_14 = true; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).dropdown.isOpen(); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).placement; _ck(_v, 48, 0, currVal_14, currVal_15, currVal_16); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57).isOpen(); _ck(_v, 56, 0, currVal_18); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).dropdown.isOpen(); _ck(_v, 61, 0, currVal_20); var currVal_21 = true; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).dropdown.isOpen(); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).placement; _ck(_v, 68, 0, currVal_21, currVal_22, currVal_23); var currVal_25 = _co.username; _ck(_v, 78, 0, currVal_25); }); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_i18n_service__WEBPACK_IMPORTED_MODULE_7__["I18nService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shell/header/header.component.scss.shim.ngstyle.js":
/*!********************************************************************!*\
  !*** ./src/app/shell/header/header.component.scss.shim.ngstyle.js ***!
  \********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".navbar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: start;\n}\n.nav-link.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100%;\n}\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='15' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n}\nspan[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}"];



/***/ }),

/***/ "./src/app/shell/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shell/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, i18nService) {
        this.router = router;
        this.i18nService = i18nService;
        this.menuHidden = true;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuHidden = !this.menuHidden;
    };
    HeaderComponent.prototype.setLanguage = function (language) {
        this.i18nService.language = language;
    };
    HeaderComponent.prototype.logout = function () {
        // this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
    };
    Object.defineProperty(HeaderComponent.prototype, "currentLanguage", {
        get: function () {
            return this.i18nService.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "languages", {
        get: function () {
            return this.i18nService.supportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "username", {
        get: function () {
            //  const credentials = this.authenticationService.credentials;
            return 'test'; //credentials ? credentials.username : null;
        },
        enumerable: true,
        configurable: true
    });
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/shell/shell.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_ShellComponent, View_ShellComponent_0, View_ShellComponent_Host_0, ShellComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShellComponent", function() { return RenderType_ShellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShellComponent_0", function() { return View_ShellComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShellComponent_Host_0", function() { return View_ShellComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponentNgFactory", function() { return ShellComponentNgFactory; });
/* harmony import */ var _shell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell.component.scss.shim.ngstyle */ "./src/app/shell/shell.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component.ngfactory */ "./src/app/shell/header/header.component.ngfactory.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shell/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/i18n.service */ "./src/app/core/i18n.service.ts");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shell.component */ "./src/app/shell/shell.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_ShellComponent = [_shell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShellComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShellComponent, data: {} });

function View_ShellComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_HeaderComponent_0"], _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_i18n_service__WEBPACK_IMPORTED_MODULE_5__["I18nService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 4, 0); }, null); }
function View_ShellComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-shell", [], null, null, null, View_ShellComponent_0, RenderType_ShellComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shell_component__WEBPACK_IMPORTED_MODULE_6__["ShellComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShellComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-shell", _shell_component__WEBPACK_IMPORTED_MODULE_6__["ShellComponent"], View_ShellComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shell/shell.component.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/shell/shell.component.scss.shim.ngstyle.js ***!
  \************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];



/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");

var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () { };
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.module.ts":
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
var ShellModule = /** @class */ (function () {
    function ShellModule() {
    }
    return ShellModule;
}());



/***/ }),

/***/ "./src/app/shell/shell.service.ts":
/*!****************************************!*\
  !*** ./src/app/shell/shell.service.ts ***!
  \****************************************/
/*! exports provided: Shell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shell", function() { return Shell; });
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell.component */ "./src/app/shell/shell.component.ts");
//import { AuthenticationGuard } from '@app/core';

/**
 * Provides helper methods to create routes.
 */
var Shell = /** @class */ (function () {
    function Shell() {
    }
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return The new route using shell as the base.
     */
    Shell.childRoutes = function (routes) {
        return {
            path: '',
            component: _shell_component__WEBPACK_IMPORTED_MODULE_0__["ShellComponent"],
            children: routes,
            // canActivate: [AuthenticationGuard],
            // Reuse ShellComponent instance when navigating between child views
            data: { reuse: true }
        };
    };
    return Shell;
}());



/***/ }),

/***/ "./src/environments/.env.ts":
/*!**********************************!*\
  !*** ./src/environments/.env.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    'npm_package_version': '1.0.0'
});


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.env */ "./src/environments/.env.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// `.env.ts` is generated by the `npm run env` command

var environment = {
    production: false,
    version: _env__WEBPACK_IMPORTED_MODULE_0__["default"].npm_package_version + '-dev',
    serverUrl: '/api',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US', 'de-DE', 'es-ES', 'pt-PT', 'fr-FR', 'nl-NL']
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"]);


/***/ }),

/***/ "./src/translations/de-DE.json":
/*!*************************************!*\
  !*** ./src/translations/de-DE.json ***!
  \*************************************/
/*! exports provided: APPNAME, ABOUT, ABOUT_DESCRIPTION, ABOUT_DESCRIPTION2, ALM, ASC, CMS, ICE, KBZ, UNINOVA, AUTHOR_NAME, AUTHOR_EMAIL, HELLO, HOME, PAGE, VERSION, LOGIN, PASSWORD, EMAIL, DETECTED_ERRORS, FIRSTNAME, LASTNAME, LANGUAGE, REGISTER, OLD_PASSWORD, NEW_PASSWORD, CONFIRM_PASSWORD, CHANGE_PASSWORD, GOOGLE_URL, NOTIFY, CLICK, ACTIVATED, DEACTIVATED, LOAD_DATA, REALTIME_DATA, HISTORIC_DATA, VAPP, AUTHOR, ALERT, ALL_OKAY, MACHINE_NAME, SENSOR_ID, SENSOR_NAME, LOG_INFORMATION, LOG_ERROR, DOWNLOAD, REPORT_ERRORLOG, SENT_TO, REMIND_LATER, SUBMIT, INPUT_WAS, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"APPNAME\":\"Browser\",\"ABOUT\":\"Über uns\",\"ABOUT_DESCRIPTION\":\"Diese vApp, vfVibrationSensor, ist eine Anwendung, die entwickelt wurde, um das Verhalten einer Maschine zu verfolgen und Alarme auszulösen, wenn ein Messwert über einem bestimmten Schwellenwert liegt.\",\"ABOUT_DESCRIPTION2\":\"Entwickelt mit vf-Studio und seinen Ergänzungen Process Designer, Frontend Environment oder Messaging und Pub / Sub\",\"ALM\":\"ALM: Ludo Stellingwerff\",\"ASC\":\"ASC: Danny Pape, Gerrit Klasen\",\"CMS\":\"CMS: Miguel Tavares\",\"ICE\":\"ICE: José Luis Alfonso\",\"KBZ\":\"KBZ: David Alexio\",\"UNINOVA\":\"Uninova: Joao Gaio\",\"AUTHOR_NAME\":\"vf-OS Entwickler\",\"AUTHOR_EMAIL\":\"vfos.h2020@gmail.com\",\"HELLO\":\"Hallo Welt!\",\"HOME\":\"Home\",\"PAGE\":\"Seite ???\",\"VERSION\":\"Version\",\"LOGIN\":\"Einloggen\",\"PASSWORD\":\"Passwort\",\"EMAIL\":\"E-Mail\",\"DETECTED_ERRORS\":\"Erkannte Fehler\",\"FIRSTNAME\":\"Vorname\",\"LASTNAME\":\"Nachname\",\"LANGUAGE\":\"Sprache\",\"REGISTER\":\"Registrieren\",\"OLD_PASSWORD\":\"Altes Passwort\",\"NEW_PASSWORD\":\"Neues Passwort\",\"CONFIRM_PASSWORD\":\"Passwort bestätigen\",\"CHANGE_PASSWORD\":\"Passwort ändern\",\"GOOGLE_URL\":\"https://www.google.com\",\"NOTIFY\":\"Benachrichtige mich!\",\"CLICK\":\"Ich wurde geklickt!\",\"ACTIVATED\":\"Ich wurde aktiviert!\",\"DEACTIVATED\":\"Ich wurde deaktiviert!\",\"LOAD_DATA\":\"Daten laden\",\"REALTIME_DATA\":\"Echtzeit-Daten\",\"HISTORIC_DATA\":\"historische Daten\",\"VAPP\":\"vApp\",\"AUTHOR\":\"Autor\",\"ALERT\":\"Alarm\",\"ALL_OKAY\":\"Kein Zwischenfall\",\"MACHINE_NAME\":\"Maschinenname\",\"SENSOR_ID\":\"Sensor ID\",\"SENSOR_NAME\":\"Sensorname\",\"LOG_INFORMATION\":\"Logge Information\",\"LOG_ERROR\":\"Logge Fehler\",\"DOWNLOAD\":\"Download\",\"REPORT_ERRORLOG\":\"Fehlerbericht\",\"SENT_TO\":\"Gesendet an \",\"REMIND_LATER\":\"Klicken für erneute Erinnerung in 5 Minuten.\",\"SUBMIT\":\"Abschicken\",\"INPUT_WAS\":\"Eingabe war\"}");

/***/ }),

/***/ "./src/translations/en-US.json":
/*!*************************************!*\
  !*** ./src/translations/en-US.json ***!
  \*************************************/
/*! exports provided: APPNAME, ABOUT, ABOUT_DESCRIPTION, ABOUT_DESCRIPTION2, ALM, ASC, CMS, ICE, KBZ, UNINOVA, AUTHOR_EMAIL, HELLO, HOME, PAGE, VERSION, LOGIN, PASSWORD, EMAIL, DETECTED_ERRORS, FIRSTNAME, LASTNAME, LANGUAGE, REGISTER, OLD_PASSWORD, NEW_PASSWORD, CONFIRM_PASSWORD, CHANGE_PASSWORD, GOOGLE_URL, NOTIFY, CLICK, ACTIVATED, DEACTIVATED, LOAD_DATA, REALTIME_DATA, HISTORIC_DATA, VAPP, AUTHOR, ALERT, ALL_OKAY, MACHINE_NAME, SENSOR_ID, SENSOR_NAME, LOG_INFORMATION, LOG_ERROR, DOWNLOAD, REPORT_ERRORLOG, SENT_TO, REMIND_LATER, SUBMIT, INPUT_WAS, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"APPNAME\":\"Browser\",\"ABOUT\":\"About\",\"ABOUT_DESCRIPTION\":\"This vApp, vfVibrationSensor, is an application developed to track the behaviour of a machine and trigger alarms i a reading is abouve a given threshold.\",\"ABOUT_DESCRIPTION2\":\"Developed using vf-Studio and its complements Process Designer, Frontend Environment or Messaging and Pub/Sub\",\"ALM\":\"ALM: Ludo Stellingwerff\",\"ASC\":\"ASC: Danny Pape, Gerrit Klasen\",\"CMS\":\"CMS: Miguel Tavares\",\"ICE\":\"ICE: José Luis Alfonso\",\"KBZ\":\"KBZ: David Alexio\",\"UNINOVA\":\"Uninova: Joao Gaio\",\"AUTHOR_EMAIL\":\"vfos.h2020@gmail.com\",\"HELLO\":\"Hello world !\",\"HOME\":\"Home\",\"PAGE\":\"Page ???\",\"VERSION\":\"Version\",\"LOGIN\":\"Login\",\"PASSWORD\":\"Password\",\"EMAIL\":\"E-Mail\",\"DETECTED_ERRORS\":\"Detected Errors\",\"FIRSTNAME\":\"Firstname\",\"LASTNAME\":\"Lastname\",\"LANGUAGE\":\"Language\",\"REGISTER\":\"Register\",\"OLD_PASSWORD\":\"Old Password\",\"NEW_PASSWORD\":\"New Password\",\"CONFIRM_PASSWORD\":\"Confirm Password\",\"CHANGE_PASSWORD\":\"Change Passwort\",\"GOOGLE_URL\":\"https://www.google.com\",\"NOTIFY\":\"Notify me!\",\"CLICK\":\"I was clicked!\",\"ACTIVATED\":\"I was activated!\",\"DEACTIVATED\":\"I was deactivated!\",\"LOAD_DATA\":\"Load data!\",\"REALTIME_DATA\":\"Realtime-Data\",\"HISTORIC_DATA\":\"Historic-Data\",\"VAPP\":\"vApp\",\"AUTHOR\":\"Development Team:\",\"ALERT\":\"Alert\",\"ALL_OKAY\":\"No Incident\",\"MACHINE_NAME\":\"Maschine Name\",\"SENSOR_ID\":\"Sensor ID\",\"SENSOR_NAME\":\"Sensor Name\",\"LOG_INFORMATION\":\"Log Information\",\"LOG_ERROR\":\"Log Error\",\"DOWNLOAD\":\"Download\",\"REPORT_ERRORLOG\":\"Error Report\",\"SENT_TO\":\"Sent to \",\"REMIND_LATER\":\"Click to remind again in 5 Minutes.\",\"SUBMIT\":\"Submit\",\"INPUT_WAS\":\"Input was\"}");

/***/ }),

/***/ "./src/translations/es-ES.json":
/*!*************************************!*\
  !*** ./src/translations/es-ES.json ***!
  \*************************************/
/*! exports provided: APPNAME, ABOUT, ABOUT_DESCRIPTION, ABOUT_DESCRIPTION2, ALM, ASC, CMS, ICE, KBZ, UNINOVA, AUTHOR_NAME, AUTHOR_EMAIL, HELLO, HOME, PAGE, VERSION, LOGIN, PASSWORD, EMAIL, DETECTED_ERRORS, FIRSTNAME, LASTNAME, LANGUAGE, REGISTER, OLD_PASSWORD, NEW_PASSWORD, CONFIRM_PASSWORD, CHANGE_PASSWORD, GOOGLE_URL, NOTIFY, CLICK, ACTIVATED, DEACTIVATED, LOAD_DATA, REALTIME_DATA, HISTORIC_DATA, VAPP, AUTHOR, ALERT, ALL_OKAY, MACHINE_NAME, SENSOR_ID, SENSOR_NAME, LOG_INFORMATION, LOG_ERROR, DOWNLOAD, REPORT_ERRORLOG, SENT_TO, REMIND_LATER, SUBMIT, INPUT_WAS, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"APPNAME\":\"Navegador\",\"ABOUT\":\"Acerca de\",\"ABOUT_DESCRIPTION\":\"Esta vApp, vfVibrationSensor, es una aplicación desarrollada para rastrear el comportamiento de una máquina y activar alar\",\"ABOUT_DESCRIPTION2\":\"Desarrollado con vf-Studio y sus complementos Process Designer, Frontend Environment o Messaging y Pub / Sub\",\"ALM\":\"ALM: Ludo Stellingwerff\",\"ASC\":\"ASC: Danny Pape, Gerrit Klasen\",\"CMS\":\"CMS: Miguel Tavares\",\"ICE\":\"ICE: José Luis Alfonso\",\"KBZ\":\"KBZ: David Alexio\",\"UNINOVA\":\"Uninova: Joao Gaio\",\"AUTHOR_NAME\":\"Desarrollador vf-OS\",\"AUTHOR_EMAIL\":\"vfos.h2020@gmail.com\",\"HELLO\":\"¡Hola mundo!\",\"HOME\":\"Hogar\",\"PAGE\":\"Página ???\",\"VERSION\":\"Versión\",\"LOGIN\":\"Iniciar sesión\",\"PASSWORD\":\"Contraseña\",\"EMAIL\":\"Correo electrónico\",\"DETECTED_ERRORS\":\"errores detectados\",\"FIRSTNAME\":\"Nombre\",\"LASTNAME\":\"Apellido\",\"LANGUAGE\":\"Idioma idioma\",\"REGISTER\":\"Registrarse\",\"OLD_PASSWORD\":\"Contraseña anterior\",\"NEW_PASSWORD\":\"Nueva contraseña\",\"CONFIRM_PASSWORD\":\"Confirmar contraseña\",\"CHANGE_PASSWORD\":\"Cambiar contraseña\",\"GOOGLE_URL\":\"https://www.google.com\",\"NOTIFY\":\"¡Notificarme!\",\"CLICK\":\"¡Me hicieron clic!\",\"ACTIVATED\":\"¡Fui activado!\",\"DEACTIVATED\":\"¡Estaba desactivado!\",\"LOAD_DATA\":\"¡Cargar datos!\",\"REALTIME_DATA\":\"Datos en tiempo real\",\"HISTORIC_DATA\":\"Datos históricos\",\"VAPP\":\"vApp\",\"AUTHOR\":\"Autor\",\"ALERT\":\"Alerta\",\"ALL_OKAY\":\"Sin incidentes\",\"MACHINE_NAME\":\"Nombre de la máquina\",\"SENSOR_ID\":\"ID del sensor\",\"SENSOR_NAME\":\"Nombre del sensor\",\"LOG_INFORMATION\":\"Información de registro\",\"LOG_ERROR\":\"Error de registro\",\"DOWNLOAD\":\"Descargar\",\"REPORT_ERRORLOG\":\"Informe de error\",\"SENT_TO\":\"Enviado a\",\"REMIND_LATER\":\"Haga clic para recordar nuevamente en 5 minutos\",\"SUBMIT\":\"Enviar\",\"INPUT_WAS\":\"La entrada fue\"}");

/***/ }),

/***/ "./src/translations/fr-FR.json":
/*!*************************************!*\
  !*** ./src/translations/fr-FR.json ***!
  \*************************************/
/*! exports provided: APPNAME, ABOUT, ABOUT_DESCRIPTION, ABOUT_DESCRIPTION2, ALM, ASC, CMS, ICE, KBZ, UNINOVA, AUTHOR_NAME, AUTHOR_EMAIL, HELLO, HOME, PAGE, VERSION, LOGIN, PASSWORD, EMAIL, DETECTED_ERRORS, FIRSTNAME, LASTNAME, LANGUAGE, REGISTER, OLD_PASSWORD, NEW_PASSWORD, CONFIRM_PASSWORD, CHANGE_PASSWORD, GOOGLE_URL, NOTIFY, CLICK, ACTIVATED, DEACTIVATED, LOAD_DATA, REALTIME_DATA, HISTORIC_DATA, VAPP, AUTHOR, ALERT, ALL_OKAY, MACHINE_NAME, SENSOR_ID, SENSOR_NAME, LOG_INFORMATION, LOG_ERROR, DOWNLOAD, REPORT_ERRORLOG, SENT_TO, REMIND_LATER, SUBMIT, INPUT_WAS, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"APPNAME\":\"Navigateur\",\"ABOUT\":\"À propos\",\"ABOUT_DESCRIPTION\":\"Ce vApp, vfVibrationSensor, est une application développée pour suivre le comportement d'une machine et déclencher des alarmes.\",\"ABOUT_DESCRIPTION2\":\"Développé à l'aide de vf-Studio et de ses compléments Process Designer, Frontend Environment ou Messaging et Pub / Sub\",\"ALM\":\"ALM: Ludo Stellingwerff\",\"ASC\":\"ASC: Danny Pape, Gerrit Klasen\",\"CMS\":\"CMS: Miguel Tavares\",\"ICE\":\"ICE: José Luis Alfonso\",\"KBZ\":\"KBZ: David Alexio\",\"UNINOVA\":\"Uninova: Joao Gaio\",\"AUTHOR_NAME\":\"vf-OS Developer\",\"AUTHOR_EMAIL\":\"vfos.h2020@gmail.com\",\"HELLO\":\"Bonjour tout le monde!\",\"HOME\":\"Maison\",\"PAGE\":\"Page ???\",\"VERSION\":\"Version\",\"LOGIN\":\"Connexion\",\"PASSWORD\":\"Mot de passe\",\"EMAIL\":\"E-Mail\",\"DETECTED_ERRORS\":\"Erreurs détectées\",\"FIRSTNAME\":\"Prénom\",\"LASTNAME\":\"Nom de famille\",\"LANGUAGE\":\"Langue\",\"REGISTER\":\"Enregistrer\",\"OLD_PASSWORD\":\"Ancien mot de passe\",\"NEW_PASSWORD\":\"Nouveau mot de passe\",\"CONFIRM_PASSWORD\":\"Confirmer le mot de passe\",\"CHANGE_PASSWORD\":\"Changer le mot de passe\",\"GOOGLE_URL\":\"https://www.google.com\",\"NOTIFY\":\"Prévenez-moi!\",\"CLICK\":\"On m'a cliqué!\",\"ACTIVATED\":\"J'ai été activé!\",\"DEACTIVATED\":\"J'ai été désactivé!\",\"LOAD_DATA\":\"Charger les données!\",\"REALTIME_DATA\":\"Realtime-Data\",\"HISTORIC_DATA\":\"Données historiques\",\"VAPP\":\"vApp\",\"AUTHOR\":\"Auteur\",\"ALERT\":\"Alert\",\"ALL_OKAY\":\"Pas d'incident\",\"MACHINE_NAME\":\"Nom de la machine\",\"SENSOR_ID\":\"ID du capteur\",\"SENSOR_NAME\":\"Nom du capteur\",\"LOG_INFORMATION\":\"Informations du journal\",\"LOG_ERROR\":\"Erreur de journal\",\"DOWNLOAD\":\"Télécharger\",\"REPORT_ERRORLOG\":\"Rapport d'erreur\",\"SENT_TO\":\"Envoyé à\",\"REMIND_LATER\":\"Cliquez pour rappeler à nouveau dans 5 minutes.\",\"SUBMIT\":\"Soumettre\",\"INPUT_WAS\":\"L'entrée était\"}");

/***/ }),

/***/ "./src/translations/nl-NL.json":
/*!*************************************!*\
  !*** ./src/translations/nl-NL.json ***!
  \*************************************/
/*! exports provided: APPNAME, ABOUT, ABOUT_DESCRIPTION, ABOUT_DESCRIPTION2, ALM, ASC, CMS, ICE, KBZ, UNINOVA, AUTHOR_NAME, AUTHOR_EMAIL, HELLO, HOME, PAGE, VERSION, LOGIN, PASSWORD, EMAIL, DETECTED_ERRORS, FIRSTNAME, LASTNAME, LANGUAGE, REGISTREREN, OLD_PASSWORD, NEW_PASSWORD, CONFIRM_PASSWORD, CHANGE_PASSWORD, GOOGLE_URL, NOTIFY, CLICK, ACTIVATED, DEACTIVATED, LOAD_DATA, REALTIME_DATA, HISTORIC_DATA, VAPP, AUTHOR, ALERT, ALL_OKAY, MACHINE_NAME, SENSOR_ID, SENSOR_NAME, LOG_INFORMATION, LOG_ERROR, DOWNLOAD, REPORT_ERRORLOG, SENT_TO, REMIND_LATER, SUBMIT, INPUT_WAS, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"APPNAME\":\"Browser\",\"ABOUT\":\"Wat betreft\",\"ABOUT_DESCRIPTION\":\"Deze vApp, vfVibrationSensor, is een applicatie ontwikkeld om het gedrag van een machine te volgen en alarmen te activeren.\",\"ABOUT_DESCRIPTION2\":\"Ontwikkeld met behulp van vf-Studio en zijn complementen Proces Designer, Frontend Environment of Messaging en Pub / Sub\",\"ALM\":\"ALM: Ludo Stellingwerff\",\"ASC\":\"ASC: Danny Pape, Gerrit Klasen\",\"CMS\":\"CMS: Miguel Tavares\",\"ICE\":\"ICE: José Luis Alfonso\",\"KBZ\":\"KBZ: David Alexio\",\"UNINOVA\":\"Uninova: Joao Gaio\",\"AUTHOR_NAME\":\"vf-OS Developer\",\"AUTHOR_EMAIL\":\"vfos.h2020@gmail.com\",\"HELLO\":\"Hallo wereld!\",\"HOME\":\"huis\",\"PAGE\":\"Pagina ???\",\"VERSION\":\"Version\",\"LOGIN\":\"log in\",\"PASSWORD\":\"Wachtwoord\",\"EMAIL\":\"E-mail\",\"DETECTED_ERRORS\":\"Fouten gedetecteerd\",\"FIRSTNAME\":\"Voornaam\",\"LASTNAME\":\"Achternaam\",\"LANGUAGE\":\"Taal\",\"REGISTREREN\":\"Registreren\",\"OLD_PASSWORD\":\"Oud wachtwoord\",\"NEW_PASSWORD\":\"Nieuw wachtwoord\",\"CONFIRM_PASSWORD\":\"Wachtwoord bevestigen\",\"CHANGE_PASSWORD\":\"Passwort wijzigen\",\"GOOGLE_URL\":\"https://www.google.com\",\"NOTIFY\":\"Waarschuw mij!\",\"CLICK\":\"Er is op mij geklikt!\",\"ACTIVATED\":\"Ik was geactiveerd!\",\"DEACTIVATED\":\"Ik was gedeactiveerd!\",\"LOAD_DATA\":\"Gegevens laden!\",\"REALTIME_DATA\":\"Realtime-Data\",\"HISTORIC_DATA\":\"Historische gegevens\",\"VAPP\":\"vApp\",\"AUTHOR\":\"Auteur\",\"ALERT\":\"Alert\",\"ALL_OKAY\":\"Geen incident\",\"MACHINE_NAME\":\"Maschine-naam\",\"SENSOR_ID\":\"Sensor-ID\",\"SENSOR_NAME\":\"Sensornaam\",\"LOG_INFORMATION\":\"Loginformatie\",\"LOG_ERROR\":\"Logfout\",\"DOWNLOAD\":\"Downloaden\",\"REPORT_ERRORLOG\":\"Foutenrapport\",\"SENT_TO\":\"Verzonden naar\",\"REMIND_LATER\":\"Klik om binnen 5 minuten opnieuw te herinneren.\",\"SUBMIT\":\"Vorleggen\",\"INPUT_WAS\":\"Inbreng was\"}");

/***/ }),

/***/ "./src/translations/pt-PT.json":
/*!*************************************!*\
  !*** ./src/translations/pt-PT.json ***!
  \*************************************/
/*! exports provided: APPNAME, ABOUT, ABOUT_DESCRIPTION, ABOUT_DESCRIPTION2, ALM, ASC, CMS, ICE, KBZ, UNINOVA, AUTHOR_NAME, AUTHOR_EMAIL, HELLO!, HOME, PAGE, VERSION, LOGIN, PASSWORD, EMAIL, DETECTED_ERRORS, FIRSTNAME, LASTNAME, LANGUAGE, REGISTER, OLD_PASSWORD, NEW_PASSWORD, CONFIRM_PASSWORD, CHANGE_PASSWORD, GOOGLE_URL, NOTIFY, CLICK, ACTIVATED, DEACTIVATED, LOAD_DATA, REALTIME_DATA, HISTORIC_DATA, VAPP, AUTHOR, ALERT, ALL_OKAY, MACHINE_NAME, SENSOR_ID, SENSOR_NAME, LOG_INFORMATION, LOG_ERROR, DOWNLOAD, REPORT_ERRORLOG, SENT_TO, REMIND_LATER, SUBMIT, INPUT_WAS, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"APPNAME\":\"Navegador\",\"ABOUT\":\"Sobre\",\"ABOUT_DESCRIPTION\":\"Este vApp, vfVibrationSensor, é um aplicativo desenvolvido para rastrear o comportamento de uma máquina e acionar alarmes em uma leitura acima de um determinado limite.\",\"ABOUT_DESCRIPTION2\":\"Desenvolvido usando o vf-Studio e seus complementos Process Designer, Frontend Environment ou Messaging and Pub / Sub\",\"ALM\":\"ALM: Ludo Stellingwerff\",\"ASC\":\"ASC: Danny Pape, Gerrit Klasen\",\"CMS\":\"CMS: Miguel Tavares\",\"ICE\":\"ICE: José Luis Alfonso\",\"KBZ\":\"KBZ: David Alexio\",\"UNINOVA\":\"Uninova: Joao Gaio\",\"AUTHOR_NAME\":\"desenvolvedor vf-OS\",\"AUTHOR_EMAIL\":\"vfos.h2020@gmail.com\",\"HELLO!\":\"Olá, mundo!\",\"HOME\":\"Home\",\"PAGE\":\"Página ???\",\"VERSION\":\"Version\",\"LOGIN\":\"Login\",\"PASSWORD\":\"Senha\",\"EMAIL\":\"E-mail\",\"DETECTED_ERRORS\":\"Erros detectados\",\"FIRSTNAME\":\"Primeiro Nome\",\"LASTNAME\":\"Sobrenome\",\"LANGUAGE\":\"Language\",\"REGISTER\":\"Register\",\"OLD_PASSWORD\":\"Senha antiga\",\"NEW_PASSWORD\":\"Nova senha\",\"CONFIRM_PASSWORD\":\"Confirmar senha\",\"CHANGE_PASSWORD\":\"Alterar senha\",\"GOOGLE_URL\":\"https://www.google.com\",\"NOTIFY\":\"Notifique-me!\",\"CLICK\":\"Fui clicado!\",\"ACTIVATED\":\"Fui ativado!\",\"DEACTIVATED\":\"Fui desativado!\",\"LOAD_DATA\":\"Carregar dados!\",\"REALTIME_DATA\":\"Dados em tempo real\",\"HISTORIC_DATA\":\"Dados históricos\",\"VAPP\":\"vApp\",\"AUTHOR\":\"Autor\",\"ALERT\":\"Alerta\",\"ALL_OKAY\":\"Nenhum incidente\",\"MACHINE_NAME\":\"Nome do Maschine\",\"SENSOR_ID\":\"ID do sensor\",\"SENSOR_NAME\":\"Nome do sensor\",\"LOG_INFORMATION\":\"Informações do log\",\"LOG_ERROR\":\"Erro de log\",\"DOWNLOAD\":\"Download\",\"REPORT_ERRORLOG\":\"Relatório de erros\",\"SENT_TO\":\"Enviado para\",\"REMIND_LATER\":\"Clique para lembrar novamente em 5 minutos.\",\"SUBMIT\":\"Enviar\",\"INPUT_WAS\":\"A entrada era\"}");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /output/workspacemzkhiihfo101nzux/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);