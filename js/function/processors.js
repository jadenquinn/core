(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "babel-runtime/helpers/toConsumableArray", "flow-runtime"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("babel-runtime/helpers/toConsumableArray"), require("flow-runtime"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.toConsumableArray, global.flowRuntime);
        global.processors = mod.exports;
    }
})(this, function (exports, _toConsumableArray2, _flowRuntime) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = processors;

    var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

    var _flowRuntime2 = _interopRequireDefault(_flowRuntime);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function processors() {
        var preProcessor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (args) {
            return args;
        };
        var postProcessor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
            return value;
        };

        var _preProcessorType = _flowRuntime2.default.function(_flowRuntime2.default.param("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any())));

        var _postProcessorType = _flowRuntime2.default.function(_flowRuntime2.default.param("value", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any()));

        var _returnType = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("fn", _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any())))));

        _flowRuntime2.default.param("preProcessor", _preProcessorType).assert(preProcessor);

        _flowRuntime2.default.param("postProcessor", _postProcessorType).assert(postProcessor);

        return _returnType.assert(_flowRuntime2.default.annotate(function (fn) {
            var _fnType = _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()));

            var _returnType2 = _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any())));

            _flowRuntime2.default.param("fn", _fnType).assert(fn);

            return _returnType2.assert(_flowRuntime2.default.annotate(function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var _argsType = _flowRuntime2.default.array(_flowRuntime2.default.any());

                var _returnType3 = _flowRuntime2.default.return(_flowRuntime2.default.any());

                _flowRuntime2.default.rest("args", _argsType).assert(args);

                return _returnType3.assert(postProcessor(fn.apply(undefined, (0, _toConsumableArray3.default)(preProcessor(args)))));
            }, _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))));
        }, _flowRuntime2.default.function(_flowRuntime2.default.param("fn", _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any()))))));
    }

    _flowRuntime2.default.annotate(processors, _flowRuntime2.default.function(_flowRuntime2.default.param("preProcessor", _flowRuntime2.default.function(_flowRuntime2.default.param("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.array(_flowRuntime2.default.any())))), _flowRuntime2.default.param("postProcessor", _flowRuntime2.default.function(_flowRuntime2.default.param("value", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.param("fn", _flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.array(_flowRuntime2.default.any())), _flowRuntime2.default.return(_flowRuntime2.default.any()))), _flowRuntime2.default.return(_flowRuntime2.default.function(_flowRuntime2.default.rest("args", _flowRuntime2.default.any()), _flowRuntime2.default.return(_flowRuntime2.default.any())))))));
});
//# sourceMappingURL=processors.js.map
