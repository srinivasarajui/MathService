'use strict';

exports.max = function(args, res, next) {
    /**
     * parameters expected in the args:
     * data (List)
     **/
    var list = args.data.value;
    var max = args.data.value[0];
    for (var i = 0; i < list.length; i++) {
        if (max < list[i]) {
            max = list[i];
        }
    }

    var examples = {};
    examples['application/json'] = max;
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}

exports.min = function(args, res, next) {
    /**
     * parameters expected in the args:
     * data (List)
     **/
    var list = args.data.value;
    var min = args.data.value[0];
    for (var i = 0; i < list.length; i++) {
        if (min > list[i]) {
            min = list[i];
        }
    }

    var examples = {};
    examples['application/json'] = min;
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}

exports.pi = function(args, res, next) {
    /**
     * parameters expected in the args:
     **/
    var examples = {};
    examples['application/json'] = 3.14159;
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}

exports.power = function(args, res, next) {
    /**
     * parameters expected in the args:
     * data (PowInput)
     **/
    console.log(JSON.stringify(args));
    var examples = {};
    examples['application/json'] = Math.pow(args.data.value.base, args.data.value.power);
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}

exports.squrt = function(args, res, next) {
    /**
     * parameters expected in the args:
     * input (BigDecimal)
     **/
    console.log(JSON.stringify(args.input.value));
    var examples = {};
    examples['application/json'] = Math.sqrt(args.input.value);
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}

exports.sumid = function(args, res, next) {
    /**
     * parameters expected in the args:
     * data (List)
     **/
    var list = args.data.value;
    var sum = 0;
    for (var i = 0; i < list.length; i++) {

        sum += list[i];

    }
    var examples = {};
    examples['application/json'] = sum;
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }

}