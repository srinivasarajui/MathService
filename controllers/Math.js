'use strict';

var url = require('url');


var Math = require('./MathService');


module.exports.max = function max (req, res, next) {
  Math.max(req.swagger.params, res, next);
};

module.exports.min = function min (req, res, next) {
  Math.min(req.swagger.params, res, next);
};

module.exports.pi = function pi (req, res, next) {
  Math.pi(req.swagger.params, res, next);
};

module.exports.power = function power (req, res, next) {
  Math.power(req.swagger.params, res, next);
};

module.exports.squrt = function squrt (req, res, next) {
  Math.squrt(req.swagger.params, res, next);
};

module.exports.sumid = function sumid (req, res, next) {
  Math.sumid(req.swagger.params, res, next);
};
