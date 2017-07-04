# wsc-redis-broker

A redis broker for [ws-cluster](https://github.com/wscluster/ws-cluster). It allows you to scale `ws-cluster` horizontally across multiple machines.

## Installation

```bash
$ npm install wsc-redis-broker
```

## Usage

```js
var wsc = require('ws-cluster');
var Broker = require('wsc-redis-broker');

var server = wsc.createServer({
	broker: new Broker(6379, 'localhost')
});
```

## API

### new Broker()

Return a redis broker instance. `new Broker()` accepts these arguments:

- `redis.createClient([options])`
- `redis.createClient(unix_socket[, options])`
- `redis.createClient(redis_url[, options])`
- `redis.createClient(port[, host][, options])`

The arguments will be passed to [`redis.createClient()`](https://www.npmjs.com/package/redis#rediscreateclient).
