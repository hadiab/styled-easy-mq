"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaQuery = void 0;
var facepaint = require("facepaint");
var cssToObject = function (cssStr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var regex = /([\w-]*)\s*:\s*([^;]*)/g;
    var match = null;
    var properties = {};
    var argsCounter = 0;
    // eslint-disable-next-line no-cond-assign
    while (match = regex.exec(cssStr)) {
        var value = match[2].trim();
        if (value === "{" + argsCounter + "}") {
            value = args[argsCounter];
            argsCounter++;
        }
        properties[match[1]] = value;
    }
    return properties;
};
var getMedia = function (bp) {
    var value = (typeof bp === "string") ? bp : bp + "px";
    return "@media (min-width: " + value + ")";
};
var initOptions = { breakpoints: [576, 768, 992, 1200] };
var createMediaQuery = function (options) {
    if (options === void 0) { options = initOptions; }
    var _a = options.breakpoints, breakpoints = _a === void 0 ? [576, 768, 992, 1200] : _a;
    var facepaintMQ = facepaint(breakpoints.map(function (bp) { return getMedia(bp); }));
    var makeStyle = function (style) {
        var css = initOptions.css;
        if (css && typeof css === "function") {
            return css(facepaintMQ(style));
        }
        return facepaintMQ(style);
    };
    var mq = function (style) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (Array.isArray(style)) {
            var cssStr = style.map(function (item, i) { return item + (args[i] ? "{" + i + "}" : ""); });
            var cssObj = cssToObject.apply(void 0, __spreadArray([cssStr.join("")], args));
            return makeStyle(cssObj);
        }
        return makeStyle(style);
    };
    return mq;
};
exports.createMediaQuery = createMediaQuery;
