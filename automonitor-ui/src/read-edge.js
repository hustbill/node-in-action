'use strict';

const _ = require('lodash');
const Influx = require('influxdb-nodejs');

const client = new Influx('http://127.0.0.1:8086/ican');

// select dpod_name, dpod_namespace, dst, host, spod_name spod_namespace, src, value from p2prxbyte
{
    const reader = client.query('p2prxbyte')
    reader.addField('dpod_name', 'dpod_namespace', 'dst', 'host', 'spod_name', 'spod_namespace', 'src', 'value');
    reader.limit = 2;
    reader.condition('order by time desc');
    reader.fill = 0;
    reader.then(data => {
	    console.info(JSON.stringify(data));
	  }).catch(err => {
	    console.error(err);
	  });

}