const sdk = require('../../../bin/libs/vfos-sdk/sdk-include');
const express = require('express');
const router = express.Router();


const vfosMessagingPubsub = sdk.messaging;
const broker = sdk.config.MESSAGING_PUBSUB.SERVER_URL;
const userName = "sensor";
const domain = "eu.efactory.sensor";
const routingKeys = ["eu.efactory.#"];


/**
 * 
 *  begging of section to archive messaging from a topic
 */
var communications = new vfosMessagingPubsub(broker, userName, domain, routingKeys);
let listOfGettingMessages = [];

function messageHandler(msg) {
	topic = msg.routingKey;
	//console.log('topic ', topic);
	switch (msg.content.toString()) {
		case "trigger":
			console.log("> messageHandler: TRIGGER SPECIAL MESSAGE");
			break;
		default:
			console.log("> messageHandler: msg.content = \"" + msg.content.toString() + "\"");
			if (topic == domain) {
				listOfGettingMessages.push({
					mgs: msg.content.toString(),
					date: new Date
				})
			}

			break;
	}
}

communications.sendPublication(domain + ".critical", "trigger");
communications.registerPublicationReceiver(messageHandler);
communications.registerPrivateMessageReceiver(messageHandler);


const myTimer = setInterval(sendMessageViaMessage, 1000 * 2);
function sendMessageViaMessage() {
	console.info('sending new messaging over topic ', domain);
	message = {    
	    data: {
	       "name": "sensorId",
		   "date": new Date(),
		   "x": Math.floor(Math.random() * (400 - 100)) + 100,
		   "y": Math.floor(Math.random() * (400 - 100)) + 100,
		   "z": Math.floor(Math.random() * (400 - 100)) + 100,
	    }
	}
	communications.sendPublication(domain, JSON.stringify(message));
}

module.exports = (app) => router;