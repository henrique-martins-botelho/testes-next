/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/feather-route-matcher@4.0.0";
exports.ids = ["vendor-chunks/feather-route-matcher@4.0.0"];
exports.modules = {

/***/ "../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/feather-route-matcher.js":
/*!*********************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/feather-route-matcher.js ***!
  \*********************************************************************************************************************/
/***/ (function(module) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  0;\n}(this, (function () { 'use strict';\n\n  // regexes borrowed from backbone\n  var optionalParam = /\\((.*?)\\)/g;\n  var namedParam = /(\\(\\?)?:\\w+/g;\n  // eslint-disable-next-line no-useless-escape\n  var escapeRegExp = /[\\-{}\\[\\]+?.,\\\\\\^$|#\\s]/g;\n  var splatParam = /\\*/g;\n\n  // Parses a URL pattern such as `/users/:id`\n  // and builds and returns a regex that can be used to\n  // match said pattern. Credit for these\n  // regexes belongs to Jeremy Ashkenas and the\n  // other maintainers of Backbone.js\n  //\n  // It has been modified for extraction of\n  // named parameters from the URL\n  var parsePattern = function (pattern) {\n    var names = [];\n    pattern = pattern\n      .replace(escapeRegExp, '\\\\$&')\n      .replace(optionalParam, '(?:$1)?')\n      .replace(namedParam, function (match, optional) {\n        names.push(match.slice(1));\n        return optional ? match : '([^/?]+)'\n      })\n      .replace(splatParam, function () {\n        names.push('path');\n        return '([^?]*?)'\n      });\n\n    return {\n      regExp: new RegExp('^' + pattern + '(?:\\\\?([\\\\s\\\\S]*))?$'),\n      namedParams: names\n    }\n  };\n\n  function index (routes) {\n    var keys = Object.keys(routes);\n    var routeCache = {};\n\n    // loop through each route we're\n    // and build the shell of our\n    // route cache.\n    for (var item in routes) {\n      routeCache[item] = {\n        value: routes[item]\n      };\n    }\n\n    // main result is a function that can be called\n    // with the url\n    return function (url) {\n      var params;\n      var route;\n\n      // start looking for matches\n      var matchFound = keys.some(function (key) {\n        var parsed;\n\n        // fetch the route pattern from the cache\n        // there will always be one\n        route = routeCache[key];\n\n        // if the route doesn't already have\n        // a regex we never generated one\n        // so we do that here lazily.\n        // Parse the pattern to generate the\n        // regex once, and store the result\n        // for next time.\n        if (!route.regExp) {\n          parsed = parsePattern(key);\n          route.regExp = parsed.regExp;\n          route.namedParams = parsed.namedParams;\n          route.pattern = key;\n        }\n\n        // run our cached regex\n        var result = route.regExp.exec(url);\n\n        // if null there was no match\n        // returning falsy here continues\n        // the `Array.prototype.some` loop\n        if (!result) {\n          return\n        }\n\n        // remove other cruft from result\n        result = result.slice(1, -1);\n\n        // reduce our match to an object of named parameters\n        // we've extracted from the url\n        params = result.reduce(function (obj, val, index) {\n          if (val) {\n            obj[route.namedParams[index]] = val;\n          }\n          return obj\n        }, {});\n\n        // stops the loop\n        return true\n      });\n\n      // no routes matched\n      if (!matchFound) {\n        return null\n      }\n\n      return {\n        value: route.value,\n        params: params,\n        url: url,\n        pattern: route.pattern\n      }\n    }\n  }\n\n  return index;\n\n})));\n//# sourceMappingURL=feather-route-matcher.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2ZlYXRoZXItcm91dGUtbWF0Y2hlckA0LjAuMC9ub2RlX21vZHVsZXMvZmVhdGhlci1yb3V0ZS1tYXRjaGVyL2ZlYXRoZXItcm91dGUtbWF0Y2hlci5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxDQUMyRDtBQUM3RCxDQUFDLHNCQUFzQjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTs7QUFFYjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWNrb3V0LXYxNC8uLi9ub2RlX21vZHVsZXMvLnBucG0vZmVhdGhlci1yb3V0ZS1tYXRjaGVyQDQuMC4wL25vZGVfbW9kdWxlcy9mZWF0aGVyLXJvdXRlLW1hdGNoZXIvZmVhdGhlci1yb3V0ZS1tYXRjaGVyLmpzPzlmY2YiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5jcmVhdGVNYXRjaGVyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIHJlZ2V4ZXMgYm9ycm93ZWQgZnJvbSBiYWNrYm9uZVxuICB2YXIgb3B0aW9uYWxQYXJhbSA9IC9cXCgoLio/KVxcKS9nO1xuICB2YXIgbmFtZWRQYXJhbSA9IC8oXFwoXFw/KT86XFx3Ky9nO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgdmFyIGVzY2FwZVJlZ0V4cCA9IC9bXFwte31cXFtcXF0rPy4sXFxcXFxcXiR8I1xcc10vZztcbiAgdmFyIHNwbGF0UGFyYW0gPSAvXFwqL2c7XG5cbiAgLy8gUGFyc2VzIGEgVVJMIHBhdHRlcm4gc3VjaCBhcyBgL3VzZXJzLzppZGBcbiAgLy8gYW5kIGJ1aWxkcyBhbmQgcmV0dXJucyBhIHJlZ2V4IHRoYXQgY2FuIGJlIHVzZWQgdG9cbiAgLy8gbWF0Y2ggc2FpZCBwYXR0ZXJuLiBDcmVkaXQgZm9yIHRoZXNlXG4gIC8vIHJlZ2V4ZXMgYmVsb25ncyB0byBKZXJlbXkgQXNoa2VuYXMgYW5kIHRoZVxuICAvLyBvdGhlciBtYWludGFpbmVycyBvZiBCYWNrYm9uZS5qc1xuICAvL1xuICAvLyBJdCBoYXMgYmVlbiBtb2RpZmllZCBmb3IgZXh0cmFjdGlvbiBvZlxuICAvLyBuYW1lZCBwYXJhbWV0ZXJzIGZyb20gdGhlIFVSTFxuICB2YXIgcGFyc2VQYXR0ZXJuID0gZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICBwYXR0ZXJuID0gcGF0dGVyblxuICAgICAgLnJlcGxhY2UoZXNjYXBlUmVnRXhwLCAnXFxcXCQmJylcbiAgICAgIC5yZXBsYWNlKG9wdGlvbmFsUGFyYW0sICcoPzokMSk/JylcbiAgICAgIC5yZXBsYWNlKG5hbWVkUGFyYW0sIGZ1bmN0aW9uIChtYXRjaCwgb3B0aW9uYWwpIHtcbiAgICAgICAgbmFtZXMucHVzaChtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgIHJldHVybiBvcHRpb25hbCA/IG1hdGNoIDogJyhbXi8/XSspJ1xuICAgICAgfSlcbiAgICAgIC5yZXBsYWNlKHNwbGF0UGFyYW0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmFtZXMucHVzaCgncGF0aCcpO1xuICAgICAgICByZXR1cm4gJyhbXj9dKj8pJ1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVnRXhwOiBuZXcgUmVnRXhwKCdeJyArIHBhdHRlcm4gKyAnKD86XFxcXD8oW1xcXFxzXFxcXFNdKikpPyQnKSxcbiAgICAgIG5hbWVkUGFyYW1zOiBuYW1lc1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBpbmRleCAocm91dGVzKSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuICAgIHZhciByb3V0ZUNhY2hlID0ge307XG5cbiAgICAvLyBsb29wIHRocm91Z2ggZWFjaCByb3V0ZSB3ZSdyZVxuICAgIC8vIGFuZCBidWlsZCB0aGUgc2hlbGwgb2Ygb3VyXG4gICAgLy8gcm91dGUgY2FjaGUuXG4gICAgZm9yICh2YXIgaXRlbSBpbiByb3V0ZXMpIHtcbiAgICAgIHJvdXRlQ2FjaGVbaXRlbV0gPSB7XG4gICAgICAgIHZhbHVlOiByb3V0ZXNbaXRlbV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gbWFpbiByZXN1bHQgaXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBjYWxsZWRcbiAgICAvLyB3aXRoIHRoZSB1cmxcbiAgICByZXR1cm4gZnVuY3Rpb24gKHVybCkge1xuICAgICAgdmFyIHBhcmFtcztcbiAgICAgIHZhciByb3V0ZTtcblxuICAgICAgLy8gc3RhcnQgbG9va2luZyBmb3IgbWF0Y2hlc1xuICAgICAgdmFyIG1hdGNoRm91bmQgPSBrZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgcGFyc2VkO1xuXG4gICAgICAgIC8vIGZldGNoIHRoZSByb3V0ZSBwYXR0ZXJuIGZyb20gdGhlIGNhY2hlXG4gICAgICAgIC8vIHRoZXJlIHdpbGwgYWx3YXlzIGJlIG9uZVxuICAgICAgICByb3V0ZSA9IHJvdXRlQ2FjaGVba2V5XTtcblxuICAgICAgICAvLyBpZiB0aGUgcm91dGUgZG9lc24ndCBhbHJlYWR5IGhhdmVcbiAgICAgICAgLy8gYSByZWdleCB3ZSBuZXZlciBnZW5lcmF0ZWQgb25lXG4gICAgICAgIC8vIHNvIHdlIGRvIHRoYXQgaGVyZSBsYXppbHkuXG4gICAgICAgIC8vIFBhcnNlIHRoZSBwYXR0ZXJuIHRvIGdlbmVyYXRlIHRoZVxuICAgICAgICAvLyByZWdleCBvbmNlLCBhbmQgc3RvcmUgdGhlIHJlc3VsdFxuICAgICAgICAvLyBmb3IgbmV4dCB0aW1lLlxuICAgICAgICBpZiAoIXJvdXRlLnJlZ0V4cCkge1xuICAgICAgICAgIHBhcnNlZCA9IHBhcnNlUGF0dGVybihrZXkpO1xuICAgICAgICAgIHJvdXRlLnJlZ0V4cCA9IHBhcnNlZC5yZWdFeHA7XG4gICAgICAgICAgcm91dGUubmFtZWRQYXJhbXMgPSBwYXJzZWQubmFtZWRQYXJhbXM7XG4gICAgICAgICAgcm91dGUucGF0dGVybiA9IGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJ1biBvdXIgY2FjaGVkIHJlZ2V4XG4gICAgICAgIHZhciByZXN1bHQgPSByb3V0ZS5yZWdFeHAuZXhlYyh1cmwpO1xuXG4gICAgICAgIC8vIGlmIG51bGwgdGhlcmUgd2FzIG5vIG1hdGNoXG4gICAgICAgIC8vIHJldHVybmluZyBmYWxzeSBoZXJlIGNvbnRpbnVlc1xuICAgICAgICAvLyB0aGUgYEFycmF5LnByb3RvdHlwZS5zb21lYCBsb29wXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgb3RoZXIgY3J1ZnQgZnJvbSByZXN1bHRcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDEsIC0xKTtcblxuICAgICAgICAvLyByZWR1Y2Ugb3VyIG1hdGNoIHRvIGFuIG9iamVjdCBvZiBuYW1lZCBwYXJhbWV0ZXJzXG4gICAgICAgIC8vIHdlJ3ZlIGV4dHJhY3RlZCBmcm9tIHRoZSB1cmxcbiAgICAgICAgcGFyYW1zID0gcmVzdWx0LnJlZHVjZShmdW5jdGlvbiAob2JqLCB2YWwsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgb2JqW3JvdXRlLm5hbWVkUGFyYW1zW2luZGV4XV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvYmpcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIC8vIHN0b3BzIHRoZSBsb29wXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgLy8gbm8gcm91dGVzIG1hdGNoZWRcbiAgICAgIGlmICghbWF0Y2hGb3VuZCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcm91dGUudmFsdWUsXG4gICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgcGF0dGVybjogcm91dGUucGF0dGVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmRleDtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZlYXRoZXItcm91dGUtbWF0Y2hlci5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/feather-route-matcher.js\n");

/***/ })

};
;