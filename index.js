var util = require('util');
var redis = require('redis');
var EventEmitter = require('events').EventEmitter;

function Broker() {
	EventEmitter.call(this);

	this._pubClient = redis.createClient.apply(redis, arguments);
	this._subClient = redis.createClient.apply(redis, arguments);

	this._subClient.on('message', this.emit.bind(this, 'message'));
}

Broker.prototype.subscribe = function (channel) {
	this._subClient.subscribe(channel);
};

Broker.prototype.unsubscribe = function (channel) {
	this._subClient.unsubscribe(channel);
};

Broker.prototype.publish = function (channel, message) {
	this._subClient.publish(channel, message);
};

util.inherits(Broker, EventEmitter);
