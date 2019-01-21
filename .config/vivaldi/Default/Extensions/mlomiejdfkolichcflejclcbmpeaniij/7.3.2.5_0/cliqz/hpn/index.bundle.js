!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.register('2', ['3'], function (_export) {
  'use strict';

  var events;
  return {
    setters: [function (_events) {
      events = _events['default'];
    }],
    execute: function () {
      _export('default', function (originalBackground) {
        var background = Object.assign({}, originalBackground);
        var bgInit = background.init;
        var bgUnload = background.unload;
        var bgEvents = background.events;

        // bind actions to background object
        Object.keys(background.actions || {}).forEach(function (action) {
          background.actions[action] = background.actions[action].bind(background);
        });

        background.init = function init() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var promise = Promise.resolve(bgInit.apply(background, args));

          Object.keys(bgEvents || {}).forEach(function (event) {
            bgEvents[event] = bgEvents[event].bind(background);
            events.sub(event, bgEvents[event]);
          });
          return promise;
        };

        background.unload = function unload() {
          Object.keys(bgEvents || {}).forEach(function (event) {
            events.un_sub(event, bgEvents[event]);
          });

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          bgUnload.apply(background, args);
        };

        return background;
      });
    }
  };
});
$__System.register("4", [], function (_export) {
  "use strict";

  _export("isPlatformAtLeastInVersion", isPlatformAtLeastInVersion);

  function isPlatformAtLeastInVersion(version) {
    return true;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", {
        isMobile: false,
        isFirefox: false,
        isChromium: true
      });
    }
  };
});
$__System.register('5', ['4'], function (_export) {
  'use strict';

  var platform, isFirefox, isMobile, isChromium, platformName;

  _export('notImplemented', notImplemented);

  function notImplemented() {
    throw new Error('Not implemented');
  }

  return {
    setters: [function (_platformPlatform) {
      platform = _platformPlatform['default'];

      _export('isPlatformAtLeastInVersion', _platformPlatform.isPlatformAtLeastInVersion);
    }],
    execute: function () {
      isFirefox = platform.isFirefox;

      _export('isFirefox', isFirefox);

      isMobile = platform.isMobile;

      _export('isMobile', isMobile);

      isChromium = platform.isChromium;

      _export('isChromium', isChromium);

      platformName = platform.platformName;

      _export('platformName', platformName);
    }
  };
});
$__System.register('6', [], function (_export) {
  // TODO: this entire file requires a rewrite from ground up
  'use strict';

  var CliqzChromeDB, _default;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  return {
    setters: [],
    execute: function () {
      CliqzChromeDB = {
        VERSION: '0.1',
        set: function set(db, key, obj, callback) {
          var dbKey = db + ':' + key;
          var o = {};
          o[dbKey] = obj;
          chrome.storage.local.set(o, callback);
        },
        get: function get(db, keyValueOrFunction, callback) {

          if (typeof keyValueOrFunction === 'function') {

            chrome.storage.local.get(null, function (items) {
              var results = [];
              Object.keys(items).forEach(function (lab) {
                if (lab.startsWith(db)) {
                  if (keyValueOrFunction(items[lab])) results.push(items[lab]);
                }
              });
              callback(results);
            });
          } else {
            var dbKey = db + ':' + keyValueOrFunction;
            chrome.storage.local.get(dbKey, function (items) {
              callback(items[dbKey]);
            });
          }
        },
        remove: function remove(db, keyValueOrFunction, callback) {

          if (typeof keyValueOrFunction === 'function') {

            chrome.storage.local.get(null, function (items) {
              var resultsToBeRemoved = [];
              Object.keys(items).forEach(function (lab) {
                if (lab.startsWith(db)) {
                  if (keyValueOrFunction(items[lab])) {
                    var dbKey = db + ':' + lab;
                    resultsToBeRemoved.push(dbKey);
                  }
                }
              });

              chrome.storage.local.remove(resultsToBeRemoved, callback);
            });
          } else {
            var dbKey = db + ':' + keyValueOrFunction;
            chrome.storage.local.remove(dbKey, callback);
          }
        },
        size: function size(callback) {
          chrome.storage.local.getBytesInUse(null, function (a) {
            var res = [a, a / chrome.storage.local.QUOTA_BYTES];
            console.log('Current size: ', res[0], res[1]);
            if (callback) callback(res);
          });
        },
        removeEverything: function removeEverything() {
          chrome.storage.local.clear();
          CliqzChromeDB.size();
        }
      };

      _default = function () {
        function _default(CliqzSecureMessage) {
          _classCallCheck(this, _default);

          this.CliqzSecureMessage = CliqzSecureMessage;
        }

        _createClass(_default, [{
          key: 'close',
          value: function close() {}
        }, {
          key: 'saveRecord',
          value: function saveRecord(id, data) {
            CliqzChromeDB.set('hpn', id, data);
          }
        }, {
          key: 'loadRecord',
          value: function loadRecord(id) {
            var promise = new Promise(function (resolve, reject) {
              CliqzChromeDB.get('hpn', id, function (obj) {
                var res = [];
                if (obj) res.push(obj);
                resolve(res);
              });
            });
            return promise;
          }
        }, {
          key: 'saveKeys',
          value: function saveKeys(_data) {
            return new Promise(function (resolve, reject) {
              CliqzChromeDB.set('hpn', 'userKey', JSON.stringify(_data));
              resolve({ status: true, data: _data });
            });
          }
        }, {
          key: 'loadKeys',
          value: function loadKeys() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.loadRecord('userKey').then(function (data) {
                if (data.length === 0) {
                  resolve(null);
                } else {
                  try {
                    resolve(JSON.parse(data));
                  } catch (ee) {
                    resolve(null);
                  }
                }
              });
            });
          }
        }, {
          key: 'saveLocalCheckTable',
          value: function saveLocalCheckTable() {
            if (Object.keys(this.CliqzSecureMessage.localTemporalUniq).length > 0) {
              this.saveRecord('localTemporalUniq', JSON.stringify(this.CliqzSecureMessage.localTemporalUniq));
            }
          }
        }, {
          key: 'loadLocalCheckTable',
          value: function loadLocalCheckTable() {
            var _this2 = this;

            this.loadRecord('localTemporalUniq').then(function (res) {
              if (res.length > 0) {
                _this2.CliqzSecureMessage.localTemporalUniq = JSON.parse(res[0]);
              } else {
                _this2.CliqzSecureMessage.localTemporalUniq = {};
              }
            });
          }
        }]);

        return _default;
      }();

      _export('default', _default);
    }
  };
});
$__System.register("7", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        init: function init() {}
      });
    }
  };
});
$__System.register("8", ["9", "3", "7"], function (_export) {
  "use strict";

  var CliqzUtils, CliqzEvents, CliqzPromise;
  return {
    setters: [function (_utils) {
      CliqzUtils = _utils["default"];
    }, function (_events) {
      CliqzEvents = _events["default"];
    }, function (_platformHistoryManager) {
      _export("historyManager", _platformHistoryManager["default"]);
    }],
    execute: function () {
      CliqzPromise = CliqzUtils.Promise;

      _export("utils", CliqzUtils);

      _export("events", CliqzEvents);

      _export("Promise", CliqzPromise);
    }
  };
});
$__System.register('a', ['b'], function (_export) {
  'use strict';

  var chrome, Storage;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  return {
    setters: [function (_globals) {
      chrome = _globals.chrome;
    }],
    execute: function () {
      Storage = function () {
        function Storage(filePath) {
          _classCallCheck(this, Storage);

          this.key = ['resource-loader'].concat(_toConsumableArray(filePath)).join(':');
        }

        _createClass(Storage, [{
          key: 'load',
          value: function load() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              chrome.storage.local.get(_this.key, function (values) {
                var key = Object.keys(values);
                var value = values[key];
                if (value) {
                  resolve(value);
                } else {
                  reject('resource-loader: chrome storage has no value for key ' + _this.key);
                }
              });
            });
          }
        }, {
          key: 'save',
          value: function save(data) {
            var _this2 = this;

            return new Promise(function (resolve) {
              chrome.storage.local.set(_defineProperty({}, _this2.key, data), resolve);
            });
          }
        }]);

        return Storage;
      }();

      _export('default', Storage);
    }
  };
});
$__System.register("c", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", TextDecoder);
    }
  };
});
$__System.register('d', ['e', 'f', '8', 'a', 'c'], function (_export) {

  // Common durations
  'use strict';

  var config, console, utils, Storage, TextDecoder, ONE_SECOND, ONE_MINUTE, ONE_HOUR, UpdateCallbackHandler, Resource, _default;

  var _get = function get(_x3, _x4, _x5) {
    var _again = true;_function: while (_again) {
      var object = _x3,
          property = _x4,
          receiver = _x5;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x3 = parent;_x4 = property;_x5 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function get(url) {
    return new Promise(function (resolve, reject) {
      utils.httpGet(url, function (res) {
        resolve(res.response);
      }, reject, 300 * ONE_SECOND);
    });
  }

  /* Abstract away the pattern `onUpdate` trigger list of
   * callbacks. This pattern is used a lot, so it looks worth
   * it to create a base class to handle it.
   */
  return {
    setters: [function (_config) {
      config = _config['default'];
    }, function (_console) {
      console = _console['default'];
    }, function (_cliqz) {
      utils = _cliqz.utils;
    }, function (_platformResourceLoaderStorage) {
      Storage = _platformResourceLoaderStorage['default'];
    }, function (_platformTextDecoder) {
      TextDecoder = _platformTextDecoder['default'];
    }],
    execute: function () {
      ONE_SECOND = 1000;
      ONE_MINUTE = 60 * ONE_SECOND;
      ONE_HOUR = 60 * ONE_MINUTE;

      UpdateCallbackHandler = function () {
        function UpdateCallbackHandler() {
          _classCallCheck(this, UpdateCallbackHandler);

          this.callbacks = [];
        }

        /* A resource is responsible for handling a remote resource persisted on
         * disk. It will be persisted on disk upon each update from remote. It is
         * also able to parse JSON automatically if `dataType` is 'json'.
         */

        _createClass(UpdateCallbackHandler, [{
          key: 'onUpdate',
          value: function onUpdate(callback) {
            this.callbacks.push(callback);
          }
        }, {
          key: 'triggerCallbacks',
          value: function triggerCallbacks(args) {
            return Promise.all(this.callbacks.map(function (cb) {
              return cb(args);
            }));
          }
        }]);

        return UpdateCallbackHandler;
      }();

      _export('UpdateCallbackHandler', UpdateCallbackHandler);

      Resource = function () {
        function Resource(name) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          _classCallCheck(this, Resource);

          this.name = typeof name === 'string' ? [name] : name;
          this.remoteURL = options.remoteURL;
          this.dataType = options.dataType || 'json';
          this.filePath = ['cliqz'].concat(_toConsumableArray(this.name));
          this.chromeURL = options.chromeURL || '' + config.baseURL + this.name.join('/');
          this.storage = new Storage(this.filePath);
        }

        /**
         * Loads the resource. Load either a cached version of the file available in
         * the profile, or at the chrome URL (if provided) or from remote.
         *
         * @returns a Promise resolving to the resource. This Promise can fail on
         * error (if the remote resource cannot be fetched, or if the parsing
         * fails, for example), thus **you should should add a _catch_** to this
         * promise to handle errors properly.
         */

        _createClass(Resource, [{
          key: 'load',
          value: function load() {
            var _this = this;

            return this.storage.load().then(function (data) {
              try {
                // data might be a plain string in web extension case
                // for react native the TextDecoder.decode returns an empty string
                return new TextDecoder().decode(data) || data;
              } catch (e) {
                return data;
              }
            }).then(function (data) {
              return _this.parseData(data);
            })['catch'](function () {
              return _this.updateFromURL(_this.chromeURL);
            })['catch'](function () {
              return _this.updateFromRemote();
            });
          }

          /**
           * Tries to update the resource from the `remoteURL`.
           *
           * @returns a Promise resolving to the updated resource. Similarly
           * to the `load` method, the promise can fail, and thus you should
           * had a **catch** close to your promise to handle any exception.
           */
        }, {
          key: 'updateFromRemote',
          value: function updateFromRemote() {
            if (this.remoteURL === undefined) {
              return Promise.reject('updateFromRemote: remoteURL is undefined');
            }
            return this.updateFromURL(this.remoteURL);
          }

          /* *****************************************************************
           * Private API
           ******************************************************************/

        }, {
          key: 'updateFromURL',
          value: function updateFromURL(url) {
            if (url) {
              return get(url).then(this.persist.bind(this));
            }

            return Promise.reject('updateFromURL: url is undefined');
          }
        }, {
          key: 'persist',
          value: function persist(data) {
            var _this2 = this;

            return this.parseData(data).then(function (parsed) {
              return _this2.storage.save(data)['catch'](function (e) {
                return console.error('resource-loader error on persist: ', e);
              }).then(function () {
                return parsed;
              });
            });
          }
        }, {
          key: 'parseData',
          value: function parseData(data) {
            if (this.dataType === 'json') {
              try {
                var parsed = JSON.parse(data);
                return Promise.resolve(parsed);
              } catch (e) {
                return Promise.reject('parseData: failed with exception ' + e);
              }
            }

            return Promise.resolve(data);
          }
        }]);

        return Resource;
      }();

      _export('Resource', Resource);

      _default = function (_UpdateCallbackHandler) {
        _inherits(_default, _UpdateCallbackHandler);

        function _default(resourceName) {
          var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this);

          this.resource = new Resource(resourceName, options);
          this.cron = options.cron || ONE_HOUR;
          this.updateInterval = options.updateInterval || 10 * ONE_MINUTE;
          this.intervalTimer = utils.setInterval(this.updateFromRemote.bind(this), this.updateInterval);
        }

        /**
         * Loads the resource hold by `this.resource`. This can return
         * a failed promise. Please read `Resource.load` doc string for
         * further information.
         */

        _createClass(_default, [{
          key: 'load',
          value: function load() {
            return this.resource.load();
          }

          /**
           * Updates the resource from remote (maximum one time per `cron`
           * time frame).
           *
           * @returns a Promise which never fails, since this update will be
           * triggered by `setInterval` and thus you cannot catch. If the update
           * fails, then the callback won't be called.
           */
        }, {
          key: 'updateFromRemote',
          value: function updateFromRemote() {
            var pref = 'resource-loader.lastUpdates.' + this.resource.name.join('/');
            var lastUpdate = Number(utils.getPref(pref, 0));
            var currentTime = Date.now();

            if (currentTime > this.cron + lastUpdate) {
              return this.resource.updateFromRemote().then(function (data) {
                utils.setPref(pref, String(Date.now()));
                return data;
              }).then(this.triggerCallbacks.bind(this))['catch'](function () {
                return undefined;
              });
            }
            return Promise.resolve();
          }
        }, {
          key: 'stop',
          value: function stop() {
            utils.clearInterval(this.intervalTimer);
          }
        }]);

        return _default;
      }(UpdateCallbackHandler);

      _export('default', _default);
    }
  };
});
$__System.register('10', ['11', '12'], function (_export) {

  // Using this function it is easier to see if the push of message failed.
  'use strict';

  var CliqzSecureMessage, CryptoWorker, sendMessage;

  _export('sendM', sendM);

  /*
  This will send the messages inside the trk one at a time. This uses a generator expression.
  
  Will return a Promise which resolves to an array, one for each sent message:
  its value will be null if everything was ok,
  and a string indicating the error message otherwise (useful for testing)
  */

  function sendM(m) {
    var sent = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    var sendMessageWCrypto = new CryptoWorker();
    sendMessage(sendMessageWCrypto, m);

    sendMessageWCrypto.onmessage = function (e) {
      if (e.data.type === 'telemetry') {
        CliqzSecureMessage.localTemporalUniq = e.data.localTemporalUniq;
        CliqzSecureMessage.storage.saveLocalCheckTable();
      }

      var nextMsg = CliqzSecureMessage.nextMessage();
      if (nextMsg) {
        sendMessage(sendMessageWCrypto, nextMsg);
      } else {
        // Queue is empty hence dump the local temp queue to disk.
        CliqzSecureMessage.storage.saveLocalCheckTable();
        sendMessageWCrypto.terminate();
        return sent;
      }
    };
  }

  return {
    setters: [function (_main) {
      CliqzSecureMessage = _main['default'];
    }, function (_cryptoWorker) {
      CryptoWorker = _cryptoWorker['default'];
    }],
    execute: function () {
      sendMessage = function sendMessage(ww, m) {
        try {
          ww.postMessage({
            msg: m,
            type: 'telemetry',
            sourcemap: CliqzSecureMessage.sourceMap,
            upk: CliqzSecureMessage.uPK,
            dspk: CliqzSecureMessage.dsPK,
            sspk: CliqzSecureMessage.secureLogger,
            routetable: CliqzSecureMessage.routeTable,
            localTemporalUniq: CliqzSecureMessage.localTemporalUniq
          });
        } catch (e) {}
      };

      ;
    }
  };
});
$__System.register('13', ['9', '14', '11'], function (_export) {
  'use strict';

  var utils, http, CliqzSecureMessage, OFFER_TELEMETRY, OFFER_TELEMETRY_PREFIX, proxyHttpHandler;

  _export('overRideCliqzResults', overRideCliqzResults);

  function overRideCliqzResults() {
    if (utils.getPref('proxyNetwork', true) === false) return;

    if (!proxyHttpHandler) proxyHttpHandler = http.defaultHttpHandler;

    function httpHandler(method, url, callback, onerror, timeout, data, sync) {
      if (url.startsWith(utils.RESULTS_PROVIDER) && utils.getPref('hpn-queryv2', false)) {
        var query = url.replace(utils.RESULTS_PROVIDER, '');
        var uid = Math.floor(Math.random() * 10000000);
        CliqzSecureMessage.queriesID[uid] = callback;
        CliqzSecureMessage.wCrypto.postMessage({
          msg: { action: 'instant',
            type: 'cliqz',
            ts: '',
            ver: '1.5',
            payload: query,
            rp: utils.RESULTS_PROVIDER
          },
          uid: uid,
          type: 'instant',
          sourcemap: CliqzSecureMessage.sourceMap,
          upk: CliqzSecureMessage.uPK,
          dspk: CliqzSecureMessage.dsPK,
          sspk: CliqzSecureMessage.secureLogger,
          queryProxyUrl: CliqzSecureMessage.queryProxyIP
        });
        return null;
      } else if (url.startsWith(utils.RESULTS_PROVIDER_LOG)) {
        var query = url.replace(utils.RESULTS_PROVIDER_LOG, '');
        var uid = Math.floor(Math.random() * 10000000);
        CliqzSecureMessage.queriesID[uid] = callback;
        CliqzSecureMessage.wCrypto.postMessage({
          msg: { action: 'extension-result-telemetry',
            type: 'cliqz',
            ts: '',
            ver: '1.5',
            payload: query
          },
          uid: uid,
          type: 'instant',
          sourcemap: CliqzSecureMessage.sourceMap,
          upk: CliqzSecureMessage.uPK,
          dspk: CliqzSecureMessage.dsPK,
          sspk: CliqzSecureMessage.secureLogger,
          queryProxyUrl: CliqzSecureMessage.queryProxyIP
        });
        return null;
      } else if (url === utils.SAFE_BROWSING) {
        var batch = JSON.parse(data);
        if (batch.length > 0) {
          batch.forEach(function (eachMsg) {
            CliqzSecureMessage.telemetry(eachMsg);
          });
        }
        callback && callback({ 'response': '{"success":true}' });
      } else if (url.startsWith(OFFER_TELEMETRY_PREFIX)) {

        // Make sure that that CliqzSecureMessage.queryProxyIP exists,
        // otherwise, sending the message will silently fail.
        //
        // The queryProxyIP contains the proxy's verify endpoint
        // (e.g., "http://<proxy-ip>/verify").
        var queryProxyUrl = CliqzSecureMessage.proxyIP();
        if (!queryProxyUrl) {
          throw new Error('Failed to send message, as the list of proxies is empty');
        }

        var query = url.replace(OFFER_TELEMETRY_PREFIX, '');
        var uid = Math.floor(Math.random() * 10000000);
        CliqzSecureMessage.queriesID[uid] = callback;

        var message = {
          msg: { action: 'offers-api',
            type: 'cliqz',
            ts: '',
            ver: '1.5',
            payload: query,
            rp: OFFER_TELEMETRY_PREFIX,
            body: data
          },
          uid: uid,
          type: 'instant',
          sourcemap: CliqzSecureMessage.sourceMap,
          upk: CliqzSecureMessage.uPK,
          dspk: CliqzSecureMessage.dsPK,
          sspk: CliqzSecureMessage.secureLogger,
          queryProxyUrl: queryProxyUrl
        };
        CliqzSecureMessage.wCrypto.postMessage(message);
        return null;
      } else {
        return proxyHttpHandler.apply(undefined, arguments);
      }
      return null;
    };

    http.overrideHttpHandler(httpHandler);
    http.addCompressionExclusion(utils.SAFE_BROWSING);
  }

  return {
    setters: [function (_coreUtils) {
      utils = _coreUtils['default'];
    }, function (_coreHttp) {
      http = _coreHttp;
    }, function (_main) {
      CliqzSecureMessage = _main['default'];
    }],
    execute: function () {
      OFFER_TELEMETRY = 'https://offers-api.cliqz.com/api/v1/savesignal';
      OFFER_TELEMETRY_PREFIX = 'https://offers-api.cliqz.com';
      proxyHttpHandler = null;
    }
  };
});
$__System.register("15", [], function (_export) {
  "use strict";

  var _default;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _default = function () {
        function _default() {
          var _ref = arguments.length <= 0 || arguments[0] === undefined ? { position: 0 } : arguments[0];

          var position = _ref.position;

          _classCallCheck(this, _default);
        }

        _createClass(_default, [{
          key: "init",
          value: function init() {}

          /**
           * Disable all proxy rules provided by this instance
           * @method destroy
           */
        }, {
          key: "unload",
          value: function unload() {}

          // TODO: add documentation
        }, {
          key: "newProxy",
          value: function newProxy() {}

          /**
           * Firefox proxy API entry point - called on new http(s) connection.
           * @method applyFilter
           * @param pps
           * @param url {string}
           * @param defaultProxy
           * @returns aProxy
           */
        }, {
          key: "applyFilter",
          value: function applyFilter(pps, url, defaultProxy) {}
        }]);

        return _default;
      }();

      _export("default", _default);
    }
  };
});
$__System.register('16', ['11', 'f'], function (_export) {

  /*
  Function to create http url
  */
  'use strict';

  var CliqzSecureMessage, console;

  /*
  Converts given array to generator like object.
  */

  _export('createHttpUrl', createHttpUrl);

  _export('trkGen', trkGen);

  _export('prunelocalTemporalUniq', prunelocalTemporalUniq);

  _export('getRandomIntInclusive', getRandomIntInclusive);

  /*
  if(CliqzHumanWeb.actionStats) {
      const itemsLocalValidation = Object.keys(CliqzSecureMessage.localTemporalUniq).length;
      CliqzHumanWeb.actionStats.itemsLocalValidation = itemsLocalValidation;
  }
  */

  function createHttpUrl(host) {
    return 'http://' + host + '/verify';
  }

  function trkGen(_trk) {
    var trk = _trk;
    var idx = -1;
    return {
      next: function next() {
        idx += 1;
        if (idx < trk.length) {
          return {
            value: idx, // Return the first yielded value.
            done: false
          };
        } else {
          return {
            value: undefined, // Return undefined.
            done: true
          };
        }
      }
    };
  }

  function prunelocalTemporalUniq() {
    if (CliqzSecureMessage.localTemporalUniq && Object.keys(CliqzSecureMessage.localTemporalUniq).length > 0) {
      (function () {
        var currTime = Date.now();
        var pi = 0;
        Object.keys(CliqzSecureMessage.localTemporalUniq).forEach(function (e) {
          var d = CliqzSecureMessage.localTemporalUniq[e].ts;
          var diff = currTime - d;
          if (diff >= 24 * 60 * 60 * 1000) {
            delete CliqzSecureMessage.localTemporalUniq[e];
            pi += 1;
          }
        });
      })();
    }
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return {
    setters: [function (_main) {
      CliqzSecureMessage = _main['default'];
    }, function (_coreConsole) {
      console = _coreConsole['default'];
    }],
    execute: function () {}
  };
});
$__System.register('17', ['9', 'f', '15', '16', '11'], function (_export) {
  /*
  Picked up from unblock proxy.es
  */

  'use strict';

  var CliqzUtils, console, ProxyFilter, getRandomIntInclusive, CliqzSecureMessage, _default;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _get = function get(_x, _x2, _x3) {
    var _again = true;_function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_coreUtils) {
      CliqzUtils = _coreUtils['default'];
    }, function (_coreConsole) {
      console = _coreConsole['default'];
    }, function (_platformProxyFilter) {
      ProxyFilter = _platformProxyFilter['default'];
    }, function (_utils) {
      getRandomIntInclusive = _utils.getRandomIntInclusive;
    }, function (_main) {
      CliqzSecureMessage = _main['default'];
    }],
    execute: function () {
      _default = function (_ProxyFilter) {
        _inherits(_default, _ProxyFilter);

        /**
        * Wrapper for rule-based url proxying: implementation for Firefox
        * @class Proxy
        * @namespace unblock
        * @constructor
        */

        function _default() {
          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this);
          this.method = "socks";
          this.port = 9004;
        }

        _createClass(_default, [{
          key: 'shouldProxy',
          value: function shouldProxy(url) {
            var window = CliqzUtils.getWindow();
            return url.scheme === "https" && CliqzSecureMessage.servicesToProxy.indexOf(url.host) > -1 && (CliqzUtils.getPref('hpn-query', false) || CliqzUtils.isOnPrivateTab(window));
          }
        }, {
          key: 'proxy',
          value: function proxy() {
            if (!CliqzSecureMessage.proxyList) {
              return;
            }
            var proxyIdx = getRandomIntInclusive(0, 3);
            var proxyIP = CliqzSecureMessage.proxyList[proxyIdx];
            console.log("Proxying Query: " + proxyIP);

            if (CliqzSecureMessage.proxyInfoObj[proxyIP]) {
              return CliqzSecureMessage.proxyInfoObj[proxyIP];
            } else {
              var ob = this.newProxy(this.method, proxyIP, this.port, null, 1000, null);
              CliqzSecureMessage.proxyInfoObj[proxyIP] = ob;
              return ob;
            }
          }
        }]);

        return _default;
      }(ProxyFilter);

      _export('default', _default);

      ;
    }
  };
});
$__System.register('11', ['6', '9', 'e', 'd', '10', '16', '13', '17', '12'], function (_export) {
  /*
   This module is used for sending the events for purpose of
   human-web, anti-tracking via a secure channel.
  */

  /* Global variables
  */
  'use strict';

  var Storage, CliqzUtils, config, ResourceLoader, sendM, hpnUtils, overRideCliqzResults, ProxyFilter, CryptoWorker, proxyCounter, CliqzSecureMessage;
  return {
    setters: [function (_platformHpnStorage) {
      Storage = _platformHpnStorage['default'];
    }, function (_coreUtils) {
      CliqzUtils = _coreUtils['default'];
    }, function (_coreConfig) {
      config = _coreConfig['default'];
    }, function (_coreResourceLoader) {
      ResourceLoader = _coreResourceLoader['default'];
    }, function (_sendMessage) {
      sendM = _sendMessage.sendM;
    }, function (_utils) {
      hpnUtils = _utils;
    }, function (_httpHandlerPatch) {
      overRideCliqzResults = _httpHandlerPatch.overRideCliqzResults;
    }, function (_proxyFilter) {
      ProxyFilter = _proxyFilter['default'];
    }, function (_cryptoWorker) {
      CryptoWorker = _cryptoWorker['default'];
    }],
    execute: function () {
      proxyCounter = 0;
      CliqzSecureMessage = {
        VERSION: '0.1',
        LOG_KEY: 'securemessage',
        debug: false,
        counter: 0,
        secureLogger: {},
        uPK: {},
        dsPK: {},
        routeTable: null,
        routeTableLoader: null,
        RSAKey: '',
        eventID: {},
        sourceMap: null,
        sourceMapLoader: null,
        tmult: 4,
        tpace: 250,
        SOURCE_MAP_PROVIDER: config.settings.ENDPOINT_SOURCE_MAP_PROVIDER,
        LOOKUP_TABLE_PROVIDER: config.settings.ENDPOINT_LOOKUP_TABLE_PROVIDER,
        KEYS_PROVIDER: config.settings.ENDPOINT_KEYS_PROVIDER,
        proxyList: null,
        proxyListLoader: null,
        proxyStats: {},
        PROXY_LIST_PROVIDER: config.settings.ENDPOINT_PROXY_LIST_PROVIDER,
        BLIND_SIGNER: config.settings.ENDPOINT_BLIND_SIGNER,
        USER_REG: config.settings.ENDPOINT_USER_REG,
        localTemporalUniq: null,
        wCrypto: null,
        queriesID: {},
        servicesToProxy: ["api.cliqz.com", "antiphishing.cliqz.com"],
        proxyInfoObj: {},
        queryProxyFilter: null,
        pacemaker: function pacemaker() {
          CliqzSecureMessage.counter += 1;

          if (CliqzSecureMessage.counter / CliqzSecureMessage.tmult % 10 === 0) {
            if (CliqzSecureMessage.debug) {
              CliqzUtils.log('Pacemaker: ' + CliqzSecureMessage.counter / CliqzSecureMessage.tmult, CliqzSecureMessage.LOG_KEY);
            }
          }

          if (CliqzSecureMessage.counter / CliqzSecureMessage.tmult % 5 === 0) {
            var currentTime = Date.now();

            if (!CliqzUtils.getWindow() || !CliqzUtils.getWindow().CLIQZ || !CliqzUtils.getWindow().CLIQZ.UI) return;
            var tDiff = currentTime - CliqzUtils.getWindow().CLIQZ.UI.lastInputTime;

            if (tDiff > 0 && tDiff > 1000 * 2 * 1) {
              CliqzSecureMessage.proxyIP();
            }

            if (!CliqzSecureMessage.uPK.publicKeyB64 || !CliqzSecureMessage.uPK.privateKey) {
              CliqzSecureMessage.registerUser();
            }
          }

          if (CliqzSecureMessage.counter / CliqzSecureMessage.tmult % (60 * 15 * 1) === 0) {
            if (CliqzSecureMessage.debug) {
              CliqzUtils.log('Clean local temp queue', CliqzSecureMessage.LOG_KEY);
            }
            hpnUtils.prunelocalTemporalUniq();
          }
        },
        // ****************************
        // telemetry, PREFER NOT TO SHARE WITH CliqzUtils for safety, blatant rip-off though
        // ****************************
        trk: [],
        trkTimer: null,
        telemetry: function telemetry(msg, instantPush) {
          if (!CliqzSecureMessage || // might be called after the module gets unloaded
          CliqzUtils.getPref('dnt', false) || CliqzUtils.isPrivate(CliqzUtils.getWindow())) return;

          if (msg) CliqzSecureMessage.trk.push(msg);
          CliqzUtils.clearTimeout(CliqzSecureMessage.trkTimer);
          if (instantPush || CliqzSecureMessage.trk.length % 20 === 0) {
            CliqzSecureMessage.pushTelemetry();
          } else {
            CliqzSecureMessage.trkTimer = CliqzUtils.setTimeout(CliqzSecureMessage.pushTelemetry, 10000);
          }
        },
        _telemetry_req: null,
        _telemetry_sending: [],
        telemetry_MAX_SIZE: 500,
        previousDataPost: null,
        pushMessage: [],
        routeHashTable: null,
        eacemakerId: null,
        queryProxyIP: null,
        performance: null,
        pushTelemetry: function pushTelemetry() {
          CliqzSecureMessage._telemetry_sending = CliqzSecureMessage.trk.splice(0);
          CliqzSecureMessage.pushMessage = hpnUtils.trkGen(CliqzSecureMessage._telemetry_sending);
          var nextMsg = CliqzSecureMessage.nextMessage();
          if (nextMsg) {
            return sendM(nextMsg);
          }
          return Promise.resolve([]);
        },
        nextMessage: function nextMessage() {
          if (CliqzSecureMessage._telemetry_sending.length > 0) {
            return CliqzSecureMessage._telemetry_sending[CliqzSecureMessage.pushMessage.next().value];
          }
        },
        initAtWindow: function initAtWindow(window) {},
        init: function init() {
          // Doing it here, because this lib. uses navigator and window objects.
          // Better method appriciated.

          if (CliqzSecureMessage.pacemakerId == null) {
            CliqzSecureMessage.pacemakerId = CliqzUtils.setInterval(CliqzSecureMessage.pacemaker.bind(this), CliqzSecureMessage.tpace, null);
          }

          // TODO: do not pass this to storage
          this.storage = new Storage(this);

          if (!CliqzSecureMessage.localTemporalUniq) this.storage.loadLocalCheckTable();

          // Load source map. Update it once an hour.
          this.sourceMapLoader = new ResourceLoader(["hpn", "sourcemap.json"], {
            remoteURL: CliqzSecureMessage.SOURCE_MAP_PROVIDER
          });

          this.sourceMapLoader.load().then(function (e) {
            CliqzSecureMessage.sourceMap = e;
          });

          this.sourceMapLoader.onUpdate(function (e) {
            return CliqzSecureMessage.sourceMap = e;
          });

          // Load proxy list. Update every 5 minutes.
          this.proxyListLoader = new ResourceLoader(["hpn", "proxylist.json"], {
            remoteURL: CliqzSecureMessage.PROXY_LIST_PROVIDER,
            cron: 1 * 5 * 60 * 1000,
            updateInterval: 1 * 5 * 60 * 1000
          });

          this.proxyListLoader.load().then(function (e) {
            CliqzSecureMessage.proxyList = e;
          });

          this.proxyListLoader.onUpdate(function (e) {
            return CliqzSecureMessage.proxyList = e;
          });

          // Load lookuptable. Update every 5 minutes.
          this.routeTableLoader = new ResourceLoader(["hpn", "routeTable.json"], {
            remoteURL: CliqzSecureMessage.LOOKUP_TABLE_PROVIDER,
            cron: 1 * 5 * 60 * 1000,
            updateInterval: 1 * 5 * 60 * 1000
          });

          this.routeTableLoader.load().then(function (e) {
            CliqzSecureMessage.routeTable = e;
          });

          this.routeTableLoader.onUpdate(function (e) {
            return CliqzSecureMessage.routeTable = e;
          });

          CliqzSecureMessage.dsPK.pubKeyB64 = config.settings.KEY_DS_PUBKEY;
          CliqzSecureMessage.secureLogger.publicKeyB64 = config.settings.KEY_SECURE_LOGGER_PUBKEY;

          if (CliqzUtils.getPref('proxyNetwork', true)) {
            overRideCliqzResults();
          }
          // Check user-key present or not.
          CliqzSecureMessage.registerUser();

          // Register proxy fr query.

          CliqzSecureMessage.queryProxyFilter = new ProxyFilter();
          CliqzSecureMessage.queryProxyFilter.init();
        },
        unload: function unload() {
          CliqzSecureMessage.queryProxyFilter.unload();
          this.storage.saveLocalCheckTable();
          CliqzSecureMessage.pushTelemetry();
          this.sourceMapLoader.stop();
          this.proxyListLoader.stop();
          this.routeTableLoader.stop();
          CliqzUtils.clearTimeout(CliqzSecureMessage.pacemakerId);
          this.storage.close();
        },
        proxyIP: function proxyIP() {
          if (!CliqzSecureMessage.proxyList) return;

          if (proxyCounter >= CliqzSecureMessage.proxyList.length) proxyCounter = 0;
          var url = hpnUtils.createHttpUrl(CliqzSecureMessage.proxyList[proxyCounter]);
          CliqzSecureMessage.queryProxyIP = url;
          proxyCounter += 1;
          return url;
        },
        registerUser: function registerUser() {
          var _this = this;

          this.storage.loadKeys().then(function (userKey) {
            if (!userKey) {
              (function () {
                var userCrypto = new CryptoWorker();

                userCrypto.onmessage = function (e) {
                  if (e.data.status) {
                    var uK = {};
                    uK.privateKey = e.data.privateKey;
                    uK.publicKey = e.data.publicKey;
                    uK.ts = Date.now();
                    _this.storage.saveKeys(uK).then(function (response) {
                      if (response.status) {
                        CliqzSecureMessage.uPK.publicKeyB64 = response.data.publicKey;
                        CliqzSecureMessage.uPK.privateKey = response.data.privateKey;
                      }
                    });
                  }
                  userCrypto.terminate();
                };

                userCrypto.postMessage({
                  type: 'user-key'
                });
              })();
            } else {
              CliqzSecureMessage.uPK.publicKeyB64 = userKey.publicKey;
              CliqzSecureMessage.uPK.privateKey = userKey.privateKey;
            }
          });
        }
      };

      _export('default', CliqzSecureMessage);
    }
  };
});
$__System.register('12', ['e'], function (_export) {
  'use strict';

  var config, CryptoWorker;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  return {
    setters: [function (_coreConfig) {
      config = _coreConfig['default'];
    }],
    execute: function () {
      CryptoWorker = function () {
        function CryptoWorker() {
          _classCallCheck(this, CryptoWorker);

          this.worker = new Worker(config.baseURL + 'hpn/worker.bundle.js');
        }

        _createClass(CryptoWorker, [{
          key: 'postMessage',
          value: function postMessage() {
            var _worker;

            (_worker = this.worker).postMessage.apply(_worker, arguments);
          }
        }, {
          key: 'terminate',
          value: function terminate() {
            this.worker.terminate();
          }
        }, {
          key: 'onmessage',
          set: function set(fn) {
            this.worker.onmessage = fn;
          }
        }]);

        return CryptoWorker;
      }();

      _export('default', CryptoWorker);
    }
  };
});
$__System.register('18', ['9', '2', '5', '11', '12'], function (_export) {

  /**
  * @namespace hpn
  * @class Background
  */
  'use strict';

  var CliqzUtils, background, isPlatformAtLeastInVersion, CliqzSecureMessage, CryptoWorker;
  return {
    setters: [function (_coreUtils) {
      CliqzUtils = _coreUtils['default'];
    }, function (_coreBaseBackground) {
      background = _coreBaseBackground['default'];
    }, function (_corePlatform) {
      isPlatformAtLeastInVersion = _corePlatform.isPlatformAtLeastInVersion;
    }, function (_main) {
      CliqzSecureMessage = _main['default'];
    }, function (_cryptoWorker) {
      CryptoWorker = _cryptoWorker['default'];
    }],
    execute: function () {
      _export('default', background({
        /**
        * @method init
        */
        init: function init() {
          var FF48_OR_ABOVE = isPlatformAtLeastInVersion('48.0');

          if (FF48_OR_ABOVE) {
            // We need to use this function, 'load' events do not seem to be firing...
            this.enabled = true;
            this.CliqzSecureMessage = CliqzSecureMessage;
            CliqzSecureMessage.init();
            CliqzSecureMessage.wCrypto = new CryptoWorker();
            CliqzSecureMessage.wCrypto.onmessage = function (e) {
              if (e.data.type === 'instant') {
                var callback = CliqzSecureMessage.queriesID[e.data.uid];
                delete CliqzSecureMessage.queriesID[e.data.uid];
                callback && callback({ response: e.data.res });
              }
            };
          }
        },
        /**
        * @method unload
        */
        unload: function unload() {
          if (this.enabled) {
            CliqzSecureMessage.wCrypto.terminate();
            CliqzSecureMessage.unload();
          }
        },

        actions: {
          sha1: function sha1(s) {
            var promise = new Promise(function (resolve, reject) {
              var wCrypto = new CryptoWorker();

              wCrypto.onmessage = function (e) {
                var result = e.data.result;
                wCrypto.terminate();
                resolve(result);
              };

              wCrypto.postMessage({
                "msg": s,
                "type": "hw-sha1"
              });
            });
            return promise;
          },
          md5: function md5(s) {
            var promise = new Promise(function (resolve, reject) {
              var wCrypto = new CryptoWorker();

              wCrypto.onmessage = function (e) {
                var result = e.data.result;
                wCrypto.terminate();
                resolve(result);
              };

              wCrypto.postMessage({
                "msg": s,
                "type": "hw-md5"
              });
            });
            return promise;
          },
          randBigInt: function randBigInt() {
            var promise = new Promise(function (resolve, reject) {
              var wCrypto = new CryptoWorker();

              wCrypto.onmessage = function (e) {
                var result = e.data.result;
                wCrypto.terminate();
                resolve(result);
              };

              wCrypto.postMessage({
                "type": "hw-bigint"
              });
            });
            return promise;
          },
          sendTelemetry: function sendTelemetry(msg) {
            return CliqzSecureMessage.telemetry(msg);
          },

          sendInstantMessage: function sendInstantMessage(rp, payload) {
            CliqzSecureMessage.proxyIP();
            return new Promise(function (resolve, reject) {
              var wCrypto = new CryptoWorker();

              wCrypto.onmessage = function (e) {
                var result = JSON.parse(e.data.res).result;
                wCrypto.terminate();
                resolve(result);
              };
              wCrypto.postMessage({
                msg: {
                  action: 'instant',
                  type: 'cliqz',
                  ts: '',
                  ver: '1.5',
                  payload: payload,
                  rp: rp
                },
                uid: '',
                type: 'instant',
                sourcemap: CliqzSecureMessage.sourceMap,
                upk: CliqzSecureMessage.uPK,
                dspk: CliqzSecureMessage.dsPK,
                sspk: CliqzSecureMessage.secureLogger,
                queryProxyUrl: CliqzSecureMessage.queryProxyIP
              });
            });
          }
        }
      }));
    }
  };
});
$__System.register("e", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "platform": "chromium",
        "brocfile": "node.Brocfile.js",
        "baseURL": "/cliqz/",
        "sourceMaps": true,
        "format": "common",
        "settings": {
          "channel": "CH80",
          "triggers-root": "ghostery-root",
          "CONFIG_PROVIDER": "https://safe-browsing.ghostery.com/config",
          "ENDPOINT_BLIND_SIGNER": "https://ghostery-sign.ghostery.com/sign",
          "ENDPOINT_USER_REG": "https://ghostery-sign.ghostery.com/register",
          "ENDPOINT_SOURCE_MAP_PROVIDER": "https://ghostery-collector.ghostery.com/sourcemapjson",
          "ENDPOINT_LOOKUP_TABLE_PROVIDER": "https://ghostery-collector.ghostery.com/lookuptable",
          "ENDPOINT_KEYS_PROVIDER": "https://ghostery-collector.ghostery.com/signerKey",
          "ENDPOINT_PROXY_LIST_PROVIDER": "https://ghostery-collector.ghostery.com/proxyList",
          "ENDPOINT_PATTERNSURL": "https://safe-browsing.ghostery.com/patterns",
          "ENDPOINT_ANONPATTERNSURL": "https://safe-browsing.ghostery.com/patterns-anon",
          "ENDPOINT_CONFIGURL": "https://safe-browsing.ghostery.com/ts-config",
          "ENDPOINT_SAFE_QUORUM_ENDPOINT": "https://safe-browsing-quorum.ghostery.com/",
          "ENDPOINT_SAFE_QUORUM_PROVIDER": "https://safe-browsing-quorum.ghostery.com/config",
          "MSGCHANNEL": "web-extension",
          "KEY_DS_PUBKEY": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwXo4hXvboKHCggNJ0UNFvZQfDWi0jNcF1kBHthxilMu6LB/hFrSMQ+/FgTqVE36cCezWE0K1UcwmYGVsuqxcvql82RfCmYUVBroJ3UFG8qnetYfU5FOk43C555p5l5HzlF8QilcCUBCO4SCj9lEZ3/8FJboCupTqxEUq7nwUgaNZOiGKMdDUBZJO1tW4LSH4lj9IAZccEJ5HKVmJKopQ3hmzWgDqowxni4NQz+0DnsSfCGAupKaJDxjfajJosX5i674rgdHbZGtgHB3M9jhc6HFNPcmtUgLwgtUtRwMhSnya6q/O06euouNi1h0m5eRrWeMRlJSdUnelLSU8QNy7LQIDAQAB",
          "KEY_SECURE_LOGGER_PUBKEY": "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl/NtZ+fOooNglZct/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB/uF1UjYETBavwUZAxx9Wd/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==",
          "frameScriptWhitelist": []
        },
        "default_prefs": {
          "offers2FeatureEnabled": true,
          "offersLogsEnabled": false,
          "showConsoleLogs": false
        },
        "modules": ["core", "message-center", "hpn", "static", "offers-v2"],
        "environment": "production",
        "EXTENSION_VERSION": "7.17.1",
        "instrumentFunctions": ""
      });
    }
  };
});
$__System.register("19", ["f", "e", "1a", "1b", "9"], function (_export) {
  "use strict";

  var console, config, prefs, Storage, CliqzUtils, eventIDs, port, CLIQZEnvironment, CE;
  return {
    setters: [function (_coreConsole) {
      console = _coreConsole["default"];
    }, function (_coreConfig) {
      config = _coreConfig["default"];
    }, function (_corePrefs) {
      prefs = _corePrefs["default"];
    }, function (_coreStorage) {
      Storage = _coreStorage["default"];
    }, function (_coreUtils) {
      CliqzUtils = _coreUtils["default"];
    }],
    execute: function () {
      eventIDs = {};
      port = chrome.runtime.connect({ name: "encrypted-query" });

      port.onMessage.addListener(function (response) {
        var cb = eventIDs[response.eID].cb;
        delete eventIDs[response.eID];
        cb && cb(response.data);
      });

      CLIQZEnvironment = {
        SKIN_PATH: 'modules/static/skin/',
        RESULTS_PROVIDER: 'https://api.cliqz.com/api/v2/results?nrh=1&q=',
        RICH_HEADER: 'https://api.cliqz.com/api/v2/rich-header?path=/v2/map',
        LOG: 'https://stats.cliqz.com',
        TEMPLATES_PATH: 'modules/static/templates/',
        LOCALE_PATH: config.baseURL + 'static/locale/',
        RERANKERS: [],
        RESULTS_TIMEOUT: 1000, // 1 second
        TEMPLATES: { 'calculator': 1, 'clustering': 1, 'currency': 1, 'custom': 1, 'emphasis': 1, 'empty': 1,
          'generic': 1, /*'images_beta': 1,*/'main': 1, 'results': 1, 'text': 1, 'series': 1,
          'spellcheck': 1,
          'pattern-h1': 3, 'pattern-h2': 2, 'pattern-h3': 1, 'pattern-h3-cluster': 1,
          'pattern-hm': 1,
          'topsites': 3,
          'celebrities': 2, 'Cliqz': 2, 'entity-generic': 2, 'noResult': 3, 'weatherAlert': 3, 'entity-news-1': 3, 'entity-video-1': 3,
          'flightStatusEZ-2': 2, 'weatherEZ': 2,
          'news': 1, 'people': 1, 'video': 1, 'hq': 1,
          'ligaEZ1Game': 2,
          'ligaEZTable': 3,
          'rd-h3-w-rating': 1,
          'vod': 3,
          'movie-vod': 3,
          'liveTicker': 3
        },
        MESSAGE_TEMPLATES: ['footer-message', 'onboarding-callout', 'onboarding-callout-extended', 'slow_connection', 'partials/location/missing_location_2', 'partials/location/no-locale-data'],
        PARTIALS: ['url', 'logo', 'EZ-category', 'partials/ez-title', 'partials/ez-url', 'partials/ez-history', 'partials/ez-description', 'partials/ez-generic-buttons', 'EZ-history', 'rd-h3-w-rating', 'pcgame_movie_side_snippet', 'partials/location/local-data', 'partials/location/missing_location_1', 'partials/timetable-cinema', 'partials/timetable-movie', 'partials/bottom-data-sc', 'partials/download', 'partials/streaming', 'partials/lyrics'],
        telemetry: function telemetry() {},

        isUnknownTemplate: function isUnknownTemplate(template) {
          // in case an unknown template is required
          return template && !CE.TEMPLATES[template];
        },
        getBrandsDBUrl: function getBrandsDBUrl(version) {
          return 'https://cdn.cliqz.com/brands-database/database/' + version + '/data/database.json';
        },
        setInterval: function (_setInterval) {
          function setInterval() {
            return _setInterval.apply(this, arguments);
          }

          setInterval.toString = function () {
            return _setInterval.toString();
          };

          return setInterval;
        }(function () {
          return setInterval.apply(null, arguments);
        }),
        setTimeout: function (_setTimeout) {
          function setTimeout() {
            return _setTimeout.apply(this, arguments);
          }

          setTimeout.toString = function () {
            return _setTimeout.toString();
          };

          return setTimeout;
        }(function () {
          return setTimeout.apply(null, arguments);
        }),
        clearTimeout: function (_clearTimeout) {
          function clearTimeout() {
            return _clearTimeout.apply(this, arguments);
          }

          clearTimeout.toString = function () {
            return _clearTimeout.toString();
          };

          return clearTimeout;
        }(function () {
          clearTimeout.apply(null, arguments);
        }),
        Promise: Promise,
        OS: 'chromium',
        isPrivate: function isPrivate() {
          return chrome.extension.inIncognitoContext;
        },
        isOnPrivateTab: function isOnPrivateTab(win) {
          return CE.isPrivate();
        },
        getWindow: function getWindow() {
          return { document: { getElementById: function getElementById() {} } };
        },
        openLink: function openLink(win, url, newTab) {
          chrome.cliqzSearchPrivate.navigate(url, !!newTab);
        },

        copyResult: function copyResult(val) {
          var backup = document.oncopy;
          try {
            document.oncopy = function (event) {
              event.clipboardData.setData("text/plain", val);
              event.preventDefault();
            };
            document.execCommand("copy", false, null);
          } finally {
            document.oncopy = backup;
          }
        },
        // debug
        _ENGINES: [{
          "name": "CLIQZ dummy search", "alias": "#qq", "default": true, "icon": "", "searchForm": "https://www.cliqz.com/?q={searchTerms}", "suggestionUrl": "", "base_url": "https://www.cliqz.com/search?q=", "prefix": "#qq", "code": 3
        }],
        getSearchEngines: function getSearchEngines() {
          return CE._ENGINES.map(function (e) {
            e.getSubmissionForQuery = function (q) {
              //TODO: create the correct search URL
              return e.searchForm.replace("{searchTerms}", q);
            };

            e.getSuggestionUrlForQuery = function (q) {
              //TODO: create the correct search URL
              return e.suggestionUrl.replace("{searchTerms}", q);
            };

            return e;
          });
        },
        updateAlias: function updateAlias() {},
        getEngineByAlias: function getEngineByAlias(alias) {
          return CE._ENGINES.find(function (engine) {
            return engine.alias === alias;
          });
        },
        getEngineByName: function getEngineByName(name) {
          return CE._ENGINES.find(function (engine) {
            return engine.name === name;
          });
        },
        getNoResults: function getNoResults(q) {
          var engines = CE.getSearchEngines().map(function (e) {
            e.style = CE.getLogoDetails(CE.getDetailsFromUrl(e.searchForm)).style;
            e.text = e.alias.slice(1);
            return e;
          });
          var defaultName = CE.getDefaultSearchEngine().name,
              isUrl = CliqzUtils.isUrl(q);

          return CE.Result.cliqz({
            template: 'noResult',
            snippet: {
              text_line1: CE.getLocalizedString(isUrl ? 'noResultUrlNavigate' : 'noResultTitle'),
              // forwarding the query to the default search engine is not handled by CLIQZ but by Firefox
              // we should take care of this specific case differently on alternative platforms
              text_line2: isUrl ? CE.getLocalizedString('noResultUrlSearch') : CE.getLocalizedString('noResultMessage', defaultName),
              "search_engines": engines,
              //use local image in case of no internet connection
              "cliqz_logo": CE.SKIN_PATH + "img/cliqz.svg"
            },
            type: 'rh',
            subType: { empty: true }
          });
        },
        setDefaultSearchEngine: function setDefaultSearchEngine(engine) {
          var storage = new Storage();
          storage.setObject('defaultSearchEngine', engine);
        },
        getDefaultSearchEngine: function getDefaultSearchEngine() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = CE.getSearchEngines()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var e = _step.value;

              if (e["default"]) return e;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"]) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        },
        onRenderComplete: function onRenderComplete(query, allUrls) {
          chrome.cliqzSearchPrivate.processResults(query, allUrls);
        },
        onResultSelectionChange: function onResultSelectionChange(position) {
          chrome.cliqzSearchPrivate.onResultSelectionChange(position);
        },
        setSupportInfo: function setSupportInfo() {}
      };
      CE = CLIQZEnvironment;
      // Shorthand alias.

      _export("default", CLIQZEnvironment);
    }
  };
});
$__System.registerDynamic('1c', [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  function Rule(data) {
    data = data || {};

    this.exception = data.exception || false;
    this.firstLevel = data.firstLevel || '';
    this.secondLevel = data.secondLevel || null;
    this.isHost = data.isHost || false;
    this.source = data.source || '';
    this.wildcard = data.wildcard || false;
  }

  /**
   * Returns the TLD or SLD (Second Level Domain) pattern for a rule
   *
   * @return {String}
   */
  Rule.prototype.getNormalXld = function getNormalXld() {
    return (this.secondLevel ? '.' + this.secondLevel : '') + '.' + this.firstLevel;
  };

  /**
   * Returns a pattern suitable for normal rule
   * Mostly for internal use
   *
   * @return {String}
   */
  Rule.prototype.getNormalPattern = function getNormalPattern() {
    return (this.secondLevel ? '\\.' + this.secondLevel : '') + '\\.' + this.firstLevel;
  };

  /**
   * Returns a pattern suitable for wildcard rule
   * Mostly for internal use
   *
   * @return {String}
   */
  Rule.prototype.getWildcardPattern = function getWildcardPattern() {
    return '\\.[^\\.]+' + this.getNormalXld().replace(/\./g, '\\.');
  };

  /**
   * Returns a pattern suitable for exception rule
   * Mostly for internal use
   *
   * @return {String}
   */
  Rule.prototype.getExceptionPattern = function getExceptionPattern() {
    return (this.secondLevel || '') + '\\.' + this.firstLevel;
  };

  /**
   * Returns the best pattern possible for a rule
   * You just have to test a value against it to check or extract a hostname
   *
   * @api
   * @param {string|undefined} before
   * @param {string|undefined} after
   * @return {String} A pattern to challenge some string against
   */
  Rule.prototype.getPattern = function getPattern(before, after) {
    var pattern = '';

    before = before === undefined ? '(' : before + '';
    after = after === undefined ? ')$' : after + '';

    if (this.exception === true) {
      pattern = this.getExceptionPattern();
    } else if (this.isHost === true) {
      pattern = this.firstLevel;
    } else {
      pattern = '[^\\.]+' + (this.wildcard ? this.getWildcardPattern() : this.getNormalPattern());
    }

    return before + pattern + after;
  };

  module.exports = Rule;
});
(function() {
var define = $__System.amdDefine;
;
(function(root) {
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  var freeModule = typeof module == 'object' && module && !module.nodeType && module;
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
    root = freeGlobal;
  }
  var punycode,
      maxInt = 2147483647,
      base = 36,
      tMin = 1,
      tMax = 26,
      skew = 38,
      damp = 700,
      initialBias = 72,
      initialN = 128,
      delimiter = '-',
      regexPunycode = /^xn--/,
      regexNonASCII = /[^\x20-\x7E]/,
      regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
      errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
      },
      baseMinusTMin = base - tMin,
      floor = Math.floor,
      stringFromCharCode = String.fromCharCode,
      key;
  function error(type) {
    throw new RangeError(errors[type]);
  }
  function map(array, fn) {
    var length = array.length;
    var result = [];
    while (length--) {
      result[length] = fn(array[length]);
    }
    return result;
  }
  function mapDomain(string, fn) {
    var parts = string.split('@');
    var result = '';
    if (parts.length > 1) {
      result = parts[0] + '@';
      string = parts[1];
    }
    string = string.replace(regexSeparators, '\x2E');
    var labels = string.split('.');
    var encoded = map(labels, fn).join('.');
    return result + encoded;
  }
  function ucs2decode(string) {
    var output = [],
        counter = 0,
        length = string.length,
        value,
        extra;
    while (counter < length) {
      value = string.charCodeAt(counter++);
      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        extra = string.charCodeAt(counter++);
        if ((extra & 0xFC00) == 0xDC00) {
          output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  function ucs2encode(array) {
    return map(array, function(value) {
      var output = '';
      if (value > 0xFFFF) {
        value -= 0x10000;
        output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
        value = 0xDC00 | value & 0x3FF;
      }
      output += stringFromCharCode(value);
      return output;
    }).join('');
  }
  function basicToDigit(codePoint) {
    if (codePoint - 48 < 10) {
      return codePoint - 22;
    }
    if (codePoint - 65 < 26) {
      return codePoint - 65;
    }
    if (codePoint - 97 < 26) {
      return codePoint - 97;
    }
    return base;
  }
  function digitToBasic(digit, flag) {
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  function decode(input) {
    var output = [],
        inputLength = input.length,
        out,
        i = 0,
        n = initialN,
        bias = initialBias,
        basic,
        j,
        index,
        oldi,
        w,
        k,
        digit,
        t,
        baseMinusT;
    basic = input.lastIndexOf(delimiter);
    if (basic < 0) {
      basic = 0;
    }
    for (j = 0; j < basic; ++j) {
      if (input.charCodeAt(j) >= 0x80) {
        error('not-basic');
      }
      output.push(input.charCodeAt(j));
    }
    for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
      for (oldi = i, w = 1, k = base; ; k += base) {
        if (index >= inputLength) {
          error('invalid-input');
        }
        digit = basicToDigit(input.charCodeAt(index++));
        if (digit >= base || digit > floor((maxInt - i) / w)) {
          error('overflow');
        }
        i += digit * w;
        t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
        if (digit < t) {
          break;
        }
        baseMinusT = base - t;
        if (w > floor(maxInt / baseMinusT)) {
          error('overflow');
        }
        w *= baseMinusT;
      }
      out = output.length + 1;
      bias = adapt(i - oldi, out, oldi == 0);
      if (floor(i / out) > maxInt - n) {
        error('overflow');
      }
      n += floor(i / out);
      i %= out;
      output.splice(i++, 0, n);
    }
    return ucs2encode(output);
  }
  function encode(input) {
    var n,
        delta,
        handledCPCount,
        basicLength,
        bias,
        j,
        m,
        q,
        k,
        t,
        currentValue,
        output = [],
        inputLength,
        handledCPCountPlusOne,
        baseMinusT,
        qMinusT;
    input = ucs2decode(input);
    inputLength = input.length;
    n = initialN;
    delta = 0;
    bias = initialBias;
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < 0x80) {
        output.push(stringFromCharCode(currentValue));
      }
    }
    handledCPCount = basicLength = output.length;
    if (basicLength) {
      output.push(delimiter);
    }
    while (handledCPCount < inputLength) {
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }
      handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error('overflow');
      }
      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue < n && ++delta > maxInt) {
          error('overflow');
        }
        if (currentValue == n) {
          for (q = delta, k = base; ; k += base) {
            t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
            if (q < t) {
              break;
            }
            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
            q = floor(qMinusT / baseMinusT);
          }
          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }
      ++delta;
      ++n;
    }
    return output.join('');
  }
  function toUnicode(input) {
    return mapDomain(input, function(string) {
      return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
    });
  }
  function toASCII(input) {
    return mapDomain(input, function(string) {
      return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
    });
  }
  punycode = {
    'version': '1.4.1',
    'ucs2': {
      'decode': ucs2decode,
      'encode': ucs2encode
    },
    'decode': decode,
    'encode': encode,
    'toASCII': toASCII,
    'toUnicode': toUnicode
  };
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    define("1d", [], function() {
      return punycode;
    }) && define("punycode", ["1d"], function(m) {
      return m;
    });
  } else if (freeExports && freeModule) {
    if (module.exports == freeExports) {
      freeModule.exports = punycode;
    } else {
      for (key in punycode) {
        punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
      }
    }
  } else {
    root.punycode = punycode;
  }
}(this));

})();
$__System.registerDynamic('1e', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = {
    isString: function (arg) {
      return typeof arg === 'string';
    },
    isObject: function (arg) {
      return typeof arg === 'object' && arg !== null;
    },
    isNull: function (arg) {
      return arg === null;
    },
    isNullOrUndefined: function (arg) {
      return arg == null;
    }
  };
});
$__System.registerDynamic('1f', [], true, function ($__require, exports, module) {
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  'use strict';

  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707

  var global = this || self,
      GLOBAL = global;
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  module.exports = function (qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};

    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }

    var regexp = /\+/g;
    qs = qs.split(sep);

    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }

    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }

    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr,
          vstr,
          k,
          v;

      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }

      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);

      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }

    return obj;
  };
});
$__System.registerDynamic('20', [], true, function ($__require, exports, module) {
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var stringifyPrimitive = function (v) {
    switch (typeof v) {
      case 'string':
        return v;

      case 'boolean':
        return v ? 'true' : 'false';

      case 'number':
        return isFinite(v) ? v : '';

      default:
        return '';
    }
  };

  module.exports = function (obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }

    if (typeof obj === 'object') {
      return Object.keys(obj).map(function (k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function (v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }

    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };
});
$__System.registerDynamic('21', ['1f', '20'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.decode = exports.parse = $__require('1f');
  exports.encode = exports.stringify = $__require('20');
});
$__System.registerDynamic('22', ['1d', '1e', '21'], true, function ($__require, exports, module) {
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var punycode = $__require('1d');
  var util = $__require('1e');

  exports.parse = urlParse;
  exports.resolve = urlResolve;
  exports.resolveObject = urlResolveObject;
  exports.format = urlFormat;

  exports.Url = Url;

  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }

  // Reference: RFC 3986, RFC 1808, RFC 2396

  // define these here so at least they only have to be
  // compiled once on the first module load.
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,


  // Special case for a simple path URL
  simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,


  // RFC 2396: characters reserved for delimiting URLs.
  // We actually just auto-escape these.
  delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],


  // RFC 2396: characters not allowed for various reasons.
  unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),


  // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  autoEscape = ['\''].concat(unwise),

  // Characters that are never ever allowed in a hostname.
  // Note that any invalid chars are also handled, but these
  // are the ones that are *expected* to be seen, so we fast-path
  // them.
  nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
      hostEndingChars = ['/', '?', '#'],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,

  // protocols that can allow "unsafe" and "unwise" chars.
  unsafeProtocol = {
    'javascript': true,
    'javascript:': true
  },

  // protocols that never have a hostname.
  hostlessProtocol = {
    'javascript': true,
    'javascript:': true
  },

  // protocols that always contain a // bit.
  slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
  },
      querystring = $__require('21');

  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url) return url;

    var u = new Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }

  Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf('?'),
        splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
        uSplit = url.split(splitter),
        slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);

    var rest = url;

    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();

    if (!slashesDenoteHost && url.split('#').length === 1) {
      // Try fast path regexp
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = '';
          this.query = {};
        }
        return this;
      }
    }

    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }

    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }

    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {

      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      //
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      //
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c

      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.

      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }

      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
      var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
      }

      // Now we have a portion which is definitely the auth.
      // Pull that off.
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }

      // the host is the remaining to the left of the first non-host char
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }
      // if we still have not hit it, then the entire thing is a host.
      if (hostEnd === -1) hostEnd = rest.length;

      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);

      // pull out port.
      this.parseHost();

      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
      this.hostname = this.hostname || '';

      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

      // validate a little.
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }

      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
      }

      if (!ipv6Hostname) {
        // IDNA Support: Returns a punycoded representation of "domain".
        // It only converts parts of the domain name that
        // have non-ASCII characters, i.e. it doesn't matter if
        // you call it with a domain that already is ASCII-only.
        this.hostname = punycode.toASCII(this.hostname);
      }

      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;

      // strip [ and ] from the hostname
      // the host field still retains them, though
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }

    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) {

      // First, make 100% sure that any "autoEscape" chars get
      // escaped, even if encodeURIComponent doesn't think they
      // need to be.
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }

    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      // no query string, but parseQueryString still requested
      this.search = '';
      this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '/';
    }

    //to support http.request
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }

    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
  };

  // format a parsed object into a url string
  function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (util.isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
  }

  Url.prototype.format = function () {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }

    var protocol = this.protocol || '',
        pathname = this.pathname || '',
        hash = this.hash || '',
        host = false,
        query = '';

    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }

    if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
      query = querystring.stringify(this.query);
    }

    var search = this.search || query && '?' + query || '';

    if (protocol && protocol.substr(-1) !== ':') protocol += ':';

    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }

    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;

    pathname = pathname.replace(/[?#]/g, function (match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');

    return protocol + host + pathname + search + hash;
  };

  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }

  Url.prototype.resolve = function (relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };

  function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
  }

  Url.prototype.resolveObject = function (relative) {
    if (util.isString(relative)) {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }

    var result = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
      // take everything except the protocol from relative
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== 'protocol') result[rkey] = relative[rkey];
      }

      //urlParse appends trailing / to urls like http://www.example.com
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }

      result.href = result.format();
      return result;
    }

    if (relative.protocol && relative.protocol !== result.protocol) {
      // if it's a known url protocol, then changing
      // the protocol does weird things
      // first, if it's not file:, then we MUST have a host,
      // and if there was a path
      // to begin with, then we MUST have a path.
      // if it is file:, then the host is dropped,
      // because that's known to be hostless.
      // anything else is assumed to be absolute.
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }

      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift()));
        if (!relative.host) relative.host = '';
        if (!relative.hostname) relative.hostname = '';
        if (relPath[0] !== '') relPath.unshift('');
        if (relPath.length < 2) relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      // to support http.request
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }

    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
        isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
        mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
        removeAllDots = mustEndAbs,
        srcPath = result.pathname && result.pathname.split('/') || [],
        relPath = relative.pathname && relative.pathname.split('/') || [],
        psychotic = result.protocol && !slashedProtocol[result.protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }

    if (isRelAbs) {
      // it's absolute.
      result.host = relative.host || relative.host === '' ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
      // fall through to the dot-handling below.
    } else if (relPath.length) {
      // it's relative
      // throw away the existing file, and take the new path instead.
      if (!srcPath) srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
      // just pull out the search.
      // like href='?foo'.
      // Put this after the other two cases because it simplifies the booleans
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      //to support http.request
      if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }

    if (!srcPath.length) {
      // no path at all.  easy.
      // we've already handled the other stuff above.
      result.pathname = null;
      //to support http.request
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }

    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }

    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
      srcPath.push('');
    }

    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

    // put the host back
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }

    mustEndAbs = mustEndAbs || result.host && srcPath.length;

    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }

    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }

    //to support request.http
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };

  Url.prototype.parseHost = function () {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
  };
});
$__System.registerDynamic('23', ['1c', '22'], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var Rule = $__require('1c');
  var URL = $__require('22');

  /**
   * tld library
   *
   * Useable methods are those documented with an @api in JSDoc
   * See README.md for more explanations on how to use this stuff.
   */
  function tld() {
    /* jshint validthis: true */
    this.validHosts = [];
    this.rules = [];
  }

  tld.init = function init() {
    return new tld();
  };

  function trim(value) {
    return String(value).replace(/(^\s+|\s+$)/g, '');
  }

  // Array.some() polyfill for IE8
  function _someFunction(value, fun /*, thisArg */) {
    'use strict';

    if (value === void 0 || value === null) throw new TypeError();

    var t = Object(value);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var thisArg = arguments.length >= 3 ? arguments[2] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(thisArg, t[i], i, t)) return true;
    }

    return false;
  }

  // Array.map polyfill for IE8
  function _mapFunction(thisVal, fun /*, thisArg */) {
    "use strict";

    if (thisVal === void 0 || thisVal === null) throw new TypeError();

    var t = Object(thisVal);
    var len = t.length >>> 0;
    if (typeof fun !== "function") {
      throw new TypeError();
    }

    var res = new Array(len);
    var thisArg = arguments.length >= 3 ? arguments[2] : void 0;

    for (var i = 0; i < len; i++) {
      // NOTE: Absolute correctness would demand Object.defineProperty
      //       be used.  But this method is fairly new, and failure is
      //       possible only if Object.prototype or Array.prototype
      //       has a property |i| (very unlikely), so use a lesscorrect
      //       but more portable alternative.
      if (i in t) res[i] = fun.call(thisArg, t[i], i, t);
    }

    return res;
  };

  /**
   * Returns the best rule for a given host based on candidates
   *
   * @static
   * @param host {String} Hostname to check rules against
   * @param rules {Array} List of rules used to work on
   * @return {Object} Candidate object, with a normal and exception state
   */
  tld.getCandidateRule = function getCandidateRule(host, rules, options) {
    var rule = { 'normal': null, 'exception': null };

    options = options || { lazy: false };

    _someFunction(rules, function (r) {
      var pattern;

      // sld matching or validHost? escape the loop immediately (except if it's an exception)
      if ('.' + host === r.getNormalXld()) {
        if (options.lazy || r.exception || r.isHost) {
          rule.normal = r;
        }

        return true;
      }

      // otherwise check as a complete host
      // if it's an exception, we want to loop a bit more to a normal rule
      pattern = '.+' + r.getNormalPattern() + '$';

      if (new RegExp(pattern).test(host)) {
        rule[r.exception ? 'exception' : 'normal'] = r;
        return !r.exception;
      }

      return false;
    });

    // favouring the exception if encountered
    // previously we were copy-altering a rule, creating inconsistent results based on rule order order
    // @see https://github.com/oncletom/tld.js/pull/35
    if (rule.normal && rule.exception) {
      return rule.exception;
    }

    return rule.normal;
  };

  /**
   * Retrieve a subset of rules for a Top-Level-Domain string
   *
   * @param tld {String} Top-Level-Domain string
   * @return {Array} Rules subset
   */
  tld.prototype.getRulesForTld = function getRulesForTld(tld, default_rule) {
    var exception = '!';
    var wildcard = '*';
    var append_tld_rule = true;
    var rules = this.rules[tld];

    // Already parsed
    // Array.isArray polyfill for IE8
    if (Object.prototype.toString.call(rules) === '[object Array]') {
      return rules;
    }

    // Nothing found, apply some default value
    if (rules === void 0) {
      return default_rule ? [default_rule] : [];
    }

    // Parsing needed
    rules = _mapFunction(rules.split('|'), function transformAsRule(sld) {
      var first_bit = sld[0];

      if (first_bit === exception || first_bit === wildcard) {
        sld = sld.slice(1);

        if (!sld) {
          append_tld_rule = false;
        }
      }

      return new Rule({
        "firstLevel": tld,
        "secondLevel": sld,
        "exception": first_bit === exception,
        "wildcard": first_bit === wildcard
      });
    });

    // Always prepend to make it the latest rule to be applied
    if (append_tld_rule) {
      rules.unshift(new Rule({
        "firstLevel": tld
      }));
    }

    this.rules[tld] = rules.reverse();

    return rules;
  };

  /**
   * Checks if the TLD exists for a given host
   *
   * @api
   * @param {string} host
   * @return {boolean}
   */
  tld.prototype.tldExists = function tldExists(host) {
    var hostTld;

    host = tld.cleanHostValue(host);

    // Easy case, it's a TLD
    if (this.rules[host]) {
      return true;
    }

    // Popping only the TLD of the hostname
    hostTld = tld.extractTldFromHost(host);

    return this.rules[hostTld] !== undefined;
  };

  /**
   * Returns the public suffix (including exact matches)
   *
   * @api
   * @since 1.5
   * @param {string} host
   * @return {String}
   */
  tld.prototype.getPublicSuffix = function getPublicSuffix(host) {
    var hostTld, rules, rule;

    if (host in this.rules) {
      return host;
    }

    host = tld.cleanHostValue(host);
    hostTld = tld.extractTldFromHost(host);
    rules = this.getRulesForTld(hostTld);
    rule = tld.getCandidateRule(host, rules, { lazy: true });

    if (rule === null) {
      return null;
    }

    return rule.getNormalXld().slice(1);
  };

  /**
   * Detects the domain based on rules and upon and a host string
   *
   * @api
   * @param {string} host
   * @return {String}
   */
  tld.prototype.getDomain = function getDomain(host) {
    var domain = null,
        hostTld,
        rules,
        rule;

    if (this.isValid(host) === false) {
      return null;
    }

    host = tld.cleanHostValue(host);
    hostTld = tld.extractTldFromHost(host);
    rules = this.getRulesForTld(hostTld, new Rule({ "firstLevel": hostTld, "isHost": this.validHosts.indexOf(hostTld) !== -1 }));
    rule = tld.getCandidateRule(host, rules);

    if (rule === null) {
      return null;
    }

    host.replace(new RegExp(rule.getPattern()), function (m, d) {
      domain = d;
    });

    return domain;
  };

  /**
   * Returns the subdomain of a host string
   *
   * @api
   * @param {string} host
   * @return {string|null} a subdomain string if any, blank string if subdomain is empty, otherwise null
   */
  tld.prototype.getSubdomain = function getSubdomain(host) {
    var domain, r, subdomain;

    host = tld.cleanHostValue(host);
    domain = this.getDomain(host);

    // No domain found? Just abort, abort!
    if (domain === null) {
      return null;
    }

    r = '\\.?' + tld.escapeRegExp(domain) + '$';
    subdomain = host.replace(new RegExp(r, 'i'), '');

    return subdomain;
  };

  /**
   * Checking if a host string is valid
   * It's usually a preliminary check before trying to use getDomain or anything else
   *
   * Beware: it does not check if the TLD exists.
   *
   * @api
   * @param host {String}
   * @return {Boolean}
   */
  tld.prototype.isValid = function isValid(host) {
    return typeof host === 'string' && (this.validHosts.indexOf(host) !== -1 || host.indexOf('.') !== -1 && host[0] !== '.');
  };

  /**
   * Utility to cleanup the base host value. Also removes url fragments.
   *
   * Works for:
   * - hostname
   * - //hostname
   * - scheme://hostname
   * - scheme+scheme://hostname
   *
   * @param {string} value
   * @return {String}
   */

  // scheme      = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
  var hasPrefixRE = /^(([a-z][a-z0-9+.-]*)?:)?\/\//;
  var invalidHostnameChars = /[^A-Za-z0-9.-]/;

  tld.cleanHostValue = function cleanHostValue(value) {
    value = trim(value).toLowerCase();

    var parts = URL.parse(hasPrefixRE.test(value) ? value : '//' + value, null, true);

    if (parts.hostname && !invalidHostnameChars.test(parts.hostname)) {
      return parts.hostname;
    }
    if (!invalidHostnameChars.test(value)) {
      return value;
    }
    return '';
  };

  /**
   * Utility to extract the TLD from a host string
   *
   * @param {string} host
   * @return {String}
   */
  tld.extractTldFromHost = function extractTldFromHost(host) {
    return host.split('.').pop();
  };

  /**
   * Escapes RegExp specific chars.
   *
   * @since 1.3.1
   * @see https://github.com/oncletom/tld.js/pull/33
   * @param {String|Mixed} s
   * @returns {string} Escaped string for a safe use in a `new RegExp` expression
   */
  tld.escapeRegExp = function escapeRegExp(s) {
    return String(s).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  };

  module.exports = tld;
});
$__System.registerDynamic("24", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = { "ac": "com|edu|gov|net|mil|org", "ad": "nom", "ae": "co|net|org|sch|ac|gov|mil|blogspot|nom", "aero": "accident-investigation|accident-prevention|aerobatic|aeroclub|aerodrome|agents|aircraft|airline|airport|air-surveillance|airtraffic|air-traffic-control|ambulance|amusement|association|author|ballooning|broker|caa|cargo|catering|certification|championship|charter|civilaviation|club|conference|consultant|consulting|control|council|crew|design|dgca|educator|emergency|engine|engineer|entertainment|equipment|exchange|express|federation|flight|freight|fuel|gliding|government|groundhandling|group|hanggliding|homebuilt|insurance|journal|journalist|leasing|logistics|magazine|maintenance|media|microlight|modelling|navigation|parachuting|paragliding|passenger-association|pilot|press|production|recreation|repbody|res|research|rotorcraft|safety|scientist|services|show|skydiving|software|student|trader|trading|trainer|union|workinggroup|works", "af": "gov|com|org|net|edu", "ag": "com|org|net|co|nom", "ai": "off|com|net|org|nom", "al": "com|edu|gov|mil|net|org|blogspot|nom", "am": "blogspot", "ao": "ed|gv|og|co|pb|it", "aq": "", "ar": "com|edu|gob|gov|int|mil|musica|net|org|tur|blogspot.com", "arpa": "e164|in-addr|ip6|iris|uri|urn", "as": "gov", "asia": "cloudns", "at": "ac|co|gv|or|futurehosting|futuremailing|*ex.ortsinfo|*kunden.ortsinfo|blogspot.co|biz|info|priv|12hp|2ix|4lima|lima-city", "au": "com|net|org|edu|gov|asn|id|info|conf|oz|act|nsw|nt|qld|sa|tas|vic|wa|act.edu|nsw.edu|nt.edu|qld.edu|sa.edu|tas.edu|vic.edu|wa.edu|qld.gov|sa.gov|tas.gov|vic.gov|wa.gov|blogspot.com", "aw": "com", "ax": "", "az": "com|net|int|gov|org|edu|info|pp|mil|name|pro|biz", "ba": "com|edu|gov|mil|net|org|blogspot", "bb": "biz|co|com|edu|gov|info|net|org|store|tv", "bd": "*", "be": "ac|blogspot|*transurl", "bf": "gov", "bg": "a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|blogspot|barsy", "bh": "com|edu|net|org|gov", "bi": "co|com|edu|or|org", "biz": "cloudns|dyndns|for-better|for-more|for-some|for-the|selfip|webhop|mmafan|myftp|no-ip|dscloud", "bj": "asso|barreau|gouv|blogspot", "bm": "com|edu|gov|net|org", "bn": "*", "bo": "com|edu|gov|gob|int|org|net|mil|tv", "br": "adm|adv|agr|am|arq|art|ato|b|belem|bio|blog|bmd|cim|cng|cnt|com|coop|cri|def|ecn|eco|edu|emp|eng|esp|etc|eti|far|flog|floripa|fm|fnd|fot|fst|g12|ggf|gov|ac.gov|al.gov|am.gov|ap.gov|ba.gov|ce.gov|df.gov|es.gov|go.gov|ma.gov|mg.gov|ms.gov|mt.gov|pa.gov|pb.gov|pe.gov|pi.gov|pr.gov|rj.gov|rn.gov|ro.gov|rr.gov|rs.gov|sc.gov|se.gov|sp.gov|to.gov|imb|ind|inf|jampa|jor|jus|leg|lel|mat|med|mil|mp|mus|net|*nom|not|ntr|odo|org|poa|ppg|pro|psc|psi|qsl|radio|rec|recife|slg|srv|taxi|teo|tmp|trd|tur|tv|vet|vix|vlog|wiki|zlg|blogspot.com|ac.leg|al.leg|am.leg|ap.leg|ba.leg|ce.leg|df.leg|es.leg|go.leg|ma.leg|mg.leg|ms.leg|mt.leg|pa.leg|pb.leg|pe.leg|pi.leg|pr.leg|rj.leg|rn.leg|ro.leg|rr.leg|rs.leg|sc.leg|se.leg|sp.leg|to.leg", "bs": "com|net|org|edu|gov|we", "bt": "com|edu|gov|net|org", "bv": "", "bw": "co|org", "by": "gov|mil|com|of|blogspot.com|nym", "bz": "com|net|org|edu|gov|za|nym", "ca": "ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk|gc|*awdev|co|blogspot|no-ip", "cat": "", "cc": "cloudns|ftpaccess|game-server|myphotos|scrapping|twmail|fantasyleague", "cd": "gov", "cf": "blogspot", "cg": "", "ch": "square7|blogspot|gotdns|12hp|2ix|4lima|lima-city", "ci": "org|or|com|co|edu|ed|ac|net|go|asso|xn--aroport-bya|int|presse|md|gouv", "ck": "*|!www", "cl": "gov|gob|co|mil|blogspot|nom", "cm": "co|com|gov|net", "cn": "ac|com|edu|gov|net|org|mil|xn--55qx5d|xn--io0a7i|xn--od0alg|ah|bj|cq|fj|gd|gs|gz|gx|ha|hb|he|hi|hl|hn|jl|js|jx|ln|nm|nx|qh|sc|sd|sh|sn|sx|tj|xj|xz|yn|zj|hk|mo|tw|*compute.amazonaws.com|elasticbeanstalk.cn-north-1.amazonaws.com|*elb.amazonaws.com|s3.cn-north-1.amazonaws.com", "co": "arts|com|edu|firm|gov|info|int|mil|net|nom|org|rec|web|blogspot.com|nodum", "com": "*compute.amazonaws|*compute-1.amazonaws|us-east-1.amazonaws|*elasticbeanstalk|*elb.amazonaws|s3.amazonaws|s3-ap-northeast-1.amazonaws|s3-ap-northeast-2.amazonaws|s3-ap-south-1.amazonaws|s3-ap-southeast-1.amazonaws|s3-ap-southeast-2.amazonaws|s3-ca-central-1.amazonaws|s3-eu-central-1.amazonaws|s3-eu-west-1.amazonaws|s3-eu-west-2.amazonaws|s3-external-1.amazonaws|s3-fips-us-gov-west-1.amazonaws|s3-sa-east-1.amazonaws|s3-us-gov-west-1.amazonaws|s3-us-east-2.amazonaws|s3-us-west-1.amazonaws|s3-us-west-2.amazonaws|s3.ap-northeast-2.amazonaws|s3.ap-south-1.amazonaws|s3.ca-central-1.amazonaws|s3.eu-central-1.amazonaws|s3.eu-west-2.amazonaws|s3.us-east-2.amazonaws|s3.dualstack.ap-northeast-1.amazonaws|s3.dualstack.ap-northeast-2.amazonaws|s3.dualstack.ap-south-1.amazonaws|s3.dualstack.ap-southeast-1.amazonaws|s3.dualstack.ap-southeast-2.amazonaws|s3.dualstack.ca-central-1.amazonaws|s3.dualstack.eu-central-1.amazonaws|s3.dualstack.eu-west-1.amazonaws|s3.dualstack.eu-west-2.amazonaws|s3.dualstack.sa-east-1.amazonaws|s3.dualstack.us-east-1.amazonaws|s3.dualstack.us-east-2.amazonaws|s3-website-us-east-1.amazonaws|s3-website-us-west-1.amazonaws|s3-website-us-west-2.amazonaws|s3-website-ap-northeast-1.amazonaws|s3-website-ap-southeast-1.amazonaws|s3-website-ap-southeast-2.amazonaws|s3-website-eu-west-1.amazonaws|s3-website-sa-east-1.amazonaws|s3-website.ap-northeast-2.amazonaws|s3-website.ap-south-1.amazonaws|s3-website.ca-central-1.amazonaws|s3-website.eu-central-1.amazonaws|s3-website.eu-west-2.amazonaws|s3-website.us-east-2.amazonaws|on-aptible|myasustor|betainabox|bplaced|ar|br|cn|de|eu|gb|hu|jpn|kr|mex|no|qc|ru|sa|se|uk|us|uy|za|africa|gr|co|xenapponazure|jdevcloud|wpdevcloud|cloudcontrolled|cloudcontrolapp|drayddns|dreamhosters|mydrobo|dyndns-at-home|dyndns-at-work|dyndns-blog|dyndns-free|dyndns-home|dyndns-ip|dyndns-mail|dyndns-office|dyndns-pics|dyndns-remote|dyndns-server|dyndns-web|dyndns-wiki|dyndns-work|blogdns|cechire|dnsalias|dnsdojo|doesntexist|dontexist|doomdns|dyn-o-saur|dynalias|est-a-la-maison|est-a-la-masion|est-le-patron|est-mon-blogueur|from-ak|from-al|from-ar|from-ca|from-ct|from-dc|from-de|from-fl|from-ga|from-hi|from-ia|from-id|from-il|from-in|from-ks|from-ky|from-ma|from-md|from-mi|from-mn|from-mo|from-ms|from-mt|from-nc|from-nd|from-ne|from-nh|from-nj|from-nm|from-nv|from-oh|from-ok|from-or|from-pa|from-pr|from-ri|from-sc|from-sd|from-tn|from-tx|from-ut|from-va|from-vt|from-wa|from-wi|from-wv|from-wy|getmyip|gotdns|hobby-site|homelinux|homeunix|iamallama|is-a-anarchist|is-a-blogger|is-a-bookkeeper|is-a-bulls-fan|is-a-caterer|is-a-chef|is-a-conservative|is-a-cpa|is-a-cubicle-slave|is-a-democrat|is-a-designer|is-a-doctor|is-a-financialadvisor|is-a-geek|is-a-green|is-a-guru|is-a-hard-worker|is-a-hunter|is-a-landscaper|is-a-lawyer|is-a-liberal|is-a-libertarian|is-a-llama|is-a-musician|is-a-nascarfan|is-a-nurse|is-a-painter|is-a-personaltrainer|is-a-photographer|is-a-player|is-a-republican|is-a-rockstar|is-a-socialist|is-a-student|is-a-teacher|is-a-techie|is-a-therapist|is-an-accountant|is-an-actor|is-an-actress|is-an-anarchist|is-an-artist|is-an-engineer|is-an-entertainer|is-certified|is-gone|is-into-anime|is-into-cars|is-into-cartoons|is-into-games|is-leet|is-not-certified|is-slick|is-uberleet|is-with-theband|isa-geek|isa-hockeynut|issmarterthanyou|likes-pie|likescandy|neat-url|saves-the-whales|selfip|sells-for-less|sells-for-u|servebbs|simple-url|space-to-rent|teaches-yoga|writesthisblog|ddnsfree|ddnsgeek|giize|gleeze|kozow|loseyourip|ooguy|theworkpc|mytuleap|eu-1.evennode|eu-2.evennode|eu-3.evennode|eu-4.evennode|us-1.evennode|us-2.evennode|us-3.evennode|us-4.evennode|apps.fbsbx|firebaseapp|flynnhub|freebox-os|freeboxos|githubusercontent|*0emm|appspot|blogspot|codespot|googleapis|googlecode|pagespeedmobilizer|publishproxy|withgoogle|withyoutube|herokuapp|herokussl|*cns.joyent|barsyonline|meteorapp|eu.meteorapp|bitballoon|netlify|4u|nfshost|blogsyte|ciscofreak|damnserver|ditchyourip|dnsiskinky|dynns|geekgalaxy|health-carereform|homesecuritymac|homesecuritypc|myactivedirectory|mysecuritycamera|net-freaks|onthewifi|point2this|quicksytes|securitytactics|serveexchange|servehumour|servep2p|servesarcasm|stufftoread|unusualperson|workisboring|3utilities|ddnsking|myvnc|servebeer|servecounterstrike|serveftp|servegame|servehalflife|servehttp|serveirc|servemp3|servepics|servequake|operaunite|outsystemscloud|ownprovider|pgfog|pagefrontapp|gotpantheon|xen.prgmr|qa2|dev-myqnapcloud|alpha-myqnapcloud|myqnapcloud|*quipelements|rackmaze|rhcloud|logoip|firewall-gateway|myshopblocks|1kapp|appchizi|applinzi|sinaapp|vipsinaapp|bounty-full|alpha.bounty-full|beta.bounty-full|temp-dns|dsmynas|familyds|bloxcms|townnews-staging|hk|remotewd|yolasite", "coop": "", "cr": "ac|co|ed|fi|go|or|sa", "cu": "com|edu|org|net|gov|inf", "cv": "blogspot", "cw": "com|edu|net|org", "cx": "gov|ath|info", "cy": "ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm|blogspot.com", "cz": "co|realm|e4|blogspot|cloud.metacentrum|custom.metacentrum", "de": "bplaced|square7|com|dyn.cosidns|dynamisches-dns|dnsupdater|internet-dns|l-o-g-i-n|dnshome|fuettertdasnetz|isteingeek|istmein|lebtimnetz|leitungsen|traeumtgerade|ddnss|dyn.ddnss|dyndns.ddnss|dyndns1|dyn-ip24|home-webserver|dyn.home-webserver|myhome-server|goip|blogspot|keymachine|git-repos|lcube-server|svn-repos|barsy|logoip|firewall-gateway|my-gateway|my-router|spdns|taifun-dns|12hp|2ix|4lima|lima-city|dd-dns|dray-dns|draydns|dyn-vpn|dynvpn|mein-vigor|my-vigor|my-wan|syno-ds|synology-diskstation|synology-ds", "dj": "", "dk": "biz|co|firm|reg|store|blogspot", "dm": "com|net|org|edu|gov", "do": "art|com|edu|gob|gov|mil|net|org|sld|web", "dz": "com|org|net|gov|edu|asso|pol|art", "ec": "com|info|net|fin|k12|med|pro|org|edu|gov|gob|mil", "edu": "", "ee": "edu|gov|riik|lib|med|com|pri|aip|org|fie|blogspot.com", "eg": "com|edu|eun|gov|mil|name|net|org|sci|blogspot.com", "er": "*", "es": "com|nom|org|gob|edu|blogspot.com", "et": "com|gov|org|edu|biz|name|info|net", "eu": "mycd|cloudns|barsy|wellbeingzone|spdns|*transurl|diskstation", "fi": "aland|dy|blogspot|iki", "fj": "*", "fk": "*", "fm": "", "fo": "", "fr": "com|asso|nom|prd|presse|tm|aeroport|assedic|avocat|avoues|cci|chambagri|chirurgiens-dentistes|experts-comptables|geometre-expert|gouv|greta|huissier-justice|medecin|notaires|pharmacien|port|veterinaire|fbx-os|fbxos|freebox-os|freeboxos|blogspot|on-web|chirurgiens-dentistes-en-france", "ga": "", "gb": "", "gd": "nom", "ge": "com|edu|gov|org|mil|net|pvt", "gf": "", "gg": "co|net|org|cya", "gh": "com|edu|gov|org|mil", "gi": "com|ltd|gov|mod|edu|org", "gl": "co|com|edu|net|org|nom", "gm": "", "gn": "ac|com|edu|gov|org|net", "gov": "", "gp": "com|net|mobi|edu|org|asso", "gq": "", "gr": "com|edu|net|org|gov|blogspot|nym", "gs": "", "gt": "com|edu|gob|ind|mil|net|org|nom", "gu": "*", "gw": "", "gy": "co|com|edu|gov|net|org", "hk": "com|edu|gov|idv|net|org|xn--55qx5d|xn--wcvs22d|xn--lcvr32d|xn--mxtq1m|xn--gmqw5a|xn--ciqpn|xn--gmq050i|xn--zf0avx|xn--io0a7i|xn--mk0axi|xn--od0alg|xn--od0aq3b|xn--tn0ag|xn--uc0atv|xn--uc0ay4a|blogspot|ltd|inc", "hm": "", "hn": "com|edu|org|net|mil|gob|nom", "hr": "iz|from|name|com|blogspot", "ht": "com|shop|firm|info|adult|net|pro|org|med|art|coop|pol|asso|edu|rel|gouv|perso", "hu": "co|info|org|priv|sport|tm|2000|agrar|bolt|casino|city|erotica|erotika|film|forum|games|hotel|ingatlan|jogasz|konyvelo|lakas|media|news|reklam|sex|shop|suli|szex|tozsde|utazas|video|blogspot", "id": "ac|biz|co|desa|go|mil|my|net|or|sch|web|blogspot.co", "ie": "gov|blogspot", "il": "ac|co|gov|idf|k12|muni|net|org|blogspot.co", "im": "ac|co|com|ltd.co|net|org|plc.co|tt|tv|ro|nom", "in": "co|firm|net|org|gen|ind|nic|ac|edu|res|gov|mil|cloudns|blogspot|barsy", "info": "cloudns|dynamic-dns|dyndns|barrel-of-knowledge|barrell-of-knowledge|for-our|groks-the|groks-this|here-for-more|knowsitall|selfip|webhop|nsupdate|dvrcam|ilovecollege|no-ip", "int": "eu", "io": "com|backplaneapp|boxfuse|browsersafetymark|dedyn|drud|definima|enonic|customer.enonic|github|gitlab|hasura-app|ngrok|stage.nodeart|nodum|nid|pantheonsite|protonet|vaporcloud|hzc|sandcats|shiftedit|apps.lair|*stolos|spacekit|cust.dev.thingdust|cust.disrec.thingdust|cust.prod.thingdust|cust.testing.thingdust|wedeploy", "iq": "gov|edu|mil|com|org|net", "ir": "ac|co|gov|id|net|org|sch|xn--mgba3a4f16a|xn--mgba3a4fra", "is": "net|com|edu|gov|org|int|cupcake|blogspot", "it": "gov|edu|abr|abruzzo|aosta-valley|aostavalley|bas|basilicata|cal|calabria|cam|campania|emilia-romagna|emiliaromagna|emr|friuli-v-giulia|friuli-ve-giulia|friuli-vegiulia|friuli-venezia-giulia|friuli-veneziagiulia|friuli-vgiulia|friuliv-giulia|friulive-giulia|friulivegiulia|friulivenezia-giulia|friuliveneziagiulia|friulivgiulia|fvg|laz|lazio|lig|liguria|lom|lombardia|lombardy|lucania|mar|marche|mol|molise|piedmont|piemonte|pmn|pug|puglia|sar|sardegna|sardinia|sic|sicilia|sicily|taa|tos|toscana|trentino-a-adige|trentino-aadige|trentino-alto-adige|trentino-altoadige|trentino-s-tirol|trentino-stirol|trentino-sud-tirol|trentino-sudtirol|trentino-sued-tirol|trentino-suedtirol|trentinoa-adige|trentinoaadige|trentinoalto-adige|trentinoaltoadige|trentinos-tirol|trentinostirol|trentinosud-tirol|trentinosudtirol|trentinosued-tirol|trentinosuedtirol|tuscany|umb|umbria|val-d-aosta|val-daosta|vald-aosta|valdaosta|valle-aosta|valle-d-aosta|valle-daosta|valleaosta|valled-aosta|valledaosta|vallee-aoste|valleeaoste|vao|vda|ven|veneto|ag|agrigento|al|alessandria|alto-adige|altoadige|an|ancona|andria-barletta-trani|andria-trani-barletta|andriabarlettatrani|andriatranibarletta|ao|aosta|aoste|ap|aq|aquila|ar|arezzo|ascoli-piceno|ascolipiceno|asti|at|av|avellino|ba|balsan|bari|barletta-trani-andria|barlettatraniandria|belluno|benevento|bergamo|bg|bi|biella|bl|bn|bo|bologna|bolzano|bozen|br|brescia|brindisi|bs|bt|bz|ca|cagliari|caltanissetta|campidano-medio|campidanomedio|campobasso|carbonia-iglesias|carboniaiglesias|carrara-massa|carraramassa|caserta|catania|catanzaro|cb|ce|cesena-forli|cesenaforli|ch|chieti|ci|cl|cn|co|como|cosenza|cr|cremona|crotone|cs|ct|cuneo|cz|dell-ogliastra|dellogliastra|en|enna|fc|fe|fermo|ferrara|fg|fi|firenze|florence|fm|foggia|forli-cesena|forlicesena|fr|frosinone|ge|genoa|genova|go|gorizia|gr|grosseto|iglesias-carbonia|iglesiascarbonia|im|imperia|is|isernia|kr|la-spezia|laquila|laspezia|latina|lc|le|lecce|lecco|li|livorno|lo|lodi|lt|lu|lucca|macerata|mantova|massa-carrara|massacarrara|matera|mb|mc|me|medio-campidano|mediocampidano|messina|mi|milan|milano|mn|mo|modena|monza-brianza|monza-e-della-brianza|monza|monzabrianza|monzaebrianza|monzaedellabrianza|ms|mt|na|naples|napoli|no|novara|nu|nuoro|og|ogliastra|olbia-tempio|olbiatempio|or|oristano|ot|pa|padova|padua|palermo|parma|pavia|pc|pd|pe|perugia|pesaro-urbino|pesarourbino|pescara|pg|pi|piacenza|pisa|pistoia|pn|po|pordenone|potenza|pr|prato|pt|pu|pv|pz|ra|ragusa|ravenna|rc|re|reggio-calabria|reggio-emilia|reggiocalabria|reggioemilia|rg|ri|rieti|rimini|rm|rn|ro|roma|rome|rovigo|sa|salerno|sassari|savona|si|siena|siracusa|so|sondrio|sp|sr|ss|suedtirol|sv|ta|taranto|te|tempio-olbia|tempioolbia|teramo|terni|tn|to|torino|tp|tr|trani-andria-barletta|trani-barletta-andria|traniandriabarletta|tranibarlettaandria|trapani|trentino|trento|treviso|trieste|ts|turin|tv|ud|udine|urbino-pesaro|urbinopesaro|va|varese|vb|vc|ve|venezia|venice|verbania|vercelli|verona|vi|vibo-valentia|vibovalentia|vicenza|viterbo|vr|vs|vt|vv|blogspot", "je": "co|net|org", "jm": "*", "jo": "com|org|net|edu|sch|gov|mil|name", "jobs": "", "jp": "ac|ad|co|ed|go|gr|lg|ne|or|aichi|akita|aomori|chiba|ehime|fukui|fukuoka|fukushima|gifu|gunma|hiroshima|hokkaido|hyogo|ibaraki|ishikawa|iwate|kagawa|kagoshima|kanagawa|kochi|kumamoto|kyoto|mie|miyagi|miyazaki|nagano|nagasaki|nara|niigata|oita|okayama|okinawa|osaka|saga|saitama|shiga|shimane|shizuoka|tochigi|tokushima|tokyo|tottori|toyama|wakayama|yamagata|yamaguchi|yamanashi|xn--4pvxs|xn--vgu402c|xn--c3s14m|xn--f6qx53a|xn--8pvr4u|xn--uist22h|xn--djrs72d6uy|xn--mkru45i|xn--0trq7p7nn|xn--8ltr62k|xn--2m4a15e|xn--efvn9s|xn--32vp30h|xn--4it797k|xn--1lqs71d|xn--5rtp49c|xn--5js045d|xn--ehqz56n|xn--1lqs03n|xn--qqqt11m|xn--kbrq7o|xn--pssu33l|xn--ntsq17g|xn--uisz3g|xn--6btw5a|xn--1ctwo|xn--6orx2r|xn--rht61e|xn--rht27z|xn--djty4k|xn--nit225k|xn--rht3d|xn--klty5x|xn--kltx9a|xn--kltp7d|xn--uuwu58a|xn--zbx025d|xn--ntso0iqx3a|xn--elqq16h|xn--4it168d|xn--klt787d|xn--rny31h|xn--7t0a264c|xn--5rtq34k|xn--k7yn95e|xn--tor131o|xn--d5qv7z876c|*kawasaki|*kitakyushu|*kobe|*nagoya|*sapporo|*sendai|*yokohama|!city.kawasaki|!city.kitakyushu|!city.kobe|!city.nagoya|!city.sapporo|!city.sendai|!city.yokohama|aisai.aichi|ama.aichi|anjo.aichi|asuke.aichi|chiryu.aichi|chita.aichi|fuso.aichi|gamagori.aichi|handa.aichi|hazu.aichi|hekinan.aichi|higashiura.aichi|ichinomiya.aichi|inazawa.aichi|inuyama.aichi|isshiki.aichi|iwakura.aichi|kanie.aichi|kariya.aichi|kasugai.aichi|kira.aichi|kiyosu.aichi|komaki.aichi|konan.aichi|kota.aichi|mihama.aichi|miyoshi.aichi|nishio.aichi|nisshin.aichi|obu.aichi|oguchi.aichi|oharu.aichi|okazaki.aichi|owariasahi.aichi|seto.aichi|shikatsu.aichi|shinshiro.aichi|shitara.aichi|tahara.aichi|takahama.aichi|tobishima.aichi|toei.aichi|togo.aichi|tokai.aichi|tokoname.aichi|toyoake.aichi|toyohashi.aichi|toyokawa.aichi|toyone.aichi|toyota.aichi|tsushima.aichi|yatomi.aichi|akita.akita|daisen.akita|fujisato.akita|gojome.akita|hachirogata.akita|happou.akita|higashinaruse.akita|honjo.akita|honjyo.akita|ikawa.akita|kamikoani.akita|kamioka.akita|katagami.akita|kazuno.akita|kitaakita.akita|kosaka.akita|kyowa.akita|misato.akita|mitane.akita|moriyoshi.akita|nikaho.akita|noshiro.akita|odate.akita|oga.akita|ogata.akita|semboku.akita|yokote.akita|yurihonjo.akita|aomori.aomori|gonohe.aomori|hachinohe.aomori|hashikami.aomori|hiranai.aomori|hirosaki.aomori|itayanagi.aomori|kuroishi.aomori|misawa.aomori|mutsu.aomori|nakadomari.aomori|noheji.aomori|oirase.aomori|owani.aomori|rokunohe.aomori|sannohe.aomori|shichinohe.aomori|shingo.aomori|takko.aomori|towada.aomori|tsugaru.aomori|tsuruta.aomori|abiko.chiba|asahi.chiba|chonan.chiba|chosei.chiba|choshi.chiba|chuo.chiba|funabashi.chiba|futtsu.chiba|hanamigawa.chiba|ichihara.chiba|ichikawa.chiba|ichinomiya.chiba|inzai.chiba|isumi.chiba|kamagaya.chiba|kamogawa.chiba|kashiwa.chiba|katori.chiba|katsuura.chiba|kimitsu.chiba|kisarazu.chiba|kozaki.chiba|kujukuri.chiba|kyonan.chiba|matsudo.chiba|midori.chiba|mihama.chiba|minamiboso.chiba|mobara.chiba|mutsuzawa.chiba|nagara.chiba|nagareyama.chiba|narashino.chiba|narita.chiba|noda.chiba|oamishirasato.chiba|omigawa.chiba|onjuku.chiba|otaki.chiba|sakae.chiba|sakura.chiba|shimofusa.chiba|shirako.chiba|shiroi.chiba|shisui.chiba|sodegaura.chiba|sosa.chiba|tako.chiba|tateyama.chiba|togane.chiba|tohnosho.chiba|tomisato.chiba|urayasu.chiba|yachimata.chiba|yachiyo.chiba|yokaichiba.chiba|yokoshibahikari.chiba|yotsukaido.chiba|ainan.ehime|honai.ehime|ikata.ehime|imabari.ehime|iyo.ehime|kamijima.ehime|kihoku.ehime|kumakogen.ehime|masaki.ehime|matsuno.ehime|matsuyama.ehime|namikata.ehime|niihama.ehime|ozu.ehime|saijo.ehime|seiyo.ehime|shikokuchuo.ehime|tobe.ehime|toon.ehime|uchiko.ehime|uwajima.ehime|yawatahama.ehime|echizen.fukui|eiheiji.fukui|fukui.fukui|ikeda.fukui|katsuyama.fukui|mihama.fukui|minamiechizen.fukui|obama.fukui|ohi.fukui|ono.fukui|sabae.fukui|sakai.fukui|takahama.fukui|tsuruga.fukui|wakasa.fukui|ashiya.fukuoka|buzen.fukuoka|chikugo.fukuoka|chikuho.fukuoka|chikujo.fukuoka|chikushino.fukuoka|chikuzen.fukuoka|chuo.fukuoka|dazaifu.fukuoka|fukuchi.fukuoka|hakata.fukuoka|higashi.fukuoka|hirokawa.fukuoka|hisayama.fukuoka|iizuka.fukuoka|inatsuki.fukuoka|kaho.fukuoka|kasuga.fukuoka|kasuya.fukuoka|kawara.fukuoka|keisen.fukuoka|koga.fukuoka|kurate.fukuoka|kurogi.fukuoka|kurume.fukuoka|minami.fukuoka|miyako.fukuoka|miyama.fukuoka|miyawaka.fukuoka|mizumaki.fukuoka|munakata.fukuoka|nakagawa.fukuoka|nakama.fukuoka|nishi.fukuoka|nogata.fukuoka|ogori.fukuoka|okagaki.fukuoka|okawa.fukuoka|oki.fukuoka|omuta.fukuoka|onga.fukuoka|onojo.fukuoka|oto.fukuoka|saigawa.fukuoka|sasaguri.fukuoka|shingu.fukuoka|shinyoshitomi.fukuoka|shonai.fukuoka|soeda.fukuoka|sue.fukuoka|tachiarai.fukuoka|tagawa.fukuoka|takata.fukuoka|toho.fukuoka|toyotsu.fukuoka|tsuiki.fukuoka|ukiha.fukuoka|umi.fukuoka|usui.fukuoka|yamada.fukuoka|yame.fukuoka|yanagawa.fukuoka|yukuhashi.fukuoka|aizubange.fukushima|aizumisato.fukushima|aizuwakamatsu.fukushima|asakawa.fukushima|bandai.fukushima|date.fukushima|fukushima.fukushima|furudono.fukushima|futaba.fukushima|hanawa.fukushima|higashi.fukushima|hirata.fukushima|hirono.fukushima|iitate.fukushima|inawashiro.fukushima|ishikawa.fukushima|iwaki.fukushima|izumizaki.fukushima|kagamiishi.fukushima|kaneyama.fukushima|kawamata.fukushima|kitakata.fukushima|kitashiobara.fukushima|koori.fukushima|koriyama.fukushima|kunimi.fukushima|miharu.fukushima|mishima.fukushima|namie.fukushima|nango.fukushima|nishiaizu.fukushima|nishigo.fukushima|okuma.fukushima|omotego.fukushima|ono.fukushima|otama.fukushima|samegawa.fukushima|shimogo.fukushima|shirakawa.fukushima|showa.fukushima|soma.fukushima|sukagawa.fukushima|taishin.fukushima|tamakawa.fukushima|tanagura.fukushima|tenei.fukushima|yabuki.fukushima|yamato.fukushima|yamatsuri.fukushima|yanaizu.fukushima|yugawa.fukushima|anpachi.gifu|ena.gifu|gifu.gifu|ginan.gifu|godo.gifu|gujo.gifu|hashima.gifu|hichiso.gifu|hida.gifu|higashishirakawa.gifu|ibigawa.gifu|ikeda.gifu|kakamigahara.gifu|kani.gifu|kasahara.gifu|kasamatsu.gifu|kawaue.gifu|kitagata.gifu|mino.gifu|minokamo.gifu|mitake.gifu|mizunami.gifu|motosu.gifu|nakatsugawa.gifu|ogaki.gifu|sakahogi.gifu|seki.gifu|sekigahara.gifu|shirakawa.gifu|tajimi.gifu|takayama.gifu|tarui.gifu|toki.gifu|tomika.gifu|wanouchi.gifu|yamagata.gifu|yaotsu.gifu|yoro.gifu|annaka.gunma|chiyoda.gunma|fujioka.gunma|higashiagatsuma.gunma|isesaki.gunma|itakura.gunma|kanna.gunma|kanra.gunma|katashina.gunma|kawaba.gunma|kiryu.gunma|kusatsu.gunma|maebashi.gunma|meiwa.gunma|midori.gunma|minakami.gunma|naganohara.gunma|nakanojo.gunma|nanmoku.gunma|numata.gunma|oizumi.gunma|ora.gunma|ota.gunma|shibukawa.gunma|shimonita.gunma|shinto.gunma|showa.gunma|takasaki.gunma|takayama.gunma|tamamura.gunma|tatebayashi.gunma|tomioka.gunma|tsukiyono.gunma|tsumagoi.gunma|ueno.gunma|yoshioka.gunma|asaminami.hiroshima|daiwa.hiroshima|etajima.hiroshima|fuchu.hiroshima|fukuyama.hiroshima|hatsukaichi.hiroshima|higashihiroshima.hiroshima|hongo.hiroshima|jinsekikogen.hiroshima|kaita.hiroshima|kui.hiroshima|kumano.hiroshima|kure.hiroshima|mihara.hiroshima|miyoshi.hiroshima|naka.hiroshima|onomichi.hiroshima|osakikamijima.hiroshima|otake.hiroshima|saka.hiroshima|sera.hiroshima|seranishi.hiroshima|shinichi.hiroshima|shobara.hiroshima|takehara.hiroshima|abashiri.hokkaido|abira.hokkaido|aibetsu.hokkaido|akabira.hokkaido|akkeshi.hokkaido|asahikawa.hokkaido|ashibetsu.hokkaido|ashoro.hokkaido|assabu.hokkaido|atsuma.hokkaido|bibai.hokkaido|biei.hokkaido|bifuka.hokkaido|bihoro.hokkaido|biratori.hokkaido|chippubetsu.hokkaido|chitose.hokkaido|date.hokkaido|ebetsu.hokkaido|embetsu.hokkaido|eniwa.hokkaido|erimo.hokkaido|esan.hokkaido|esashi.hokkaido|fukagawa.hokkaido|fukushima.hokkaido|furano.hokkaido|furubira.hokkaido|haboro.hokkaido|hakodate.hokkaido|hamatonbetsu.hokkaido|hidaka.hokkaido|higashikagura.hokkaido|higashikawa.hokkaido|hiroo.hokkaido|hokuryu.hokkaido|hokuto.hokkaido|honbetsu.hokkaido|horokanai.hokkaido|horonobe.hokkaido|ikeda.hokkaido|imakane.hokkaido|ishikari.hokkaido|iwamizawa.hokkaido|iwanai.hokkaido|kamifurano.hokkaido|kamikawa.hokkaido|kamishihoro.hokkaido|kamisunagawa.hokkaido|kamoenai.hokkaido|kayabe.hokkaido|kembuchi.hokkaido|kikonai.hokkaido|kimobetsu.hokkaido|kitahiroshima.hokkaido|kitami.hokkaido|kiyosato.hokkaido|koshimizu.hokkaido|kunneppu.hokkaido|kuriyama.hokkaido|kuromatsunai.hokkaido|kushiro.hokkaido|kutchan.hokkaido|kyowa.hokkaido|mashike.hokkaido|matsumae.hokkaido|mikasa.hokkaido|minamifurano.hokkaido|mombetsu.hokkaido|moseushi.hokkaido|mukawa.hokkaido|muroran.hokkaido|naie.hokkaido|nakagawa.hokkaido|nakasatsunai.hokkaido|nakatombetsu.hokkaido|nanae.hokkaido|nanporo.hokkaido|nayoro.hokkaido|nemuro.hokkaido|niikappu.hokkaido|niki.hokkaido|nishiokoppe.hokkaido|noboribetsu.hokkaido|numata.hokkaido|obihiro.hokkaido|obira.hokkaido|oketo.hokkaido|okoppe.hokkaido|otaru.hokkaido|otobe.hokkaido|otofuke.hokkaido|otoineppu.hokkaido|oumu.hokkaido|ozora.hokkaido|pippu.hokkaido|rankoshi.hokkaido|rebun.hokkaido|rikubetsu.hokkaido|rishiri.hokkaido|rishirifuji.hokkaido|saroma.hokkaido|sarufutsu.hokkaido|shakotan.hokkaido|shari.hokkaido|shibecha.hokkaido|shibetsu.hokkaido|shikabe.hokkaido|shikaoi.hokkaido|shimamaki.hokkaido|shimizu.hokkaido|shimokawa.hokkaido|shinshinotsu.hokkaido|shintoku.hokkaido|shiranuka.hokkaido|shiraoi.hokkaido|shiriuchi.hokkaido|sobetsu.hokkaido|sunagawa.hokkaido|taiki.hokkaido|takasu.hokkaido|takikawa.hokkaido|takinoue.hokkaido|teshikaga.hokkaido|tobetsu.hokkaido|tohma.hokkaido|tomakomai.hokkaido|tomari.hokkaido|toya.hokkaido|toyako.hokkaido|toyotomi.hokkaido|toyoura.hokkaido|tsubetsu.hokkaido|tsukigata.hokkaido|urakawa.hokkaido|urausu.hokkaido|uryu.hokkaido|utashinai.hokkaido|wakkanai.hokkaido|wassamu.hokkaido|yakumo.hokkaido|yoichi.hokkaido|aioi.hyogo|akashi.hyogo|ako.hyogo|amagasaki.hyogo|aogaki.hyogo|asago.hyogo|ashiya.hyogo|awaji.hyogo|fukusaki.hyogo|goshiki.hyogo|harima.hyogo|himeji.hyogo|ichikawa.hyogo|inagawa.hyogo|itami.hyogo|kakogawa.hyogo|kamigori.hyogo|kamikawa.hyogo|kasai.hyogo|kasuga.hyogo|kawanishi.hyogo|miki.hyogo|minamiawaji.hyogo|nishinomiya.hyogo|nishiwaki.hyogo|ono.hyogo|sanda.hyogo|sannan.hyogo|sasayama.hyogo|sayo.hyogo|shingu.hyogo|shinonsen.hyogo|shiso.hyogo|sumoto.hyogo|taishi.hyogo|taka.hyogo|takarazuka.hyogo|takasago.hyogo|takino.hyogo|tamba.hyogo|tatsuno.hyogo|toyooka.hyogo|yabu.hyogo|yashiro.hyogo|yoka.hyogo|yokawa.hyogo|ami.ibaraki|asahi.ibaraki|bando.ibaraki|chikusei.ibaraki|daigo.ibaraki|fujishiro.ibaraki|hitachi.ibaraki|hitachinaka.ibaraki|hitachiomiya.ibaraki|hitachiota.ibaraki|ibaraki.ibaraki|ina.ibaraki|inashiki.ibaraki|itako.ibaraki|iwama.ibaraki|joso.ibaraki|kamisu.ibaraki|kasama.ibaraki|kashima.ibaraki|kasumigaura.ibaraki|koga.ibaraki|miho.ibaraki|mito.ibaraki|moriya.ibaraki|naka.ibaraki|namegata.ibaraki|oarai.ibaraki|ogawa.ibaraki|omitama.ibaraki|ryugasaki.ibaraki|sakai.ibaraki|sakuragawa.ibaraki|shimodate.ibaraki|shimotsuma.ibaraki|shirosato.ibaraki|sowa.ibaraki|suifu.ibaraki|takahagi.ibaraki|tamatsukuri.ibaraki|tokai.ibaraki|tomobe.ibaraki|tone.ibaraki|toride.ibaraki|tsuchiura.ibaraki|tsukuba.ibaraki|uchihara.ibaraki|ushiku.ibaraki|yachiyo.ibaraki|yamagata.ibaraki|yawara.ibaraki|yuki.ibaraki|anamizu.ishikawa|hakui.ishikawa|hakusan.ishikawa|kaga.ishikawa|kahoku.ishikawa|kanazawa.ishikawa|kawakita.ishikawa|komatsu.ishikawa|nakanoto.ishikawa|nanao.ishikawa|nomi.ishikawa|nonoichi.ishikawa|noto.ishikawa|shika.ishikawa|suzu.ishikawa|tsubata.ishikawa|tsurugi.ishikawa|uchinada.ishikawa|wajima.ishikawa|fudai.iwate|fujisawa.iwate|hanamaki.iwate|hiraizumi.iwate|hirono.iwate|ichinohe.iwate|ichinoseki.iwate|iwaizumi.iwate|iwate.iwate|joboji.iwate|kamaishi.iwate|kanegasaki.iwate|karumai.iwate|kawai.iwate|kitakami.iwate|kuji.iwate|kunohe.iwate|kuzumaki.iwate|miyako.iwate|mizusawa.iwate|morioka.iwate|ninohe.iwate|noda.iwate|ofunato.iwate|oshu.iwate|otsuchi.iwate|rikuzentakata.iwate|shiwa.iwate|shizukuishi.iwate|sumita.iwate|tanohata.iwate|tono.iwate|yahaba.iwate|yamada.iwate|ayagawa.kagawa|higashikagawa.kagawa|kanonji.kagawa|kotohira.kagawa|manno.kagawa|marugame.kagawa|mitoyo.kagawa|naoshima.kagawa|sanuki.kagawa|tadotsu.kagawa|takamatsu.kagawa|tonosho.kagawa|uchinomi.kagawa|utazu.kagawa|zentsuji.kagawa|akune.kagoshima|amami.kagoshima|hioki.kagoshima|isa.kagoshima|isen.kagoshima|izumi.kagoshima|kagoshima.kagoshima|kanoya.kagoshima|kawanabe.kagoshima|kinko.kagoshima|kouyama.kagoshima|makurazaki.kagoshima|matsumoto.kagoshima|minamitane.kagoshima|nakatane.kagoshima|nishinoomote.kagoshima|satsumasendai.kagoshima|soo.kagoshima|tarumizu.kagoshima|yusui.kagoshima|aikawa.kanagawa|atsugi.kanagawa|ayase.kanagawa|chigasaki.kanagawa|ebina.kanagawa|fujisawa.kanagawa|hadano.kanagawa|hakone.kanagawa|hiratsuka.kanagawa|isehara.kanagawa|kaisei.kanagawa|kamakura.kanagawa|kiyokawa.kanagawa|matsuda.kanagawa|minamiashigara.kanagawa|miura.kanagawa|nakai.kanagawa|ninomiya.kanagawa|odawara.kanagawa|oi.kanagawa|oiso.kanagawa|sagamihara.kanagawa|samukawa.kanagawa|tsukui.kanagawa|yamakita.kanagawa|yamato.kanagawa|yokosuka.kanagawa|yugawara.kanagawa|zama.kanagawa|zushi.kanagawa|aki.kochi|geisei.kochi|hidaka.kochi|higashitsuno.kochi|ino.kochi|kagami.kochi|kami.kochi|kitagawa.kochi|kochi.kochi|mihara.kochi|motoyama.kochi|muroto.kochi|nahari.kochi|nakamura.kochi|nankoku.kochi|nishitosa.kochi|niyodogawa.kochi|ochi.kochi|okawa.kochi|otoyo.kochi|otsuki.kochi|sakawa.kochi|sukumo.kochi|susaki.kochi|tosa.kochi|tosashimizu.kochi|toyo.kochi|tsuno.kochi|umaji.kochi|yasuda.kochi|yusuhara.kochi|amakusa.kumamoto|arao.kumamoto|aso.kumamoto|choyo.kumamoto|gyokuto.kumamoto|kamiamakusa.kumamoto|kikuchi.kumamoto|kumamoto.kumamoto|mashiki.kumamoto|mifune.kumamoto|minamata.kumamoto|minamioguni.kumamoto|nagasu.kumamoto|nishihara.kumamoto|oguni.kumamoto|ozu.kumamoto|sumoto.kumamoto|takamori.kumamoto|uki.kumamoto|uto.kumamoto|yamaga.kumamoto|yamato.kumamoto|yatsushiro.kumamoto|ayabe.kyoto|fukuchiyama.kyoto|higashiyama.kyoto|ide.kyoto|ine.kyoto|joyo.kyoto|kameoka.kyoto|kamo.kyoto|kita.kyoto|kizu.kyoto|kumiyama.kyoto|kyotamba.kyoto|kyotanabe.kyoto|kyotango.kyoto|maizuru.kyoto|minami.kyoto|minamiyamashiro.kyoto|miyazu.kyoto|muko.kyoto|nagaokakyo.kyoto|nakagyo.kyoto|nantan.kyoto|oyamazaki.kyoto|sakyo.kyoto|seika.kyoto|tanabe.kyoto|uji.kyoto|ujitawara.kyoto|wazuka.kyoto|yamashina.kyoto|yawata.kyoto|asahi.mie|inabe.mie|ise.mie|kameyama.mie|kawagoe.mie|kiho.mie|kisosaki.mie|kiwa.mie|komono.mie|kumano.mie|kuwana.mie|matsusaka.mie|meiwa.mie|mihama.mie|minamiise.mie|misugi.mie|miyama.mie|nabari.mie|shima.mie|suzuka.mie|tado.mie|taiki.mie|taki.mie|tamaki.mie|toba.mie|tsu.mie|udono.mie|ureshino.mie|watarai.mie|yokkaichi.mie|furukawa.miyagi|higashimatsushima.miyagi|ishinomaki.miyagi|iwanuma.miyagi|kakuda.miyagi|kami.miyagi|kawasaki.miyagi|marumori.miyagi|matsushima.miyagi|minamisanriku.miyagi|misato.miyagi|murata.miyagi|natori.miyagi|ogawara.miyagi|ohira.miyagi|onagawa.miyagi|osaki.miyagi|rifu.miyagi|semine.miyagi|shibata.miyagi|shichikashuku.miyagi|shikama.miyagi|shiogama.miyagi|shiroishi.miyagi|tagajo.miyagi|taiwa.miyagi|tome.miyagi|tomiya.miyagi|wakuya.miyagi|watari.miyagi|yamamoto.miyagi|zao.miyagi|aya.miyazaki|ebino.miyazaki|gokase.miyazaki|hyuga.miyazaki|kadogawa.miyazaki|kawaminami.miyazaki|kijo.miyazaki|kitagawa.miyazaki|kitakata.miyazaki|kitaura.miyazaki|kobayashi.miyazaki|kunitomi.miyazaki|kushima.miyazaki|mimata.miyazaki|miyakonojo.miyazaki|miyazaki.miyazaki|morotsuka.miyazaki|nichinan.miyazaki|nishimera.miyazaki|nobeoka.miyazaki|saito.miyazaki|shiiba.miyazaki|shintomi.miyazaki|takaharu.miyazaki|takanabe.miyazaki|takazaki.miyazaki|tsuno.miyazaki|achi.nagano|agematsu.nagano|anan.nagano|aoki.nagano|asahi.nagano|azumino.nagano|chikuhoku.nagano|chikuma.nagano|chino.nagano|fujimi.nagano|hakuba.nagano|hara.nagano|hiraya.nagano|iida.nagano|iijima.nagano|iiyama.nagano|iizuna.nagano|ikeda.nagano|ikusaka.nagano|ina.nagano|karuizawa.nagano|kawakami.nagano|kiso.nagano|kisofukushima.nagano|kitaaiki.nagano|komagane.nagano|komoro.nagano|matsukawa.nagano|matsumoto.nagano|miasa.nagano|minamiaiki.nagano|minamimaki.nagano|minamiminowa.nagano|minowa.nagano|miyada.nagano|miyota.nagano|mochizuki.nagano|nagano.nagano|nagawa.nagano|nagiso.nagano|nakagawa.nagano|nakano.nagano|nozawaonsen.nagano|obuse.nagano|ogawa.nagano|okaya.nagano|omachi.nagano|omi.nagano|ookuwa.nagano|ooshika.nagano|otaki.nagano|otari.nagano|sakae.nagano|sakaki.nagano|saku.nagano|sakuho.nagano|shimosuwa.nagano|shinanomachi.nagano|shiojiri.nagano|suwa.nagano|suzaka.nagano|takagi.nagano|takamori.nagano|takayama.nagano|tateshina.nagano|tatsuno.nagano|togakushi.nagano|togura.nagano|tomi.nagano|ueda.nagano|wada.nagano|yamagata.nagano|yamanouchi.nagano|yasaka.nagano|yasuoka.nagano|chijiwa.nagasaki|futsu.nagasaki|goto.nagasaki|hasami.nagasaki|hirado.nagasaki|iki.nagasaki|isahaya.nagasaki|kawatana.nagasaki|kuchinotsu.nagasaki|matsuura.nagasaki|nagasaki.nagasaki|obama.nagasaki|omura.nagasaki|oseto.nagasaki|saikai.nagasaki|sasebo.nagasaki|seihi.nagasaki|shimabara.nagasaki|shinkamigoto.nagasaki|togitsu.nagasaki|tsushima.nagasaki|unzen.nagasaki|ando.nara|gose.nara|heguri.nara|higashiyoshino.nara|ikaruga.nara|ikoma.nara|kamikitayama.nara|kanmaki.nara|kashiba.nara|kashihara.nara|katsuragi.nara|kawai.nara|kawakami.nara|kawanishi.nara|koryo.nara|kurotaki.nara|mitsue.nara|miyake.nara|nara.nara|nosegawa.nara|oji.nara|ouda.nara|oyodo.nara|sakurai.nara|sango.nara|shimoichi.nara|shimokitayama.nara|shinjo.nara|soni.nara|takatori.nara|tawaramoto.nara|tenkawa.nara|tenri.nara|uda.nara|yamatokoriyama.nara|yamatotakada.nara|yamazoe.nara|yoshino.nara|aga.niigata|agano.niigata|gosen.niigata|itoigawa.niigata|izumozaki.niigata|joetsu.niigata|kamo.niigata|kariwa.niigata|kashiwazaki.niigata|minamiuonuma.niigata|mitsuke.niigata|muika.niigata|murakami.niigata|myoko.niigata|nagaoka.niigata|niigata.niigata|ojiya.niigata|omi.niigata|sado.niigata|sanjo.niigata|seiro.niigata|seirou.niigata|sekikawa.niigata|shibata.niigata|tagami.niigata|tainai.niigata|tochio.niigata|tokamachi.niigata|tsubame.niigata|tsunan.niigata|uonuma.niigata|yahiko.niigata|yoita.niigata|yuzawa.niigata|beppu.oita|bungoono.oita|bungotakada.oita|hasama.oita|hiji.oita|himeshima.oita|hita.oita|kamitsue.oita|kokonoe.oita|kuju.oita|kunisaki.oita|kusu.oita|oita.oita|saiki.oita|taketa.oita|tsukumi.oita|usa.oita|usuki.oita|yufu.oita|akaiwa.okayama|asakuchi.okayama|bizen.okayama|hayashima.okayama|ibara.okayama|kagamino.okayama|kasaoka.okayama|kibichuo.okayama|kumenan.okayama|kurashiki.okayama|maniwa.okayama|misaki.okayama|nagi.okayama|niimi.okayama|nishiawakura.okayama|okayama.okayama|satosho.okayama|setouchi.okayama|shinjo.okayama|shoo.okayama|soja.okayama|takahashi.okayama|tamano.okayama|tsuyama.okayama|wake.okayama|yakage.okayama|aguni.okinawa|ginowan.okinawa|ginoza.okinawa|gushikami.okinawa|haebaru.okinawa|higashi.okinawa|hirara.okinawa|iheya.okinawa|ishigaki.okinawa|ishikawa.okinawa|itoman.okinawa|izena.okinawa|kadena.okinawa|kin.okinawa|kitadaito.okinawa|kitanakagusuku.okinawa|kumejima.okinawa|kunigami.okinawa|minamidaito.okinawa|motobu.okinawa|nago.okinawa|naha.okinawa|nakagusuku.okinawa|nakijin.okinawa|nanjo.okinawa|nishihara.okinawa|ogimi.okinawa|okinawa.okinawa|onna.okinawa|shimoji.okinawa|taketomi.okinawa|tarama.okinawa|tokashiki.okinawa|tomigusuku.okinawa|tonaki.okinawa|urasoe.okinawa|uruma.okinawa|yaese.okinawa|yomitan.okinawa|yonabaru.okinawa|yonaguni.okinawa|zamami.okinawa|abeno.osaka|chihayaakasaka.osaka|chuo.osaka|daito.osaka|fujiidera.osaka|habikino.osaka|hannan.osaka|higashiosaka.osaka|higashisumiyoshi.osaka|higashiyodogawa.osaka|hirakata.osaka|ibaraki.osaka|ikeda.osaka|izumi.osaka|izumiotsu.osaka|izumisano.osaka|kadoma.osaka|kaizuka.osaka|kanan.osaka|kashiwara.osaka|katano.osaka|kawachinagano.osaka|kishiwada.osaka|kita.osaka|kumatori.osaka|matsubara.osaka|minato.osaka|minoh.osaka|misaki.osaka|moriguchi.osaka|neyagawa.osaka|nishi.osaka|nose.osaka|osakasayama.osaka|sakai.osaka|sayama.osaka|sennan.osaka|settsu.osaka|shijonawate.osaka|shimamoto.osaka|suita.osaka|tadaoka.osaka|taishi.osaka|tajiri.osaka|takaishi.osaka|takatsuki.osaka|tondabayashi.osaka|toyonaka.osaka|toyono.osaka|yao.osaka|ariake.saga|arita.saga|fukudomi.saga|genkai.saga|hamatama.saga|hizen.saga|imari.saga|kamimine.saga|kanzaki.saga|karatsu.saga|kashima.saga|kitagata.saga|kitahata.saga|kiyama.saga|kouhoku.saga|kyuragi.saga|nishiarita.saga|ogi.saga|omachi.saga|ouchi.saga|saga.saga|shiroishi.saga|taku.saga|tara.saga|tosu.saga|yoshinogari.saga|arakawa.saitama|asaka.saitama|chichibu.saitama|fujimi.saitama|fujimino.saitama|fukaya.saitama|hanno.saitama|hanyu.saitama|hasuda.saitama|hatogaya.saitama|hatoyama.saitama|hidaka.saitama|higashichichibu.saitama|higashimatsuyama.saitama|honjo.saitama|ina.saitama|iruma.saitama|iwatsuki.saitama|kamiizumi.saitama|kamikawa.saitama|kamisato.saitama|kasukabe.saitama|kawagoe.saitama|kawaguchi.saitama|kawajima.saitama|kazo.saitama|kitamoto.saitama|koshigaya.saitama|kounosu.saitama|kuki.saitama|kumagaya.saitama|matsubushi.saitama|minano.saitama|misato.saitama|miyashiro.saitama|miyoshi.saitama|moroyama.saitama|nagatoro.saitama|namegawa.saitama|niiza.saitama|ogano.saitama|ogawa.saitama|ogose.saitama|okegawa.saitama|omiya.saitama|otaki.saitama|ranzan.saitama|ryokami.saitama|saitama.saitama|sakado.saitama|satte.saitama|sayama.saitama|shiki.saitama|shiraoka.saitama|soka.saitama|sugito.saitama|toda.saitama|tokigawa.saitama|tokorozawa.saitama|tsurugashima.saitama|urawa.saitama|warabi.saitama|yashio.saitama|yokoze.saitama|yono.saitama|yorii.saitama|yoshida.saitama|yoshikawa.saitama|yoshimi.saitama|aisho.shiga|gamo.shiga|higashiomi.shiga|hikone.shiga|koka.shiga|konan.shiga|kosei.shiga|koto.shiga|kusatsu.shiga|maibara.shiga|moriyama.shiga|nagahama.shiga|nishiazai.shiga|notogawa.shiga|omihachiman.shiga|otsu.shiga|ritto.shiga|ryuoh.shiga|takashima.shiga|takatsuki.shiga|torahime.shiga|toyosato.shiga|yasu.shiga|akagi.shimane|ama.shimane|gotsu.shimane|hamada.shimane|higashiizumo.shimane|hikawa.shimane|hikimi.shimane|izumo.shimane|kakinoki.shimane|masuda.shimane|matsue.shimane|misato.shimane|nishinoshima.shimane|ohda.shimane|okinoshima.shimane|okuizumo.shimane|shimane.shimane|tamayu.shimane|tsuwano.shimane|unnan.shimane|yakumo.shimane|yasugi.shimane|yatsuka.shimane|arai.shizuoka|atami.shizuoka|fuji.shizuoka|fujieda.shizuoka|fujikawa.shizuoka|fujinomiya.shizuoka|fukuroi.shizuoka|gotemba.shizuoka|haibara.shizuoka|hamamatsu.shizuoka|higashiizu.shizuoka|ito.shizuoka|iwata.shizuoka|izu.shizuoka|izunokuni.shizuoka|kakegawa.shizuoka|kannami.shizuoka|kawanehon.shizuoka|kawazu.shizuoka|kikugawa.shizuoka|kosai.shizuoka|makinohara.shizuoka|matsuzaki.shizuoka|minamiizu.shizuoka|mishima.shizuoka|morimachi.shizuoka|nishiizu.shizuoka|numazu.shizuoka|omaezaki.shizuoka|shimada.shizuoka|shimizu.shizuoka|shimoda.shizuoka|shizuoka.shizuoka|susono.shizuoka|yaizu.shizuoka|yoshida.shizuoka|ashikaga.tochigi|bato.tochigi|haga.tochigi|ichikai.tochigi|iwafune.tochigi|kaminokawa.tochigi|kanuma.tochigi|karasuyama.tochigi|kuroiso.tochigi|mashiko.tochigi|mibu.tochigi|moka.tochigi|motegi.tochigi|nasu.tochigi|nasushiobara.tochigi|nikko.tochigi|nishikata.tochigi|nogi.tochigi|ohira.tochigi|ohtawara.tochigi|oyama.tochigi|sakura.tochigi|sano.tochigi|shimotsuke.tochigi|shioya.tochigi|takanezawa.tochigi|tochigi.tochigi|tsuga.tochigi|ujiie.tochigi|utsunomiya.tochigi|yaita.tochigi|aizumi.tokushima|anan.tokushima|ichiba.tokushima|itano.tokushima|kainan.tokushima|komatsushima.tokushima|matsushige.tokushima|mima.tokushima|minami.tokushima|miyoshi.tokushima|mugi.tokushima|nakagawa.tokushima|naruto.tokushima|sanagochi.tokushima|shishikui.tokushima|tokushima.tokushima|wajiki.tokushima|adachi.tokyo|akiruno.tokyo|akishima.tokyo|aogashima.tokyo|arakawa.tokyo|bunkyo.tokyo|chiyoda.tokyo|chofu.tokyo|chuo.tokyo|edogawa.tokyo|fuchu.tokyo|fussa.tokyo|hachijo.tokyo|hachioji.tokyo|hamura.tokyo|higashikurume.tokyo|higashimurayama.tokyo|higashiyamato.tokyo|hino.tokyo|hinode.tokyo|hinohara.tokyo|inagi.tokyo|itabashi.tokyo|katsushika.tokyo|kita.tokyo|kiyose.tokyo|kodaira.tokyo|koganei.tokyo|kokubunji.tokyo|komae.tokyo|koto.tokyo|kouzushima.tokyo|kunitachi.tokyo|machida.tokyo|meguro.tokyo|minato.tokyo|mitaka.tokyo|mizuho.tokyo|musashimurayama.tokyo|musashino.tokyo|nakano.tokyo|nerima.tokyo|ogasawara.tokyo|okutama.tokyo|ome.tokyo|oshima.tokyo|ota.tokyo|setagaya.tokyo|shibuya.tokyo|shinagawa.tokyo|shinjuku.tokyo|suginami.tokyo|sumida.tokyo|tachikawa.tokyo|taito.tokyo|tama.tokyo|toshima.tokyo|chizu.tottori|hino.tottori|kawahara.tottori|koge.tottori|kotoura.tottori|misasa.tottori|nanbu.tottori|nichinan.tottori|sakaiminato.tottori|tottori.tottori|wakasa.tottori|yazu.tottori|yonago.tottori|asahi.toyama|fuchu.toyama|fukumitsu.toyama|funahashi.toyama|himi.toyama|imizu.toyama|inami.toyama|johana.toyama|kamiichi.toyama|kurobe.toyama|nakaniikawa.toyama|namerikawa.toyama|nanto.toyama|nyuzen.toyama|oyabe.toyama|taira.toyama|takaoka.toyama|tateyama.toyama|toga.toyama|tonami.toyama|toyama.toyama|unazuki.toyama|uozu.toyama|yamada.toyama|arida.wakayama|aridagawa.wakayama|gobo.wakayama|hashimoto.wakayama|hidaka.wakayama|hirogawa.wakayama|inami.wakayama|iwade.wakayama|kainan.wakayama|kamitonda.wakayama|katsuragi.wakayama|kimino.wakayama|kinokawa.wakayama|kitayama.wakayama|koya.wakayama|koza.wakayama|kozagawa.wakayama|kudoyama.wakayama|kushimoto.wakayama|mihama.wakayama|misato.wakayama|nachikatsuura.wakayama|shingu.wakayama|shirahama.wakayama|taiji.wakayama|tanabe.wakayama|wakayama.wakayama|yuasa.wakayama|yura.wakayama|asahi.yamagata|funagata.yamagata|higashine.yamagata|iide.yamagata|kahoku.yamagata|kaminoyama.yamagata|kaneyama.yamagata|kawanishi.yamagata|mamurogawa.yamagata|mikawa.yamagata|murayama.yamagata|nagai.yamagata|nakayama.yamagata|nanyo.yamagata|nishikawa.yamagata|obanazawa.yamagata|oe.yamagata|oguni.yamagata|ohkura.yamagata|oishida.yamagata|sagae.yamagata|sakata.yamagata|sakegawa.yamagata|shinjo.yamagata|shirataka.yamagata|shonai.yamagata|takahata.yamagata|tendo.yamagata|tozawa.yamagata|tsuruoka.yamagata|yamagata.yamagata|yamanobe.yamagata|yonezawa.yamagata|yuza.yamagata|abu.yamaguchi|hagi.yamaguchi|hikari.yamaguchi|hofu.yamaguchi|iwakuni.yamaguchi|kudamatsu.yamaguchi|mitou.yamaguchi|nagato.yamaguchi|oshima.yamaguchi|shimonoseki.yamaguchi|shunan.yamaguchi|tabuse.yamaguchi|tokuyama.yamaguchi|toyota.yamaguchi|ube.yamaguchi|yuu.yamaguchi|chuo.yamanashi|doshi.yamanashi|fuefuki.yamanashi|fujikawa.yamanashi|fujikawaguchiko.yamanashi|fujiyoshida.yamanashi|hayakawa.yamanashi|hokuto.yamanashi|ichikawamisato.yamanashi|kai.yamanashi|kofu.yamanashi|koshu.yamanashi|kosuge.yamanashi|minami-alps.yamanashi|minobu.yamanashi|nakamichi.yamanashi|nanbu.yamanashi|narusawa.yamanashi|nirasaki.yamanashi|nishikatsura.yamanashi|oshino.yamanashi|otsuki.yamanashi|showa.yamanashi|tabayama.yamanashi|tsuru.yamanashi|uenohara.yamanashi|yamanakako.yamanashi|yamanashi.yamanashi|blogspot", "ke": "*|blogspot.co", "kg": "org|net|com|edu|gov|mil", "kh": "*", "ki": "edu|biz|net|org|gov|info|com", "km": "org|nom|gov|prd|tm|edu|mil|ass|com|coop|asso|presse|medecin|notaires|pharmaciens|veterinaire|gouv", "kn": "net|org|edu|gov", "kp": "com|edu|gov|org|rep|tra", "kr": "ac|co|es|go|hs|kg|mil|ms|ne|or|pe|re|sc|busan|chungbuk|chungnam|daegu|daejeon|gangwon|gwangju|gyeongbuk|gyeonggi|gyeongnam|incheon|jeju|jeonbuk|jeonnam|seoul|ulsan|blogspot", "kw": "*", "ky": "edu|gov|com|org|net", "kz": "org|edu|net|gov|mil|com|nym", "la": "int|net|info|edu|gov|per|com|org|bnr|c|nym", "lb": "com|edu|gov|net|org", "lc": "com|net|co|org|edu|gov|oy", "li": "blogspot|nom|nym", "lk": "gov|sch|net|int|com|org|edu|ngo|soc|web|ltd|assn|grp|hotel|ac", "lr": "com|edu|gov|org|net", "ls": "co|org", "lt": "gov|blogspot|nym", "lu": "blogspot|nym", "lv": "com|edu|gov|org|mil|id|net|asn|conf", "ly": "com|net|gov|plc|edu|sch|med|org|id", "ma": "co|net|gov|org|ac|press", "mc": "tm|asso", "md": "blogspot", "me": "co|net|org|edu|ac|gov|its|priv|c66|daplie|localhost.daplie|filegear|brasilia|ddns|dnsfor|hopto|loginto|noip|webhop|nym|diskstation|dscloud|i234|myds|synology|wedeploy|yombo", "mg": "org|nom|gov|prd|tm|edu|mil|com|co", "mh": "", "mil": "", "mk": "com|org|net|edu|gov|inf|name|blogspot|nom", "ml": "com|edu|gouv|gov|net|org|presse", "mm": "*", "mn": "gov|edu|org|nyc", "mo": "com|net|org|edu|gov", "mobi": "dscloud", "mp": "", "mq": "", "mr": "gov|blogspot", "ms": "com|edu|gov|net|org", "mt": "com|edu|net|org|blogspot.com", "mu": "com|net|org|gov|ac|co|or", "museum": "academy|agriculture|air|airguard|alabama|alaska|amber|ambulance|american|americana|americanantiques|americanart|amsterdam|and|annefrank|anthro|anthropology|antiques|aquarium|arboretum|archaeological|archaeology|architecture|art|artanddesign|artcenter|artdeco|arteducation|artgallery|arts|artsandcrafts|asmatart|assassination|assisi|association|astronomy|atlanta|austin|australia|automotive|aviation|axis|badajoz|baghdad|bahn|bale|baltimore|barcelona|baseball|basel|baths|bauern|beauxarts|beeldengeluid|bellevue|bergbau|berkeley|berlin|bern|bible|bilbao|bill|birdart|birthplace|bonn|boston|botanical|botanicalgarden|botanicgarden|botany|brandywinevalley|brasil|bristol|british|britishcolumbia|broadcast|brunel|brussel|brussels|bruxelles|building|burghof|bus|bushey|cadaques|california|cambridge|can|canada|capebreton|carrier|cartoonart|casadelamoneda|castle|castres|celtic|center|chattanooga|cheltenham|chesapeakebay|chicago|children|childrens|childrensgarden|chiropractic|chocolate|christiansburg|cincinnati|cinema|circus|civilisation|civilization|civilwar|clinton|clock|coal|coastaldefence|cody|coldwar|collection|colonialwilliamsburg|coloradoplateau|columbia|columbus|communication|communications|community|computer|computerhistory|xn--comunicaes-v6a2o|contemporary|contemporaryart|convent|copenhagen|corporation|xn--correios-e-telecomunicaes-ghc29a|corvette|costume|countryestate|county|crafts|cranbrook|creation|cultural|culturalcenter|culture|cyber|cymru|dali|dallas|database|ddr|decorativearts|delaware|delmenhorst|denmark|depot|design|detroit|dinosaur|discovery|dolls|donostia|durham|eastafrica|eastcoast|education|educational|egyptian|eisenbahn|elburg|elvendrell|embroidery|encyclopedic|england|entomology|environment|environmentalconservation|epilepsy|essex|estate|ethnology|exeter|exhibition|family|farm|farmequipment|farmers|farmstead|field|figueres|filatelia|film|fineart|finearts|finland|flanders|florida|force|fortmissoula|fortworth|foundation|francaise|frankfurt|franziskaner|freemasonry|freiburg|fribourg|frog|fundacio|furniture|gallery|garden|gateway|geelvinck|gemological|geology|georgia|giessen|glas|glass|gorge|grandrapids|graz|guernsey|halloffame|hamburg|handson|harvestcelebration|hawaii|health|heimatunduhren|hellas|helsinki|hembygdsforbund|heritage|histoire|historical|historicalsociety|historichouses|historisch|historisches|history|historyofscience|horology|house|humanities|illustration|imageandsound|indian|indiana|indianapolis|indianmarket|intelligence|interactive|iraq|iron|isleofman|jamison|jefferson|jerusalem|jewelry|jewish|jewishart|jfk|journalism|judaica|judygarland|juedisches|juif|karate|karikatur|kids|koebenhavn|koeln|kunst|kunstsammlung|kunstunddesign|labor|labour|lajolla|lancashire|landes|lans|xn--lns-qla|larsson|lewismiller|lincoln|linz|living|livinghistory|localhistory|london|losangeles|louvre|loyalist|lucerne|luxembourg|luzern|mad|madrid|mallorca|manchester|mansion|mansions|manx|marburg|maritime|maritimo|maryland|marylhurst|media|medical|medizinhistorisches|meeres|memorial|mesaverde|michigan|midatlantic|military|mill|miners|mining|minnesota|missile|missoula|modern|moma|money|monmouth|monticello|montreal|moscow|motorcycle|muenchen|muenster|mulhouse|muncie|museet|museumcenter|museumvereniging|music|national|nationalfirearms|nationalheritage|nativeamerican|naturalhistory|naturalhistorymuseum|naturalsciences|nature|naturhistorisches|natuurwetenschappen|naumburg|naval|nebraska|neues|newhampshire|newjersey|newmexico|newport|newspaper|newyork|niepce|norfolk|north|nrw|nuernberg|nuremberg|nyc|nyny|oceanographic|oceanographique|omaha|online|ontario|openair|oregon|oregontrail|otago|oxford|pacific|paderborn|palace|paleo|palmsprings|panama|paris|pasadena|pharmacy|philadelphia|philadelphiaarea|philately|phoenix|photography|pilots|pittsburgh|planetarium|plantation|plants|plaza|portal|portland|portlligat|posts-and-telecommunications|preservation|presidio|press|project|public|pubol|quebec|railroad|railway|research|resistance|riodejaneiro|rochester|rockart|roma|russia|saintlouis|salem|salvadordali|salzburg|sandiego|sanfrancisco|santabarbara|santacruz|santafe|saskatchewan|satx|savannahga|schlesisches|schoenbrunn|schokoladen|school|schweiz|science|scienceandhistory|scienceandindustry|sciencecenter|sciencecenters|science-fiction|sciencehistory|sciences|sciencesnaturelles|scotland|seaport|settlement|settlers|shell|sherbrooke|sibenik|silk|ski|skole|society|sologne|soundandvision|southcarolina|southwest|space|spy|square|stadt|stalbans|starnberg|state|stateofdelaware|station|steam|steiermark|stjohn|stockholm|stpetersburg|stuttgart|suisse|surgeonshall|surrey|svizzera|sweden|sydney|tank|tcm|technology|telekommunikation|television|texas|textile|theater|time|timekeeping|topology|torino|touch|town|transport|tree|trolley|trust|trustee|uhren|ulm|undersea|university|usa|usantiques|usarts|uscountryestate|usculture|usdecorativearts|usgarden|ushistory|ushuaia|uslivinghistory|utah|uvic|valley|vantaa|versailles|viking|village|virginia|virtual|virtuel|vlaanderen|volkenkunde|wales|wallonie|war|washingtondc|watchandclock|watch-and-clock|western|westfalen|whaling|wildlife|williamsburg|windmill|workshop|york|yorkshire|yosemite|youth|zoological|zoology|xn--9dbhblg6di|xn--h1aegh", "mv": "aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro", "mw": "ac|biz|co|com|coop|edu|gov|int|museum|net|org", "mx": "com|org|gob|edu|net|blogspot|nym", "my": "com|net|org|gov|edu|mil|name|blogspot", "mz": "ac|adv|co|edu|gov|mil|net|org", "na": "info|pro|name|school|or|dr|us|mx|ca|in|cc|tv|ws|mobi|co|com|org", "name": "forgot.her|forgot.his", "nc": "asso|nom", "ne": "", "net": "*alwaysdata|cloudfront|t3l3p0rt|myfritz|boomla|bplaced|square7|gb|hu|jp|se|uk|in|cloudaccess|cdn77-ssl|r.cdn77|feste-ip|knx-server|static-access|*cryptonomic|at-band-camp|blogdns|broke-it|buyshouses|dnsalias|dnsdojo|does-it|dontexist|dynalias|dynathome|endofinternet|from-az|from-co|from-la|from-ny|gets-it|ham-radio-op|homeftp|homeip|homelinux|homeunix|in-the-band|is-a-chef|is-a-geek|isa-geek|kicks-ass|office-on-the|podzone|scrapper-site|selfip|sells-it|servebbs|serveftp|thruhere|webhop|definima|casacam|dynu|dynv6|twmail|ru|fastlylb|map.fastlylb|freetls.fastly|map.fastly|a.prod.fastly|global.prod.fastly|a.ssl.fastly|b.ssl.fastly|global.ssl.fastly|flynnhosting|cloudfunctions|moonscale|ipifony|barsy|azurewebsites|azure-mobile|cloudapp|eating-organic|mydissent|myeffect|mymediapc|mypsx|mysecuritycamera|nhlfan|no-ip|pgafan|privatizehealthinsurance|bounceme|ddns|redirectme|serveblog|serveminecraft|sytes|rackmaze|firewall-gateway|dsmynas|familyds|za", "nf": "com|net|per|rec|web|arts|firm|info|other|store", "ng": "com|edu|gov|i|mil|mobi|name|net|org|sch|blogspot.com", "ni": "ac|biz|co|com|edu|gob|in|info|int|mil|net|nom|org|web", "nl": "bv|virtueeldomein|co|blogspot|*transurl|cistron|demon", "no": "fhs|vgs|fylkesbibl|folkebibl|museum|idrett|priv|mil|stat|dep|kommune|herad|aa|ah|bu|fm|hl|hm|jan-mayen|mr|nl|nt|of|ol|oslo|rl|sf|st|svalbard|tm|tr|va|vf|gs.aa|gs.ah|gs.bu|gs.fm|gs.hl|gs.hm|gs.jan-mayen|gs.mr|gs.nl|gs.nt|gs.of|gs.ol|gs.oslo|gs.rl|gs.sf|gs.st|gs.svalbard|gs.tm|gs.tr|gs.va|gs.vf|akrehamn|xn--krehamn-dxa|algard|xn--lgrd-poac|arna|brumunddal|bryne|bronnoysund|xn--brnnysund-m8ac|drobak|xn--drbak-wua|egersund|fetsund|floro|xn--flor-jra|fredrikstad|hokksund|honefoss|xn--hnefoss-q1a|jessheim|jorpeland|xn--jrpeland-54a|kirkenes|kopervik|krokstadelva|langevag|xn--langevg-jxa|leirvik|mjondalen|xn--mjndalen-64a|mo-i-rana|mosjoen|xn--mosjen-eya|nesoddtangen|orkanger|osoyro|xn--osyro-wua|raholt|xn--rholt-mra|sandnessjoen|xn--sandnessjen-ogb|skedsmokorset|slattum|spjelkavik|stathelle|stavern|stjordalshalsen|xn--stjrdalshalsen-sqb|tananger|tranby|vossevangen|afjord|xn--fjord-lra|agdenes|al|xn--l-1fa|alesund|xn--lesund-hua|alstahaug|alta|xn--lt-liac|alaheadju|xn--laheadju-7ya|alvdal|amli|xn--mli-tla|amot|xn--mot-tla|andebu|andoy|xn--andy-ira|andasuolo|ardal|xn--rdal-poa|aremark|arendal|xn--s-1fa|aseral|xn--seral-lra|asker|askim|askvoll|askoy|xn--asky-ira|asnes|xn--snes-poa|audnedaln|aukra|aure|aurland|aurskog-holand|xn--aurskog-hland-jnb|austevoll|austrheim|averoy|xn--avery-yua|balestrand|ballangen|balat|xn--blt-elab|balsfjord|bahccavuotna|xn--bhccavuotna-k7a|bamble|bardu|beardu|beiarn|bajddar|xn--bjddar-pta|baidar|xn--bidr-5nac|berg|bergen|berlevag|xn--berlevg-jxa|bearalvahki|xn--bearalvhki-y4a|bindal|birkenes|bjarkoy|xn--bjarky-fya|bjerkreim|bjugn|bodo|xn--bod-2na|badaddja|xn--bdddj-mrabd|budejju|bokn|bremanger|bronnoy|xn--brnny-wuac|bygland|bykle|barum|xn--brum-voa|bo.telemark|xn--b-5ga.telemark|bo.nordland|xn--b-5ga.nordland|bievat|xn--bievt-0qa|bomlo|xn--bmlo-gra|batsfjord|xn--btsfjord-9za|bahcavuotna|xn--bhcavuotna-s4a|dovre|drammen|drangedal|dyroy|xn--dyry-ira|donna|xn--dnna-gra|eid|eidfjord|eidsberg|eidskog|eidsvoll|eigersund|elverum|enebakk|engerdal|etne|etnedal|evenes|evenassi|xn--eveni-0qa01ga|evje-og-hornnes|farsund|fauske|fuossko|fuoisku|fedje|fet|finnoy|xn--finny-yua|fitjar|fjaler|fjell|flakstad|flatanger|flekkefjord|flesberg|flora|fla|xn--fl-zia|folldal|forsand|fosnes|frei|frogn|froland|frosta|frana|xn--frna-woa|froya|xn--frya-hra|fusa|fyresdal|forde|xn--frde-gra|gamvik|gangaviika|xn--ggaviika-8ya47h|gaular|gausdal|gildeskal|xn--gildeskl-g0a|giske|gjemnes|gjerdrum|gjerstad|gjesdal|gjovik|xn--gjvik-wua|gloppen|gol|gran|grane|granvin|gratangen|grimstad|grong|kraanghke|xn--kranghke-b0a|grue|gulen|hadsel|halden|halsa|hamar|hamaroy|habmer|xn--hbmer-xqa|hapmir|xn--hpmir-xqa|hammerfest|hammarfeasta|xn--hmmrfeasta-s4ac|haram|hareid|harstad|hasvik|aknoluokta|xn--koluokta-7ya57h|hattfjelldal|aarborte|haugesund|hemne|hemnes|hemsedal|heroy.more-og-romsdal|xn--hery-ira.xn--mre-og-romsdal-qqb|heroy.nordland|xn--hery-ira.nordland|hitra|hjartdal|hjelmeland|hobol|xn--hobl-ira|hof|hol|hole|holmestrand|holtalen|xn--holtlen-hxa|hornindal|horten|hurdal|hurum|hvaler|hyllestad|hagebostad|xn--hgebostad-g3a|hoyanger|xn--hyanger-q1a|hoylandet|xn--hylandet-54a|ha|xn--h-2fa|ibestad|inderoy|xn--indery-fya|iveland|jevnaker|jondal|jolster|xn--jlster-bya|karasjok|karasjohka|xn--krjohka-hwab49j|karlsoy|galsa|xn--gls-elac|karmoy|xn--karmy-yua|kautokeino|guovdageaidnu|klepp|klabu|xn--klbu-woa|kongsberg|kongsvinger|kragero|xn--krager-gya|kristiansand|kristiansund|krodsherad|xn--krdsherad-m8a|kvalsund|rahkkeravju|xn--rhkkervju-01af|kvam|kvinesdal|kvinnherad|kviteseid|kvitsoy|xn--kvitsy-fya|kvafjord|xn--kvfjord-nxa|giehtavuoatna|kvanangen|xn--kvnangen-k0a|navuotna|xn--nvuotna-hwa|kafjord|xn--kfjord-iua|gaivuotna|xn--givuotna-8ya|larvik|lavangen|lavagis|loabat|xn--loabt-0qa|lebesby|davvesiida|leikanger|leirfjord|leka|leksvik|lenvik|leangaviika|xn--leagaviika-52b|lesja|levanger|lier|lierne|lillehammer|lillesand|lindesnes|lindas|xn--linds-pra|lom|loppa|lahppi|xn--lhppi-xqa|lund|lunner|luroy|xn--lury-ira|luster|lyngdal|lyngen|ivgu|lardal|lerdal|xn--lrdal-sra|lodingen|xn--ldingen-q1a|lorenskog|xn--lrenskog-54a|loten|xn--lten-gra|malvik|masoy|xn--msy-ula0h|muosat|xn--muost-0qa|mandal|marker|marnardal|masfjorden|meland|meldal|melhus|meloy|xn--mely-ira|meraker|xn--merker-kua|moareke|xn--moreke-jua|midsund|midtre-gauldal|modalen|modum|molde|moskenes|moss|mosvik|malselv|xn--mlselv-iua|malatvuopmi|xn--mlatvuopmi-s4a|namdalseid|aejrie|namsos|namsskogan|naamesjevuemie|xn--nmesjevuemie-tcba|laakesvuemie|nannestad|narvik|narviika|naustdal|nedre-eiker|nes.akershus|nes.buskerud|nesna|nesodden|nesseby|unjarga|xn--unjrga-rta|nesset|nissedal|nittedal|nord-aurdal|nord-fron|nord-odal|norddal|nordkapp|davvenjarga|xn--davvenjrga-y4a|nordre-land|nordreisa|raisa|xn--risa-5na|nore-og-uvdal|notodden|naroy|xn--nry-yla5g|notteroy|xn--nttery-byae|odda|oksnes|xn--ksnes-uua|oppdal|oppegard|xn--oppegrd-ixa|orkdal|orland|xn--rland-uua|orskog|xn--rskog-uua|orsta|xn--rsta-fra|os.hedmark|os.hordaland|osen|osteroy|xn--ostery-fya|ostre-toten|xn--stre-toten-zcb|overhalla|ovre-eiker|xn--vre-eiker-k8a|oyer|xn--yer-zna|oygarden|xn--ygarden-p1a|oystre-slidre|xn--ystre-slidre-ujb|porsanger|porsangu|xn--porsgu-sta26f|porsgrunn|radoy|xn--rady-ira|rakkestad|rana|ruovat|randaberg|rauma|rendalen|rennebu|rennesoy|xn--rennesy-v1a|rindal|ringebu|ringerike|ringsaker|rissa|risor|xn--risr-ira|roan|rollag|rygge|ralingen|xn--rlingen-mxa|rodoy|xn--rdy-0nab|romskog|xn--rmskog-bya|roros|xn--rros-gra|rost|xn--rst-0na|royken|xn--ryken-vua|royrvik|xn--ryrvik-bya|rade|xn--rde-ula|salangen|siellak|saltdal|salat|xn--slt-elab|xn--slat-5na|samnanger|sande.more-og-romsdal|sande.xn--mre-og-romsdal-qqb|sande.vestfold|sandefjord|sandnes|sandoy|xn--sandy-yua|sarpsborg|sauda|sauherad|sel|selbu|selje|seljord|sigdal|siljan|sirdal|skaun|skedsmo|ski|skien|skiptvet|skjervoy|xn--skjervy-v1a|skierva|xn--skierv-uta|skjak|xn--skjk-soa|skodje|skanland|xn--sknland-fxa|skanit|xn--sknit-yqa|smola|xn--smla-hra|snillfjord|snasa|xn--snsa-roa|snoasa|snaase|xn--snase-nra|sogndal|sokndal|sola|solund|songdalen|sortland|spydeberg|stange|stavanger|steigen|steinkjer|stjordal|xn--stjrdal-s1a|stokke|stor-elvdal|stord|stordal|storfjord|omasvuotna|strand|stranda|stryn|sula|suldal|sund|sunndal|surnadal|sveio|svelvik|sykkylven|sogne|xn--sgne-gra|somna|xn--smna-gra|sondre-land|xn--sndre-land-0cb|sor-aurdal|xn--sr-aurdal-l8a|sor-fron|xn--sr-fron-q1a|sor-odal|xn--sr-odal-q1a|sor-varanger|xn--sr-varanger-ggb|matta-varjjat|xn--mtta-vrjjat-k7af|sorfold|xn--srfold-bya|sorreisa|xn--srreisa-q1a|sorum|xn--srum-gra|tana|deatnu|time|tingvoll|tinn|tjeldsund|dielddanuorri|tjome|xn--tjme-hra|tokke|tolga|torsken|tranoy|xn--trany-yua|tromso|xn--troms-zua|tromsa|romsa|trondheim|troandin|trysil|trana|xn--trna-woa|trogstad|xn--trgstad-r1a|tvedestrand|tydal|tynset|tysfjord|divtasvuodna|divttasvuotna|tysnes|tysvar|xn--tysvr-vra|tonsberg|xn--tnsberg-q1a|ullensaker|ullensvang|ulvik|utsira|vadso|xn--vads-jra|cahcesuolo|xn--hcesuolo-7ya35b|vaksdal|valle|vang|vanylven|vardo|xn--vard-jra|varggat|xn--vrggt-xqad|vefsn|vaapste|vega|vegarshei|xn--vegrshei-c0a|vennesla|verdal|verran|vestby|vestnes|vestre-slidre|vestre-toten|vestvagoy|xn--vestvgy-ixa6o|vevelstad|vik|vikna|vindafjord|volda|voss|varoy|xn--vry-yla5g|vagan|xn--vgan-qoa|voagat|vagsoy|xn--vgsy-qoa0j|vaga|xn--vg-yiab|valer.ostfold|xn--vler-qoa.xn--stfold-9xa|valer.hedmark|xn--vler-qoa.hedmark|co|blogspot", "np": "*", "nr": "biz|info|gov|edu|org|net|com", "nu": "merseine|mine|shacknet|nom", "nz": "ac|co|cri|geek|gen|govt|health|iwi|kiwi|maori|mil|xn--mori-qsa|net|org|parliament|school|blogspot.co|nym", "om": "co|com|edu|gov|med|museum|net|org|pro", "onion": "", "org": "tele.amune|pimienta|poivron|potager|sweetpepper|ae|us|certmgr|c.cdn77|rsc.cdn77|ssl.origin.cdn77-secure|cloudns|duckdns|tunk|dyndns|blogdns|blogsite|boldlygoingnowhere|dnsalias|dnsdojo|doesntexist|dontexist|doomdns|dvrdns|dynalias|endofinternet|endoftheinternet|from-me|game-host|go.dyndns|gotdns|hobby-site|home.dyndns|homedns|homeftp|homelinux|homeunix|is-a-bruinsfan|is-a-candidate|is-a-celticsfan|is-a-chef|is-a-geek|is-a-knight|is-a-linux-user|is-a-patsfan|is-a-soxfan|is-found|is-lost|is-saved|is-very-bad|is-very-evil|is-very-good|is-very-nice|is-very-sweet|isa-geek|kicks-ass|misconfused|podzone|readmyblog|selfip|sellsyourhome|servebbs|serveftp|servegame|stuff-4-sale|webhop|ddnss|accesscam|camdvr|freeddns|mywire|webredirect|eu|al.eu|asso.eu|at.eu|au.eu|be.eu|bg.eu|ca.eu|cd.eu|ch.eu|cn.eu|cy.eu|cz.eu|de.eu|dk.eu|edu.eu|ee.eu|es.eu|fi.eu|fr.eu|gr.eu|hr.eu|hu.eu|ie.eu|il.eu|in.eu|int.eu|is.eu|it.eu|jp.eu|kr.eu|lt.eu|lu.eu|lv.eu|mc.eu|me.eu|mk.eu|mt.eu|my.eu|net.eu|ng.eu|nl.eu|no.eu|nz.eu|paris.eu|pl.eu|pt.eu|q-a.eu|ro.eu|ru.eu|se.eu|si.eu|sk.eu|tr.eu|uk.eu|us.eu|twmail|fedorainfracloud|fedorapeople|cloud.fedoraproject|hepforge|js|bmoattachments|cable-modem|collegefan|couchpotatofries|mlbfan|mysecuritycamera|nflfan|read-books|ufcfan|hopto|myftp|no-ip|zapto|my-firewall|myfirewall|spdns|dsmynas|familyds|tuxfamily|diskstation|hk|wmflabs|za", "pa": "ac|gob|com|org|sld|edu|net|ing|abo|med|nom", "pe": "edu|gob|nom|mil|org|com|net|blogspot|nym", "pf": "com|org|edu", "pg": "*", "ph": "com|net|org|gov|edu|ngo|mil|i", "pk": "com|net|edu|org|fam|biz|web|gov|gob|gok|gon|gop|gos|info", "pl": "com|net|org|aid|agro|atm|auto|biz|edu|gmina|gsm|info|mail|miasta|media|mil|nieruchomosci|nom|pc|powiat|priv|realestate|rel|sex|shop|sklep|sos|szkola|targi|tm|tourism|travel|turystyka|gov|ap.gov|ic.gov|is.gov|us.gov|kmpsp.gov|kppsp.gov|kwpsp.gov|psp.gov|wskr.gov|kwp.gov|mw.gov|ug.gov|um.gov|umig.gov|ugim.gov|upow.gov|uw.gov|starostwo.gov|pa.gov|po.gov|psse.gov|pup.gov|rzgw.gov|sa.gov|so.gov|sr.gov|wsa.gov|sko.gov|uzs.gov|wiih.gov|winb.gov|pinb.gov|wios.gov|witd.gov|wzmiuw.gov|piw.gov|wiw.gov|griw.gov|wif.gov|oum.gov|sdn.gov|zp.gov|uppo.gov|mup.gov|wuoz.gov|konsulat.gov|oirm.gov|augustow|babia-gora|bedzin|beskidy|bialowieza|bialystok|bielawa|bieszczady|boleslawiec|bydgoszcz|bytom|cieszyn|czeladz|czest|dlugoleka|elblag|elk|glogow|gniezno|gorlice|grajewo|ilawa|jaworzno|jelenia-gora|jgora|kalisz|kazimierz-dolny|karpacz|kartuzy|kaszuby|katowice|kepno|ketrzyn|klodzko|kobierzyce|kolobrzeg|konin|konskowola|kutno|lapy|lebork|legnica|lezajsk|limanowa|lomza|lowicz|lubin|lukow|malbork|malopolska|mazowsze|mazury|mielec|mielno|mragowo|naklo|nowaruda|nysa|olawa|olecko|olkusz|olsztyn|opoczno|opole|ostroda|ostroleka|ostrowiec|ostrowwlkp|pila|pisz|podhale|podlasie|polkowice|pomorze|pomorskie|prochowice|pruszkow|przeworsk|pulawy|radom|rawa-maz|rybnik|rzeszow|sanok|sejny|slask|slupsk|sosnowiec|stalowa-wola|skoczow|starachowice|stargard|suwalki|swidnica|swiebodzin|swinoujscie|szczecin|szczytno|tarnobrzeg|tgory|turek|tychy|ustka|walbrzych|warmia|warszawa|waw|wegrow|wielun|wlocl|wloclawek|wodzislaw|wolomin|wroclaw|zachpomor|zagan|zarow|zgora|zgorzelec|beep|co|art|gliwice|krakow|poznan|wroc|zakopane|gda|gdansk|gdynia|med|sopot", "pm": "", "pn": "gov|co|org|edu|net", "post": "", "pr": "com|net|org|gov|edu|isla|pro|biz|info|name|est|prof|ac", "pro": "aaa|aca|acct|avocat|bar|cpa|eng|jur|law|med|recht|cloudns", "ps": "edu|gov|sec|plo|com|org|net", "pt": "net|gov|org|edu|int|publ|com|nome|blogspot|nym", "pw": "co|ne|or|ed|go|belau|cloudns|nom", "py": "com|coop|edu|gov|mil|net|org", "qa": "com|edu|gov|mil|name|net|org|sch|blogspot|nom", "re": "asso|com|nom|blogspot", "ro": "arts|com|firm|info|nom|nt|org|rec|store|tm|www|shop|blogspot", "rs": "ac|co|edu|gov|in|org|blogspot|nom", "ru": "ac|edu|gov|int|mil|test|adygeya|bashkiria|bir|cbg|com|dagestan|grozny|kalmykia|kustanai|marine|mordovia|msk|mytis|nalchik|nov|pyatigorsk|spb|vladikavkaz|vladimir|blogspot|hb.cldmail|net|org|pp", "rw": "gov|net|edu|ac|com|co|int|mil|gouv", "sa": "com|net|org|gov|med|pub|edu|sch", "sb": "com|edu|gov|net|org", "sc": "com|gov|net|org|edu", "sd": "com|net|org|edu|med|tv|gov|info", "se": "a|ac|b|bd|brand|c|d|e|f|fh|fhsk|fhv|g|h|i|k|komforb|kommunalforbund|komvux|l|lanbib|m|n|naturbruksgymn|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z|com|blogspot", "sg": "com|net|org|gov|edu|per|blogspot", "sh": "com|net|gov|org|mil|hashbang|*platform|now", "si": "blogspot|nom", "sj": "", "sk": "blogspot|nym", "sl": "com|net|edu|gov|org", "sm": "", "sn": "art|com|edu|gouv|org|perso|univ|blogspot", "so": "com|net|org", "sr": "", "st": "co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store", "su": "abkhazia|adygeya|aktyubinsk|arkhangelsk|armenia|ashgabad|azerbaijan|balashov|bashkiria|bryansk|bukhara|chimkent|dagestan|east-kazakhstan|exnet|georgia|grozny|ivanovo|jambyl|kalmykia|kaluga|karacol|karaganda|karelia|khakassia|krasnodar|kurgan|kustanai|lenug|mangyshlak|mordovia|msk|murmansk|nalchik|navoi|north-kazakhstan|nov|obninsk|penza|pokrovsk|sochi|spb|tashkent|termez|togliatti|troitsk|tselinograd|tula|tuva|vladikavkaz|vladimir|vologda|nym", "sv": "com|edu|gob|org|red", "sx": "gov|nym", "sy": "edu|gov|net|mil|com|org", "sz": "co|ac|org", "tc": "", "td": "blogspot", "tel": "", "tf": "", "tg": "", "th": "ac|co|go|in|mi|net|or", "tj": "ac|biz|co|com|edu|go|gov|int|mil|name|net|nic|org|test|web", "tk": "", "tl": "gov", "tm": "com|co|org|net|nom|gov|mil|edu", "tn": "com|ens|fin|gov|ind|intl|nat|net|org|info|perso|tourism|edunet|rnrt|rns|rnu|mincom|agrinet|defense|turen", "to": "com|gov|net|org|edu|mil|vpnplus", "tr": "com|info|biz|net|org|web|gen|tv|av|dr|bbs|name|tel|gov|bel|pol|mil|k12|edu|kep|nc|gov.nc|blogspot.com", "travel": "", "tt": "co|com|org|net|biz|info|pro|int|coop|jobs|mobi|travel|museum|aero|name|gov|edu", "tv": "dyndns|better-than|on-the-web|worse-than", "tw": "edu|gov|mil|com|net|org|idv|game|ebiz|club|xn--zf0ao64a|xn--uc0atv|xn--czrw28b|mymailer.com|url|blogspot|nym", "tz": "ac|co|go|hotel|info|me|mil|mobi|ne|or|sc|tv", "ua": "com|edu|gov|in|net|org|cherkassy|cherkasy|chernigov|chernihiv|chernivtsi|chernovtsy|ck|cn|cr|crimea|cv|dn|dnepropetrovsk|dnipropetrovsk|dominic|donetsk|dp|if|ivano-frankivsk|kh|kharkiv|kharkov|kherson|khmelnitskiy|khmelnytskyi|kiev|kirovograd|km|kr|krym|ks|kv|kyiv|lg|lt|lugansk|lutsk|lv|lviv|mk|mykolaiv|nikolaev|od|odesa|odessa|pl|poltava|rivne|rovno|rv|sb|sebastopol|sevastopol|sm|sumy|te|ternopil|uz|uzhgorod|vinnica|vinnytsia|vn|volyn|yalta|zaporizhzhe|zaporizhzhia|zhitomir|zhytomyr|zp|zt|cc|inf|ltd|biz|co|pp", "ug": "co|or|ac|sc|go|ne|com|org|blogspot|nom", "uk": "ac|co|gov|ltd|me|net|nhs|org|plc|police|*sch|service.gov|homeoffice.gov|blogspot.co|no-ip.co|wellbeingzone.co", "us": "dni|fed|isa|kids|nsn|ak|al|ar|as|az|ca|co|ct|dc|de|fl|ga|gu|hi|ia|id|il|in|ks|ky|la|ma|md|me|mi|mn|mo|ms|mt|nc|nd|ne|nh|nj|nm|nv|ny|oh|ok|or|pa|pr|ri|sc|sd|tn|tx|ut|vi|vt|va|wa|wi|wv|wy|k12.ak|k12.al|k12.ar|k12.as|k12.az|k12.ca|k12.co|k12.ct|k12.dc|k12.de|k12.fl|k12.ga|k12.gu|k12.ia|k12.id|k12.il|k12.in|k12.ks|k12.ky|k12.la|k12.ma|k12.md|k12.me|k12.mi|k12.mn|k12.mo|k12.ms|k12.mt|k12.nc|k12.ne|k12.nh|k12.nj|k12.nm|k12.nv|k12.ny|k12.oh|k12.ok|k12.or|k12.pa|k12.pr|k12.ri|k12.sc|k12.tn|k12.tx|k12.ut|k12.vi|k12.vt|k12.va|k12.wa|k12.wi|k12.wy|cc.ak|cc.al|cc.ar|cc.as|cc.az|cc.ca|cc.co|cc.ct|cc.dc|cc.de|cc.fl|cc.ga|cc.gu|cc.hi|cc.ia|cc.id|cc.il|cc.in|cc.ks|cc.ky|cc.la|cc.ma|cc.md|cc.me|cc.mi|cc.mn|cc.mo|cc.ms|cc.mt|cc.nc|cc.nd|cc.ne|cc.nh|cc.nj|cc.nm|cc.nv|cc.ny|cc.oh|cc.ok|cc.or|cc.pa|cc.pr|cc.ri|cc.sc|cc.sd|cc.tn|cc.tx|cc.ut|cc.vi|cc.vt|cc.va|cc.wa|cc.wi|cc.wv|cc.wy|lib.ak|lib.al|lib.ar|lib.as|lib.az|lib.ca|lib.co|lib.ct|lib.dc|lib.fl|lib.ga|lib.gu|lib.hi|lib.ia|lib.id|lib.il|lib.in|lib.ks|lib.ky|lib.la|lib.ma|lib.md|lib.me|lib.mi|lib.mn|lib.mo|lib.ms|lib.mt|lib.nc|lib.nd|lib.ne|lib.nh|lib.nj|lib.nm|lib.nv|lib.ny|lib.oh|lib.ok|lib.or|lib.pa|lib.pr|lib.ri|lib.sc|lib.sd|lib.tn|lib.tx|lib.ut|lib.vi|lib.vt|lib.va|lib.wa|lib.wi|lib.wy|pvt.k12.ma|chtr.k12.ma|paroch.k12.ma|cloudns|drud|is-by|land-4-sale|stuff-4-sale|golffan|noip|pointto|lib.de", "uy": "com|edu|gub|mil|net|org|blogspot.com|nom", "uz": "co|com|net|org", "va": "", "vc": "com|net|org|gov|mil|edu|nom", "ve": "arts|co|com|e12|edu|firm|gob|gov|info|int|mil|net|org|rec|store|tec|web", "vg": "nom", "vi": "co|com|k12|net|org", "vn": "com|net|org|edu|gov|int|ac|biz|info|name|pro|health|blogspot", "vu": "com|edu|net|org", "wf": "", "ws": "com|net|org|gov|edu|*advisor|dyndns|mypets", "yt": "", "xn--mgbaam7a8h": "", "xn--y9a3aq": "", "xn--54b7fta0cc": "", "xn--90ae": "", "xn--90ais": "", "xn--fiqs8s": "", "xn--fiqz9s": "", "xn--lgbbat1ad8j": "", "xn--wgbh1c": "", "xn--e1a4c": "", "xn--node": "", "xn--qxam": "", "xn--j6w193g": "", "xn--2scrj9c": "", "xn--3hcrj9c": "", "xn--45br5cyl": "", "xn--h2breg3eve": "", "xn--h2brj9c8c": "", "xn--mgbgu82a": "", "xn--rvc1e0am3e": "", "xn--h2brj9c": "", "xn--mgbbh1a71e": "", "xn--fpcrj9c3d": "", "xn--gecrj9c": "", "xn--s9brj9c": "", "xn--45brj9c": "", "xn--xkc2dl3a5ee0h": "", "xn--mgba3a4f16a": "", "xn--mgba3a4fra": "", "xn--mgbtx2b": "", "xn--mgbayh7gpa": "", "xn--3e0b707e": "", "xn--80ao21a": "", "xn--fzc2c9e2c": "", "xn--xkc2al3hye2a": "", "xn--mgbc0a9azcg": "", "xn--d1alf": "", "xn--l1acc": "", "xn--mix891f": "", "xn--mix082f": "", "xn--mgbx4cd0ab": "", "xn--mgb9awbf": "", "xn--mgbai9azgqp6j": "", "xn--mgbai9a5eva00b": "", "xn--ygbi2ammx": "", "xn--90a3ac": "xn--o1ac|xn--c1avg|xn--90azh|xn--d1at|xn--o1ach|xn--80au", "xn--p1ai": "", "xn--wgbl6a": "", "xn--mgberp4a5d4ar": "", "xn--mgberp4a5d4a87g": "", "xn--mgbqly7c0a67fbc": "", "xn--mgbqly7cvafr": "", "xn--mgbpl2fh": "", "xn--yfro4i67o": "", "xn--clchc0ea0b2g2a9gcd": "", "xn--ogbpf8fl": "", "xn--mgbtf8fl": "", "xn--o3cw4h": "xn--12c1fe0br|xn--12co0c3b4eva|xn--h3cuzk1di|xn--o3cyx2a|xn--m3ch0j3a|xn--12cfi8ixb8l", "xn--pgbs0dh": "", "xn--kpry57d": "", "xn--kprw13d": "", "xn--nnx388a": "", "xn--j1amh": "", "xn--mgb2ddes": "", "xxx": "", "ye": "*", "za": "ac|agric|alt|co|edu|gov|grondar|law|mil|net|ngo|nis|nom|org|school|tm|web|blogspot.co", "zm": "ac|biz|co|com|edu|gov|info|mil|net|org|sch", "zw": "ac|co|gov|mil|org", "aaa": "", "aarp": "", "abarth": "", "abb": "", "abbott": "", "abbvie": "", "abc": "", "able": "", "abogado": "", "abudhabi": "", "academy": "", "accenture": "", "accountant": "", "accountants": "", "aco": "", "active": "", "actor": "", "adac": "", "ads": "", "adult": "", "aeg": "", "aetna": "", "afamilycompany": "", "afl": "", "africa": "", "agakhan": "", "agency": "", "aig": "", "aigo": "", "airbus": "", "airforce": "", "airtel": "", "akdn": "", "alfaromeo": "", "alibaba": "", "alipay": "", "allfinanz": "", "allstate": "", "ally": "", "alsace": "", "alstom": "", "americanexpress": "", "americanfamily": "", "amex": "", "amfam": "", "amica": "", "amsterdam": "", "analytics": "", "android": "", "anquan": "", "anz": "", "aol": "", "apartments": "", "app": "", "apple": "", "aquarelle": "", "arab": "", "aramco": "", "archi": "", "army": "", "art": "", "arte": "", "asda": "", "associates": "", "athleta": "", "attorney": "", "auction": "", "audi": "", "audible": "", "audio": "", "auspost": "", "author": "", "auto": "", "autos": "", "avianca": "", "aws": "", "axa": "", "azure": "", "baby": "", "baidu": "", "banamex": "", "bananarepublic": "", "band": "", "bank": "", "bar": "", "barcelona": "", "barclaycard": "", "barclays": "", "barefoot": "", "bargains": "", "baseball": "", "basketball": "", "bauhaus": "", "bayern": "", "bbc": "", "bbt": "", "bbva": "", "bcg": "", "bcn": "", "beats": "", "beauty": "", "beer": "", "bentley": "", "berlin": "", "best": "", "bestbuy": "", "bet": "", "bharti": "", "bible": "", "bid": "", "bike": "", "bing": "", "bingo": "", "bio": "", "black": "", "blackfriday": "", "blanco": "", "blockbuster": "", "blog": "", "bloomberg": "", "blue": "", "bms": "", "bmw": "", "bnl": "", "bnpparibas": "", "boats": "", "boehringer": "", "bofa": "", "bom": "", "bond": "", "boo": "", "book": "", "booking": "", "boots": "", "bosch": "", "bostik": "", "boston": "", "bot": "", "boutique": "", "box": "", "bradesco": "", "bridgestone": "", "broadway": "", "broker": "", "brother": "", "brussels": "", "budapest": "", "bugatti": "", "build": "", "builders": "", "business": "", "buy": "", "buzz": "", "bzh": "", "cab": "", "cafe": "", "cal": "", "call": "", "calvinklein": "", "cam": "", "camera": "", "camp": "", "cancerresearch": "", "canon": "", "capetown": "", "capital": "", "capitalone": "", "car": "", "caravan": "", "cards": "", "care": "", "career": "", "careers": "", "cars": "", "cartier": "", "casa": "", "case": "", "caseih": "", "cash": "", "casino": "", "catering": "", "catholic": "", "cba": "", "cbn": "", "cbre": "", "cbs": "", "ceb": "", "center": "", "ceo": "", "cern": "", "cfa": "", "cfd": "", "chanel": "", "channel": "", "chase": "", "chat": "", "cheap": "", "chintai": "", "chloe": "", "christmas": "", "chrome": "", "chrysler": "", "church": "", "cipriani": "", "circle": "", "cisco": "", "citadel": "", "citi": "", "citic": "", "city": "", "cityeats": "", "claims": "", "cleaning": "", "click": "", "clinic": "", "clinique": "", "clothing": "", "cloud": "myfusion|*statics|*magentosite|vapor|*sensiosite|trafficplex", "club": "cloudns", "clubmed": "", "coach": "", "codes": "", "coffee": "", "college": "", "cologne": "", "comcast": "", "commbank": "", "community": "", "company": "", "compare": "", "computer": "", "comsec": "", "condos": "", "construction": "", "consulting": "", "contact": "", "contractors": "", "cooking": "", "cookingchannel": "", "cool": "de", "corsica": "", "country": "", "coupon": "", "coupons": "", "courses": "", "credit": "", "creditcard": "", "creditunion": "", "cricket": "", "crown": "", "crs": "", "cruise": "", "cruises": "", "csc": "", "cuisinella": "", "cymru": "", "cyou": "", "dabur": "", "dad": "", "dance": "", "data": "", "date": "", "dating": "", "datsun": "", "day": "", "dclk": "", "dds": "", "deal": "", "dealer": "", "deals": "", "degree": "", "delivery": "", "dell": "", "deloitte": "", "delta": "", "democrat": "", "dental": "", "dentist": "", "desi": "", "design": "", "dev": "", "dhl": "", "diamonds": "", "diet": "", "digital": "", "direct": "", "directory": "", "discount": "", "discover": "", "dish": "", "diy": "", "dnp": "", "docs": "", "doctor": "", "dodge": "", "dog": "", "doha": "", "domains": "", "dot": "", "download": "", "drive": "", "dtv": "", "dubai": "", "duck": "", "dunlop": "", "duns": "", "dupont": "", "durban": "", "dvag": "", "dvr": "", "earth": "", "eat": "", "eco": "", "edeka": "", "education": "", "email": "", "emerck": "", "energy": "", "engineer": "", "engineering": "", "enterprises": "", "epost": "", "epson": "", "equipment": "", "ericsson": "", "erni": "", "esq": "", "estate": "*compute", "esurance": "", "etisalat": "", "eurovision": "", "eus": "user.party", "events": "", "everbank": "", "exchange": "", "expert": "", "exposed": "", "express": "", "extraspace": "", "fage": "", "fail": "", "fairwinds": "", "faith": "ybo", "family": "", "fan": "", "fans": "", "farm": "storj", "farmers": "", "fashion": "", "fast": "", "fedex": "", "feedback": "", "ferrari": "", "ferrero": "", "fiat": "", "fidelity": "", "fido": "", "film": "", "final": "", "finance": "", "financial": "", "fire": "", "firestone": "", "firmdale": "", "fish": "", "fishing": "", "fit": "ptplus", "fitness": "", "flickr": "", "flights": "", "flir": "", "florist": "", "flowers": "", "fly": "", "foo": "", "food": "", "foodnetwork": "", "football": "", "ford": "", "forex": "", "forsale": "", "forum": "", "foundation": "", "fox": "", "free": "", "fresenius": "", "frl": "", "frogans": "", "frontdoor": "", "frontier": "", "ftr": "", "fujitsu": "", "fujixerox": "", "fun": "", "fund": "", "furniture": "", "futbol": "", "fyi": "", "gal": "", "gallery": "", "gallo": "", "gallup": "", "game": "", "games": "", "gap": "", "garden": "", "gbiz": "", "gdn": "", "gea": "", "gent": "", "genting": "", "george": "", "ggee": "", "gift": "", "gifts": "", "gives": "", "giving": "", "glade": "", "glass": "", "gle": "", "global": "", "globo": "", "gmail": "", "gmbh": "", "gmo": "", "gmx": "", "godaddy": "", "gold": "", "goldpoint": "", "golf": "", "goo": "", "goodhands": "", "goodyear": "", "goog": "cloud", "google": "", "gop": "", "got": "", "grainger": "", "graphics": "", "gratis": "", "green": "", "gripe": "", "grocery": "", "group": "", "guardian": "", "gucci": "", "guge": "", "guide": "", "guitars": "", "guru": "", "hair": "", "hamburg": "", "hangout": "", "haus": "", "hbo": "", "hdfc": "", "hdfcbank": "", "health": "", "healthcare": "", "help": "", "helsinki": "", "here": "", "hermes": "", "hgtv": "", "hiphop": "", "hisamitsu": "", "hitachi": "", "hiv": "", "hkt": "", "hockey": "", "holdings": "", "holiday": "", "homedepot": "", "homegoods": "", "homes": "", "homesense": "", "honda": "", "honeywell": "", "horse": "", "hospital": "", "host": "cloudaccess|freesite", "hosting": "opencraft", "hot": "", "hoteles": "", "hotels": "", "hotmail": "", "house": "", "how": "", "hsbc": "", "htc": "", "hughes": "", "hyatt": "", "hyundai": "", "ibm": "", "icbc": "", "ice": "", "icu": "", "ieee": "", "ifm": "", "ikano": "", "imamat": "", "imdb": "", "immo": "", "immobilien": "", "industries": "", "infiniti": "", "ing": "", "ink": "", "institute": "", "insurance": "", "insure": "", "intel": "", "international": "", "intuit": "", "investments": "", "ipiranga": "", "irish": "", "iselect": "", "ismaili": "", "ist": "", "istanbul": "", "itau": "", "itv": "", "iveco": "", "iwc": "", "jaguar": "", "java": "", "jcb": "", "jcp": "", "jeep": "", "jetzt": "", "jewelry": "", "jio": "", "jlc": "", "jll": "", "jmp": "", "jnj": "", "joburg": "", "jot": "", "joy": "", "jpmorgan": "", "jprs": "", "juegos": "", "juniper": "", "kaufen": "", "kddi": "", "kerryhotels": "", "kerrylogistics": "", "kerryproperties": "", "kfh": "", "kia": "", "kim": "", "kinder": "", "kindle": "", "kitchen": "", "kiwi": "", "koeln": "", "komatsu": "", "kosher": "", "kpmg": "", "kpn": "", "krd": "co|edu", "kred": "", "kuokgroup": "", "kyoto": "", "lacaixa": "", "ladbrokes": "", "lamborghini": "", "lamer": "", "lancaster": "", "lancia": "", "lancome": "", "land": "static|dev.static|sites.static", "landrover": "", "lanxess": "", "lasalle": "", "lat": "", "latino": "", "latrobe": "", "law": "", "lawyer": "", "lds": "", "lease": "", "leclerc": "", "lefrak": "", "legal": "", "lego": "", "lexus": "", "lgbt": "", "liaison": "", "lidl": "", "life": "", "lifeinsurance": "", "lifestyle": "", "lighting": "", "like": "", "lilly": "", "limited": "", "limo": "", "lincoln": "", "linde": "", "link": "cyon|mypep", "lipsy": "", "live": "", "living": "", "lixil": "", "loan": "", "loans": "", "locker": "", "locus": "", "loft": "", "lol": "", "london": "", "lotte": "", "lotto": "", "love": "", "lpl": "", "lplfinancial": "", "ltd": "", "ltda": "", "lundbeck": "", "lupin": "", "luxe": "", "luxury": "", "macys": "", "madrid": "", "maif": "", "maison": "", "makeup": "", "man": "", "management": "router", "mango": "", "map": "", "market": "", "marketing": "", "markets": "", "marriott": "", "marshalls": "", "maserati": "", "mattel": "", "mba": "", "mcd": "", "mcdonalds": "", "mckinsey": "", "med": "", "media": "", "meet": "", "melbourne": "", "meme": "", "memorial": "", "men": "", "menu": "", "meo": "", "merckmsd": "", "metlife": "", "miami": "", "microsoft": "", "mini": "", "mint": "", "mit": "", "mitsubishi": "", "mlb": "", "mls": "", "mma": "", "mobile": "", "mobily": "", "moda": "", "moe": "", "moi": "", "mom": "", "monash": "", "money": "", "monster": "", "montblanc": "", "mopar": "", "mormon": "", "mortgage": "", "moscow": "", "moto": "", "motorcycles": "", "mov": "", "movie": "", "movistar": "", "msd": "", "mtn": "", "mtpc": "", "mtr": "", "mutual": "", "nab": "", "nadex": "", "nagoya": "", "nationwide": "", "natura": "", "navy": "", "nba": "", "nec": "", "netbank": "", "netflix": "", "network": "*alces", "neustar": "", "new": "", "newholland": "", "news": "", "next": "", "nextdirect": "", "nexus": "", "nfl": "", "ngo": "", "nhk": "", "nico": "", "nike": "", "nikon": "", "ninja": "", "nissan": "", "nissay": "", "nokia": "", "northwesternmutual": "", "norton": "", "now": "", "nowruz": "", "nowtv": "", "nra": "", "nrw": "", "ntt": "", "nyc": "", "obi": "", "observer": "", "off": "", "office": "", "okinawa": "", "olayan": "", "olayangroup": "", "oldnavy": "", "ollo": "", "omega": "", "one": "homelink", "ong": "", "onl": "", "online": "barsy", "onyourside": "", "ooo": "", "open": "", "oracle": "", "orange": "", "organic": "", "origins": "", "osaka": "", "otsuka": "", "ott": "", "ovh": "nerdpol", "page": "", "pamperedchef": "", "panasonic": "", "panerai": "", "paris": "", "pars": "", "partners": "", "parts": "", "party": "ybo", "passagens": "", "pay": "", "pccw": "", "pet": "", "pfizer": "", "pharmacy": "", "phd": "", "philips": "", "phone": "", "photo": "", "photography": "", "photos": "", "physio": "", "piaget": "", "pics": "", "pictet": "", "pictures": "1337", "pid": "", "pin": "", "ping": "", "pink": "", "pioneer": "", "pizza": "", "place": "", "play": "", "playstation": "", "plumbing": "", "plus": "", "pnc": "", "pohl": "", "poker": "", "politie": "", "porn": "", "pramerica": "", "praxi": "", "press": "", "prime": "", "prod": "", "productions": "", "prof": "", "progressive": "", "promo": "", "properties": "", "property": "", "protection": "", "pru": "", "prudential": "", "pub": "", "pwc": "", "qpon": "", "quebec": "", "quest": "", "qvc": "", "racing": "", "radio": "", "raid": "", "read": "", "realestate": "", "realtor": "", "realty": "", "recipes": "", "red": "", "redstone": "", "redumbrella": "", "rehab": "", "reise": "", "reisen": "", "reit": "", "reliance": "", "ren": "", "rent": "", "rentals": "", "repair": "", "report": "", "republican": "", "rest": "", "restaurant": "", "review": "ybo", "reviews": "", "rexroth": "", "rich": "", "richardli": "", "ricoh": "", "rightathome": "", "ril": "", "rio": "", "rip": "clan", "rmit": "", "rocher": "", "rocks": "myddns|lima-city|webspace", "rodeo": "", "rogers": "", "room": "", "rsvp": "", "rugby": "", "ruhr": "", "run": "", "rwe": "", "ryukyu": "", "saarland": "", "safe": "", "safety": "", "sakura": "", "sale": "", "salon": "", "samsclub": "", "samsung": "", "sandvik": "", "sandvikcoromant": "", "sanofi": "", "sap": "", "sapo": "", "sarl": "", "sas": "", "save": "", "saxo": "", "sbi": "", "sbs": "", "sca": "", "scb": "", "schaeffler": "", "schmidt": "", "scholarships": "", "school": "", "schule": "", "schwarz": "", "science": "ybo", "scjohnson": "", "scor": "", "scot": "", "search": "", "seat": "", "secure": "", "security": "", "seek": "", "select": "", "sener": "", "services": "", "ses": "", "seven": "", "sew": "", "sex": "", "sexy": "", "sfr": "", "shangrila": "", "sharp": "", "shaw": "", "shell": "", "shia": "", "shiksha": "", "shoes": "", "shop": "", "shopping": "", "shouji": "", "show": "", "showtime": "", "shriram": "", "silk": "", "sina": "", "singles": "", "site": "cyon|*platformsh", "ski": "", "skin": "", "sky": "", "skype": "", "sling": "", "smart": "", "smile": "", "sncf": "", "soccer": "", "social": "", "softbank": "", "software": "", "sohu": "", "solar": "", "solutions": "", "song": "", "sony": "", "soy": "", "space": "stackspace|uber|xs4all", "spiegel": "", "spot": "", "spreadbetting": "", "srl": "", "srt": "", "stada": "", "staples": "", "star": "", "starhub": "", "statebank": "", "statefarm": "", "statoil": "", "stc": "", "stcgroup": "", "stockholm": "", "storage": "", "store": "", "stream": "", "studio": "", "study": "", "style": "", "sucks": "", "supplies": "", "supply": "", "support": "barsy", "surf": "", "surgery": "", "suzuki": "", "swatch": "", "swiftcover": "", "swiss": "", "sydney": "", "symantec": "", "systems": "knightpoint", "tab": "", "taipei": "", "talk": "", "taobao": "", "target": "", "tatamotors": "", "tatar": "", "tattoo": "", "tax": "", "taxi": "", "tci": "", "tdk": "", "team": "", "tech": "", "technology": "", "telecity": "", "telefonica": "", "temasek": "", "tennis": "", "teva": "", "thd": "", "theater": "", "theatre": "", "tiaa": "", "tickets": "", "tienda": "", "tiffany": "", "tips": "", "tires": "", "tirol": "", "tjmaxx": "", "tjx": "", "tkmaxx": "", "tmall": "", "today": "", "tokyo": "", "tools": "", "top": "", "toray": "", "toshiba": "", "total": "", "tours": "", "town": "", "toyota": "", "toys": "", "trade": "ybo", "trading": "", "training": "", "travelchannel": "", "travelers": "", "travelersinsurance": "", "trust": "", "trv": "", "tube": "", "tui": "", "tunes": "", "tushu": "", "tvs": "", "ubank": "", "ubs": "", "uconnect": "", "unicom": "", "university": "", "uno": "", "uol": "", "ups": "", "vacations": "", "vana": "", "vanguard": "", "vegas": "", "ventures": "", "verisign": "", "versicherung": "", "vet": "", "viajes": "", "video": "", "vig": "", "viking": "", "villas": "", "vin": "", "vip": "", "virgin": "", "visa": "", "vision": "", "vista": "", "vistaprint": "", "viva": "", "vivo": "", "vlaanderen": "", "vodka": "", "volkswagen": "", "volvo": "", "vote": "", "voting": "", "voto": "", "voyage": "", "vuelos": "", "wales": "", "walmart": "", "walter": "", "wang": "", "wanggou": "", "warman": "", "watch": "", "watches": "", "weather": "", "weatherchannel": "", "webcam": "", "weber": "", "website": "", "wed": "", "wedding": "", "weibo": "", "weir": "", "whoswho": "", "wien": "", "wiki": "", "williamhill": "", "win": "", "windows": "", "wine": "", "winners": "", "wme": "", "wolterskluwer": "", "woodside": "", "work": "", "works": "", "world": "", "wow": "", "wtc": "", "wtf": "", "xbox": "", "xerox": "", "xfinity": "", "xihuan": "", "xin": "", "xn--11b4c3d": "", "xn--1ck2e1b": "", "xn--1qqw23a": "", "xn--30rr7y": "", "xn--3bst00m": "", "xn--3ds443g": "", "xn--3oq18vl8pn36a": "", "xn--3pxu8k": "", "xn--42c2d9a": "", "xn--45q11c": "", "xn--4gbrim": "", "xn--55qw42g": "", "xn--55qx5d": "", "xn--5su34j936bgsg": "", "xn--5tzm5g": "", "xn--6frz82g": "", "xn--6qq986b3xl": "", "xn--80adxhks": "", "xn--80aqecdr1a": "", "xn--80asehdb": "", "xn--80aswg": "", "xn--8y0a063a": "", "xn--9dbq2a": "", "xn--9et52u": "", "xn--9krt00a": "", "xn--b4w605ferd": "", "xn--bck1b9a5dre4c": "", "xn--c1avg": "", "xn--c2br7g": "", "xn--cck2b3b": "", "xn--cg4bki": "", "xn--czr694b": "", "xn--czrs0t": "", "xn--czru2d": "", "xn--d1acj3b": "", "xn--eckvdtc9d": "", "xn--efvy88h": "", "xn--estv75g": "", "xn--fct429k": "", "xn--fhbei": "", "xn--fiq228c5hs": "", "xn--fiq64b": "", "xn--fjq720a": "", "xn--flw351e": "", "xn--fzys8d69uvgm": "", "xn--g2xx48c": "", "xn--gckr3f0f": "", "xn--gk3at1e": "", "xn--hxt814e": "", "xn--i1b6b1a6a2e": "", "xn--imr513n": "", "xn--io0a7i": "", "xn--j1aef": "", "xn--jlq61u9w7b": "", "xn--jvr189m": "", "xn--kcrx77d1x4a": "", "xn--kpu716f": "", "xn--kput3i": "", "xn--mgba3a3ejt": "", "xn--mgba7c0bbn0a": "", "xn--mgbaakc7dvf": "", "xn--mgbab2bd": "", "xn--mgbb9fbpob": "", "xn--mgbca7dzdo": "", "xn--mgbi4ecexp": "", "xn--mgbt3dhd": "", "xn--mk1bu44c": "", "xn--mxtq1m": "", "xn--ngbc5azd": "", "xn--ngbe9e0a": "", "xn--ngbrx": "", "xn--nqv7f": "", "xn--nqv7fs00ema": "", "xn--nyqy26a": "", "xn--p1acf": "", "xn--pbt977c": "", "xn--pssy2u": "", "xn--q9jyb4c": "", "xn--qcka1pmc": "", "xn--rhqv96g": "", "xn--rovu88b": "", "xn--ses554g": "", "xn--t60b56a": "", "xn--tckwe": "", "xn--tiq49xqyj": "", "xn--unup4y": "", "xn--vermgensberater-ctb": "", "xn--vermgensberatung-pwb": "", "xn--vhquv": "", "xn--vuq861b": "", "xn--w4r85el8fhu5dnra": "", "xn--w4rs40l": "", "xn--xhq521b": "", "xn--zfr164b": "", "xperia": "", "xyz": "blogsite|fhapp", "yachts": "", "yahoo": "", "yamaxun": "", "yandex": "", "yodobashi": "", "yoga": "", "yokohama": "", "you": "", "youtube": "", "yun": "", "zappos": "", "zara": "", "zero": "", "zip": "", "zippo": "", "zone": "*triton|lima", "zuerich": "" };
});
$__System.registerDynamic('25', ['23', '24'], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var tld = $__require('23').init();
  tld.rules = $__require('24');

  module.exports = tld;
});
$__System.register('26', ['25'], function (_export) {
  'use strict';

  var tld;
  return {
    setters: [function (_tldjs) {
      tld = _tldjs['default'];
    }],
    execute: function () {
      _export('default', tld);
    }
  };
});
$__System.register('27', ['28', '26'], function (_export) {

  // Re-export symbols from `tldjs`
  'use strict';

  var isIpAddress, tlds, getDomain, getPublicSuffix, getSubdomain, tldExists, TLDs, invalidHostnameCharacters, SuffixTreeDomainCache, CACHE;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  /**
   * Extrach the domain from an url, ignoring the schema and parameters.
   */
  function _extractDomain(url) {
    var domain = url;

    // We need to check that the index is <= because this protocol could appear
    // as a value of a parameter in the URL.
    var indexOfProtocol = url.indexOf('://');
    if (indexOfProtocol !== -1 && indexOfProtocol <= 6) {
      domain = url.substring(indexOfProtocol + 3);
    }

    var indexOfSlash = domain.indexOf('/');
    if (indexOfSlash !== -1) {
      domain = domain.substring(0, indexOfSlash);
    }

    if (domain.startsWith('www.')) {
      domain = domain.substring(4);
    }

    return domain;
  }

  function _getGeneralDomainFromHostname(hostname) {
    var gd = getDomain(hostname);

    // Some hostname will not play well with the `getDomain` function if they
    // also constitute a valid public suffix (eg: googleapis.com)
    if (gd === null && tldExists(hostname)) {
      return hostname;
    }

    return gd;
  }

  /**
   * Efficient accelerating structure used to store domains. This is used as a
   * cache for the getGeneralDomain function. If an hostname ends with a valid
   * general domain from the suffix tree, then we consider it a match and use the
   * hit as a general domain for this hostname.
   */

  function getGeneralDomain(url) {
    return CACHE.get(url);
  }

  return {
    setters: [function (_url) {
      isIpAddress = _url.isIpAddress;
    }, function (_platformTldjs) {
      tlds = _platformTldjs['default'];
    }],
    execute: function () {
      getDomain = tlds.getDomain.bind(tlds);
      getPublicSuffix = tlds.getPublicSuffix.bind(tlds);
      getSubdomain = tlds.getSubdomain.bind(tlds);
      tldExists = tlds.tldExists.bind(tlds);
      TLDs = tlds.rules;

      //
      // Efficient implementation of get general domain with built-in caching.
      //

      invalidHostnameCharacters = /[^a-zA-Z0-9.-]/;

      SuffixTreeDomainCache = function () {
        function SuffixTreeDomainCache() {
          _classCallCheck(this, SuffixTreeDomainCache);

          this.cache = Object.create(null);
        }

        // Use an optimized suffix-tree cache populated with general domains and used
        // everytime we want to extract the general domain from a hostname.

        /**
         * Try to get a value from the cache for this url, if none is present, then
         * compute the result and store it in the cache for next time.
         */

        _createClass(SuffixTreeDomainCache, [{
          key: 'get',
          value: function get(url) {
            var hostname = _extractDomain(url);

            // Check if we already have this general domain in the cache
            // This is super cheap, so we do it first.
            var cacheResult = this.lookup(hostname);
            if (cacheResult) {
              return cacheResult;
            }

            // If it's a valid IP address, we return it.
            if (isIpAddress(hostname)) {
              return hostname;
            }

            // Check for forbidden characters in the hostname
            if (hostname.search(invalidHostnameCharacters) !== -1) {
              return null;
            }

            // If not cached and the hostname is valid, then extract the general domain
            var gd = _getGeneralDomainFromHostname(hostname);

            if (gd !== null) {
              this.set(gd);
            }

            return gd;
          }

          /**
           * Try to lookup a valid suffix for the given `hostname`.
           * eg: a valid result for 'foo.bar.com' could be 'bar.com'
           */
        }, {
          key: 'lookup',
          value: function lookup(hostname) {
            var parts = hostname.split('.').reverse();
            var cache = this.cache;
            var index = 0;

            while (cache.$ === undefined) {
              var value = parts[index];
              var c = cache[value];
              if (c !== undefined) {
                index += 1;
                cache = c;
              } else {
                return null;
              }
            }

            return cache.$;
          }

          /**
           * Store a hostname in the suffix tree.
           */
        }, {
          key: 'set',
          value: function set(generalDomain) {
            var parts = generalDomain.split('.').reverse();
            var cache = this.cache;

            // Insert intermediary elements
            parts.forEach(function (part) {
              var c = cache[part];
              if (c === undefined) {
                c = Object.create(null);
                cache[part] = c;
              }

              cache = c;
            });

            // Last element of the `parts
            cache.$ = generalDomain;
          }
        }]);

        return SuffixTreeDomainCache;
      }();

      CACHE = new SuffixTreeDomainCache();

      _export('CACHE', CACHE);

      _export('default', {
        getGeneralDomain: getGeneralDomain,

        // tldjs
        getPublicSuffix: getPublicSuffix,
        getDomain: getDomain,
        getSubdomain: getSubdomain,
        tldExists: tldExists,
        TLDs: TLDs
      });
    }
  };
});
$__System.register("b", [], function (_export) {
  /* global chrome, window */
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("chrome", chrome);

      _export("window", window);
    }
  };
});
$__System.register('29', ['b'], function (_export) {
  'use strict';

  var window;
  return {
    setters: [function (_globals) {
      window = _globals.window;
    }],
    execute: function () {
      _export('default', window.console);
    }
  };
});
$__System.register('2a', [], function (_export) {
  /* global localStorage */
  'use strict';

  return {
    setters: [],
    execute: function () {
      _export('default', function (url) {
        if (url) {
          throw new Error('localStorage for URL is not supported');
        }
        return localStorage;
      });
    }
  };
});
$__System.register('1b', ['2a'], function (_export) {

  /**
  * @namespace core
  */
  'use strict';

  var getStorage, Storage;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  return {
    setters: [function (_platformStorage) {
      getStorage = _platformStorage['default'];
    }],
    execute: function () {
      Storage = function () {
        function Storage(url) {
          _classCallCheck(this, Storage);

          // if not called as constructor, still act as one
          if (!(this instanceof Storage)) {
            return new Storage(url);
          }

          this.storage = getStorage.bind(null, url);
          this.url = url;
        }

        _createClass(Storage, [{
          key: 'getItem',
          value: function getItem(key) {
            return this.storage().getItem(key);
          }
        }, {
          key: 'setItem',
          value: function setItem(key, value) {
            return this.storage().setItem(key, value);
          }
        }, {
          key: 'removeItem',
          value: function removeItem(key) {
            return this.storage().removeItem(key);
          }
        }, {
          key: 'clear',
          value: function clear() {
            return this.storage().clear();
          }

          /**
           * @method setObject
           * @param key {string}
           * @param object
           */
        }, {
          key: 'setObject',
          value: function setObject(key, object) {
            this.storage().setItem(key, JSON.stringify(object));
          }

          /**
           * @method getObject
           * @param key {string}
           * @param notFound {Boolean}
           */
        }, {
          key: 'getObject',
          value: function getObject(key) {
            var notFound = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            var o = this.storage().getItem(key);
            if (o) {
              return JSON.parse(o);
            }
            return notFound;
          }
        }]);

        return Storage;
      }();

      _export('default', Storage);
    }
  };
});
$__System.register("3", ["f", "9"], function (_export) {
  /*
   * This method implements the publish subscribe design pattern
   *
   * Event naming scheme:
   *    cliqz.module_name.event_name
   *
   *  single sender -> multiple potential recipients
   *    for example: cliqz.core.urlbar_focus (inform others about urlbar focus)
   *    module_name describes sender
   *  multiple potential senders -> single recipient
   *    for example: cliqz.msg_center.show_message (tell the message center to show a message)
   *    module_name describes recipient (this is more like a RPC)
   */

  "use strict";

  var console, CliqzUtils, CliqzEvents, subscribe;
  return {
    setters: [function (_console) {
      console = _console["default"];
    }, function (_utils) {
      CliqzUtils = _utils["default"];
    }],
    execute: function () {
      CliqzEvents = CliqzEvents || {
        //use a javascript object to push the message ids and the callbacks
        cache: {},
        tickCallbacks: [],
        /*
         * Publish events of interest with a specific id
         */
        queue: [],

        pub: function pub(id) {
          var _this = this;

          var args = Array.prototype.slice.call(arguments, 1);

          var callbacks = (CliqzEvents.cache[id] || []).map(function (ev) {
            return new Promise(function (resolve) {
              CliqzUtils.setTimeout(function () {
                try {
                  ev.apply(null, args);
                } catch (e) {
                  console.error("CliqzEvents error: " + id, e);
                }
                resolve();
              }, 0);
            });
          });

          var finishedPromise = Promise.all(callbacks).then(function () {
            var index = _this.queue.indexOf(finishedPromise);
            _this.queue.splice(index, 1);
            if (_this.queue.length === 0) {
              _this.triggerNextTick();
            }
          });
          this.queue.push(finishedPromise);
        },

        triggerNextTick: function triggerNextTick() {
          this.tickCallbacks.forEach(function (cb) {
            try {
              cb();
            } catch (e) {}
          });
          this.tickCallbacks = [];
        },

        nextTick: function nextTick() {
          var cb = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];

          this.tickCallbacks = this.tickCallbacks || [];
          this.tickCallbacks.push(cb);
        },

        /* Subscribe to events of interest
         * with a specific id and a callback
         * to be executed when the event is observed
         */
        sub: function sub(id, fn) {
          CliqzEvents.cache[id] = CliqzEvents.cache[id] || [];
          CliqzEvents.cache[id].push(fn);
        },

        subscribe: function subscribe(eventName, callback, that) {
          var cb = undefined;
          if (that) {
            cb = callback.bind(that);
          } else {
            cb = callback;
          }

          CliqzEvents.sub(eventName, cb);

          return {
            unsubscribe: function unsubscribe() {
              CliqzEvents.un_sub(eventName, cb);
            }
          };
        },

        un_sub: function un_sub(id, fn) {
          if (!CliqzEvents.cache[id] || CliqzEvents.cache[id].length === 0) {
            console.error("Trying to unsubscribe event that had no subscribers");
            return;
          }

          var index = CliqzEvents.cache[id].indexOf(fn);
          if (index > -1) {
            CliqzEvents.cache[id].splice(index, 1);
          } else {
            console.error("Trying to unsubscribe an unknown listener");
          }
        },

        clean_channel: function clean_channel(id) {
          if (!CliqzEvents.cache[id]) {
            throw "Trying to unsubscribe an unknown channel";
          }
          CliqzEvents.cache[id] = [];
        },

        /**
         * Adds a listener to eventTarget for events of type eventType, and republishes them
         *  through CliqzEvents with id cliqzEventName.
         */
        proxyEvent: function proxyEvent(cliqzEventName, eventTarget, eventType, propagate, transform) {
          if (propagate === undefined) propagate = false;

          var publisher = CliqzEvents.pub.bind(CliqzEvents, cliqzEventName);

          function handler() {
            var args = transform ? transform.apply(null, arguments) : arguments;
            publisher.apply(null, args);
          }

          eventTarget.addEventListener(eventType, handler, propagate);
          return {
            unsubscribe: function unsubscribe() {
              eventTarget.removeEventListener(eventType, handler);
            }
          };
        },

        nextId: function nextId() {
          nextId.id = nextId.id || 0;
          nextId.id += 1;
          return nextId.id;
        }
      };

      _export("default", CliqzEvents);

      subscribe = CliqzEvents.subscribe;

      _export("subscribe", subscribe);
    }
  };
});
$__System.register('2b', ['1b', '3'], function (_export) {
  'use strict';

  var Storage, events, storage;

  _export('getPref', getPref);

  _export('setPref', setPref);

  _export('hasPref', hasPref);

  _export('clearPref', clearPref);

  _export('enableChangeEvents', enableChangeEvents);

  _export('disableChangeEvents', disableChangeEvents);

  function getPref(pref, notFound) {
    var mypref = storage.getItem(pref);
    if (mypref) {
      if (mypref === 'false') {
        return false;
      }
      if (mypref === 'true') {
        return true;
      }
      if (!isNaN(mypref)) {
        return parseInt(mypref, 10);
      }
      return mypref;
    }
    return notFound;
  }

  function setPref(pref, val) {
    storage.setItem(pref, val);
    events.pub('prefchange', pref);
  }

  function hasPref(pref) {
    return storage.getItem(pref) !== null;
  }

  function clearPref(pref) {
    storage.removeItem(pref);
  }

  function enableChangeEvents() {
    throw new Error('not implemented - prefs.enableChangeEvents');
  }

  function disableChangeEvents() {
    throw new Error('not implemented - prefs.disableChangeEvents');
  }

  return {
    setters: [function (_coreStorage) {
      Storage = _coreStorage['default'];
    }, function (_coreEvents) {
      events = _coreEvents['default'];
    }],
    execute: function () {
      storage = new Storage();
    }
  };
});
$__System.register("1a", ["2b"], function (_export) {
  "use strict";

  var getPref, setPref, hasPref, clearPref, enableChangeEvents, disableChangeEvents;
  return {
    setters: [function (_platformPrefs) {
      getPref = _platformPrefs.getPref;
      setPref = _platformPrefs.setPref;
      hasPref = _platformPrefs.hasPref;
      clearPref = _platformPrefs.clearPref;
      enableChangeEvents = _platformPrefs.enableChangeEvents;
      disableChangeEvents = _platformPrefs.disableChangeEvents;
    }],
    execute: function () {
      _export("default", {
        /**
         * Get a value from preferences db
         * @param {string}  pref - preference identifier
         * @param {*=}      defautlValue - returned value in case pref is not defined
         * @param {string=} prefix - prefix for pref
         */
        get: getPref,
        /**
         * Set a value in preferences db
         * @param {string}  pref - preference identifier
         * @param {string=} prefix - prefix for pref
         */
        set: setPref,
        /**
         * Check if there is a value in preferences db
         * @param {string}  pref - preference identifier
         * @param {string=} prefix - prefix for pref
         */
        has: hasPref,
        /**
         * Clear value in preferences db
         * @param {string}  pref - preference identifier
         * @param {string=} prefix - prefix for pref
         */
        clear: clearPref,

        enableChangeEvents: enableChangeEvents,

        disableChangeEvents: disableChangeEvents
      });
    }
  };
});
$__System.register("f", ["29", "1a"], function (_export) {
  "use strict";

  var console, prefs, isLoggingEnabled, log, error, debug;
  return {
    setters: [function (_platformConsole) {
      console = _platformConsole["default"];
    }, function (_prefs) {
      prefs = _prefs["default"];
    }],
    execute: function () {
      isLoggingEnabled = prefs.get('showConsoleLogs', false);
      log = undefined;
      error = undefined;
      debug = undefined;

      if (isLoggingEnabled) {
        log = console.log.bind(console, 'CLIQZ');
        error = console.error.bind(console, 'CLIQZ error');
        if (prefs.get('developer')) {
          debug = log;
        } else {
          debug = function () {};
        }
      } else {
        log = function () {};
        error = function () {};
        debug = function () {};
      }

      _export("default", {
        log: log,
        error: error,
        debug: debug
      });
    }
  };
});
$__System.register("2c", [], function (_export) {
  "use strict";

  function setPrivateFlags() {}
  function setBackgroundRequest() {}
  function XMLHttpRequestFactory() {
    return XMLHttpRequest;
  }

  return {
    setters: [],
    execute: function () {
      _export("XMLHttpRequestFactory", XMLHttpRequestFactory);

      _export("setPrivateFlags", setPrivateFlags);

      _export("setBackgroundRequest", setBackgroundRequest);
    }
  };
});
$__System.register("2d", [], function (_export) {
  "use strict";

  var chromeUrlHandler;
  return {
    setters: [],
    execute: function () {
      chromeUrlHandler = false;

      _export("chromeUrlHandler", chromeUrlHandler);
    }
  };
});
$__System.register('14', ['2e', 'f', '2f', '2c', '2d'], function (_export) {
  'use strict';

  var ftch, console, compress, XMLHttpRequestFactory, setPrivateFlags, setBackgroundRequest, chromeUrlHandler, fetch, Headers, Request, Response, activeHandler, compressionAvailable, compressionExclusions;

  _export('defaultHttpHandler', defaultHttpHandler);

  /**
   *  Replace default http handler with fn
   */

  _export('httpHandler', httpHandler);

  _export('overrideHttpHandler', overrideHttpHandler);

  _export('addCompressionExclusion', addCompressionExclusion);

  _export('promiseHttpHandler', promiseHttpHandler);

  /** Legacy httpHandler implementation, based on XMLHttpRequest.
   *
   *  If you want to make HTTP requests, please check out the fetch API (platform/fetch)
   */

  function defaultHttpHandler(method, url, callback, onerror, timeout, data, sync, encoding, background) {
    if (method === 'GET' && url.startsWith('chrome://') && chromeUrlHandler) {
      chromeUrlHandler(url, callback, onerror);
      return;
    }
    var XMLHttpRequest = XMLHttpRequestFactory();
    var req = new XMLHttpRequest();
    req.timestamp = +new Date();
    if (background) {
      setBackgroundRequest(req);
    }
    req.open(method, url, !sync);
    setPrivateFlags(req);
    req.overrideMimeType && req.overrideMimeType('application/json');
    req.setRequestHeader('Content-Type', 'application/json');

    // headers for compressed data
    if (encoding) {
      req.setRequestHeader('Content-Encoding', encoding);
    }

    req.onload = function () {
      if (!parseInt) return; //parseInt is not a function after extension disable/uninstall

      var statusClass = parseInt(req.status / 100);
      if (statusClass == 2 || statusClass == 3 || statusClass == 0 /* local files */) {
          callback && callback(req);
        } else {
        var error = 'loaded with non-200 ' + url + ' (status=' + req.status + ' ' + req.statusText + ') CLIQZEnvironment.httpHandler';
        console.log(error);
        onerror && onerror(error);
      }
    };
    req.onerror = function () {
      var error = 'error loading ' + url + ' (status=' + req.status + ' ' + req.statusText + ') CLIQZEnvironment.httpHandler';
      console.log(error);
      onerror && onerror(error);
    };
    req.ontimeout = function () {
      var error = 'timeout for ' + url + ' CLIQZEnvironment.httpHandler';
      console.log(error);
      onerror && onerror(error);
    };

    if (callback) {
      if (timeout) {
        req.timeout = parseInt(timeout);
      } else {
        req.timeout = ['POST', 'PUT'].indexOf(method) >= 0 ? 10000 : 1000;
      }
    }

    req.send(data);
    return req;
  }

  function httpHandler() {
    return activeHandler.apply(undefined, arguments);
  }

  function overrideHttpHandler(fn) {
    activeHandler = fn;
  }

  function compressionEnabled(url) {
    return compressionAvailable && !compressionExclusions.has(url);
  }

  /**
   *  Add a url for which we should not compress when using promiseHttpHandler
   */

  function addCompressionExclusion(url) {
    compressionExclusions.add(url);
  }

  function promiseHttpHandler(method, url, data, timeout, compressedPost) {
    return new Promise(function (resolve, reject) {
      // gzip.compress may be false if there is no implementation for this platform
      // or maybe it is not loaded yet
      if (method === 'POST' && compressedPost && compressionEnabled(url)) {
        var dataLength = data.length;
        data = compress(data);
        console.log("Compressed request to " + url + ", bytes saved = " + (dataLength - data.length) + " (" + (100 * (dataLength - data.length) / dataLength).toFixed(1) + "%)", "CLIQZEnvironment.httpHandler");
        httpHandler(method, url, resolve, reject, timeout, data, undefined, 'gzip');
      } else {
        httpHandler(method, url, resolve, reject, timeout, data);
      }
    });
  }

  return {
    setters: [function (_platformFetch) {
      ftch = _platformFetch;
    }, function (_console) {
      console = _console['default'];
    }, function (_gzip) {
      compress = _gzip.compress;
    }, function (_platformXmlhttprequest) {
      XMLHttpRequestFactory = _platformXmlhttprequest.XMLHttpRequestFactory;
      setPrivateFlags = _platformXmlhttprequest.setPrivateFlags;
      setBackgroundRequest = _platformXmlhttprequest.setBackgroundRequest;
    }, function (_platformChromeUrlHandler) {
      chromeUrlHandler = _platformChromeUrlHandler.chromeUrlHandler;
    }],
    execute: function () {
      fetch = ftch.fetch;

      _export('fetch', fetch);

      Headers = ftch.Headers;

      _export('Headers', Headers);

      Request = ftch.Request;

      _export('Request', Request);

      Response = ftch.Response;

      _export('Response', Response);

      ;

      activeHandler = defaultHttpHandler;
      compressionAvailable = Boolean(compress);
      compressionExclusions = new Set();
      ;
    }
  };
});
$__System.register("30", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {}
  };
});
$__System.register("2f", ["30"], function (_export) {

  /**
   *  Compress a string
   *
   *  @param {string} string to compress
   *  @returns {UInt8Array} compressed data
   */
  "use strict";

  var gzip, compress, decompress;
  return {
    setters: [function (_platformGzip) {
      gzip = _platformGzip;
    }],
    execute: function () {
      compress = gzip.compress || false;

      _export("compress", compress);

      /**
       *  Decompress a Gzip compressed string
       *
       *  @param {UInt8Array} gzipped data
       *  @returns {string} decompressed string
       */
      decompress = gzip.decompress || false;

      _export("decompress", decompress);
    }
  };
});
$__System.register('31', [], function (_export) {
  'use strict';

  var CliqzLanguage;
  return {
    setters: [],
    execute: function () {
      CliqzLanguage = {
        init: function init() {},
        stateToQueryString: function stateToQueryString() {
          return '&lang=de,en';
        }
      };

      _export('default', CliqzLanguage);
    }
  };
});
$__System.register('32', ['31'], function (_export) {
  'use strict';

  var Language;
  return {
    setters: [function (_platformLanguage) {
      Language = _platformLanguage['default'];
    }],
    execute: function () {
      _export('default', Language);
    }
  };
});
$__System.register("33", [], function (_export) {
  "use strict";

  _export("isURI", isURI);

  _export("default", equal);

  function isURI(text) {
    return false;
  }

  function equal(url1, url2) {
    return url1 === url2;
  }

  return {
    setters: [],
    execute: function () {}
  };
});
$__System.register('28', ['33'], function (_export) {
  'use strict';

  var isURI, UrlRegExp, ipv4_part, ipv4_regex, ipv6_regex;

  /*
  strip protocol from url
  */

  _export('isUrl', isUrl);

  // IP Validation

  _export('urlStripProtocol', urlStripProtocol);

  _export('isIpv4Address', isIpv4Address);

  _export('isIpv6Address', isIpv6Address);

  _export('isIpAddress', isIpAddress);

  function isUrl(input) {
    if (!input) {
      return false;
    }
    // TODO: handle ip addresses
    if (isURI(input)) {
      return true;
    } else {
      //step 1 remove eventual protocol
      var protocolPos = input.indexOf('://');
      if (protocolPos != -1 && protocolPos <= 6) {
        input = input.slice(protocolPos + 3);
      }
      //step2 remove path & everything after
      input = input.split('/')[0];
      //step3 run the regex
      return UrlRegExp.test(input);
    }
  }

  function urlStripProtocol(url) {
    var resultUrl = url;
    var toRemove = ['https://', 'http://', 'www2.', 'www.', 'mobile.', 'mobil.', 'm.'];
    toRemove.forEach(function (part) {
      if (resultUrl.toLowerCase().startsWith(part)) {
        resultUrl = resultUrl.substring(part.length);
      }
    });
    // remove trailing slash as well to have all urls in the same format
    if (resultUrl[resultUrl.length - 1] === '/') {
      resultUrl = resultUrl.slice(0, -1);
    }
    return resultUrl;
  }

  function isIpv4Address(host) {
    return ipv4_regex.test(host);
  }

  function isIpv6Address(host) {
    return ipv6_regex.test(host);
  }

  function isIpAddress(host) {
    return isIpv4Address(host) || isIpv6Address(host);
  }

  return {
    setters: [function (_platformUrl) {
      isURI = _platformUrl.isURI;

      _export('equals', _platformUrl['default']);
    }],
    execute: function () {
      UrlRegExp = /^(([a-z\d]([a-z\d-]*[a-z\d])?)\.)+[a-z]{2,}(\:\d+)?$/i;
      ipv4_part = "0*([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])";
      // numbers 0 - 255
      ipv4_regex = new RegExp("^" + ipv4_part + "\\." + ipv4_part + "\\." + ipv4_part + "\\." + ipv4_part + "([:]([0-9])+)?$");
      // port number
      ipv6_regex = new RegExp("^\\[?(([0-9]|[a-f]|[A-F])*[:.]+([0-9]|[a-f]|[A-F])+[:.]*)+[\\]]?([:][0-9]+)?$");
    }
  };
});
$__System.register("34", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", crypto);
    }
  };
});
$__System.register('35', ['34'], function (_export) {
  /* eslint-disable no-bitwise */

  // Cryptographically secure Math.random replacement
  //
  //  Doing the same as Firefox Math.random does, but with a crypto secure 64 bit number instead.
  //  The equivalent in C++ is: double(uint64val & 0x1FFFFFFFFFFFFF) / (1 << 53);
  //  WARNING: In tests (Linux), considerably slower than Math.random (5-10 times)
  'use strict';

  var crypto;

  _export('default', random);

  _export('randomInt', randomInt);

  function random() {
    var values = crypto.getRandomValues(new Uint32Array(2));
    return (Math.pow(2, 32) * (values[0] & 0x1FFFFF) + values[1]) / Math.pow(2, 53);
  }

  function randomInt() {
    return Math.floor(random() * Number.MAX_SAFE_INTEGER);
  }

  return {
    setters: [function (_platformCrypto) {
      crypto = _platformCrypto['default'];
    }],
    execute: function () {}
  };
});
$__System.register("2e", [], function (_export) {
  "use strict";

  _export("fetchFactory", fetchFactory);

  function fetchFactory() {
    return fetch;
  }

  return {
    setters: [],
    execute: function () {
      _export("default", fetch);

      _export("fetch", fetch);

      _export("Headers", Headers);

      _export("Request", Request);

      _export("Response", Response);
    }
  };
});
$__System.register("9", ["19", "f", "1a", "1b", "3", "27", "14", "2f", "32", "28", "35", "2e"], function (_export) {
  "use strict";

  var CLIQZEnvironment, console, prefs, Storage, CliqzEvents, tlds, _httpHandler, promiseHttpHandler, gzip, CliqzLanguage, isUrl, isIpv4Address, isIpv6Address, random, fetchFactory, VERTICAL_ENCODINGS, COLOURS, LOGOS, BRANDS_DATABASE, schemeRE, CliqzUtils;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  return {
    setters: [function (_platformEnvironment) {
      CLIQZEnvironment = _platformEnvironment["default"];
    }, function (_console) {
      console = _console["default"];
    }, function (_prefs) {
      prefs = _prefs["default"];
    }, function (_storage) {
      Storage = _storage["default"];
    }, function (_events) {
      CliqzEvents = _events["default"];
    }, function (_tlds) {
      tlds = _tlds["default"];
    }, function (_http) {
      _httpHandler = _http.httpHandler;
      promiseHttpHandler = _http.promiseHttpHandler;
    }, function (_gzip) {
      gzip = _gzip["default"];
    }, function (_language) {
      CliqzLanguage = _language["default"];
    }, function (_url) {
      isUrl = _url.isUrl;
      isIpv4Address = _url.isIpv4Address;
      isIpv6Address = _url.isIpv6Address;
    }, function (_cryptoRandom) {
      random = _cryptoRandom["default"];
    }, function (_platformFetch) {
      fetchFactory = _platformFetch.fetchFactory;
    }],
    execute: function () {
      VERTICAL_ENCODINGS = {
        'people': 'p',
        'news': 'n',
        'video': 'v',
        'hq': 'h',
        'bm': 'm',
        'reciperd': 'r',
        'game': 'g',
        'movie': 'o'
      };
      COLOURS = ['#ffce6d', '#ff6f69', '#96e397', '#5c7ba1', '#bfbfbf', '#3b5598', '#fbb44c', '#00b2e5', '#b3b3b3', '#99cccc', '#ff0027', '#999999'];
      LOGOS = ['wikipedia', 'google', 'facebook', 'youtube', 'duckduckgo', 'sternefresser', 'zalando', 'bild', 'web', 'ebay', 'gmx', 'amazon', 't-online', 'wiwo', 'wwe', 'weightwatchers', 'rp-online', 'wmagazine', 'chip', 'spiegel', 'yahoo', 'paypal', 'imdb', 'wikia', 'msn', 'autobild', 'dailymotion', 'hm', 'hotmail', 'zeit', 'bahn', 'softonic', 'handelsblatt', 'stern', 'cnn', 'mobile', 'aetv', 'postbank', 'dkb', 'bing', 'adobe', 'bbc', 'nike', 'starbucks', 'techcrunch', 'vevo', 'time', 'twitter', 'weatherunderground', 'xing', 'yelp', 'yandex', 'weather', 'flickr'];
      BRANDS_DATABASE = { domains: {}, palette: ["999"] };
      schemeRE = /^(\S+?):(\/\/)?(.*)$/i;
      CliqzUtils = {
        environment: CLIQZEnvironment,
        RESULTS_PROVIDER: CLIQZEnvironment.RESULTS_PROVIDER,
        RICH_HEADER: CLIQZEnvironment.RICH_HEADER,
        RESULTS_PROVIDER_LOG: 'https://api.cliqz.com/api/v1/logging?q=',
        RESULTS_PROVIDER_PING: 'https://api.cliqz.com/ping',
        CONFIG_PROVIDER: 'https://api.cliqz.com/api/v1/config',
        SAFE_BROWSING: 'https://safe-browsing.cliqz.com',
        TUTORIAL_URL: 'https://cliqz.com/home/onboarding',
        UNINSTALL: 'https://cliqz.com/home/offboarding',
        FEEDBACK: 'https://cliqz.com/feedback/',
        PREFERRED_LANGUAGE: null,
        RESULTS_TIMEOUT: CLIQZEnvironment.RESULTS_TIMEOUT,

        BRANDS_DATABASE: BRANDS_DATABASE,

        //will be updated from the mixer config endpoint every time new logos are generated
        BRANDS_DATABASE_VERSION: 1483980213630,
        GEOLOC_WATCH_ID: null, // The ID of the geolocation watcher (function that updates cached geolocation on change)
        VERTICAL_TEMPLATES: {
          'n': 'news',
          'p': 'people',
          'v': 'video',
          'h': 'hq',
          'r': 'recipe',
          'g': 'cpgame_movie',
          'o': 'cpgame_movie'
        },
        hm: null,
        hw: null,
        mc: null,
        TEMPLATES_PATH: CLIQZEnvironment.TEMPLATES_PATH,
        TEMPLATES: CLIQZEnvironment.TEMPLATES,
        MESSAGE_TEMPLATES: CLIQZEnvironment.MESSAGE_TEMPLATES,
        PARTIALS: CLIQZEnvironment.PARTIALS,
        SKIN_PATH: CLIQZEnvironment.SKIN_PATH,
        LOCALE_PATH: CLIQZEnvironment.LOCALE_PATH,
        RERANKERS: CLIQZEnvironment.RERANKERS,
        CLIQZ_ONBOARDING: CLIQZEnvironment.CLIQZ_ONBOARDING,
        CLIQZ_ONBOARDING_URL: CLIQZEnvironment.CLIQZ_ONBOARDING_URL,
        BROWSER_ONBOARDING_PREF: CLIQZEnvironment.BROWSER_ONBOARDING_PREF,
        CLIQZ_NEW_TAB: CLIQZEnvironment.CLIQZ_NEW_TAB,
        CLIQZ_NEW_TAB_RESOURCE_URL: CLIQZEnvironment.CLIQZ_NEW_TAB_RESOURCE_URL,

        telemetryHandlers: [CLIQZEnvironment.telemetry],

        init: function init(options) {
          options = options || {};

          if (!options.lang) {
            return Promise.reject("lang missing");
          }

          CLIQZEnvironment.gzip = gzip;

          // cutting cyclic dependency
          CLIQZEnvironment.getLogoDetails = CliqzUtils.getLogoDetails.bind(CliqzUtils);
          CLIQZEnvironment.getDetailsFromUrl = CliqzUtils.getDetailsFromUrl.bind(CliqzUtils);
          CLIQZEnvironment.getLocalizedString = CliqzUtils.getLocalizedString.bind(CliqzUtils);
          CLIQZEnvironment.app = CliqzUtils.app;
          CliqzUtils.log('Initialized', 'CliqzUtils');

          try {
            CliqzUtils.setLang(options.lang);
          } catch (e) {
            // TODO: fix for ghostery
          }

          CliqzUtils.tldExtractor = CLIQZEnvironment.tldExtractor || CliqzUtils.genericTldExtractor;
        },
        getLanguageFromLocale: function getLanguageFromLocale(locale) {
          return locale.match(/([a-z]+)(?:[-_]([A-Z]+))?/)[1];
        },
        SUPPORTED_LANGS: { 'de': 'de', 'en': 'en', 'fr': 'fr' },
        getSupportedLanguage: function getSupportedLanguage(lang) {
          return CliqzUtils.SUPPORTED_LANGS[lang] || 'en';
        },
        setLang: function setLang(locale) {
          var lang = CliqzUtils.getLanguageFromLocale(locale);
          var supportedLang = CliqzUtils.getSupportedLanguage(lang);
          CliqzUtils.PREFERRED_LANGUAGE = locale;
          CliqzUtils.getLocaleFile(supportedLang);
        },

        isNumber: function isNumber(n) {
          /*
          NOTE: this function can't recognize numbers in the form such as: "1.2B", but it can for "1e4". See specification for isFinite()
           */
          return !isNaN(parseFloat(n)) && isFinite(n);
        },

        //returns the type only if it is known
        getKnownType: function getKnownType(type) {
          return VERTICAL_ENCODINGS.hasOwnProperty(type) && type;
        },

        /**
         * Construct a uri from a url
         * @param {string}  aUrl - url
         * @param {string}  aOriginCharset - optional character set for the URI
         * @param {nsIURI}  aBaseURI - base URI for the spec
         */
        makeUri: CLIQZEnvironment.makeUri,

        setLogoDb: function setLogoDb(db) {
          BRANDS_DATABASE = CliqzUtils.BRANDS_DATABASE = db;
        },
        getLogoDetails: function getLogoDetails(urlDetails) {
          var base = urlDetails.name,
              baseCore = base.replace(/[-]/g, ""),
              check = function check(host, rule) {
            var address = host.lastIndexOf(base),
                parseddomain = host.substr(0, address) + "$" + host.substr(address + base.length);

            return parseddomain.indexOf(rule) != -1;
          },
              result = {},
              domains = BRANDS_DATABASE.domains;

          if (base.length == 0) return result;

          if (base == "IP") result = { text: "IP", backgroundColor: "9077e3" };else if (domains[base]) {
            for (var i = 0, imax = domains[base].length; i < imax; i++) {
              var rule = domains[base][i]; // r = rule, b = background-color, l = logo, t = text, c = color

              if (i == imax - 1 || check(urlDetails.host, rule.r)) {
                result = {
                  backgroundColor: rule.b ? rule.b : null,
                  backgroundImage: rule.l ? "url(https://cdn.cliqz.com/brands-database/database/" + this.BRANDS_DATABASE_VERSION + "/logos/" + base + "/" + rule.r + ".svg)" : "",
                  text: rule.t,
                  color: rule.c ? "" : "#fff"
                };

                break;
              }
            }
          }
          result.text = result.text || (baseCore.length > 1 ? baseCore[0].toUpperCase() + baseCore[1].toLowerCase() : "");
          result.backgroundColor = result.backgroundColor || BRANDS_DATABASE.palette[base.split("").reduce(function (a, b) {
            return a + b.charCodeAt(0);
          }, 0) % BRANDS_DATABASE.palette.length];
          var colorID = BRANDS_DATABASE.palette.indexOf(result.backgroundColor),
              buttonClass = BRANDS_DATABASE.buttons && colorID != -1 && BRANDS_DATABASE.buttons[colorID] ? BRANDS_DATABASE.buttons[colorID] : 10;

          result.buttonsClass = "cliqz-brands-button-" + buttonClass;
          result.style = "background-color: #" + result.backgroundColor + ";color:" + (result.color || '#fff') + ";";

          if (result.backgroundImage) result.style += "background-image:" + result.backgroundImage + "; text-indent: -10em;";

          return result;
        },
        httpHandler: function httpHandler() {
          var errorHandler = arguments[3]; // see httpGet or httpPost arguments
          try {
            return _httpHandler.apply(undefined, arguments);
          } catch (e) {
            if (errorHandler) {
              errorHandler(e);
            } else {
              CliqzUtils.log(e, "httpHandler failed");
            }
          }
        },
        httpGet: function httpGet(url, callback, onerror, timeout, _, sync) {
          return CliqzUtils.httpHandler('GET', url, callback, onerror, timeout, _, sync);
        },
        httpPost: function httpPost(url, callback, data, onerror, timeout) {
          return CliqzUtils.httpHandler('POST', url, callback, onerror, timeout, data);
        },
        httpPut: function httpPut(url, callback, data, onerror, timeout) {
          return CliqzUtils.httpHandler('PUT', url, callback, onerror, timeout, data);
        },
        getLocalStorage: function getLocalStorage(url) {
          return new Storage(url);
        },
        /**
         * Loads a resource URL from the xpi.
         *
         * Wraps httpGet in a try-catch clause. We need to do this, because when
         * trying to load a non-existing file from an xpi via xmlhttprequest, Firefox
         * throws a NS_ERROR_FILE_NOT_FOUND exception instead of calling the onerror
         * function.
         *
         * @see https://bugzilla.mozilla.org/show_bug.cgi?id=827243 (probably).
         */
        loadResource: function loadResource(url, callback, onerror) {
          try {
            return CliqzUtils.httpGet(url, callback, onerror, 3000);
          } catch (e) {
            CliqzUtils.log("Could not load resource " + url + " from the xpi", "CliqzUtils.httpHandler");
            onerror && onerror();
          }
        },
        openTabInWindow: CLIQZEnvironment.openTabInWindow,
        getPref: prefs.get,
        setPref: prefs.set,
        hasPref: prefs.has,
        clearPref: prefs.clear,
        log: function log(msg, key) {
          console.log(key, msg);
        },
        getDay: function getDay() {
          return Math.floor(new Date().getTime() / 86400000);
        },
        //creates a random 'len' long string from the input space
        rand: function rand(len, _space) {
          var ret = '',
              i,
              space = _space || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              sLen = space.length;

          for (i = 0; i < len; i++) ret += space.charAt(Math.floor(random() * sLen));

          return ret;
        },
        hash: function hash(s) {
          return s.split('').reduce(function (a, b) {
            return (a << 4) - a + b.charCodeAt(0) & 0xEFFFFFF;
          }, 0);
        },
        cleanMozillaActions: function cleanMozillaActions() {
          var url = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

          if (url.indexOf("moz-action:") == 0) {
            var _url$match = url.match(/^moz-action:([^,]+),(.*)$/);

            var _url$match2 = _slicedToArray(_url$match, 3);

            var action = _url$match2[1];
            var url = _url$match2[2];

            try {
              // handle cases like: moz-action:visiturl,{"url": "..."}
              var mozActionUrl = JSON.parse(url).url;
              if (mozActionUrl) {
                url = decodeURIComponent(mozActionUrl);
              }
            } catch (e) {}
          }
          return [action, url];
        },
        cleanUrlProtocol: function cleanUrlProtocol(url, cleanWWW) {
          if (!url) return '';

          // removes protocol if it's http(s). See CLIQZIUM-218.
          var urlLowered = url.toLowerCase();
          if (urlLowered.startsWith('http://')) url = url.slice(7);
          if (urlLowered.startsWith('https://')) url = url.slice(8);

          // removes the www.
          if (cleanWWW && url.toLowerCase().startsWith('www.')) url = url.slice(4);

          return url;
        },
        genericTldExtractor: tlds.getPublicSuffix,
        getDetailsFromUrl: function getDetailsFromUrl(originalUrl) {
          var _CliqzUtils$cleanMozillaActions = CliqzUtils.cleanMozillaActions(originalUrl);

          var _CliqzUtils$cleanMozillaActions2 = _slicedToArray(_CliqzUtils$cleanMozillaActions, 2);

          var action = _CliqzUtils$cleanMozillaActions2[0];
          var originalUrl = _CliqzUtils$cleanMozillaActions2[1];

          // exclude protocol
          var url = originalUrl,
              scheme = '',
              slashes = '',
              name = '',
              tld = '',
              subdomains = [],
              path = '',
              query = '',
              fragment = '';

          // remove scheme
          var schemeMatch = schemeRE.exec(url);
          if (schemeMatch) {
            scheme = schemeMatch[1];
            slashes = schemeMatch[2];
            url = schemeMatch[3];
          }
          var ssl = scheme == 'https';

          // separate hostname from path, etc. Could be separated from rest by /, ? or #
          var host = url.split(/[\/\#\?]/)[0].toLowerCase();
          var path = url.replace(host, '');

          // separate username:password@ from host
          var userpass_host = host.split('@');
          if (userpass_host.length > 1) host = userpass_host[1];

          // Parse Port number
          var port = "";

          var isIPv4 = isIpv4Address(host);
          var isIPv6 = isIpv6Address(host);

          var indexOfColon = host.indexOf(":");
          if ((!isIPv6 || isIPv4) && indexOfColon >= 0) {
            port = host.substr(indexOfColon + 1);
            host = host.substr(0, indexOfColon);
          } else if (isIPv6) {
            // If an IPv6 address has a port number, it will be right after a closing bracket ] : format [ip_v6]:port
            var endOfIP = host.indexOf(']:');
            if (endOfIP >= 0) {
              port = host.split(']:')[1];
              host = host.split(']:')[0].replace('[', '').replace(']', '');
            }
          }

          // extract query and fragment from url
          var query = '';
          var query_idx = path.indexOf('?');
          if (query_idx != -1) {
            query = path.substr(query_idx + 1);
          }

          var fragment = '';
          var fragment_idx = path.indexOf('#');
          if (fragment_idx != -1) {
            fragment = path.substr(fragment_idx + 1);
          }

          // remove query and fragment from path
          path = path.replace('?' + query, '');
          path = path.replace('#' + fragment, '');
          query = query.replace('#' + fragment, '');

          // extra - all path, query and fragment
          var extra = path;
          if (query) extra += "?" + query;
          if (fragment) extra += "#" + fragment;

          isIPv4 = isIpv4Address(host);
          isIPv6 = isIpv6Address(host);
          var isLocalhost = CliqzUtils.isLocalhost(host, isIPv4, isIPv6);

          // find parts of hostname
          if (!isIPv4 && !isIPv6 && !isLocalhost) {
            try {
              var hostWithoutTld = host;
              tld = CliqzUtils.tldExtractor(host);

              if (tld) {
                hostWithoutTld = host.slice(0, -(tld.length + 1)); // +1 for the '.'
              }

              // Get subdomains
              subdomains = hostWithoutTld.split('.');
              // Get the domain name w/o subdomains and w/o TLD
              name = subdomains.pop();

              //remove www if exists
              // TODO: I don't think this is the right place to do this.
              //       Disabled for now, but check there are no issues.
              // host = host.indexOf('www.') == 0 ? host.slice(4) : host;
            } catch (e) {
              name = "";
              host = "";
              //CliqzUtils.log('WARNING Failed for: ' + originalUrl, 'CliqzUtils.getDetailsFromUrl');
            }
          } else {
            name = isLocalhost ? "localhost" : "IP";
          }

          // remove www from beginning, we need cleanHost in the friendly url
          var cleanHost = host;
          if (host.toLowerCase().indexOf('www.') == 0) {
            cleanHost = host.slice(4);
          }

          var friendly_url = cleanHost + extra;
          if (scheme && scheme != 'http' && scheme != 'https') friendly_url = scheme + ":" + slashes + friendly_url;
          //remove trailing slash from the end
          friendly_url = CliqzUtils.stripTrailingSlash(friendly_url);

          //Handle case where we have only tld for example http://cliqznas
          if (cleanHost === tld) {
            name = tld;
          }

          var urlDetails = {
            scheme: scheme ? scheme + ':' : '',
            name: name,
            domain: tld ? name + '.' + tld : '',
            tld: tld,
            subdomains: subdomains,
            path: path,
            query: query,
            fragment: fragment,
            extra: extra,
            host: host,
            cleanHost: cleanHost,
            ssl: ssl,
            port: port,
            friendly_url: friendly_url
          };

          return urlDetails;
        },
        stripTrailingSlash: function stripTrailingSlash(str) {
          if (str.substr(-1) === '/') {
            return str.substr(0, str.length - 1);
          }
          return str;
        },
        isUrl: isUrl,
        // Checks if the given string is a valid IPv4 addres
        isIPv4: isIpv4Address,
        isIPv6: isIpv6Address,

        isLocalhost: function isLocalhost(host, isIPv4, isIPv6) {
          if (host == "localhost") return true;
          if (isIPv4 && host.substr(0, 3) == "127") return true;
          if (isIPv6 && host == "::1") return true;

          return false;
        },
        // checks if a value represents an url which is a seach engine
        isSearch: function isSearch(value) {
          if (CliqzUtils.isUrl(value)) {
            var url = this.cleanMozillaActions(value)[1];

            var _CliqzUtils$getDetailsFromUrl = CliqzUtils.getDetailsFromUrl(url);

            var _name = _CliqzUtils$getDetailsFromUrl.name;
            var subdomains = _CliqzUtils$getDetailsFromUrl.subdomains;
            var path = _CliqzUtils$getDetailsFromUrl.path;

            // allow only 'www' and 'de' (for Yahoo) subdomains to exclude 'maps.google.com' etc.
            // and empty path only to exclude 'www.google.com/maps' etc.
            var firstSubdomain = subdomains.length ? subdomains[0] : '';
            return (!path || path.length === 1 && path[0] === '/') && ((_name === 'google' || _name === 'bing' || _name === 'duckduckgo' || _name === 'startpage') && (!firstSubdomain || firstSubdomain === 'www') || _name === 'yahoo' && (!firstSubdomain || firstSubdomain === 'de'));
          }
          return false;
        },
        // checks if a string is a complete url
        isCompleteUrl: function isCompleteUrl(input) {
          var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
          if (!pattern.test(input)) {
            return false;
          } else {
            return true;
          }
        },
        // extract query term from search engine result page URLs
        extractQueryFromUrl: function extractQueryFromUrl(url) {
          // Google
          if (url.search(/http(s?):\/\/www\.google\..*\/.*q=.*/i) === 0) {
            url = url.substring(url.lastIndexOf('q=') + 2).split('&')[0];
            // Bing
          } else if (url.search(/http(s?):\/\/www\.bing\..*\/.*q=.*/i) === 0) {
            url = url.substring(url.indexOf('q=') + 2).split('&')[0];
            // Yahoo
          } else if (url.search(/http(s?):\/\/.*search\.yahoo\.com\/search.*p=.*/i) === 0) {
            url = url.substring(url.indexOf('p=') + 2).split('&')[0];
          } else {
            url = null;
          }
          var decoded = url ? decodeURIComponent(url.replace(/\+/g, ' ')) : null;
          if (decoded) return decoded;else return url;
        },
        // Remove clutter (http, www) from urls
        generalizeUrl: function generalizeUrl(url, skipCorrection) {
          if (!url) {
            return '';
          }
          var val = url.toLowerCase();
          var cleanParts = CliqzUtils.cleanUrlProtocol(val, false).split('/'),
              host = cleanParts[0],
              pathLength = 0,
              SYMBOLS = /,|\./g;
          if (!skipCorrection) {
            if (cleanParts.length > 1) {
              pathLength = ('/' + cleanParts.slice(1).join('/')).length;
            }
            if (host.indexOf('www') === 0 && host.length > 4) {
              // only fix symbols in host
              if (SYMBOLS.test(host[3]) && host[4] != ' ')
                // replace only issues in the host name, not ever in the path
                val = val.substr(0, val.length - pathLength).replace(SYMBOLS, '.') + (pathLength ? val.substr(-pathLength) : '');
            }
          }
          url = CliqzUtils.cleanUrlProtocol(val, true);
          return url[url.length - 1] == '/' ? url.slice(0, -1) : url;
        },
        // Remove clutter from urls that prevents pattern detection, e.g. checksum
        simplifyUrl: function simplifyUrl(url) {
          var q;
          // Google redirect urls
          if (url.search(/http(s?):\/\/www\.google\..*\/url\?.*url=.*/i) === 0) {
            // Return target URL instead
            url = url.substring(url.lastIndexOf('url=')).split('&')[0];
            url = url.substr(4);
            return decodeURIComponent(url);

            // Remove clutter from Google searches
          } else if (url.search(/http(s?):\/\/www\.google\..*\/.*q=.*/i) === 0) {
            q = url.substring(url.lastIndexOf('q=')).split('&')[0];
            if (q != 'q=') {
              // tbm defines category (images/news/...)
              var param = url.indexOf('#') != -1 ? url.substr(url.indexOf('#')) : url.substr(url.indexOf('?'));
              var tbm = param.indexOf('tbm=') != -1 ? '&' + param.substring(param.lastIndexOf('tbm=')).split('&')[0] : '';
              var page = param.indexOf('start=') != -1 ? '&' + param.substring(param.lastIndexOf('start=')).split('&')[0] : '';
              return 'https://www.google.com/search?' + q + tbm /*+ page*/;
            } else {
              return url;
            }
            // Bing
          } else if (url.search(/http(s?):\/\/www\.bing\..*\/.*q=.*/i) === 0) {
            q = url.substring(url.indexOf('q=')).split('&')[0];
            if (q != 'q=') {
              if (url.indexOf('search?') != -1) return url.substr(0, url.indexOf('search?')) + 'search?' + q;else return url.substr(0, url.indexOf('/?')) + '/?' + q;
            } else {
              return url;
            }
            // Yahoo redirect
          } else if (url.search(/http(s?):\/\/r.search\.yahoo\.com\/.*/i) === 0) {
            url = url.substring(url.lastIndexOf('/RU=')).split('/RK=')[0];
            url = url.substr(4);
            return decodeURIComponent(url);
            // Yahoo
          } else if (url.search(/http(s?):\/\/.*search\.yahoo\.com\/search.*p=.*/i) === 0) {
            var p = url.substring(url.indexOf('p=')).split('&')[0];
            if (p != 'p=' && url.indexOf(';') != -1) {
              return url.substr(0, url.indexOf(';')) + '?' + p;
            } else {
              return url;
            }
          } else {
            return url;
          }
        },

        // establishes the connection
        pingCliqzResults: function pingCliqzResults() {
          CliqzUtils.httpHandler('HEAD', CliqzUtils.RESULTS_PROVIDER_PING);
        },

        getResultsProviderQueryString: function getResultsProviderQueryString(q) {
          var numberResults = 5;
          if (CliqzUtils.getPref('languageDedup', false)) {
            numberResults = 7;
          }
          if (CliqzUtils.getPref('modules.context-search.enabled', false)) {
            numberResults = 10;
          }
          return encodeURIComponent(q) + CliqzUtils.encodeSessionParams() + CliqzLanguage.stateToQueryString() + CliqzUtils.encodeLocale() + CliqzUtils.encodeResultOrder() + CliqzUtils.encodeCountry() + CliqzUtils.encodeFilter() + CliqzUtils.encodeLocation(true) + // @TODO: remove true
          CliqzUtils.encodeResultCount(numberResults) + CliqzUtils.enncodeQuerySuggestionParam() + CliqzUtils.disableWikiDedup();
        },

        getRichHeaderQueryString: function getRichHeaderQueryString(q, loc, locale) {
          var numberResults = 5;
          if (CliqzUtils.getPref('languageDedup', false)) {
            numberResults = 7;
          }
          if (CliqzUtils.getPref('modules.context-search.enabled', false)) {
            numberResults = 10;
          }
          return "&q=" + encodeURIComponent(q) + // @TODO: should start with &q=
          CliqzUtils.encodeSessionParams() + CliqzLanguage.stateToQueryString() + CliqzUtils.encodeLocale(locale) + CliqzUtils.encodeResultOrder() + CliqzUtils.encodeCountry() + CliqzUtils.encodeFilter() + CliqzUtils.encodeLocation(true, loc && loc.latitude, loc && loc.longitude) + CliqzUtils.encodeResultCount(numberResults) + CliqzUtils.disableWikiDedup();
        },

        getBackendResults: function getBackendResults(q) {
          if (!CliqzUtils.getPref('cliqzBackendProvider.enabled', true)) {
            return Promise.resolve({
              response: {
                results: []
              },
              query: q
            });
          }

          CliqzUtils._sessionSeq++;

          // if the user sees the results more than 500ms we consider that he starts a new query
          if (CliqzUtils._queryLastDraw && Date.now() > CliqzUtils._queryLastDraw + 500) {
            CliqzUtils._queryCount++;
          }
          CliqzUtils._queryLastDraw = 0; // reset last Draw - wait for the actual draw
          CliqzUtils._queryLastLength = q.length;
          var url = CliqzUtils.RESULTS_PROVIDER + CliqzUtils.getResultsProviderQueryString(q);

          var fetch = fetchFactory();
          return fetch(url).then(function (res) {
            return res.json();
          }).then(function (response) {
            return {
              response: response,
              query: q
            };
          });
        },

        // IP driven configuration
        fetchAndStoreConfig: function fetchAndStoreConfig() {
          return new Promise(function (resolve) {
            CliqzUtils.httpGet(CliqzUtils.CONFIG_PROVIDER, function (res) {
              if (res && res.response) {
                try {
                  var config = JSON.parse(res.response);
                  for (var k in config) {
                    if (typeof config[k] == 'object') {
                      CliqzUtils.setPref('config_' + k, JSON.stringify(config[k]));
                    } else {
                      CliqzUtils.setPref('config_' + k, config[k]);
                    }
                  }

                  // we only set the prefered backend once at first start
                  if (CliqzUtils.getPref('backend_country', '') === '') {
                    // we fallback to german results if we did not decode the location
                    CliqzUtils.setDefaultIndexCountry(CliqzUtils.getPref('config_location', 'de'));
                  }
                } catch (e) {
                  CliqzUtils.log(e);
                }
              }
              resolve();
            }, resolve, //on error the callback still needs to be called
            10000);
          });
        },
        setDefaultIndexCountry: function setDefaultIndexCountry(country) {
          var supportedCountries = JSON.parse(CliqzUtils.getPref("config_backends", '["de"]'));
          if (supportedCountries.indexOf(country) !== -1) {
            // supported country
            CliqzUtils.setPref('backend_country', country);
          } else {
            // unsupported country - fallback to
            //    'de' for german speaking users
            //    'en' for everybody else
            if (CliqzUtils.currLocale === 'de') {
              CliqzUtils.setPref('backend_country', 'de');
            } else {
              CliqzUtils.setPref('backend_country', 'us');
            }
          }
        },
        encodeLocale: function encodeLocale(locale) {
          var preferred = CliqzUtils.PREFERRED_LANGUAGE || "";
          if (locale) {
            preferred = locale;
          }
          // send browser language to the back-end
          //return '&locale=' + (locale ? locale : (CliqzUtils.PREFERRED_LANGUAGE || ""));
          return '&locale=' + preferred;
        },
        encodeCountry: function encodeCountry() {
          return '&country=' + CliqzUtils.getPref('backend_country', 'de');
        },
        disableWikiDedup: function disableWikiDedup() {
          // disable wikipedia deduplication on the backend side
          var doDedup = CliqzUtils.getPref("languageDedup", false);
          if (doDedup) return '&ddl=0';else return "";
        },
        getAdultContentFilterState: function getAdultContentFilterState() {
          var data = {
            'conservative': 3,
            'moderate': 0,
            'liberal': 1
          },
              pref = CliqzUtils.getPref('adultContentFilter', 'moderate');
          return data[pref];
        },
        encodeFilter: function encodeFilter() {
          return '&adult=' + CliqzUtils.getAdultContentFilterState();
        },
        encodeResultCount: function encodeResultCount(count) {
          count = count || 5;
          return '&count=' + count;
        },
        enncodeQuerySuggestionParam: function enncodeQuerySuggestionParam() {
          var suggestionsEnabled = CliqzUtils.getPref("suggestionsEnabled", false);
          return "&suggest=" + (suggestionsEnabled ? 1 : 0);
        },
        encodeResultType: function encodeResultType(type) {
          if (type.indexOf('action') !== -1) return ['T'];else if (type.indexOf('cliqz-results') == 0) return CliqzUtils.encodeCliqzResultType(type);else if (type.indexOf('cliqz-pattern') == 0) return ['C'];else if (type === 'cliqz-extra') return ['X'];else if (type === 'cliqz-series') return ['S'];else if (type.indexOf('bookmark') == 0 || type.indexOf('tag') == 0) return ['B'].concat(CliqzUtils.encodeCliqzResultType(type));else if (type.indexOf('favicon') == 0 || type.indexOf('history') == 0) return ['H'].concat(CliqzUtils.encodeCliqzResultType(type));

          // cliqz type = "cliqz-custom sources-X"
          else if (type.indexOf('cliqz-custom') == 0) return type.substr(21);

          return type; //should never happen
        },
        //eg types: [ "H", "m" ], [ "H|instant", "X|11" ]
        isPrivateResultType: function isPrivateResultType(type) {
          var onlyType = type[0].split('|')[0];
          return 'HBTCS'.indexOf(onlyType) != -1 && type.length == 1;
        },
        // cliqz type = "cliqz-results sources-XXXXX" or "favicon sources-XXXXX" if combined with history
        encodeCliqzResultType: function encodeCliqzResultType(type) {
          var pos = type.indexOf('sources-');
          if (pos != -1) return CliqzUtils.encodeSources(type.substr(pos + 8));else return [];
        },
        // random ID generated at each urlbar focus
        _searchSession: '',
        // number of sequences in each session
        _sessionSeq: 0,
        _queryLastLength: null,
        _queryLastDraw: null,
        // number of queries in search session
        _queryCount: null,
        setSearchSession: function setSearchSession(rand) {
          CliqzUtils._searchSession = rand;
          CliqzUtils._sessionSeq = 0;
          CliqzUtils._queryCount = 0;
          CliqzUtils._queryLastLength = 0;
          CliqzUtils._queryLastDraw = 0;
        },
        encodeSessionParams: function encodeSessionParams() {
          if (CliqzUtils._searchSession.length) {
            return '&s=' + encodeURIComponent(CliqzUtils._searchSession) + '&n=' + CliqzUtils._sessionSeq + '&qc=' + CliqzUtils._queryCount;
          } else return '';
        },

        encodeLocation: function encodeLocation(specifySource, lat, lng) {
          var locationPref = CliqzUtils.getPref('share_location', 'ask');
          if (locationPref === 'showOnce') {
            locationPref = 'ask';
          }
          var qs = "&loc_pref=" + locationPref;

          if (CliqzUtils.USER_LAT && CliqzUtils.USER_LNG || lat && lng) {
            qs += ['&loc=', lat || CliqzUtils.USER_LAT, ',', lng || CliqzUtils.USER_LNG, specifySource ? ',U' : ''].join('');
          }

          return qs;
        },
        encodeSources: function encodeSources(sources) {
          return sources.toLowerCase().split(', ').map(function (s) {
            if (s.indexOf('cache') == 0) // to catch 'cache-*' for specific countries
              return 'd';else return VERTICAL_ENCODINGS[s] || s;
          });
        },
        isPrivate: CLIQZEnvironment.isPrivate,
        telemetry: function telemetry() {
          var args = arguments;
          CliqzUtils.telemetryHandlers.forEach(function (handler) {
            return handler.apply(null, args);
          });
        },
        resultTelemetry: function resultTelemetry(query, queryAutocompleted, resultIndex, resultUrl, resultOrder, extra) {
          CliqzUtils.setResultOrder(resultOrder);
          CliqzEvents.pub("human-web:sanitize-result-telemetry", { type: 'extension-result-telemetry',
            q: query,
            s: CliqzUtils.encodeSessionParams(),
            msg: {
              i: resultIndex,
              o: CliqzUtils.encodeResultOrder(),
              u: resultUrl ? resultUrl : '',
              a: queryAutocompleted,
              e: extra
            },
            endpoint: CliqzUtils.RESULTS_PROVIDER_LOG,
            method: "GET"
          });
          CliqzUtils.setResultOrder('');
        },
        sendUserFeedback: function sendUserFeedback(data) {
          data._type = 'user_feedback';
          // Params: method, url, resolve, reject, timeout, data
          _httpHandler('POST', CLIQZEnvironment.LOG, null, null, 10000, JSON.stringify(data));
        },
        _resultOrder: '',
        setResultOrder: function setResultOrder(resultOrder) {
          CliqzUtils._resultOrder = resultOrder;
        },
        encodeResultOrder: function encodeResultOrder() {
          return CliqzUtils._resultOrder && CliqzUtils._resultOrder.length ? '&o=' + encodeURIComponent(JSON.stringify(CliqzUtils._resultOrder)) : '';
        },
        setInterval: CLIQZEnvironment.setInterval,
        setTimeout: CLIQZEnvironment.setTimeout,
        clearTimeout: CLIQZEnvironment.clearTimeout,
        clearInterval: CLIQZEnvironment.clearTimeout,
        Promise: CLIQZEnvironment.Promise,
        locale: {},
        currLocale: null,
        getLocaleFile: function getLocaleFile(locale) {
          // locale file might not exist on mobile
          if (CliqzUtils.LOCALE_PATH) {
            var url = CliqzUtils.LOCALE_PATH + locale + '/cliqz.json';
            // Synchronous request is depricated
            var req = CliqzUtils.httpGet(url, null, null, null, null, true);
            CliqzUtils.currLocale = locale;
            CliqzUtils.locale["default"] = CliqzUtils.locale[locale] = JSON.parse(req.response);
          }
        },
        getLocalizedString: function getLocalizedString(key, substitutions) {
          if (!key) return '';

          var str = key,
              localMessages;

          if (CliqzUtils.currLocale != null && CliqzUtils.locale[CliqzUtils.currLocale] && CliqzUtils.locale[CliqzUtils.currLocale][key]) {
            str = CliqzUtils.locale[CliqzUtils.currLocale][key].message;
            localMessages = CliqzUtils.locale[CliqzUtils.currLocale];
          } else if (CliqzUtils.locale["default"] && CliqzUtils.locale["default"][key]) {
            str = CliqzUtils.locale["default"][key].message;
            localMessages = CliqzUtils.locale["default"];
          }

          if (!substitutions) {
            substitutions = [];
          }
          if (!Array.isArray(substitutions)) {
            substitutions = [substitutions];
          }

          function replacer(matched, index, dollarSigns) {
            if (index) {
              index = parseInt(index, 10) - 1;
              return index in substitutions ? substitutions[index] : "";
            } else {
              // For any series of contiguous `$`s, the first is dropped, and
              // the rest remain in the output string.
              return dollarSigns;
            }
          }
          return str.replace(/\$(?:([1-9]\d*)|(\$+))/g, replacer);
        },
        // gets all the elements with the class 'cliqz-locale' and adds
        // the localized string - key attribute - as content
        localizeDoc: function localizeDoc(doc) {
          var locale = doc.getElementsByClassName('cliqz-locale');
          for (var i = 0; i < locale.length; i++) {
            var el = locale[i];
            el.textContent = CliqzUtils.getLocalizedString(el.getAttribute('key'));
          }
        },
        isWindows: function isWindows() {
          return CLIQZEnvironment.OS.indexOf("win") === 0;
        },
        isMac: function isMac() {
          return CLIQZEnvironment.OS.indexOf("darwin") === 0;
        },
        isLinux: function isLinux() {
          return CLIQZEnvironment.OS.indexOf("linux") === 0;
        },
        getWindow: CLIQZEnvironment.getWindow,
        getWindowID: CLIQZEnvironment.getWindowID,
        /**
         * Bind functions contexts to a specified object.
         * @param {Object} from - An object, whose function properties will be processed.
         * @param {Object} to - An object, which will be the context (this) of processed functions.
         */
        bindObjectFunctions: function bindObjectFunctions(from, to) {
          for (var funcName in from) {
            var func = from[funcName];
            if (!from.hasOwnProperty(funcName)) continue;
            // Can't compare with prototype of object from a different module.
            if (typeof func != "function") continue;
            from[funcName] = func.bind(to);
          }
        },
        tryDecodeURIComponent: function tryDecodeURIComponent(s) {
          // avoide error from decodeURIComponent('%2')
          try {
            return decodeURIComponent(s);
          } catch (e) {
            return s;
          }
        },
        tryEncodeURIComponent: function tryEncodeURIComponent(s) {
          try {
            return encodeURIComponent(s);
          } catch (e) {
            return s;
          }
        },
        parseQueryString: function parseQueryString(qstr) {
          var query = {};
          var a = (qstr || '').split('&');
          for (var i in a) {
            var b = a[i].split('=');
            query[CliqzUtils.tryDecodeURIComponent(b[0])] = CliqzUtils.tryDecodeURIComponent(b[1]);
          }

          return query;
        },
        roundToDecimal: function roundToDecimal(number, digits) {
          var multiplier = Math.pow(10, digits);
          return Math.round(number * multiplier) / multiplier;
        },
        getAdultFilterState: function getAdultFilterState() {
          var data = {
            'conservative': {
              name: CliqzUtils.getLocalizedString('always'),
              selected: false
            },
            'moderate': {
              name: CliqzUtils.getLocalizedString('always_ask'),
              selected: false
            },
            'liberal': {
              name: CliqzUtils.getLocalizedString('never'),
              selected: false
            }
          };
          var state = CliqzUtils.getPref('adultContentFilter', 'moderate');
          if (state === 'showOnce') {
            state = 'moderate';
          }
          data[state].selected = true;

          return data;
        },
        getLocationPermState: function getLocationPermState() {
          var data = {
            'yes': {
              name: CliqzUtils.getLocalizedString('always'),
              selected: false
            },
            'ask': {
              name: CliqzUtils.getLocalizedString('always_ask'),
              selected: false
            },
            'no': {
              name: CliqzUtils.getLocalizedString('never'),
              selected: false
            }
          };

          data[CliqzUtils.getPref('share_location', 'ask')].selected = true;

          return data;
        },

        // Returns result elements selecatble and navigatable from keyboard.
        // |container| search context, usually it's `CLIQZ.UI.gCliqzBox`.
        extractSelectableElements: function extractSelectableElements(container) {
          return Array.prototype.slice.call(container.querySelectorAll('[arrow]')).filter(function (el) {
            // dont consider hidden elements
            if (el.offsetParent == null) return false;

            if (!el.getAttribute('arrow-if-visible')) return true;

            // check if the element is visible
            //
            // for now this check is enough but we might be forced to switch to a
            // more generic approach - maybe using document.elementFromPoint(x, y)
            if (el.offsetLeft + el.offsetWidth > el.parentElement.offsetWidth) return false;
            return true;
          });
        },

        getNoResults: CLIQZEnvironment.getNoResults,
        getParameterByName: function getParameterByName(name, location) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(location.search);
          return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        },
        addEventListenerToElements: CLIQZEnvironment.addEventListenerToElements,
        search: CLIQZEnvironment.search,
        distance: function distance(lon1, lat1) {
          var lon2 = arguments.length <= 2 || arguments[2] === undefined ? CliqzUtils.USER_LNG : arguments[2];
          var lat2 = arguments.length <= 3 || arguments[3] === undefined ? CliqzUtils.USER_LAT : arguments[3];

          /** Converts numeric degrees to radians */
          function degreesToRad(degree) {
            return degree * Math.PI / 180;
          }

          var R = 6371; // Radius of the earth in km
          if (!lon2 || !lon1 || !lat2 || !lat1) {
            return -1;
          }
          var dLat = degreesToRad(lat2 - lat1); // Javascript functions in radians
          var dLon = degreesToRad(lon2 - lon1);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(degreesToRad(lat1)) * Math.cos(degreesToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km
          return d;
        },
        getDefaultSearchEngine: CLIQZEnvironment.getDefaultSearchEngine,
        copyResult: CLIQZEnvironment.copyResult,
        openPopup: CLIQZEnvironment.openPopup,
        isOnPrivateTab: CLIQZEnvironment.isOnPrivateTab,
        getAllCliqzPrefs: CLIQZEnvironment.getAllCliqzPrefs,
        isDefaultBrowser: CLIQZEnvironment.isDefaultBrowser,
        setDefaultSearchEngine: CLIQZEnvironment.setDefaultSearchEngine,
        isUnknownTemplate: CLIQZEnvironment.isUnknownTemplate,
        getEngineByName: CLIQZEnvironment.getEngineByName,
        addEngineWithDetails: CLIQZEnvironment.addEngineWithDetails,
        getEngineByAlias: CLIQZEnvironment.getEngineByAlias,
        getSearchEngines: CLIQZEnvironment.getSearchEngines,
        blackListedEngines: CLIQZEnvironment.blackListedEngines,
        updateAlias: CLIQZEnvironment.updateAlias,
        openLink: CLIQZEnvironment.openLink,
        getCliqzPrefs: function getCliqzPrefs() {
          function filterer(entry) {
            // avoid privay leaking prefs ('backup').
            // avoid irrelevant deep prefs (something.otherthing.x.y)
            // allow 'enabled' prefs
            return entry.indexOf('.') == -1 && entry.indexOf('backup') == -1 || entry.indexOf('.enabled') != -1;
          }

          var cliqzPrefs = {};
          var cliqzPrefsKeys = CliqzUtils.getAllCliqzPrefs().filter(filterer);

          for (var i = 0; i < cliqzPrefsKeys.length; i++) {
            cliqzPrefs[cliqzPrefsKeys[i]] = prefs.get(cliqzPrefsKeys[i]);
          }

          return cliqzPrefs;
        },
        promiseHttpHandler: promiseHttpHandler,
        registerResultProvider: function registerResultProvider(o) {
          CLIQZEnvironment.CliqzResultProviders = o.ResultProviders;
          CLIQZEnvironment.Result = o.Result;
        },
        lastRenderedResults: [],
        lastRenderedURLs: [],
        lastSelection: -1,
        onRenderComplete: function onRenderComplete(query, box) {
          if (!CLIQZEnvironment.onRenderComplete) return;

          CliqzUtils.lastRenderedResults = this.extractSelectableElements(box).filter(function (node) {
            return !!(node.getAttribute("url") || node.getAttribute("href"));
          });
          CliqzUtils.lastRenderedURLs = CliqzUtils.lastRenderedResults.map(function (node) {
            return node.getAttribute("url") || node.getAttribute("href");
          });

          CLIQZEnvironment.onRenderComplete(query, CliqzUtils.lastRenderedURLs);
        },
        onSelectionChange: function onSelectionChange(element) {
          if (!element) return;

          var current = CliqzUtils.lastRenderedResults.indexOf(element);
          if (current == -1) {
            current = CliqzUtils.lastRenderedURLs.indexOf(element.getAttribute("url"));
          }

          if (CliqzUtils.lastSelection == current) return;
          CliqzUtils.lastSelection = current;

          if (!CLIQZEnvironment.onResultSelectionChange) return;
          CLIQZEnvironment.onResultSelectionChange(current);
        }
      };

      _export("default", CliqzUtils);
    }
  };
});
$__System.register('36', ['9'], function (_export) {
  'use strict';

  var utils, _default;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  return {
    setters: [function (_coreUtils) {
      utils = _coreUtils['default'];
    }],
    execute: function () {
      _default = function () {
        function _default(_ref) {
          var window = _ref.window;
          var background = _ref.background;

          _classCallCheck(this, _default);

          this.background = background;
          this.window = window;
        }

        _createClass(_default, [{
          key: 'init',
          value: function init() {
            if (this.background.CliqzSecureMessage) {
              this.background.CliqzSecureMessage.initAtWindow(this.window);
              this.window.CliqzSecureMessage = this.background.CliqzSecureMessage;
              Object.assign(this.window.CliqzSecureMessage, this.background.actions);
            }
          }
        }, {
          key: 'unload',
          value: function unload() {}
        }, {
          key: 'status',
          value: function status() {
            if (this.background.CliqzSecureMessage) {
              return {
                visible: true,
                state: utils.getPref('hpn-query')
              };
            }
          }
        }]);

        return _default;
      }();

      _export('default', _default);
    }
  };
});
$__System.register('37', ['18', '36'], function (_export) {
  'use strict';

  var Background, Window;
  return {
    setters: [function (_background) {
      Background = _background['default'];
    }, function (_window) {
      Window = _window['default'];
    }],
    execute: function () {
      _export('default', {
        Background: Background,
        Window: Window
      });
    }
  };
});
$__System.register('1', ['37'], function (_export) {
  /* globals window */
  // FIXME: stop using this file as soon as subproject chrome-test-hw-hpn is killed
  'use strict';

  var hpn;
  return {
    setters: [function (_index) {
      hpn = _index['default'];
    }],
    execute: function () {

      window.CliqzSecureMessage = {
        init: function init() {
          this.background = hpn.Background;
          this.loadingPromise = this.background.init();
          return this.loadingPromise;
        },

        telemetry: function telemetry(msg) {
          var _this = this;

          return this.loadingPromise.then(function () {
            return _this.background.actions.sendTelemetry(msg);
          });
        },
        sha1: function sha1(msg) {
          var _this2 = this;

          return this.loadingPromise.then(function () {
            return _this2.background.actions.sha1(msg);
          });
        },

        sendInstantMessage: function sendInstantMessage(rp, payload) {
          var _this3 = this;

          return this.loadingPromise.then(function () {
            return _this3.background.actions.sendInstantMessage(rp, payload);
          });
        }
      };
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvcmUvYmFzZS9jb3JlL2Jhc2UvYmFja2dyb3VuZC5lcyIsIi4uL3BsYXRmb3JtL2Nocm9taXVtL3BsYXRmb3JtLmVzIiwiLi4vY29yZS9jb3JlL3BsYXRmb3JtLmVzIiwiLi4vcGxhdGZvcm0vaHBuL2Nocm9taXVtL2hwbi9zdG9yYWdlLmVzIiwiLi4vcGxhdGZvcm0vY2hyb21pdW0vaGlzdG9yeS1tYW5hZ2VyLmVzIiwiLi4vY29yZS9jb3JlL2NsaXF6LmVzIiwiLi4vcGxhdGZvcm0vY2hyb21pdW0vcmVzb3VyY2UtbG9hZGVyLXN0b3JhZ2UuZXMiLCIuLi9wbGF0Zm9ybS9jaHJvbWl1bS90ZXh0LWRlY29kZXIuZXMiLCIuLi9jb3JlL2NvcmUvcmVzb3VyY2UtbG9hZGVyLmVzIiwiaHBuL3NlbmQtbWVzc2FnZS5lcyIsImhwbi9odHRwLWhhbmRsZXItcGF0Y2guZXMiLCIuLi9wbGF0Zm9ybS9jaHJvbWl1bS9wcm94eS1maWx0ZXIuZXMiLCJocG4vdXRpbHMuZXMiLCJocG4vcHJveHktZmlsdGVyLmVzIiwiaHBuL21haW4uZXMiLCJocG4vY3J5cHRvLXdvcmtlci5lcyIsImhwbi9iYWNrZ3JvdW5kLmVzIiwiLi4vY29yZS9jb3JlL2NvbmZpZy5lcyIsIi4uL3BsYXRmb3JtL2Nocm9taXVtL2Vudmlyb25tZW50LmVzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RsZGpzL2xpYi9ydWxlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1bnljb2RlL3B1bnljb2RlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3VybC91dGlsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nL2RlY29kZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy9lbmNvZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmcvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdXJsL3VybC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy90bGRqcy9saWIvdGxkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RsZGpzL3J1bGVzLmpzb24iLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdGxkanMvaW5kZXguanMiLCIuLi9wbGF0Zm9ybS9jaHJvbWl1bS90bGRqcy5lcyIsIi4uL2NvcmUvY29yZS90bGRzLmVzIiwiLi4vcGxhdGZvcm0vY2hyb21pdW0vZ2xvYmFscy5lcyIsIi4uL3BsYXRmb3JtL2Nocm9taXVtL2NvbnNvbGUuZXMiLCIuLi9wbGF0Zm9ybS9jaHJvbWl1bS9zdG9yYWdlLmVzIiwiLi4vY29yZS9jb3JlL3N0b3JhZ2UuZXMiLCIuLi9jb3JlL2NvcmUvZXZlbnRzLmVzIiwiLi4vcGxhdGZvcm0vY2hyb21pdW0vcHJlZnMuZXMiLCIuLi9jb3JlL2NvcmUvcHJlZnMuZXMiLCIuLi9jb3JlL2NvcmUvY29uc29sZS5lcyIsIi4uL3BsYXRmb3JtL2Nocm9taXVtL3htbGh0dHByZXF1ZXN0LmVzIiwiLi4vcGxhdGZvcm0vY2hyb21pdW0vY2hyb21lLXVybC1oYW5kbGVyLmVzIiwiLi4vY29yZS9jb3JlL2h0dHAuZXMiLCIuLi9jb3JlL2NvcmUvZ3ppcC5lcyIsIi4uL3BsYXRmb3JtL2Nocm9taXVtL2xhbmd1YWdlLmVzIiwiLi4vY29yZS9jb3JlL2xhbmd1YWdlLmVzIiwiLi4vcGxhdGZvcm0vY2hyb21pdW0vdXJsLmVzIiwiLi4vY29yZS9jb3JlL3VybC5lcyIsIi4uL3BsYXRmb3JtL2Nocm9taXVtL2NyeXB0by5lcyIsIi4uL2NvcmUvY3J5cHRvL2NvcmUvY3J5cHRvL3JhbmRvbS5lcyIsIi4uL3BsYXRmb3JtL2Nocm9taXVtL2ZldGNoLmVzIiwiLi4vY29yZS9jb3JlL3V0aWxzLmVzIiwiaHBuL3dpbmRvdy5lcyIsImhwbi9pbmRleC5lcyIsImhwbi9pbmRleC5idW5kbGUuZXMiXSwibmFtZXMiOlsiUnVsZSIsImRhdGEiLCJleGNlcHRpb24iLCJmaXJzdExldmVsIiwic2Vjb25kTGV2ZWwiLCJpc0hvc3QiLCJzb3VyY2UiLCJ3aWxkY2FyZCIsInByb3RvdHlwZSIsImdldE5vcm1hbFhsZCIsImdldE5vcm1hbFBhdHRlcm4iLCJnZXRXaWxkY2FyZFBhdHRlcm4iLCJyZXBsYWNlIiwiZ2V0RXhjZXB0aW9uUGF0dGVybiIsImdldFBhdHRlcm4iLCJiZWZvcmUiLCJhZnRlciIsInBhdHRlcm4iLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiaXNTdHJpbmciLCJhcmciLCJpc09iamVjdCIsImlzTnVsbCIsImlzTnVsbE9yVW5kZWZpbmVkIiwiaGFzT3duUHJvcGVydHkiLCJvYmoiLCJwcm9wIiwiT2JqZWN0IiwiY2FsbCIsInFzIiwic2VwIiwiZXEiLCJvcHRpb25zIiwibGVuZ3RoIiwicmVnZXhwIiwic3BsaXQiLCJtYXhLZXlzIiwibGVuIiwiaSIsIngiLCJpZHgiLCJpbmRleE9mIiwia3N0ciIsInZzdHIiLCJrIiwidiIsInN1YnN0ciIsImRlY29kZVVSSUNvbXBvbmVudCIsIkFycmF5IiwiaXNBcnJheSIsInB1c2giLCJzdHJpbmdpZnlQcmltaXRpdmUiLCJpc0Zpbml0ZSIsIm5hbWUiLCJrZXlzIiwibWFwIiwia3MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwiZGVjb2RlIiwicGFyc2UiLCJyZXF1aXJlIiwiZW5jb2RlIiwic3RyaW5naWZ5IiwicHVueWNvZGUiLCJ1dGlsIiwidXJsUGFyc2UiLCJyZXNvbHZlIiwidXJsUmVzb2x2ZSIsInJlc29sdmVPYmplY3QiLCJ1cmxSZXNvbHZlT2JqZWN0IiwiZm9ybWF0IiwidXJsRm9ybWF0IiwiVXJsIiwicHJvdG9jb2wiLCJzbGFzaGVzIiwiYXV0aCIsImhvc3QiLCJwb3J0IiwiaG9zdG5hbWUiLCJoYXNoIiwic2VhcmNoIiwicXVlcnkiLCJwYXRobmFtZSIsInBhdGgiLCJocmVmIiwicHJvdG9jb2xQYXR0ZXJuIiwicG9ydFBhdHRlcm4iLCJzaW1wbGVQYXRoUGF0dGVybiIsImRlbGltcyIsInVud2lzZSIsImNvbmNhdCIsImF1dG9Fc2NhcGUiLCJub25Ib3N0Q2hhcnMiLCJob3N0RW5kaW5nQ2hhcnMiLCJob3N0bmFtZU1heExlbiIsImhvc3RuYW1lUGFydFBhdHRlcm4iLCJob3N0bmFtZVBhcnRTdGFydCIsInVuc2FmZVByb3RvY29sIiwiaG9zdGxlc3NQcm90b2NvbCIsInNsYXNoZWRQcm90b2NvbCIsInF1ZXJ5c3RyaW5nIiwidXJsIiwicGFyc2VRdWVyeVN0cmluZyIsInNsYXNoZXNEZW5vdGVIb3N0IiwidSIsIlR5cGVFcnJvciIsInF1ZXJ5SW5kZXgiLCJzcGxpdHRlciIsInVTcGxpdCIsInNsYXNoUmVnZXgiLCJyZXN0IiwidHJpbSIsInNpbXBsZVBhdGgiLCJleGVjIiwicHJvdG8iLCJsb3dlclByb3RvIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImhvc3RFbmQiLCJoZWMiLCJhdFNpZ24iLCJsYXN0SW5kZXhPZiIsInNsaWNlIiwicGFyc2VIb3N0IiwiaXB2Nkhvc3RuYW1lIiwiaG9zdHBhcnRzIiwibCIsInBhcnQiLCJuZXdwYXJ0IiwiaiIsImNoYXJDb2RlQXQiLCJ2YWxpZFBhcnRzIiwibm90SG9zdCIsImJpdCIsInVuc2hpZnQiLCJ0b0FTQ0lJIiwicCIsImgiLCJhZSIsImVzYyIsImVzY2FwZSIsInFtIiwicyIsImNoYXJBdCIsInJlbGF0aXZlIiwicmVsIiwicmVzdWx0IiwidGtleXMiLCJ0ayIsInRrZXkiLCJya2V5cyIsInJrIiwicmtleSIsInJlbFBhdGgiLCJzaGlmdCIsImlzU291cmNlQWJzIiwiaXNSZWxBYnMiLCJtdXN0RW5kQWJzIiwicmVtb3ZlQWxsRG90cyIsInNyY1BhdGgiLCJwc3ljaG90aWMiLCJwb3AiLCJhdXRoSW5Ib3N0IiwibGFzdCIsImhhc1RyYWlsaW5nU2xhc2giLCJ1cCIsInNwbGljZSIsImlzQWJzb2x1dGUiLCJVUkwiLCJ0bGQiLCJ2YWxpZEhvc3RzIiwicnVsZXMiLCJpbml0IiwidmFsdWUiLCJTdHJpbmciLCJfc29tZUZ1bmN0aW9uIiwiZnVuIiwidCIsInRoaXNBcmciLCJhcmd1bWVudHMiLCJfbWFwRnVuY3Rpb24iLCJ0aGlzVmFsIiwicmVzIiwiZ2V0Q2FuZGlkYXRlUnVsZSIsInJ1bGUiLCJsYXp5IiwiciIsIm5vcm1hbCIsIlJlZ0V4cCIsInRlc3QiLCJnZXRSdWxlc0ZvclRsZCIsImRlZmF1bHRfcnVsZSIsImFwcGVuZF90bGRfcnVsZSIsInRvU3RyaW5nIiwidHJhbnNmb3JtQXNSdWxlIiwic2xkIiwiZmlyc3RfYml0IiwicmV2ZXJzZSIsInRsZEV4aXN0cyIsImhvc3RUbGQiLCJjbGVhbkhvc3RWYWx1ZSIsImV4dHJhY3RUbGRGcm9tSG9zdCIsImdldFB1YmxpY1N1ZmZpeCIsImdldERvbWFpbiIsImRvbWFpbiIsImlzVmFsaWQiLCJtIiwiZCIsImdldFN1YmRvbWFpbiIsInN1YmRvbWFpbiIsImVzY2FwZVJlZ0V4cCIsImhhc1ByZWZpeFJFIiwiaW52YWxpZEhvc3RuYW1lQ2hhcnMiLCJwYXJ0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7eUJBRWUsVUFBVSxBQUFrQixvQkFBRSxBQUMzQztZQUFNLEFBQVUsYUFBRyxBQUFNLE9BQUMsQUFBTSxPQUFDLEFBQUUsSUFBRSxBQUFrQixBQUFDLEFBQUMsQUFDekQ7WUFBTSxBQUFNLFNBQUcsQUFBVSxXQUFDLEFBQUksQUFBQyxBQUMvQjtZQUFNLEFBQVEsV0FBRyxBQUFVLFdBQUMsQUFBTSxBQUFDLEFBQ25DO1lBQU0sQUFBUSxXQUFHLEFBQVUsV0FBQyxBQUFNLEFBQUM7O0FBR25DO0FBQU0sZUFBQyxBQUFJLEtBQUMsQUFBVSxXQUFDLEFBQU8sV0FBSSxBQUFFLEFBQUMsSUFBQyxBQUFPLFFBQUMsVUFBQSxBQUFNLFFBQUksQUFDdEQ7QUFBVSxxQkFBQyxBQUFPLFFBQUMsQUFBTSxBQUFDLFVBQUcsQUFBVSxXQUFDLEFBQU8sUUFBQyxBQUFNLEFBQUMsUUFBQyxBQUFJLEtBQUMsQUFBVSxBQUFDLEFBQUM7QUFDMUUsQUFBQyxBQUFDLEFBRUg7O0FBQVUsbUJBQUMsQUFBSSxPQUFHLFNBQVMsQUFBSSxPQUFV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S0FBQyxBQUFVLFdBQUMsQUFBSSxBQUFFLEFBQUMsQUFDN0M7aUJBQU8sQUFBSSxLQUFDLEFBQWMsQUFBQztBQUM1QixBQUVEOztBQUFTLG1CQUFBLG1CQUFDLEFBQUcsS0FBRTtzQkFDYjs7c0JBQVksQUFBYyxlQUFDLEFBQUksS0FDN0I7bUJBQU0sTUFBSyxBQUFVLFdBQUMsQUFBTyxRQUFDLEFBQWEsY0FBQyxBQUFHLEFBQUM7QUFBQSxBQUNqRCxBQUFDLFdBRkssQUFBSTtBQUdaLEFBQ0Q7QUFBSSxjQUFBLGNBQUMsQUFBRyxLQUFFO3VCQUNSOztzQkFBWSxBQUFjLGVBQUMsQUFBSSxLQUMvQjttQkFBTSxPQUFLLEFBQVUsV0FBQyxBQUFPLFFBQUMsQUFBSSxLQUFDLEFBQUcsQUFBQztBQUFBLEFBQ3RDLEFBQUMsV0FGSyxBQUFJO0FBR1osQUFFRDs7QUFBa0IsNEJBQUEsNEJBQUMsQUFBRSxJQUFFLEFBQU8sU0FBRTt1QkFDOUI7O3NCQUFZLEFBQWMsZUFBQyxBQUFJLEtBQzdCO21CQUFNLE9BQUssQUFBVSxXQUFDLEFBQU8sUUFBQyxBQUFrQixtQkFBQyxBQUFFLElBQUUsQUFBTyxBQUFDO0FBQUEsQUFDOUQsQUFBQyxXQUZLLEFBQUk7QUFHWixBQUNGLEFBQUM7QUF2QjBCLEFBQzFCIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9yaWdpbmFsQmFja2dyb3VuZCkge1xuICBjb25zdCBiYWNrZ3JvdW5kID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWxCYWNrZ3JvdW5kKTtcbiAgY29uc3QgYmdJbml0ID0gYmFja2dyb3VuZC5pbml0O1xuICBjb25zdCBiZ1VubG9hZCA9IGJhY2tncm91bmQudW5sb2FkO1xuICBjb25zdCBiZ0V2ZW50cyA9IGJhY2tncm91bmQuZXZlbnRzO1xuXG4gIC8vIGJpbmQgYWN0aW9ucyB0byBiYWNrZ3JvdW5kIG9iamVjdFxuICBPYmplY3Qua2V5cyhiYWNrZ3JvdW5kLmFjdGlvbnMgfHwge30pLmZvckVhY2goYWN0aW9uID0+IHtcbiAgICBiYWNrZ3JvdW5kLmFjdGlvbnNbYWN0aW9uXSA9IGJhY2tncm91bmQuYWN0aW9uc1thY3Rpb25dLmJpbmQoYmFja2dyb3VuZCk7XG4gIH0pO1xuXG4gIGJhY2tncm91bmQuaW5pdCA9IGZ1bmN0aW9uIGluaXQoLi4uYXJncykge1xuICAgIGNvbnN0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoYmdJbml0LmFwcGx5KGJhY2tncm91bmQsIGFyZ3MpKTtcblxuICAgIE9iamVjdC5rZXlzKGJnRXZlbnRzIHx8IHt9KS5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGJnRXZlbnRzW2V2ZW50XSA9IGJnRXZlbnRzW2V2ZW50XS5iaW5kKGJhY2tncm91bmQpO1xuICAgICAgZXZlbnRzLnN1YihldmVudCwgYmdFdmVudHNbZXZlbnRdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICBiYWNrZ3JvdW5kLnVubG9hZCA9IGZ1bmN0aW9uIHVubG9hZCguLi5hcmdzKSB7XG4gICAgT2JqZWN0LmtleXMoYmdFdmVudHMgfHwge30pLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgZXZlbnRzLnVuX3N1YihldmVudCwgYmdFdmVudHNbZXZlbnRdKTtcbiAgICB9KTtcblxuICAgIGJnVW5sb2FkLmFwcGx5KGJhY2tncm91bmQsIGFyZ3MpO1xuICB9O1xuXG4gIHJldHVybiBiYWNrZ3JvdW5kO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBpc01vYmlsZTogZmFsc2UsXG4gIGlzRmlyZWZveDogZmFsc2UsXG4gIGlzQ2hyb21pdW06IHRydWVcbn07XG5leHBvcnQgZnVuY3Rpb24gaXNQbGF0Zm9ybUF0TGVhc3RJblZlcnNpb24odmVyc2lvbikge1xuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCBwbGF0Zm9ybSBmcm9tICcuLi9wbGF0Zm9ybS9wbGF0Zm9ybSc7XG5cbmV4cG9ydCB7IGlzUGxhdGZvcm1BdExlYXN0SW5WZXJzaW9uIH0gZnJvbSAnLi4vcGxhdGZvcm0vcGxhdGZvcm0nO1xuXG5leHBvcnQgZnVuY3Rpb24gbm90SW1wbGVtZW50ZWQoKSB7XG4gIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7XG59XG5cbmV4cG9ydCBsZXQgaXNGaXJlZm94ID0gcGxhdGZvcm0uaXNGaXJlZm94O1xuZXhwb3J0IGxldCBpc01vYmlsZSA9IHBsYXRmb3JtLmlzTW9iaWxlO1xuZXhwb3J0IGxldCBpc0Nocm9taXVtID0gcGxhdGZvcm0uaXNDaHJvbWl1bTtcbmV4cG9ydCBsZXQgcGxhdGZvcm1OYW1lID0gcGxhdGZvcm0ucGxhdGZvcm1OYW1lO1xuIiwiLy8gVE9ETzogdGhpcyBlbnRpcmUgZmlsZSByZXF1aXJlcyBhIHJld3JpdGUgZnJvbSBncm91bmQgdXBcbmNvbnN0IENsaXF6Q2hyb21lREIgPSB7XG4gIFZFUlNJT046ICcwLjEnLFxuICBzZXQ6IGZ1bmN0aW9uKGRiLCBrZXksIG9iaiwgY2FsbGJhY2spIHtcbiAgICB2YXIgZGJLZXkgPSBkYisnOicra2V5O1xuICAgIHZhciBvID0ge307XG4gICAgb1tkYktleV0gPSBvYmo7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KG8sIGNhbGxiYWNrKTtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbihkYiwga2V5VmFsdWVPckZ1bmN0aW9uLCBjYWxsYmFjaykge1xuXG4gICAgaWYgKHR5cGVvZiBrZXlWYWx1ZU9yRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KG51bGwsIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKCBmdW5jdGlvbihsYWIpIHtcbiAgICAgICAgICBpZiAobGFiLnN0YXJ0c1dpdGgoZGIpKSB7XG4gICAgICAgICAgICBpZiAoa2V5VmFsdWVPckZ1bmN0aW9uKGl0ZW1zW2xhYl0pKSByZXN1bHRzLnB1c2goaXRlbXNbbGFiXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0cyk7XG4gICAgICB9KTtcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBkYktleSA9IGRiKyc6JytrZXlWYWx1ZU9yRnVuY3Rpb247XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoZGJLZXksIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgIGNhbGxiYWNrKGl0ZW1zW2RiS2V5XSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24oZGIsIGtleVZhbHVlT3JGdW5jdGlvbiwgY2FsbGJhY2spIHtcblxuICAgIGlmICh0eXBlb2Yga2V5VmFsdWVPckZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChudWxsLCBmdW5jdGlvbihpdGVtcykge1xuICAgICAgICB2YXIgcmVzdWx0c1RvQmVSZW1vdmVkID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKCBmdW5jdGlvbihsYWIpIHtcbiAgICAgICAgICBpZiAobGFiLnN0YXJ0c1dpdGgoZGIpKSB7XG4gICAgICAgICAgICBpZiAoa2V5VmFsdWVPckZ1bmN0aW9uKGl0ZW1zW2xhYl0pKSB7XG4gICAgICAgICAgICAgIHZhciBkYktleSA9IGRiKyc6JytsYWI7XG4gICAgICAgICAgICAgIHJlc3VsdHNUb0JlUmVtb3ZlZC5wdXNoKGRiS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnJlbW92ZShyZXN1bHRzVG9CZVJlbW92ZWQsIGNhbGxiYWNrKVxuICAgICAgfSk7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgZGJLZXkgPSBkYisnOicra2V5VmFsdWVPckZ1bmN0aW9uO1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKGRiS2V5LCBjYWxsYmFjayk7XG4gICAgfVxuICB9LFxuICBzaXplOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldEJ5dGVzSW5Vc2UobnVsbCwgZnVuY3Rpb24oYSkge1xuICAgICAgdmFyIHJlcyA9IFthLCBhL2Nocm9tZS5zdG9yYWdlLmxvY2FsLlFVT1RBX0JZVEVTXTtcbiAgICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IHNpemU6ICcsIHJlc1swXSwgcmVzWzFdKTtcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2socmVzKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlRXZlcnl0aGluZzogZnVuY3Rpb24oKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuY2xlYXIoKTtcbiAgICBDbGlxekNocm9tZURCLnNpemUoKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoQ2xpcXpTZWN1cmVNZXNzYWdlKSB7XG4gICAgdGhpcy5DbGlxelNlY3VyZU1lc3NhZ2UgPSBDbGlxelNlY3VyZU1lc3NhZ2U7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgfVxuXG4gIHNhdmVSZWNvcmQoaWQsIGRhdGEpIHtcbiAgICBDbGlxekNocm9tZURCLnNldCgnaHBuJywgaWQsIGRhdGEpO1xuICB9XG5cbiAgbG9hZFJlY29yZChpZCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIENsaXF6Q2hyb21lREIuZ2V0KCdocG4nLCBpZCwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgaWYgKG9iaikgcmVzLnB1c2gob2JqKTtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBzYXZlS2V5cyhfZGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIENsaXF6Q2hyb21lREIuc2V0KCdocG4nLCAndXNlcktleScsIEpTT04uc3RyaW5naWZ5KF9kYXRhKSk7XG4gICAgICByZXNvbHZlKHsgc3RhdHVzOiB0cnVlLCBkYXRhOiBfZGF0YSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRLZXlzKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmxvYWRSZWNvcmQoJ3VzZXJLZXknKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGRhdGEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZWUpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2F2ZUxvY2FsQ2hlY2tUYWJsZSgpIHtcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5DbGlxelNlY3VyZU1lc3NhZ2UubG9jYWxUZW1wb3JhbFVuaXEpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2F2ZVJlY29yZCgnbG9jYWxUZW1wb3JhbFVuaXEnLCBKU09OLnN0cmluZ2lmeSh0aGlzLkNsaXF6U2VjdXJlTWVzc2FnZS5sb2NhbFRlbXBvcmFsVW5pcSkpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRMb2NhbENoZWNrVGFibGUoKSB7XG4gICAgdGhpcy5sb2FkUmVjb3JkKCdsb2NhbFRlbXBvcmFsVW5pcScpXG4gICAgICAudGhlbiggcmVzID0+IHtcbiAgICAgICAgaWYocmVzLmxlbmd0aCA+IDApe1xuICAgICAgICAgIHRoaXMuQ2xpcXpTZWN1cmVNZXNzYWdlLmxvY2FsVGVtcG9yYWxVbmlxID0gSlNPTi5wYXJzZShyZXNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuQ2xpcXpTZWN1cmVNZXNzYWdlLmxvY2FsVGVtcG9yYWxVbmlxID0ge307XG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdCgpIHt9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGhpc3RvcnlNYW5hZ2VyIH0gZnJvbSBcIi4uL3BsYXRmb3JtL2hpc3RvcnktbWFuYWdlclwiO1xuXG5pbXBvcnQgQ2xpcXpVdGlscyBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IENsaXF6RXZlbnRzIGZyb20gXCIuL2V2ZW50c1wiO1xuXG5jb25zdCBDbGlxelByb21pc2UgPSBDbGlxelV0aWxzLlByb21pc2U7XG5cbmV4cG9ydCB7XG4gIENsaXF6VXRpbHMgYXMgdXRpbHMsXG4gIENsaXF6RXZlbnRzIGFzIGV2ZW50cyxcbiAgQ2xpcXpQcm9taXNlIGFzIFByb21pc2UsXG59O1xuIiwiaW1wb3J0IHsgY2hyb21lIH0gZnJvbSAnLi9nbG9iYWxzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoZmlsZVBhdGgpIHtcbiAgICB0aGlzLmtleSA9IFtcbiAgICAgICdyZXNvdXJjZS1sb2FkZXInLFxuICAgICAgLi4uZmlsZVBhdGgsXG4gICAgXS5qb2luKCc6Jyk7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQodGhpcy5rZXksICh2YWx1ZXMpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXModmFsdWVzKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KGByZXNvdXJjZS1sb2FkZXI6IGNocm9tZSBzdG9yYWdlIGhhcyBubyB2YWx1ZSBmb3Iga2V5ICR7dGhpcy5rZXl9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2F2ZShkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICBbdGhpcy5rZXldOiBkYXRhLFxuICAgICAgfSwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IFRleHREZWNvZGVyO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgY29uc29sZSBmcm9tICcuL2NvbnNvbGUnO1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICcuL2NsaXF6JztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4uL3BsYXRmb3JtL3Jlc291cmNlLWxvYWRlci1zdG9yYWdlJztcbmltcG9ydCBUZXh0RGVjb2RlciBmcm9tICcuLi9wbGF0Zm9ybS90ZXh0LWRlY29kZXInO1xuXG4vLyBDb21tb24gZHVyYXRpb25zXG5jb25zdCBPTkVfU0VDT05EID0gMTAwMDtcbmNvbnN0IE9ORV9NSU5VVEUgPSA2MCAqIE9ORV9TRUNPTkQ7XG5jb25zdCBPTkVfSE9VUiA9IDYwICogT05FX01JTlVURTtcblxuZnVuY3Rpb24gZ2V0KHVybCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHV0aWxzLmh0dHBHZXQodXJsLCAocmVzKSA9PiB7XG4gICAgICByZXNvbHZlKHJlcy5yZXNwb25zZSk7XG4gICAgfSwgcmVqZWN0LCAzMDAgKiBPTkVfU0VDT05EKTtcbiAgfSk7XG59XG5cbi8qIEFic3RyYWN0IGF3YXkgdGhlIHBhdHRlcm4gYG9uVXBkYXRlYCB0cmlnZ2VyIGxpc3Qgb2ZcbiAqIGNhbGxiYWNrcy4gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgYSBsb3QsIHNvIGl0IGxvb2tzIHdvcnRoXG4gKiBpdCB0byBjcmVhdGUgYSBiYXNlIGNsYXNzIHRvIGhhbmRsZSBpdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFVwZGF0ZUNhbGxiYWNrSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0gW107XG4gIH1cblxuICBvblVwZGF0ZShjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgdHJpZ2dlckNhbGxiYWNrcyhhcmdzKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuY2FsbGJhY2tzLm1hcChjYiA9PiBjYihhcmdzKSkpO1xuICB9XG59XG5cbi8qIEEgcmVzb3VyY2UgaXMgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIGEgcmVtb3RlIHJlc291cmNlIHBlcnNpc3RlZCBvblxuICogZGlzay4gSXQgd2lsbCBiZSBwZXJzaXN0ZWQgb24gZGlzayB1cG9uIGVhY2ggdXBkYXRlIGZyb20gcmVtb3RlLiBJdCBpc1xuICogYWxzbyBhYmxlIHRvIHBhcnNlIEpTT04gYXV0b21hdGljYWxseSBpZiBgZGF0YVR5cGVgIGlzICdqc29uJy5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLm5hbWUgPSAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSA/IFtuYW1lXSA6IG5hbWU7XG4gICAgdGhpcy5yZW1vdGVVUkwgPSBvcHRpb25zLnJlbW90ZVVSTDtcbiAgICB0aGlzLmRhdGFUeXBlID0gb3B0aW9ucy5kYXRhVHlwZSB8fCAnanNvbic7XG4gICAgdGhpcy5maWxlUGF0aCA9IFsnY2xpcXonLCAuLi50aGlzLm5hbWVdO1xuICAgIHRoaXMuY2hyb21lVVJMID0gb3B0aW9ucy5jaHJvbWVVUkwgfHwgYCR7Y29uZmlnLmJhc2VVUkx9JHt0aGlzLm5hbWUuam9pbignLycpfWA7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0b3JhZ2UodGhpcy5maWxlUGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIHJlc291cmNlLiBMb2FkIGVpdGhlciBhIGNhY2hlZCB2ZXJzaW9uIG9mIHRoZSBmaWxlIGF2YWlsYWJsZSBpblxuICAgKiB0aGUgcHJvZmlsZSwgb3IgYXQgdGhlIGNocm9tZSBVUkwgKGlmIHByb3ZpZGVkKSBvciBmcm9tIHJlbW90ZS5cbiAgICpcbiAgICogQHJldHVybnMgYSBQcm9taXNlIHJlc29sdmluZyB0byB0aGUgcmVzb3VyY2UuIFRoaXMgUHJvbWlzZSBjYW4gZmFpbCBvblxuICAgKiBlcnJvciAoaWYgdGhlIHJlbW90ZSByZXNvdXJjZSBjYW5ub3QgYmUgZmV0Y2hlZCwgb3IgaWYgdGhlIHBhcnNpbmdcbiAgICogZmFpbHMsIGZvciBleGFtcGxlKSwgdGh1cyAqKnlvdSBzaG91bGQgc2hvdWxkIGFkZCBhIF9jYXRjaF8qKiB0byB0aGlzXG4gICAqIHByb21pc2UgdG8gaGFuZGxlIGVycm9ycyBwcm9wZXJseS5cbiAgICovXG4gIGxvYWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5sb2FkKClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gZGF0YSBtaWdodCBiZSBhIHBsYWluIHN0cmluZyBpbiB3ZWIgZXh0ZW5zaW9uIGNhc2VcbiAgICAgICAgICAvLyBmb3IgcmVhY3QgbmF0aXZlIHRoZSBUZXh0RGVjb2Rlci5kZWNvZGUgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgICByZXR1cm4gKG5ldyBUZXh0RGVjb2RlcigpKS5kZWNvZGUoZGF0YSkgfHwgZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB0aGlzLnBhcnNlRGF0YShkYXRhKSlcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLnVwZGF0ZUZyb21VUkwodGhpcy5jaHJvbWVVUkwpKVxuICAgICAgLmNhdGNoKCgpID0+IHRoaXMudXBkYXRlRnJvbVJlbW90ZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byB1cGRhdGUgdGhlIHJlc291cmNlIGZyb20gdGhlIGByZW1vdGVVUkxgLlxuICAgKlxuICAgKiBAcmV0dXJucyBhIFByb21pc2UgcmVzb2x2aW5nIHRvIHRoZSB1cGRhdGVkIHJlc291cmNlLiBTaW1pbGFybHlcbiAgICogdG8gdGhlIGBsb2FkYCBtZXRob2QsIHRoZSBwcm9taXNlIGNhbiBmYWlsLCBhbmQgdGh1cyB5b3Ugc2hvdWxkXG4gICAqIGhhZCBhICoqY2F0Y2gqKiBjbG9zZSB0byB5b3VyIHByb21pc2UgdG8gaGFuZGxlIGFueSBleGNlcHRpb24uXG4gICAqL1xuICB1cGRhdGVGcm9tUmVtb3RlKCkge1xuICAgIGlmICh0aGlzLnJlbW90ZVVSTCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3VwZGF0ZUZyb21SZW1vdGU6IHJlbW90ZVVSTCBpcyB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlRnJvbVVSTCh0aGlzLnJlbW90ZVVSTCk7XG4gIH1cblxuICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBQcml2YXRlIEFQSVxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIHVwZGF0ZUZyb21VUkwodXJsKSB7XG4gICAgaWYgKHVybCkge1xuICAgICAgcmV0dXJuIGdldCh1cmwpXG4gICAgICAgIC50aGVuKHRoaXMucGVyc2lzdC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3VwZGF0ZUZyb21VUkw6IHVybCBpcyB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIHBlcnNpc3QoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlRGF0YShkYXRhKS50aGVuKHBhcnNlZCA9PlxuICAgICAgdGhpcy5zdG9yYWdlLnNhdmUoZGF0YSlcbiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoJ3Jlc291cmNlLWxvYWRlciBlcnJvciBvbiBwZXJzaXN0OiAnLCBlKSlcbiAgICAgIC50aGVuKCgpID0+IHBhcnNlZClcbiAgICApO1xuICB9XG5cbiAgcGFyc2VEYXRhKGRhdGEpIHtcbiAgICBpZiAodGhpcy5kYXRhVHlwZSA9PT0gJ2pzb24nKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBhcnNlZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChgcGFyc2VEYXRhOiBmYWlsZWQgd2l0aCBleGNlcHRpb24gJHtlfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGF0YSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFVwZGF0ZUNhbGxiYWNrSGFuZGxlciB7XG5cbiAgY29uc3RydWN0b3IocmVzb3VyY2VOYW1lLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZXNvdXJjZSA9IG5ldyBSZXNvdXJjZShyZXNvdXJjZU5hbWUsIG9wdGlvbnMpO1xuICAgIHRoaXMuY3JvbiA9IG9wdGlvbnMuY3JvbiB8fCBPTkVfSE9VUjtcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gb3B0aW9ucy51cGRhdGVJbnRlcnZhbCB8fCAxMCAqIE9ORV9NSU5VVEU7XG4gICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gdXRpbHMuc2V0SW50ZXJ2YWwoXG4gICAgICAgIHRoaXMudXBkYXRlRnJvbVJlbW90ZS5iaW5kKHRoaXMpLFxuICAgICAgICB0aGlzLnVwZGF0ZUludGVydmFsKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSByZXNvdXJjZSBob2xkIGJ5IGB0aGlzLnJlc291cmNlYC4gVGhpcyBjYW4gcmV0dXJuXG4gICAqIGEgZmFpbGVkIHByb21pc2UuIFBsZWFzZSByZWFkIGBSZXNvdXJjZS5sb2FkYCBkb2Mgc3RyaW5nIGZvclxuICAgKiBmdXJ0aGVyIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgbG9hZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZS5sb2FkKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcmVzb3VyY2UgZnJvbSByZW1vdGUgKG1heGltdW0gb25lIHRpbWUgcGVyIGBjcm9uYFxuICAgKiB0aW1lIGZyYW1lKS5cbiAgICpcbiAgICogQHJldHVybnMgYSBQcm9taXNlIHdoaWNoIG5ldmVyIGZhaWxzLCBzaW5jZSB0aGlzIHVwZGF0ZSB3aWxsIGJlXG4gICAqIHRyaWdnZXJlZCBieSBgc2V0SW50ZXJ2YWxgIGFuZCB0aHVzIHlvdSBjYW5ub3QgY2F0Y2guIElmIHRoZSB1cGRhdGVcbiAgICogZmFpbHMsIHRoZW4gdGhlIGNhbGxiYWNrIHdvbid0IGJlIGNhbGxlZC5cbiAgICovXG4gIHVwZGF0ZUZyb21SZW1vdGUoKSB7XG4gICAgY29uc3QgcHJlZiA9IGByZXNvdXJjZS1sb2FkZXIubGFzdFVwZGF0ZXMuJHt0aGlzLnJlc291cmNlLm5hbWUuam9pbignLycpfWA7XG4gICAgY29uc3QgbGFzdFVwZGF0ZSA9IE51bWJlcih1dGlscy5nZXRQcmVmKHByZWYsIDApKTtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG5cbiAgICBpZiAoY3VycmVudFRpbWUgPiB0aGlzLmNyb24gKyBsYXN0VXBkYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZS51cGRhdGVGcm9tUmVtb3RlKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB1dGlscy5zZXRQcmVmKHByZWYsIFN0cmluZyhEYXRlLm5vdygpKSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHRoaXMudHJpZ2dlckNhbGxiYWNrcy5iaW5kKHRoaXMpKVxuICAgICAgICAuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB1dGlscy5jbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxUaW1lcik7XG4gIH1cbn1cbiIsImltcG9ydCBDbGlxelNlY3VyZU1lc3NhZ2UgZnJvbSAnLi9tYWluJztcbmltcG9ydCBDcnlwdG9Xb3JrZXIgZnJvbSAnLi9jcnlwdG8td29ya2VyJztcblxuLy8gVXNpbmcgdGhpcyBmdW5jdGlvbiBpdCBpcyBlYXNpZXIgdG8gc2VlIGlmIHRoZSBwdXNoIG9mIG1lc3NhZ2UgZmFpbGVkLlxuY29uc3Qgc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbiAod3csIG0pIHtcbiAgdHJ5IHtcbiAgICB3dy5wb3N0TWVzc2FnZSh7XG4gICAgICBtc2c6IG0sXG4gICAgICB0eXBlOiAndGVsZW1ldHJ5JyxcbiAgICAgIHNvdXJjZW1hcDogQ2xpcXpTZWN1cmVNZXNzYWdlLnNvdXJjZU1hcCxcbiAgICAgIHVwazogQ2xpcXpTZWN1cmVNZXNzYWdlLnVQSyxcbiAgICAgIGRzcGs6IENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLLFxuICAgICAgc3NwazogQ2xpcXpTZWN1cmVNZXNzYWdlLnNlY3VyZUxvZ2dlcixcbiAgICAgIHJvdXRldGFibGU6IENsaXF6U2VjdXJlTWVzc2FnZS5yb3V0ZVRhYmxlLFxuICAgICAgbG9jYWxUZW1wb3JhbFVuaXE6IENsaXF6U2VjdXJlTWVzc2FnZS5sb2NhbFRlbXBvcmFsVW5pcSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59O1xuXG4vKlxuVGhpcyB3aWxsIHNlbmQgdGhlIG1lc3NhZ2VzIGluc2lkZSB0aGUgdHJrIG9uZSBhdCBhIHRpbWUuIFRoaXMgdXNlcyBhIGdlbmVyYXRvciBleHByZXNzaW9uLlxuXG5XaWxsIHJldHVybiBhIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gYW4gYXJyYXksIG9uZSBmb3IgZWFjaCBzZW50IG1lc3NhZ2U6XG5pdHMgdmFsdWUgd2lsbCBiZSBudWxsIGlmIGV2ZXJ5dGhpbmcgd2FzIG9rLFxuYW5kIGEgc3RyaW5nIGluZGljYXRpbmcgdGhlIGVycm9yIG1lc3NhZ2Ugb3RoZXJ3aXNlICh1c2VmdWwgZm9yIHRlc3RpbmcpXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNKG0sIHNlbnQgPSBbXSkge1xuICBjb25zdCBzZW5kTWVzc2FnZVdDcnlwdG8gPSBuZXcgQ3J5cHRvV29ya2VyKCk7XG4gIHNlbmRNZXNzYWdlKHNlbmRNZXNzYWdlV0NyeXB0bywgbSk7XG5cbiAgc2VuZE1lc3NhZ2VXQ3J5cHRvLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgaWYgKGUuZGF0YS50eXBlID09PSAndGVsZW1ldHJ5Jykge1xuICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLmxvY2FsVGVtcG9yYWxVbmlxID0gZS5kYXRhLmxvY2FsVGVtcG9yYWxVbmlxO1xuICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnN0b3JhZ2Uuc2F2ZUxvY2FsQ2hlY2tUYWJsZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRNc2cgPSBDbGlxelNlY3VyZU1lc3NhZ2UubmV4dE1lc3NhZ2UoKTtcbiAgICBpZiAobmV4dE1zZykge1xuICAgICAgc2VuZE1lc3NhZ2Uoc2VuZE1lc3NhZ2VXQ3J5cHRvLCBuZXh0TXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUXVldWUgaXMgZW1wdHkgaGVuY2UgZHVtcCB0aGUgbG9jYWwgdGVtcCBxdWV1ZSB0byBkaXNrLlxuICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnN0b3JhZ2Uuc2F2ZUxvY2FsQ2hlY2tUYWJsZSgpO1xuICAgICAgc2VuZE1lc3NhZ2VXQ3J5cHRvLnRlcm1pbmF0ZSgpO1xuICAgICAgcmV0dXJuIHNlbnQ7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB1dGlscyBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSAnLi4vY29yZS9odHRwJztcbmltcG9ydCBDbGlxelNlY3VyZU1lc3NhZ2UgZnJvbSAnLi9tYWluJztcblxuY29uc3QgT0ZGRVJfVEVMRU1FVFJZID0gJ2h0dHBzOi8vb2ZmZXJzLWFwaS5jbGlxei5jb20vYXBpL3YxL3NhdmVzaWduYWwnO1xuY29uc3QgT0ZGRVJfVEVMRU1FVFJZX1BSRUZJWCA9ICdodHRwczovL29mZmVycy1hcGkuY2xpcXouY29tJ1xuXG5sZXQgcHJveHlIdHRwSGFuZGxlciA9IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gb3ZlclJpZGVDbGlxelJlc3VsdHMoKSB7XG4gIGlmICh1dGlscy5nZXRQcmVmKCdwcm94eU5ldHdvcmsnLCB0cnVlKSA9PT0gZmFsc2UpIHJldHVybjtcblxuICBpZiAoIXByb3h5SHR0cEhhbmRsZXIpIHByb3h5SHR0cEhhbmRsZXIgPSBodHRwLmRlZmF1bHRIdHRwSGFuZGxlcjtcblxuICBmdW5jdGlvbiBodHRwSGFuZGxlcihtZXRob2QsIHVybCwgY2FsbGJhY2ssIG9uZXJyb3IsIHRpbWVvdXQsIGRhdGEsIHN5bmMpIHtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgodXRpbHMuUkVTVUxUU19QUk9WSURFUikgJiZcbiAgICAgICAgdXRpbHMuZ2V0UHJlZignaHBuLXF1ZXJ5djInLCBmYWxzZSkpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gdXJsLnJlcGxhY2UoKHV0aWxzLlJFU1VMVFNfUFJPVklERVIpLCAnJyk7XG4gICAgICBjb25zdCB1aWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCk7XG4gICAgICBDbGlxelNlY3VyZU1lc3NhZ2UucXVlcmllc0lEW3VpZF0gPSBjYWxsYmFjaztcbiAgICAgIENsaXF6U2VjdXJlTWVzc2FnZS53Q3J5cHRvLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgbXNnOiB7IGFjdGlvbjogJ2luc3RhbnQnLFxuICAgICAgICAgICAgICB0eXBlOiAnY2xpcXonLFxuICAgICAgICAgICAgICB0czogJycsXG4gICAgICAgICAgICAgIHZlcjogJzEuNScsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHF1ZXJ5LFxuICAgICAgICAgICAgICBycDogdXRpbHMuUkVTVUxUU19QUk9WSURFUixcbiAgICAgICAgfSxcbiAgICAgICAgdWlkOiB1aWQsXG4gICAgICAgIHR5cGU6ICdpbnN0YW50JyxcbiAgICAgICAgc291cmNlbWFwOiBDbGlxelNlY3VyZU1lc3NhZ2Uuc291cmNlTWFwLFxuICAgICAgICB1cGs6IENsaXF6U2VjdXJlTWVzc2FnZS51UEssXG4gICAgICAgIGRzcGs6IENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLLFxuICAgICAgICBzc3BrOiBDbGlxelNlY3VyZU1lc3NhZ2Uuc2VjdXJlTG9nZ2VyLFxuICAgICAgICBxdWVyeVByb3h5VXJsOiBDbGlxelNlY3VyZU1lc3NhZ2UucXVlcnlQcm94eUlQLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHVybC5zdGFydHNXaXRoKHV0aWxzLlJFU1VMVFNfUFJPVklERVJfTE9HKSkge1xuICAgICAgY29uc3QgcXVlcnkgPSB1cmwucmVwbGFjZSgodXRpbHMuUkVTVUxUU19QUk9WSURFUl9MT0cpLCAnJyk7XG4gICAgICBjb25zdCB1aWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCk7XG4gICAgICBDbGlxelNlY3VyZU1lc3NhZ2UucXVlcmllc0lEW3VpZF0gPSBjYWxsYmFjaztcbiAgICAgIENsaXF6U2VjdXJlTWVzc2FnZS53Q3J5cHRvLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgbXNnOiB7IGFjdGlvbjogJ2V4dGVuc2lvbi1yZXN1bHQtdGVsZW1ldHJ5JyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NsaXF6JyxcbiAgICAgICAgICAgICAgdHM6ICcnLFxuICAgICAgICAgICAgICB2ZXI6ICcxLjUnLFxuICAgICAgICAgICAgICBwYXlsb2FkOiBxdWVyeSxcbiAgICAgICAgfSxcbiAgICAgICAgdWlkOiB1aWQsXG4gICAgICAgIHR5cGU6ICdpbnN0YW50JyxcbiAgICAgICAgc291cmNlbWFwOiBDbGlxelNlY3VyZU1lc3NhZ2Uuc291cmNlTWFwLFxuICAgICAgICB1cGs6IENsaXF6U2VjdXJlTWVzc2FnZS51UEssXG4gICAgICAgIGRzcGs6IENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLLFxuICAgICAgICBzc3BrOiBDbGlxelNlY3VyZU1lc3NhZ2Uuc2VjdXJlTG9nZ2VyLFxuICAgICAgICBxdWVyeVByb3h5VXJsOiBDbGlxelNlY3VyZU1lc3NhZ2UucXVlcnlQcm94eUlQLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHVybCA9PT0gdXRpbHMuU0FGRV9CUk9XU0lORykge1xuICAgICAgY29uc3QgYmF0Y2ggPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgaWYgKGJhdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYmF0Y2guZm9yRWFjaChlYWNoTXNnID0+IHtcbiAgICAgICAgICBDbGlxelNlY3VyZU1lc3NhZ2UudGVsZW1ldHJ5KGVhY2hNc2cpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHsgJ3Jlc3BvbnNlJzogJ3tcInN1Y2Nlc3NcIjp0cnVlfScgfSk7XG4gICAgfSBlbHNlIGlmICh1cmwuc3RhcnRzV2l0aChPRkZFUl9URUxFTUVUUllfUFJFRklYKSkge1xuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGF0IENsaXF6U2VjdXJlTWVzc2FnZS5xdWVyeVByb3h5SVAgZXhpc3RzLFxuICAgICAgLy8gb3RoZXJ3aXNlLCBzZW5kaW5nIHRoZSBtZXNzYWdlIHdpbGwgc2lsZW50bHkgZmFpbC5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgcXVlcnlQcm94eUlQIGNvbnRhaW5zIHRoZSBwcm94eSdzIHZlcmlmeSBlbmRwb2ludFxuICAgICAgLy8gKGUuZy4sIFwiaHR0cDovLzxwcm94eS1pcD4vdmVyaWZ5XCIpLlxuICAgICAgY29uc3QgcXVlcnlQcm94eVVybCA9IENsaXF6U2VjdXJlTWVzc2FnZS5wcm94eUlQKCk7XG4gICAgICBpZiAoIXF1ZXJ5UHJveHlVcmwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdGYWlsZWQgdG8gc2VuZCBtZXNzYWdlLCBhcyB0aGUgbGlzdCBvZiBwcm94aWVzIGlzIGVtcHR5Jyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHF1ZXJ5ID0gdXJsLnJlcGxhY2UoT0ZGRVJfVEVMRU1FVFJZX1BSRUZJWCwgJycpO1xuICAgICAgY29uc3QgdWlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDApO1xuICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnF1ZXJpZXNJRFt1aWRdID0gY2FsbGJhY2s7XG5cbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7XG4gICAgICAgIG1zZzogeyBhY3Rpb246ICdvZmZlcnMtYXBpJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2NsaXF6JyxcbiAgICAgICAgICAgICAgdHM6ICcnLFxuICAgICAgICAgICAgICB2ZXI6ICcxLjUnLFxuICAgICAgICAgICAgICBwYXlsb2FkOiBxdWVyeSxcbiAgICAgICAgICAgICAgcnA6IE9GRkVSX1RFTEVNRVRSWV9QUkVGSVgsXG4gICAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgIH0sXG4gICAgICAgIHVpZDogdWlkLFxuICAgICAgICB0eXBlOiAnaW5zdGFudCcsXG4gICAgICAgIHNvdXJjZW1hcDogQ2xpcXpTZWN1cmVNZXNzYWdlLnNvdXJjZU1hcCxcbiAgICAgICAgdXBrOiBDbGlxelNlY3VyZU1lc3NhZ2UudVBLLFxuICAgICAgICBkc3BrOiBDbGlxelNlY3VyZU1lc3NhZ2UuZHNQSyxcbiAgICAgICAgc3NwazogQ2xpcXpTZWN1cmVNZXNzYWdlLnNlY3VyZUxvZ2dlcixcbiAgICAgICAgcXVlcnlQcm94eVVybDogcXVlcnlQcm94eVVybCxcbiAgICAgIH07XG4gICAgICBDbGlxelNlY3VyZU1lc3NhZ2Uud0NyeXB0by5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJveHlIdHRwSGFuZGxlci5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGh0dHAub3ZlcnJpZGVIdHRwSGFuZGxlcihodHRwSGFuZGxlcik7XG4gIGh0dHAuYWRkQ29tcHJlc3Npb25FeGNsdXNpb24odXRpbHMuU0FGRV9CUk9XU0lORyk7XG5cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IHBvc2l0aW9uIH0gPSB7IHBvc2l0aW9uOiAwIH0pIHtcbiAgfVxuXG4gIGluaXQoKSB7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSBhbGwgcHJveHkgcnVsZXMgcHJvdmlkZWQgYnkgdGhpcyBpbnN0YW5jZVxuICAgKiBAbWV0aG9kIGRlc3Ryb3lcbiAgICovXG4gIHVubG9hZCgpIHtcbiAgfVxuXG4gIC8vIFRPRE86IGFkZCBkb2N1bWVudGF0aW9uXG4gIG5ld1Byb3h5KC4uLmFyZ3MpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZm94IHByb3h5IEFQSSBlbnRyeSBwb2ludCAtIGNhbGxlZCBvbiBuZXcgaHR0cChzKSBjb25uZWN0aW9uLlxuICAgKiBAbWV0aG9kIGFwcGx5RmlsdGVyXG4gICAqIEBwYXJhbSBwcHNcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gZGVmYXVsdFByb3h5XG4gICAqIEByZXR1cm5zIGFQcm94eVxuICAgKi9cbiAgYXBwbHlGaWx0ZXIocHBzLCB1cmwsIGRlZmF1bHRQcm94eSkge1xuICB9XG59XG4iLCJpbXBvcnQgQ2xpcXpTZWN1cmVNZXNzYWdlIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgY29uc29sZSBmcm9tICcuLi9jb3JlL2NvbnNvbGUnO1xuXG4vKlxuRnVuY3Rpb24gdG8gY3JlYXRlIGh0dHAgdXJsXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUh0dHBVcmwoaG9zdCkge1xuICByZXR1cm4gJ2h0dHA6Ly8nICsgaG9zdCArICcvdmVyaWZ5Jztcbn1cblxuLypcbkNvbnZlcnRzIGdpdmVuIGFycmF5IHRvIGdlbmVyYXRvciBsaWtlIG9iamVjdC5cbiovXG5leHBvcnQgZnVuY3Rpb24gdHJrR2VuKF90cmspIHtcbiAgY29uc3QgdHJrID0gX3RyaztcbiAgbGV0IGlkeCA9IC0xO1xuICByZXR1cm4ge1xuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgaWR4ICs9IDE7XG4gICAgICBpZiAoaWR4IDwgdHJrLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBpZHgsIC8vIFJldHVybiB0aGUgZmlyc3QgeWllbGRlZCB2YWx1ZS5cbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCwgLy8gUmV0dXJuIHVuZGVmaW5lZC5cbiAgICAgICAgICBkb25lOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lbG9jYWxUZW1wb3JhbFVuaXEoKSB7XG4gIGlmIChDbGlxelNlY3VyZU1lc3NhZ2UubG9jYWxUZW1wb3JhbFVuaXEgJiYgT2JqZWN0LmtleXMoQ2xpcXpTZWN1cmVNZXNzYWdlLmxvY2FsVGVtcG9yYWxVbmlxKS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgY3VyclRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGxldCBwaSA9IDA7XG4gICAgT2JqZWN0LmtleXMoQ2xpcXpTZWN1cmVNZXNzYWdlLmxvY2FsVGVtcG9yYWxVbmlxKS5mb3JFYWNoKCBlID0+IHtcbiAgICAgIGNvbnN0IGQgPSBDbGlxelNlY3VyZU1lc3NhZ2UubG9jYWxUZW1wb3JhbFVuaXFbZV0udHM7XG4gICAgICBjb25zdCBkaWZmID0gKGN1cnJUaW1lIC0gZCk7XG4gICAgICBpZiAoZGlmZiA+PSAoMjQgKiA2MCAqIDYwICogMTAwMCkpIHtcbiAgICAgICAgZGVsZXRlIENsaXF6U2VjdXJlTWVzc2FnZS5sb2NhbFRlbXBvcmFsVW5pcVtlXTtcbiAgICAgICAgcGkgKz0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvKlxuICAgIGlmKENsaXF6SHVtYW5XZWIuYWN0aW9uU3RhdHMpIHtcbiAgICAgICAgY29uc3QgaXRlbXNMb2NhbFZhbGlkYXRpb24gPSBPYmplY3Qua2V5cyhDbGlxelNlY3VyZU1lc3NhZ2UubG9jYWxUZW1wb3JhbFVuaXEpLmxlbmd0aDtcbiAgICAgICAgQ2xpcXpIdW1hbldlYi5hY3Rpb25TdGF0cy5pdGVtc0xvY2FsVmFsaWRhdGlvbiA9IGl0ZW1zTG9jYWxWYWxpZGF0aW9uO1xuICAgIH1cbiAgICAqL1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG4iLCJpbXBvcnQgQ2xpcXpVdGlscyBmcm9tICcuLi9jb3JlL3V0aWxzJztcbmltcG9ydCBjb25zb2xlIGZyb20gJy4uL2NvcmUvY29uc29sZSc7XG5pbXBvcnQgUHJveHlGaWx0ZXIgZnJvbSAnLi4vcGxhdGZvcm0vcHJveHktZmlsdGVyJztcbmltcG9ydCB7IGdldFJhbmRvbUludEluY2x1c2l2ZSB9ZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgQ2xpcXpTZWN1cmVNZXNzYWdlIGZyb20gJy4vbWFpbic7XG4vKlxuUGlja2VkIHVwIGZyb20gdW5ibG9jayBwcm94eS5lc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBQcm94eUZpbHRlciB7XG4gIC8qKlxuICAqIFdyYXBwZXIgZm9yIHJ1bGUtYmFzZWQgdXJsIHByb3h5aW5nOiBpbXBsZW1lbnRhdGlvbiBmb3IgRmlyZWZveFxuICAqIEBjbGFzcyBQcm94eVxuICAqIEBuYW1lc3BhY2UgdW5ibG9ja1xuICAqIEBjb25zdHJ1Y3RvclxuICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWV0aG9kID0gXCJzb2Nrc1wiO1xuICAgIHRoaXMucG9ydCA9IDkwMDQ7XG4gIH1cblxuICBzaG91bGRQcm94eSh1cmwpIHtcbiAgICBjb25zdCB3aW5kb3cgPSBDbGlxelV0aWxzLmdldFdpbmRvdygpO1xuICAgIHJldHVybiAodXJsLnNjaGVtZSA9PT0gXCJodHRwc1wiKSAmJlxuICAgICAgKENsaXF6U2VjdXJlTWVzc2FnZS5zZXJ2aWNlc1RvUHJveHkuaW5kZXhPZih1cmwuaG9zdCkgPiAtMSkgJiZcbiAgICAgIChcbiAgICAgICAgQ2xpcXpVdGlscy5nZXRQcmVmKCdocG4tcXVlcnknLCBmYWxzZSkgfHxcbiAgICAgICAgQ2xpcXpVdGlscy5pc09uUHJpdmF0ZVRhYih3aW5kb3cpXG4gICAgICApO1xuICB9XG5cbiAgcHJveHkoKSB7XG4gICAgaWYgKCFDbGlxelNlY3VyZU1lc3NhZ2UucHJveHlMaXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByb3h5SWR4ID0gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKDAsMyk7XG4gICAgY29uc3QgcHJveHlJUCA9IENsaXF6U2VjdXJlTWVzc2FnZS5wcm94eUxpc3RbcHJveHlJZHhdO1xuICAgIGNvbnNvbGUubG9nKFwiUHJveHlpbmcgUXVlcnk6IFwiICsgcHJveHlJUCk7XG5cbiAgICBpZiAoQ2xpcXpTZWN1cmVNZXNzYWdlLnByb3h5SW5mb09ialtwcm94eUlQXSkge1xuICAgICAgcmV0dXJuIENsaXF6U2VjdXJlTWVzc2FnZS5wcm94eUluZm9PYmpbcHJveHlJUF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9iID0gdGhpcy5uZXdQcm94eSh0aGlzLm1ldGhvZCwgcHJveHlJUCwgdGhpcy5wb3J0LCBudWxsLCAxMDAwLCBudWxsKTtcbiAgICAgIENsaXF6U2VjdXJlTWVzc2FnZS5wcm94eUluZm9PYmpbcHJveHlJUF0gPSBvYjtcbiAgICAgIHJldHVybiBvYjtcbiAgICB9XG4gIH1cbn07XG4iLCIvKlxuIFRoaXMgbW9kdWxlIGlzIHVzZWQgZm9yIHNlbmRpbmcgdGhlIGV2ZW50cyBmb3IgcHVycG9zZSBvZlxuIGh1bWFuLXdlYiwgYW50aS10cmFja2luZyB2aWEgYSBzZWN1cmUgY2hhbm5lbC5cbiovXG5cbmltcG9ydCBTdG9yYWdlIGZyb20gJy4uL3BsYXRmb3JtL2hwbi9zdG9yYWdlJztcbmltcG9ydCBDbGlxelV0aWxzIGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgUmVzb3VyY2VMb2FkZXIgZnJvbSAnLi4vY29yZS9yZXNvdXJjZS1sb2FkZXInO1xuaW1wb3J0IHsgc2VuZE0gfSBmcm9tICcuL3NlbmQtbWVzc2FnZSc7XG5pbXBvcnQgKiBhcyBocG5VdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG92ZXJSaWRlQ2xpcXpSZXN1bHRzIH0gZnJvbSAnLi9odHRwLWhhbmRsZXItcGF0Y2gnO1xuaW1wb3J0IFByb3h5RmlsdGVyIGZyb20gJy4vcHJveHktZmlsdGVyJztcbmltcG9ydCBDcnlwdG9Xb3JrZXIgZnJvbSAnLi9jcnlwdG8td29ya2VyJztcblxuLyogR2xvYmFsIHZhcmlhYmxlc1xuKi9cbmxldCBwcm94eUNvdW50ZXIgPSAwO1xuXG5jb25zdCBDbGlxelNlY3VyZU1lc3NhZ2UgPSB7XG4gIFZFUlNJT046ICcwLjEnLFxuICBMT0dfS0VZOiAnc2VjdXJlbWVzc2FnZScsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY291bnRlcjogMCxcbiAgc2VjdXJlTG9nZ2VyOiB7fSxcbiAgdVBLOiB7fSxcbiAgZHNQSzoge30sXG4gIHJvdXRlVGFibGU6IG51bGwsXG4gIHJvdXRlVGFibGVMb2FkZXI6IG51bGwsXG4gIFJTQUtleTogJycsXG4gIGV2ZW50SUQ6IHt9LFxuICBzb3VyY2VNYXA6IG51bGwsXG4gIHNvdXJjZU1hcExvYWRlcjogbnVsbCxcbiAgdG11bHQ6IDQsXG4gIHRwYWNlOiAyNTAsXG4gIFNPVVJDRV9NQVBfUFJPVklERVI6IGNvbmZpZy5zZXR0aW5ncy5FTkRQT0lOVF9TT1VSQ0VfTUFQX1BST1ZJREVSLFxuICBMT09LVVBfVEFCTEVfUFJPVklERVI6IGNvbmZpZy5zZXR0aW5ncy5FTkRQT0lOVF9MT09LVVBfVEFCTEVfUFJPVklERVIsXG4gIEtFWVNfUFJPVklERVI6IGNvbmZpZy5zZXR0aW5ncy5FTkRQT0lOVF9LRVlTX1BST1ZJREVSLFxuICBwcm94eUxpc3Q6IG51bGwsXG4gIHByb3h5TGlzdExvYWRlcjogbnVsbCxcbiAgcHJveHlTdGF0czoge30sXG4gIFBST1hZX0xJU1RfUFJPVklERVI6IGNvbmZpZy5zZXR0aW5ncy5FTkRQT0lOVF9QUk9YWV9MSVNUX1BST1ZJREVSLFxuICBCTElORF9TSUdORVI6IGNvbmZpZy5zZXR0aW5ncy5FTkRQT0lOVF9CTElORF9TSUdORVIsXG4gIFVTRVJfUkVHOiBjb25maWcuc2V0dGluZ3MuRU5EUE9JTlRfVVNFUl9SRUcsXG4gIGxvY2FsVGVtcG9yYWxVbmlxOiBudWxsLFxuICB3Q3J5cHRvOiBudWxsLFxuICBxdWVyaWVzSUQ6IHt9LFxuICBzZXJ2aWNlc1RvUHJveHkgOiBbXCJhcGkuY2xpcXouY29tXCIsIFwiYW50aXBoaXNoaW5nLmNsaXF6LmNvbVwiXSxcbiAgcHJveHlJbmZvT2JqOiB7fSxcbiAgcXVlcnlQcm94eUZpbHRlcjogbnVsbCxcbiAgcGFjZW1ha2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLmNvdW50ZXIgKz0gMTtcblxuICAgIGlmICgoQ2xpcXpTZWN1cmVNZXNzYWdlLmNvdW50ZXIgLyBDbGlxelNlY3VyZU1lc3NhZ2UudG11bHQpICUgMTAgPT09IDApIHtcbiAgICAgIGlmIChDbGlxelNlY3VyZU1lc3NhZ2UuZGVidWcpIHtcbiAgICAgICAgQ2xpcXpVdGlscy5sb2coJ1BhY2VtYWtlcjogJyArIENsaXF6U2VjdXJlTWVzc2FnZS5jb3VudGVyIC8gQ2xpcXpTZWN1cmVNZXNzYWdlLnRtdWx0LCBDbGlxelNlY3VyZU1lc3NhZ2UuTE9HX0tFWSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKChDbGlxelNlY3VyZU1lc3NhZ2UuY291bnRlciAvIENsaXF6U2VjdXJlTWVzc2FnZS50bXVsdCkgJSA1ID09PSAwKSB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XG5cblxuICAgICAgaWYgKCFDbGlxelV0aWxzLmdldFdpbmRvdygpIHx8ICFDbGlxelV0aWxzLmdldFdpbmRvdygpLkNMSVFaIHx8ICFDbGlxelV0aWxzLmdldFdpbmRvdygpLkNMSVFaLlVJKSByZXR1cm47XG4gICAgICBjb25zdCB0RGlmZiA9IGN1cnJlbnRUaW1lIC0gQ2xpcXpVdGlscy5nZXRXaW5kb3coKS5DTElRWi5VSS5sYXN0SW5wdXRUaW1lO1xuXG4gICAgICBpZiAodERpZmYgPiAwICYmIHREaWZmID4gKDEwMDAgKiAyICogMSkpIHtcbiAgICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnByb3h5SVAoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCghQ2xpcXpTZWN1cmVNZXNzYWdlLnVQSy5wdWJsaWNLZXlCNjQpIHx8ICghQ2xpcXpTZWN1cmVNZXNzYWdlLnVQSy5wcml2YXRlS2V5KSkge1xuICAgICAgICBDbGlxelNlY3VyZU1lc3NhZ2UucmVnaXN0ZXJVc2VyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKChDbGlxelNlY3VyZU1lc3NhZ2UuY291bnRlciAvIENsaXF6U2VjdXJlTWVzc2FnZS50bXVsdCkgJSAoNjAgKiAxNSAqIDEpID09PSAwKSB7XG4gICAgICBpZiAoQ2xpcXpTZWN1cmVNZXNzYWdlLmRlYnVnKSB7XG4gICAgICAgIENsaXF6VXRpbHMubG9nKCdDbGVhbiBsb2NhbCB0ZW1wIHF1ZXVlJywgQ2xpcXpTZWN1cmVNZXNzYWdlLkxPR19LRVkpO1xuICAgICAgfVxuICAgICAgaHBuVXRpbHMucHJ1bmVsb2NhbFRlbXBvcmFsVW5pcSgpO1xuICAgIH1cbiAgfSxcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyB0ZWxlbWV0cnksIFBSRUZFUiBOT1QgVE8gU0hBUkUgV0lUSCBDbGlxelV0aWxzIGZvciBzYWZldHksIGJsYXRhbnQgcmlwLW9mZiB0aG91Z2hcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICB0cms6IFtdLFxuICB0cmtUaW1lcjogbnVsbCxcbiAgdGVsZW1ldHJ5OiBmdW5jdGlvbihtc2csIGluc3RhbnRQdXNoKSB7XG4gICAgaWYgKCFDbGlxelNlY3VyZU1lc3NhZ2UgfHwgLy8gbWlnaHQgYmUgY2FsbGVkIGFmdGVyIHRoZSBtb2R1bGUgZ2V0cyB1bmxvYWRlZFxuICAgICAgICBDbGlxelV0aWxzLmdldFByZWYoJ2RudCcsIGZhbHNlKSB8fFxuICAgICAgICBDbGlxelV0aWxzLmlzUHJpdmF0ZShDbGlxelV0aWxzLmdldFdpbmRvdygpKSkgcmV0dXJuO1xuXG4gICAgaWYgKG1zZykgQ2xpcXpTZWN1cmVNZXNzYWdlLnRyay5wdXNoKG1zZyk7XG4gICAgQ2xpcXpVdGlscy5jbGVhclRpbWVvdXQoQ2xpcXpTZWN1cmVNZXNzYWdlLnRya1RpbWVyKTtcbiAgICBpZiAoaW5zdGFudFB1c2ggfHwgQ2xpcXpTZWN1cmVNZXNzYWdlLnRyay5sZW5ndGggJSAyMCA9PT0gMCkge1xuICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnB1c2hUZWxlbWV0cnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnRya1RpbWVyID0gQ2xpcXpVdGlscy5zZXRUaW1lb3V0KENsaXF6U2VjdXJlTWVzc2FnZS5wdXNoVGVsZW1ldHJ5LCAxMDAwMCk7XG4gICAgfVxuICB9LFxuICBfdGVsZW1ldHJ5X3JlcTogbnVsbCxcbiAgX3RlbGVtZXRyeV9zZW5kaW5nOiBbXSxcbiAgdGVsZW1ldHJ5X01BWF9TSVpFOiA1MDAsXG4gIHByZXZpb3VzRGF0YVBvc3Q6IG51bGwsXG4gIHB1c2hNZXNzYWdlIDogW10sXG4gIHJvdXRlSGFzaFRhYmxlOiBudWxsLFxuICBlYWNlbWFrZXJJZDogbnVsbCxcbiAgcXVlcnlQcm94eUlQOiBudWxsLFxuICBwZXJmb3JtYW5jZTogbnVsbCxcbiAgcHVzaFRlbGVtZXRyeTogZnVuY3Rpb24oKSB7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLl90ZWxlbWV0cnlfc2VuZGluZyA9IENsaXF6U2VjdXJlTWVzc2FnZS50cmsuc3BsaWNlKDApO1xuICAgIENsaXF6U2VjdXJlTWVzc2FnZS5wdXNoTWVzc2FnZSA9IGhwblV0aWxzLnRya0dlbihDbGlxelNlY3VyZU1lc3NhZ2UuX3RlbGVtZXRyeV9zZW5kaW5nKTtcbiAgICBjb25zdCBuZXh0TXNnID0gQ2xpcXpTZWN1cmVNZXNzYWdlLm5leHRNZXNzYWdlKCk7XG4gICAgaWYgKG5leHRNc2cpIHtcbiAgICAgIHJldHVybiBzZW5kTShuZXh0TXNnKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gIH0sXG4gIG5leHRNZXNzYWdlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoQ2xpcXpTZWN1cmVNZXNzYWdlLl90ZWxlbWV0cnlfc2VuZGluZy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gQ2xpcXpTZWN1cmVNZXNzYWdlLl90ZWxlbWV0cnlfc2VuZGluZ1tDbGlxelNlY3VyZU1lc3NhZ2UucHVzaE1lc3NhZ2UubmV4dCgpLnZhbHVlXTtcbiAgICB9XG4gIH0sXG4gIGluaXRBdFdpbmRvdzogZnVuY3Rpb24od2luZG93KSB7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIERvaW5nIGl0IGhlcmUsIGJlY2F1c2UgdGhpcyBsaWIuIHVzZXMgbmF2aWdhdG9yIGFuZCB3aW5kb3cgb2JqZWN0cy5cbiAgICAvLyBCZXR0ZXIgbWV0aG9kIGFwcHJpY2lhdGVkLlxuXG4gICAgaWYgKENsaXF6U2VjdXJlTWVzc2FnZS5wYWNlbWFrZXJJZCA9PSBudWxsKSB7XG4gICAgICBDbGlxelNlY3VyZU1lc3NhZ2UucGFjZW1ha2VySWQgPSBDbGlxelV0aWxzLnNldEludGVydmFsKENsaXF6U2VjdXJlTWVzc2FnZS5wYWNlbWFrZXIuYmluZCh0aGlzKSwgQ2xpcXpTZWN1cmVNZXNzYWdlLnRwYWNlLCBudWxsKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBkbyBub3QgcGFzcyB0aGlzIHRvIHN0b3JhZ2VcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh0aGlzKTtcblxuICAgIGlmICghQ2xpcXpTZWN1cmVNZXNzYWdlLmxvY2FsVGVtcG9yYWxVbmlxKSB0aGlzLnN0b3JhZ2UubG9hZExvY2FsQ2hlY2tUYWJsZSgpO1xuXG4gICAgLy8gTG9hZCBzb3VyY2UgbWFwLiBVcGRhdGUgaXQgb25jZSBhbiBob3VyLlxuICAgIHRoaXMuc291cmNlTWFwTG9hZGVyID0gbmV3IFJlc291cmNlTG9hZGVyKFxuICAgICAgICBbXCJocG5cIixcInNvdXJjZW1hcC5qc29uXCJdLFxuICAgICAgICB7XG4gICAgICAgICAgcmVtb3RlVVJMOiBDbGlxelNlY3VyZU1lc3NhZ2UuU09VUkNFX01BUF9QUk9WSURFUlxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuc291cmNlTWFwTG9hZGVyLmxvYWQoKS50aGVuKCBlID0+IHtcbiAgICAgIENsaXF6U2VjdXJlTWVzc2FnZS5zb3VyY2VNYXAgPSBlO1xuICAgIH0pXG5cbiAgICB0aGlzLnNvdXJjZU1hcExvYWRlci5vblVwZGF0ZShlID0+IENsaXF6U2VjdXJlTWVzc2FnZS5zb3VyY2VNYXAgPSBlKTtcblxuICAgIC8vIExvYWQgcHJveHkgbGlzdC4gVXBkYXRlIGV2ZXJ5IDUgbWludXRlcy5cbiAgICB0aGlzLnByb3h5TGlzdExvYWRlciA9IG5ldyBSZXNvdXJjZUxvYWRlcihcbiAgICAgICAgW1wiaHBuXCIsXCJwcm94eWxpc3QuanNvblwiXSxcbiAgICAgICAge1xuICAgICAgICAgIHJlbW90ZVVSTDogQ2xpcXpTZWN1cmVNZXNzYWdlLlBST1hZX0xJU1RfUFJPVklERVIsXG4gICAgICAgICAgY3JvbjogMSAqIDUgKiA2MCAqIDEwMDAsXG4gICAgICAgICAgdXBkYXRlSW50ZXJ2YWw6IDEgKiA1ICogNjAgKiAxMDAwLFxuICAgICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMucHJveHlMaXN0TG9hZGVyLmxvYWQoKS50aGVuKCBlID0+IHtcbiAgICAgIENsaXF6U2VjdXJlTWVzc2FnZS5wcm94eUxpc3QgPSBlO1xuICAgIH0pXG5cbiAgICB0aGlzLnByb3h5TGlzdExvYWRlci5vblVwZGF0ZShlID0+IENsaXF6U2VjdXJlTWVzc2FnZS5wcm94eUxpc3QgPSBlKTtcblxuICAgIC8vIExvYWQgbG9va3VwdGFibGUuIFVwZGF0ZSBldmVyeSA1IG1pbnV0ZXMuXG4gICAgdGhpcy5yb3V0ZVRhYmxlTG9hZGVyID0gbmV3IFJlc291cmNlTG9hZGVyKFxuICAgICAgICBbXCJocG5cIixcInJvdXRlVGFibGUuanNvblwiXSxcbiAgICAgICAge1xuICAgICAgICAgIHJlbW90ZVVSTDogQ2xpcXpTZWN1cmVNZXNzYWdlLkxPT0tVUF9UQUJMRV9QUk9WSURFUixcbiAgICAgICAgICBjcm9uOiAxICogNSAqIDYwICogMTAwMCxcbiAgICAgICAgICB1cGRhdGVJbnRlcnZhbDogMSAqIDUgKiA2MCAqIDEwMDAsXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5yb3V0ZVRhYmxlTG9hZGVyLmxvYWQoKS50aGVuKCBlID0+IHtcbiAgICAgIENsaXF6U2VjdXJlTWVzc2FnZS5yb3V0ZVRhYmxlID0gZTtcbiAgICB9KVxuXG4gICAgdGhpcy5yb3V0ZVRhYmxlTG9hZGVyLm9uVXBkYXRlKGUgPT4gQ2xpcXpTZWN1cmVNZXNzYWdlLnJvdXRlVGFibGUgPSBlKTtcblxuICAgIENsaXF6U2VjdXJlTWVzc2FnZS5kc1BLLnB1YktleUI2NCA9IGNvbmZpZy5zZXR0aW5ncy5LRVlfRFNfUFVCS0VZO1xuICAgIENsaXF6U2VjdXJlTWVzc2FnZS5zZWN1cmVMb2dnZXIucHVibGljS2V5QjY0ID0gY29uZmlnLnNldHRpbmdzLktFWV9TRUNVUkVfTE9HR0VSX1BVQktFWTtcblxuICAgIGlmIChDbGlxelV0aWxzLmdldFByZWYoJ3Byb3h5TmV0d29yaycsIHRydWUpKSB7XG4gICAgICBvdmVyUmlkZUNsaXF6UmVzdWx0cygpO1xuICAgIH1cbiAgICAvLyBDaGVjayB1c2VyLWtleSBwcmVzZW50IG9yIG5vdC5cbiAgICBDbGlxelNlY3VyZU1lc3NhZ2UucmVnaXN0ZXJVc2VyKCk7XG5cbiAgICAvLyBSZWdpc3RlciBwcm94eSBmciBxdWVyeS5cblxuICAgIENsaXF6U2VjdXJlTWVzc2FnZS5xdWVyeVByb3h5RmlsdGVyID0gbmV3IFByb3h5RmlsdGVyKCk7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnF1ZXJ5UHJveHlGaWx0ZXIuaW5pdCgpO1xuICB9LFxuICB1bmxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgIENsaXF6U2VjdXJlTWVzc2FnZS5xdWVyeVByb3h5RmlsdGVyLnVubG9hZCgpO1xuICAgIHRoaXMuc3RvcmFnZS5zYXZlTG9jYWxDaGVja1RhYmxlKCk7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnB1c2hUZWxlbWV0cnkoKTtcbiAgICB0aGlzLnNvdXJjZU1hcExvYWRlci5zdG9wKCk7XG4gICAgdGhpcy5wcm94eUxpc3RMb2FkZXIuc3RvcCgpO1xuICAgIHRoaXMucm91dGVUYWJsZUxvYWRlci5zdG9wKCk7XG4gICAgQ2xpcXpVdGlscy5jbGVhclRpbWVvdXQoQ2xpcXpTZWN1cmVNZXNzYWdlLnBhY2VtYWtlcklkKTtcbiAgICB0aGlzLnN0b3JhZ2UuY2xvc2UoKTtcbiAgfSxcbiAgcHJveHlJUDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQ2xpcXpTZWN1cmVNZXNzYWdlLnByb3h5TGlzdCkgcmV0dXJuO1xuXG4gICAgaWYgKHByb3h5Q291bnRlciA+PSBDbGlxelNlY3VyZU1lc3NhZ2UucHJveHlMaXN0Lmxlbmd0aCkgcHJveHlDb3VudGVyID0gMDtcbiAgICBjb25zdCB1cmwgPSBocG5VdGlscy5jcmVhdGVIdHRwVXJsKENsaXF6U2VjdXJlTWVzc2FnZS5wcm94eUxpc3RbcHJveHlDb3VudGVyXSk7XG4gICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnF1ZXJ5UHJveHlJUCA9IHVybDtcbiAgICBwcm94eUNvdW50ZXIgKz0gMTtcbiAgICByZXR1cm4gdXJsO1xuICB9LFxuICByZWdpc3RlclVzZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RvcmFnZS5sb2FkS2V5cygpLnRoZW4odXNlcktleSA9PiB7XG4gICAgICBpZiAoIXVzZXJLZXkpIHtcbiAgICAgICAgY29uc3QgdXNlckNyeXB0byA9IG5ldyBDcnlwdG9Xb3JrZXIoKTtcblxuICAgICAgICB1c2VyQ3J5cHRvLm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICBjb25zdCB1SyA9IHt9O1xuICAgICAgICAgICAgICB1Sy5wcml2YXRlS2V5ID0gZS5kYXRhLnByaXZhdGVLZXk7XG4gICAgICAgICAgICAgIHVLLnB1YmxpY0tleSA9IGUuZGF0YS5wdWJsaWNLZXk7XG4gICAgICAgICAgICAgIHVLLnRzID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNhdmVLZXlzKHVLKS50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnVQSy5wdWJsaWNLZXlCNjQgPSByZXNwb25zZS5kYXRhLnB1YmxpY0tleTtcbiAgICAgICAgICAgICAgICAgIENsaXF6U2VjdXJlTWVzc2FnZS51UEsucHJpdmF0ZUtleSA9IHJlc3BvbnNlLmRhdGEucHJpdmF0ZUtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXNlckNyeXB0by50ZXJtaW5hdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVzZXJDcnlwdG8ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6ICd1c2VyLWtleSdcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDbGlxelNlY3VyZU1lc3NhZ2UudVBLLnB1YmxpY0tleUI2NCA9IHVzZXJLZXkucHVibGljS2V5O1xuICAgICAgICBDbGlxelNlY3VyZU1lc3NhZ2UudVBLLnByaXZhdGVLZXkgPSB1c2VyS2V5LnByaXZhdGVLZXk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgQ2xpcXpTZWN1cmVNZXNzYWdlO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb3JlL2NvbmZpZyc7XG5cbmNsYXNzIENyeXB0b1dvcmtlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMud29ya2VyID0gbmV3IFdvcmtlcihgJHtjb25maWcuYmFzZVVSTH1ocG4vd29ya2VyLmJ1bmRsZS5qc2ApO1xuICB9XG5cbiAgc2V0IG9ubWVzc2FnZShmbikge1xuICAgIHRoaXMud29ya2VyLm9ubWVzc2FnZSA9IGZuO1xuICB9XG5cbiAgcG9zdE1lc3NhZ2UoLi4uYXJncykge1xuICAgIHRoaXMud29ya2VyLnBvc3RNZXNzYWdlKC4uLmFyZ3MpO1xuICB9XG5cbiAgdGVybWluYXRlKCkge1xuICAgIHRoaXMud29ya2VyLnRlcm1pbmF0ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyeXB0b1dvcmtlcjtcbiIsImltcG9ydCBDbGlxelV0aWxzIGZyb20gJy4uL2NvcmUvdXRpbHMnO1xuaW1wb3J0IGJhY2tncm91bmQgZnJvbSAnLi4vY29yZS9iYXNlL2JhY2tncm91bmQnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUF0TGVhc3RJblZlcnNpb24gfSBmcm9tICcuLi9jb3JlL3BsYXRmb3JtJztcbmltcG9ydCBDbGlxelNlY3VyZU1lc3NhZ2UgZnJvbSAnLi9tYWluJztcbmltcG9ydCBDcnlwdG9Xb3JrZXIgZnJvbSAnLi9jcnlwdG8td29ya2VyJztcblxuLyoqXG4qIEBuYW1lc3BhY2UgaHBuXG4qIEBjbGFzcyBCYWNrZ3JvdW5kXG4qL1xuZXhwb3J0IGRlZmF1bHQgYmFja2dyb3VuZCh7XG4gIC8qKlxuICAqIEBtZXRob2QgaW5pdFxuICAqL1xuICBpbml0KCkge1xuICAgIGNvbnN0IEZGNDhfT1JfQUJPVkUgPSBpc1BsYXRmb3JtQXRMZWFzdEluVmVyc2lvbignNDguMCcpO1xuXG4gICAgaWYgKEZGNDhfT1JfQUJPVkUpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gdXNlIHRoaXMgZnVuY3Rpb24sICdsb2FkJyBldmVudHMgZG8gbm90IHNlZW0gdG8gYmUgZmlyaW5nLi4uXG4gICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5DbGlxelNlY3VyZU1lc3NhZ2UgPSBDbGlxelNlY3VyZU1lc3NhZ2U7XG4gICAgICBDbGlxelNlY3VyZU1lc3NhZ2UuaW5pdCgpO1xuICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLndDcnlwdG8gPSBuZXcgQ3J5cHRvV29ya2VyKCk7XG4gICAgICBDbGlxelNlY3VyZU1lc3NhZ2Uud0NyeXB0by5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdpbnN0YW50Jykge1xuICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gQ2xpcXpTZWN1cmVNZXNzYWdlLnF1ZXJpZXNJRFtlLmRhdGEudWlkXTtcbiAgICAgICAgICBkZWxldGUgQ2xpcXpTZWN1cmVNZXNzYWdlLnF1ZXJpZXNJRFtlLmRhdGEudWlkXTtcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh7IHJlc3BvbnNlOiBlLmRhdGEucmVzIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgLyoqXG4gICogQG1ldGhvZCB1bmxvYWRcbiAgKi9cbiAgdW5sb2FkKCkge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIENsaXF6U2VjdXJlTWVzc2FnZS53Q3J5cHRvLnRlcm1pbmF0ZSgpO1xuICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnVubG9hZCgpO1xuICAgIH1cbiAgfSxcblxuICBhY3Rpb25zOiB7XG4gICAgc2hhMShzKSB7XG4gICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCB3Q3J5cHRvID0gbmV3IENyeXB0b1dvcmtlcigpO1xuXG4gICAgICAgIHdDcnlwdG8ub25tZXNzYWdlID0gZnVuY3Rpb24oZSl7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IGUuZGF0YS5yZXN1bHQ7XG4gICAgICAgICAgd0NyeXB0by50ZXJtaW5hdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd0NyeXB0by5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgXCJtc2dcIjogcyxcbiAgICAgICAgICBcInR5cGVcIjpcImh3LXNoYTFcIlxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSxcbiAgICBtZDUocykge1xuICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgd0NyeXB0byA9IG5ldyBDcnlwdG9Xb3JrZXIoKTtcblxuICAgICAgICB3Q3J5cHRvLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGxldCByZXN1bHQgPSBlLmRhdGEucmVzdWx0O1xuICAgICAgICAgIHdDcnlwdG8udGVybWluYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdDcnlwdG8ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIFwibXNnXCI6IHMsXG4gICAgICAgICAgXCJ0eXBlXCI6XCJody1tZDVcIlxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSxcbiAgICByYW5kQmlnSW50KCkge1xuICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgd0NyeXB0byA9IG5ldyBDcnlwdG9Xb3JrZXIoKTtcblxuICAgICAgICB3Q3J5cHRvLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGxldCByZXN1bHQgPSBlLmRhdGEucmVzdWx0O1xuICAgICAgICAgIHdDcnlwdG8udGVybWluYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdDcnlwdG8ucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIFwidHlwZVwiOlwiaHctYmlnaW50XCJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sXG4gICAgc2VuZFRlbGVtZXRyeShtc2cpIHtcbiAgICAgIHJldHVybiBDbGlxelNlY3VyZU1lc3NhZ2UudGVsZW1ldHJ5KG1zZyk7XG4gICAgfSxcblxuICAgIHNlbmRJbnN0YW50TWVzc2FnZShycCwgcGF5bG9hZCkge1xuICAgICAgQ2xpcXpTZWN1cmVNZXNzYWdlLnByb3h5SVAoKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHdDcnlwdG8gPSBuZXcgQ3J5cHRvV29ya2VyKCk7XG5cbiAgICAgICAgd0NyeXB0by5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBKU09OLnBhcnNlKGUuZGF0YS5yZXMpLnJlc3VsdDtcbiAgICAgICAgICB3Q3J5cHRvLnRlcm1pbmF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgICAgd0NyeXB0by5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgbXNnOiB7XG4gICAgICAgICAgICBhY3Rpb246ICdpbnN0YW50JyxcbiAgICAgICAgICAgIHR5cGU6ICdjbGlxeicsXG4gICAgICAgICAgICB0czogJycsXG4gICAgICAgICAgICB2ZXI6ICcxLjUnLFxuICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgICAgIHJwOiBycCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVpZDogJycsXG4gICAgICAgICAgdHlwZTogJ2luc3RhbnQnLFxuICAgICAgICAgIHNvdXJjZW1hcDogQ2xpcXpTZWN1cmVNZXNzYWdlLnNvdXJjZU1hcCxcbiAgICAgICAgICB1cGs6IENsaXF6U2VjdXJlTWVzc2FnZS51UEssXG4gICAgICAgICAgZHNwazogQ2xpcXpTZWN1cmVNZXNzYWdlLmRzUEssXG4gICAgICAgICAgc3NwazogQ2xpcXpTZWN1cmVNZXNzYWdlLnNlY3VyZUxvZ2dlcixcbiAgICAgICAgICBxdWVyeVByb3h5VXJsOiBDbGlxelNlY3VyZU1lc3NhZ2UucXVlcnlQcm94eUlQLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBcInBsYXRmb3JtXCI6IFwiY2hyb21pdW1cIixcbiAgXCJicm9jZmlsZVwiOiBcIm5vZGUuQnJvY2ZpbGUuanNcIixcbiAgXCJiYXNlVVJMXCI6IFwiL2NsaXF6L1wiLFxuICBcInNvdXJjZU1hcHNcIjogdHJ1ZSxcbiAgXCJmb3JtYXRcIjogXCJjb21tb25cIixcbiAgXCJzZXR0aW5nc1wiOiB7XG4gICAgXCJjaGFubmVsXCI6IFwiQ0g4MFwiLFxuICAgIFwidHJpZ2dlcnMtcm9vdFwiOiBcImdob3N0ZXJ5LXJvb3RcIixcbiAgICBcIkNPTkZJR19QUk9WSURFUlwiOiBcImh0dHBzOi8vc2FmZS1icm93c2luZy5naG9zdGVyeS5jb20vY29uZmlnXCIsXG4gICAgXCJFTkRQT0lOVF9CTElORF9TSUdORVJcIjogXCJodHRwczovL2dob3N0ZXJ5LXNpZ24uZ2hvc3RlcnkuY29tL3NpZ25cIixcbiAgICBcIkVORFBPSU5UX1VTRVJfUkVHXCI6IFwiaHR0cHM6Ly9naG9zdGVyeS1zaWduLmdob3N0ZXJ5LmNvbS9yZWdpc3RlclwiLFxuICAgIFwiRU5EUE9JTlRfU09VUkNFX01BUF9QUk9WSURFUlwiOiBcImh0dHBzOi8vZ2hvc3RlcnktY29sbGVjdG9yLmdob3N0ZXJ5LmNvbS9zb3VyY2VtYXBqc29uXCIsXG4gICAgXCJFTkRQT0lOVF9MT09LVVBfVEFCTEVfUFJPVklERVJcIjogXCJodHRwczovL2dob3N0ZXJ5LWNvbGxlY3Rvci5naG9zdGVyeS5jb20vbG9va3VwdGFibGVcIixcbiAgICBcIkVORFBPSU5UX0tFWVNfUFJPVklERVJcIjogXCJodHRwczovL2dob3N0ZXJ5LWNvbGxlY3Rvci5naG9zdGVyeS5jb20vc2lnbmVyS2V5XCIsXG4gICAgXCJFTkRQT0lOVF9QUk9YWV9MSVNUX1BST1ZJREVSXCI6IFwiaHR0cHM6Ly9naG9zdGVyeS1jb2xsZWN0b3IuZ2hvc3RlcnkuY29tL3Byb3h5TGlzdFwiLFxuICAgIFwiRU5EUE9JTlRfUEFUVEVSTlNVUkxcIjogXCJodHRwczovL3NhZmUtYnJvd3NpbmcuZ2hvc3RlcnkuY29tL3BhdHRlcm5zXCIsXG4gICAgXCJFTkRQT0lOVF9BTk9OUEFUVEVSTlNVUkxcIjogXCJodHRwczovL3NhZmUtYnJvd3NpbmcuZ2hvc3RlcnkuY29tL3BhdHRlcm5zLWFub25cIixcbiAgICBcIkVORFBPSU5UX0NPTkZJR1VSTFwiOiBcImh0dHBzOi8vc2FmZS1icm93c2luZy5naG9zdGVyeS5jb20vdHMtY29uZmlnXCIsXG4gICAgXCJFTkRQT0lOVF9TQUZFX1FVT1JVTV9FTkRQT0lOVFwiOiBcImh0dHBzOi8vc2FmZS1icm93c2luZy1xdW9ydW0uZ2hvc3RlcnkuY29tL1wiLFxuICAgIFwiRU5EUE9JTlRfU0FGRV9RVU9SVU1fUFJPVklERVJcIjogXCJodHRwczovL3NhZmUtYnJvd3NpbmctcXVvcnVtLmdob3N0ZXJ5LmNvbS9jb25maWdcIixcbiAgICBcIk1TR0NIQU5ORUxcIjogXCJ3ZWItZXh0ZW5zaW9uXCIsXG4gICAgXCJLRVlfRFNfUFVCS0VZXCI6IFwiTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUF3WG80aFh2Ym9LSENnZ05KMFVORnZaUWZEV2kwak5jRjFrQkh0aHhpbE11NkxCL2hGclNNUSsvRmdUcVZFMzZjQ2V6V0UwSzFVY3dtWUdWc3VxeGN2cWw4MlJmQ21ZVVZCcm9KM1VGRzhxbmV0WWZVNUZPazQzQzU1NXA1bDVIemxGOFFpbGNDVUJDTzRTQ2o5bEVaMy84Rkpib0N1cFRxeEVVcTdud1VnYU5aT2lHS01kRFVCWkpPMXRXNExTSDRsajlJQVpjY0VKNUhLVm1KS29wUTNobXpXZ0Rxb3d4bmk0TlF6KzBEbnNTZkNHQXVwS2FKRHhqZmFqSm9zWDVpNjc0cmdkSGJaR3RnSEIzTTlqaGM2SEZOUGNtdFVnTHdndFV0UndNaFNueWE2cS9PMDZldW91TmkxaDBtNWVScldlTVJsSlNkVW5lbExTVThRTnk3TFFJREFRQUJcIixcbiAgICBcIktFWV9TRUNVUkVfTE9HR0VSX1BVQktFWVwiOiBcIk1JSUNJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBZzhBTUlJQ0NnS0NBZ0VBaDVIaGNSQW42KzZ3b1hRWGwvTnRaK2ZPb29OZ2xaY3QvSFNwWXVxa2NtclBhdUhXN0V1T1NxNWJ2cEJaUlREUk9qUi9rVVBvbXFWWkl6cWhkQ0ZQQThCd1hTQ3o3aEFlbDJRMTU3dnRCdmg5c25nTU1MWGI1Rmd6ZWY1TjRFdUtPOHBMNUtyUytJOXRmWmFjNDF2RkpTZHBnQWlyWlloaCt0ZGNRUTF6MFF2L1J3MHpPWGpmdmRkQ3ozZ0V2MmdCOUtzTE1WblRTMUo0WU9PZ2Z6YTJhZGc5RWJ6MXo5OURpRjR2dEN3bjBJVXdILzNUb1RCd0pMYk1uQzNPbDQzeUJOazhyZ0sybWtnQ2k2MTR2T1NEM2huVm1pbytpVzYrQVVrbE04VlBsNmw3aEVLOWNsakpZKzlVc01WbVRydmFGYk1Qd1M2QWRaQ1hLVG1OZGFNSmN5M3pTT1h1NXp2emlob1FMd0F1OUxNM2wyZVZrME13MEs3SlhPUDIwZmM4QnR6V0NPTFlWUDMycjRSMEJOdWhUdHZHcWpITlpIUEpONU93YXhrTHBuMmR1akw5dURXR2pSaU9JdEtNVnEvbk9xbU5HZ2hyYmY4SU9hS1Q3VlFocU9VNGNYUmtCL3VGMVVqWUVUQmF2d1VaQXh4OVdkL2NNY0FHbUtpRHhpZ2h4eFEyOWpEdWZsKzJXRzA2NXRtSnorekN4bWdyUGg2WmIzS0ZVeFBUZTZ5a3NBaFdKaG1HU2hBOXYyMHQ4NE01YzZOcFpYb1VzRmNWamE2WHh6SGVTQjhkV3E5VXU1UWNaODNHei9yb253ZEVqVDJPR1R0QmdPRmVURHFMWVVncGhDMWdjVUVIT0NuVE5YUk1RT1hxR3dCZlpIcCtNcTYxUWNNcTJyTlM3eEVDQXdFQUFRPT1cIixcbiAgICBcImZyYW1lU2NyaXB0V2hpdGVsaXN0XCI6IFtdXG4gIH0sXG4gIFwiZGVmYXVsdF9wcmVmc1wiOiB7XG4gICAgXCJvZmZlcnMyRmVhdHVyZUVuYWJsZWRcIjogdHJ1ZSxcbiAgICBcIm9mZmVyc0xvZ3NFbmFibGVkXCI6IGZhbHNlLFxuICAgIFwic2hvd0NvbnNvbGVMb2dzXCI6IGZhbHNlXG4gIH0sXG4gIFwibW9kdWxlc1wiOiBbXG4gICAgXCJjb3JlXCIsXG4gICAgXCJtZXNzYWdlLWNlbnRlclwiLFxuICAgIFwiaHBuXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcIm9mZmVycy12MlwiXG4gIF0sXG4gIFwiZW52aXJvbm1lbnRcIjogXCJwcm9kdWN0aW9uXCIsXG4gIFwiRVhURU5TSU9OX1ZFUlNJT05cIjogXCI3LjE3LjFcIixcbiAgXCJpbnN0cnVtZW50RnVuY3Rpb25zXCI6IFwiXCJcbn0iLCJpbXBvcnQgY29uc29sZSBmcm9tIFwiLi4vY29yZS9jb25zb2xlXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvcmUvY29uZmlnJztcbmltcG9ydCBwcmVmcyBmcm9tIFwiLi4vY29yZS9wcmVmc1wiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4uL2NvcmUvc3RvcmFnZVwiO1xuaW1wb3J0IENsaXF6VXRpbHMgZnJvbSBcIi4uL2NvcmUvdXRpbHNcIlxuXG5sZXQgZXZlbnRJRHMgPSB7fTtcbmNvbnN0IHBvcnQgPSBjaHJvbWUucnVudGltZS5jb25uZWN0KHtuYW1lOiBcImVuY3J5cHRlZC1xdWVyeVwifSk7XG5wb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIGxldCBjYiA9IGV2ZW50SURzW3Jlc3BvbnNlLmVJRF0uY2I7XG4gICAgZGVsZXRlIGV2ZW50SURzW3Jlc3BvbnNlLmVJRF07XG4gICAgY2IgJiYgY2IocmVzcG9uc2UuZGF0YSlcbn0pO1xuXG5cbmNvbnN0IENMSVFaRW52aXJvbm1lbnQgPSB7XG4gIFNLSU5fUEFUSDogJ21vZHVsZXMvc3RhdGljL3NraW4vJyxcbiAgUkVTVUxUU19QUk9WSURFUjogJ2h0dHBzOi8vYXBpLmNsaXF6LmNvbS9hcGkvdjIvcmVzdWx0cz9ucmg9MSZxPScsXG4gIFJJQ0hfSEVBREVSOiAnaHR0cHM6Ly9hcGkuY2xpcXouY29tL2FwaS92Mi9yaWNoLWhlYWRlcj9wYXRoPS92Mi9tYXAnLFxuICBMT0c6ICdodHRwczovL3N0YXRzLmNsaXF6LmNvbScsXG4gIFRFTVBMQVRFU19QQVRIOiAnbW9kdWxlcy9zdGF0aWMvdGVtcGxhdGVzLycsXG4gIExPQ0FMRV9QQVRIOiBjb25maWcuYmFzZVVSTCsnc3RhdGljL2xvY2FsZS8nLFxuICBSRVJBTktFUlM6IFtdLFxuICBSRVNVTFRTX1RJTUVPVVQ6IDEwMDAsIC8vIDEgc2Vjb25kXG4gIFRFTVBMQVRFUzogeydjYWxjdWxhdG9yJzogMSwgJ2NsdXN0ZXJpbmcnOiAxLCAnY3VycmVuY3knOiAxLCAnY3VzdG9tJzogMSwgJ2VtcGhhc2lzJzogMSwgJ2VtcHR5JzogMSxcbiAgICAnZ2VuZXJpYyc6IDEsIC8qJ2ltYWdlc19iZXRhJzogMSwqLyAnbWFpbic6IDEsICdyZXN1bHRzJzogMSwgJ3RleHQnOiAxLCAnc2VyaWVzJzogMSxcbiAgICAnc3BlbGxjaGVjayc6IDEsXG4gICAgJ3BhdHRlcm4taDEnOiAzLCAncGF0dGVybi1oMic6IDIsICdwYXR0ZXJuLWgzJzogMSwgJ3BhdHRlcm4taDMtY2x1c3Rlcic6IDEsXG4gICAgJ3BhdHRlcm4taG0nOiAxLFxuICAgICd0b3BzaXRlcyc6IDMsXG4gICAgJ2NlbGVicml0aWVzJzogMiwgJ0NsaXF6JzogMiwgJ2VudGl0eS1nZW5lcmljJzogMiwgJ25vUmVzdWx0JzogMywgJ3dlYXRoZXJBbGVydCc6IDMsICdlbnRpdHktbmV3cy0xJzogMywnZW50aXR5LXZpZGVvLTEnOiAzLFxuICAgICdmbGlnaHRTdGF0dXNFWi0yJzogMiwgJ3dlYXRoZXJFWic6IDIsXG4gICAgJ25ld3MnIDogMSwgJ3Blb3BsZScgOiAxLCAndmlkZW8nIDogMSwgJ2hxJyA6IDEsXG4gICAgJ2xpZ2FFWjFHYW1lJzogMixcbiAgICAnbGlnYUVaVGFibGUnOiAzLFxuICAgICdyZC1oMy13LXJhdGluZyc6IDEsXG4gICAgJ3ZvZCc6IDMsXG4gICAgJ21vdmllLXZvZCc6IDMsXG4gICAgJ2xpdmVUaWNrZXInOiAzXG4gIH0sXG4gIE1FU1NBR0VfVEVNUExBVEVTOiBbXG4gICAgJ2Zvb3Rlci1tZXNzYWdlJyxcbiAgICAnb25ib2FyZGluZy1jYWxsb3V0JyxcbiAgICAnb25ib2FyZGluZy1jYWxsb3V0LWV4dGVuZGVkJyxcbiAgICAnc2xvd19jb25uZWN0aW9uJyxcbiAgICAncGFydGlhbHMvbG9jYXRpb24vbWlzc2luZ19sb2NhdGlvbl8yJyxcbiAgICAncGFydGlhbHMvbG9jYXRpb24vbm8tbG9jYWxlLWRhdGEnXG4gIF0sXG4gIFBBUlRJQUxTOiBbXG4gICAgICAndXJsJyxcbiAgICAgICdsb2dvJyxcbiAgICAgICdFWi1jYXRlZ29yeScsXG4gICAgICAncGFydGlhbHMvZXotdGl0bGUnLFxuICAgICAgJ3BhcnRpYWxzL2V6LXVybCcsXG4gICAgICAncGFydGlhbHMvZXotaGlzdG9yeScsXG4gICAgICAncGFydGlhbHMvZXotZGVzY3JpcHRpb24nLFxuICAgICAgJ3BhcnRpYWxzL2V6LWdlbmVyaWMtYnV0dG9ucycsXG4gICAgICAnRVotaGlzdG9yeScsXG4gICAgICAncmQtaDMtdy1yYXRpbmcnLFxuICAgICAgJ3BjZ2FtZV9tb3ZpZV9zaWRlX3NuaXBwZXQnLFxuICAgICAgJ3BhcnRpYWxzL2xvY2F0aW9uL2xvY2FsLWRhdGEnLFxuICAgICAgJ3BhcnRpYWxzL2xvY2F0aW9uL21pc3NpbmdfbG9jYXRpb25fMScsXG4gICAgICAncGFydGlhbHMvdGltZXRhYmxlLWNpbmVtYScsXG4gICAgICAncGFydGlhbHMvdGltZXRhYmxlLW1vdmllJyxcbiAgICAgICdwYXJ0aWFscy9ib3R0b20tZGF0YS1zYycsXG4gICAgICAncGFydGlhbHMvZG93bmxvYWQnLFxuICAgICAgJ3BhcnRpYWxzL3N0cmVhbWluZycsXG4gICAgICAncGFydGlhbHMvbHlyaWNzJ1xuICBdLFxuICB0ZWxlbWV0cnk6IGZ1bmN0aW9uICgpIHt9LFxuXG4gIGlzVW5rbm93blRlbXBsYXRlOiBmdW5jdGlvbih0ZW1wbGF0ZSl7XG4gICAgIC8vIGluIGNhc2UgYW4gdW5rbm93biB0ZW1wbGF0ZSBpcyByZXF1aXJlZFxuICAgICByZXR1cm4gdGVtcGxhdGUgJiZcbiAgICAgICAgICAgICFDRS5URU1QTEFURVNbdGVtcGxhdGVdXG4gIH0sXG4gIGdldEJyYW5kc0RCVXJsOiBmdW5jdGlvbih2ZXJzaW9uKXtcbiAgICByZXR1cm4gJ2h0dHBzOi8vY2RuLmNsaXF6LmNvbS9icmFuZHMtZGF0YWJhc2UvZGF0YWJhc2UvJyArIHZlcnNpb24gKyAnL2RhdGEvZGF0YWJhc2UuanNvbic7XG4gIH0sXG4gIHNldEludGVydmFsOiBmdW5jdGlvbigpeyByZXR1cm4gc2V0SW50ZXJ2YWwuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfSxcbiAgc2V0VGltZW91dDogZnVuY3Rpb24oKXsgcmV0dXJuIHNldFRpbWVvdXQuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfSxcbiAgY2xlYXJUaW1lb3V0OiBmdW5jdGlvbigpeyBjbGVhclRpbWVvdXQuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgfSxcbiAgUHJvbWlzZTogUHJvbWlzZSxcbiAgT1M6ICdjaHJvbWl1bScsXG4gIGlzUHJpdmF0ZTogZnVuY3Rpb24oKSB7IHJldHVybiBjaHJvbWUuZXh0ZW5zaW9uLmluSW5jb2duaXRvQ29udGV4dDsgfSxcbiAgaXNPblByaXZhdGVUYWI6IGZ1bmN0aW9uKHdpbikgeyByZXR1cm4gQ0UuaXNQcml2YXRlKCk7IH0sXG4gIGdldFdpbmRvdzogZnVuY3Rpb24oKXsgcmV0dXJuIHsgZG9jdW1lbnQ6IHsgZ2V0RWxlbWVudEJ5SWQoKSB7fSB9IH0gfSxcbiAgb3Blbkxpbms6IGZ1bmN0aW9uKHdpbiwgdXJsLCBuZXdUYWIpIHtcbiAgICBjaHJvbWUuY2xpcXpTZWFyY2hQcml2YXRlLm5hdmlnYXRlKHVybCwgISFuZXdUYWIpO1xuICB9LFxuXG4gIGNvcHlSZXN1bHQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBiYWNrdXAgPSBkb2N1bWVudC5vbmNvcHk7XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50Lm9uY29weSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmNsaXBib2FyZERhdGEuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgdmFsKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH07XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIiwgZmFsc2UsIG51bGwpO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgIGRvY3VtZW50Lm9uY29weSA9IGJhY2t1cDtcbiAgICB9XG4gIH0sXG4gIC8vIGRlYnVnXG4gIF9FTkdJTkVTOiBbe1xuICAgIFwibmFtZVwiOiBcIkNMSVFaIGR1bW15IHNlYXJjaFwiLCBcImFsaWFzXCI6IFwiI3FxXCIsIFwiZGVmYXVsdFwiOiB0cnVlLCBcImljb25cIjogXCJcIiwgXCJzZWFyY2hGb3JtXCI6IFwiaHR0cHM6Ly93d3cuY2xpcXouY29tLz9xPXtzZWFyY2hUZXJtc31cIiwgXCJzdWdnZXN0aW9uVXJsXCI6IFwiXCIsIFwiYmFzZV91cmxcIjogXCJodHRwczovL3d3dy5jbGlxei5jb20vc2VhcmNoP3E9XCIsIFwicHJlZml4XCI6IFwiI3FxXCIsIFwiY29kZVwiOiAzXG4gIH1dLFxuICBnZXRTZWFyY2hFbmdpbmVzOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBDRS5fRU5HSU5FUy5tYXAoZnVuY3Rpb24oZSl7XG4gICAgICBlLmdldFN1Ym1pc3Npb25Gb3JRdWVyeSA9IGZ1bmN0aW9uKHEpe1xuICAgICAgICAgIC8vVE9ETzogY3JlYXRlIHRoZSBjb3JyZWN0IHNlYXJjaCBVUkxcbiAgICAgICAgICByZXR1cm4gZS5zZWFyY2hGb3JtLnJlcGxhY2UoXCJ7c2VhcmNoVGVybXN9XCIsIHEpO1xuICAgICAgfVxuXG4gICAgICBlLmdldFN1Z2dlc3Rpb25VcmxGb3JRdWVyeSA9IGZ1bmN0aW9uKHEpe1xuICAgICAgICAgIC8vVE9ETzogY3JlYXRlIHRoZSBjb3JyZWN0IHNlYXJjaCBVUkxcbiAgICAgICAgICByZXR1cm4gZS5zdWdnZXN0aW9uVXJsLnJlcGxhY2UoXCJ7c2VhcmNoVGVybXN9XCIsIHEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlQWxpYXM6IGZ1bmN0aW9uKCl7fSxcbiAgZ2V0RW5naW5lQnlBbGlhczogZnVuY3Rpb24oYWxpYXMpIHtcbiAgICByZXR1cm4gQ0UuX0VOR0lORVMuZmluZChlbmdpbmUgPT4geyByZXR1cm4gZW5naW5lLmFsaWFzID09PSBhbGlhczsgfSk7XG4gIH0sXG4gIGdldEVuZ2luZUJ5TmFtZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBDRS5fRU5HSU5FUy5maW5kKGVuZ2luZSA9PiB7IHJldHVybiBlbmdpbmUubmFtZSA9PT0gbmFtZTsgfSk7XG4gIH0sXG4gIGdldE5vUmVzdWx0czogZnVuY3Rpb24ocSkge1xuICAgIGNvbnN0IGVuZ2luZXMgPSBDRS5nZXRTZWFyY2hFbmdpbmVzKCkubWFwKGUgPT4ge1xuICAgICAgZS5zdHlsZSA9IENFLmdldExvZ29EZXRhaWxzKFxuICAgICAgICAgIENFLmdldERldGFpbHNGcm9tVXJsKGUuc2VhcmNoRm9ybSkpLnN0eWxlO1xuICAgICAgZS50ZXh0ID0gIGUuYWxpYXMuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgICBjb25zdCBkZWZhdWx0TmFtZSA9IENFLmdldERlZmF1bHRTZWFyY2hFbmdpbmUoKS5uYW1lLFxuICAgICAgICAgIGlzVXJsID0gQ2xpcXpVdGlscy5pc1VybChxKTtcblxuICAgIHJldHVybiBDRS5SZXN1bHQuY2xpcXooXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6J25vUmVzdWx0JyxcbiAgICAgICAgICAgICAgICBzbmlwcGV0OlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9saW5lMTogQ0UuZ2V0TG9jYWxpemVkU3RyaW5nKGlzVXJsID8gJ25vUmVzdWx0VXJsTmF2aWdhdGUnIDogJ25vUmVzdWx0VGl0bGUnKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yd2FyZGluZyB0aGUgcXVlcnkgdG8gdGhlIGRlZmF1bHQgc2VhcmNoIGVuZ2luZSBpcyBub3QgaGFuZGxlZCBieSBDTElRWiBidXQgYnkgRmlyZWZveFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgdGFrZSBjYXJlIG9mIHRoaXMgc3BlY2lmaWMgY2FzZSBkaWZmZXJlbnRseSBvbiBhbHRlcm5hdGl2ZSBwbGF0Zm9ybXNcbiAgICAgICAgICAgICAgICAgICAgdGV4dF9saW5lMjogaXNVcmwgPyBDRS5nZXRMb2NhbGl6ZWRTdHJpbmcoJ25vUmVzdWx0VXJsU2VhcmNoJykgOiBDRS5nZXRMb2NhbGl6ZWRTdHJpbmcoJ25vUmVzdWx0TWVzc2FnZScsIGRlZmF1bHROYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZWFyY2hfZW5naW5lc1wiOiBlbmdpbmVzLFxuICAgICAgICAgICAgICAgICAgICAvL3VzZSBsb2NhbCBpbWFnZSBpbiBjYXNlIG9mIG5vIGludGVybmV0IGNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgXCJjbGlxel9sb2dvXCI6IENFLlNLSU5fUEFUSCArIFwiaW1nL2NsaXF6LnN2Z1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0eXBlOiAncmgnLFxuICAgICAgICAgICAgICAgIHN1YlR5cGU6IHtlbXB0eTp0cnVlfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gIH0sXG4gIHNldERlZmF1bHRTZWFyY2hFbmdpbmU6IGZ1bmN0aW9uKGVuZ2luZSkge1xuICAgIGNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuICAgIHN0b3JhZ2Uuc2V0T2JqZWN0KCdkZWZhdWx0U2VhcmNoRW5naW5lJywgZW5naW5lKTtcbiAgfSxcbiAgZ2V0RGVmYXVsdFNlYXJjaEVuZ2luZTogZnVuY3Rpb24oKSB7XG4gICAgZm9yIChsZXQgZSBvZiBDRS5nZXRTZWFyY2hFbmdpbmVzKCkpIHtcbiAgICAgIGlmIChlLmRlZmF1bHQpXG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfSxcbiAgb25SZW5kZXJDb21wbGV0ZTogZnVuY3Rpb24ocXVlcnksIGFsbFVybHMpIHtcbiAgICBjaHJvbWUuY2xpcXpTZWFyY2hQcml2YXRlLnByb2Nlc3NSZXN1bHRzKHF1ZXJ5LCBhbGxVcmxzKTtcbiAgfSxcbiAgb25SZXN1bHRTZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgY2hyb21lLmNsaXF6U2VhcmNoUHJpdmF0ZS5vblJlc3VsdFNlbGVjdGlvbkNoYW5nZShwb3NpdGlvbik7XG4gIH0sXG4gIHNldFN1cHBvcnRJbmZvKCkge30sXG59O1xuY29uc3QgQ0UgPSBDTElRWkVudmlyb25tZW50OyAgLy8gU2hvcnRoYW5kIGFsaWFzLlxuXG5leHBvcnQgZGVmYXVsdCBDTElRWkVudmlyb25tZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIFJ1bGUgKGRhdGEpe1xuICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICB0aGlzLmV4Y2VwdGlvbiA9IGRhdGEuZXhjZXB0aW9uIHx8IGZhbHNlO1xuICB0aGlzLmZpcnN0TGV2ZWwgPSBkYXRhLmZpcnN0TGV2ZWwgfHwgJyc7XG4gIHRoaXMuc2Vjb25kTGV2ZWwgPSBkYXRhLnNlY29uZExldmVsIHx8IG51bGw7XG4gIHRoaXMuaXNIb3N0ID0gZGF0YS5pc0hvc3QgfHwgZmFsc2U7XG4gIHRoaXMuc291cmNlID0gZGF0YS5zb3VyY2UgfHwgJyc7XG4gIHRoaXMud2lsZGNhcmQgPSBkYXRhLndpbGRjYXJkIHx8IGZhbHNlO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIFRMRCBvciBTTEQgKFNlY29uZCBMZXZlbCBEb21haW4pIHBhdHRlcm4gZm9yIGEgcnVsZVxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuUnVsZS5wcm90b3R5cGUuZ2V0Tm9ybWFsWGxkID0gZnVuY3Rpb24gZ2V0Tm9ybWFsWGxkKCl7XG4gIHJldHVybiAodGhpcy5zZWNvbmRMZXZlbCA/ICcuJyArIHRoaXMuc2Vjb25kTGV2ZWwgOiAnJykgKyAnLicgKyB0aGlzLmZpcnN0TGV2ZWw7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBwYXR0ZXJuIHN1aXRhYmxlIGZvciBub3JtYWwgcnVsZVxuICogTW9zdGx5IGZvciBpbnRlcm5hbCB1c2VcbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblJ1bGUucHJvdG90eXBlLmdldE5vcm1hbFBhdHRlcm4gPSBmdW5jdGlvbiBnZXROb3JtYWxQYXR0ZXJuKCl7XG4gIHJldHVybiAodGhpcy5zZWNvbmRMZXZlbCA/ICdcXFxcLicgKyB0aGlzLnNlY29uZExldmVsIDogJycpICsgJ1xcXFwuJyArIHRoaXMuZmlyc3RMZXZlbDtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHBhdHRlcm4gc3VpdGFibGUgZm9yIHdpbGRjYXJkIHJ1bGVcbiAqIE1vc3RseSBmb3IgaW50ZXJuYWwgdXNlXG4gKlxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5SdWxlLnByb3RvdHlwZS5nZXRXaWxkY2FyZFBhdHRlcm4gPSBmdW5jdGlvbiBnZXRXaWxkY2FyZFBhdHRlcm4oKXtcbiAgcmV0dXJuICdcXFxcLlteXFxcXC5dKycgKyB0aGlzLmdldE5vcm1hbFhsZCgpLnJlcGxhY2UoL1xcLi9nLCAnXFxcXC4nKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHBhdHRlcm4gc3VpdGFibGUgZm9yIGV4Y2VwdGlvbiBydWxlXG4gKiBNb3N0bHkgZm9yIGludGVybmFsIHVzZVxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuUnVsZS5wcm90b3R5cGUuZ2V0RXhjZXB0aW9uUGF0dGVybiA9IGZ1bmN0aW9uIGdldEV4Y2VwdGlvblBhdHRlcm4oKXtcbiAgcmV0dXJuICh0aGlzLnNlY29uZExldmVsIHx8ICcnKSArICdcXFxcLicgKyB0aGlzLmZpcnN0TGV2ZWw7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJlc3QgcGF0dGVybiBwb3NzaWJsZSBmb3IgYSBydWxlXG4gKiBZb3UganVzdCBoYXZlIHRvIHRlc3QgYSB2YWx1ZSBhZ2FpbnN0IGl0IHRvIGNoZWNrIG9yIGV4dHJhY3QgYSBob3N0bmFtZVxuICpcbiAqIEBhcGlcbiAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gYmVmb3JlXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IGFmdGVyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEEgcGF0dGVybiB0byBjaGFsbGVuZ2Ugc29tZSBzdHJpbmcgYWdhaW5zdFxuICovXG5SdWxlLnByb3RvdHlwZS5nZXRQYXR0ZXJuID0gZnVuY3Rpb24gZ2V0UGF0dGVybihiZWZvcmUsIGFmdGVyKXtcbiAgdmFyIHBhdHRlcm4gPSAnJztcblxuICBiZWZvcmUgPSAoYmVmb3JlID09PSB1bmRlZmluZWQpID8gJygnOiBiZWZvcmUrJyc7XG4gIGFmdGVyID0gKGFmdGVyID09PSB1bmRlZmluZWQpID8gJykkJzogYWZ0ZXIrJyc7XG5cbiAgaWYgKHRoaXMuZXhjZXB0aW9uID09PSB0cnVlKXtcbiAgICBwYXR0ZXJuID0gdGhpcy5nZXRFeGNlcHRpb25QYXR0ZXJuKCk7XG4gIH1cbiAgZWxzZSBpZiAodGhpcy5pc0hvc3QgPT09IHRydWUpIHtcbiAgICBwYXR0ZXJuID0gdGhpcy5maXJzdExldmVsO1xuICB9XG4gIGVsc2V7XG4gICAgcGF0dGVybiA9ICdbXlxcXFwuXSsnICsgKHRoaXMud2lsZGNhcmQgPyB0aGlzLmdldFdpbGRjYXJkUGF0dGVybigpIDogdGhpcy5nZXROb3JtYWxQYXR0ZXJuKCkpO1xuICB9XG5cbiAgcmV0dXJuIGJlZm9yZSArIHBhdHRlcm4gKyBhZnRlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZTtcbiIsIi8qISBodHRwczovL210aHMuYmUvcHVueWNvZGUgdjEuNC4xIGJ5IEBtYXRoaWFzICovXG47KGZ1bmN0aW9uKHJvb3QpIHtcblxuXHQvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGVzICovXG5cdHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiZcblx0XHQhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0IW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChcblx0XHRmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC5zZWxmID09PSBmcmVlR2xvYmFsXG5cdCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBgcHVueWNvZGVgIG9iamVjdC5cblx0ICogQG5hbWUgcHVueWNvZGVcblx0ICogQHR5cGUgT2JqZWN0XG5cdCAqL1xuXHR2YXIgcHVueWNvZGUsXG5cblx0LyoqIEhpZ2hlc3QgcG9zaXRpdmUgc2lnbmVkIDMyLWJpdCBmbG9hdCB2YWx1ZSAqL1xuXHRtYXhJbnQgPSAyMTQ3NDgzNjQ3LCAvLyBha2EuIDB4N0ZGRkZGRkYgb3IgMl4zMS0xXG5cblx0LyoqIEJvb3RzdHJpbmcgcGFyYW1ldGVycyAqL1xuXHRiYXNlID0gMzYsXG5cdHRNaW4gPSAxLFxuXHR0TWF4ID0gMjYsXG5cdHNrZXcgPSAzOCxcblx0ZGFtcCA9IDcwMCxcblx0aW5pdGlhbEJpYXMgPSA3Mixcblx0aW5pdGlhbE4gPSAxMjgsIC8vIDB4ODBcblx0ZGVsaW1pdGVyID0gJy0nLCAvLyAnXFx4MkQnXG5cblx0LyoqIFJlZ3VsYXIgZXhwcmVzc2lvbnMgKi9cblx0cmVnZXhQdW55Y29kZSA9IC9eeG4tLS8sXG5cdHJlZ2V4Tm9uQVNDSUkgPSAvW15cXHgyMC1cXHg3RV0vLCAvLyB1bnByaW50YWJsZSBBU0NJSSBjaGFycyArIG5vbi1BU0NJSSBjaGFyc1xuXHRyZWdleFNlcGFyYXRvcnMgPSAvW1xceDJFXFx1MzAwMlxcdUZGMEVcXHVGRjYxXS9nLCAvLyBSRkMgMzQ5MCBzZXBhcmF0b3JzXG5cblx0LyoqIEVycm9yIG1lc3NhZ2VzICovXG5cdGVycm9ycyA9IHtcblx0XHQnb3ZlcmZsb3cnOiAnT3ZlcmZsb3c6IGlucHV0IG5lZWRzIHdpZGVyIGludGVnZXJzIHRvIHByb2Nlc3MnLFxuXHRcdCdub3QtYmFzaWMnOiAnSWxsZWdhbCBpbnB1dCA+PSAweDgwIChub3QgYSBiYXNpYyBjb2RlIHBvaW50KScsXG5cdFx0J2ludmFsaWQtaW5wdXQnOiAnSW52YWxpZCBpbnB1dCdcblx0fSxcblxuXHQvKiogQ29udmVuaWVuY2Ugc2hvcnRjdXRzICovXG5cdGJhc2VNaW51c1RNaW4gPSBiYXNlIC0gdE1pbixcblx0Zmxvb3IgPSBNYXRoLmZsb29yLFxuXHRzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLFxuXG5cdC8qKiBUZW1wb3JhcnkgdmFyaWFibGUgKi9cblx0a2V5O1xuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKlxuXHQgKiBBIGdlbmVyaWMgZXJyb3IgdXRpbGl0eSBmdW5jdGlvbi5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG5cdCAqIEByZXR1cm5zIHtFcnJvcn0gVGhyb3dzIGEgYFJhbmdlRXJyb3JgIHdpdGggdGhlIGFwcGxpY2FibGUgZXJyb3IgbWVzc2FnZS5cblx0ICovXG5cdGZ1bmN0aW9uIGVycm9yKHR5cGUpIHtcblx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcblx0ICogaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBhcnJheSBvZiB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdFx0cmVzdWx0W2xlbmd0aF0gPSBmbihhcnJheVtsZW5ndGhdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBgQXJyYXkjbWFwYC1saWtlIHdyYXBwZXIgdG8gd29yayB3aXRoIGRvbWFpbiBuYW1lIHN0cmluZ3Mgb3IgZW1haWxcblx0ICogYWRkcmVzc2VzLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcblx0ICogY2hhcmFjdGVyLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcERvbWFpbihzdHJpbmcsIGZuKSB7XG5cdFx0dmFyIHBhcnRzID0gc3RyaW5nLnNwbGl0KCdAJyk7XG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdFx0cmVzdWx0ID0gcGFydHNbMF0gKyAnQCc7XG5cdFx0XHRzdHJpbmcgPSBwYXJ0c1sxXTtcblx0XHR9XG5cdFx0Ly8gQXZvaWQgYHNwbGl0KHJlZ2V4KWAgZm9yIElFOCBjb21wYXRpYmlsaXR5LiBTZWUgIzE3LlxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdFx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRcdHZhciBlbmNvZGVkID0gbWFwKGxhYmVscywgZm4pLmpvaW4oJy4nKTtcblx0XHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG5cdCAqIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nLiBXaGlsZSBKYXZhU2NyaXB0IHVzZXMgVUNTLTIgaW50ZXJuYWxseSxcblx0ICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcblx0ICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG5cdCAqIG1hdGNoaW5nIFVURi0xNi5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBkZWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbmV3IGFycmF5IG9mIGNvZGUgcG9pbnRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGNvdW50ZXIgPSAwLFxuXHRcdCAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuXHRcdCAgICB2YWx1ZSxcblx0XHQgICAgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGVuY29kZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmV3IFVuaWNvZGUgc3RyaW5nIChVQ1MtMikuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cblx0ICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcblx0ICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNpY1RvRGlnaXQoY29kZVBvaW50KSB7XG5cdFx0aWYgKGNvZGVQb2ludCAtIDQ4IDwgMTApIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSAyMjtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDY1IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA2NTtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDk3IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA5Nztcblx0XHR9XG5cdFx0cmV0dXJuIGJhc2U7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAc2VlIGBiYXNpY1RvRGlnaXQoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2ljIGNvZGUgcG9pbnQgd2hvc2UgdmFsdWUgKHdoZW4gdXNlZCBmb3Jcblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2Vcblx0ICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG5cdCAqIHVzZWQ7IGVsc2UsIHRoZSBsb3dlcmNhc2UgZm9ybSBpcyB1c2VkLiBUaGUgYmVoYXZpb3IgaXMgdW5kZWZpbmVkXG5cdCAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG5cdCAqL1xuXHRmdW5jdGlvbiBkaWdpdFRvQmFzaWMoZGlnaXQsIGZsYWcpIHtcblx0XHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHRcdC8vIDI2Li4zNSBtYXAgdG8gQVNDSUkgMC4uOVxuXHRcdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG5cdH1cblxuXHQvKipcblx0ICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cblx0ICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM0OTIjc2VjdGlvbi0zLjRcblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIGFkYXB0KGRlbHRhLCBudW1Qb2ludHMsIGZpcnN0VGltZSkge1xuXHRcdHZhciBrID0gMDtcblx0XHRkZWx0YSA9IGZpcnN0VGltZSA/IGZsb29yKGRlbHRhIC8gZGFtcCkgOiBkZWx0YSA+PiAxO1xuXHRcdGRlbHRhICs9IGZsb29yKGRlbHRhIC8gbnVtUG9pbnRzKTtcblx0XHRmb3IgKC8qIG5vIGluaXRpYWxpemF0aW9uICovOyBkZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuXHRcdFx0ZGVsdGEgPSBmbG9vcihkZWx0YSAvIGJhc2VNaW51c1RNaW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMgdG8gYSBzdHJpbmcgb2YgVW5pY29kZVxuXHQgKiBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0XHQvLyBEb24ndCB1c2UgVUNTLTJcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuXHRcdCAgICBvdXQsXG5cdFx0ICAgIGkgPSAwLFxuXHRcdCAgICBuID0gaW5pdGlhbE4sXG5cdFx0ICAgIGJpYXMgPSBpbml0aWFsQmlhcyxcblx0XHQgICAgYmFzaWMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIGluZGV4LFxuXHRcdCAgICBvbGRpLFxuXHRcdCAgICB3LFxuXHRcdCAgICBrLFxuXHRcdCAgICBkaWdpdCxcblx0XHQgICAgdCxcblx0XHQgICAgLyoqIENhY2hlZCBjYWxjdWxhdGlvbiByZXN1bHRzICovXG5cdFx0ICAgIGJhc2VNaW51c1Q7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzOiBsZXQgYGJhc2ljYCBiZSB0aGUgbnVtYmVyIG9mIGlucHV0IGNvZGVcblx0XHQvLyBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGRlbGltaXRlciwgb3IgYDBgIGlmIHRoZXJlIGlzIG5vbmUsIHRoZW4gY29weVxuXHRcdC8vIHRoZSBmaXJzdCBiYXNpYyBjb2RlIHBvaW50cyB0byB0aGUgb3V0cHV0LlxuXG5cdFx0YmFzaWMgPSBpbnB1dC5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuXHRcdGlmIChiYXNpYyA8IDApIHtcblx0XHRcdGJhc2ljID0gMDtcblx0XHR9XG5cblx0XHRmb3IgKGogPSAwOyBqIDwgYmFzaWM7ICsraikge1xuXHRcdFx0Ly8gaWYgaXQncyBub3QgYSBiYXNpYyBjb2RlIHBvaW50XG5cdFx0XHRpZiAoaW5wdXQuY2hhckNvZGVBdChqKSA+PSAweDgwKSB7XG5cdFx0XHRcdGVycm9yKCdub3QtYmFzaWMnKTtcblx0XHRcdH1cblx0XHRcdG91dHB1dC5wdXNoKGlucHV0LmNoYXJDb2RlQXQoaikpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZGVjb2RpbmcgbG9vcDogc3RhcnQganVzdCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIgaWYgYW55IGJhc2ljIGNvZGVcblx0XHQvLyBwb2ludHMgd2VyZSBjb3BpZWQ7IHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb3RoZXJ3aXNlLlxuXG5cdFx0Zm9yIChpbmRleCA9IGJhc2ljID4gMCA/IGJhc2ljICsgMSA6IDA7IGluZGV4IDwgaW5wdXRMZW5ndGg7IC8qIG5vIGZpbmFsIGV4cHJlc3Npb24gKi8pIHtcblxuXHRcdFx0Ly8gYGluZGV4YCBpcyB0aGUgaW5kZXggb2YgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGJlIGNvbnN1bWVkLlxuXHRcdFx0Ly8gRGVjb2RlIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIgaW50byBgZGVsdGFgLFxuXHRcdFx0Ly8gd2hpY2ggZ2V0cyBhZGRlZCB0byBgaWAuIFRoZSBvdmVyZmxvdyBjaGVja2luZyBpcyBlYXNpZXJcblx0XHRcdC8vIGlmIHdlIGluY3JlYXNlIGBpYCBhcyB3ZSBnbywgdGhlbiBzdWJ0cmFjdCBvZmYgaXRzIHN0YXJ0aW5nXG5cdFx0XHQvLyB2YWx1ZSBhdCB0aGUgZW5kIHRvIG9idGFpbiBgZGVsdGFgLlxuXHRcdFx0Zm9yIChvbGRpID0gaSwgdyA9IDEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXG5cdFx0XHRcdGlmIChpbmRleCA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRcdGVycm9yKCdpbnZhbGlkLWlucHV0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkaWdpdCA9IGJhc2ljVG9EaWdpdChpbnB1dC5jaGFyQ29kZUF0KGluZGV4KyspKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPj0gYmFzZSB8fCBkaWdpdCA+IGZsb29yKChtYXhJbnQgLSBpKSAvIHcpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpICs9IGRpZ2l0ICogdztcblx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cblx0XHRcdFx0aWYgKGRpZ2l0IDwgdCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRpZiAodyA+IGZsb29yKG1heEludCAvIGJhc2VNaW51c1QpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3ICo9IGJhc2VNaW51c1Q7XG5cblx0XHRcdH1cblxuXHRcdFx0b3V0ID0gb3V0cHV0Lmxlbmd0aCArIDE7XG5cdFx0XHRiaWFzID0gYWRhcHQoaSAtIG9sZGksIG91dCwgb2xkaSA9PSAwKTtcblxuXHRcdFx0Ly8gYGlgIHdhcyBzdXBwb3NlZCB0byB3cmFwIGFyb3VuZCBmcm9tIGBvdXRgIHRvIGAwYCxcblx0XHRcdC8vIGluY3JlbWVudGluZyBgbmAgZWFjaCB0aW1lLCBzbyB3ZSdsbCBmaXggdGhhdCBub3c6XG5cdFx0XHRpZiAoZmxvb3IoaSAvIG91dCkgPiBtYXhJbnQgLSBuKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRuICs9IGZsb29yKGkgLyBvdXQpO1xuXHRcdFx0aSAlPSBvdXQ7XG5cblx0XHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXRcblx0XHRcdG91dHB1dC5zcGxpY2UoaSsrLCAwLCBuKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB1Y3MyZW5jb2RlKG91dHB1dCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcblx0ICogUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG5cdFx0dmFyIG4sXG5cdFx0ICAgIGRlbHRhLFxuXHRcdCAgICBoYW5kbGVkQ1BDb3VudCxcblx0XHQgICAgYmFzaWNMZW5ndGgsXG5cdFx0ICAgIGJpYXMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIG0sXG5cdFx0ICAgIHEsXG5cdFx0ICAgIGssXG5cdFx0ICAgIHQsXG5cdFx0ICAgIGN1cnJlbnRWYWx1ZSxcblx0XHQgICAgb3V0cHV0ID0gW10sXG5cdFx0ICAgIC8qKiBgaW5wdXRMZW5ndGhgIHdpbGwgaG9sZCB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIGluIGBpbnB1dGAuICovXG5cdFx0ICAgIGlucHV0TGVuZ3RoLFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgaGFuZGxlZENQQ291bnRQbHVzT25lLFxuXHRcdCAgICBiYXNlTWludXNULFxuXHRcdCAgICBxTWludXNUO1xuXG5cdFx0Ly8gQ29udmVydCB0aGUgaW5wdXQgaW4gVUNTLTIgdG8gVW5pY29kZVxuXHRcdGlucHV0ID0gdWNzMmRlY29kZShpbnB1dCk7XG5cblx0XHQvLyBDYWNoZSB0aGUgbGVuZ3RoXG5cdFx0aW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cblx0XHQvLyBJbml0aWFsaXplIHRoZSBzdGF0ZVxuXHRcdG4gPSBpbml0aWFsTjtcblx0XHRkZWx0YSA9IDA7XG5cdFx0YmlhcyA9IGluaXRpYWxCaWFzO1xuXG5cdFx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50c1xuXHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCAweDgwKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShjdXJyZW50VmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRoYW5kbGVkQ1BDb3VudCA9IGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcblxuXHRcdC8vIGBoYW5kbGVkQ1BDb3VudGAgaXMgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyB0aGF0IGhhdmUgYmVlbiBoYW5kbGVkO1xuXHRcdC8vIGBiYXNpY0xlbmd0aGAgaXMgdGhlIG51bWJlciBvZiBiYXNpYyBjb2RlIHBvaW50cy5cblxuXHRcdC8vIEZpbmlzaCB0aGUgYmFzaWMgc3RyaW5nIC0gaWYgaXQgaXMgbm90IGVtcHR5IC0gd2l0aCBhIGRlbGltaXRlclxuXHRcdGlmIChiYXNpY0xlbmd0aCkge1xuXHRcdFx0b3V0cHV0LnB1c2goZGVsaW1pdGVyKTtcblx0XHR9XG5cblx0XHQvLyBNYWluIGVuY29kaW5nIGxvb3A6XG5cdFx0d2hpbGUgKGhhbmRsZWRDUENvdW50IDwgaW5wdXRMZW5ndGgpIHtcblxuXHRcdFx0Ly8gQWxsIG5vbi1iYXNpYyBjb2RlIHBvaW50cyA8IG4gaGF2ZSBiZWVuIGhhbmRsZWQgYWxyZWFkeS4gRmluZCB0aGUgbmV4dFxuXHRcdFx0Ly8gbGFyZ2VyIG9uZTpcblx0XHRcdGZvciAobSA9IG1heEludCwgaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID49IG4gJiYgY3VycmVudFZhbHVlIDwgbSkge1xuXHRcdFx0XHRcdG0gPSBjdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5jcmVhc2UgYGRlbHRhYCBlbm91Z2ggdG8gYWR2YW5jZSB0aGUgZGVjb2RlcidzIDxuLGk+IHN0YXRlIHRvIDxtLDA+LFxuXHRcdFx0Ly8gYnV0IGd1YXJkIGFnYWluc3Qgb3ZlcmZsb3dcblx0XHRcdGhhbmRsZWRDUENvdW50UGx1c09uZSA9IGhhbmRsZWRDUENvdW50ICsgMTtcblx0XHRcdGlmIChtIC0gbiA+IGZsb29yKChtYXhJbnQgLSBkZWx0YSkgLyBoYW5kbGVkQ1BDb3VudFBsdXNPbmUpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YSArPSAobSAtIG4pICogaGFuZGxlZENQQ291bnRQbHVzT25lO1xuXHRcdFx0biA9IG07XG5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCBuICYmICsrZGVsdGEgPiBtYXhJbnQpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT0gbikge1xuXHRcdFx0XHRcdC8vIFJlcHJlc2VudCBkZWx0YSBhcyBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyXG5cdFx0XHRcdFx0Zm9yIChxID0gZGVsdGEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXHRcdFx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cdFx0XHRcdFx0XHRpZiAocSA8IHQpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRxTWludXNUID0gcSAtIHQ7XG5cdFx0XHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdFx0XHRvdXRwdXQucHVzaChcblx0XHRcdFx0XHRcdFx0c3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyh0ICsgcU1pbnVzVCAlIGJhc2VNaW51c1QsIDApKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHEgPSBmbG9vcihxTWludXNUIC8gYmFzZU1pbnVzVCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyhxLCAwKSkpO1xuXHRcdFx0XHRcdGJpYXMgPSBhZGFwdChkZWx0YSwgaGFuZGxlZENQQ291bnRQbHVzT25lLCBoYW5kbGVkQ1BDb3VudCA9PSBiYXNpY0xlbmd0aCk7XG5cdFx0XHRcdFx0ZGVsdGEgPSAwO1xuXHRcdFx0XHRcdCsraGFuZGxlZENQQ291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0KytkZWx0YTtcblx0XHRcdCsrbjtcblxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3Ncblx0ICogdG8gVW5pY29kZS4gT25seSB0aGUgUHVueWNvZGVkIHBhcnRzIG9mIHRoZSBpbnB1dCB3aWxsIGJlIGNvbnZlcnRlZCwgaS5lLlxuXHQgKiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCBvbiBhIHN0cmluZyB0aGF0IGhhcyBhbHJlYWR5IGJlZW5cblx0ICogY29udmVydGVkIHRvIFVuaWNvZGUuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlZCBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvXG5cdCAqIGNvbnZlcnQgdG8gVW5pY29kZS5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFVuaWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIFB1bnljb2RlXG5cdCAqIHN0cmluZy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvVW5pY29kZShpbnB1dCkge1xuXHRcdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHJlZ2V4UHVueWNvZGUudGVzdChzdHJpbmcpXG5cdFx0XHRcdD8gZGVjb2RlKHN0cmluZy5zbGljZSg0KS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFVuaWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogUHVueWNvZGUuIE9ubHkgdGhlIG5vbi1BU0NJSSBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgd2lsbCBiZSBjb252ZXJ0ZWQsXG5cdCAqIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0J3MgYWxyZWFkeSBpblxuXHQgKiBBU0NJSS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0byBjb252ZXJ0LCBhcyBhXG5cdCAqIFVuaWNvZGUgc3RyaW5nLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgUHVueWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGRvbWFpbiBuYW1lIG9yXG5cdCAqIGVtYWlsIGFkZHJlc3MuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FTQ0lJKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhOb25BU0NJSS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyAneG4tLScgKyBlbmNvZGUoc3RyaW5nKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cblx0cHVueWNvZGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdCd2ZXJzaW9uJzogJzEuNC4xJyxcblx0XHQvKipcblx0XHQgKiBBbiBvYmplY3Qgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGZyb20gSmF2YVNjcmlwdCdzIGludGVybmFsIGNoYXJhY3RlclxuXHRcdCAqIHJlcHJlc2VudGF0aW9uIChVQ1MtMikgdG8gVW5pY29kZSBjb2RlIHBvaW50cywgYW5kIGJhY2suXG5cdFx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgT2JqZWN0XG5cdFx0ICovXG5cdFx0J3VjczInOiB7XG5cdFx0XHQnZGVjb2RlJzogdWNzMmRlY29kZSxcblx0XHRcdCdlbmNvZGUnOiB1Y3MyZW5jb2RlXG5cdFx0fSxcblx0XHQnZGVjb2RlJzogZGVjb2RlLFxuXHRcdCdlbmNvZGUnOiBlbmNvZGUsXG5cdFx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHRcdCd0b1VuaWNvZGUnOiB0b1VuaWNvZGVcblx0fTtcblxuXHQvKiogRXhwb3NlIGBwdW55Y29kZWAgKi9cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoJ3B1bnljb2RlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gcHVueWNvZGU7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSkge1xuXHRcdGlmIChtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cykge1xuXHRcdFx0Ly8gaW4gTm9kZS5qcywgaW8uanMsIG9yIFJpbmdvSlMgdjAuOC4wK1xuXHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gcHVueWNvZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXG5cdFx0XHRmb3IgKGtleSBpbiBwdW55Y29kZSkge1xuXHRcdFx0XHRwdW55Y29kZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gcHVueWNvZGVba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LnB1bnljb2RlID0gcHVueWNvZGU7XG5cdH1cblxufSh0aGlzKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1N0cmluZzogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZihhcmcpID09PSAnc3RyaW5nJztcbiAgfSxcbiAgaXNPYmplY3Q6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YoYXJnKSA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xuICB9LFxuICBpc051bGw6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBhcmcgPT09IG51bGw7XG4gIH0sXG4gIGlzTnVsbE9yVW5kZWZpbmVkOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gYXJnID09IG51bGw7XG4gIH1cbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJZiBvYmouaGFzT3duUHJvcGVydHkgaGFzIGJlZW4gb3ZlcnJpZGRlbiwgdGhlbiBjYWxsaW5nXG4vLyBvYmouaGFzT3duUHJvcGVydHkocHJvcCkgd2lsbCBicmVhay5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL2lzc3Vlcy8xNzA3XG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHFzLCBzZXAsIGVxLCBvcHRpb25zKSB7XG4gIHNlcCA9IHNlcCB8fCAnJic7XG4gIGVxID0gZXEgfHwgJz0nO1xuICB2YXIgb2JqID0ge307XG5cbiAgaWYgKHR5cGVvZiBxcyAhPT0gJ3N0cmluZycgfHwgcXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciByZWdleHAgPSAvXFwrL2c7XG4gIHFzID0gcXMuc3BsaXQoc2VwKTtcblxuICB2YXIgbWF4S2V5cyA9IDEwMDA7XG4gIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLm1heEtleXMgPT09ICdudW1iZXInKSB7XG4gICAgbWF4S2V5cyA9IG9wdGlvbnMubWF4S2V5cztcbiAgfVxuXG4gIHZhciBsZW4gPSBxcy5sZW5ndGg7XG4gIC8vIG1heEtleXMgPD0gMCBtZWFucyB0aGF0IHdlIHNob3VsZCBub3QgbGltaXQga2V5cyBjb3VudFxuICBpZiAobWF4S2V5cyA+IDAgJiYgbGVuID4gbWF4S2V5cykge1xuICAgIGxlbiA9IG1heEtleXM7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHggPSBxc1tpXS5yZXBsYWNlKHJlZ2V4cCwgJyUyMCcpLFxuICAgICAgICBpZHggPSB4LmluZGV4T2YoZXEpLFxuICAgICAgICBrc3RyLCB2c3RyLCBrLCB2O1xuXG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBrc3RyID0geC5zdWJzdHIoMCwgaWR4KTtcbiAgICAgIHZzdHIgPSB4LnN1YnN0cihpZHggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAga3N0ciA9IHg7XG4gICAgICB2c3RyID0gJyc7XG4gICAgfVxuXG4gICAgayA9IGRlY29kZVVSSUNvbXBvbmVudChrc3RyKTtcbiAgICB2ID0gZGVjb2RlVVJJQ29tcG9uZW50KHZzdHIpO1xuXG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eShvYmosIGspKSB7XG4gICAgICBvYmpba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmpba10pKSB7XG4gICAgICBvYmpba10ucHVzaCh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2tdID0gW29ialtrXSwgdl07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5UHJpbWl0aXZlID0gZnVuY3Rpb24odikge1xuICBzd2l0Y2ggKHR5cGVvZiB2KSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2O1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gdiA/ICd0cnVlJyA6ICdmYWxzZSc7XG5cbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIGlzRmluaXRlKHYpID8gdiA6ICcnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIHNlcCwgZXEsIG5hbWUpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICBvYmogPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGtzID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShrKSkgKyBlcTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrXS5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVueWNvZGUgPSByZXF1aXJlKCdwdW55Y29kZScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZXhwb3J0cy5wYXJzZSA9IHVybFBhcnNlO1xuZXhwb3J0cy5yZXNvbHZlID0gdXJsUmVzb2x2ZTtcbmV4cG9ydHMucmVzb2x2ZU9iamVjdCA9IHVybFJlc29sdmVPYmplY3Q7XG5leHBvcnRzLmZvcm1hdCA9IHVybEZvcm1hdDtcblxuZXhwb3J0cy5VcmwgPSBVcmw7XG5cbmZ1bmN0aW9uIFVybCgpIHtcbiAgdGhpcy5wcm90b2NvbCA9IG51bGw7XG4gIHRoaXMuc2xhc2hlcyA9IG51bGw7XG4gIHRoaXMuYXV0aCA9IG51bGw7XG4gIHRoaXMuaG9zdCA9IG51bGw7XG4gIHRoaXMucG9ydCA9IG51bGw7XG4gIHRoaXMuaG9zdG5hbWUgPSBudWxsO1xuICB0aGlzLmhhc2ggPSBudWxsO1xuICB0aGlzLnNlYXJjaCA9IG51bGw7XG4gIHRoaXMucXVlcnkgPSBudWxsO1xuICB0aGlzLnBhdGhuYW1lID0gbnVsbDtcbiAgdGhpcy5wYXRoID0gbnVsbDtcbiAgdGhpcy5ocmVmID0gbnVsbDtcbn1cblxuLy8gUmVmZXJlbmNlOiBSRkMgMzk4NiwgUkZDIDE4MDgsIFJGQyAyMzk2XG5cbi8vIGRlZmluZSB0aGVzZSBoZXJlIHNvIGF0IGxlYXN0IHRoZXkgb25seSBoYXZlIHRvIGJlXG4vLyBjb21waWxlZCBvbmNlIG9uIHRoZSBmaXJzdCBtb2R1bGUgbG9hZC5cbnZhciBwcm90b2NvbFBhdHRlcm4gPSAvXihbYS16MC05ListXSs6KS9pLFxuICAgIHBvcnRQYXR0ZXJuID0gLzpbMC05XSokLyxcblxuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgYSBzaW1wbGUgcGF0aCBVUkxcbiAgICBzaW1wbGVQYXRoUGF0dGVybiA9IC9eKFxcL1xcLz8oPyFcXC8pW15cXD9cXHNdKikoXFw/W15cXHNdKik/JC8sXG5cbiAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyByZXNlcnZlZCBmb3IgZGVsaW1pdGluZyBVUkxzLlxuICAgIC8vIFdlIGFjdHVhbGx5IGp1c3QgYXV0by1lc2NhcGUgdGhlc2UuXG4gICAgZGVsaW1zID0gWyc8JywgJz4nLCAnXCInLCAnYCcsICcgJywgJ1xccicsICdcXG4nLCAnXFx0J10sXG5cbiAgICAvLyBSRkMgMjM5NjogY2hhcmFjdGVycyBub3QgYWxsb3dlZCBmb3IgdmFyaW91cyByZWFzb25zLlxuICAgIHVud2lzZSA9IFsneycsICd9JywgJ3wnLCAnXFxcXCcsICdeJywgJ2AnXS5jb25jYXQoZGVsaW1zKSxcblxuICAgIC8vIEFsbG93ZWQgYnkgUkZDcywgYnV0IGNhdXNlIG9mIFhTUyBhdHRhY2tzLiAgQWx3YXlzIGVzY2FwZSB0aGVzZS5cbiAgICBhdXRvRXNjYXBlID0gWydcXCcnXS5jb25jYXQodW53aXNlKSxcbiAgICAvLyBDaGFyYWN0ZXJzIHRoYXQgYXJlIG5ldmVyIGV2ZXIgYWxsb3dlZCBpbiBhIGhvc3RuYW1lLlxuICAgIC8vIE5vdGUgdGhhdCBhbnkgaW52YWxpZCBjaGFycyBhcmUgYWxzbyBoYW5kbGVkLCBidXQgdGhlc2VcbiAgICAvLyBhcmUgdGhlIG9uZXMgdGhhdCBhcmUgKmV4cGVjdGVkKiB0byBiZSBzZWVuLCBzbyB3ZSBmYXN0LXBhdGhcbiAgICAvLyB0aGVtLlxuICAgIG5vbkhvc3RDaGFycyA9IFsnJScsICcvJywgJz8nLCAnOycsICcjJ10uY29uY2F0KGF1dG9Fc2NhcGUpLFxuICAgIGhvc3RFbmRpbmdDaGFycyA9IFsnLycsICc/JywgJyMnXSxcbiAgICBob3N0bmFtZU1heExlbiA9IDI1NSxcbiAgICBob3N0bmFtZVBhcnRQYXR0ZXJuID0gL15bK2EtejAtOUEtWl8tXXswLDYzfSQvLFxuICAgIGhvc3RuYW1lUGFydFN0YXJ0ID0gL14oWythLXowLTlBLVpfLV17MCw2M30pKC4qKSQvLFxuICAgIC8vIHByb3RvY29scyB0aGF0IGNhbiBhbGxvdyBcInVuc2FmZVwiIGFuZCBcInVud2lzZVwiIGNoYXJzLlxuICAgIHVuc2FmZVByb3RvY29sID0ge1xuICAgICAgJ2phdmFzY3JpcHQnOiB0cnVlLFxuICAgICAgJ2phdmFzY3JpcHQ6JzogdHJ1ZVxuICAgIH0sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgbmV2ZXIgaGF2ZSBhIGhvc3RuYW1lLlxuICAgIGhvc3RsZXNzUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBhbHdheXMgY29udGFpbiBhIC8vIGJpdC5cbiAgICBzbGFzaGVkUHJvdG9jb2wgPSB7XG4gICAgICAnaHR0cCc6IHRydWUsXG4gICAgICAnaHR0cHMnOiB0cnVlLFxuICAgICAgJ2Z0cCc6IHRydWUsXG4gICAgICAnZ29waGVyJzogdHJ1ZSxcbiAgICAgICdmaWxlJzogdHJ1ZSxcbiAgICAgICdodHRwOic6IHRydWUsXG4gICAgICAnaHR0cHM6JzogdHJ1ZSxcbiAgICAgICdmdHA6JzogdHJ1ZSxcbiAgICAgICdnb3BoZXI6JzogdHJ1ZSxcbiAgICAgICdmaWxlOic6IHRydWVcbiAgICB9LFxuICAgIHF1ZXJ5c3RyaW5nID0gcmVxdWlyZSgncXVlcnlzdHJpbmcnKTtcblxuZnVuY3Rpb24gdXJsUGFyc2UodXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCkge1xuICBpZiAodXJsICYmIHV0aWwuaXNPYmplY3QodXJsKSAmJiB1cmwgaW5zdGFuY2VvZiBVcmwpIHJldHVybiB1cmw7XG5cbiAgdmFyIHUgPSBuZXcgVXJsO1xuICB1LnBhcnNlKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpO1xuICByZXR1cm4gdTtcbn1cblxuVXJsLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHVybCwgcGFyc2VRdWVyeVN0cmluZywgc2xhc2hlc0Rlbm90ZUhvc3QpIHtcbiAgaWYgKCF1dGlsLmlzU3RyaW5nKHVybCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGFyYW1ldGVyICd1cmwnIG11c3QgYmUgYSBzdHJpbmcsIG5vdCBcIiArIHR5cGVvZiB1cmwpO1xuICB9XG5cbiAgLy8gQ29weSBjaHJvbWUsIElFLCBvcGVyYSBiYWNrc2xhc2gtaGFuZGxpbmcgYmVoYXZpb3IuXG4gIC8vIEJhY2sgc2xhc2hlcyBiZWZvcmUgdGhlIHF1ZXJ5IHN0cmluZyBnZXQgY29udmVydGVkIHRvIGZvcndhcmQgc2xhc2hlc1xuICAvLyBTZWU6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNTkxNlxuICB2YXIgcXVlcnlJbmRleCA9IHVybC5pbmRleE9mKCc/JyksXG4gICAgICBzcGxpdHRlciA9XG4gICAgICAgICAgKHF1ZXJ5SW5kZXggIT09IC0xICYmIHF1ZXJ5SW5kZXggPCB1cmwuaW5kZXhPZignIycpKSA/ICc/JyA6ICcjJyxcbiAgICAgIHVTcGxpdCA9IHVybC5zcGxpdChzcGxpdHRlciksXG4gICAgICBzbGFzaFJlZ2V4ID0gL1xcXFwvZztcbiAgdVNwbGl0WzBdID0gdVNwbGl0WzBdLnJlcGxhY2Uoc2xhc2hSZWdleCwgJy8nKTtcbiAgdXJsID0gdVNwbGl0LmpvaW4oc3BsaXR0ZXIpO1xuXG4gIHZhciByZXN0ID0gdXJsO1xuXG4gIC8vIHRyaW0gYmVmb3JlIHByb2NlZWRpbmcuXG4gIC8vIFRoaXMgaXMgdG8gc3VwcG9ydCBwYXJzZSBzdHVmZiBsaWtlIFwiICBodHRwOi8vZm9vLmNvbSAgXFxuXCJcbiAgcmVzdCA9IHJlc3QudHJpbSgpO1xuXG4gIGlmICghc2xhc2hlc0Rlbm90ZUhvc3QgJiYgdXJsLnNwbGl0KCcjJykubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gVHJ5IGZhc3QgcGF0aCByZWdleHBcbiAgICB2YXIgc2ltcGxlUGF0aCA9IHNpbXBsZVBhdGhQYXR0ZXJuLmV4ZWMocmVzdCk7XG4gICAgaWYgKHNpbXBsZVBhdGgpIHtcbiAgICAgIHRoaXMucGF0aCA9IHJlc3Q7XG4gICAgICB0aGlzLmhyZWYgPSByZXN0O1xuICAgICAgdGhpcy5wYXRobmFtZSA9IHNpbXBsZVBhdGhbMV07XG4gICAgICBpZiAoc2ltcGxlUGF0aFsyXSkge1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNpbXBsZVBhdGhbMl07XG4gICAgICAgIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHRoaXMuc2VhcmNoLnN1YnN0cigxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuc2VhcmNoLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm90byA9IHByb3RvY29sUGF0dGVybi5leGVjKHJlc3QpO1xuICBpZiAocHJvdG8pIHtcbiAgICBwcm90byA9IHByb3RvWzBdO1xuICAgIHZhciBsb3dlclByb3RvID0gcHJvdG8udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnByb3RvY29sID0gbG93ZXJQcm90bztcbiAgICByZXN0ID0gcmVzdC5zdWJzdHIocHJvdG8ubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIGZpZ3VyZSBvdXQgaWYgaXQncyBnb3QgYSBob3N0XG4gIC8vIHVzZXJAc2VydmVyIGlzICphbHdheXMqIGludGVycHJldGVkIGFzIGEgaG9zdG5hbWUsIGFuZCB1cmxcbiAgLy8gcmVzb2x1dGlvbiB3aWxsIHRyZWF0IC8vZm9vL2JhciBhcyBob3N0PWZvbyxwYXRoPWJhciBiZWNhdXNlIHRoYXQnc1xuICAvLyBob3cgdGhlIGJyb3dzZXIgcmVzb2x2ZXMgcmVsYXRpdmUgVVJMcy5cbiAgaWYgKHNsYXNoZXNEZW5vdGVIb3N0IHx8IHByb3RvIHx8IHJlc3QubWF0Y2goL15cXC9cXC9bXkBcXC9dK0BbXkBcXC9dKy8pKSB7XG4gICAgdmFyIHNsYXNoZXMgPSByZXN0LnN1YnN0cigwLCAyKSA9PT0gJy8vJztcbiAgICBpZiAoc2xhc2hlcyAmJiAhKHByb3RvICYmIGhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dKSkge1xuICAgICAgcmVzdCA9IHJlc3Quc3Vic3RyKDIpO1xuICAgICAgdGhpcy5zbGFzaGVzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWhvc3RsZXNzUHJvdG9jb2xbcHJvdG9dICYmXG4gICAgICAoc2xhc2hlcyB8fCAocHJvdG8gJiYgIXNsYXNoZWRQcm90b2NvbFtwcm90b10pKSkge1xuXG4gICAgLy8gdGhlcmUncyBhIGhvc3RuYW1lLlxuICAgIC8vIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiAvLCA/LCA7LCBvciAjIGVuZHMgdGhlIGhvc3QuXG4gICAgLy9cbiAgICAvLyBJZiB0aGVyZSBpcyBhbiBAIGluIHRoZSBob3N0bmFtZSwgdGhlbiBub24taG9zdCBjaGFycyAqYXJlKiBhbGxvd2VkXG4gICAgLy8gdG8gdGhlIGxlZnQgb2YgdGhlIGxhc3QgQCBzaWduLCB1bmxlc3Mgc29tZSBob3N0LWVuZGluZyBjaGFyYWN0ZXJcbiAgICAvLyBjb21lcyAqYmVmb3JlKiB0aGUgQC1zaWduLlxuICAgIC8vIFVSTHMgYXJlIG9ibm94aW91cy5cbiAgICAvL1xuICAgIC8vIGV4OlxuICAgIC8vIGh0dHA6Ly9hQGJAYy8gPT4gdXNlcjphQGIgaG9zdDpjXG4gICAgLy8gaHR0cDovL2FAYj9AYyA9PiB1c2VyOmEgaG9zdDpjIHBhdGg6Lz9AY1xuXG4gICAgLy8gdjAuMTIgVE9ETyhpc2FhY3MpOiBUaGlzIGlzIG5vdCBxdWl0ZSBob3cgQ2hyb21lIGRvZXMgdGhpbmdzLlxuICAgIC8vIFJldmlldyBvdXIgdGVzdCBjYXNlIGFnYWluc3QgYnJvd3NlcnMgbW9yZSBjb21wcmVoZW5zaXZlbHkuXG5cbiAgICAvLyBmaW5kIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhbnkgaG9zdEVuZGluZ0NoYXJzXG4gICAgdmFyIGhvc3RFbmQgPSAtMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhvc3RFbmRpbmdDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGhlYyA9IHJlc3QuaW5kZXhPZihob3N0RW5kaW5nQ2hhcnNbaV0pO1xuICAgICAgaWYgKGhlYyAhPT0gLTEgJiYgKGhvc3RFbmQgPT09IC0xIHx8IGhlYyA8IGhvc3RFbmQpKVxuICAgICAgICBob3N0RW5kID0gaGVjO1xuICAgIH1cblxuICAgIC8vIGF0IHRoaXMgcG9pbnQsIGVpdGhlciB3ZSBoYXZlIGFuIGV4cGxpY2l0IHBvaW50IHdoZXJlIHRoZVxuICAgIC8vIGF1dGggcG9ydGlvbiBjYW5ub3QgZ28gcGFzdCwgb3IgdGhlIGxhc3QgQCBjaGFyIGlzIHRoZSBkZWNpZGVyLlxuICAgIHZhciBhdXRoLCBhdFNpZ247XG4gICAgaWYgKGhvc3RFbmQgPT09IC0xKSB7XG4gICAgICAvLyBhdFNpZ24gY2FuIGJlIGFueXdoZXJlLlxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhdFNpZ24gbXVzdCBiZSBpbiBhdXRoIHBvcnRpb24uXG4gICAgICAvLyBodHRwOi8vYUBiL2NAZCA9PiBob3N0OmIgYXV0aDphIHBhdGg6L2NAZFxuICAgICAgYXRTaWduID0gcmVzdC5sYXN0SW5kZXhPZignQCcsIGhvc3RFbmQpO1xuICAgIH1cblxuICAgIC8vIE5vdyB3ZSBoYXZlIGEgcG9ydGlvbiB3aGljaCBpcyBkZWZpbml0ZWx5IHRoZSBhdXRoLlxuICAgIC8vIFB1bGwgdGhhdCBvZmYuXG4gICAgaWYgKGF0U2lnbiAhPT0gLTEpIHtcbiAgICAgIGF1dGggPSByZXN0LnNsaWNlKDAsIGF0U2lnbik7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZShhdFNpZ24gKyAxKTtcbiAgICAgIHRoaXMuYXV0aCA9IGRlY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgaG9zdCBpcyB0aGUgcmVtYWluaW5nIHRvIHRoZSBsZWZ0IG9mIHRoZSBmaXJzdCBub24taG9zdCBjaGFyXG4gICAgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9uSG9zdENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKG5vbkhvc3RDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuICAgIC8vIGlmIHdlIHN0aWxsIGhhdmUgbm90IGhpdCBpdCwgdGhlbiB0aGUgZW50aXJlIHRoaW5nIGlzIGEgaG9zdC5cbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpXG4gICAgICBob3N0RW5kID0gcmVzdC5sZW5ndGg7XG5cbiAgICB0aGlzLmhvc3QgPSByZXN0LnNsaWNlKDAsIGhvc3RFbmQpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKGhvc3RFbmQpO1xuXG4gICAgLy8gcHVsbCBvdXQgcG9ydC5cbiAgICB0aGlzLnBhcnNlSG9zdCgpO1xuXG4gICAgLy8gd2UndmUgaW5kaWNhdGVkIHRoYXQgdGhlcmUgaXMgYSBob3N0bmFtZSxcbiAgICAvLyBzbyBldmVuIGlmIGl0J3MgZW1wdHksIGl0IGhhcyB0byBiZSBwcmVzZW50LlxuICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuXG4gICAgLy8gaWYgaG9zdG5hbWUgYmVnaW5zIHdpdGggWyBhbmQgZW5kcyB3aXRoIF1cbiAgICAvLyBhc3N1bWUgdGhhdCBpdCdzIGFuIElQdjYgYWRkcmVzcy5cbiAgICB2YXIgaXB2Nkhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZVswXSA9PT0gJ1snICYmXG4gICAgICAgIHRoaXMuaG9zdG5hbWVbdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAxXSA9PT0gJ10nO1xuXG4gICAgLy8gdmFsaWRhdGUgYSBsaXR0bGUuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIHZhciBob3N0cGFydHMgPSB0aGlzLmhvc3RuYW1lLnNwbGl0KC9cXC4vKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gaG9zdHBhcnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGhvc3RwYXJ0c1tpXTtcbiAgICAgICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFwYXJ0Lm1hdGNoKGhvc3RuYW1lUGFydFBhdHRlcm4pKSB7XG4gICAgICAgICAgdmFyIG5ld3BhcnQgPSAnJztcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgayA9IHBhcnQubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgICBpZiAocGFydC5jaGFyQ29kZUF0KGopID4gMTI3KSB7XG4gICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2Ugbm9uLUFTQ0lJIGNoYXIgd2l0aCBhIHRlbXBvcmFyeSBwbGFjZWhvbGRlclxuICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRoaXMgdG8gbWFrZSBzdXJlIHNpemUgb2YgaG9zdG5hbWUgaXMgbm90XG4gICAgICAgICAgICAgIC8vIGJyb2tlbiBieSByZXBsYWNpbmcgbm9uLUFTQ0lJIGJ5IG5vdGhpbmdcbiAgICAgICAgICAgICAgbmV3cGFydCArPSAneCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9IHBhcnRbal07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHdlIHRlc3QgYWdhaW4gd2l0aCBBU0NJSSBjaGFyIG9ubHlcbiAgICAgICAgICBpZiAoIW5ld3BhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICAgIHZhciB2YWxpZFBhcnRzID0gaG9zdHBhcnRzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgdmFyIG5vdEhvc3QgPSBob3N0cGFydHMuc2xpY2UoaSArIDEpO1xuICAgICAgICAgICAgdmFyIGJpdCA9IHBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0U3RhcnQpO1xuICAgICAgICAgICAgaWYgKGJpdCkge1xuICAgICAgICAgICAgICB2YWxpZFBhcnRzLnB1c2goYml0WzFdKTtcbiAgICAgICAgICAgICAgbm90SG9zdC51bnNoaWZ0KGJpdFsyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm90SG9zdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVzdCA9ICcvJyArIG5vdEhvc3Quam9pbignLicpICsgcmVzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaG9zdG5hbWUgPSB2YWxpZFBhcnRzLmpvaW4oJy4nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmhvc3RuYW1lLmxlbmd0aCA+IGhvc3RuYW1lTWF4TGVuKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhvc3RuYW1lcyBhcmUgYWx3YXlzIGxvd2VyIGNhc2UuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICghaXB2Nkhvc3RuYW1lKSB7XG4gICAgICAvLyBJRE5BIFN1cHBvcnQ6IFJldHVybnMgYSBwdW55Y29kZWQgcmVwcmVzZW50YXRpb24gb2YgXCJkb21haW5cIi5cbiAgICAgIC8vIEl0IG9ubHkgY29udmVydHMgcGFydHMgb2YgdGhlIGRvbWFpbiBuYW1lIHRoYXRcbiAgICAgIC8vIGhhdmUgbm9uLUFTQ0lJIGNoYXJhY3RlcnMsIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWZcbiAgICAgIC8vIHlvdSBjYWxsIGl0IHdpdGggYSBkb21haW4gdGhhdCBhbHJlYWR5IGlzIEFTQ0lJLW9ubHkuXG4gICAgICB0aGlzLmhvc3RuYW1lID0gcHVueWNvZGUudG9BU0NJSSh0aGlzLmhvc3RuYW1lKTtcbiAgICB9XG5cbiAgICB2YXIgcCA9IHRoaXMucG9ydCA/ICc6JyArIHRoaXMucG9ydCA6ICcnO1xuICAgIHZhciBoID0gdGhpcy5ob3N0bmFtZSB8fCAnJztcbiAgICB0aGlzLmhvc3QgPSBoICsgcDtcbiAgICB0aGlzLmhyZWYgKz0gdGhpcy5ob3N0O1xuXG4gICAgLy8gc3RyaXAgWyBhbmQgXSBmcm9tIHRoZSBob3N0bmFtZVxuICAgIC8vIHRoZSBob3N0IGZpZWxkIHN0aWxsIHJldGFpbnMgdGhlbSwgdGhvdWdoXG4gICAgaWYgKGlwdjZIb3N0bmFtZSkge1xuICAgICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUuc3Vic3RyKDEsIHRoaXMuaG9zdG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBpZiAocmVzdFswXSAhPT0gJy8nKSB7XG4gICAgICAgIHJlc3QgPSAnLycgKyByZXN0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vdyByZXN0IGlzIHNldCB0byB0aGUgcG9zdC1ob3N0IHN0dWZmLlxuICAvLyBjaG9wIG9mZiBhbnkgZGVsaW0gY2hhcnMuXG4gIGlmICghdW5zYWZlUHJvdG9jb2xbbG93ZXJQcm90b10pIHtcblxuICAgIC8vIEZpcnN0LCBtYWtlIDEwMCUgc3VyZSB0aGF0IGFueSBcImF1dG9Fc2NhcGVcIiBjaGFycyBnZXRcbiAgICAvLyBlc2NhcGVkLCBldmVuIGlmIGVuY29kZVVSSUNvbXBvbmVudCBkb2Vzbid0IHRoaW5rIHRoZXlcbiAgICAvLyBuZWVkIHRvIGJlLlxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXV0b0VzY2FwZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBhZSA9IGF1dG9Fc2NhcGVbaV07XG4gICAgICBpZiAocmVzdC5pbmRleE9mKGFlKSA9PT0gLTEpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgdmFyIGVzYyA9IGVuY29kZVVSSUNvbXBvbmVudChhZSk7XG4gICAgICBpZiAoZXNjID09PSBhZSkge1xuICAgICAgICBlc2MgPSBlc2NhcGUoYWUpO1xuICAgICAgfVxuICAgICAgcmVzdCA9IHJlc3Quc3BsaXQoYWUpLmpvaW4oZXNjKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIGNob3Agb2ZmIGZyb20gdGhlIHRhaWwgZmlyc3QuXG4gIHZhciBoYXNoID0gcmVzdC5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoICE9PSAtMSkge1xuICAgIC8vIGdvdCBhIGZyYWdtZW50IHN0cmluZy5cbiAgICB0aGlzLmhhc2ggPSByZXN0LnN1YnN0cihoYXNoKTtcbiAgICByZXN0ID0gcmVzdC5zbGljZSgwLCBoYXNoKTtcbiAgfVxuICB2YXIgcW0gPSByZXN0LmluZGV4T2YoJz8nKTtcbiAgaWYgKHFtICE9PSAtMSkge1xuICAgIHRoaXMuc2VhcmNoID0gcmVzdC5zdWJzdHIocW0pO1xuICAgIHRoaXMucXVlcnkgPSByZXN0LnN1YnN0cihxbSArIDEpO1xuICAgIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlzdHJpbmcucGFyc2UodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIHFtKTtcbiAgfSBlbHNlIGlmIChwYXJzZVF1ZXJ5U3RyaW5nKSB7XG4gICAgLy8gbm8gcXVlcnkgc3RyaW5nLCBidXQgcGFyc2VRdWVyeVN0cmluZyBzdGlsbCByZXF1ZXN0ZWRcbiAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgfVxuICBpZiAocmVzdCkgdGhpcy5wYXRobmFtZSA9IHJlc3Q7XG4gIGlmIChzbGFzaGVkUHJvdG9jb2xbbG93ZXJQcm90b10gJiZcbiAgICAgIHRoaXMuaG9zdG5hbWUgJiYgIXRoaXMucGF0aG5hbWUpIHtcbiAgICB0aGlzLnBhdGhuYW1lID0gJy8nO1xuICB9XG5cbiAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICBpZiAodGhpcy5wYXRobmFtZSB8fCB0aGlzLnNlYXJjaCkge1xuICAgIHZhciBwID0gdGhpcy5wYXRobmFtZSB8fCAnJztcbiAgICB2YXIgcyA9IHRoaXMuc2VhcmNoIHx8ICcnO1xuICAgIHRoaXMucGF0aCA9IHAgKyBzO1xuICB9XG5cbiAgLy8gZmluYWxseSwgcmVjb25zdHJ1Y3QgdGhlIGhyZWYgYmFzZWQgb24gd2hhdCBoYXMgYmVlbiB2YWxpZGF0ZWQuXG4gIHRoaXMuaHJlZiA9IHRoaXMuZm9ybWF0KCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZm9ybWF0IGEgcGFyc2VkIG9iamVjdCBpbnRvIGEgdXJsIHN0cmluZ1xuZnVuY3Rpb24gdXJsRm9ybWF0KG9iaikge1xuICAvLyBlbnN1cmUgaXQncyBhbiBvYmplY3QsIGFuZCBub3QgYSBzdHJpbmcgdXJsLlxuICAvLyBJZiBpdCdzIGFuIG9iaiwgdGhpcyBpcyBhIG5vLW9wLlxuICAvLyB0aGlzIHdheSwgeW91IGNhbiBjYWxsIHVybF9mb3JtYXQoKSBvbiBzdHJpbmdzXG4gIC8vIHRvIGNsZWFuIHVwIHBvdGVudGlhbGx5IHdvbmt5IHVybHMuXG4gIGlmICh1dGlsLmlzU3RyaW5nKG9iaikpIG9iaiA9IHVybFBhcnNlKG9iaik7XG4gIGlmICghKG9iaiBpbnN0YW5jZW9mIFVybCkpIHJldHVybiBVcmwucHJvdG90eXBlLmZvcm1hdC5jYWxsKG9iaik7XG4gIHJldHVybiBvYmouZm9ybWF0KCk7XG59XG5cblVybC5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhdXRoID0gdGhpcy5hdXRoIHx8ICcnO1xuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksICc6Jyk7XG4gICAgYXV0aCArPSAnQCc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sIHx8ICcnLFxuICAgICAgcGF0aG5hbWUgPSB0aGlzLnBhdGhuYW1lIHx8ICcnLFxuICAgICAgaGFzaCA9IHRoaXMuaGFzaCB8fCAnJyxcbiAgICAgIGhvc3QgPSBmYWxzZSxcbiAgICAgIHF1ZXJ5ID0gJyc7XG5cbiAgaWYgKHRoaXMuaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdGhpcy5ob3N0O1xuICB9IGVsc2UgaWYgKHRoaXMuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSA9PT0gLTEgP1xuICAgICAgICB0aGlzLmhvc3RuYW1lIDpcbiAgICAgICAgJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyk7XG4gICAgaWYgKHRoaXMucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB0aGlzLnBvcnQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMucXVlcnkgJiZcbiAgICAgIHV0aWwuaXNPYmplY3QodGhpcy5xdWVyeSkgJiZcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMucXVlcnkpLmxlbmd0aCkge1xuICAgIHF1ZXJ5ID0gcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHRoaXMucXVlcnkpO1xuICB9XG5cbiAgdmFyIHNlYXJjaCA9IHRoaXMuc2VhcmNoIHx8IChxdWVyeSAmJiAoJz8nICsgcXVlcnkpKSB8fCAnJztcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOic7XG5cbiAgLy8gb25seSB0aGUgc2xhc2hlZFByb3RvY29scyBnZXQgdGhlIC8vLiAgTm90IG1haWx0bzosIHhtcHA6LCBldGMuXG4gIC8vIHVubGVzcyB0aGV5IGhhZCB0aGVtIHRvIGJlZ2luIHdpdGguXG4gIGlmICh0aGlzLnNsYXNoZXMgfHxcbiAgICAgICghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29sW3Byb3RvY29sXSkgJiYgaG9zdCAhPT0gZmFsc2UpIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKTtcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWU7XG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJyc7XG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaDtcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2guY2hhckF0KDApICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaDtcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgfSk7XG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpO1xuXG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG59O1xuXG5mdW5jdGlvbiB1cmxSZXNvbHZlKHNvdXJjZSwgcmVsYXRpdmUpIHtcbiAgcmV0dXJuIHVybFBhcnNlKHNvdXJjZSwgZmFsc2UsIHRydWUpLnJlc29sdmUocmVsYXRpdmUpO1xufVxuXG5VcmwucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICByZXR1cm4gdGhpcy5yZXNvbHZlT2JqZWN0KHVybFBhcnNlKHJlbGF0aXZlLCBmYWxzZSwgdHJ1ZSkpLmZvcm1hdCgpO1xufTtcblxuZnVuY3Rpb24gdXJsUmVzb2x2ZU9iamVjdChzb3VyY2UsIHJlbGF0aXZlKSB7XG4gIGlmICghc291cmNlKSByZXR1cm4gcmVsYXRpdmU7XG4gIHJldHVybiB1cmxQYXJzZShzb3VyY2UsIGZhbHNlLCB0cnVlKS5yZXNvbHZlT2JqZWN0KHJlbGF0aXZlKTtcbn1cblxuVXJsLnByb3RvdHlwZS5yZXNvbHZlT2JqZWN0ID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcbiAgaWYgKHV0aWwuaXNTdHJpbmcocmVsYXRpdmUpKSB7XG4gICAgdmFyIHJlbCA9IG5ldyBVcmwoKTtcbiAgICByZWwucGFyc2UocmVsYXRpdmUsIGZhbHNlLCB0cnVlKTtcbiAgICByZWxhdGl2ZSA9IHJlbDtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgVXJsKCk7XG4gIHZhciB0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMpO1xuICBmb3IgKHZhciB0ayA9IDA7IHRrIDwgdGtleXMubGVuZ3RoOyB0aysrKSB7XG4gICAgdmFyIHRrZXkgPSB0a2V5c1t0a107XG4gICAgcmVzdWx0W3RrZXldID0gdGhpc1t0a2V5XTtcbiAgfVxuXG4gIC8vIGhhc2ggaXMgYWx3YXlzIG92ZXJyaWRkZW4sIG5vIG1hdHRlciB3aGF0LlxuICAvLyBldmVuIGhyZWY9XCJcIiB3aWxsIHJlbW92ZSBpdC5cbiAgcmVzdWx0Lmhhc2ggPSByZWxhdGl2ZS5oYXNoO1xuXG4gIC8vIGlmIHRoZSByZWxhdGl2ZSB1cmwgaXMgZW1wdHksIHRoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gZG8gaGVyZS5cbiAgaWYgKHJlbGF0aXZlLmhyZWYgPT09ICcnKSB7XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGhyZWZzIGxpa2UgLy9mb28vYmFyIGFsd2F5cyBjdXQgdG8gdGhlIHByb3RvY29sLlxuICBpZiAocmVsYXRpdmUuc2xhc2hlcyAmJiAhcmVsYXRpdmUucHJvdG9jb2wpIHtcbiAgICAvLyB0YWtlIGV2ZXJ5dGhpbmcgZXhjZXB0IHRoZSBwcm90b2NvbCBmcm9tIHJlbGF0aXZlXG4gICAgdmFyIHJrZXlzID0gT2JqZWN0LmtleXMocmVsYXRpdmUpO1xuICAgIGZvciAodmFyIHJrID0gMDsgcmsgPCBya2V5cy5sZW5ndGg7IHJrKyspIHtcbiAgICAgIHZhciBya2V5ID0gcmtleXNbcmtdO1xuICAgICAgaWYgKHJrZXkgIT09ICdwcm90b2NvbCcpXG4gICAgICAgIHJlc3VsdFtya2V5XSA9IHJlbGF0aXZlW3JrZXldO1xuICAgIH1cblxuICAgIC8vdXJsUGFyc2UgYXBwZW5kcyB0cmFpbGluZyAvIHRvIHVybHMgbGlrZSBodHRwOi8vd3d3LmV4YW1wbGUuY29tXG4gICAgaWYgKHNsYXNoZWRQcm90b2NvbFtyZXN1bHQucHJvdG9jb2xdICYmXG4gICAgICAgIHJlc3VsdC5ob3N0bmFtZSAmJiAhcmVzdWx0LnBhdGhuYW1lKSB7XG4gICAgICByZXN1bHQucGF0aCA9IHJlc3VsdC5wYXRobmFtZSA9ICcvJztcbiAgICB9XG5cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKHJlbGF0aXZlLnByb3RvY29sICYmIHJlbGF0aXZlLnByb3RvY29sICE9PSByZXN1bHQucHJvdG9jb2wpIHtcbiAgICAvLyBpZiBpdCdzIGEga25vd24gdXJsIHByb3RvY29sLCB0aGVuIGNoYW5naW5nXG4gICAgLy8gdGhlIHByb3RvY29sIGRvZXMgd2VpcmQgdGhpbmdzXG4gICAgLy8gZmlyc3QsIGlmIGl0J3Mgbm90IGZpbGU6LCB0aGVuIHdlIE1VU1QgaGF2ZSBhIGhvc3QsXG4gICAgLy8gYW5kIGlmIHRoZXJlIHdhcyBhIHBhdGhcbiAgICAvLyB0byBiZWdpbiB3aXRoLCB0aGVuIHdlIE1VU1QgaGF2ZSBhIHBhdGguXG4gICAgLy8gaWYgaXQgaXMgZmlsZTosIHRoZW4gdGhlIGhvc3QgaXMgZHJvcHBlZCxcbiAgICAvLyBiZWNhdXNlIHRoYXQncyBrbm93biB0byBiZSBob3N0bGVzcy5cbiAgICAvLyBhbnl0aGluZyBlbHNlIGlzIGFzc3VtZWQgdG8gYmUgYWJzb2x1dGUuXG4gICAgaWYgKCFzbGFzaGVkUHJvdG9jb2xbcmVsYXRpdmUucHJvdG9jb2xdKSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJlbGF0aXZlKTtcbiAgICAgIGZvciAodmFyIHYgPSAwOyB2IDwga2V5cy5sZW5ndGg7IHYrKykge1xuICAgICAgICB2YXIgayA9IGtleXNbdl07XG4gICAgICAgIHJlc3VsdFtrXSA9IHJlbGF0aXZlW2tdO1xuICAgICAgfVxuICAgICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJlc3VsdC5wcm90b2NvbCA9IHJlbGF0aXZlLnByb3RvY29sO1xuICAgIGlmICghcmVsYXRpdmUuaG9zdCAmJiAhaG9zdGxlc3NQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciByZWxQYXRoID0gKHJlbGF0aXZlLnBhdGhuYW1lIHx8ICcnKS5zcGxpdCgnLycpO1xuICAgICAgd2hpbGUgKHJlbFBhdGgubGVuZ3RoICYmICEocmVsYXRpdmUuaG9zdCA9IHJlbFBhdGguc2hpZnQoKSkpO1xuICAgICAgaWYgKCFyZWxhdGl2ZS5ob3N0KSByZWxhdGl2ZS5ob3N0ID0gJyc7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3RuYW1lKSByZWxhdGl2ZS5ob3N0bmFtZSA9ICcnO1xuICAgICAgaWYgKHJlbFBhdGhbMF0gIT09ICcnKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgaWYgKHJlbFBhdGgubGVuZ3RoIDwgMikgcmVsUGF0aC51bnNoaWZ0KCcnKTtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbFBhdGguam9pbignLycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aG5hbWUgPSByZWxhdGl2ZS5wYXRobmFtZTtcbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICByZXN1bHQuaG9zdCA9IHJlbGF0aXZlLmhvc3QgfHwgJyc7XG4gICAgcmVzdWx0LmF1dGggPSByZWxhdGl2ZS5hdXRoO1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9IHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3Q7XG4gICAgcmVzdWx0LnBvcnQgPSByZWxhdGl2ZS5wb3J0O1xuICAgIC8vIHRvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKHJlc3VsdC5wYXRobmFtZSB8fCByZXN1bHQuc2VhcmNoKSB7XG4gICAgICB2YXIgcCA9IHJlc3VsdC5wYXRobmFtZSB8fCAnJztcbiAgICAgIHZhciBzID0gcmVzdWx0LnNlYXJjaCB8fCAnJztcbiAgICAgIHJlc3VsdC5wYXRoID0gcCArIHM7XG4gICAgfVxuICAgIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdmFyIGlzU291cmNlQWJzID0gKHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpLFxuICAgICAgaXNSZWxBYnMgPSAoXG4gICAgICAgICAgcmVsYXRpdmUuaG9zdCB8fFxuICAgICAgICAgIHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nXG4gICAgICApLFxuICAgICAgbXVzdEVuZEFicyA9IChpc1JlbEFicyB8fCBpc1NvdXJjZUFicyB8fFxuICAgICAgICAgICAgICAgICAgICAocmVzdWx0Lmhvc3QgJiYgcmVsYXRpdmUucGF0aG5hbWUpKSxcbiAgICAgIHJlbW92ZUFsbERvdHMgPSBtdXN0RW5kQWJzLFxuICAgICAgc3JjUGF0aCA9IHJlc3VsdC5wYXRobmFtZSAmJiByZXN1bHQucGF0aG5hbWUuc3BsaXQoJy8nKSB8fCBbXSxcbiAgICAgIHJlbFBhdGggPSByZWxhdGl2ZS5wYXRobmFtZSAmJiByZWxhdGl2ZS5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcHN5Y2hvdGljID0gcmVzdWx0LnByb3RvY29sICYmICFzbGFzaGVkUHJvdG9jb2xbcmVzdWx0LnByb3RvY29sXTtcblxuICAvLyBpZiB0aGUgdXJsIGlzIGEgbm9uLXNsYXNoZWQgdXJsLCB0aGVuIHJlbGF0aXZlXG4gIC8vIGxpbmtzIGxpa2UgLi4vLi4gc2hvdWxkIGJlIGFibGVcbiAgLy8gdG8gY3Jhd2wgdXAgdG8gdGhlIGhvc3RuYW1lLCBhcyB3ZWxsLiAgVGhpcyBpcyBzdHJhbmdlLlxuICAvLyByZXN1bHQucHJvdG9jb2wgaGFzIGFscmVhZHkgYmVlbiBzZXQgYnkgbm93LlxuICAvLyBMYXRlciBvbiwgcHV0IHRoZSBmaXJzdCBwYXRoIHBhcnQgaW50byB0aGUgaG9zdCBmaWVsZC5cbiAgaWYgKHBzeWNob3RpYykge1xuICAgIHJlc3VsdC5ob3N0bmFtZSA9ICcnO1xuICAgIHJlc3VsdC5wb3J0ID0gbnVsbDtcbiAgICBpZiAocmVzdWx0Lmhvc3QpIHtcbiAgICAgIGlmIChzcmNQYXRoWzBdID09PSAnJykgc3JjUGF0aFswXSA9IHJlc3VsdC5ob3N0O1xuICAgICAgZWxzZSBzcmNQYXRoLnVuc2hpZnQocmVzdWx0Lmhvc3QpO1xuICAgIH1cbiAgICByZXN1bHQuaG9zdCA9ICcnO1xuICAgIGlmIChyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgPSBudWxsO1xuICAgICAgcmVsYXRpdmUucG9ydCA9IG51bGw7XG4gICAgICBpZiAocmVsYXRpdmUuaG9zdCkge1xuICAgICAgICBpZiAocmVsUGF0aFswXSA9PT0gJycpIHJlbFBhdGhbMF0gPSByZWxhdGl2ZS5ob3N0O1xuICAgICAgICBlbHNlIHJlbFBhdGgudW5zaGlmdChyZWxhdGl2ZS5ob3N0KTtcbiAgICAgIH1cbiAgICAgIHJlbGF0aXZlLmhvc3QgPSBudWxsO1xuICAgIH1cbiAgICBtdXN0RW5kQWJzID0gbXVzdEVuZEFicyAmJiAocmVsUGF0aFswXSA9PT0gJycgfHwgc3JjUGF0aFswXSA9PT0gJycpO1xuICB9XG5cbiAgaWYgKGlzUmVsQWJzKSB7XG4gICAgLy8gaXQncyBhYnNvbHV0ZS5cbiAgICByZXN1bHQuaG9zdCA9IChyZWxhdGl2ZS5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICByZWxhdGl2ZS5ob3N0IDogcmVzdWx0Lmhvc3Q7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gKHJlbGF0aXZlLmhvc3RuYW1lIHx8IHJlbGF0aXZlLmhvc3RuYW1lID09PSAnJykgP1xuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3RuYW1lIDogcmVzdWx0Lmhvc3RuYW1lO1xuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgc3JjUGF0aCA9IHJlbFBhdGg7XG4gICAgLy8gZmFsbCB0aHJvdWdoIHRvIHRoZSBkb3QtaGFuZGxpbmcgYmVsb3cuXG4gIH0gZWxzZSBpZiAocmVsUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBpdCdzIHJlbGF0aXZlXG4gICAgLy8gdGhyb3cgYXdheSB0aGUgZXhpc3RpbmcgZmlsZSwgYW5kIHRha2UgdGhlIG5ldyBwYXRoIGluc3RlYWQuXG4gICAgaWYgKCFzcmNQYXRoKSBzcmNQYXRoID0gW107XG4gICAgc3JjUGF0aC5wb3AoKTtcbiAgICBzcmNQYXRoID0gc3JjUGF0aC5jb25jYXQocmVsUGF0aCk7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgfSBlbHNlIGlmICghdXRpbC5pc051bGxPclVuZGVmaW5lZChyZWxhdGl2ZS5zZWFyY2gpKSB7XG4gICAgLy8ganVzdCBwdWxsIG91dCB0aGUgc2VhcmNoLlxuICAgIC8vIGxpa2UgaHJlZj0nP2ZvbycuXG4gICAgLy8gUHV0IHRoaXMgYWZ0ZXIgdGhlIG90aGVyIHR3byBjYXNlcyBiZWNhdXNlIGl0IHNpbXBsaWZpZXMgdGhlIGJvb2xlYW5zXG4gICAgaWYgKHBzeWNob3RpYykge1xuICAgICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBzcmNQYXRoLnNoaWZ0KCk7XG4gICAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgICAvL3RoaXMgZXNwZWNpYWxseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAgIC8vdXJsLnJlc29sdmVPYmplY3QoJ21haWx0bzpsb2NhbDFAZG9tYWluMScsICdsb2NhbDJAZG9tYWluMicpXG4gICAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgICBpZiAoYXV0aEluSG9zdCkge1xuICAgICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5zZWFyY2ggPSByZWxhdGl2ZS5zZWFyY2g7XG4gICAgcmVzdWx0LnF1ZXJ5ID0gcmVsYXRpdmUucXVlcnk7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmICghdXRpbC5pc051bGwocmVzdWx0LnBhdGhuYW1lKSB8fCAhdXRpbC5pc051bGwocmVzdWx0LnNlYXJjaCkpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gKHJlc3VsdC5wYXRobmFtZSA/IHJlc3VsdC5wYXRobmFtZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQuc2VhcmNoID8gcmVzdWx0LnNlYXJjaCA6ICcnKTtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmICghc3JjUGF0aC5sZW5ndGgpIHtcbiAgICAvLyBubyBwYXRoIGF0IGFsbC4gIGVhc3kuXG4gICAgLy8gd2UndmUgYWxyZWFkeSBoYW5kbGVkIHRoZSBvdGhlciBzdHVmZiBhYm92ZS5cbiAgICByZXN1bHQucGF0aG5hbWUgPSBudWxsO1xuICAgIC8vdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAocmVzdWx0LnNlYXJjaCkge1xuICAgICAgcmVzdWx0LnBhdGggPSAnLycgKyByZXN1bHQuc2VhcmNoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gICAgfVxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBpZiBhIHVybCBFTkRzIGluIC4gb3IgLi4sIHRoZW4gaXQgbXVzdCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgLy8gaG93ZXZlciwgaWYgaXQgZW5kcyBpbiBhbnl0aGluZyBlbHNlIG5vbi1zbGFzaHksXG4gIC8vIHRoZW4gaXQgbXVzdCBOT1QgZ2V0IGEgdHJhaWxpbmcgc2xhc2guXG4gIHZhciBsYXN0ID0gc3JjUGF0aC5zbGljZSgtMSlbMF07XG4gIHZhciBoYXNUcmFpbGluZ1NsYXNoID0gKFxuICAgICAgKHJlc3VsdC5ob3N0IHx8IHJlbGF0aXZlLmhvc3QgfHwgc3JjUGF0aC5sZW5ndGggPiAxKSAmJlxuICAgICAgKGxhc3QgPT09ICcuJyB8fCBsYXN0ID09PSAnLi4nKSB8fCBsYXN0ID09PSAnJyk7XG5cbiAgLy8gc3RyaXAgc2luZ2xlIGRvdHMsIHJlc29sdmUgZG91YmxlIGRvdHMgdG8gcGFyZW50IGRpclxuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gc3JjUGF0aC5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGFzdCA9IHNyY1BhdGhbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgc3JjUGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKCFtdXN0RW5kQWJzICYmICFyZW1vdmVBbGxEb3RzKSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBzcmNQYXRoLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgc3JjUGF0aFswXSAhPT0gJycgJiZcbiAgICAgICghc3JjUGF0aFswXSB8fCBzcmNQYXRoWzBdLmNoYXJBdCgwKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiAoc3JjUGF0aC5qb2luKCcvJykuc3Vic3RyKC0xKSAhPT0gJy8nKSkge1xuICAgIHNyY1BhdGgucHVzaCgnJyk7XG4gIH1cblxuICB2YXIgaXNBYnNvbHV0ZSA9IHNyY1BhdGhbMF0gPT09ICcnIHx8XG4gICAgICAoc3JjUGF0aFswXSAmJiBzcmNQYXRoWzBdLmNoYXJBdCgwKSA9PT0gJy8nKTtcblxuICAvLyBwdXQgdGhlIGhvc3QgYmFja1xuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVzdWx0Lmhvc3QgPSBpc0Fic29sdXRlID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjUGF0aC5sZW5ndGggPyBzcmNQYXRoLnNoaWZ0KCkgOiAnJztcbiAgICAvL29jY2F0aW9uYWx5IHRoZSBhdXRoIGNhbiBnZXQgc3R1Y2sgb25seSBpbiBob3N0XG4gICAgLy90aGlzIGVzcGVjaWFsbHkgaGFwcGVucyBpbiBjYXNlcyBsaWtlXG4gICAgLy91cmwucmVzb2x2ZU9iamVjdCgnbWFpbHRvOmxvY2FsMUBkb21haW4xJywgJ2xvY2FsMkBkb21haW4yJylcbiAgICB2YXIgYXV0aEluSG9zdCA9IHJlc3VsdC5ob3N0ICYmIHJlc3VsdC5ob3N0LmluZGV4T2YoJ0AnKSA+IDAgP1xuICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lmhvc3Quc3BsaXQoJ0AnKSA6IGZhbHNlO1xuICAgIGlmIChhdXRoSW5Ib3N0KSB7XG4gICAgICByZXN1bHQuYXV0aCA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgIHJlc3VsdC5ob3N0ID0gcmVzdWx0Lmhvc3RuYW1lID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgIH1cbiAgfVxuXG4gIG11c3RFbmRBYnMgPSBtdXN0RW5kQWJzIHx8IChyZXN1bHQuaG9zdCAmJiBzcmNQYXRoLmxlbmd0aCk7XG5cbiAgaWYgKG11c3RFbmRBYnMgJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBzcmNQYXRoLnVuc2hpZnQoJycpO1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgcmVzdWx0LnBhdGggPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdC5wYXRobmFtZSA9IHNyY1BhdGguam9pbignLycpO1xuICB9XG5cbiAgLy90byBzdXBwb3J0IHJlcXVlc3QuaHR0cFxuICBpZiAoIXV0aWwuaXNOdWxsKHJlc3VsdC5wYXRobmFtZSkgfHwgIXV0aWwuaXNOdWxsKHJlc3VsdC5zZWFyY2gpKSB7XG4gICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyZXN1bHQuc2VhcmNoID8gcmVzdWx0LnNlYXJjaCA6ICcnKTtcbiAgfVxuICByZXN1bHQuYXV0aCA9IHJlbGF0aXZlLmF1dGggfHwgcmVzdWx0LmF1dGg7XG4gIHJlc3VsdC5zbGFzaGVzID0gcmVzdWx0LnNsYXNoZXMgfHwgcmVsYXRpdmUuc2xhc2hlcztcbiAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5VcmwucHJvdG90eXBlLnBhcnNlSG9zdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaG9zdCA9IHRoaXMuaG9zdDtcbiAgdmFyIHBvcnQgPSBwb3J0UGF0dGVybi5leGVjKGhvc3QpO1xuICBpZiAocG9ydCkge1xuICAgIHBvcnQgPSBwb3J0WzBdO1xuICAgIGlmIChwb3J0ICE9PSAnOicpIHtcbiAgICAgIHRoaXMucG9ydCA9IHBvcnQuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBob3N0ID0gaG9zdC5zdWJzdHIoMCwgaG9zdC5sZW5ndGggLSBwb3J0Lmxlbmd0aCk7XG4gIH1cbiAgaWYgKGhvc3QpIHRoaXMuaG9zdG5hbWUgPSBob3N0O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUnVsZSA9IHJlcXVpcmUoJy4vcnVsZS5qcycpO1xudmFyIFVSTCA9IHJlcXVpcmUoJ3VybCcpO1xuXG4vKipcbiAqIHRsZCBsaWJyYXJ5XG4gKlxuICogVXNlYWJsZSBtZXRob2RzIGFyZSB0aG9zZSBkb2N1bWVudGVkIHdpdGggYW4gQGFwaSBpbiBKU0RvY1xuICogU2VlIFJFQURNRS5tZCBmb3IgbW9yZSBleHBsYW5hdGlvbnMgb24gaG93IHRvIHVzZSB0aGlzIHN0dWZmLlxuICovXG5mdW5jdGlvbiB0bGQgKCkge1xuICAvKiBqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4gIHRoaXMudmFsaWRIb3N0cyA9IFtdO1xuICB0aGlzLnJ1bGVzID0gW107XG59XG5cbnRsZC5pbml0ID0gZnVuY3Rpb24gaW5pdCAoKSB7XG4gIHJldHVybiBuZXcgdGxkKCk7XG59O1xuXG5mdW5jdGlvbiB0cmltKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLyheXFxzK3xcXHMrJCkvZywgJycpO1xufVxuXG4vLyBBcnJheS5zb21lKCkgcG9seWZpbGwgZm9yIElFOFxuZnVuY3Rpb24gX3NvbWVGdW5jdGlvbih2YWx1ZSwgZnVuIC8qLCB0aGlzQXJnICovKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDAgfHwgdmFsdWUgPT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG5cbiAgICB2YXIgdCA9IE9iamVjdCh2YWx1ZSk7XG4gICAgdmFyIGxlbiA9IHQubGVuZ3RoID4+PiAwO1xuICAgIGlmICh0eXBlb2YgZnVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgfVxuXG4gICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID49IDMgPyBhcmd1bWVudHNbMl0gOiB2b2lkIDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICB7XG4gICAgICBpZiAoaSBpbiB0ICYmIGZ1bi5jYWxsKHRoaXNBcmcsIHRbaV0sIGksIHQpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIEFycmF5Lm1hcCBwb2x5ZmlsbCBmb3IgSUU4XG5mdW5jdGlvbiBfbWFwRnVuY3Rpb24odGhpc1ZhbCwgZnVuIC8qLCB0aGlzQXJnICovKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICh0aGlzVmFsID09PSB2b2lkIDAgfHwgdGhpc1ZhbCA9PT0gbnVsbClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG5cbiAgdmFyIHQgPSBPYmplY3QodGhpc1ZhbCk7XG4gIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcbiAgaWYgKHR5cGVvZiBmdW4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgfVxuXG4gIHZhciByZXMgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID49IDMgPyBhcmd1bWVudHNbMl0gOiB2b2lkIDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAge1xuICAgIC8vIE5PVEU6IEFic29sdXRlIGNvcnJlY3RuZXNzIHdvdWxkIGRlbWFuZCBPYmplY3QuZGVmaW5lUHJvcGVydHlcbiAgICAvLyAgICAgICBiZSB1c2VkLiAgQnV0IHRoaXMgbWV0aG9kIGlzIGZhaXJseSBuZXcsIGFuZCBmYWlsdXJlIGlzXG4gICAgLy8gICAgICAgcG9zc2libGUgb25seSBpZiBPYmplY3QucHJvdG90eXBlIG9yIEFycmF5LnByb3RvdHlwZVxuICAgIC8vICAgICAgIGhhcyBhIHByb3BlcnR5IHxpfCAodmVyeSB1bmxpa2VseSksIHNvIHVzZSBhIGxlc3Njb3JyZWN0XG4gICAgLy8gICAgICAgYnV0IG1vcmUgcG9ydGFibGUgYWx0ZXJuYXRpdmUuXG4gICAgaWYgKGkgaW4gdClcbiAgICAgIHJlc1tpXSA9IGZ1bi5jYWxsKHRoaXNBcmcsIHRbaV0sIGksIHQpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmVzdCBydWxlIGZvciBhIGdpdmVuIGhvc3QgYmFzZWQgb24gY2FuZGlkYXRlc1xuICpcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSBob3N0IHtTdHJpbmd9IEhvc3RuYW1lIHRvIGNoZWNrIHJ1bGVzIGFnYWluc3RcbiAqIEBwYXJhbSBydWxlcyB7QXJyYXl9IExpc3Qgb2YgcnVsZXMgdXNlZCB0byB3b3JrIG9uXG4gKiBAcmV0dXJuIHtPYmplY3R9IENhbmRpZGF0ZSBvYmplY3QsIHdpdGggYSBub3JtYWwgYW5kIGV4Y2VwdGlvbiBzdGF0ZVxuICovXG50bGQuZ2V0Q2FuZGlkYXRlUnVsZSA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZVJ1bGUgKGhvc3QsIHJ1bGVzLCBvcHRpb25zKSB7XG4gIHZhciBydWxlID0geydub3JtYWwnOiBudWxsLCAnZXhjZXB0aW9uJzogbnVsbH07XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgeyBsYXp5OiBmYWxzZSB9O1xuXG4gIF9zb21lRnVuY3Rpb24ocnVsZXMsIGZ1bmN0aW9uIChyKSB7XG4gICAgdmFyIHBhdHRlcm47XG5cbiAgICAvLyBzbGQgbWF0Y2hpbmcgb3IgdmFsaWRIb3N0PyBlc2NhcGUgdGhlIGxvb3AgaW1tZWRpYXRlbHkgKGV4Y2VwdCBpZiBpdCdzIGFuIGV4Y2VwdGlvbilcbiAgICBpZiAoJy4nICsgaG9zdCA9PT0gci5nZXROb3JtYWxYbGQoKSkge1xuICAgICAgaWYgKG9wdGlvbnMubGF6eSB8fCByLmV4Y2VwdGlvbiB8fCByLmlzSG9zdCkge1xuICAgICAgICBydWxlLm5vcm1hbCA9IHI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSBjaGVjayBhcyBhIGNvbXBsZXRlIGhvc3RcbiAgICAvLyBpZiBpdCdzIGFuIGV4Y2VwdGlvbiwgd2Ugd2FudCB0byBsb29wIGEgYml0IG1vcmUgdG8gYSBub3JtYWwgcnVsZVxuICAgIHBhdHRlcm4gPSAnLisnICsgci5nZXROb3JtYWxQYXR0ZXJuKCkgKyAnJCc7XG5cbiAgICBpZiAoKG5ldyBSZWdFeHAocGF0dGVybikpLnRlc3QoaG9zdCkpIHtcbiAgICAgIHJ1bGVbci5leGNlcHRpb24gPyAnZXhjZXB0aW9uJyA6ICdub3JtYWwnXSA9IHI7XG4gICAgICByZXR1cm4gIXIuZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG5cbiAgLy8gZmF2b3VyaW5nIHRoZSBleGNlcHRpb24gaWYgZW5jb3VudGVyZWRcbiAgLy8gcHJldmlvdXNseSB3ZSB3ZXJlIGNvcHktYWx0ZXJpbmcgYSBydWxlLCBjcmVhdGluZyBpbmNvbnNpc3RlbnQgcmVzdWx0cyBiYXNlZCBvbiBydWxlIG9yZGVyIG9yZGVyXG4gIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29uY2xldG9tL3RsZC5qcy9wdWxsLzM1XG4gIGlmIChydWxlLm5vcm1hbCAmJiBydWxlLmV4Y2VwdGlvbikge1xuICAgIHJldHVybiBydWxlLmV4Y2VwdGlvbjtcbiAgfVxuXG4gIHJldHVybiBydWxlLm5vcm1hbDtcbn07XG5cbi8qKlxuICogUmV0cmlldmUgYSBzdWJzZXQgb2YgcnVsZXMgZm9yIGEgVG9wLUxldmVsLURvbWFpbiBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gdGxkIHtTdHJpbmd9IFRvcC1MZXZlbC1Eb21haW4gc3RyaW5nXG4gKiBAcmV0dXJuIHtBcnJheX0gUnVsZXMgc3Vic2V0XG4gKi9cbnRsZC5wcm90b3R5cGUuZ2V0UnVsZXNGb3JUbGQgPSBmdW5jdGlvbiBnZXRSdWxlc0ZvclRsZCAodGxkLCBkZWZhdWx0X3J1bGUpIHtcbiAgdmFyIGV4Y2VwdGlvbiA9ICchJztcbiAgdmFyIHdpbGRjYXJkID0gJyonO1xuICB2YXIgYXBwZW5kX3RsZF9ydWxlID0gdHJ1ZTtcbiAgdmFyIHJ1bGVzID0gdGhpcy5ydWxlc1t0bGRdO1xuXG4gIC8vIEFscmVhZHkgcGFyc2VkXG4gIC8vIEFycmF5LmlzQXJyYXkgcG9seWZpbGwgZm9yIElFOFxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHJ1bGVzKSAgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICAvLyBOb3RoaW5nIGZvdW5kLCBhcHBseSBzb21lIGRlZmF1bHQgdmFsdWVcbiAgaWYgKHJ1bGVzID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gZGVmYXVsdF9ydWxlID8gWyBkZWZhdWx0X3J1bGUgXSA6IFtdO1xuICB9XG5cbiAgLy8gUGFyc2luZyBuZWVkZWRcbiAgcnVsZXMgPSBfbWFwRnVuY3Rpb24ocnVsZXMuc3BsaXQoJ3wnKSwgZnVuY3Rpb24gdHJhbnNmb3JtQXNSdWxlIChzbGQpIHtcbiAgICB2YXIgZmlyc3RfYml0ID0gc2xkWzBdO1xuXG4gICAgaWYgKGZpcnN0X2JpdCA9PT0gZXhjZXB0aW9uIHx8IGZpcnN0X2JpdCA9PT0gd2lsZGNhcmQpIHtcbiAgICAgIHNsZCA9IHNsZC5zbGljZSgxKTtcblxuICAgICAgaWYgKCFzbGQpIHtcbiAgICAgICAgYXBwZW5kX3RsZF9ydWxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSdWxlKHtcbiAgICAgIFwiZmlyc3RMZXZlbFwiOiAgdGxkLFxuICAgICAgXCJzZWNvbmRMZXZlbFwiOiBzbGQsXG4gICAgICBcImV4Y2VwdGlvblwiOiAgIGZpcnN0X2JpdCA9PT0gZXhjZXB0aW9uLFxuICAgICAgXCJ3aWxkY2FyZFwiOiAgICBmaXJzdF9iaXQgPT09IHdpbGRjYXJkXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIEFsd2F5cyBwcmVwZW5kIHRvIG1ha2UgaXQgdGhlIGxhdGVzdCBydWxlIHRvIGJlIGFwcGxpZWRcbiAgaWYgKGFwcGVuZF90bGRfcnVsZSkge1xuICAgIHJ1bGVzLnVuc2hpZnQobmV3IFJ1bGUoe1xuICAgICAgXCJmaXJzdExldmVsXCI6IHRsZFxuICAgIH0pKTtcbiAgfVxuXG4gIHRoaXMucnVsZXNbdGxkXSA9IHJ1bGVzLnJldmVyc2UoKTtcblxuICByZXR1cm4gcnVsZXM7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgVExEIGV4aXN0cyBmb3IgYSBnaXZlbiBob3N0XG4gKlxuICogQGFwaVxuICogQHBhcmFtIHtzdHJpbmd9IGhvc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnRsZC5wcm90b3R5cGUudGxkRXhpc3RzID0gZnVuY3Rpb24gdGxkRXhpc3RzKGhvc3Qpe1xuICB2YXIgaG9zdFRsZDtcblxuICBob3N0ID0gdGxkLmNsZWFuSG9zdFZhbHVlKGhvc3QpO1xuXG4gIC8vIEVhc3kgY2FzZSwgaXQncyBhIFRMRFxuICBpZiAodGhpcy5ydWxlc1tob3N0XSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBQb3BwaW5nIG9ubHkgdGhlIFRMRCBvZiB0aGUgaG9zdG5hbWVcbiAgaG9zdFRsZCA9IHRsZC5leHRyYWN0VGxkRnJvbUhvc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHRoaXMucnVsZXNbaG9zdFRsZF0gIT09IHVuZGVmaW5lZDtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcHVibGljIHN1ZmZpeCAoaW5jbHVkaW5nIGV4YWN0IG1hdGNoZXMpXG4gKlxuICogQGFwaVxuICogQHNpbmNlIDEuNVxuICogQHBhcmFtIHtzdHJpbmd9IGhvc3RcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xudGxkLnByb3RvdHlwZS5nZXRQdWJsaWNTdWZmaXggPSBmdW5jdGlvbiBnZXRQdWJsaWNTdWZmaXgoaG9zdCkge1xuICB2YXIgaG9zdFRsZCwgcnVsZXMsIHJ1bGU7XG5cbiAgaWYgKGhvc3QgaW4gdGhpcy5ydWxlcyl7XG5cdCAgcmV0dXJuIGhvc3Q7XG4gIH1cblxuICBob3N0ID0gdGxkLmNsZWFuSG9zdFZhbHVlKGhvc3QpO1xuICBob3N0VGxkID0gdGxkLmV4dHJhY3RUbGRGcm9tSG9zdChob3N0KTtcbiAgcnVsZXMgPSB0aGlzLmdldFJ1bGVzRm9yVGxkKGhvc3RUbGQpO1xuICBydWxlID0gdGxkLmdldENhbmRpZGF0ZVJ1bGUoaG9zdCwgcnVsZXMsIHsgbGF6eTogdHJ1ZSB9KTtcblxuICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGUuZ2V0Tm9ybWFsWGxkKCkuc2xpY2UoMSk7XG59O1xuXG4vKipcbiAqIERldGVjdHMgdGhlIGRvbWFpbiBiYXNlZCBvbiBydWxlcyBhbmQgdXBvbiBhbmQgYSBob3N0IHN0cmluZ1xuICpcbiAqIEBhcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBob3N0XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbnRsZC5wcm90b3R5cGUuZ2V0RG9tYWluID0gZnVuY3Rpb24gZ2V0RG9tYWluIChob3N0KSB7XG4gIHZhciBkb21haW4gPSBudWxsLCBob3N0VGxkLCBydWxlcywgcnVsZTtcblxuICBpZiAodGhpcy5pc1ZhbGlkKGhvc3QpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaG9zdCA9IHRsZC5jbGVhbkhvc3RWYWx1ZShob3N0KTtcbiAgaG9zdFRsZCA9IHRsZC5leHRyYWN0VGxkRnJvbUhvc3QoaG9zdCk7XG4gIHJ1bGVzID0gdGhpcy5nZXRSdWxlc0ZvclRsZChob3N0VGxkLCBuZXcgUnVsZSh7XCJmaXJzdExldmVsXCI6IGhvc3RUbGQsIFwiaXNIb3N0XCI6IHRoaXMudmFsaWRIb3N0cy5pbmRleE9mKGhvc3RUbGQpICE9PSAtMX0pKTtcbiAgcnVsZSA9IHRsZC5nZXRDYW5kaWRhdGVSdWxlKGhvc3QsIHJ1bGVzKTtcblxuICBpZiAocnVsZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaG9zdC5yZXBsYWNlKG5ldyBSZWdFeHAocnVsZS5nZXRQYXR0ZXJuKCkpLCBmdW5jdGlvbiAobSwgZCkge1xuICAgIGRvbWFpbiA9IGQ7XG4gIH0pO1xuXG4gIHJldHVybiBkb21haW47XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHN1YmRvbWFpbiBvZiBhIGhvc3Qgc3RyaW5nXG4gKlxuICogQGFwaVxuICogQHBhcmFtIHtzdHJpbmd9IGhvc3RcbiAqIEByZXR1cm4ge3N0cmluZ3xudWxsfSBhIHN1YmRvbWFpbiBzdHJpbmcgaWYgYW55LCBibGFuayBzdHJpbmcgaWYgc3ViZG9tYWluIGlzIGVtcHR5LCBvdGhlcndpc2UgbnVsbFxuICovXG50bGQucHJvdG90eXBlLmdldFN1YmRvbWFpbiA9IGZ1bmN0aW9uIGdldFN1YmRvbWFpbihob3N0KXtcbiAgdmFyIGRvbWFpbiwgciwgc3ViZG9tYWluO1xuXG4gIGhvc3QgPSB0bGQuY2xlYW5Ib3N0VmFsdWUoaG9zdCk7XG4gIGRvbWFpbiA9IHRoaXMuZ2V0RG9tYWluKGhvc3QpO1xuXG4gIC8vIE5vIGRvbWFpbiBmb3VuZD8gSnVzdCBhYm9ydCwgYWJvcnQhXG4gIGlmIChkb21haW4gPT09IG51bGwpe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgciA9ICdcXFxcLj8nKyB0bGQuZXNjYXBlUmVnRXhwKGRvbWFpbikrJyQnO1xuICBzdWJkb21haW4gPSBob3N0LnJlcGxhY2UobmV3IFJlZ0V4cChyLCAnaScpLCAnJyk7XG5cbiAgcmV0dXJuIHN1YmRvbWFpbjtcbn07XG5cbi8qKlxuICogQ2hlY2tpbmcgaWYgYSBob3N0IHN0cmluZyBpcyB2YWxpZFxuICogSXQncyB1c3VhbGx5IGEgcHJlbGltaW5hcnkgY2hlY2sgYmVmb3JlIHRyeWluZyB0byB1c2UgZ2V0RG9tYWluIG9yIGFueXRoaW5nIGVsc2VcbiAqXG4gKiBCZXdhcmU6IGl0IGRvZXMgbm90IGNoZWNrIGlmIHRoZSBUTEQgZXhpc3RzLlxuICpcbiAqIEBhcGlcbiAqIEBwYXJhbSBob3N0IHtTdHJpbmd9XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG50bGQucHJvdG90eXBlLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkIChob3N0KSB7XG4gIHJldHVybiB0eXBlb2YgaG9zdCA9PT0gJ3N0cmluZycgJiYgKHRoaXMudmFsaWRIb3N0cy5pbmRleE9mKGhvc3QpICE9PSAtMSB8fCAoaG9zdC5pbmRleE9mKCcuJykgIT09IC0xICYmIGhvc3RbMF0gIT09ICcuJykpO1xufTtcblxuLyoqXG4gKiBVdGlsaXR5IHRvIGNsZWFudXAgdGhlIGJhc2UgaG9zdCB2YWx1ZS4gQWxzbyByZW1vdmVzIHVybCBmcmFnbWVudHMuXG4gKlxuICogV29ya3MgZm9yOlxuICogLSBob3N0bmFtZVxuICogLSAvL2hvc3RuYW1lXG4gKiAtIHNjaGVtZTovL2hvc3RuYW1lXG4gKiAtIHNjaGVtZStzY2hlbWU6Ly9ob3N0bmFtZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbi8vIHNjaGVtZSAgICAgID0gQUxQSEEgKiggQUxQSEEgLyBESUdJVCAvIFwiK1wiIC8gXCItXCIgLyBcIi5cIiApXG52YXIgaGFzUHJlZml4UkUgPSAvXigoW2Etel1bYS16MC05Ky4tXSopPzopP1xcL1xcLy87XG52YXIgaW52YWxpZEhvc3RuYW1lQ2hhcnMgPSAvW15BLVphLXowLTkuLV0vO1xuXG50bGQuY2xlYW5Ib3N0VmFsdWUgPSBmdW5jdGlvbiBjbGVhbkhvc3RWYWx1ZSh2YWx1ZSl7XG4gIHZhbHVlID0gdHJpbSh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcblxuICB2YXIgcGFydHMgPSBVUkwucGFyc2UoaGFzUHJlZml4UkUudGVzdCh2YWx1ZSkgPyB2YWx1ZSA6ICcvLycgKyB2YWx1ZSwgbnVsbCwgdHJ1ZSk7XG5cbiAgaWYgKHBhcnRzLmhvc3RuYW1lICYmICFpbnZhbGlkSG9zdG5hbWVDaGFycy50ZXN0KHBhcnRzLmhvc3RuYW1lKSkgeyByZXR1cm4gcGFydHMuaG9zdG5hbWU7IH1cbiAgaWYgKCFpbnZhbGlkSG9zdG5hbWVDaGFycy50ZXN0KHZhbHVlKSkgeyByZXR1cm4gdmFsdWU7IH1cbiAgcmV0dXJuICcnO1xufTtcblxuLyoqXG4gKiBVdGlsaXR5IHRvIGV4dHJhY3QgdGhlIFRMRCBmcm9tIGEgaG9zdCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaG9zdFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG50bGQuZXh0cmFjdFRsZEZyb21Ib3N0ID0gZnVuY3Rpb24gZXh0cmFjdFRsZEZyb21Ib3N0KGhvc3Qpe1xuICByZXR1cm4gaG9zdC5zcGxpdCgnLicpLnBvcCgpO1xufTtcblxuLyoqXG4gKiBFc2NhcGVzIFJlZ0V4cCBzcGVjaWZpYyBjaGFycy5cbiAqXG4gKiBAc2luY2UgMS4zLjFcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29uY2xldG9tL3RsZC5qcy9wdWxsLzMzXG4gKiBAcGFyYW0ge1N0cmluZ3xNaXhlZH0gc1xuICogQHJldHVybnMge3N0cmluZ30gRXNjYXBlZCBzdHJpbmcgZm9yIGEgc2FmZSB1c2UgaW4gYSBgbmV3IFJlZ0V4cGAgZXhwcmVzc2lvblxuICovXG50bGQuZXNjYXBlUmVnRXhwID0gZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHMpIHtcbiAgcmV0dXJuIFN0cmluZyhzKS5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0bGQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImFjXCI6XCJjb218ZWR1fGdvdnxuZXR8bWlsfG9yZ1wiLFwiYWRcIjpcIm5vbVwiLFwiYWVcIjpcImNvfG5ldHxvcmd8c2NofGFjfGdvdnxtaWx8YmxvZ3Nwb3R8bm9tXCIsXCJhZXJvXCI6XCJhY2NpZGVudC1pbnZlc3RpZ2F0aW9ufGFjY2lkZW50LXByZXZlbnRpb258YWVyb2JhdGljfGFlcm9jbHVifGFlcm9kcm9tZXxhZ2VudHN8YWlyY3JhZnR8YWlybGluZXxhaXJwb3J0fGFpci1zdXJ2ZWlsbGFuY2V8YWlydHJhZmZpY3xhaXItdHJhZmZpYy1jb250cm9sfGFtYnVsYW5jZXxhbXVzZW1lbnR8YXNzb2NpYXRpb258YXV0aG9yfGJhbGxvb25pbmd8YnJva2VyfGNhYXxjYXJnb3xjYXRlcmluZ3xjZXJ0aWZpY2F0aW9ufGNoYW1waW9uc2hpcHxjaGFydGVyfGNpdmlsYXZpYXRpb258Y2x1Ynxjb25mZXJlbmNlfGNvbnN1bHRhbnR8Y29uc3VsdGluZ3xjb250cm9sfGNvdW5jaWx8Y3Jld3xkZXNpZ258ZGdjYXxlZHVjYXRvcnxlbWVyZ2VuY3l8ZW5naW5lfGVuZ2luZWVyfGVudGVydGFpbm1lbnR8ZXF1aXBtZW50fGV4Y2hhbmdlfGV4cHJlc3N8ZmVkZXJhdGlvbnxmbGlnaHR8ZnJlaWdodHxmdWVsfGdsaWRpbmd8Z292ZXJubWVudHxncm91bmRoYW5kbGluZ3xncm91cHxoYW5nZ2xpZGluZ3xob21lYnVpbHR8aW5zdXJhbmNlfGpvdXJuYWx8am91cm5hbGlzdHxsZWFzaW5nfGxvZ2lzdGljc3xtYWdhemluZXxtYWludGVuYW5jZXxtZWRpYXxtaWNyb2xpZ2h0fG1vZGVsbGluZ3xuYXZpZ2F0aW9ufHBhcmFjaHV0aW5nfHBhcmFnbGlkaW5nfHBhc3Nlbmdlci1hc3NvY2lhdGlvbnxwaWxvdHxwcmVzc3xwcm9kdWN0aW9ufHJlY3JlYXRpb258cmVwYm9keXxyZXN8cmVzZWFyY2h8cm90b3JjcmFmdHxzYWZldHl8c2NpZW50aXN0fHNlcnZpY2VzfHNob3d8c2t5ZGl2aW5nfHNvZnR3YXJlfHN0dWRlbnR8dHJhZGVyfHRyYWRpbmd8dHJhaW5lcnx1bmlvbnx3b3JraW5nZ3JvdXB8d29ya3NcIixcImFmXCI6XCJnb3Z8Y29tfG9yZ3xuZXR8ZWR1XCIsXCJhZ1wiOlwiY29tfG9yZ3xuZXR8Y298bm9tXCIsXCJhaVwiOlwib2ZmfGNvbXxuZXR8b3JnfG5vbVwiLFwiYWxcIjpcImNvbXxlZHV8Z292fG1pbHxuZXR8b3JnfGJsb2dzcG90fG5vbVwiLFwiYW1cIjpcImJsb2dzcG90XCIsXCJhb1wiOlwiZWR8Z3Z8b2d8Y298cGJ8aXRcIixcImFxXCI6XCJcIixcImFyXCI6XCJjb218ZWR1fGdvYnxnb3Z8aW50fG1pbHxtdXNpY2F8bmV0fG9yZ3x0dXJ8YmxvZ3Nwb3QuY29tXCIsXCJhcnBhXCI6XCJlMTY0fGluLWFkZHJ8aXA2fGlyaXN8dXJpfHVyblwiLFwiYXNcIjpcImdvdlwiLFwiYXNpYVwiOlwiY2xvdWRuc1wiLFwiYXRcIjpcImFjfGNvfGd2fG9yfGZ1dHVyZWhvc3Rpbmd8ZnV0dXJlbWFpbGluZ3wqZXgub3J0c2luZm98Kmt1bmRlbi5vcnRzaW5mb3xibG9nc3BvdC5jb3xiaXp8aW5mb3xwcml2fDEyaHB8Mml4fDRsaW1hfGxpbWEtY2l0eVwiLFwiYXVcIjpcImNvbXxuZXR8b3JnfGVkdXxnb3Z8YXNufGlkfGluZm98Y29uZnxvenxhY3R8bnN3fG50fHFsZHxzYXx0YXN8dmljfHdhfGFjdC5lZHV8bnN3LmVkdXxudC5lZHV8cWxkLmVkdXxzYS5lZHV8dGFzLmVkdXx2aWMuZWR1fHdhLmVkdXxxbGQuZ292fHNhLmdvdnx0YXMuZ292fHZpYy5nb3Z8d2EuZ292fGJsb2dzcG90LmNvbVwiLFwiYXdcIjpcImNvbVwiLFwiYXhcIjpcIlwiLFwiYXpcIjpcImNvbXxuZXR8aW50fGdvdnxvcmd8ZWR1fGluZm98cHB8bWlsfG5hbWV8cHJvfGJpelwiLFwiYmFcIjpcImNvbXxlZHV8Z292fG1pbHxuZXR8b3JnfGJsb2dzcG90XCIsXCJiYlwiOlwiYml6fGNvfGNvbXxlZHV8Z292fGluZm98bmV0fG9yZ3xzdG9yZXx0dlwiLFwiYmRcIjpcIipcIixcImJlXCI6XCJhY3xibG9nc3BvdHwqdHJhbnN1cmxcIixcImJmXCI6XCJnb3ZcIixcImJnXCI6XCJhfGJ8Y3xkfGV8ZnxnfGh8aXxqfGt8bHxtfG58b3xwfHF8cnxzfHR8dXx2fHd8eHx5fHp8MHwxfDJ8M3w0fDV8Nnw3fDh8OXxibG9nc3BvdHxiYXJzeVwiLFwiYmhcIjpcImNvbXxlZHV8bmV0fG9yZ3xnb3ZcIixcImJpXCI6XCJjb3xjb218ZWR1fG9yfG9yZ1wiLFwiYml6XCI6XCJjbG91ZG5zfGR5bmRuc3xmb3ItYmV0dGVyfGZvci1tb3JlfGZvci1zb21lfGZvci10aGV8c2VsZmlwfHdlYmhvcHxtbWFmYW58bXlmdHB8bm8taXB8ZHNjbG91ZFwiLFwiYmpcIjpcImFzc298YmFycmVhdXxnb3V2fGJsb2dzcG90XCIsXCJibVwiOlwiY29tfGVkdXxnb3Z8bmV0fG9yZ1wiLFwiYm5cIjpcIipcIixcImJvXCI6XCJjb218ZWR1fGdvdnxnb2J8aW50fG9yZ3xuZXR8bWlsfHR2XCIsXCJiclwiOlwiYWRtfGFkdnxhZ3J8YW18YXJxfGFydHxhdG98YnxiZWxlbXxiaW98YmxvZ3xibWR8Y2ltfGNuZ3xjbnR8Y29tfGNvb3B8Y3JpfGRlZnxlY258ZWNvfGVkdXxlbXB8ZW5nfGVzcHxldGN8ZXRpfGZhcnxmbG9nfGZsb3JpcGF8Zm18Zm5kfGZvdHxmc3R8ZzEyfGdnZnxnb3Z8YWMuZ292fGFsLmdvdnxhbS5nb3Z8YXAuZ292fGJhLmdvdnxjZS5nb3Z8ZGYuZ292fGVzLmdvdnxnby5nb3Z8bWEuZ292fG1nLmdvdnxtcy5nb3Z8bXQuZ292fHBhLmdvdnxwYi5nb3Z8cGUuZ292fHBpLmdvdnxwci5nb3Z8cmouZ292fHJuLmdvdnxyby5nb3Z8cnIuZ292fHJzLmdvdnxzYy5nb3Z8c2UuZ292fHNwLmdvdnx0by5nb3Z8aW1ifGluZHxpbmZ8amFtcGF8am9yfGp1c3xsZWd8bGVsfG1hdHxtZWR8bWlsfG1wfG11c3xuZXR8Km5vbXxub3R8bnRyfG9kb3xvcmd8cG9hfHBwZ3xwcm98cHNjfHBzaXxxc2x8cmFkaW98cmVjfHJlY2lmZXxzbGd8c3J2fHRheGl8dGVvfHRtcHx0cmR8dHVyfHR2fHZldHx2aXh8dmxvZ3x3aWtpfHpsZ3xibG9nc3BvdC5jb218YWMubGVnfGFsLmxlZ3xhbS5sZWd8YXAubGVnfGJhLmxlZ3xjZS5sZWd8ZGYubGVnfGVzLmxlZ3xnby5sZWd8bWEubGVnfG1nLmxlZ3xtcy5sZWd8bXQubGVnfHBhLmxlZ3xwYi5sZWd8cGUubGVnfHBpLmxlZ3xwci5sZWd8cmoubGVnfHJuLmxlZ3xyby5sZWd8cnIubGVnfHJzLmxlZ3xzYy5sZWd8c2UubGVnfHNwLmxlZ3x0by5sZWdcIixcImJzXCI6XCJjb218bmV0fG9yZ3xlZHV8Z292fHdlXCIsXCJidFwiOlwiY29tfGVkdXxnb3Z8bmV0fG9yZ1wiLFwiYnZcIjpcIlwiLFwiYndcIjpcImNvfG9yZ1wiLFwiYnlcIjpcImdvdnxtaWx8Y29tfG9mfGJsb2dzcG90LmNvbXxueW1cIixcImJ6XCI6XCJjb218bmV0fG9yZ3xlZHV8Z292fHphfG55bVwiLFwiY2FcIjpcImFifGJjfG1ifG5ifG5mfG5sfG5zfG50fG51fG9ufHBlfHFjfHNrfHlrfGdjfCphd2Rldnxjb3xibG9nc3BvdHxuby1pcFwiLFwiY2F0XCI6XCJcIixcImNjXCI6XCJjbG91ZG5zfGZ0cGFjY2Vzc3xnYW1lLXNlcnZlcnxteXBob3Rvc3xzY3JhcHBpbmd8dHdtYWlsfGZhbnRhc3lsZWFndWVcIixcImNkXCI6XCJnb3ZcIixcImNmXCI6XCJibG9nc3BvdFwiLFwiY2dcIjpcIlwiLFwiY2hcIjpcInNxdWFyZTd8YmxvZ3Nwb3R8Z290ZG5zfDEyaHB8Mml4fDRsaW1hfGxpbWEtY2l0eVwiLFwiY2lcIjpcIm9yZ3xvcnxjb218Y298ZWR1fGVkfGFjfG5ldHxnb3xhc3NvfHhuLS1hcm9wb3J0LWJ5YXxpbnR8cHJlc3NlfG1kfGdvdXZcIixcImNrXCI6XCIqfCF3d3dcIixcImNsXCI6XCJnb3Z8Z29ifGNvfG1pbHxibG9nc3BvdHxub21cIixcImNtXCI6XCJjb3xjb218Z292fG5ldFwiLFwiY25cIjpcImFjfGNvbXxlZHV8Z292fG5ldHxvcmd8bWlsfHhuLS01NXF4NWR8eG4tLWlvMGE3aXx4bi0tb2QwYWxnfGFofGJqfGNxfGZqfGdkfGdzfGd6fGd4fGhhfGhifGhlfGhpfGhsfGhufGpsfGpzfGp4fGxufG5tfG54fHFofHNjfHNkfHNofHNufHN4fHRqfHhqfHh6fHlufHpqfGhrfG1vfHR3fCpjb21wdXRlLmFtYXpvbmF3cy5jb218ZWxhc3RpY2JlYW5zdGFsay5jbi1ub3J0aC0xLmFtYXpvbmF3cy5jb218KmVsYi5hbWF6b25hd3MuY29tfHMzLmNuLW5vcnRoLTEuYW1hem9uYXdzLmNvbVwiLFwiY29cIjpcImFydHN8Y29tfGVkdXxmaXJtfGdvdnxpbmZvfGludHxtaWx8bmV0fG5vbXxvcmd8cmVjfHdlYnxibG9nc3BvdC5jb218bm9kdW1cIixcImNvbVwiOlwiKmNvbXB1dGUuYW1hem9uYXdzfCpjb21wdXRlLTEuYW1hem9uYXdzfHVzLWVhc3QtMS5hbWF6b25hd3N8KmVsYXN0aWNiZWFuc3RhbGt8KmVsYi5hbWF6b25hd3N8czMuYW1hem9uYXdzfHMzLWFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3c3xzMy1hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3N8czMtYXAtc291dGgtMS5hbWF6b25hd3N8czMtYXAtc291dGhlYXN0LTEuYW1hem9uYXdzfHMzLWFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3c3xzMy1jYS1jZW50cmFsLTEuYW1hem9uYXdzfHMzLWV1LWNlbnRyYWwtMS5hbWF6b25hd3N8czMtZXUtd2VzdC0xLmFtYXpvbmF3c3xzMy1ldS13ZXN0LTIuYW1hem9uYXdzfHMzLWV4dGVybmFsLTEuYW1hem9uYXdzfHMzLWZpcHMtdXMtZ292LXdlc3QtMS5hbWF6b25hd3N8czMtc2EtZWFzdC0xLmFtYXpvbmF3c3xzMy11cy1nb3Ytd2VzdC0xLmFtYXpvbmF3c3xzMy11cy1lYXN0LTIuYW1hem9uYXdzfHMzLXVzLXdlc3QtMS5hbWF6b25hd3N8czMtdXMtd2VzdC0yLmFtYXpvbmF3c3xzMy5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3N8czMuYXAtc291dGgtMS5hbWF6b25hd3N8czMuY2EtY2VudHJhbC0xLmFtYXpvbmF3c3xzMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzfHMzLmV1LXdlc3QtMi5hbWF6b25hd3N8czMudXMtZWFzdC0yLmFtYXpvbmF3c3xzMy5kdWFsc3RhY2suYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzfHMzLmR1YWxzdGFjay5hcC1ub3J0aGVhc3QtMi5hbWF6b25hd3N8czMuZHVhbHN0YWNrLmFwLXNvdXRoLTEuYW1hem9uYXdzfHMzLmR1YWxzdGFjay5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3N8czMuZHVhbHN0YWNrLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3c3xzMy5kdWFsc3RhY2suY2EtY2VudHJhbC0xLmFtYXpvbmF3c3xzMy5kdWFsc3RhY2suZXUtY2VudHJhbC0xLmFtYXpvbmF3c3xzMy5kdWFsc3RhY2suZXUtd2VzdC0xLmFtYXpvbmF3c3xzMy5kdWFsc3RhY2suZXUtd2VzdC0yLmFtYXpvbmF3c3xzMy5kdWFsc3RhY2suc2EtZWFzdC0xLmFtYXpvbmF3c3xzMy5kdWFsc3RhY2sudXMtZWFzdC0xLmFtYXpvbmF3c3xzMy5kdWFsc3RhY2sudXMtZWFzdC0yLmFtYXpvbmF3c3xzMy13ZWJzaXRlLXVzLWVhc3QtMS5hbWF6b25hd3N8czMtd2Vic2l0ZS11cy13ZXN0LTEuYW1hem9uYXdzfHMzLXdlYnNpdGUtdXMtd2VzdC0yLmFtYXpvbmF3c3xzMy13ZWJzaXRlLWFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3c3xzMy13ZWJzaXRlLWFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3c3xzMy13ZWJzaXRlLWFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3c3xzMy13ZWJzaXRlLWV1LXdlc3QtMS5hbWF6b25hd3N8czMtd2Vic2l0ZS1zYS1lYXN0LTEuYW1hem9uYXdzfHMzLXdlYnNpdGUuYXAtbm9ydGhlYXN0LTIuYW1hem9uYXdzfHMzLXdlYnNpdGUuYXAtc291dGgtMS5hbWF6b25hd3N8czMtd2Vic2l0ZS5jYS1jZW50cmFsLTEuYW1hem9uYXdzfHMzLXdlYnNpdGUuZXUtY2VudHJhbC0xLmFtYXpvbmF3c3xzMy13ZWJzaXRlLmV1LXdlc3QtMi5hbWF6b25hd3N8czMtd2Vic2l0ZS51cy1lYXN0LTIuYW1hem9uYXdzfG9uLWFwdGlibGV8bXlhc3VzdG9yfGJldGFpbmFib3h8YnBsYWNlZHxhcnxicnxjbnxkZXxldXxnYnxodXxqcG58a3J8bWV4fG5vfHFjfHJ1fHNhfHNlfHVrfHVzfHV5fHphfGFmcmljYXxncnxjb3x4ZW5hcHBvbmF6dXJlfGpkZXZjbG91ZHx3cGRldmNsb3VkfGNsb3VkY29udHJvbGxlZHxjbG91ZGNvbnRyb2xhcHB8ZHJheWRkbnN8ZHJlYW1ob3N0ZXJzfG15ZHJvYm98ZHluZG5zLWF0LWhvbWV8ZHluZG5zLWF0LXdvcmt8ZHluZG5zLWJsb2d8ZHluZG5zLWZyZWV8ZHluZG5zLWhvbWV8ZHluZG5zLWlwfGR5bmRucy1tYWlsfGR5bmRucy1vZmZpY2V8ZHluZG5zLXBpY3N8ZHluZG5zLXJlbW90ZXxkeW5kbnMtc2VydmVyfGR5bmRucy13ZWJ8ZHluZG5zLXdpa2l8ZHluZG5zLXdvcmt8YmxvZ2Ruc3xjZWNoaXJlfGRuc2FsaWFzfGRuc2Rvam98ZG9lc250ZXhpc3R8ZG9udGV4aXN0fGRvb21kbnN8ZHluLW8tc2F1cnxkeW5hbGlhc3xlc3QtYS1sYS1tYWlzb258ZXN0LWEtbGEtbWFzaW9ufGVzdC1sZS1wYXRyb258ZXN0LW1vbi1ibG9ndWV1cnxmcm9tLWFrfGZyb20tYWx8ZnJvbS1hcnxmcm9tLWNhfGZyb20tY3R8ZnJvbS1kY3xmcm9tLWRlfGZyb20tZmx8ZnJvbS1nYXxmcm9tLWhpfGZyb20taWF8ZnJvbS1pZHxmcm9tLWlsfGZyb20taW58ZnJvbS1rc3xmcm9tLWt5fGZyb20tbWF8ZnJvbS1tZHxmcm9tLW1pfGZyb20tbW58ZnJvbS1tb3xmcm9tLW1zfGZyb20tbXR8ZnJvbS1uY3xmcm9tLW5kfGZyb20tbmV8ZnJvbS1uaHxmcm9tLW5qfGZyb20tbm18ZnJvbS1udnxmcm9tLW9ofGZyb20tb2t8ZnJvbS1vcnxmcm9tLXBhfGZyb20tcHJ8ZnJvbS1yaXxmcm9tLXNjfGZyb20tc2R8ZnJvbS10bnxmcm9tLXR4fGZyb20tdXR8ZnJvbS12YXxmcm9tLXZ0fGZyb20td2F8ZnJvbS13aXxmcm9tLXd2fGZyb20td3l8Z2V0bXlpcHxnb3RkbnN8aG9iYnktc2l0ZXxob21lbGludXh8aG9tZXVuaXh8aWFtYWxsYW1hfGlzLWEtYW5hcmNoaXN0fGlzLWEtYmxvZ2dlcnxpcy1hLWJvb2trZWVwZXJ8aXMtYS1idWxscy1mYW58aXMtYS1jYXRlcmVyfGlzLWEtY2hlZnxpcy1hLWNvbnNlcnZhdGl2ZXxpcy1hLWNwYXxpcy1hLWN1YmljbGUtc2xhdmV8aXMtYS1kZW1vY3JhdHxpcy1hLWRlc2lnbmVyfGlzLWEtZG9jdG9yfGlzLWEtZmluYW5jaWFsYWR2aXNvcnxpcy1hLWdlZWt8aXMtYS1ncmVlbnxpcy1hLWd1cnV8aXMtYS1oYXJkLXdvcmtlcnxpcy1hLWh1bnRlcnxpcy1hLWxhbmRzY2FwZXJ8aXMtYS1sYXd5ZXJ8aXMtYS1saWJlcmFsfGlzLWEtbGliZXJ0YXJpYW58aXMtYS1sbGFtYXxpcy1hLW11c2ljaWFufGlzLWEtbmFzY2FyZmFufGlzLWEtbnVyc2V8aXMtYS1wYWludGVyfGlzLWEtcGVyc29uYWx0cmFpbmVyfGlzLWEtcGhvdG9ncmFwaGVyfGlzLWEtcGxheWVyfGlzLWEtcmVwdWJsaWNhbnxpcy1hLXJvY2tzdGFyfGlzLWEtc29jaWFsaXN0fGlzLWEtc3R1ZGVudHxpcy1hLXRlYWNoZXJ8aXMtYS10ZWNoaWV8aXMtYS10aGVyYXBpc3R8aXMtYW4tYWNjb3VudGFudHxpcy1hbi1hY3Rvcnxpcy1hbi1hY3RyZXNzfGlzLWFuLWFuYXJjaGlzdHxpcy1hbi1hcnRpc3R8aXMtYW4tZW5naW5lZXJ8aXMtYW4tZW50ZXJ0YWluZXJ8aXMtY2VydGlmaWVkfGlzLWdvbmV8aXMtaW50by1hbmltZXxpcy1pbnRvLWNhcnN8aXMtaW50by1jYXJ0b29uc3xpcy1pbnRvLWdhbWVzfGlzLWxlZXR8aXMtbm90LWNlcnRpZmllZHxpcy1zbGlja3xpcy11YmVybGVldHxpcy13aXRoLXRoZWJhbmR8aXNhLWdlZWt8aXNhLWhvY2tleW51dHxpc3NtYXJ0ZXJ0aGFueW91fGxpa2VzLXBpZXxsaWtlc2NhbmR5fG5lYXQtdXJsfHNhdmVzLXRoZS13aGFsZXN8c2VsZmlwfHNlbGxzLWZvci1sZXNzfHNlbGxzLWZvci11fHNlcnZlYmJzfHNpbXBsZS11cmx8c3BhY2UtdG8tcmVudHx0ZWFjaGVzLXlvZ2F8d3JpdGVzdGhpc2Jsb2d8ZGRuc2ZyZWV8ZGRuc2dlZWt8Z2lpemV8Z2xlZXplfGtvem93fGxvc2V5b3VyaXB8b29ndXl8dGhld29ya3BjfG15dHVsZWFwfGV1LTEuZXZlbm5vZGV8ZXUtMi5ldmVubm9kZXxldS0zLmV2ZW5ub2RlfGV1LTQuZXZlbm5vZGV8dXMtMS5ldmVubm9kZXx1cy0yLmV2ZW5ub2RlfHVzLTMuZXZlbm5vZGV8dXMtNC5ldmVubm9kZXxhcHBzLmZic2J4fGZpcmViYXNlYXBwfGZseW5uaHVifGZyZWVib3gtb3N8ZnJlZWJveG9zfGdpdGh1YnVzZXJjb250ZW50fCowZW1tfGFwcHNwb3R8YmxvZ3Nwb3R8Y29kZXNwb3R8Z29vZ2xlYXBpc3xnb29nbGVjb2RlfHBhZ2VzcGVlZG1vYmlsaXplcnxwdWJsaXNocHJveHl8d2l0aGdvb2dsZXx3aXRoeW91dHViZXxoZXJva3VhcHB8aGVyb2t1c3NsfCpjbnMuam95ZW50fGJhcnN5b25saW5lfG1ldGVvcmFwcHxldS5tZXRlb3JhcHB8Yml0YmFsbG9vbnxuZXRsaWZ5fDR1fG5mc2hvc3R8YmxvZ3N5dGV8Y2lzY29mcmVha3xkYW1uc2VydmVyfGRpdGNoeW91cmlwfGRuc2lza2lua3l8ZHlubnN8Z2Vla2dhbGF4eXxoZWFsdGgtY2FyZXJlZm9ybXxob21lc2VjdXJpdHltYWN8aG9tZXNlY3VyaXR5cGN8bXlhY3RpdmVkaXJlY3Rvcnl8bXlzZWN1cml0eWNhbWVyYXxuZXQtZnJlYWtzfG9udGhld2lmaXxwb2ludDJ0aGlzfHF1aWNrc3l0ZXN8c2VjdXJpdHl0YWN0aWNzfHNlcnZlZXhjaGFuZ2V8c2VydmVodW1vdXJ8c2VydmVwMnB8c2VydmVzYXJjYXNtfHN0dWZmdG9yZWFkfHVudXN1YWxwZXJzb258d29ya2lzYm9yaW5nfDN1dGlsaXRpZXN8ZGRuc2tpbmd8bXl2bmN8c2VydmViZWVyfHNlcnZlY291bnRlcnN0cmlrZXxzZXJ2ZWZ0cHxzZXJ2ZWdhbWV8c2VydmVoYWxmbGlmZXxzZXJ2ZWh0dHB8c2VydmVpcmN8c2VydmVtcDN8c2VydmVwaWNzfHNlcnZlcXVha2V8b3BlcmF1bml0ZXxvdXRzeXN0ZW1zY2xvdWR8b3ducHJvdmlkZXJ8cGdmb2d8cGFnZWZyb250YXBwfGdvdHBhbnRoZW9ufHhlbi5wcmdtcnxxYTJ8ZGV2LW15cW5hcGNsb3VkfGFscGhhLW15cW5hcGNsb3VkfG15cW5hcGNsb3VkfCpxdWlwZWxlbWVudHN8cmFja21hemV8cmhjbG91ZHxsb2dvaXB8ZmlyZXdhbGwtZ2F0ZXdheXxteXNob3BibG9ja3N8MWthcHB8YXBwY2hpeml8YXBwbGlueml8c2luYWFwcHx2aXBzaW5hYXBwfGJvdW50eS1mdWxsfGFscGhhLmJvdW50eS1mdWxsfGJldGEuYm91bnR5LWZ1bGx8dGVtcC1kbnN8ZHNteW5hc3xmYW1pbHlkc3xibG94Y21zfHRvd25uZXdzLXN0YWdpbmd8aGt8cmVtb3Rld2R8eW9sYXNpdGVcIixcImNvb3BcIjpcIlwiLFwiY3JcIjpcImFjfGNvfGVkfGZpfGdvfG9yfHNhXCIsXCJjdVwiOlwiY29tfGVkdXxvcmd8bmV0fGdvdnxpbmZcIixcImN2XCI6XCJibG9nc3BvdFwiLFwiY3dcIjpcImNvbXxlZHV8bmV0fG9yZ1wiLFwiY3hcIjpcImdvdnxhdGh8aW5mb1wiLFwiY3lcIjpcImFjfGJpenxjb218ZWtsb2dlc3xnb3Z8bHRkfG5hbWV8bmV0fG9yZ3xwYXJsaWFtZW50fHByZXNzfHByb3x0bXxibG9nc3BvdC5jb21cIixcImN6XCI6XCJjb3xyZWFsbXxlNHxibG9nc3BvdHxjbG91ZC5tZXRhY2VudHJ1bXxjdXN0b20ubWV0YWNlbnRydW1cIixcImRlXCI6XCJicGxhY2VkfHNxdWFyZTd8Y29tfGR5bi5jb3NpZG5zfGR5bmFtaXNjaGVzLWRuc3xkbnN1cGRhdGVyfGludGVybmV0LWRuc3xsLW8tZy1pLW58ZG5zaG9tZXxmdWV0dGVydGRhc25ldHp8aXN0ZWluZ2Vla3xpc3RtZWlufGxlYnRpbW5ldHp8bGVpdHVuZ3Nlbnx0cmFldW10Z2VyYWRlfGRkbnNzfGR5bi5kZG5zc3xkeW5kbnMuZGRuc3N8ZHluZG5zMXxkeW4taXAyNHxob21lLXdlYnNlcnZlcnxkeW4uaG9tZS13ZWJzZXJ2ZXJ8bXlob21lLXNlcnZlcnxnb2lwfGJsb2dzcG90fGtleW1hY2hpbmV8Z2l0LXJlcG9zfGxjdWJlLXNlcnZlcnxzdm4tcmVwb3N8YmFyc3l8bG9nb2lwfGZpcmV3YWxsLWdhdGV3YXl8bXktZ2F0ZXdheXxteS1yb3V0ZXJ8c3BkbnN8dGFpZnVuLWRuc3wxMmhwfDJpeHw0bGltYXxsaW1hLWNpdHl8ZGQtZG5zfGRyYXktZG5zfGRyYXlkbnN8ZHluLXZwbnxkeW52cG58bWVpbi12aWdvcnxteS12aWdvcnxteS13YW58c3luby1kc3xzeW5vbG9neS1kaXNrc3RhdGlvbnxzeW5vbG9neS1kc1wiLFwiZGpcIjpcIlwiLFwiZGtcIjpcImJpenxjb3xmaXJtfHJlZ3xzdG9yZXxibG9nc3BvdFwiLFwiZG1cIjpcImNvbXxuZXR8b3JnfGVkdXxnb3ZcIixcImRvXCI6XCJhcnR8Y29tfGVkdXxnb2J8Z292fG1pbHxuZXR8b3JnfHNsZHx3ZWJcIixcImR6XCI6XCJjb218b3JnfG5ldHxnb3Z8ZWR1fGFzc298cG9sfGFydFwiLFwiZWNcIjpcImNvbXxpbmZvfG5ldHxmaW58azEyfG1lZHxwcm98b3JnfGVkdXxnb3Z8Z29ifG1pbFwiLFwiZWR1XCI6XCJcIixcImVlXCI6XCJlZHV8Z292fHJpaWt8bGlifG1lZHxjb218cHJpfGFpcHxvcmd8ZmllfGJsb2dzcG90LmNvbVwiLFwiZWdcIjpcImNvbXxlZHV8ZXVufGdvdnxtaWx8bmFtZXxuZXR8b3JnfHNjaXxibG9nc3BvdC5jb21cIixcImVyXCI6XCIqXCIsXCJlc1wiOlwiY29tfG5vbXxvcmd8Z29ifGVkdXxibG9nc3BvdC5jb21cIixcImV0XCI6XCJjb218Z292fG9yZ3xlZHV8Yml6fG5hbWV8aW5mb3xuZXRcIixcImV1XCI6XCJteWNkfGNsb3VkbnN8YmFyc3l8d2VsbGJlaW5nem9uZXxzcGRuc3wqdHJhbnN1cmx8ZGlza3N0YXRpb25cIixcImZpXCI6XCJhbGFuZHxkeXxibG9nc3BvdHxpa2lcIixcImZqXCI6XCIqXCIsXCJma1wiOlwiKlwiLFwiZm1cIjpcIlwiLFwiZm9cIjpcIlwiLFwiZnJcIjpcImNvbXxhc3NvfG5vbXxwcmR8cHJlc3NlfHRtfGFlcm9wb3J0fGFzc2VkaWN8YXZvY2F0fGF2b3Vlc3xjY2l8Y2hhbWJhZ3JpfGNoaXJ1cmdpZW5zLWRlbnRpc3Rlc3xleHBlcnRzLWNvbXB0YWJsZXN8Z2VvbWV0cmUtZXhwZXJ0fGdvdXZ8Z3JldGF8aHVpc3NpZXItanVzdGljZXxtZWRlY2lufG5vdGFpcmVzfHBoYXJtYWNpZW58cG9ydHx2ZXRlcmluYWlyZXxmYngtb3N8ZmJ4b3N8ZnJlZWJveC1vc3xmcmVlYm94b3N8YmxvZ3Nwb3R8b24td2VifGNoaXJ1cmdpZW5zLWRlbnRpc3Rlcy1lbi1mcmFuY2VcIixcImdhXCI6XCJcIixcImdiXCI6XCJcIixcImdkXCI6XCJub21cIixcImdlXCI6XCJjb218ZWR1fGdvdnxvcmd8bWlsfG5ldHxwdnRcIixcImdmXCI6XCJcIixcImdnXCI6XCJjb3xuZXR8b3JnfGN5YVwiLFwiZ2hcIjpcImNvbXxlZHV8Z292fG9yZ3xtaWxcIixcImdpXCI6XCJjb218bHRkfGdvdnxtb2R8ZWR1fG9yZ1wiLFwiZ2xcIjpcImNvfGNvbXxlZHV8bmV0fG9yZ3xub21cIixcImdtXCI6XCJcIixcImduXCI6XCJhY3xjb218ZWR1fGdvdnxvcmd8bmV0XCIsXCJnb3ZcIjpcIlwiLFwiZ3BcIjpcImNvbXxuZXR8bW9iaXxlZHV8b3JnfGFzc29cIixcImdxXCI6XCJcIixcImdyXCI6XCJjb218ZWR1fG5ldHxvcmd8Z292fGJsb2dzcG90fG55bVwiLFwiZ3NcIjpcIlwiLFwiZ3RcIjpcImNvbXxlZHV8Z29ifGluZHxtaWx8bmV0fG9yZ3xub21cIixcImd1XCI6XCIqXCIsXCJnd1wiOlwiXCIsXCJneVwiOlwiY298Y29tfGVkdXxnb3Z8bmV0fG9yZ1wiLFwiaGtcIjpcImNvbXxlZHV8Z292fGlkdnxuZXR8b3JnfHhuLS01NXF4NWR8eG4tLXdjdnMyMmR8eG4tLWxjdnIzMmR8eG4tLW14dHExbXx4bi0tZ21xdzVhfHhuLS1jaXFwbnx4bi0tZ21xMDUwaXx4bi0temYwYXZ4fHhuLS1pbzBhN2l8eG4tLW1rMGF4aXx4bi0tb2QwYWxnfHhuLS1vZDBhcTNifHhuLS10bjBhZ3x4bi0tdWMwYXR2fHhuLS11YzBheTRhfGJsb2dzcG90fGx0ZHxpbmNcIixcImhtXCI6XCJcIixcImhuXCI6XCJjb218ZWR1fG9yZ3xuZXR8bWlsfGdvYnxub21cIixcImhyXCI6XCJpenxmcm9tfG5hbWV8Y29tfGJsb2dzcG90XCIsXCJodFwiOlwiY29tfHNob3B8ZmlybXxpbmZvfGFkdWx0fG5ldHxwcm98b3JnfG1lZHxhcnR8Y29vcHxwb2x8YXNzb3xlZHV8cmVsfGdvdXZ8cGVyc29cIixcImh1XCI6XCJjb3xpbmZvfG9yZ3xwcml2fHNwb3J0fHRtfDIwMDB8YWdyYXJ8Ym9sdHxjYXNpbm98Y2l0eXxlcm90aWNhfGVyb3Rpa2F8ZmlsbXxmb3J1bXxnYW1lc3xob3RlbHxpbmdhdGxhbnxqb2dhc3p8a29ueXZlbG98bGFrYXN8bWVkaWF8bmV3c3xyZWtsYW18c2V4fHNob3B8c3VsaXxzemV4fHRvenNkZXx1dGF6YXN8dmlkZW98YmxvZ3Nwb3RcIixcImlkXCI6XCJhY3xiaXp8Y298ZGVzYXxnb3xtaWx8bXl8bmV0fG9yfHNjaHx3ZWJ8YmxvZ3Nwb3QuY29cIixcImllXCI6XCJnb3Z8YmxvZ3Nwb3RcIixcImlsXCI6XCJhY3xjb3xnb3Z8aWRmfGsxMnxtdW5pfG5ldHxvcmd8YmxvZ3Nwb3QuY29cIixcImltXCI6XCJhY3xjb3xjb218bHRkLmNvfG5ldHxvcmd8cGxjLmNvfHR0fHR2fHJvfG5vbVwiLFwiaW5cIjpcImNvfGZpcm18bmV0fG9yZ3xnZW58aW5kfG5pY3xhY3xlZHV8cmVzfGdvdnxtaWx8Y2xvdWRuc3xibG9nc3BvdHxiYXJzeVwiLFwiaW5mb1wiOlwiY2xvdWRuc3xkeW5hbWljLWRuc3xkeW5kbnN8YmFycmVsLW9mLWtub3dsZWRnZXxiYXJyZWxsLW9mLWtub3dsZWRnZXxmb3Itb3VyfGdyb2tzLXRoZXxncm9rcy10aGlzfGhlcmUtZm9yLW1vcmV8a25vd3NpdGFsbHxzZWxmaXB8d2ViaG9wfG5zdXBkYXRlfGR2cmNhbXxpbG92ZWNvbGxlZ2V8bm8taXBcIixcImludFwiOlwiZXVcIixcImlvXCI6XCJjb218YmFja3BsYW5lYXBwfGJveGZ1c2V8YnJvd3NlcnNhZmV0eW1hcmt8ZGVkeW58ZHJ1ZHxkZWZpbmltYXxlbm9uaWN8Y3VzdG9tZXIuZW5vbmljfGdpdGh1YnxnaXRsYWJ8aGFzdXJhLWFwcHxuZ3Jva3xzdGFnZS5ub2RlYXJ0fG5vZHVtfG5pZHxwYW50aGVvbnNpdGV8cHJvdG9uZXR8dmFwb3JjbG91ZHxoemN8c2FuZGNhdHN8c2hpZnRlZGl0fGFwcHMubGFpcnwqc3RvbG9zfHNwYWNla2l0fGN1c3QuZGV2LnRoaW5nZHVzdHxjdXN0LmRpc3JlYy50aGluZ2R1c3R8Y3VzdC5wcm9kLnRoaW5nZHVzdHxjdXN0LnRlc3RpbmcudGhpbmdkdXN0fHdlZGVwbG95XCIsXCJpcVwiOlwiZ292fGVkdXxtaWx8Y29tfG9yZ3xuZXRcIixcImlyXCI6XCJhY3xjb3xnb3Z8aWR8bmV0fG9yZ3xzY2h8eG4tLW1nYmEzYTRmMTZhfHhuLS1tZ2JhM2E0ZnJhXCIsXCJpc1wiOlwibmV0fGNvbXxlZHV8Z292fG9yZ3xpbnR8Y3VwY2FrZXxibG9nc3BvdFwiLFwiaXRcIjpcImdvdnxlZHV8YWJyfGFicnV6em98YW9zdGEtdmFsbGV5fGFvc3RhdmFsbGV5fGJhc3xiYXNpbGljYXRhfGNhbHxjYWxhYnJpYXxjYW18Y2FtcGFuaWF8ZW1pbGlhLXJvbWFnbmF8ZW1pbGlhcm9tYWduYXxlbXJ8ZnJpdWxpLXYtZ2l1bGlhfGZyaXVsaS12ZS1naXVsaWF8ZnJpdWxpLXZlZ2l1bGlhfGZyaXVsaS12ZW5lemlhLWdpdWxpYXxmcml1bGktdmVuZXppYWdpdWxpYXxmcml1bGktdmdpdWxpYXxmcml1bGl2LWdpdWxpYXxmcml1bGl2ZS1naXVsaWF8ZnJpdWxpdmVnaXVsaWF8ZnJpdWxpdmVuZXppYS1naXVsaWF8ZnJpdWxpdmVuZXppYWdpdWxpYXxmcml1bGl2Z2l1bGlhfGZ2Z3xsYXp8bGF6aW98bGlnfGxpZ3VyaWF8bG9tfGxvbWJhcmRpYXxsb21iYXJkeXxsdWNhbmlhfG1hcnxtYXJjaGV8bW9sfG1vbGlzZXxwaWVkbW9udHxwaWVtb250ZXxwbW58cHVnfHB1Z2xpYXxzYXJ8c2FyZGVnbmF8c2FyZGluaWF8c2ljfHNpY2lsaWF8c2ljaWx5fHRhYXx0b3N8dG9zY2FuYXx0cmVudGluby1hLWFkaWdlfHRyZW50aW5vLWFhZGlnZXx0cmVudGluby1hbHRvLWFkaWdlfHRyZW50aW5vLWFsdG9hZGlnZXx0cmVudGluby1zLXRpcm9sfHRyZW50aW5vLXN0aXJvbHx0cmVudGluby1zdWQtdGlyb2x8dHJlbnRpbm8tc3VkdGlyb2x8dHJlbnRpbm8tc3VlZC10aXJvbHx0cmVudGluby1zdWVkdGlyb2x8dHJlbnRpbm9hLWFkaWdlfHRyZW50aW5vYWFkaWdlfHRyZW50aW5vYWx0by1hZGlnZXx0cmVudGlub2FsdG9hZGlnZXx0cmVudGlub3MtdGlyb2x8dHJlbnRpbm9zdGlyb2x8dHJlbnRpbm9zdWQtdGlyb2x8dHJlbnRpbm9zdWR0aXJvbHx0cmVudGlub3N1ZWQtdGlyb2x8dHJlbnRpbm9zdWVkdGlyb2x8dHVzY2FueXx1bWJ8dW1icmlhfHZhbC1kLWFvc3RhfHZhbC1kYW9zdGF8dmFsZC1hb3N0YXx2YWxkYW9zdGF8dmFsbGUtYW9zdGF8dmFsbGUtZC1hb3N0YXx2YWxsZS1kYW9zdGF8dmFsbGVhb3N0YXx2YWxsZWQtYW9zdGF8dmFsbGVkYW9zdGF8dmFsbGVlLWFvc3RlfHZhbGxlZWFvc3RlfHZhb3x2ZGF8dmVufHZlbmV0b3xhZ3xhZ3JpZ2VudG98YWx8YWxlc3NhbmRyaWF8YWx0by1hZGlnZXxhbHRvYWRpZ2V8YW58YW5jb25hfGFuZHJpYS1iYXJsZXR0YS10cmFuaXxhbmRyaWEtdHJhbmktYmFybGV0dGF8YW5kcmlhYmFybGV0dGF0cmFuaXxhbmRyaWF0cmFuaWJhcmxldHRhfGFvfGFvc3RhfGFvc3RlfGFwfGFxfGFxdWlsYXxhcnxhcmV6em98YXNjb2xpLXBpY2Vub3xhc2NvbGlwaWNlbm98YXN0aXxhdHxhdnxhdmVsbGlub3xiYXxiYWxzYW58YmFyaXxiYXJsZXR0YS10cmFuaS1hbmRyaWF8YmFybGV0dGF0cmFuaWFuZHJpYXxiZWxsdW5vfGJlbmV2ZW50b3xiZXJnYW1vfGJnfGJpfGJpZWxsYXxibHxibnxib3xib2xvZ25hfGJvbHphbm98Ym96ZW58YnJ8YnJlc2NpYXxicmluZGlzaXxic3xidHxienxjYXxjYWdsaWFyaXxjYWx0YW5pc3NldHRhfGNhbXBpZGFuby1tZWRpb3xjYW1waWRhbm9tZWRpb3xjYW1wb2Jhc3NvfGNhcmJvbmlhLWlnbGVzaWFzfGNhcmJvbmlhaWdsZXNpYXN8Y2FycmFyYS1tYXNzYXxjYXJyYXJhbWFzc2F8Y2FzZXJ0YXxjYXRhbmlhfGNhdGFuemFyb3xjYnxjZXxjZXNlbmEtZm9ybGl8Y2VzZW5hZm9ybGl8Y2h8Y2hpZXRpfGNpfGNsfGNufGNvfGNvbW98Y29zZW56YXxjcnxjcmVtb25hfGNyb3RvbmV8Y3N8Y3R8Y3VuZW98Y3p8ZGVsbC1vZ2xpYXN0cmF8ZGVsbG9nbGlhc3RyYXxlbnxlbm5hfGZjfGZlfGZlcm1vfGZlcnJhcmF8Zmd8Zml8ZmlyZW56ZXxmbG9yZW5jZXxmbXxmb2dnaWF8Zm9ybGktY2VzZW5hfGZvcmxpY2VzZW5hfGZyfGZyb3Npbm9uZXxnZXxnZW5vYXxnZW5vdmF8Z298Z29yaXppYXxncnxncm9zc2V0b3xpZ2xlc2lhcy1jYXJib25pYXxpZ2xlc2lhc2NhcmJvbmlhfGltfGltcGVyaWF8aXN8aXNlcm5pYXxrcnxsYS1zcGV6aWF8bGFxdWlsYXxsYXNwZXppYXxsYXRpbmF8bGN8bGV8bGVjY2V8bGVjY298bGl8bGl2b3Jub3xsb3xsb2RpfGx0fGx1fGx1Y2NhfG1hY2VyYXRhfG1hbnRvdmF8bWFzc2EtY2FycmFyYXxtYXNzYWNhcnJhcmF8bWF0ZXJhfG1ifG1jfG1lfG1lZGlvLWNhbXBpZGFub3xtZWRpb2NhbXBpZGFub3xtZXNzaW5hfG1pfG1pbGFufG1pbGFub3xtbnxtb3xtb2RlbmF8bW9uemEtYnJpYW56YXxtb256YS1lLWRlbGxhLWJyaWFuemF8bW9uemF8bW9uemFicmlhbnphfG1vbnphZWJyaWFuemF8bW9uemFlZGVsbGFicmlhbnphfG1zfG10fG5hfG5hcGxlc3xuYXBvbGl8bm98bm92YXJhfG51fG51b3JvfG9nfG9nbGlhc3RyYXxvbGJpYS10ZW1waW98b2xiaWF0ZW1waW98b3J8b3Jpc3Rhbm98b3R8cGF8cGFkb3ZhfHBhZHVhfHBhbGVybW98cGFybWF8cGF2aWF8cGN8cGR8cGV8cGVydWdpYXxwZXNhcm8tdXJiaW5vfHBlc2Fyb3VyYmlub3xwZXNjYXJhfHBnfHBpfHBpYWNlbnphfHBpc2F8cGlzdG9pYXxwbnxwb3xwb3JkZW5vbmV8cG90ZW56YXxwcnxwcmF0b3xwdHxwdXxwdnxwenxyYXxyYWd1c2F8cmF2ZW5uYXxyY3xyZXxyZWdnaW8tY2FsYWJyaWF8cmVnZ2lvLWVtaWxpYXxyZWdnaW9jYWxhYnJpYXxyZWdnaW9lbWlsaWF8cmd8cml8cmlldGl8cmltaW5pfHJtfHJufHJvfHJvbWF8cm9tZXxyb3ZpZ298c2F8c2FsZXJub3xzYXNzYXJpfHNhdm9uYXxzaXxzaWVuYXxzaXJhY3VzYXxzb3xzb25kcmlvfHNwfHNyfHNzfHN1ZWR0aXJvbHxzdnx0YXx0YXJhbnRvfHRlfHRlbXBpby1vbGJpYXx0ZW1waW9vbGJpYXx0ZXJhbW98dGVybml8dG58dG98dG9yaW5vfHRwfHRyfHRyYW5pLWFuZHJpYS1iYXJsZXR0YXx0cmFuaS1iYXJsZXR0YS1hbmRyaWF8dHJhbmlhbmRyaWFiYXJsZXR0YXx0cmFuaWJhcmxldHRhYW5kcmlhfHRyYXBhbml8dHJlbnRpbm98dHJlbnRvfHRyZXZpc298dHJpZXN0ZXx0c3x0dXJpbnx0dnx1ZHx1ZGluZXx1cmJpbm8tcGVzYXJvfHVyYmlub3Blc2Fyb3x2YXx2YXJlc2V8dmJ8dmN8dmV8dmVuZXppYXx2ZW5pY2V8dmVyYmFuaWF8dmVyY2VsbGl8dmVyb25hfHZpfHZpYm8tdmFsZW50aWF8dmlib3ZhbGVudGlhfHZpY2VuemF8dml0ZXJib3x2cnx2c3x2dHx2dnxibG9nc3BvdFwiLFwiamVcIjpcImNvfG5ldHxvcmdcIixcImptXCI6XCIqXCIsXCJqb1wiOlwiY29tfG9yZ3xuZXR8ZWR1fHNjaHxnb3Z8bWlsfG5hbWVcIixcImpvYnNcIjpcIlwiLFwianBcIjpcImFjfGFkfGNvfGVkfGdvfGdyfGxnfG5lfG9yfGFpY2hpfGFraXRhfGFvbW9yaXxjaGliYXxlaGltZXxmdWt1aXxmdWt1b2thfGZ1a3VzaGltYXxnaWZ1fGd1bm1hfGhpcm9zaGltYXxob2trYWlkb3xoeW9nb3xpYmFyYWtpfGlzaGlrYXdhfGl3YXRlfGthZ2F3YXxrYWdvc2hpbWF8a2FuYWdhd2F8a29jaGl8a3VtYW1vdG98a3lvdG98bWllfG1peWFnaXxtaXlhemFraXxuYWdhbm98bmFnYXNha2l8bmFyYXxuaWlnYXRhfG9pdGF8b2theWFtYXxva2luYXdhfG9zYWthfHNhZ2F8c2FpdGFtYXxzaGlnYXxzaGltYW5lfHNoaXp1b2thfHRvY2hpZ2l8dG9rdXNoaW1hfHRva3lvfHRvdHRvcml8dG95YW1hfHdha2F5YW1hfHlhbWFnYXRhfHlhbWFndWNoaXx5YW1hbmFzaGl8eG4tLTRwdnhzfHhuLS12Z3U0MDJjfHhuLS1jM3MxNG18eG4tLWY2cXg1M2F8eG4tLThwdnI0dXx4bi0tdWlzdDIyaHx4bi0tZGpyczcyZDZ1eXx4bi0tbWtydTQ1aXx4bi0tMHRycTdwN25ufHhuLS04bHRyNjJrfHhuLS0ybTRhMTVlfHhuLS1lZnZuOXN8eG4tLTMydnAzMGh8eG4tLTRpdDc5N2t8eG4tLTFscXM3MWR8eG4tLTVydHA0OWN8eG4tLTVqczA0NWR8eG4tLWVocXo1Nm58eG4tLTFscXMwM258eG4tLXFxcXQxMW18eG4tLWticnE3b3x4bi0tcHNzdTMzbHx4bi0tbnRzcTE3Z3x4bi0tdWlzejNnfHhuLS02YnR3NWF8eG4tLTFjdHdvfHhuLS02b3J4MnJ8eG4tLXJodDYxZXx4bi0tcmh0Mjd6fHhuLS1kanR5NGt8eG4tLW5pdDIyNWt8eG4tLXJodDNkfHhuLS1rbHR5NXh8eG4tLWtsdHg5YXx4bi0ta2x0cDdkfHhuLS11dXd1NThhfHhuLS16YngwMjVkfHhuLS1udHNvMGlxeDNhfHhuLS1lbHFxMTZofHhuLS00aXQxNjhkfHhuLS1rbHQ3ODdkfHhuLS1ybnkzMWh8eG4tLTd0MGEyNjRjfHhuLS01cnRxMzRrfHhuLS1rN3luOTVlfHhuLS10b3IxMzFvfHhuLS1kNXF2N3o4NzZjfCprYXdhc2FraXwqa2l0YWt5dXNodXwqa29iZXwqbmFnb3lhfCpzYXBwb3JvfCpzZW5kYWl8Knlva29oYW1hfCFjaXR5Lmthd2FzYWtpfCFjaXR5LmtpdGFreXVzaHV8IWNpdHkua29iZXwhY2l0eS5uYWdveWF8IWNpdHkuc2FwcG9yb3whY2l0eS5zZW5kYWl8IWNpdHkueW9rb2hhbWF8YWlzYWkuYWljaGl8YW1hLmFpY2hpfGFuam8uYWljaGl8YXN1a2UuYWljaGl8Y2hpcnl1LmFpY2hpfGNoaXRhLmFpY2hpfGZ1c28uYWljaGl8Z2FtYWdvcmkuYWljaGl8aGFuZGEuYWljaGl8aGF6dS5haWNoaXxoZWtpbmFuLmFpY2hpfGhpZ2FzaGl1cmEuYWljaGl8aWNoaW5vbWl5YS5haWNoaXxpbmF6YXdhLmFpY2hpfGludXlhbWEuYWljaGl8aXNzaGlraS5haWNoaXxpd2FrdXJhLmFpY2hpfGthbmllLmFpY2hpfGthcml5YS5haWNoaXxrYXN1Z2FpLmFpY2hpfGtpcmEuYWljaGl8a2l5b3N1LmFpY2hpfGtvbWFraS5haWNoaXxrb25hbi5haWNoaXxrb3RhLmFpY2hpfG1paGFtYS5haWNoaXxtaXlvc2hpLmFpY2hpfG5pc2hpby5haWNoaXxuaXNzaGluLmFpY2hpfG9idS5haWNoaXxvZ3VjaGkuYWljaGl8b2hhcnUuYWljaGl8b2themFraS5haWNoaXxvd2FyaWFzYWhpLmFpY2hpfHNldG8uYWljaGl8c2hpa2F0c3UuYWljaGl8c2hpbnNoaXJvLmFpY2hpfHNoaXRhcmEuYWljaGl8dGFoYXJhLmFpY2hpfHRha2FoYW1hLmFpY2hpfHRvYmlzaGltYS5haWNoaXx0b2VpLmFpY2hpfHRvZ28uYWljaGl8dG9rYWkuYWljaGl8dG9rb25hbWUuYWljaGl8dG95b2FrZS5haWNoaXx0b3lvaGFzaGkuYWljaGl8dG95b2thd2EuYWljaGl8dG95b25lLmFpY2hpfHRveW90YS5haWNoaXx0c3VzaGltYS5haWNoaXx5YXRvbWkuYWljaGl8YWtpdGEuYWtpdGF8ZGFpc2VuLmFraXRhfGZ1amlzYXRvLmFraXRhfGdvam9tZS5ha2l0YXxoYWNoaXJvZ2F0YS5ha2l0YXxoYXBwb3UuYWtpdGF8aGlnYXNoaW5hcnVzZS5ha2l0YXxob25qby5ha2l0YXxob25qeW8uYWtpdGF8aWthd2EuYWtpdGF8a2FtaWtvYW5pLmFraXRhfGthbWlva2EuYWtpdGF8a2F0YWdhbWkuYWtpdGF8a2F6dW5vLmFraXRhfGtpdGFha2l0YS5ha2l0YXxrb3Nha2EuYWtpdGF8a3lvd2EuYWtpdGF8bWlzYXRvLmFraXRhfG1pdGFuZS5ha2l0YXxtb3JpeW9zaGkuYWtpdGF8bmlrYWhvLmFraXRhfG5vc2hpcm8uYWtpdGF8b2RhdGUuYWtpdGF8b2dhLmFraXRhfG9nYXRhLmFraXRhfHNlbWJva3UuYWtpdGF8eW9rb3RlLmFraXRhfHl1cmlob25qby5ha2l0YXxhb21vcmkuYW9tb3JpfGdvbm9oZS5hb21vcml8aGFjaGlub2hlLmFvbW9yaXxoYXNoaWthbWkuYW9tb3JpfGhpcmFuYWkuYW9tb3JpfGhpcm9zYWtpLmFvbW9yaXxpdGF5YW5hZ2kuYW9tb3JpfGt1cm9pc2hpLmFvbW9yaXxtaXNhd2EuYW9tb3JpfG11dHN1LmFvbW9yaXxuYWthZG9tYXJpLmFvbW9yaXxub2hlamkuYW9tb3JpfG9pcmFzZS5hb21vcml8b3dhbmkuYW9tb3JpfHJva3Vub2hlLmFvbW9yaXxzYW5ub2hlLmFvbW9yaXxzaGljaGlub2hlLmFvbW9yaXxzaGluZ28uYW9tb3JpfHRha2tvLmFvbW9yaXx0b3dhZGEuYW9tb3JpfHRzdWdhcnUuYW9tb3JpfHRzdXJ1dGEuYW9tb3JpfGFiaWtvLmNoaWJhfGFzYWhpLmNoaWJhfGNob25hbi5jaGliYXxjaG9zZWkuY2hpYmF8Y2hvc2hpLmNoaWJhfGNodW8uY2hpYmF8ZnVuYWJhc2hpLmNoaWJhfGZ1dHRzdS5jaGliYXxoYW5hbWlnYXdhLmNoaWJhfGljaGloYXJhLmNoaWJhfGljaGlrYXdhLmNoaWJhfGljaGlub21peWEuY2hpYmF8aW56YWkuY2hpYmF8aXN1bWkuY2hpYmF8a2FtYWdheWEuY2hpYmF8a2Ftb2dhd2EuY2hpYmF8a2FzaGl3YS5jaGliYXxrYXRvcmkuY2hpYmF8a2F0c3V1cmEuY2hpYmF8a2ltaXRzdS5jaGliYXxraXNhcmF6dS5jaGliYXxrb3pha2kuY2hpYmF8a3VqdWt1cmkuY2hpYmF8a3lvbmFuLmNoaWJhfG1hdHN1ZG8uY2hpYmF8bWlkb3JpLmNoaWJhfG1paGFtYS5jaGliYXxtaW5hbWlib3NvLmNoaWJhfG1vYmFyYS5jaGliYXxtdXRzdXphd2EuY2hpYmF8bmFnYXJhLmNoaWJhfG5hZ2FyZXlhbWEuY2hpYmF8bmFyYXNoaW5vLmNoaWJhfG5hcml0YS5jaGliYXxub2RhLmNoaWJhfG9hbWlzaGlyYXNhdG8uY2hpYmF8b21pZ2F3YS5jaGliYXxvbmp1a3UuY2hpYmF8b3Rha2kuY2hpYmF8c2FrYWUuY2hpYmF8c2FrdXJhLmNoaWJhfHNoaW1vZnVzYS5jaGliYXxzaGlyYWtvLmNoaWJhfHNoaXJvaS5jaGliYXxzaGlzdWkuY2hpYmF8c29kZWdhdXJhLmNoaWJhfHNvc2EuY2hpYmF8dGFrby5jaGliYXx0YXRleWFtYS5jaGliYXx0b2dhbmUuY2hpYmF8dG9obm9zaG8uY2hpYmF8dG9taXNhdG8uY2hpYmF8dXJheWFzdS5jaGliYXx5YWNoaW1hdGEuY2hpYmF8eWFjaGl5by5jaGliYXx5b2thaWNoaWJhLmNoaWJhfHlva29zaGliYWhpa2FyaS5jaGliYXx5b3RzdWthaWRvLmNoaWJhfGFpbmFuLmVoaW1lfGhvbmFpLmVoaW1lfGlrYXRhLmVoaW1lfGltYWJhcmkuZWhpbWV8aXlvLmVoaW1lfGthbWlqaW1hLmVoaW1lfGtpaG9rdS5laGltZXxrdW1ha29nZW4uZWhpbWV8bWFzYWtpLmVoaW1lfG1hdHN1bm8uZWhpbWV8bWF0c3V5YW1hLmVoaW1lfG5hbWlrYXRhLmVoaW1lfG5paWhhbWEuZWhpbWV8b3p1LmVoaW1lfHNhaWpvLmVoaW1lfHNlaXlvLmVoaW1lfHNoaWtva3VjaHVvLmVoaW1lfHRvYmUuZWhpbWV8dG9vbi5laGltZXx1Y2hpa28uZWhpbWV8dXdhamltYS5laGltZXx5YXdhdGFoYW1hLmVoaW1lfGVjaGl6ZW4uZnVrdWl8ZWloZWlqaS5mdWt1aXxmdWt1aS5mdWt1aXxpa2VkYS5mdWt1aXxrYXRzdXlhbWEuZnVrdWl8bWloYW1hLmZ1a3VpfG1pbmFtaWVjaGl6ZW4uZnVrdWl8b2JhbWEuZnVrdWl8b2hpLmZ1a3VpfG9uby5mdWt1aXxzYWJhZS5mdWt1aXxzYWthaS5mdWt1aXx0YWthaGFtYS5mdWt1aXx0c3VydWdhLmZ1a3VpfHdha2FzYS5mdWt1aXxhc2hpeWEuZnVrdW9rYXxidXplbi5mdWt1b2thfGNoaWt1Z28uZnVrdW9rYXxjaGlrdWhvLmZ1a3Vva2F8Y2hpa3Vqby5mdWt1b2thfGNoaWt1c2hpbm8uZnVrdW9rYXxjaGlrdXplbi5mdWt1b2thfGNodW8uZnVrdW9rYXxkYXphaWZ1LmZ1a3Vva2F8ZnVrdWNoaS5mdWt1b2thfGhha2F0YS5mdWt1b2thfGhpZ2FzaGkuZnVrdW9rYXxoaXJva2F3YS5mdWt1b2thfGhpc2F5YW1hLmZ1a3Vva2F8aWl6dWthLmZ1a3Vva2F8aW5hdHN1a2kuZnVrdW9rYXxrYWhvLmZ1a3Vva2F8a2FzdWdhLmZ1a3Vva2F8a2FzdXlhLmZ1a3Vva2F8a2F3YXJhLmZ1a3Vva2F8a2Vpc2VuLmZ1a3Vva2F8a29nYS5mdWt1b2thfGt1cmF0ZS5mdWt1b2thfGt1cm9naS5mdWt1b2thfGt1cnVtZS5mdWt1b2thfG1pbmFtaS5mdWt1b2thfG1peWFrby5mdWt1b2thfG1peWFtYS5mdWt1b2thfG1peWF3YWthLmZ1a3Vva2F8bWl6dW1ha2kuZnVrdW9rYXxtdW5ha2F0YS5mdWt1b2thfG5ha2FnYXdhLmZ1a3Vva2F8bmFrYW1hLmZ1a3Vva2F8bmlzaGkuZnVrdW9rYXxub2dhdGEuZnVrdW9rYXxvZ29yaS5mdWt1b2thfG9rYWdha2kuZnVrdW9rYXxva2F3YS5mdWt1b2thfG9raS5mdWt1b2thfG9tdXRhLmZ1a3Vva2F8b25nYS5mdWt1b2thfG9ub2pvLmZ1a3Vva2F8b3RvLmZ1a3Vva2F8c2FpZ2F3YS5mdWt1b2thfHNhc2FndXJpLmZ1a3Vva2F8c2hpbmd1LmZ1a3Vva2F8c2hpbnlvc2hpdG9taS5mdWt1b2thfHNob25haS5mdWt1b2thfHNvZWRhLmZ1a3Vva2F8c3VlLmZ1a3Vva2F8dGFjaGlhcmFpLmZ1a3Vva2F8dGFnYXdhLmZ1a3Vva2F8dGFrYXRhLmZ1a3Vva2F8dG9oby5mdWt1b2thfHRveW90c3UuZnVrdW9rYXx0c3Vpa2kuZnVrdW9rYXx1a2loYS5mdWt1b2thfHVtaS5mdWt1b2thfHVzdWkuZnVrdW9rYXx5YW1hZGEuZnVrdW9rYXx5YW1lLmZ1a3Vva2F8eWFuYWdhd2EuZnVrdW9rYXx5dWt1aGFzaGkuZnVrdW9rYXxhaXp1YmFuZ2UuZnVrdXNoaW1hfGFpenVtaXNhdG8uZnVrdXNoaW1hfGFpenV3YWthbWF0c3UuZnVrdXNoaW1hfGFzYWthd2EuZnVrdXNoaW1hfGJhbmRhaS5mdWt1c2hpbWF8ZGF0ZS5mdWt1c2hpbWF8ZnVrdXNoaW1hLmZ1a3VzaGltYXxmdXJ1ZG9uby5mdWt1c2hpbWF8ZnV0YWJhLmZ1a3VzaGltYXxoYW5hd2EuZnVrdXNoaW1hfGhpZ2FzaGkuZnVrdXNoaW1hfGhpcmF0YS5mdWt1c2hpbWF8aGlyb25vLmZ1a3VzaGltYXxpaXRhdGUuZnVrdXNoaW1hfGluYXdhc2hpcm8uZnVrdXNoaW1hfGlzaGlrYXdhLmZ1a3VzaGltYXxpd2FraS5mdWt1c2hpbWF8aXp1bWl6YWtpLmZ1a3VzaGltYXxrYWdhbWlpc2hpLmZ1a3VzaGltYXxrYW5leWFtYS5mdWt1c2hpbWF8a2F3YW1hdGEuZnVrdXNoaW1hfGtpdGFrYXRhLmZ1a3VzaGltYXxraXRhc2hpb2JhcmEuZnVrdXNoaW1hfGtvb3JpLmZ1a3VzaGltYXxrb3JpeWFtYS5mdWt1c2hpbWF8a3VuaW1pLmZ1a3VzaGltYXxtaWhhcnUuZnVrdXNoaW1hfG1pc2hpbWEuZnVrdXNoaW1hfG5hbWllLmZ1a3VzaGltYXxuYW5nby5mdWt1c2hpbWF8bmlzaGlhaXp1LmZ1a3VzaGltYXxuaXNoaWdvLmZ1a3VzaGltYXxva3VtYS5mdWt1c2hpbWF8b21vdGVnby5mdWt1c2hpbWF8b25vLmZ1a3VzaGltYXxvdGFtYS5mdWt1c2hpbWF8c2FtZWdhd2EuZnVrdXNoaW1hfHNoaW1vZ28uZnVrdXNoaW1hfHNoaXJha2F3YS5mdWt1c2hpbWF8c2hvd2EuZnVrdXNoaW1hfHNvbWEuZnVrdXNoaW1hfHN1a2FnYXdhLmZ1a3VzaGltYXx0YWlzaGluLmZ1a3VzaGltYXx0YW1ha2F3YS5mdWt1c2hpbWF8dGFuYWd1cmEuZnVrdXNoaW1hfHRlbmVpLmZ1a3VzaGltYXx5YWJ1a2kuZnVrdXNoaW1hfHlhbWF0by5mdWt1c2hpbWF8eWFtYXRzdXJpLmZ1a3VzaGltYXx5YW5haXp1LmZ1a3VzaGltYXx5dWdhd2EuZnVrdXNoaW1hfGFucGFjaGkuZ2lmdXxlbmEuZ2lmdXxnaWZ1LmdpZnV8Z2luYW4uZ2lmdXxnb2RvLmdpZnV8Z3Vqby5naWZ1fGhhc2hpbWEuZ2lmdXxoaWNoaXNvLmdpZnV8aGlkYS5naWZ1fGhpZ2FzaGlzaGlyYWthd2EuZ2lmdXxpYmlnYXdhLmdpZnV8aWtlZGEuZ2lmdXxrYWthbWlnYWhhcmEuZ2lmdXxrYW5pLmdpZnV8a2FzYWhhcmEuZ2lmdXxrYXNhbWF0c3UuZ2lmdXxrYXdhdWUuZ2lmdXxraXRhZ2F0YS5naWZ1fG1pbm8uZ2lmdXxtaW5va2Ftby5naWZ1fG1pdGFrZS5naWZ1fG1penVuYW1pLmdpZnV8bW90b3N1LmdpZnV8bmFrYXRzdWdhd2EuZ2lmdXxvZ2FraS5naWZ1fHNha2Fob2dpLmdpZnV8c2VraS5naWZ1fHNla2lnYWhhcmEuZ2lmdXxzaGlyYWthd2EuZ2lmdXx0YWppbWkuZ2lmdXx0YWtheWFtYS5naWZ1fHRhcnVpLmdpZnV8dG9raS5naWZ1fHRvbWlrYS5naWZ1fHdhbm91Y2hpLmdpZnV8eWFtYWdhdGEuZ2lmdXx5YW90c3UuZ2lmdXx5b3JvLmdpZnV8YW5uYWthLmd1bm1hfGNoaXlvZGEuZ3VubWF8ZnVqaW9rYS5ndW5tYXxoaWdhc2hpYWdhdHN1bWEuZ3VubWF8aXNlc2FraS5ndW5tYXxpdGFrdXJhLmd1bm1hfGthbm5hLmd1bm1hfGthbnJhLmd1bm1hfGthdGFzaGluYS5ndW5tYXxrYXdhYmEuZ3VubWF8a2lyeXUuZ3VubWF8a3VzYXRzdS5ndW5tYXxtYWViYXNoaS5ndW5tYXxtZWl3YS5ndW5tYXxtaWRvcmkuZ3VubWF8bWluYWthbWkuZ3VubWF8bmFnYW5vaGFyYS5ndW5tYXxuYWthbm9qby5ndW5tYXxuYW5tb2t1Lmd1bm1hfG51bWF0YS5ndW5tYXxvaXp1bWkuZ3VubWF8b3JhLmd1bm1hfG90YS5ndW5tYXxzaGlidWthd2EuZ3VubWF8c2hpbW9uaXRhLmd1bm1hfHNoaW50by5ndW5tYXxzaG93YS5ndW5tYXx0YWthc2FraS5ndW5tYXx0YWtheWFtYS5ndW5tYXx0YW1hbXVyYS5ndW5tYXx0YXRlYmF5YXNoaS5ndW5tYXx0b21pb2thLmd1bm1hfHRzdWtpeW9uby5ndW5tYXx0c3VtYWdvaS5ndW5tYXx1ZW5vLmd1bm1hfHlvc2hpb2thLmd1bm1hfGFzYW1pbmFtaS5oaXJvc2hpbWF8ZGFpd2EuaGlyb3NoaW1hfGV0YWppbWEuaGlyb3NoaW1hfGZ1Y2h1Lmhpcm9zaGltYXxmdWt1eWFtYS5oaXJvc2hpbWF8aGF0c3VrYWljaGkuaGlyb3NoaW1hfGhpZ2FzaGloaXJvc2hpbWEuaGlyb3NoaW1hfGhvbmdvLmhpcm9zaGltYXxqaW5zZWtpa29nZW4uaGlyb3NoaW1hfGthaXRhLmhpcm9zaGltYXxrdWkuaGlyb3NoaW1hfGt1bWFuby5oaXJvc2hpbWF8a3VyZS5oaXJvc2hpbWF8bWloYXJhLmhpcm9zaGltYXxtaXlvc2hpLmhpcm9zaGltYXxuYWthLmhpcm9zaGltYXxvbm9taWNoaS5oaXJvc2hpbWF8b3Nha2lrYW1pamltYS5oaXJvc2hpbWF8b3Rha2UuaGlyb3NoaW1hfHNha2EuaGlyb3NoaW1hfHNlcmEuaGlyb3NoaW1hfHNlcmFuaXNoaS5oaXJvc2hpbWF8c2hpbmljaGkuaGlyb3NoaW1hfHNob2JhcmEuaGlyb3NoaW1hfHRha2VoYXJhLmhpcm9zaGltYXxhYmFzaGlyaS5ob2trYWlkb3xhYmlyYS5ob2trYWlkb3xhaWJldHN1Lmhva2thaWRvfGFrYWJpcmEuaG9ra2FpZG98YWtrZXNoaS5ob2trYWlkb3xhc2FoaWthd2EuaG9ra2FpZG98YXNoaWJldHN1Lmhva2thaWRvfGFzaG9yby5ob2trYWlkb3xhc3NhYnUuaG9ra2FpZG98YXRzdW1hLmhva2thaWRvfGJpYmFpLmhva2thaWRvfGJpZWkuaG9ra2FpZG98YmlmdWthLmhva2thaWRvfGJpaG9yby5ob2trYWlkb3xiaXJhdG9yaS5ob2trYWlkb3xjaGlwcHViZXRzdS5ob2trYWlkb3xjaGl0b3NlLmhva2thaWRvfGRhdGUuaG9ra2FpZG98ZWJldHN1Lmhva2thaWRvfGVtYmV0c3UuaG9ra2FpZG98ZW5pd2EuaG9ra2FpZG98ZXJpbW8uaG9ra2FpZG98ZXNhbi5ob2trYWlkb3xlc2FzaGkuaG9ra2FpZG98ZnVrYWdhd2EuaG9ra2FpZG98ZnVrdXNoaW1hLmhva2thaWRvfGZ1cmFuby5ob2trYWlkb3xmdXJ1YmlyYS5ob2trYWlkb3xoYWJvcm8uaG9ra2FpZG98aGFrb2RhdGUuaG9ra2FpZG98aGFtYXRvbmJldHN1Lmhva2thaWRvfGhpZGFrYS5ob2trYWlkb3xoaWdhc2hpa2FndXJhLmhva2thaWRvfGhpZ2FzaGlrYXdhLmhva2thaWRvfGhpcm9vLmhva2thaWRvfGhva3VyeXUuaG9ra2FpZG98aG9rdXRvLmhva2thaWRvfGhvbmJldHN1Lmhva2thaWRvfGhvcm9rYW5haS5ob2trYWlkb3xob3Jvbm9iZS5ob2trYWlkb3xpa2VkYS5ob2trYWlkb3xpbWFrYW5lLmhva2thaWRvfGlzaGlrYXJpLmhva2thaWRvfGl3YW1pemF3YS5ob2trYWlkb3xpd2FuYWkuaG9ra2FpZG98a2FtaWZ1cmFuby5ob2trYWlkb3xrYW1pa2F3YS5ob2trYWlkb3xrYW1pc2hpaG9yby5ob2trYWlkb3xrYW1pc3VuYWdhd2EuaG9ra2FpZG98a2Ftb2VuYWkuaG9ra2FpZG98a2F5YWJlLmhva2thaWRvfGtlbWJ1Y2hpLmhva2thaWRvfGtpa29uYWkuaG9ra2FpZG98a2ltb2JldHN1Lmhva2thaWRvfGtpdGFoaXJvc2hpbWEuaG9ra2FpZG98a2l0YW1pLmhva2thaWRvfGtpeW9zYXRvLmhva2thaWRvfGtvc2hpbWl6dS5ob2trYWlkb3xrdW5uZXBwdS5ob2trYWlkb3xrdXJpeWFtYS5ob2trYWlkb3xrdXJvbWF0c3VuYWkuaG9ra2FpZG98a3VzaGlyby5ob2trYWlkb3xrdXRjaGFuLmhva2thaWRvfGt5b3dhLmhva2thaWRvfG1hc2hpa2UuaG9ra2FpZG98bWF0c3VtYWUuaG9ra2FpZG98bWlrYXNhLmhva2thaWRvfG1pbmFtaWZ1cmFuby5ob2trYWlkb3xtb21iZXRzdS5ob2trYWlkb3xtb3NldXNoaS5ob2trYWlkb3xtdWthd2EuaG9ra2FpZG98bXVyb3Jhbi5ob2trYWlkb3xuYWllLmhva2thaWRvfG5ha2FnYXdhLmhva2thaWRvfG5ha2FzYXRzdW5haS5ob2trYWlkb3xuYWthdG9tYmV0c3UuaG9ra2FpZG98bmFuYWUuaG9ra2FpZG98bmFucG9yby5ob2trYWlkb3xuYXlvcm8uaG9ra2FpZG98bmVtdXJvLmhva2thaWRvfG5paWthcHB1Lmhva2thaWRvfG5pa2kuaG9ra2FpZG98bmlzaGlva29wcGUuaG9ra2FpZG98bm9ib3JpYmV0c3UuaG9ra2FpZG98bnVtYXRhLmhva2thaWRvfG9iaWhpcm8uaG9ra2FpZG98b2JpcmEuaG9ra2FpZG98b2tldG8uaG9ra2FpZG98b2tvcHBlLmhva2thaWRvfG90YXJ1Lmhva2thaWRvfG90b2JlLmhva2thaWRvfG90b2Z1a2UuaG9ra2FpZG98b3RvaW5lcHB1Lmhva2thaWRvfG91bXUuaG9ra2FpZG98b3pvcmEuaG9ra2FpZG98cGlwcHUuaG9ra2FpZG98cmFua29zaGkuaG9ra2FpZG98cmVidW4uaG9ra2FpZG98cmlrdWJldHN1Lmhva2thaWRvfHJpc2hpcmkuaG9ra2FpZG98cmlzaGlyaWZ1amkuaG9ra2FpZG98c2Fyb21hLmhva2thaWRvfHNhcnVmdXRzdS5ob2trYWlkb3xzaGFrb3Rhbi5ob2trYWlkb3xzaGFyaS5ob2trYWlkb3xzaGliZWNoYS5ob2trYWlkb3xzaGliZXRzdS5ob2trYWlkb3xzaGlrYWJlLmhva2thaWRvfHNoaWthb2kuaG9ra2FpZG98c2hpbWFtYWtpLmhva2thaWRvfHNoaW1penUuaG9ra2FpZG98c2hpbW9rYXdhLmhva2thaWRvfHNoaW5zaGlub3RzdS5ob2trYWlkb3xzaGludG9rdS5ob2trYWlkb3xzaGlyYW51a2EuaG9ra2FpZG98c2hpcmFvaS5ob2trYWlkb3xzaGlyaXVjaGkuaG9ra2FpZG98c29iZXRzdS5ob2trYWlkb3xzdW5hZ2F3YS5ob2trYWlkb3x0YWlraS5ob2trYWlkb3x0YWthc3UuaG9ra2FpZG98dGFraWthd2EuaG9ra2FpZG98dGFraW5vdWUuaG9ra2FpZG98dGVzaGlrYWdhLmhva2thaWRvfHRvYmV0c3UuaG9ra2FpZG98dG9obWEuaG9ra2FpZG98dG9tYWtvbWFpLmhva2thaWRvfHRvbWFyaS5ob2trYWlkb3x0b3lhLmhva2thaWRvfHRveWFrby5ob2trYWlkb3x0b3lvdG9taS5ob2trYWlkb3x0b3lvdXJhLmhva2thaWRvfHRzdWJldHN1Lmhva2thaWRvfHRzdWtpZ2F0YS5ob2trYWlkb3x1cmFrYXdhLmhva2thaWRvfHVyYXVzdS5ob2trYWlkb3x1cnl1Lmhva2thaWRvfHV0YXNoaW5haS5ob2trYWlkb3x3YWtrYW5haS5ob2trYWlkb3x3YXNzYW11Lmhva2thaWRvfHlha3Vtby5ob2trYWlkb3x5b2ljaGkuaG9ra2FpZG98YWlvaS5oeW9nb3xha2FzaGkuaHlvZ298YWtvLmh5b2dvfGFtYWdhc2FraS5oeW9nb3xhb2dha2kuaHlvZ298YXNhZ28uaHlvZ298YXNoaXlhLmh5b2dvfGF3YWppLmh5b2dvfGZ1a3VzYWtpLmh5b2dvfGdvc2hpa2kuaHlvZ298aGFyaW1hLmh5b2dvfGhpbWVqaS5oeW9nb3xpY2hpa2F3YS5oeW9nb3xpbmFnYXdhLmh5b2dvfGl0YW1pLmh5b2dvfGtha29nYXdhLmh5b2dvfGthbWlnb3JpLmh5b2dvfGthbWlrYXdhLmh5b2dvfGthc2FpLmh5b2dvfGthc3VnYS5oeW9nb3xrYXdhbmlzaGkuaHlvZ298bWlraS5oeW9nb3xtaW5hbWlhd2FqaS5oeW9nb3xuaXNoaW5vbWl5YS5oeW9nb3xuaXNoaXdha2kuaHlvZ298b25vLmh5b2dvfHNhbmRhLmh5b2dvfHNhbm5hbi5oeW9nb3xzYXNheWFtYS5oeW9nb3xzYXlvLmh5b2dvfHNoaW5ndS5oeW9nb3xzaGlub25zZW4uaHlvZ298c2hpc28uaHlvZ298c3Vtb3RvLmh5b2dvfHRhaXNoaS5oeW9nb3x0YWthLmh5b2dvfHRha2FyYXp1a2EuaHlvZ298dGFrYXNhZ28uaHlvZ298dGFraW5vLmh5b2dvfHRhbWJhLmh5b2dvfHRhdHN1bm8uaHlvZ298dG95b29rYS5oeW9nb3x5YWJ1Lmh5b2dvfHlhc2hpcm8uaHlvZ298eW9rYS5oeW9nb3x5b2thd2EuaHlvZ298YW1pLmliYXJha2l8YXNhaGkuaWJhcmFraXxiYW5kby5pYmFyYWtpfGNoaWt1c2VpLmliYXJha2l8ZGFpZ28uaWJhcmFraXxmdWppc2hpcm8uaWJhcmFraXxoaXRhY2hpLmliYXJha2l8aGl0YWNoaW5ha2EuaWJhcmFraXxoaXRhY2hpb21peWEuaWJhcmFraXxoaXRhY2hpb3RhLmliYXJha2l8aWJhcmFraS5pYmFyYWtpfGluYS5pYmFyYWtpfGluYXNoaWtpLmliYXJha2l8aXRha28uaWJhcmFraXxpd2FtYS5pYmFyYWtpfGpvc28uaWJhcmFraXxrYW1pc3UuaWJhcmFraXxrYXNhbWEuaWJhcmFraXxrYXNoaW1hLmliYXJha2l8a2FzdW1pZ2F1cmEuaWJhcmFraXxrb2dhLmliYXJha2l8bWloby5pYmFyYWtpfG1pdG8uaWJhcmFraXxtb3JpeWEuaWJhcmFraXxuYWthLmliYXJha2l8bmFtZWdhdGEuaWJhcmFraXxvYXJhaS5pYmFyYWtpfG9nYXdhLmliYXJha2l8b21pdGFtYS5pYmFyYWtpfHJ5dWdhc2FraS5pYmFyYWtpfHNha2FpLmliYXJha2l8c2FrdXJhZ2F3YS5pYmFyYWtpfHNoaW1vZGF0ZS5pYmFyYWtpfHNoaW1vdHN1bWEuaWJhcmFraXxzaGlyb3NhdG8uaWJhcmFraXxzb3dhLmliYXJha2l8c3VpZnUuaWJhcmFraXx0YWthaGFnaS5pYmFyYWtpfHRhbWF0c3VrdXJpLmliYXJha2l8dG9rYWkuaWJhcmFraXx0b21vYmUuaWJhcmFraXx0b25lLmliYXJha2l8dG9yaWRlLmliYXJha2l8dHN1Y2hpdXJhLmliYXJha2l8dHN1a3ViYS5pYmFyYWtpfHVjaGloYXJhLmliYXJha2l8dXNoaWt1LmliYXJha2l8eWFjaGl5by5pYmFyYWtpfHlhbWFnYXRhLmliYXJha2l8eWF3YXJhLmliYXJha2l8eXVraS5pYmFyYWtpfGFuYW1penUuaXNoaWthd2F8aGFrdWkuaXNoaWthd2F8aGFrdXNhbi5pc2hpa2F3YXxrYWdhLmlzaGlrYXdhfGthaG9rdS5pc2hpa2F3YXxrYW5hemF3YS5pc2hpa2F3YXxrYXdha2l0YS5pc2hpa2F3YXxrb21hdHN1LmlzaGlrYXdhfG5ha2Fub3RvLmlzaGlrYXdhfG5hbmFvLmlzaGlrYXdhfG5vbWkuaXNoaWthd2F8bm9ub2ljaGkuaXNoaWthd2F8bm90by5pc2hpa2F3YXxzaGlrYS5pc2hpa2F3YXxzdXp1LmlzaGlrYXdhfHRzdWJhdGEuaXNoaWthd2F8dHN1cnVnaS5pc2hpa2F3YXx1Y2hpbmFkYS5pc2hpa2F3YXx3YWppbWEuaXNoaWthd2F8ZnVkYWkuaXdhdGV8ZnVqaXNhd2EuaXdhdGV8aGFuYW1ha2kuaXdhdGV8aGlyYWl6dW1pLml3YXRlfGhpcm9uby5pd2F0ZXxpY2hpbm9oZS5pd2F0ZXxpY2hpbm9zZWtpLml3YXRlfGl3YWl6dW1pLml3YXRlfGl3YXRlLml3YXRlfGpvYm9qaS5pd2F0ZXxrYW1haXNoaS5pd2F0ZXxrYW5lZ2FzYWtpLml3YXRlfGthcnVtYWkuaXdhdGV8a2F3YWkuaXdhdGV8a2l0YWthbWkuaXdhdGV8a3VqaS5pd2F0ZXxrdW5vaGUuaXdhdGV8a3V6dW1ha2kuaXdhdGV8bWl5YWtvLml3YXRlfG1penVzYXdhLml3YXRlfG1vcmlva2EuaXdhdGV8bmlub2hlLml3YXRlfG5vZGEuaXdhdGV8b2Z1bmF0by5pd2F0ZXxvc2h1Lml3YXRlfG90c3VjaGkuaXdhdGV8cmlrdXplbnRha2F0YS5pd2F0ZXxzaGl3YS5pd2F0ZXxzaGl6dWt1aXNoaS5pd2F0ZXxzdW1pdGEuaXdhdGV8dGFub2hhdGEuaXdhdGV8dG9uby5pd2F0ZXx5YWhhYmEuaXdhdGV8eWFtYWRhLml3YXRlfGF5YWdhd2Eua2FnYXdhfGhpZ2FzaGlrYWdhd2Eua2FnYXdhfGthbm9uamkua2FnYXdhfGtvdG9oaXJhLmthZ2F3YXxtYW5uby5rYWdhd2F8bWFydWdhbWUua2FnYXdhfG1pdG95by5rYWdhd2F8bmFvc2hpbWEua2FnYXdhfHNhbnVraS5rYWdhd2F8dGFkb3RzdS5rYWdhd2F8dGFrYW1hdHN1LmthZ2F3YXx0b25vc2hvLmthZ2F3YXx1Y2hpbm9taS5rYWdhd2F8dXRhenUua2FnYXdhfHplbnRzdWppLmthZ2F3YXxha3VuZS5rYWdvc2hpbWF8YW1hbWkua2Fnb3NoaW1hfGhpb2tpLmthZ29zaGltYXxpc2Eua2Fnb3NoaW1hfGlzZW4ua2Fnb3NoaW1hfGl6dW1pLmthZ29zaGltYXxrYWdvc2hpbWEua2Fnb3NoaW1hfGthbm95YS5rYWdvc2hpbWF8a2F3YW5hYmUua2Fnb3NoaW1hfGtpbmtvLmthZ29zaGltYXxrb3V5YW1hLmthZ29zaGltYXxtYWt1cmF6YWtpLmthZ29zaGltYXxtYXRzdW1vdG8ua2Fnb3NoaW1hfG1pbmFtaXRhbmUua2Fnb3NoaW1hfG5ha2F0YW5lLmthZ29zaGltYXxuaXNoaW5vb21vdGUua2Fnb3NoaW1hfHNhdHN1bWFzZW5kYWkua2Fnb3NoaW1hfHNvby5rYWdvc2hpbWF8dGFydW1penUua2Fnb3NoaW1hfHl1c3VpLmthZ29zaGltYXxhaWthd2Eua2FuYWdhd2F8YXRzdWdpLmthbmFnYXdhfGF5YXNlLmthbmFnYXdhfGNoaWdhc2FraS5rYW5hZ2F3YXxlYmluYS5rYW5hZ2F3YXxmdWppc2F3YS5rYW5hZ2F3YXxoYWRhbm8ua2FuYWdhd2F8aGFrb25lLmthbmFnYXdhfGhpcmF0c3VrYS5rYW5hZ2F3YXxpc2VoYXJhLmthbmFnYXdhfGthaXNlaS5rYW5hZ2F3YXxrYW1ha3VyYS5rYW5hZ2F3YXxraXlva2F3YS5rYW5hZ2F3YXxtYXRzdWRhLmthbmFnYXdhfG1pbmFtaWFzaGlnYXJhLmthbmFnYXdhfG1pdXJhLmthbmFnYXdhfG5ha2FpLmthbmFnYXdhfG5pbm9taXlhLmthbmFnYXdhfG9kYXdhcmEua2FuYWdhd2F8b2kua2FuYWdhd2F8b2lzby5rYW5hZ2F3YXxzYWdhbWloYXJhLmthbmFnYXdhfHNhbXVrYXdhLmthbmFnYXdhfHRzdWt1aS5rYW5hZ2F3YXx5YW1ha2l0YS5rYW5hZ2F3YXx5YW1hdG8ua2FuYWdhd2F8eW9rb3N1a2Eua2FuYWdhd2F8eXVnYXdhcmEua2FuYWdhd2F8emFtYS5rYW5hZ2F3YXx6dXNoaS5rYW5hZ2F3YXxha2kua29jaGl8Z2Vpc2VpLmtvY2hpfGhpZGFrYS5rb2NoaXxoaWdhc2hpdHN1bm8ua29jaGl8aW5vLmtvY2hpfGthZ2FtaS5rb2NoaXxrYW1pLmtvY2hpfGtpdGFnYXdhLmtvY2hpfGtvY2hpLmtvY2hpfG1paGFyYS5rb2NoaXxtb3RveWFtYS5rb2NoaXxtdXJvdG8ua29jaGl8bmFoYXJpLmtvY2hpfG5ha2FtdXJhLmtvY2hpfG5hbmtva3Uua29jaGl8bmlzaGl0b3NhLmtvY2hpfG5peW9kb2dhd2Eua29jaGl8b2NoaS5rb2NoaXxva2F3YS5rb2NoaXxvdG95by5rb2NoaXxvdHN1a2kua29jaGl8c2FrYXdhLmtvY2hpfHN1a3Vtby5rb2NoaXxzdXNha2kua29jaGl8dG9zYS5rb2NoaXx0b3Nhc2hpbWl6dS5rb2NoaXx0b3lvLmtvY2hpfHRzdW5vLmtvY2hpfHVtYWppLmtvY2hpfHlhc3VkYS5rb2NoaXx5dXN1aGFyYS5rb2NoaXxhbWFrdXNhLmt1bWFtb3RvfGFyYW8ua3VtYW1vdG98YXNvLmt1bWFtb3RvfGNob3lvLmt1bWFtb3RvfGd5b2t1dG8ua3VtYW1vdG98a2FtaWFtYWt1c2Eua3VtYW1vdG98a2lrdWNoaS5rdW1hbW90b3xrdW1hbW90by5rdW1hbW90b3xtYXNoaWtpLmt1bWFtb3RvfG1pZnVuZS5rdW1hbW90b3xtaW5hbWF0YS5rdW1hbW90b3xtaW5hbWlvZ3VuaS5rdW1hbW90b3xuYWdhc3Uua3VtYW1vdG98bmlzaGloYXJhLmt1bWFtb3RvfG9ndW5pLmt1bWFtb3RvfG96dS5rdW1hbW90b3xzdW1vdG8ua3VtYW1vdG98dGFrYW1vcmkua3VtYW1vdG98dWtpLmt1bWFtb3RvfHV0by5rdW1hbW90b3x5YW1hZ2Eua3VtYW1vdG98eWFtYXRvLmt1bWFtb3RvfHlhdHN1c2hpcm8ua3VtYW1vdG98YXlhYmUua3lvdG98ZnVrdWNoaXlhbWEua3lvdG98aGlnYXNoaXlhbWEua3lvdG98aWRlLmt5b3RvfGluZS5reW90b3xqb3lvLmt5b3RvfGthbWVva2Eua3lvdG98a2Ftby5reW90b3xraXRhLmt5b3RvfGtpenUua3lvdG98a3VtaXlhbWEua3lvdG98a3lvdGFtYmEua3lvdG98a3lvdGFuYWJlLmt5b3RvfGt5b3RhbmdvLmt5b3RvfG1haXp1cnUua3lvdG98bWluYW1pLmt5b3RvfG1pbmFtaXlhbWFzaGlyby5reW90b3xtaXlhenUua3lvdG98bXVrby5reW90b3xuYWdhb2tha3lvLmt5b3RvfG5ha2FneW8ua3lvdG98bmFudGFuLmt5b3RvfG95YW1hemFraS5reW90b3xzYWt5by5reW90b3xzZWlrYS5reW90b3x0YW5hYmUua3lvdG98dWppLmt5b3RvfHVqaXRhd2FyYS5reW90b3x3YXp1a2Eua3lvdG98eWFtYXNoaW5hLmt5b3RvfHlhd2F0YS5reW90b3xhc2FoaS5taWV8aW5hYmUubWllfGlzZS5taWV8a2FtZXlhbWEubWllfGthd2Fnb2UubWllfGtpaG8ubWllfGtpc29zYWtpLm1pZXxraXdhLm1pZXxrb21vbm8ubWllfGt1bWFuby5taWV8a3V3YW5hLm1pZXxtYXRzdXNha2EubWllfG1laXdhLm1pZXxtaWhhbWEubWllfG1pbmFtaWlzZS5taWV8bWlzdWdpLm1pZXxtaXlhbWEubWllfG5hYmFyaS5taWV8c2hpbWEubWllfHN1enVrYS5taWV8dGFkby5taWV8dGFpa2kubWllfHRha2kubWllfHRhbWFraS5taWV8dG9iYS5taWV8dHN1Lm1pZXx1ZG9uby5taWV8dXJlc2hpbm8ubWllfHdhdGFyYWkubWllfHlva2thaWNoaS5taWV8ZnVydWthd2EubWl5YWdpfGhpZ2FzaGltYXRzdXNoaW1hLm1peWFnaXxpc2hpbm9tYWtpLm1peWFnaXxpd2FudW1hLm1peWFnaXxrYWt1ZGEubWl5YWdpfGthbWkubWl5YWdpfGthd2FzYWtpLm1peWFnaXxtYXJ1bW9yaS5taXlhZ2l8bWF0c3VzaGltYS5taXlhZ2l8bWluYW1pc2FucmlrdS5taXlhZ2l8bWlzYXRvLm1peWFnaXxtdXJhdGEubWl5YWdpfG5hdG9yaS5taXlhZ2l8b2dhd2FyYS5taXlhZ2l8b2hpcmEubWl5YWdpfG9uYWdhd2EubWl5YWdpfG9zYWtpLm1peWFnaXxyaWZ1Lm1peWFnaXxzZW1pbmUubWl5YWdpfHNoaWJhdGEubWl5YWdpfHNoaWNoaWthc2h1a3UubWl5YWdpfHNoaWthbWEubWl5YWdpfHNoaW9nYW1hLm1peWFnaXxzaGlyb2lzaGkubWl5YWdpfHRhZ2Fqby5taXlhZ2l8dGFpd2EubWl5YWdpfHRvbWUubWl5YWdpfHRvbWl5YS5taXlhZ2l8d2FrdXlhLm1peWFnaXx3YXRhcmkubWl5YWdpfHlhbWFtb3RvLm1peWFnaXx6YW8ubWl5YWdpfGF5YS5taXlhemFraXxlYmluby5taXlhemFraXxnb2thc2UubWl5YXpha2l8aHl1Z2EubWl5YXpha2l8a2Fkb2dhd2EubWl5YXpha2l8a2F3YW1pbmFtaS5taXlhemFraXxraWpvLm1peWF6YWtpfGtpdGFnYXdhLm1peWF6YWtpfGtpdGFrYXRhLm1peWF6YWtpfGtpdGF1cmEubWl5YXpha2l8a29iYXlhc2hpLm1peWF6YWtpfGt1bml0b21pLm1peWF6YWtpfGt1c2hpbWEubWl5YXpha2l8bWltYXRhLm1peWF6YWtpfG1peWFrb25vam8ubWl5YXpha2l8bWl5YXpha2kubWl5YXpha2l8bW9yb3RzdWthLm1peWF6YWtpfG5pY2hpbmFuLm1peWF6YWtpfG5pc2hpbWVyYS5taXlhemFraXxub2Jlb2thLm1peWF6YWtpfHNhaXRvLm1peWF6YWtpfHNoaWliYS5taXlhemFraXxzaGludG9taS5taXlhemFraXx0YWthaGFydS5taXlhemFraXx0YWthbmFiZS5taXlhemFraXx0YWthemFraS5taXlhemFraXx0c3Vuby5taXlhemFraXxhY2hpLm5hZ2Fub3xhZ2VtYXRzdS5uYWdhbm98YW5hbi5uYWdhbm98YW9raS5uYWdhbm98YXNhaGkubmFnYW5vfGF6dW1pbm8ubmFnYW5vfGNoaWt1aG9rdS5uYWdhbm98Y2hpa3VtYS5uYWdhbm98Y2hpbm8ubmFnYW5vfGZ1amltaS5uYWdhbm98aGFrdWJhLm5hZ2Fub3xoYXJhLm5hZ2Fub3xoaXJheWEubmFnYW5vfGlpZGEubmFnYW5vfGlpamltYS5uYWdhbm98aWl5YW1hLm5hZ2Fub3xpaXp1bmEubmFnYW5vfGlrZWRhLm5hZ2Fub3xpa3VzYWthLm5hZ2Fub3xpbmEubmFnYW5vfGthcnVpemF3YS5uYWdhbm98a2F3YWthbWkubmFnYW5vfGtpc28ubmFnYW5vfGtpc29mdWt1c2hpbWEubmFnYW5vfGtpdGFhaWtpLm5hZ2Fub3xrb21hZ2FuZS5uYWdhbm98a29tb3JvLm5hZ2Fub3xtYXRzdWthd2EubmFnYW5vfG1hdHN1bW90by5uYWdhbm98bWlhc2EubmFnYW5vfG1pbmFtaWFpa2kubmFnYW5vfG1pbmFtaW1ha2kubmFnYW5vfG1pbmFtaW1pbm93YS5uYWdhbm98bWlub3dhLm5hZ2Fub3xtaXlhZGEubmFnYW5vfG1peW90YS5uYWdhbm98bW9jaGl6dWtpLm5hZ2Fub3xuYWdhbm8ubmFnYW5vfG5hZ2F3YS5uYWdhbm98bmFnaXNvLm5hZ2Fub3xuYWthZ2F3YS5uYWdhbm98bmFrYW5vLm5hZ2Fub3xub3phd2FvbnNlbi5uYWdhbm98b2J1c2UubmFnYW5vfG9nYXdhLm5hZ2Fub3xva2F5YS5uYWdhbm98b21hY2hpLm5hZ2Fub3xvbWkubmFnYW5vfG9va3V3YS5uYWdhbm98b29zaGlrYS5uYWdhbm98b3Rha2kubmFnYW5vfG90YXJpLm5hZ2Fub3xzYWthZS5uYWdhbm98c2FrYWtpLm5hZ2Fub3xzYWt1Lm5hZ2Fub3xzYWt1aG8ubmFnYW5vfHNoaW1vc3V3YS5uYWdhbm98c2hpbmFub21hY2hpLm5hZ2Fub3xzaGlvamlyaS5uYWdhbm98c3V3YS5uYWdhbm98c3V6YWthLm5hZ2Fub3x0YWthZ2kubmFnYW5vfHRha2Ftb3JpLm5hZ2Fub3x0YWtheWFtYS5uYWdhbm98dGF0ZXNoaW5hLm5hZ2Fub3x0YXRzdW5vLm5hZ2Fub3x0b2dha3VzaGkubmFnYW5vfHRvZ3VyYS5uYWdhbm98dG9taS5uYWdhbm98dWVkYS5uYWdhbm98d2FkYS5uYWdhbm98eWFtYWdhdGEubmFnYW5vfHlhbWFub3VjaGkubmFnYW5vfHlhc2FrYS5uYWdhbm98eWFzdW9rYS5uYWdhbm98Y2hpaml3YS5uYWdhc2FraXxmdXRzdS5uYWdhc2FraXxnb3RvLm5hZ2FzYWtpfGhhc2FtaS5uYWdhc2FraXxoaXJhZG8ubmFnYXNha2l8aWtpLm5hZ2FzYWtpfGlzYWhheWEubmFnYXNha2l8a2F3YXRhbmEubmFnYXNha2l8a3VjaGlub3RzdS5uYWdhc2FraXxtYXRzdXVyYS5uYWdhc2FraXxuYWdhc2FraS5uYWdhc2FraXxvYmFtYS5uYWdhc2FraXxvbXVyYS5uYWdhc2FraXxvc2V0by5uYWdhc2FraXxzYWlrYWkubmFnYXNha2l8c2FzZWJvLm5hZ2FzYWtpfHNlaWhpLm5hZ2FzYWtpfHNoaW1hYmFyYS5uYWdhc2FraXxzaGlua2FtaWdvdG8ubmFnYXNha2l8dG9naXRzdS5uYWdhc2FraXx0c3VzaGltYS5uYWdhc2FraXx1bnplbi5uYWdhc2FraXxhbmRvLm5hcmF8Z29zZS5uYXJhfGhlZ3VyaS5uYXJhfGhpZ2FzaGl5b3NoaW5vLm5hcmF8aWthcnVnYS5uYXJhfGlrb21hLm5hcmF8a2FtaWtpdGF5YW1hLm5hcmF8a2FubWFraS5uYXJhfGthc2hpYmEubmFyYXxrYXNoaWhhcmEubmFyYXxrYXRzdXJhZ2kubmFyYXxrYXdhaS5uYXJhfGthd2FrYW1pLm5hcmF8a2F3YW5pc2hpLm5hcmF8a29yeW8ubmFyYXxrdXJvdGFraS5uYXJhfG1pdHN1ZS5uYXJhfG1peWFrZS5uYXJhfG5hcmEubmFyYXxub3NlZ2F3YS5uYXJhfG9qaS5uYXJhfG91ZGEubmFyYXxveW9kby5uYXJhfHNha3VyYWkubmFyYXxzYW5nby5uYXJhfHNoaW1vaWNoaS5uYXJhfHNoaW1va2l0YXlhbWEubmFyYXxzaGluam8ubmFyYXxzb25pLm5hcmF8dGFrYXRvcmkubmFyYXx0YXdhcmFtb3RvLm5hcmF8dGVua2F3YS5uYXJhfHRlbnJpLm5hcmF8dWRhLm5hcmF8eWFtYXRva29yaXlhbWEubmFyYXx5YW1hdG90YWthZGEubmFyYXx5YW1hem9lLm5hcmF8eW9zaGluby5uYXJhfGFnYS5uaWlnYXRhfGFnYW5vLm5paWdhdGF8Z29zZW4ubmlpZ2F0YXxpdG9pZ2F3YS5uaWlnYXRhfGl6dW1vemFraS5uaWlnYXRhfGpvZXRzdS5uaWlnYXRhfGthbW8ubmlpZ2F0YXxrYXJpd2EubmlpZ2F0YXxrYXNoaXdhemFraS5uaWlnYXRhfG1pbmFtaXVvbnVtYS5uaWlnYXRhfG1pdHN1a2UubmlpZ2F0YXxtdWlrYS5uaWlnYXRhfG11cmFrYW1pLm5paWdhdGF8bXlva28ubmlpZ2F0YXxuYWdhb2thLm5paWdhdGF8bmlpZ2F0YS5uaWlnYXRhfG9qaXlhLm5paWdhdGF8b21pLm5paWdhdGF8c2Fkby5uaWlnYXRhfHNhbmpvLm5paWdhdGF8c2Vpcm8ubmlpZ2F0YXxzZWlyb3UubmlpZ2F0YXxzZWtpa2F3YS5uaWlnYXRhfHNoaWJhdGEubmlpZ2F0YXx0YWdhbWkubmlpZ2F0YXx0YWluYWkubmlpZ2F0YXx0b2NoaW8ubmlpZ2F0YXx0b2thbWFjaGkubmlpZ2F0YXx0c3ViYW1lLm5paWdhdGF8dHN1bmFuLm5paWdhdGF8dW9udW1hLm5paWdhdGF8eWFoaWtvLm5paWdhdGF8eW9pdGEubmlpZ2F0YXx5dXphd2EubmlpZ2F0YXxiZXBwdS5vaXRhfGJ1bmdvb25vLm9pdGF8YnVuZ290YWthZGEub2l0YXxoYXNhbWEub2l0YXxoaWppLm9pdGF8aGltZXNoaW1hLm9pdGF8aGl0YS5vaXRhfGthbWl0c3VlLm9pdGF8a29rb25vZS5vaXRhfGt1anUub2l0YXxrdW5pc2FraS5vaXRhfGt1c3Uub2l0YXxvaXRhLm9pdGF8c2Fpa2kub2l0YXx0YWtldGEub2l0YXx0c3VrdW1pLm9pdGF8dXNhLm9pdGF8dXN1a2kub2l0YXx5dWZ1Lm9pdGF8YWthaXdhLm9rYXlhbWF8YXNha3VjaGkub2theWFtYXxiaXplbi5va2F5YW1hfGhheWFzaGltYS5va2F5YW1hfGliYXJhLm9rYXlhbWF8a2FnYW1pbm8ub2theWFtYXxrYXNhb2thLm9rYXlhbWF8a2liaWNodW8ub2theWFtYXxrdW1lbmFuLm9rYXlhbWF8a3VyYXNoaWtpLm9rYXlhbWF8bWFuaXdhLm9rYXlhbWF8bWlzYWtpLm9rYXlhbWF8bmFnaS5va2F5YW1hfG5paW1pLm9rYXlhbWF8bmlzaGlhd2FrdXJhLm9rYXlhbWF8b2theWFtYS5va2F5YW1hfHNhdG9zaG8ub2theWFtYXxzZXRvdWNoaS5va2F5YW1hfHNoaW5qby5va2F5YW1hfHNob28ub2theWFtYXxzb2phLm9rYXlhbWF8dGFrYWhhc2hpLm9rYXlhbWF8dGFtYW5vLm9rYXlhbWF8dHN1eWFtYS5va2F5YW1hfHdha2Uub2theWFtYXx5YWthZ2Uub2theWFtYXxhZ3VuaS5va2luYXdhfGdpbm93YW4ub2tpbmF3YXxnaW5vemEub2tpbmF3YXxndXNoaWthbWkub2tpbmF3YXxoYWViYXJ1Lm9raW5hd2F8aGlnYXNoaS5va2luYXdhfGhpcmFyYS5va2luYXdhfGloZXlhLm9raW5hd2F8aXNoaWdha2kub2tpbmF3YXxpc2hpa2F3YS5va2luYXdhfGl0b21hbi5va2luYXdhfGl6ZW5hLm9raW5hd2F8a2FkZW5hLm9raW5hd2F8a2luLm9raW5hd2F8a2l0YWRhaXRvLm9raW5hd2F8a2l0YW5ha2FndXN1a3Uub2tpbmF3YXxrdW1lamltYS5va2luYXdhfGt1bmlnYW1pLm9raW5hd2F8bWluYW1pZGFpdG8ub2tpbmF3YXxtb3RvYnUub2tpbmF3YXxuYWdvLm9raW5hd2F8bmFoYS5va2luYXdhfG5ha2FndXN1a3Uub2tpbmF3YXxuYWtpamluLm9raW5hd2F8bmFuam8ub2tpbmF3YXxuaXNoaWhhcmEub2tpbmF3YXxvZ2ltaS5va2luYXdhfG9raW5hd2Eub2tpbmF3YXxvbm5hLm9raW5hd2F8c2hpbW9qaS5va2luYXdhfHRha2V0b21pLm9raW5hd2F8dGFyYW1hLm9raW5hd2F8dG9rYXNoaWtpLm9raW5hd2F8dG9taWd1c3VrdS5va2luYXdhfHRvbmFraS5va2luYXdhfHVyYXNvZS5va2luYXdhfHVydW1hLm9raW5hd2F8eWFlc2Uub2tpbmF3YXx5b21pdGFuLm9raW5hd2F8eW9uYWJhcnUub2tpbmF3YXx5b25hZ3VuaS5va2luYXdhfHphbWFtaS5va2luYXdhfGFiZW5vLm9zYWthfGNoaWhheWFha2FzYWthLm9zYWthfGNodW8ub3Nha2F8ZGFpdG8ub3Nha2F8ZnVqaWlkZXJhLm9zYWthfGhhYmlraW5vLm9zYWthfGhhbm5hbi5vc2FrYXxoaWdhc2hpb3Nha2Eub3Nha2F8aGlnYXNoaXN1bWl5b3NoaS5vc2FrYXxoaWdhc2hpeW9kb2dhd2Eub3Nha2F8aGlyYWthdGEub3Nha2F8aWJhcmFraS5vc2FrYXxpa2VkYS5vc2FrYXxpenVtaS5vc2FrYXxpenVtaW90c3Uub3Nha2F8aXp1bWlzYW5vLm9zYWthfGthZG9tYS5vc2FrYXxrYWl6dWthLm9zYWthfGthbmFuLm9zYWthfGthc2hpd2FyYS5vc2FrYXxrYXRhbm8ub3Nha2F8a2F3YWNoaW5hZ2Fuby5vc2FrYXxraXNoaXdhZGEub3Nha2F8a2l0YS5vc2FrYXxrdW1hdG9yaS5vc2FrYXxtYXRzdWJhcmEub3Nha2F8bWluYXRvLm9zYWthfG1pbm9oLm9zYWthfG1pc2FraS5vc2FrYXxtb3JpZ3VjaGkub3Nha2F8bmV5YWdhd2Eub3Nha2F8bmlzaGkub3Nha2F8bm9zZS5vc2FrYXxvc2FrYXNheWFtYS5vc2FrYXxzYWthaS5vc2FrYXxzYXlhbWEub3Nha2F8c2VubmFuLm9zYWthfHNldHRzdS5vc2FrYXxzaGlqb25hd2F0ZS5vc2FrYXxzaGltYW1vdG8ub3Nha2F8c3VpdGEub3Nha2F8dGFkYW9rYS5vc2FrYXx0YWlzaGkub3Nha2F8dGFqaXJpLm9zYWthfHRha2Fpc2hpLm9zYWthfHRha2F0c3VraS5vc2FrYXx0b25kYWJheWFzaGkub3Nha2F8dG95b25ha2Eub3Nha2F8dG95b25vLm9zYWthfHlhby5vc2FrYXxhcmlha2Uuc2FnYXxhcml0YS5zYWdhfGZ1a3Vkb21pLnNhZ2F8Z2Vua2FpLnNhZ2F8aGFtYXRhbWEuc2FnYXxoaXplbi5zYWdhfGltYXJpLnNhZ2F8a2FtaW1pbmUuc2FnYXxrYW56YWtpLnNhZ2F8a2FyYXRzdS5zYWdhfGthc2hpbWEuc2FnYXxraXRhZ2F0YS5zYWdhfGtpdGFoYXRhLnNhZ2F8a2l5YW1hLnNhZ2F8a291aG9rdS5zYWdhfGt5dXJhZ2kuc2FnYXxuaXNoaWFyaXRhLnNhZ2F8b2dpLnNhZ2F8b21hY2hpLnNhZ2F8b3VjaGkuc2FnYXxzYWdhLnNhZ2F8c2hpcm9pc2hpLnNhZ2F8dGFrdS5zYWdhfHRhcmEuc2FnYXx0b3N1LnNhZ2F8eW9zaGlub2dhcmkuc2FnYXxhcmFrYXdhLnNhaXRhbWF8YXNha2Euc2FpdGFtYXxjaGljaGlidS5zYWl0YW1hfGZ1amltaS5zYWl0YW1hfGZ1amltaW5vLnNhaXRhbWF8ZnVrYXlhLnNhaXRhbWF8aGFubm8uc2FpdGFtYXxoYW55dS5zYWl0YW1hfGhhc3VkYS5zYWl0YW1hfGhhdG9nYXlhLnNhaXRhbWF8aGF0b3lhbWEuc2FpdGFtYXxoaWRha2Euc2FpdGFtYXxoaWdhc2hpY2hpY2hpYnUuc2FpdGFtYXxoaWdhc2hpbWF0c3V5YW1hLnNhaXRhbWF8aG9uam8uc2FpdGFtYXxpbmEuc2FpdGFtYXxpcnVtYS5zYWl0YW1hfGl3YXRzdWtpLnNhaXRhbWF8a2FtaWl6dW1pLnNhaXRhbWF8a2FtaWthd2Euc2FpdGFtYXxrYW1pc2F0by5zYWl0YW1hfGthc3VrYWJlLnNhaXRhbWF8a2F3YWdvZS5zYWl0YW1hfGthd2FndWNoaS5zYWl0YW1hfGthd2FqaW1hLnNhaXRhbWF8a2F6by5zYWl0YW1hfGtpdGFtb3RvLnNhaXRhbWF8a29zaGlnYXlhLnNhaXRhbWF8a291bm9zdS5zYWl0YW1hfGt1a2kuc2FpdGFtYXxrdW1hZ2F5YS5zYWl0YW1hfG1hdHN1YnVzaGkuc2FpdGFtYXxtaW5hbm8uc2FpdGFtYXxtaXNhdG8uc2FpdGFtYXxtaXlhc2hpcm8uc2FpdGFtYXxtaXlvc2hpLnNhaXRhbWF8bW9yb3lhbWEuc2FpdGFtYXxuYWdhdG9yby5zYWl0YW1hfG5hbWVnYXdhLnNhaXRhbWF8bmlpemEuc2FpdGFtYXxvZ2Fuby5zYWl0YW1hfG9nYXdhLnNhaXRhbWF8b2dvc2Uuc2FpdGFtYXxva2VnYXdhLnNhaXRhbWF8b21peWEuc2FpdGFtYXxvdGFraS5zYWl0YW1hfHJhbnphbi5zYWl0YW1hfHJ5b2thbWkuc2FpdGFtYXxzYWl0YW1hLnNhaXRhbWF8c2FrYWRvLnNhaXRhbWF8c2F0dGUuc2FpdGFtYXxzYXlhbWEuc2FpdGFtYXxzaGlraS5zYWl0YW1hfHNoaXJhb2thLnNhaXRhbWF8c29rYS5zYWl0YW1hfHN1Z2l0by5zYWl0YW1hfHRvZGEuc2FpdGFtYXx0b2tpZ2F3YS5zYWl0YW1hfHRva29yb3phd2Euc2FpdGFtYXx0c3VydWdhc2hpbWEuc2FpdGFtYXx1cmF3YS5zYWl0YW1hfHdhcmFiaS5zYWl0YW1hfHlhc2hpby5zYWl0YW1hfHlva296ZS5zYWl0YW1hfHlvbm8uc2FpdGFtYXx5b3JpaS5zYWl0YW1hfHlvc2hpZGEuc2FpdGFtYXx5b3NoaWthd2Euc2FpdGFtYXx5b3NoaW1pLnNhaXRhbWF8YWlzaG8uc2hpZ2F8Z2Ftby5zaGlnYXxoaWdhc2hpb21pLnNoaWdhfGhpa29uZS5zaGlnYXxrb2thLnNoaWdhfGtvbmFuLnNoaWdhfGtvc2VpLnNoaWdhfGtvdG8uc2hpZ2F8a3VzYXRzdS5zaGlnYXxtYWliYXJhLnNoaWdhfG1vcml5YW1hLnNoaWdhfG5hZ2FoYW1hLnNoaWdhfG5pc2hpYXphaS5zaGlnYXxub3RvZ2F3YS5zaGlnYXxvbWloYWNoaW1hbi5zaGlnYXxvdHN1LnNoaWdhfHJpdHRvLnNoaWdhfHJ5dW9oLnNoaWdhfHRha2FzaGltYS5zaGlnYXx0YWthdHN1a2kuc2hpZ2F8dG9yYWhpbWUuc2hpZ2F8dG95b3NhdG8uc2hpZ2F8eWFzdS5zaGlnYXxha2FnaS5zaGltYW5lfGFtYS5zaGltYW5lfGdvdHN1LnNoaW1hbmV8aGFtYWRhLnNoaW1hbmV8aGlnYXNoaWl6dW1vLnNoaW1hbmV8aGlrYXdhLnNoaW1hbmV8aGlraW1pLnNoaW1hbmV8aXp1bW8uc2hpbWFuZXxrYWtpbm9raS5zaGltYW5lfG1hc3VkYS5zaGltYW5lfG1hdHN1ZS5zaGltYW5lfG1pc2F0by5zaGltYW5lfG5pc2hpbm9zaGltYS5zaGltYW5lfG9oZGEuc2hpbWFuZXxva2lub3NoaW1hLnNoaW1hbmV8b2t1aXp1bW8uc2hpbWFuZXxzaGltYW5lLnNoaW1hbmV8dGFtYXl1LnNoaW1hbmV8dHN1d2Fuby5zaGltYW5lfHVubmFuLnNoaW1hbmV8eWFrdW1vLnNoaW1hbmV8eWFzdWdpLnNoaW1hbmV8eWF0c3VrYS5zaGltYW5lfGFyYWkuc2hpenVva2F8YXRhbWkuc2hpenVva2F8ZnVqaS5zaGl6dW9rYXxmdWppZWRhLnNoaXp1b2thfGZ1amlrYXdhLnNoaXp1b2thfGZ1amlub21peWEuc2hpenVva2F8ZnVrdXJvaS5zaGl6dW9rYXxnb3RlbWJhLnNoaXp1b2thfGhhaWJhcmEuc2hpenVva2F8aGFtYW1hdHN1LnNoaXp1b2thfGhpZ2FzaGlpenUuc2hpenVva2F8aXRvLnNoaXp1b2thfGl3YXRhLnNoaXp1b2thfGl6dS5zaGl6dW9rYXxpenVub2t1bmkuc2hpenVva2F8a2FrZWdhd2Euc2hpenVva2F8a2FubmFtaS5zaGl6dW9rYXxrYXdhbmVob24uc2hpenVva2F8a2F3YXp1LnNoaXp1b2thfGtpa3VnYXdhLnNoaXp1b2thfGtvc2FpLnNoaXp1b2thfG1ha2lub2hhcmEuc2hpenVva2F8bWF0c3V6YWtpLnNoaXp1b2thfG1pbmFtaWl6dS5zaGl6dW9rYXxtaXNoaW1hLnNoaXp1b2thfG1vcmltYWNoaS5zaGl6dW9rYXxuaXNoaWl6dS5zaGl6dW9rYXxudW1henUuc2hpenVva2F8b21hZXpha2kuc2hpenVva2F8c2hpbWFkYS5zaGl6dW9rYXxzaGltaXp1LnNoaXp1b2thfHNoaW1vZGEuc2hpenVva2F8c2hpenVva2Euc2hpenVva2F8c3Vzb25vLnNoaXp1b2thfHlhaXp1LnNoaXp1b2thfHlvc2hpZGEuc2hpenVva2F8YXNoaWthZ2EudG9jaGlnaXxiYXRvLnRvY2hpZ2l8aGFnYS50b2NoaWdpfGljaGlrYWkudG9jaGlnaXxpd2FmdW5lLnRvY2hpZ2l8a2FtaW5va2F3YS50b2NoaWdpfGthbnVtYS50b2NoaWdpfGthcmFzdXlhbWEudG9jaGlnaXxrdXJvaXNvLnRvY2hpZ2l8bWFzaGlrby50b2NoaWdpfG1pYnUudG9jaGlnaXxtb2thLnRvY2hpZ2l8bW90ZWdpLnRvY2hpZ2l8bmFzdS50b2NoaWdpfG5hc3VzaGlvYmFyYS50b2NoaWdpfG5pa2tvLnRvY2hpZ2l8bmlzaGlrYXRhLnRvY2hpZ2l8bm9naS50b2NoaWdpfG9oaXJhLnRvY2hpZ2l8b2h0YXdhcmEudG9jaGlnaXxveWFtYS50b2NoaWdpfHNha3VyYS50b2NoaWdpfHNhbm8udG9jaGlnaXxzaGltb3RzdWtlLnRvY2hpZ2l8c2hpb3lhLnRvY2hpZ2l8dGFrYW5lemF3YS50b2NoaWdpfHRvY2hpZ2kudG9jaGlnaXx0c3VnYS50b2NoaWdpfHVqaWllLnRvY2hpZ2l8dXRzdW5vbWl5YS50b2NoaWdpfHlhaXRhLnRvY2hpZ2l8YWl6dW1pLnRva3VzaGltYXxhbmFuLnRva3VzaGltYXxpY2hpYmEudG9rdXNoaW1hfGl0YW5vLnRva3VzaGltYXxrYWluYW4udG9rdXNoaW1hfGtvbWF0c3VzaGltYS50b2t1c2hpbWF8bWF0c3VzaGlnZS50b2t1c2hpbWF8bWltYS50b2t1c2hpbWF8bWluYW1pLnRva3VzaGltYXxtaXlvc2hpLnRva3VzaGltYXxtdWdpLnRva3VzaGltYXxuYWthZ2F3YS50b2t1c2hpbWF8bmFydXRvLnRva3VzaGltYXxzYW5hZ29jaGkudG9rdXNoaW1hfHNoaXNoaWt1aS50b2t1c2hpbWF8dG9rdXNoaW1hLnRva3VzaGltYXx3YWppa2kudG9rdXNoaW1hfGFkYWNoaS50b2t5b3xha2lydW5vLnRva3lvfGFraXNoaW1hLnRva3lvfGFvZ2FzaGltYS50b2t5b3xhcmFrYXdhLnRva3lvfGJ1bmt5by50b2t5b3xjaGl5b2RhLnRva3lvfGNob2Z1LnRva3lvfGNodW8udG9reW98ZWRvZ2F3YS50b2t5b3xmdWNodS50b2t5b3xmdXNzYS50b2t5b3xoYWNoaWpvLnRva3lvfGhhY2hpb2ppLnRva3lvfGhhbXVyYS50b2t5b3xoaWdhc2hpa3VydW1lLnRva3lvfGhpZ2FzaGltdXJheWFtYS50b2t5b3xoaWdhc2hpeWFtYXRvLnRva3lvfGhpbm8udG9reW98aGlub2RlLnRva3lvfGhpbm9oYXJhLnRva3lvfGluYWdpLnRva3lvfGl0YWJhc2hpLnRva3lvfGthdHN1c2hpa2EudG9reW98a2l0YS50b2t5b3xraXlvc2UudG9reW98a29kYWlyYS50b2t5b3xrb2dhbmVpLnRva3lvfGtva3VidW5qaS50b2t5b3xrb21hZS50b2t5b3xrb3RvLnRva3lvfGtvdXp1c2hpbWEudG9reW98a3VuaXRhY2hpLnRva3lvfG1hY2hpZGEudG9reW98bWVndXJvLnRva3lvfG1pbmF0by50b2t5b3xtaXRha2EudG9reW98bWl6dWhvLnRva3lvfG11c2FzaGltdXJheWFtYS50b2t5b3xtdXNhc2hpbm8udG9reW98bmFrYW5vLnRva3lvfG5lcmltYS50b2t5b3xvZ2FzYXdhcmEudG9reW98b2t1dGFtYS50b2t5b3xvbWUudG9reW98b3NoaW1hLnRva3lvfG90YS50b2t5b3xzZXRhZ2F5YS50b2t5b3xzaGlidXlhLnRva3lvfHNoaW5hZ2F3YS50b2t5b3xzaGluanVrdS50b2t5b3xzdWdpbmFtaS50b2t5b3xzdW1pZGEudG9reW98dGFjaGlrYXdhLnRva3lvfHRhaXRvLnRva3lvfHRhbWEudG9reW98dG9zaGltYS50b2t5b3xjaGl6dS50b3R0b3JpfGhpbm8udG90dG9yaXxrYXdhaGFyYS50b3R0b3JpfGtvZ2UudG90dG9yaXxrb3RvdXJhLnRvdHRvcml8bWlzYXNhLnRvdHRvcml8bmFuYnUudG90dG9yaXxuaWNoaW5hbi50b3R0b3JpfHNha2FpbWluYXRvLnRvdHRvcml8dG90dG9yaS50b3R0b3JpfHdha2FzYS50b3R0b3JpfHlhenUudG90dG9yaXx5b25hZ28udG90dG9yaXxhc2FoaS50b3lhbWF8ZnVjaHUudG95YW1hfGZ1a3VtaXRzdS50b3lhbWF8ZnVuYWhhc2hpLnRveWFtYXxoaW1pLnRveWFtYXxpbWl6dS50b3lhbWF8aW5hbWkudG95YW1hfGpvaGFuYS50b3lhbWF8a2FtaWljaGkudG95YW1hfGt1cm9iZS50b3lhbWF8bmFrYW5paWthd2EudG95YW1hfG5hbWVyaWthd2EudG95YW1hfG5hbnRvLnRveWFtYXxueXV6ZW4udG95YW1hfG95YWJlLnRveWFtYXx0YWlyYS50b3lhbWF8dGFrYW9rYS50b3lhbWF8dGF0ZXlhbWEudG95YW1hfHRvZ2EudG95YW1hfHRvbmFtaS50b3lhbWF8dG95YW1hLnRveWFtYXx1bmF6dWtpLnRveWFtYXx1b3p1LnRveWFtYXx5YW1hZGEudG95YW1hfGFyaWRhLndha2F5YW1hfGFyaWRhZ2F3YS53YWtheWFtYXxnb2JvLndha2F5YW1hfGhhc2hpbW90by53YWtheWFtYXxoaWRha2Eud2FrYXlhbWF8aGlyb2dhd2Eud2FrYXlhbWF8aW5hbWkud2FrYXlhbWF8aXdhZGUud2FrYXlhbWF8a2FpbmFuLndha2F5YW1hfGthbWl0b25kYS53YWtheWFtYXxrYXRzdXJhZ2kud2FrYXlhbWF8a2ltaW5vLndha2F5YW1hfGtpbm9rYXdhLndha2F5YW1hfGtpdGF5YW1hLndha2F5YW1hfGtveWEud2FrYXlhbWF8a296YS53YWtheWFtYXxrb3phZ2F3YS53YWtheWFtYXxrdWRveWFtYS53YWtheWFtYXxrdXNoaW1vdG8ud2FrYXlhbWF8bWloYW1hLndha2F5YW1hfG1pc2F0by53YWtheWFtYXxuYWNoaWthdHN1dXJhLndha2F5YW1hfHNoaW5ndS53YWtheWFtYXxzaGlyYWhhbWEud2FrYXlhbWF8dGFpamkud2FrYXlhbWF8dGFuYWJlLndha2F5YW1hfHdha2F5YW1hLndha2F5YW1hfHl1YXNhLndha2F5YW1hfHl1cmEud2FrYXlhbWF8YXNhaGkueWFtYWdhdGF8ZnVuYWdhdGEueWFtYWdhdGF8aGlnYXNoaW5lLnlhbWFnYXRhfGlpZGUueWFtYWdhdGF8a2Fob2t1LnlhbWFnYXRhfGthbWlub3lhbWEueWFtYWdhdGF8a2FuZXlhbWEueWFtYWdhdGF8a2F3YW5pc2hpLnlhbWFnYXRhfG1hbXVyb2dhd2EueWFtYWdhdGF8bWlrYXdhLnlhbWFnYXRhfG11cmF5YW1hLnlhbWFnYXRhfG5hZ2FpLnlhbWFnYXRhfG5ha2F5YW1hLnlhbWFnYXRhfG5hbnlvLnlhbWFnYXRhfG5pc2hpa2F3YS55YW1hZ2F0YXxvYmFuYXphd2EueWFtYWdhdGF8b2UueWFtYWdhdGF8b2d1bmkueWFtYWdhdGF8b2hrdXJhLnlhbWFnYXRhfG9pc2hpZGEueWFtYWdhdGF8c2FnYWUueWFtYWdhdGF8c2FrYXRhLnlhbWFnYXRhfHNha2VnYXdhLnlhbWFnYXRhfHNoaW5qby55YW1hZ2F0YXxzaGlyYXRha2EueWFtYWdhdGF8c2hvbmFpLnlhbWFnYXRhfHRha2FoYXRhLnlhbWFnYXRhfHRlbmRvLnlhbWFnYXRhfHRvemF3YS55YW1hZ2F0YXx0c3VydW9rYS55YW1hZ2F0YXx5YW1hZ2F0YS55YW1hZ2F0YXx5YW1hbm9iZS55YW1hZ2F0YXx5b25lemF3YS55YW1hZ2F0YXx5dXphLnlhbWFnYXRhfGFidS55YW1hZ3VjaGl8aGFnaS55YW1hZ3VjaGl8aGlrYXJpLnlhbWFndWNoaXxob2Z1LnlhbWFndWNoaXxpd2FrdW5pLnlhbWFndWNoaXxrdWRhbWF0c3UueWFtYWd1Y2hpfG1pdG91LnlhbWFndWNoaXxuYWdhdG8ueWFtYWd1Y2hpfG9zaGltYS55YW1hZ3VjaGl8c2hpbW9ub3Nla2kueWFtYWd1Y2hpfHNodW5hbi55YW1hZ3VjaGl8dGFidXNlLnlhbWFndWNoaXx0b2t1eWFtYS55YW1hZ3VjaGl8dG95b3RhLnlhbWFndWNoaXx1YmUueWFtYWd1Y2hpfHl1dS55YW1hZ3VjaGl8Y2h1by55YW1hbmFzaGl8ZG9zaGkueWFtYW5hc2hpfGZ1ZWZ1a2kueWFtYW5hc2hpfGZ1amlrYXdhLnlhbWFuYXNoaXxmdWppa2F3YWd1Y2hpa28ueWFtYW5hc2hpfGZ1aml5b3NoaWRhLnlhbWFuYXNoaXxoYXlha2F3YS55YW1hbmFzaGl8aG9rdXRvLnlhbWFuYXNoaXxpY2hpa2F3YW1pc2F0by55YW1hbmFzaGl8a2FpLnlhbWFuYXNoaXxrb2Z1LnlhbWFuYXNoaXxrb3NodS55YW1hbmFzaGl8a29zdWdlLnlhbWFuYXNoaXxtaW5hbWktYWxwcy55YW1hbmFzaGl8bWlub2J1LnlhbWFuYXNoaXxuYWthbWljaGkueWFtYW5hc2hpfG5hbmJ1LnlhbWFuYXNoaXxuYXJ1c2F3YS55YW1hbmFzaGl8bmlyYXNha2kueWFtYW5hc2hpfG5pc2hpa2F0c3VyYS55YW1hbmFzaGl8b3NoaW5vLnlhbWFuYXNoaXxvdHN1a2kueWFtYW5hc2hpfHNob3dhLnlhbWFuYXNoaXx0YWJheWFtYS55YW1hbmFzaGl8dHN1cnUueWFtYW5hc2hpfHVlbm9oYXJhLnlhbWFuYXNoaXx5YW1hbmFrYWtvLnlhbWFuYXNoaXx5YW1hbmFzaGkueWFtYW5hc2hpfGJsb2dzcG90XCIsXCJrZVwiOlwiKnxibG9nc3BvdC5jb1wiLFwia2dcIjpcIm9yZ3xuZXR8Y29tfGVkdXxnb3Z8bWlsXCIsXCJraFwiOlwiKlwiLFwia2lcIjpcImVkdXxiaXp8bmV0fG9yZ3xnb3Z8aW5mb3xjb21cIixcImttXCI6XCJvcmd8bm9tfGdvdnxwcmR8dG18ZWR1fG1pbHxhc3N8Y29tfGNvb3B8YXNzb3xwcmVzc2V8bWVkZWNpbnxub3RhaXJlc3xwaGFybWFjaWVuc3x2ZXRlcmluYWlyZXxnb3V2XCIsXCJrblwiOlwibmV0fG9yZ3xlZHV8Z292XCIsXCJrcFwiOlwiY29tfGVkdXxnb3Z8b3JnfHJlcHx0cmFcIixcImtyXCI6XCJhY3xjb3xlc3xnb3xoc3xrZ3xtaWx8bXN8bmV8b3J8cGV8cmV8c2N8YnVzYW58Y2h1bmdidWt8Y2h1bmduYW18ZGFlZ3V8ZGFlamVvbnxnYW5nd29ufGd3YW5nanV8Z3llb25nYnVrfGd5ZW9uZ2dpfGd5ZW9uZ25hbXxpbmNoZW9ufGplanV8amVvbmJ1a3xqZW9ubmFtfHNlb3VsfHVsc2FufGJsb2dzcG90XCIsXCJrd1wiOlwiKlwiLFwia3lcIjpcImVkdXxnb3Z8Y29tfG9yZ3xuZXRcIixcImt6XCI6XCJvcmd8ZWR1fG5ldHxnb3Z8bWlsfGNvbXxueW1cIixcImxhXCI6XCJpbnR8bmV0fGluZm98ZWR1fGdvdnxwZXJ8Y29tfG9yZ3xibnJ8Y3xueW1cIixcImxiXCI6XCJjb218ZWR1fGdvdnxuZXR8b3JnXCIsXCJsY1wiOlwiY29tfG5ldHxjb3xvcmd8ZWR1fGdvdnxveVwiLFwibGlcIjpcImJsb2dzcG90fG5vbXxueW1cIixcImxrXCI6XCJnb3Z8c2NofG5ldHxpbnR8Y29tfG9yZ3xlZHV8bmdvfHNvY3x3ZWJ8bHRkfGFzc258Z3JwfGhvdGVsfGFjXCIsXCJsclwiOlwiY29tfGVkdXxnb3Z8b3JnfG5ldFwiLFwibHNcIjpcImNvfG9yZ1wiLFwibHRcIjpcImdvdnxibG9nc3BvdHxueW1cIixcImx1XCI6XCJibG9nc3BvdHxueW1cIixcImx2XCI6XCJjb218ZWR1fGdvdnxvcmd8bWlsfGlkfG5ldHxhc258Y29uZlwiLFwibHlcIjpcImNvbXxuZXR8Z292fHBsY3xlZHV8c2NofG1lZHxvcmd8aWRcIixcIm1hXCI6XCJjb3xuZXR8Z292fG9yZ3xhY3xwcmVzc1wiLFwibWNcIjpcInRtfGFzc29cIixcIm1kXCI6XCJibG9nc3BvdFwiLFwibWVcIjpcImNvfG5ldHxvcmd8ZWR1fGFjfGdvdnxpdHN8cHJpdnxjNjZ8ZGFwbGllfGxvY2FsaG9zdC5kYXBsaWV8ZmlsZWdlYXJ8YnJhc2lsaWF8ZGRuc3xkbnNmb3J8aG9wdG98bG9naW50b3xub2lwfHdlYmhvcHxueW18ZGlza3N0YXRpb258ZHNjbG91ZHxpMjM0fG15ZHN8c3lub2xvZ3l8d2VkZXBsb3l8eW9tYm9cIixcIm1nXCI6XCJvcmd8bm9tfGdvdnxwcmR8dG18ZWR1fG1pbHxjb218Y29cIixcIm1oXCI6XCJcIixcIm1pbFwiOlwiXCIsXCJta1wiOlwiY29tfG9yZ3xuZXR8ZWR1fGdvdnxpbmZ8bmFtZXxibG9nc3BvdHxub21cIixcIm1sXCI6XCJjb218ZWR1fGdvdXZ8Z292fG5ldHxvcmd8cHJlc3NlXCIsXCJtbVwiOlwiKlwiLFwibW5cIjpcImdvdnxlZHV8b3JnfG55Y1wiLFwibW9cIjpcImNvbXxuZXR8b3JnfGVkdXxnb3ZcIixcIm1vYmlcIjpcImRzY2xvdWRcIixcIm1wXCI6XCJcIixcIm1xXCI6XCJcIixcIm1yXCI6XCJnb3Z8YmxvZ3Nwb3RcIixcIm1zXCI6XCJjb218ZWR1fGdvdnxuZXR8b3JnXCIsXCJtdFwiOlwiY29tfGVkdXxuZXR8b3JnfGJsb2dzcG90LmNvbVwiLFwibXVcIjpcImNvbXxuZXR8b3JnfGdvdnxhY3xjb3xvclwiLFwibXVzZXVtXCI6XCJhY2FkZW15fGFncmljdWx0dXJlfGFpcnxhaXJndWFyZHxhbGFiYW1hfGFsYXNrYXxhbWJlcnxhbWJ1bGFuY2V8YW1lcmljYW58YW1lcmljYW5hfGFtZXJpY2FuYW50aXF1ZXN8YW1lcmljYW5hcnR8YW1zdGVyZGFtfGFuZHxhbm5lZnJhbmt8YW50aHJvfGFudGhyb3BvbG9neXxhbnRpcXVlc3xhcXVhcml1bXxhcmJvcmV0dW18YXJjaGFlb2xvZ2ljYWx8YXJjaGFlb2xvZ3l8YXJjaGl0ZWN0dXJlfGFydHxhcnRhbmRkZXNpZ258YXJ0Y2VudGVyfGFydGRlY298YXJ0ZWR1Y2F0aW9ufGFydGdhbGxlcnl8YXJ0c3xhcnRzYW5kY3JhZnRzfGFzbWF0YXJ0fGFzc2Fzc2luYXRpb258YXNzaXNpfGFzc29jaWF0aW9ufGFzdHJvbm9teXxhdGxhbnRhfGF1c3RpbnxhdXN0cmFsaWF8YXV0b21vdGl2ZXxhdmlhdGlvbnxheGlzfGJhZGFqb3p8YmFnaGRhZHxiYWhufGJhbGV8YmFsdGltb3JlfGJhcmNlbG9uYXxiYXNlYmFsbHxiYXNlbHxiYXRoc3xiYXVlcm58YmVhdXhhcnRzfGJlZWxkZW5nZWx1aWR8YmVsbGV2dWV8YmVyZ2JhdXxiZXJrZWxleXxiZXJsaW58YmVybnxiaWJsZXxiaWxiYW98YmlsbHxiaXJkYXJ0fGJpcnRocGxhY2V8Ym9ubnxib3N0b258Ym90YW5pY2FsfGJvdGFuaWNhbGdhcmRlbnxib3RhbmljZ2FyZGVufGJvdGFueXxicmFuZHl3aW5ldmFsbGV5fGJyYXNpbHxicmlzdG9sfGJyaXRpc2h8YnJpdGlzaGNvbHVtYmlhfGJyb2FkY2FzdHxicnVuZWx8YnJ1c3NlbHxicnVzc2Vsc3xicnV4ZWxsZXN8YnVpbGRpbmd8YnVyZ2hvZnxidXN8YnVzaGV5fGNhZGFxdWVzfGNhbGlmb3JuaWF8Y2FtYnJpZGdlfGNhbnxjYW5hZGF8Y2FwZWJyZXRvbnxjYXJyaWVyfGNhcnRvb25hcnR8Y2FzYWRlbGFtb25lZGF8Y2FzdGxlfGNhc3RyZXN8Y2VsdGljfGNlbnRlcnxjaGF0dGFub29nYXxjaGVsdGVuaGFtfGNoZXNhcGVha2ViYXl8Y2hpY2Fnb3xjaGlsZHJlbnxjaGlsZHJlbnN8Y2hpbGRyZW5zZ2FyZGVufGNoaXJvcHJhY3RpY3xjaG9jb2xhdGV8Y2hyaXN0aWFuc2J1cmd8Y2luY2lubmF0aXxjaW5lbWF8Y2lyY3VzfGNpdmlsaXNhdGlvbnxjaXZpbGl6YXRpb258Y2l2aWx3YXJ8Y2xpbnRvbnxjbG9ja3xjb2FsfGNvYXN0YWxkZWZlbmNlfGNvZHl8Y29sZHdhcnxjb2xsZWN0aW9ufGNvbG9uaWFsd2lsbGlhbXNidXJnfGNvbG9yYWRvcGxhdGVhdXxjb2x1bWJpYXxjb2x1bWJ1c3xjb21tdW5pY2F0aW9ufGNvbW11bmljYXRpb25zfGNvbW11bml0eXxjb21wdXRlcnxjb21wdXRlcmhpc3Rvcnl8eG4tLWNvbXVuaWNhZXMtdjZhMm98Y29udGVtcG9yYXJ5fGNvbnRlbXBvcmFyeWFydHxjb252ZW50fGNvcGVuaGFnZW58Y29ycG9yYXRpb258eG4tLWNvcnJlaW9zLWUtdGVsZWNvbXVuaWNhZXMtZ2hjMjlhfGNvcnZldHRlfGNvc3R1bWV8Y291bnRyeWVzdGF0ZXxjb3VudHl8Y3JhZnRzfGNyYW5icm9va3xjcmVhdGlvbnxjdWx0dXJhbHxjdWx0dXJhbGNlbnRlcnxjdWx0dXJlfGN5YmVyfGN5bXJ1fGRhbGl8ZGFsbGFzfGRhdGFiYXNlfGRkcnxkZWNvcmF0aXZlYXJ0c3xkZWxhd2FyZXxkZWxtZW5ob3JzdHxkZW5tYXJrfGRlcG90fGRlc2lnbnxkZXRyb2l0fGRpbm9zYXVyfGRpc2NvdmVyeXxkb2xsc3xkb25vc3RpYXxkdXJoYW18ZWFzdGFmcmljYXxlYXN0Y29hc3R8ZWR1Y2F0aW9ufGVkdWNhdGlvbmFsfGVneXB0aWFufGVpc2VuYmFobnxlbGJ1cmd8ZWx2ZW5kcmVsbHxlbWJyb2lkZXJ5fGVuY3ljbG9wZWRpY3xlbmdsYW5kfGVudG9tb2xvZ3l8ZW52aXJvbm1lbnR8ZW52aXJvbm1lbnRhbGNvbnNlcnZhdGlvbnxlcGlsZXBzeXxlc3NleHxlc3RhdGV8ZXRobm9sb2d5fGV4ZXRlcnxleGhpYml0aW9ufGZhbWlseXxmYXJtfGZhcm1lcXVpcG1lbnR8ZmFybWVyc3xmYXJtc3RlYWR8ZmllbGR8ZmlndWVyZXN8ZmlsYXRlbGlhfGZpbG18ZmluZWFydHxmaW5lYXJ0c3xmaW5sYW5kfGZsYW5kZXJzfGZsb3JpZGF8Zm9yY2V8Zm9ydG1pc3NvdWxhfGZvcnR3b3J0aHxmb3VuZGF0aW9ufGZyYW5jYWlzZXxmcmFua2Z1cnR8ZnJhbnppc2thbmVyfGZyZWVtYXNvbnJ5fGZyZWlidXJnfGZyaWJvdXJnfGZyb2d8ZnVuZGFjaW98ZnVybml0dXJlfGdhbGxlcnl8Z2FyZGVufGdhdGV3YXl8Z2VlbHZpbmNrfGdlbW9sb2dpY2FsfGdlb2xvZ3l8Z2VvcmdpYXxnaWVzc2VufGdsYXN8Z2xhc3N8Z29yZ2V8Z3JhbmRyYXBpZHN8Z3JhenxndWVybnNleXxoYWxsb2ZmYW1lfGhhbWJ1cmd8aGFuZHNvbnxoYXJ2ZXN0Y2VsZWJyYXRpb258aGF3YWlpfGhlYWx0aHxoZWltYXR1bmR1aHJlbnxoZWxsYXN8aGVsc2lua2l8aGVtYnlnZHNmb3JidW5kfGhlcml0YWdlfGhpc3RvaXJlfGhpc3RvcmljYWx8aGlzdG9yaWNhbHNvY2lldHl8aGlzdG9yaWNob3VzZXN8aGlzdG9yaXNjaHxoaXN0b3Jpc2NoZXN8aGlzdG9yeXxoaXN0b3J5b2ZzY2llbmNlfGhvcm9sb2d5fGhvdXNlfGh1bWFuaXRpZXN8aWxsdXN0cmF0aW9ufGltYWdlYW5kc291bmR8aW5kaWFufGluZGlhbmF8aW5kaWFuYXBvbGlzfGluZGlhbm1hcmtldHxpbnRlbGxpZ2VuY2V8aW50ZXJhY3RpdmV8aXJhcXxpcm9ufGlzbGVvZm1hbnxqYW1pc29ufGplZmZlcnNvbnxqZXJ1c2FsZW18amV3ZWxyeXxqZXdpc2h8amV3aXNoYXJ0fGpma3xqb3VybmFsaXNtfGp1ZGFpY2F8anVkeWdhcmxhbmR8anVlZGlzY2hlc3xqdWlmfGthcmF0ZXxrYXJpa2F0dXJ8a2lkc3xrb2ViZW5oYXZufGtvZWxufGt1bnN0fGt1bnN0c2FtbWx1bmd8a3Vuc3R1bmRkZXNpZ258bGFib3J8bGFib3VyfGxham9sbGF8bGFuY2FzaGlyZXxsYW5kZXN8bGFuc3x4bi0tbG5zLXFsYXxsYXJzc29ufGxld2lzbWlsbGVyfGxpbmNvbG58bGluenxsaXZpbmd8bGl2aW5naGlzdG9yeXxsb2NhbGhpc3Rvcnl8bG9uZG9ufGxvc2FuZ2VsZXN8bG91dnJlfGxveWFsaXN0fGx1Y2VybmV8bHV4ZW1ib3VyZ3xsdXplcm58bWFkfG1hZHJpZHxtYWxsb3JjYXxtYW5jaGVzdGVyfG1hbnNpb258bWFuc2lvbnN8bWFueHxtYXJidXJnfG1hcml0aW1lfG1hcml0aW1vfG1hcnlsYW5kfG1hcnlsaHVyc3R8bWVkaWF8bWVkaWNhbHxtZWRpemluaGlzdG9yaXNjaGVzfG1lZXJlc3xtZW1vcmlhbHxtZXNhdmVyZGV8bWljaGlnYW58bWlkYXRsYW50aWN8bWlsaXRhcnl8bWlsbHxtaW5lcnN8bWluaW5nfG1pbm5lc290YXxtaXNzaWxlfG1pc3NvdWxhfG1vZGVybnxtb21hfG1vbmV5fG1vbm1vdXRofG1vbnRpY2VsbG98bW9udHJlYWx8bW9zY293fG1vdG9yY3ljbGV8bXVlbmNoZW58bXVlbnN0ZXJ8bXVsaG91c2V8bXVuY2llfG11c2VldHxtdXNldW1jZW50ZXJ8bXVzZXVtdmVyZW5pZ2luZ3xtdXNpY3xuYXRpb25hbHxuYXRpb25hbGZpcmVhcm1zfG5hdGlvbmFsaGVyaXRhZ2V8bmF0aXZlYW1lcmljYW58bmF0dXJhbGhpc3Rvcnl8bmF0dXJhbGhpc3RvcnltdXNldW18bmF0dXJhbHNjaWVuY2VzfG5hdHVyZXxuYXR1cmhpc3RvcmlzY2hlc3xuYXR1dXJ3ZXRlbnNjaGFwcGVufG5hdW1idXJnfG5hdmFsfG5lYnJhc2thfG5ldWVzfG5ld2hhbXBzaGlyZXxuZXdqZXJzZXl8bmV3bWV4aWNvfG5ld3BvcnR8bmV3c3BhcGVyfG5ld3lvcmt8bmllcGNlfG5vcmZvbGt8bm9ydGh8bnJ3fG51ZXJuYmVyZ3xudXJlbWJlcmd8bnljfG55bnl8b2NlYW5vZ3JhcGhpY3xvY2Vhbm9ncmFwaGlxdWV8b21haGF8b25saW5lfG9udGFyaW98b3BlbmFpcnxvcmVnb258b3JlZ29udHJhaWx8b3RhZ298b3hmb3JkfHBhY2lmaWN8cGFkZXJib3JufHBhbGFjZXxwYWxlb3xwYWxtc3ByaW5nc3xwYW5hbWF8cGFyaXN8cGFzYWRlbmF8cGhhcm1hY3l8cGhpbGFkZWxwaGlhfHBoaWxhZGVscGhpYWFyZWF8cGhpbGF0ZWx5fHBob2VuaXh8cGhvdG9ncmFwaHl8cGlsb3RzfHBpdHRzYnVyZ2h8cGxhbmV0YXJpdW18cGxhbnRhdGlvbnxwbGFudHN8cGxhemF8cG9ydGFsfHBvcnRsYW5kfHBvcnRsbGlnYXR8cG9zdHMtYW5kLXRlbGVjb21tdW5pY2F0aW9uc3xwcmVzZXJ2YXRpb258cHJlc2lkaW98cHJlc3N8cHJvamVjdHxwdWJsaWN8cHVib2x8cXVlYmVjfHJhaWxyb2FkfHJhaWx3YXl8cmVzZWFyY2h8cmVzaXN0YW5jZXxyaW9kZWphbmVpcm98cm9jaGVzdGVyfHJvY2thcnR8cm9tYXxydXNzaWF8c2FpbnRsb3Vpc3xzYWxlbXxzYWx2YWRvcmRhbGl8c2FsemJ1cmd8c2FuZGllZ298c2FuZnJhbmNpc2NvfHNhbnRhYmFyYmFyYXxzYW50YWNydXp8c2FudGFmZXxzYXNrYXRjaGV3YW58c2F0eHxzYXZhbm5haGdhfHNjaGxlc2lzY2hlc3xzY2hvZW5icnVubnxzY2hva29sYWRlbnxzY2hvb2x8c2Nod2VpenxzY2llbmNlfHNjaWVuY2VhbmRoaXN0b3J5fHNjaWVuY2VhbmRpbmR1c3RyeXxzY2llbmNlY2VudGVyfHNjaWVuY2VjZW50ZXJzfHNjaWVuY2UtZmljdGlvbnxzY2llbmNlaGlzdG9yeXxzY2llbmNlc3xzY2llbmNlc25hdHVyZWxsZXN8c2NvdGxhbmR8c2VhcG9ydHxzZXR0bGVtZW50fHNldHRsZXJzfHNoZWxsfHNoZXJicm9va2V8c2liZW5pa3xzaWxrfHNraXxza29sZXxzb2NpZXR5fHNvbG9nbmV8c291bmRhbmR2aXNpb258c291dGhjYXJvbGluYXxzb3V0aHdlc3R8c3BhY2V8c3B5fHNxdWFyZXxzdGFkdHxzdGFsYmFuc3xzdGFybmJlcmd8c3RhdGV8c3RhdGVvZmRlbGF3YXJlfHN0YXRpb258c3RlYW18c3RlaWVybWFya3xzdGpvaG58c3RvY2tob2xtfHN0cGV0ZXJzYnVyZ3xzdHV0dGdhcnR8c3Vpc3NlfHN1cmdlb25zaGFsbHxzdXJyZXl8c3ZpenplcmF8c3dlZGVufHN5ZG5leXx0YW5rfHRjbXx0ZWNobm9sb2d5fHRlbGVrb21tdW5pa2F0aW9ufHRlbGV2aXNpb258dGV4YXN8dGV4dGlsZXx0aGVhdGVyfHRpbWV8dGltZWtlZXBpbmd8dG9wb2xvZ3l8dG9yaW5vfHRvdWNofHRvd258dHJhbnNwb3J0fHRyZWV8dHJvbGxleXx0cnVzdHx0cnVzdGVlfHVocmVufHVsbXx1bmRlcnNlYXx1bml2ZXJzaXR5fHVzYXx1c2FudGlxdWVzfHVzYXJ0c3x1c2NvdW50cnllc3RhdGV8dXNjdWx0dXJlfHVzZGVjb3JhdGl2ZWFydHN8dXNnYXJkZW58dXNoaXN0b3J5fHVzaHVhaWF8dXNsaXZpbmdoaXN0b3J5fHV0YWh8dXZpY3x2YWxsZXl8dmFudGFhfHZlcnNhaWxsZXN8dmlraW5nfHZpbGxhZ2V8dmlyZ2luaWF8dmlydHVhbHx2aXJ0dWVsfHZsYWFuZGVyZW58dm9sa2Vua3VuZGV8d2FsZXN8d2FsbG9uaWV8d2FyfHdhc2hpbmd0b25kY3x3YXRjaGFuZGNsb2NrfHdhdGNoLWFuZC1jbG9ja3x3ZXN0ZXJufHdlc3RmYWxlbnx3aGFsaW5nfHdpbGRsaWZlfHdpbGxpYW1zYnVyZ3x3aW5kbWlsbHx3b3Jrc2hvcHx5b3JrfHlvcmtzaGlyZXx5b3NlbWl0ZXx5b3V0aHx6b29sb2dpY2FsfHpvb2xvZ3l8eG4tLTlkYmhibGc2ZGl8eG4tLWgxYWVnaFwiLFwibXZcIjpcImFlcm98Yml6fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8bWlsfG11c2V1bXxuYW1lfG5ldHxvcmd8cHJvXCIsXCJtd1wiOlwiYWN8Yml6fGNvfGNvbXxjb29wfGVkdXxnb3Z8aW50fG11c2V1bXxuZXR8b3JnXCIsXCJteFwiOlwiY29tfG9yZ3xnb2J8ZWR1fG5ldHxibG9nc3BvdHxueW1cIixcIm15XCI6XCJjb218bmV0fG9yZ3xnb3Z8ZWR1fG1pbHxuYW1lfGJsb2dzcG90XCIsXCJtelwiOlwiYWN8YWR2fGNvfGVkdXxnb3Z8bWlsfG5ldHxvcmdcIixcIm5hXCI6XCJpbmZvfHByb3xuYW1lfHNjaG9vbHxvcnxkcnx1c3xteHxjYXxpbnxjY3x0dnx3c3xtb2JpfGNvfGNvbXxvcmdcIixcIm5hbWVcIjpcImZvcmdvdC5oZXJ8Zm9yZ290Lmhpc1wiLFwibmNcIjpcImFzc298bm9tXCIsXCJuZVwiOlwiXCIsXCJuZXRcIjpcIiphbHdheXNkYXRhfGNsb3VkZnJvbnR8dDNsM3AwcnR8bXlmcml0enxib29tbGF8YnBsYWNlZHxzcXVhcmU3fGdifGh1fGpwfHNlfHVrfGlufGNsb3VkYWNjZXNzfGNkbjc3LXNzbHxyLmNkbjc3fGZlc3RlLWlwfGtueC1zZXJ2ZXJ8c3RhdGljLWFjY2Vzc3wqY3J5cHRvbm9taWN8YXQtYmFuZC1jYW1wfGJsb2dkbnN8YnJva2UtaXR8YnV5c2hvdXNlc3xkbnNhbGlhc3xkbnNkb2pvfGRvZXMtaXR8ZG9udGV4aXN0fGR5bmFsaWFzfGR5bmF0aG9tZXxlbmRvZmludGVybmV0fGZyb20tYXp8ZnJvbS1jb3xmcm9tLWxhfGZyb20tbnl8Z2V0cy1pdHxoYW0tcmFkaW8tb3B8aG9tZWZ0cHxob21laXB8aG9tZWxpbnV4fGhvbWV1bml4fGluLXRoZS1iYW5kfGlzLWEtY2hlZnxpcy1hLWdlZWt8aXNhLWdlZWt8a2lja3MtYXNzfG9mZmljZS1vbi10aGV8cG9kem9uZXxzY3JhcHBlci1zaXRlfHNlbGZpcHxzZWxscy1pdHxzZXJ2ZWJic3xzZXJ2ZWZ0cHx0aHJ1aGVyZXx3ZWJob3B8ZGVmaW5pbWF8Y2FzYWNhbXxkeW51fGR5bnY2fHR3bWFpbHxydXxmYXN0bHlsYnxtYXAuZmFzdGx5bGJ8ZnJlZXRscy5mYXN0bHl8bWFwLmZhc3RseXxhLnByb2QuZmFzdGx5fGdsb2JhbC5wcm9kLmZhc3RseXxhLnNzbC5mYXN0bHl8Yi5zc2wuZmFzdGx5fGdsb2JhbC5zc2wuZmFzdGx5fGZseW5uaG9zdGluZ3xjbG91ZGZ1bmN0aW9uc3xtb29uc2NhbGV8aXBpZm9ueXxiYXJzeXxhenVyZXdlYnNpdGVzfGF6dXJlLW1vYmlsZXxjbG91ZGFwcHxlYXRpbmctb3JnYW5pY3xteWRpc3NlbnR8bXllZmZlY3R8bXltZWRpYXBjfG15cHN4fG15c2VjdXJpdHljYW1lcmF8bmhsZmFufG5vLWlwfHBnYWZhbnxwcml2YXRpemVoZWFsdGhpbnN1cmFuY2V8Ym91bmNlbWV8ZGRuc3xyZWRpcmVjdG1lfHNlcnZlYmxvZ3xzZXJ2ZW1pbmVjcmFmdHxzeXRlc3xyYWNrbWF6ZXxmaXJld2FsbC1nYXRld2F5fGRzbXluYXN8ZmFtaWx5ZHN8emFcIixcIm5mXCI6XCJjb218bmV0fHBlcnxyZWN8d2VifGFydHN8ZmlybXxpbmZvfG90aGVyfHN0b3JlXCIsXCJuZ1wiOlwiY29tfGVkdXxnb3Z8aXxtaWx8bW9iaXxuYW1lfG5ldHxvcmd8c2NofGJsb2dzcG90LmNvbVwiLFwibmlcIjpcImFjfGJpenxjb3xjb218ZWR1fGdvYnxpbnxpbmZvfGludHxtaWx8bmV0fG5vbXxvcmd8d2ViXCIsXCJubFwiOlwiYnZ8dmlydHVlZWxkb21laW58Y298YmxvZ3Nwb3R8KnRyYW5zdXJsfGNpc3Ryb258ZGVtb25cIixcIm5vXCI6XCJmaHN8dmdzfGZ5bGtlc2JpYmx8Zm9sa2ViaWJsfG11c2V1bXxpZHJldHR8cHJpdnxtaWx8c3RhdHxkZXB8a29tbXVuZXxoZXJhZHxhYXxhaHxidXxmbXxobHxobXxqYW4tbWF5ZW58bXJ8bmx8bnR8b2Z8b2x8b3Nsb3xybHxzZnxzdHxzdmFsYmFyZHx0bXx0cnx2YXx2Znxncy5hYXxncy5haHxncy5idXxncy5mbXxncy5obHxncy5obXxncy5qYW4tbWF5ZW58Z3MubXJ8Z3Mubmx8Z3MubnR8Z3Mub2Z8Z3Mub2x8Z3Mub3Nsb3xncy5ybHxncy5zZnxncy5zdHxncy5zdmFsYmFyZHxncy50bXxncy50cnxncy52YXxncy52Znxha3JlaGFtbnx4bi0ta3JlaGFtbi1keGF8YWxnYXJkfHhuLS1sZ3JkLXBvYWN8YXJuYXxicnVtdW5kZGFsfGJyeW5lfGJyb25ub3lzdW5kfHhuLS1icm5ueXN1bmQtbThhY3xkcm9iYWt8eG4tLWRyYmFrLXd1YXxlZ2Vyc3VuZHxmZXRzdW5kfGZsb3JvfHhuLS1mbG9yLWpyYXxmcmVkcmlrc3RhZHxob2trc3VuZHxob25lZm9zc3x4bi0taG5lZm9zcy1xMWF8amVzc2hlaW18am9ycGVsYW5kfHhuLS1qcnBlbGFuZC01NGF8a2lya2VuZXN8a29wZXJ2aWt8a3Jva3N0YWRlbHZhfGxhbmdldmFnfHhuLS1sYW5nZXZnLWp4YXxsZWlydmlrfG1qb25kYWxlbnx4bi0tbWpuZGFsZW4tNjRhfG1vLWktcmFuYXxtb3Nqb2VufHhuLS1tb3NqZW4tZXlhfG5lc29kZHRhbmdlbnxvcmthbmdlcnxvc295cm98eG4tLW9zeXJvLXd1YXxyYWhvbHR8eG4tLXJob2x0LW1yYXxzYW5kbmVzc2pvZW58eG4tLXNhbmRuZXNzamVuLW9nYnxza2Vkc21va29yc2V0fHNsYXR0dW18c3BqZWxrYXZpa3xzdGF0aGVsbGV8c3RhdmVybnxzdGpvcmRhbHNoYWxzZW58eG4tLXN0anJkYWxzaGFsc2VuLXNxYnx0YW5hbmdlcnx0cmFuYnl8dm9zc2V2YW5nZW58YWZqb3JkfHhuLS1mam9yZC1scmF8YWdkZW5lc3xhbHx4bi0tbC0xZmF8YWxlc3VuZHx4bi0tbGVzdW5kLWh1YXxhbHN0YWhhdWd8YWx0YXx4bi0tbHQtbGlhY3xhbGFoZWFkanV8eG4tLWxhaGVhZGp1LTd5YXxhbHZkYWx8YW1saXx4bi0tbWxpLXRsYXxhbW90fHhuLS1tb3QtdGxhfGFuZGVidXxhbmRveXx4bi0tYW5keS1pcmF8YW5kYXN1b2xvfGFyZGFsfHhuLS1yZGFsLXBvYXxhcmVtYXJrfGFyZW5kYWx8eG4tLXMtMWZhfGFzZXJhbHx4bi0tc2VyYWwtbHJhfGFza2VyfGFza2ltfGFza3ZvbGx8YXNrb3l8eG4tLWFza3ktaXJhfGFzbmVzfHhuLS1zbmVzLXBvYXxhdWRuZWRhbG58YXVrcmF8YXVyZXxhdXJsYW5kfGF1cnNrb2ctaG9sYW5kfHhuLS1hdXJza29nLWhsYW5kLWpuYnxhdXN0ZXZvbGx8YXVzdHJoZWltfGF2ZXJveXx4bi0tYXZlcnkteXVhfGJhbGVzdHJhbmR8YmFsbGFuZ2VufGJhbGF0fHhuLS1ibHQtZWxhYnxiYWxzZmpvcmR8YmFoY2NhdnVvdG5hfHhuLS1iaGNjYXZ1b3RuYS1rN2F8YmFtYmxlfGJhcmR1fGJlYXJkdXxiZWlhcm58YmFqZGRhcnx4bi0tYmpkZGFyLXB0YXxiYWlkYXJ8eG4tLWJpZHItNW5hY3xiZXJnfGJlcmdlbnxiZXJsZXZhZ3x4bi0tYmVybGV2Zy1qeGF8YmVhcmFsdmFoa2l8eG4tLWJlYXJhbHZoa2kteTRhfGJpbmRhbHxiaXJrZW5lc3xiamFya295fHhuLS1iamFya3ktZnlhfGJqZXJrcmVpbXxianVnbnxib2RvfHhuLS1ib2QtMm5hfGJhZGFkZGphfHhuLS1iZGRkai1tcmFiZHxidWRlamp1fGJva258YnJlbWFuZ2VyfGJyb25ub3l8eG4tLWJybm55LXd1YWN8YnlnbGFuZHxieWtsZXxiYXJ1bXx4bi0tYnJ1bS12b2F8Ym8udGVsZW1hcmt8eG4tLWItNWdhLnRlbGVtYXJrfGJvLm5vcmRsYW5kfHhuLS1iLTVnYS5ub3JkbGFuZHxiaWV2YXR8eG4tLWJpZXZ0LTBxYXxib21sb3x4bi0tYm1sby1ncmF8YmF0c2Zqb3JkfHhuLS1idHNmam9yZC05emF8YmFoY2F2dW90bmF8eG4tLWJoY2F2dW90bmEtczRhfGRvdnJlfGRyYW1tZW58ZHJhbmdlZGFsfGR5cm95fHhuLS1keXJ5LWlyYXxkb25uYXx4bi0tZG5uYS1ncmF8ZWlkfGVpZGZqb3JkfGVpZHNiZXJnfGVpZHNrb2d8ZWlkc3ZvbGx8ZWlnZXJzdW5kfGVsdmVydW18ZW5lYmFra3xlbmdlcmRhbHxldG5lfGV0bmVkYWx8ZXZlbmVzfGV2ZW5hc3NpfHhuLS1ldmVuaS0wcWEwMWdhfGV2amUtb2ctaG9ybm5lc3xmYXJzdW5kfGZhdXNrZXxmdW9zc2tvfGZ1b2lza3V8ZmVkamV8ZmV0fGZpbm5veXx4bi0tZmlubnkteXVhfGZpdGphcnxmamFsZXJ8ZmplbGx8Zmxha3N0YWR8ZmxhdGFuZ2VyfGZsZWtrZWZqb3JkfGZsZXNiZXJnfGZsb3JhfGZsYXx4bi0tZmwtemlhfGZvbGxkYWx8Zm9yc2FuZHxmb3NuZXN8ZnJlaXxmcm9nbnxmcm9sYW5kfGZyb3N0YXxmcmFuYXx4bi0tZnJuYS13b2F8ZnJveWF8eG4tLWZyeWEtaHJhfGZ1c2F8ZnlyZXNkYWx8Zm9yZGV8eG4tLWZyZGUtZ3JhfGdhbXZpa3xnYW5nYXZpaWthfHhuLS1nZ2F2aWlrYS04eWE0N2h8Z2F1bGFyfGdhdXNkYWx8Z2lsZGVza2FsfHhuLS1naWxkZXNrbC1nMGF8Z2lza2V8Z2plbW5lc3xnamVyZHJ1bXxnamVyc3RhZHxnamVzZGFsfGdqb3Zpa3x4bi0tZ2p2aWstd3VhfGdsb3BwZW58Z29sfGdyYW58Z3JhbmV8Z3JhbnZpbnxncmF0YW5nZW58Z3JpbXN0YWR8Z3Jvbmd8a3JhYW5naGtlfHhuLS1rcmFuZ2hrZS1iMGF8Z3J1ZXxndWxlbnxoYWRzZWx8aGFsZGVufGhhbHNhfGhhbWFyfGhhbWFyb3l8aGFibWVyfHhuLS1oYm1lci14cWF8aGFwbWlyfHhuLS1ocG1pci14cWF8aGFtbWVyZmVzdHxoYW1tYXJmZWFzdGF8eG4tLWhtbXJmZWFzdGEtczRhY3xoYXJhbXxoYXJlaWR8aGFyc3RhZHxoYXN2aWt8YWtub2x1b2t0YXx4bi0ta29sdW9rdGEtN3lhNTdofGhhdHRmamVsbGRhbHxhYXJib3J0ZXxoYXVnZXN1bmR8aGVtbmV8aGVtbmVzfGhlbXNlZGFsfGhlcm95Lm1vcmUtb2ctcm9tc2RhbHx4bi0taGVyeS1pcmEueG4tLW1yZS1vZy1yb21zZGFsLXFxYnxoZXJveS5ub3JkbGFuZHx4bi0taGVyeS1pcmEubm9yZGxhbmR8aGl0cmF8aGphcnRkYWx8aGplbG1lbGFuZHxob2JvbHx4bi0taG9ibC1pcmF8aG9mfGhvbHxob2xlfGhvbG1lc3RyYW5kfGhvbHRhbGVufHhuLS1ob2x0bGVuLWh4YXxob3JuaW5kYWx8aG9ydGVufGh1cmRhbHxodXJ1bXxodmFsZXJ8aHlsbGVzdGFkfGhhZ2Vib3N0YWR8eG4tLWhnZWJvc3RhZC1nM2F8aG95YW5nZXJ8eG4tLWh5YW5nZXItcTFhfGhveWxhbmRldHx4bi0taHlsYW5kZXQtNTRhfGhhfHhuLS1oLTJmYXxpYmVzdGFkfGluZGVyb3l8eG4tLWluZGVyeS1meWF8aXZlbGFuZHxqZXZuYWtlcnxqb25kYWx8am9sc3Rlcnx4bi0tamxzdGVyLWJ5YXxrYXJhc2pva3xrYXJhc2pvaGthfHhuLS1rcmpvaGthLWh3YWI0OWp8a2FybHNveXxnYWxzYXx4bi0tZ2xzLWVsYWN8a2FybW95fHhuLS1rYXJteS15dWF8a2F1dG9rZWlub3xndW92ZGFnZWFpZG51fGtsZXBwfGtsYWJ1fHhuLS1rbGJ1LXdvYXxrb25nc2Jlcmd8a29uZ3N2aW5nZXJ8a3JhZ2Vyb3x4bi0ta3JhZ2VyLWd5YXxrcmlzdGlhbnNhbmR8a3Jpc3RpYW5zdW5kfGtyb2RzaGVyYWR8eG4tLWtyZHNoZXJhZC1tOGF8a3ZhbHN1bmR8cmFoa2tlcmF2anV8eG4tLXJoa2tlcnZqdS0wMWFmfGt2YW18a3ZpbmVzZGFsfGt2aW5uaGVyYWR8a3ZpdGVzZWlkfGt2aXRzb3l8eG4tLWt2aXRzeS1meWF8a3ZhZmpvcmR8eG4tLWt2ZmpvcmQtbnhhfGdpZWh0YXZ1b2F0bmF8a3ZhbmFuZ2VufHhuLS1rdm5hbmdlbi1rMGF8bmF2dW90bmF8eG4tLW52dW90bmEtaHdhfGthZmpvcmR8eG4tLWtmam9yZC1pdWF8Z2FpdnVvdG5hfHhuLS1naXZ1b3RuYS04eWF8bGFydmlrfGxhdmFuZ2VufGxhdmFnaXN8bG9hYmF0fHhuLS1sb2FidC0wcWF8bGViZXNieXxkYXZ2ZXNpaWRhfGxlaWthbmdlcnxsZWlyZmpvcmR8bGVrYXxsZWtzdmlrfGxlbnZpa3xsZWFuZ2F2aWlrYXx4bi0tbGVhZ2F2aWlrYS01MmJ8bGVzamF8bGV2YW5nZXJ8bGllcnxsaWVybmV8bGlsbGVoYW1tZXJ8bGlsbGVzYW5kfGxpbmRlc25lc3xsaW5kYXN8eG4tLWxpbmRzLXByYXxsb218bG9wcGF8bGFocHBpfHhuLS1saHBwaS14cWF8bHVuZHxsdW5uZXJ8bHVyb3l8eG4tLWx1cnktaXJhfGx1c3RlcnxseW5nZGFsfGx5bmdlbnxpdmd1fGxhcmRhbHxsZXJkYWx8eG4tLWxyZGFsLXNyYXxsb2Rpbmdlbnx4bi0tbGRpbmdlbi1xMWF8bG9yZW5za29nfHhuLS1scmVuc2tvZy01NGF8bG90ZW58eG4tLWx0ZW4tZ3JhfG1hbHZpa3xtYXNveXx4bi0tbXN5LXVsYTBofG11b3NhdHx4bi0tbXVvc3QtMHFhfG1hbmRhbHxtYXJrZXJ8bWFybmFyZGFsfG1hc2Zqb3JkZW58bWVsYW5kfG1lbGRhbHxtZWxodXN8bWVsb3l8eG4tLW1lbHktaXJhfG1lcmFrZXJ8eG4tLW1lcmtlci1rdWF8bW9hcmVrZXx4bi0tbW9yZWtlLWp1YXxtaWRzdW5kfG1pZHRyZS1nYXVsZGFsfG1vZGFsZW58bW9kdW18bW9sZGV8bW9za2VuZXN8bW9zc3xtb3N2aWt8bWFsc2Vsdnx4bi0tbWxzZWx2LWl1YXxtYWxhdHZ1b3BtaXx4bi0tbWxhdHZ1b3BtaS1zNGF8bmFtZGFsc2VpZHxhZWpyaWV8bmFtc29zfG5hbXNza29nYW58bmFhbWVzamV2dWVtaWV8eG4tLW5tZXNqZXZ1ZW1pZS10Y2JhfGxhYWtlc3Z1ZW1pZXxuYW5uZXN0YWR8bmFydmlrfG5hcnZpaWthfG5hdXN0ZGFsfG5lZHJlLWVpa2VyfG5lcy5ha2Vyc2h1c3xuZXMuYnVza2VydWR8bmVzbmF8bmVzb2RkZW58bmVzc2VieXx1bmphcmdhfHhuLS11bmpyZ2EtcnRhfG5lc3NldHxuaXNzZWRhbHxuaXR0ZWRhbHxub3JkLWF1cmRhbHxub3JkLWZyb258bm9yZC1vZGFsfG5vcmRkYWx8bm9yZGthcHB8ZGF2dmVuamFyZ2F8eG4tLWRhdnZlbmpyZ2EteTRhfG5vcmRyZS1sYW5kfG5vcmRyZWlzYXxyYWlzYXx4bi0tcmlzYS01bmF8bm9yZS1vZy11dmRhbHxub3RvZGRlbnxuYXJveXx4bi0tbnJ5LXlsYTVnfG5vdHRlcm95fHhuLS1udHRlcnktYnlhZXxvZGRhfG9rc25lc3x4bi0ta3NuZXMtdXVhfG9wcGRhbHxvcHBlZ2FyZHx4bi0tb3BwZWdyZC1peGF8b3JrZGFsfG9ybGFuZHx4bi0tcmxhbmQtdXVhfG9yc2tvZ3x4bi0tcnNrb2ctdXVhfG9yc3RhfHhuLS1yc3RhLWZyYXxvcy5oZWRtYXJrfG9zLmhvcmRhbGFuZHxvc2VufG9zdGVyb3l8eG4tLW9zdGVyeS1meWF8b3N0cmUtdG90ZW58eG4tLXN0cmUtdG90ZW4temNifG92ZXJoYWxsYXxvdnJlLWVpa2VyfHhuLS12cmUtZWlrZXItazhhfG95ZXJ8eG4tLXllci16bmF8b3lnYXJkZW58eG4tLXlnYXJkZW4tcDFhfG95c3RyZS1zbGlkcmV8eG4tLXlzdHJlLXNsaWRyZS11amJ8cG9yc2FuZ2VyfHBvcnNhbmd1fHhuLS1wb3JzZ3Utc3RhMjZmfHBvcnNncnVubnxyYWRveXx4bi0tcmFkeS1pcmF8cmFra2VzdGFkfHJhbmF8cnVvdmF0fHJhbmRhYmVyZ3xyYXVtYXxyZW5kYWxlbnxyZW5uZWJ1fHJlbm5lc295fHhuLS1yZW5uZXN5LXYxYXxyaW5kYWx8cmluZ2VidXxyaW5nZXJpa2V8cmluZ3Nha2VyfHJpc3NhfHJpc29yfHhuLS1yaXNyLWlyYXxyb2FufHJvbGxhZ3xyeWdnZXxyYWxpbmdlbnx4bi0tcmxpbmdlbi1teGF8cm9kb3l8eG4tLXJkeS0wbmFifHJvbXNrb2d8eG4tLXJtc2tvZy1ieWF8cm9yb3N8eG4tLXJyb3MtZ3JhfHJvc3R8eG4tLXJzdC0wbmF8cm95a2VufHhuLS1yeWtlbi12dWF8cm95cnZpa3x4bi0tcnlydmlrLWJ5YXxyYWRlfHhuLS1yZGUtdWxhfHNhbGFuZ2VufHNpZWxsYWt8c2FsdGRhbHxzYWxhdHx4bi0tc2x0LWVsYWJ8eG4tLXNsYXQtNW5hfHNhbW5hbmdlcnxzYW5kZS5tb3JlLW9nLXJvbXNkYWx8c2FuZGUueG4tLW1yZS1vZy1yb21zZGFsLXFxYnxzYW5kZS52ZXN0Zm9sZHxzYW5kZWZqb3JkfHNhbmRuZXN8c2FuZG95fHhuLS1zYW5keS15dWF8c2FycHNib3JnfHNhdWRhfHNhdWhlcmFkfHNlbHxzZWxidXxzZWxqZXxzZWxqb3JkfHNpZ2RhbHxzaWxqYW58c2lyZGFsfHNrYXVufHNrZWRzbW98c2tpfHNraWVufHNraXB0dmV0fHNramVydm95fHhuLS1za2plcnZ5LXYxYXxza2llcnZhfHhuLS1za2llcnYtdXRhfHNramFrfHhuLS1za2prLXNvYXxza29kamV8c2thbmxhbmR8eG4tLXNrbmxhbmQtZnhhfHNrYW5pdHx4bi0tc2tuaXQteXFhfHNtb2xhfHhuLS1zbWxhLWhyYXxzbmlsbGZqb3JkfHNuYXNhfHhuLS1zbnNhLXJvYXxzbm9hc2F8c25hYXNlfHhuLS1zbmFzZS1ucmF8c29nbmRhbHxzb2tuZGFsfHNvbGF8c29sdW5kfHNvbmdkYWxlbnxzb3J0bGFuZHxzcHlkZWJlcmd8c3RhbmdlfHN0YXZhbmdlcnxzdGVpZ2VufHN0ZWlua2plcnxzdGpvcmRhbHx4bi0tc3RqcmRhbC1zMWF8c3Rva2tlfHN0b3ItZWx2ZGFsfHN0b3JkfHN0b3JkYWx8c3RvcmZqb3JkfG9tYXN2dW90bmF8c3RyYW5kfHN0cmFuZGF8c3RyeW58c3VsYXxzdWxkYWx8c3VuZHxzdW5uZGFsfHN1cm5hZGFsfHN2ZWlvfHN2ZWx2aWt8c3lra3lsdmVufHNvZ25lfHhuLS1zZ25lLWdyYXxzb21uYXx4bi0tc21uYS1ncmF8c29uZHJlLWxhbmR8eG4tLXNuZHJlLWxhbmQtMGNifHNvci1hdXJkYWx8eG4tLXNyLWF1cmRhbC1sOGF8c29yLWZyb258eG4tLXNyLWZyb24tcTFhfHNvci1vZGFsfHhuLS1zci1vZGFsLXExYXxzb3ItdmFyYW5nZXJ8eG4tLXNyLXZhcmFuZ2VyLWdnYnxtYXR0YS12YXJqamF0fHhuLS1tdHRhLXZyamphdC1rN2FmfHNvcmZvbGR8eG4tLXNyZm9sZC1ieWF8c29ycmVpc2F8eG4tLXNycmVpc2EtcTFhfHNvcnVtfHhuLS1zcnVtLWdyYXx0YW5hfGRlYXRudXx0aW1lfHRpbmd2b2xsfHRpbm58dGplbGRzdW5kfGRpZWxkZGFudW9ycml8dGpvbWV8eG4tLXRqbWUtaHJhfHRva2tlfHRvbGdhfHRvcnNrZW58dHJhbm95fHhuLS10cmFueS15dWF8dHJvbXNvfHhuLS10cm9tcy16dWF8dHJvbXNhfHJvbXNhfHRyb25kaGVpbXx0cm9hbmRpbnx0cnlzaWx8dHJhbmF8eG4tLXRybmEtd29hfHRyb2dzdGFkfHhuLS10cmdzdGFkLXIxYXx0dmVkZXN0cmFuZHx0eWRhbHx0eW5zZXR8dHlzZmpvcmR8ZGl2dGFzdnVvZG5hfGRpdnR0YXN2dW90bmF8dHlzbmVzfHR5c3Zhcnx4bi0tdHlzdnItdnJhfHRvbnNiZXJnfHhuLS10bnNiZXJnLXExYXx1bGxlbnNha2VyfHVsbGVuc3Zhbmd8dWx2aWt8dXRzaXJhfHZhZHNvfHhuLS12YWRzLWpyYXxjYWhjZXN1b2xvfHhuLS1oY2VzdW9sby03eWEzNWJ8dmFrc2RhbHx2YWxsZXx2YW5nfHZhbnlsdmVufHZhcmRvfHhuLS12YXJkLWpyYXx2YXJnZ2F0fHhuLS12cmdndC14cWFkfHZlZnNufHZhYXBzdGV8dmVnYXx2ZWdhcnNoZWl8eG4tLXZlZ3JzaGVpLWMwYXx2ZW5uZXNsYXx2ZXJkYWx8dmVycmFufHZlc3RieXx2ZXN0bmVzfHZlc3RyZS1zbGlkcmV8dmVzdHJlLXRvdGVufHZlc3R2YWdveXx4bi0tdmVzdHZneS1peGE2b3x2ZXZlbHN0YWR8dmlrfHZpa25hfHZpbmRhZmpvcmR8dm9sZGF8dm9zc3x2YXJveXx4bi0tdnJ5LXlsYTVnfHZhZ2FufHhuLS12Z2FuLXFvYXx2b2FnYXR8dmFnc295fHhuLS12Z3N5LXFvYTBqfHZhZ2F8eG4tLXZnLXlpYWJ8dmFsZXIub3N0Zm9sZHx4bi0tdmxlci1xb2EueG4tLXN0Zm9sZC05eGF8dmFsZXIuaGVkbWFya3x4bi0tdmxlci1xb2EuaGVkbWFya3xjb3xibG9nc3BvdFwiLFwibnBcIjpcIipcIixcIm5yXCI6XCJiaXp8aW5mb3xnb3Z8ZWR1fG9yZ3xuZXR8Y29tXCIsXCJudVwiOlwibWVyc2VpbmV8bWluZXxzaGFja25ldHxub21cIixcIm56XCI6XCJhY3xjb3xjcml8Z2Vla3xnZW58Z292dHxoZWFsdGh8aXdpfGtpd2l8bWFvcml8bWlsfHhuLS1tb3JpLXFzYXxuZXR8b3JnfHBhcmxpYW1lbnR8c2Nob29sfGJsb2dzcG90LmNvfG55bVwiLFwib21cIjpcImNvfGNvbXxlZHV8Z292fG1lZHxtdXNldW18bmV0fG9yZ3xwcm9cIixcIm9uaW9uXCI6XCJcIixcIm9yZ1wiOlwidGVsZS5hbXVuZXxwaW1pZW50YXxwb2l2cm9ufHBvdGFnZXJ8c3dlZXRwZXBwZXJ8YWV8dXN8Y2VydG1ncnxjLmNkbjc3fHJzYy5jZG43N3xzc2wub3JpZ2luLmNkbjc3LXNlY3VyZXxjbG91ZG5zfGR1Y2tkbnN8dHVua3xkeW5kbnN8YmxvZ2Ruc3xibG9nc2l0ZXxib2xkbHlnb2luZ25vd2hlcmV8ZG5zYWxpYXN8ZG5zZG9qb3xkb2VzbnRleGlzdHxkb250ZXhpc3R8ZG9vbWRuc3xkdnJkbnN8ZHluYWxpYXN8ZW5kb2ZpbnRlcm5ldHxlbmRvZnRoZWludGVybmV0fGZyb20tbWV8Z2FtZS1ob3N0fGdvLmR5bmRuc3xnb3RkbnN8aG9iYnktc2l0ZXxob21lLmR5bmRuc3xob21lZG5zfGhvbWVmdHB8aG9tZWxpbnV4fGhvbWV1bml4fGlzLWEtYnJ1aW5zZmFufGlzLWEtY2FuZGlkYXRlfGlzLWEtY2VsdGljc2Zhbnxpcy1hLWNoZWZ8aXMtYS1nZWVrfGlzLWEta25pZ2h0fGlzLWEtbGludXgtdXNlcnxpcy1hLXBhdHNmYW58aXMtYS1zb3hmYW58aXMtZm91bmR8aXMtbG9zdHxpcy1zYXZlZHxpcy12ZXJ5LWJhZHxpcy12ZXJ5LWV2aWx8aXMtdmVyeS1nb29kfGlzLXZlcnktbmljZXxpcy12ZXJ5LXN3ZWV0fGlzYS1nZWVrfGtpY2tzLWFzc3xtaXNjb25mdXNlZHxwb2R6b25lfHJlYWRteWJsb2d8c2VsZmlwfHNlbGxzeW91cmhvbWV8c2VydmViYnN8c2VydmVmdHB8c2VydmVnYW1lfHN0dWZmLTQtc2FsZXx3ZWJob3B8ZGRuc3N8YWNjZXNzY2FtfGNhbWR2cnxmcmVlZGRuc3xteXdpcmV8d2VicmVkaXJlY3R8ZXV8YWwuZXV8YXNzby5ldXxhdC5ldXxhdS5ldXxiZS5ldXxiZy5ldXxjYS5ldXxjZC5ldXxjaC5ldXxjbi5ldXxjeS5ldXxjei5ldXxkZS5ldXxkay5ldXxlZHUuZXV8ZWUuZXV8ZXMuZXV8ZmkuZXV8ZnIuZXV8Z3IuZXV8aHIuZXV8aHUuZXV8aWUuZXV8aWwuZXV8aW4uZXV8aW50LmV1fGlzLmV1fGl0LmV1fGpwLmV1fGtyLmV1fGx0LmV1fGx1LmV1fGx2LmV1fG1jLmV1fG1lLmV1fG1rLmV1fG10LmV1fG15LmV1fG5ldC5ldXxuZy5ldXxubC5ldXxuby5ldXxuei5ldXxwYXJpcy5ldXxwbC5ldXxwdC5ldXxxLWEuZXV8cm8uZXV8cnUuZXV8c2UuZXV8c2kuZXV8c2suZXV8dHIuZXV8dWsuZXV8dXMuZXV8dHdtYWlsfGZlZG9yYWluZnJhY2xvdWR8ZmVkb3JhcGVvcGxlfGNsb3VkLmZlZG9yYXByb2plY3R8aGVwZm9yZ2V8anN8Ym1vYXR0YWNobWVudHN8Y2FibGUtbW9kZW18Y29sbGVnZWZhbnxjb3VjaHBvdGF0b2ZyaWVzfG1sYmZhbnxteXNlY3VyaXR5Y2FtZXJhfG5mbGZhbnxyZWFkLWJvb2tzfHVmY2Zhbnxob3B0b3xteWZ0cHxuby1pcHx6YXB0b3xteS1maXJld2FsbHxteWZpcmV3YWxsfHNwZG5zfGRzbXluYXN8ZmFtaWx5ZHN8dHV4ZmFtaWx5fGRpc2tzdGF0aW9ufGhrfHdtZmxhYnN8emFcIixcInBhXCI6XCJhY3xnb2J8Y29tfG9yZ3xzbGR8ZWR1fG5ldHxpbmd8YWJvfG1lZHxub21cIixcInBlXCI6XCJlZHV8Z29ifG5vbXxtaWx8b3JnfGNvbXxuZXR8YmxvZ3Nwb3R8bnltXCIsXCJwZlwiOlwiY29tfG9yZ3xlZHVcIixcInBnXCI6XCIqXCIsXCJwaFwiOlwiY29tfG5ldHxvcmd8Z292fGVkdXxuZ298bWlsfGlcIixcInBrXCI6XCJjb218bmV0fGVkdXxvcmd8ZmFtfGJpenx3ZWJ8Z292fGdvYnxnb2t8Z29ufGdvcHxnb3N8aW5mb1wiLFwicGxcIjpcImNvbXxuZXR8b3JnfGFpZHxhZ3JvfGF0bXxhdXRvfGJpenxlZHV8Z21pbmF8Z3NtfGluZm98bWFpbHxtaWFzdGF8bWVkaWF8bWlsfG5pZXJ1Y2hvbW9zY2l8bm9tfHBjfHBvd2lhdHxwcml2fHJlYWxlc3RhdGV8cmVsfHNleHxzaG9wfHNrbGVwfHNvc3xzemtvbGF8dGFyZ2l8dG18dG91cmlzbXx0cmF2ZWx8dHVyeXN0eWthfGdvdnxhcC5nb3Z8aWMuZ292fGlzLmdvdnx1cy5nb3Z8a21wc3AuZ292fGtwcHNwLmdvdnxrd3BzcC5nb3Z8cHNwLmdvdnx3c2tyLmdvdnxrd3AuZ292fG13Lmdvdnx1Zy5nb3Z8dW0uZ292fHVtaWcuZ292fHVnaW0uZ292fHVwb3cuZ292fHV3LmdvdnxzdGFyb3N0d28uZ292fHBhLmdvdnxwby5nb3Z8cHNzZS5nb3Z8cHVwLmdvdnxyemd3LmdvdnxzYS5nb3Z8c28uZ292fHNyLmdvdnx3c2EuZ292fHNrby5nb3Z8dXpzLmdvdnx3aWloLmdvdnx3aW5iLmdvdnxwaW5iLmdvdnx3aW9zLmdvdnx3aXRkLmdvdnx3em1pdXcuZ292fHBpdy5nb3Z8d2l3Lmdvdnxncml3Lmdvdnx3aWYuZ292fG91bS5nb3Z8c2RuLmdvdnx6cC5nb3Z8dXBwby5nb3Z8bXVwLmdvdnx3dW96Lmdvdnxrb25zdWxhdC5nb3Z8b2lybS5nb3Z8YXVndXN0b3d8YmFiaWEtZ29yYXxiZWR6aW58YmVza2lkeXxiaWFsb3dpZXphfGJpYWx5c3Rva3xiaWVsYXdhfGJpZXN6Y3phZHl8Ym9sZXNsYXdpZWN8YnlkZ29zemN6fGJ5dG9tfGNpZXN6eW58Y3plbGFkenxjemVzdHxkbHVnb2xla2F8ZWxibGFnfGVsa3xnbG9nb3d8Z25pZXpub3xnb3JsaWNlfGdyYWpld298aWxhd2F8amF3b3J6bm98amVsZW5pYS1nb3JhfGpnb3JhfGthbGlzenxrYXppbWllcnotZG9sbnl8a2FycGFjenxrYXJ0dXp5fGthc3p1Ynl8a2F0b3dpY2V8a2Vwbm98a2V0cnp5bnxrbG9kemtvfGtvYmllcnp5Y2V8a29sb2JyemVnfGtvbmlufGtvbnNrb3dvbGF8a3V0bm98bGFweXxsZWJvcmt8bGVnbmljYXxsZXphanNrfGxpbWFub3dhfGxvbXphfGxvd2ljenxsdWJpbnxsdWtvd3xtYWxib3JrfG1hbG9wb2xza2F8bWF6b3dzemV8bWF6dXJ5fG1pZWxlY3xtaWVsbm98bXJhZ293b3xuYWtsb3xub3dhcnVkYXxueXNhfG9sYXdhfG9sZWNrb3xvbGt1c3p8b2xzenR5bnxvcG9jem5vfG9wb2xlfG9zdHJvZGF8b3N0cm9sZWthfG9zdHJvd2llY3xvc3Ryb3d3bGtwfHBpbGF8cGlzenxwb2RoYWxlfHBvZGxhc2llfHBvbGtvd2ljZXxwb21vcnplfHBvbW9yc2tpZXxwcm9jaG93aWNlfHBydXN6a293fHByemV3b3Jza3xwdWxhd3l8cmFkb218cmF3YS1tYXp8cnlibmlrfHJ6ZXN6b3d8c2Fub2t8c2Vqbnl8c2xhc2t8c2x1cHNrfHNvc25vd2llY3xzdGFsb3dhLXdvbGF8c2tvY3pvd3xzdGFyYWNob3dpY2V8c3RhcmdhcmR8c3V3YWxraXxzd2lkbmljYXxzd2llYm9kemlufHN3aW5vdWpzY2llfHN6Y3plY2lufHN6Y3p5dG5vfHRhcm5vYnJ6ZWd8dGdvcnl8dHVyZWt8dHljaHl8dXN0a2F8d2FsYnJ6eWNofHdhcm1pYXx3YXJzemF3YXx3YXd8d2Vncm93fHdpZWx1bnx3bG9jbHx3bG9jbGF3ZWt8d29kemlzbGF3fHdvbG9taW58d3JvY2xhd3x6YWNocG9tb3J8emFnYW58emFyb3d8emdvcmF8emdvcnplbGVjfGJlZXB8Y298YXJ0fGdsaXdpY2V8a3Jha293fHBvem5hbnx3cm9jfHpha29wYW5lfGdkYXxnZGFuc2t8Z2R5bmlhfG1lZHxzb3BvdFwiLFwicG1cIjpcIlwiLFwicG5cIjpcImdvdnxjb3xvcmd8ZWR1fG5ldFwiLFwicG9zdFwiOlwiXCIsXCJwclwiOlwiY29tfG5ldHxvcmd8Z292fGVkdXxpc2xhfHByb3xiaXp8aW5mb3xuYW1lfGVzdHxwcm9mfGFjXCIsXCJwcm9cIjpcImFhYXxhY2F8YWNjdHxhdm9jYXR8YmFyfGNwYXxlbmd8anVyfGxhd3xtZWR8cmVjaHR8Y2xvdWRuc1wiLFwicHNcIjpcImVkdXxnb3Z8c2VjfHBsb3xjb218b3JnfG5ldFwiLFwicHRcIjpcIm5ldHxnb3Z8b3JnfGVkdXxpbnR8cHVibHxjb218bm9tZXxibG9nc3BvdHxueW1cIixcInB3XCI6XCJjb3xuZXxvcnxlZHxnb3xiZWxhdXxjbG91ZG5zfG5vbVwiLFwicHlcIjpcImNvbXxjb29wfGVkdXxnb3Z8bWlsfG5ldHxvcmdcIixcInFhXCI6XCJjb218ZWR1fGdvdnxtaWx8bmFtZXxuZXR8b3JnfHNjaHxibG9nc3BvdHxub21cIixcInJlXCI6XCJhc3NvfGNvbXxub218YmxvZ3Nwb3RcIixcInJvXCI6XCJhcnRzfGNvbXxmaXJtfGluZm98bm9tfG50fG9yZ3xyZWN8c3RvcmV8dG18d3d3fHNob3B8YmxvZ3Nwb3RcIixcInJzXCI6XCJhY3xjb3xlZHV8Z292fGlufG9yZ3xibG9nc3BvdHxub21cIixcInJ1XCI6XCJhY3xlZHV8Z292fGludHxtaWx8dGVzdHxhZHlnZXlhfGJhc2hraXJpYXxiaXJ8Y2JnfGNvbXxkYWdlc3Rhbnxncm96bnl8a2FsbXlraWF8a3VzdGFuYWl8bWFyaW5lfG1vcmRvdmlhfG1za3xteXRpc3xuYWxjaGlrfG5vdnxweWF0aWdvcnNrfHNwYnx2bGFkaWthdmthenx2bGFkaW1pcnxibG9nc3BvdHxoYi5jbGRtYWlsfG5ldHxvcmd8cHBcIixcInJ3XCI6XCJnb3Z8bmV0fGVkdXxhY3xjb218Y298aW50fG1pbHxnb3V2XCIsXCJzYVwiOlwiY29tfG5ldHxvcmd8Z292fG1lZHxwdWJ8ZWR1fHNjaFwiLFwic2JcIjpcImNvbXxlZHV8Z292fG5ldHxvcmdcIixcInNjXCI6XCJjb218Z292fG5ldHxvcmd8ZWR1XCIsXCJzZFwiOlwiY29tfG5ldHxvcmd8ZWR1fG1lZHx0dnxnb3Z8aW5mb1wiLFwic2VcIjpcImF8YWN8YnxiZHxicmFuZHxjfGR8ZXxmfGZofGZoc2t8Zmh2fGd8aHxpfGt8a29tZm9yYnxrb21tdW5hbGZvcmJ1bmR8a29tdnV4fGx8bGFuYmlifG18bnxuYXR1cmJydWtzZ3ltbnxvfG9yZ3xwfHBhcnRpfHBwfHByZXNzfHJ8c3x0fHRtfHV8d3x4fHl8enxjb218YmxvZ3Nwb3RcIixcInNnXCI6XCJjb218bmV0fG9yZ3xnb3Z8ZWR1fHBlcnxibG9nc3BvdFwiLFwic2hcIjpcImNvbXxuZXR8Z292fG9yZ3xtaWx8aGFzaGJhbmd8KnBsYXRmb3JtfG5vd1wiLFwic2lcIjpcImJsb2dzcG90fG5vbVwiLFwic2pcIjpcIlwiLFwic2tcIjpcImJsb2dzcG90fG55bVwiLFwic2xcIjpcImNvbXxuZXR8ZWR1fGdvdnxvcmdcIixcInNtXCI6XCJcIixcInNuXCI6XCJhcnR8Y29tfGVkdXxnb3V2fG9yZ3xwZXJzb3x1bml2fGJsb2dzcG90XCIsXCJzb1wiOlwiY29tfG5ldHxvcmdcIixcInNyXCI6XCJcIixcInN0XCI6XCJjb3xjb218Y29uc3VsYWRvfGVkdXxlbWJhaXhhZGF8Z292fG1pbHxuZXR8b3JnfHByaW5jaXBlfHNhb3RvbWV8c3RvcmVcIixcInN1XCI6XCJhYmtoYXppYXxhZHlnZXlhfGFrdHl1Ymluc2t8YXJraGFuZ2Vsc2t8YXJtZW5pYXxhc2hnYWJhZHxhemVyYmFpamFufGJhbGFzaG92fGJhc2hraXJpYXxicnlhbnNrfGJ1a2hhcmF8Y2hpbWtlbnR8ZGFnZXN0YW58ZWFzdC1rYXpha2hzdGFufGV4bmV0fGdlb3JnaWF8Z3Jvem55fGl2YW5vdm98amFtYnlsfGthbG15a2lhfGthbHVnYXxrYXJhY29sfGthcmFnYW5kYXxrYXJlbGlhfGtoYWthc3NpYXxrcmFzbm9kYXJ8a3VyZ2FufGt1c3RhbmFpfGxlbnVnfG1hbmd5c2hsYWt8bW9yZG92aWF8bXNrfG11cm1hbnNrfG5hbGNoaWt8bmF2b2l8bm9ydGgta2F6YWtoc3Rhbnxub3Z8b2JuaW5za3xwZW56YXxwb2tyb3Zza3xzb2NoaXxzcGJ8dGFzaGtlbnR8dGVybWV6fHRvZ2xpYXR0aXx0cm9pdHNrfHRzZWxpbm9ncmFkfHR1bGF8dHV2YXx2bGFkaWthdmthenx2bGFkaW1pcnx2b2xvZ2RhfG55bVwiLFwic3ZcIjpcImNvbXxlZHV8Z29ifG9yZ3xyZWRcIixcInN4XCI6XCJnb3Z8bnltXCIsXCJzeVwiOlwiZWR1fGdvdnxuZXR8bWlsfGNvbXxvcmdcIixcInN6XCI6XCJjb3xhY3xvcmdcIixcInRjXCI6XCJcIixcInRkXCI6XCJibG9nc3BvdFwiLFwidGVsXCI6XCJcIixcInRmXCI6XCJcIixcInRnXCI6XCJcIixcInRoXCI6XCJhY3xjb3xnb3xpbnxtaXxuZXR8b3JcIixcInRqXCI6XCJhY3xiaXp8Y298Y29tfGVkdXxnb3xnb3Z8aW50fG1pbHxuYW1lfG5ldHxuaWN8b3JnfHRlc3R8d2ViXCIsXCJ0a1wiOlwiXCIsXCJ0bFwiOlwiZ292XCIsXCJ0bVwiOlwiY29tfGNvfG9yZ3xuZXR8bm9tfGdvdnxtaWx8ZWR1XCIsXCJ0blwiOlwiY29tfGVuc3xmaW58Z292fGluZHxpbnRsfG5hdHxuZXR8b3JnfGluZm98cGVyc298dG91cmlzbXxlZHVuZXR8cm5ydHxybnN8cm51fG1pbmNvbXxhZ3JpbmV0fGRlZmVuc2V8dHVyZW5cIixcInRvXCI6XCJjb218Z292fG5ldHxvcmd8ZWR1fG1pbHx2cG5wbHVzXCIsXCJ0clwiOlwiY29tfGluZm98Yml6fG5ldHxvcmd8d2VifGdlbnx0dnxhdnxkcnxiYnN8bmFtZXx0ZWx8Z292fGJlbHxwb2x8bWlsfGsxMnxlZHV8a2VwfG5jfGdvdi5uY3xibG9nc3BvdC5jb21cIixcInRyYXZlbFwiOlwiXCIsXCJ0dFwiOlwiY298Y29tfG9yZ3xuZXR8Yml6fGluZm98cHJvfGludHxjb29wfGpvYnN8bW9iaXx0cmF2ZWx8bXVzZXVtfGFlcm98bmFtZXxnb3Z8ZWR1XCIsXCJ0dlwiOlwiZHluZG5zfGJldHRlci10aGFufG9uLXRoZS13ZWJ8d29yc2UtdGhhblwiLFwidHdcIjpcImVkdXxnb3Z8bWlsfGNvbXxuZXR8b3JnfGlkdnxnYW1lfGViaXp8Y2x1Ynx4bi0temYwYW82NGF8eG4tLXVjMGF0dnx4bi0tY3pydzI4YnxteW1haWxlci5jb218dXJsfGJsb2dzcG90fG55bVwiLFwidHpcIjpcImFjfGNvfGdvfGhvdGVsfGluZm98bWV8bWlsfG1vYml8bmV8b3J8c2N8dHZcIixcInVhXCI6XCJjb218ZWR1fGdvdnxpbnxuZXR8b3JnfGNoZXJrYXNzeXxjaGVya2FzeXxjaGVybmlnb3Z8Y2hlcm5paGl2fGNoZXJuaXZ0c2l8Y2hlcm5vdnRzeXxja3xjbnxjcnxjcmltZWF8Y3Z8ZG58ZG5lcHJvcGV0cm92c2t8ZG5pcHJvcGV0cm92c2t8ZG9taW5pY3xkb25ldHNrfGRwfGlmfGl2YW5vLWZyYW5raXZza3xraHxraGFya2l2fGtoYXJrb3Z8a2hlcnNvbnxraG1lbG5pdHNraXl8a2htZWxueXRza3lpfGtpZXZ8a2lyb3ZvZ3JhZHxrbXxrcnxrcnltfGtzfGt2fGt5aXZ8bGd8bHR8bHVnYW5za3xsdXRza3xsdnxsdml2fG1rfG15a29sYWl2fG5pa29sYWV2fG9kfG9kZXNhfG9kZXNzYXxwbHxwb2x0YXZhfHJpdm5lfHJvdm5vfHJ2fHNifHNlYmFzdG9wb2x8c2V2YXN0b3BvbHxzbXxzdW15fHRlfHRlcm5vcGlsfHV6fHV6aGdvcm9kfHZpbm5pY2F8dmlubnl0c2lhfHZufHZvbHlufHlhbHRhfHphcG9yaXpoemhlfHphcG9yaXpoemhpYXx6aGl0b21pcnx6aHl0b215cnx6cHx6dHxjY3xpbmZ8bHRkfGJpenxjb3xwcFwiLFwidWdcIjpcImNvfG9yfGFjfHNjfGdvfG5lfGNvbXxvcmd8YmxvZ3Nwb3R8bm9tXCIsXCJ1a1wiOlwiYWN8Y298Z292fGx0ZHxtZXxuZXR8bmhzfG9yZ3xwbGN8cG9saWNlfCpzY2h8c2VydmljZS5nb3Z8aG9tZW9mZmljZS5nb3Z8YmxvZ3Nwb3QuY298bm8taXAuY298d2VsbGJlaW5nem9uZS5jb1wiLFwidXNcIjpcImRuaXxmZWR8aXNhfGtpZHN8bnNufGFrfGFsfGFyfGFzfGF6fGNhfGNvfGN0fGRjfGRlfGZsfGdhfGd1fGhpfGlhfGlkfGlsfGlufGtzfGt5fGxhfG1hfG1kfG1lfG1pfG1ufG1vfG1zfG10fG5jfG5kfG5lfG5ofG5qfG5tfG52fG55fG9ofG9rfG9yfHBhfHByfHJpfHNjfHNkfHRufHR4fHV0fHZpfHZ0fHZhfHdhfHdpfHd2fHd5fGsxMi5ha3xrMTIuYWx8azEyLmFyfGsxMi5hc3xrMTIuYXp8azEyLmNhfGsxMi5jb3xrMTIuY3R8azEyLmRjfGsxMi5kZXxrMTIuZmx8azEyLmdhfGsxMi5ndXxrMTIuaWF8azEyLmlkfGsxMi5pbHxrMTIuaW58azEyLmtzfGsxMi5reXxrMTIubGF8azEyLm1hfGsxMi5tZHxrMTIubWV8azEyLm1pfGsxMi5tbnxrMTIubW98azEyLm1zfGsxMi5tdHxrMTIubmN8azEyLm5lfGsxMi5uaHxrMTIubmp8azEyLm5tfGsxMi5udnxrMTIubnl8azEyLm9ofGsxMi5va3xrMTIub3J8azEyLnBhfGsxMi5wcnxrMTIucml8azEyLnNjfGsxMi50bnxrMTIudHh8azEyLnV0fGsxMi52aXxrMTIudnR8azEyLnZhfGsxMi53YXxrMTIud2l8azEyLnd5fGNjLmFrfGNjLmFsfGNjLmFyfGNjLmFzfGNjLmF6fGNjLmNhfGNjLmNvfGNjLmN0fGNjLmRjfGNjLmRlfGNjLmZsfGNjLmdhfGNjLmd1fGNjLmhpfGNjLmlhfGNjLmlkfGNjLmlsfGNjLmlufGNjLmtzfGNjLmt5fGNjLmxhfGNjLm1hfGNjLm1kfGNjLm1lfGNjLm1pfGNjLm1ufGNjLm1vfGNjLm1zfGNjLm10fGNjLm5jfGNjLm5kfGNjLm5lfGNjLm5ofGNjLm5qfGNjLm5tfGNjLm52fGNjLm55fGNjLm9ofGNjLm9rfGNjLm9yfGNjLnBhfGNjLnByfGNjLnJpfGNjLnNjfGNjLnNkfGNjLnRufGNjLnR4fGNjLnV0fGNjLnZpfGNjLnZ0fGNjLnZhfGNjLndhfGNjLndpfGNjLnd2fGNjLnd5fGxpYi5ha3xsaWIuYWx8bGliLmFyfGxpYi5hc3xsaWIuYXp8bGliLmNhfGxpYi5jb3xsaWIuY3R8bGliLmRjfGxpYi5mbHxsaWIuZ2F8bGliLmd1fGxpYi5oaXxsaWIuaWF8bGliLmlkfGxpYi5pbHxsaWIuaW58bGliLmtzfGxpYi5reXxsaWIubGF8bGliLm1hfGxpYi5tZHxsaWIubWV8bGliLm1pfGxpYi5tbnxsaWIubW98bGliLm1zfGxpYi5tdHxsaWIubmN8bGliLm5kfGxpYi5uZXxsaWIubmh8bGliLm5qfGxpYi5ubXxsaWIubnZ8bGliLm55fGxpYi5vaHxsaWIub2t8bGliLm9yfGxpYi5wYXxsaWIucHJ8bGliLnJpfGxpYi5zY3xsaWIuc2R8bGliLnRufGxpYi50eHxsaWIudXR8bGliLnZpfGxpYi52dHxsaWIudmF8bGliLndhfGxpYi53aXxsaWIud3l8cHZ0LmsxMi5tYXxjaHRyLmsxMi5tYXxwYXJvY2guazEyLm1hfGNsb3VkbnN8ZHJ1ZHxpcy1ieXxsYW5kLTQtc2FsZXxzdHVmZi00LXNhbGV8Z29sZmZhbnxub2lwfHBvaW50dG98bGliLmRlXCIsXCJ1eVwiOlwiY29tfGVkdXxndWJ8bWlsfG5ldHxvcmd8YmxvZ3Nwb3QuY29tfG5vbVwiLFwidXpcIjpcImNvfGNvbXxuZXR8b3JnXCIsXCJ2YVwiOlwiXCIsXCJ2Y1wiOlwiY29tfG5ldHxvcmd8Z292fG1pbHxlZHV8bm9tXCIsXCJ2ZVwiOlwiYXJ0c3xjb3xjb218ZTEyfGVkdXxmaXJtfGdvYnxnb3Z8aW5mb3xpbnR8bWlsfG5ldHxvcmd8cmVjfHN0b3JlfHRlY3x3ZWJcIixcInZnXCI6XCJub21cIixcInZpXCI6XCJjb3xjb218azEyfG5ldHxvcmdcIixcInZuXCI6XCJjb218bmV0fG9yZ3xlZHV8Z292fGludHxhY3xiaXp8aW5mb3xuYW1lfHByb3xoZWFsdGh8YmxvZ3Nwb3RcIixcInZ1XCI6XCJjb218ZWR1fG5ldHxvcmdcIixcIndmXCI6XCJcIixcIndzXCI6XCJjb218bmV0fG9yZ3xnb3Z8ZWR1fCphZHZpc29yfGR5bmRuc3xteXBldHNcIixcInl0XCI6XCJcIixcInhuLS1tZ2JhYW03YThoXCI6XCJcIixcInhuLS15OWEzYXFcIjpcIlwiLFwieG4tLTU0YjdmdGEwY2NcIjpcIlwiLFwieG4tLTkwYWVcIjpcIlwiLFwieG4tLTkwYWlzXCI6XCJcIixcInhuLS1maXFzOHNcIjpcIlwiLFwieG4tLWZpcXo5c1wiOlwiXCIsXCJ4bi0tbGdiYmF0MWFkOGpcIjpcIlwiLFwieG4tLXdnYmgxY1wiOlwiXCIsXCJ4bi0tZTFhNGNcIjpcIlwiLFwieG4tLW5vZGVcIjpcIlwiLFwieG4tLXF4YW1cIjpcIlwiLFwieG4tLWo2dzE5M2dcIjpcIlwiLFwieG4tLTJzY3JqOWNcIjpcIlwiLFwieG4tLTNoY3JqOWNcIjpcIlwiLFwieG4tLTQ1YnI1Y3lsXCI6XCJcIixcInhuLS1oMmJyZWczZXZlXCI6XCJcIixcInhuLS1oMmJyajljOGNcIjpcIlwiLFwieG4tLW1nYmd1ODJhXCI6XCJcIixcInhuLS1ydmMxZTBhbTNlXCI6XCJcIixcInhuLS1oMmJyajljXCI6XCJcIixcInhuLS1tZ2JiaDFhNzFlXCI6XCJcIixcInhuLS1mcGNyajljM2RcIjpcIlwiLFwieG4tLWdlY3JqOWNcIjpcIlwiLFwieG4tLXM5YnJqOWNcIjpcIlwiLFwieG4tLTQ1YnJqOWNcIjpcIlwiLFwieG4tLXhrYzJkbDNhNWVlMGhcIjpcIlwiLFwieG4tLW1nYmEzYTRmMTZhXCI6XCJcIixcInhuLS1tZ2JhM2E0ZnJhXCI6XCJcIixcInhuLS1tZ2J0eDJiXCI6XCJcIixcInhuLS1tZ2JheWg3Z3BhXCI6XCJcIixcInhuLS0zZTBiNzA3ZVwiOlwiXCIsXCJ4bi0tODBhbzIxYVwiOlwiXCIsXCJ4bi0tZnpjMmM5ZTJjXCI6XCJcIixcInhuLS14a2MyYWwzaHllMmFcIjpcIlwiLFwieG4tLW1nYmMwYTlhemNnXCI6XCJcIixcInhuLS1kMWFsZlwiOlwiXCIsXCJ4bi0tbDFhY2NcIjpcIlwiLFwieG4tLW1peDg5MWZcIjpcIlwiLFwieG4tLW1peDA4MmZcIjpcIlwiLFwieG4tLW1nYng0Y2QwYWJcIjpcIlwiLFwieG4tLW1nYjlhd2JmXCI6XCJcIixcInhuLS1tZ2JhaTlhemdxcDZqXCI6XCJcIixcInhuLS1tZ2JhaTlhNWV2YTAwYlwiOlwiXCIsXCJ4bi0teWdiaTJhbW14XCI6XCJcIixcInhuLS05MGEzYWNcIjpcInhuLS1vMWFjfHhuLS1jMWF2Z3x4bi0tOTBhemh8eG4tLWQxYXR8eG4tLW8xYWNofHhuLS04MGF1XCIsXCJ4bi0tcDFhaVwiOlwiXCIsXCJ4bi0td2dibDZhXCI6XCJcIixcInhuLS1tZ2JlcnA0YTVkNGFyXCI6XCJcIixcInhuLS1tZ2JlcnA0YTVkNGE4N2dcIjpcIlwiLFwieG4tLW1nYnFseTdjMGE2N2ZiY1wiOlwiXCIsXCJ4bi0tbWdicWx5N2N2YWZyXCI6XCJcIixcInhuLS1tZ2JwbDJmaFwiOlwiXCIsXCJ4bi0teWZybzRpNjdvXCI6XCJcIixcInhuLS1jbGNoYzBlYTBiMmcyYTlnY2RcIjpcIlwiLFwieG4tLW9nYnBmOGZsXCI6XCJcIixcInhuLS1tZ2J0ZjhmbFwiOlwiXCIsXCJ4bi0tbzNjdzRoXCI6XCJ4bi0tMTJjMWZlMGJyfHhuLS0xMmNvMGMzYjRldmF8eG4tLWgzY3V6azFkaXx4bi0tbzNjeXgyYXx4bi0tbTNjaDBqM2F8eG4tLTEyY2ZpOGl4YjhsXCIsXCJ4bi0tcGdiczBkaFwiOlwiXCIsXCJ4bi0ta3ByeTU3ZFwiOlwiXCIsXCJ4bi0ta3BydzEzZFwiOlwiXCIsXCJ4bi0tbm54Mzg4YVwiOlwiXCIsXCJ4bi0tajFhbWhcIjpcIlwiLFwieG4tLW1nYjJkZGVzXCI6XCJcIixcInh4eFwiOlwiXCIsXCJ5ZVwiOlwiKlwiLFwiemFcIjpcImFjfGFncmljfGFsdHxjb3xlZHV8Z292fGdyb25kYXJ8bGF3fG1pbHxuZXR8bmdvfG5pc3xub218b3JnfHNjaG9vbHx0bXx3ZWJ8YmxvZ3Nwb3QuY29cIixcInptXCI6XCJhY3xiaXp8Y298Y29tfGVkdXxnb3Z8aW5mb3xtaWx8bmV0fG9yZ3xzY2hcIixcInp3XCI6XCJhY3xjb3xnb3Z8bWlsfG9yZ1wiLFwiYWFhXCI6XCJcIixcImFhcnBcIjpcIlwiLFwiYWJhcnRoXCI6XCJcIixcImFiYlwiOlwiXCIsXCJhYmJvdHRcIjpcIlwiLFwiYWJidmllXCI6XCJcIixcImFiY1wiOlwiXCIsXCJhYmxlXCI6XCJcIixcImFib2dhZG9cIjpcIlwiLFwiYWJ1ZGhhYmlcIjpcIlwiLFwiYWNhZGVteVwiOlwiXCIsXCJhY2NlbnR1cmVcIjpcIlwiLFwiYWNjb3VudGFudFwiOlwiXCIsXCJhY2NvdW50YW50c1wiOlwiXCIsXCJhY29cIjpcIlwiLFwiYWN0aXZlXCI6XCJcIixcImFjdG9yXCI6XCJcIixcImFkYWNcIjpcIlwiLFwiYWRzXCI6XCJcIixcImFkdWx0XCI6XCJcIixcImFlZ1wiOlwiXCIsXCJhZXRuYVwiOlwiXCIsXCJhZmFtaWx5Y29tcGFueVwiOlwiXCIsXCJhZmxcIjpcIlwiLFwiYWZyaWNhXCI6XCJcIixcImFnYWtoYW5cIjpcIlwiLFwiYWdlbmN5XCI6XCJcIixcImFpZ1wiOlwiXCIsXCJhaWdvXCI6XCJcIixcImFpcmJ1c1wiOlwiXCIsXCJhaXJmb3JjZVwiOlwiXCIsXCJhaXJ0ZWxcIjpcIlwiLFwiYWtkblwiOlwiXCIsXCJhbGZhcm9tZW9cIjpcIlwiLFwiYWxpYmFiYVwiOlwiXCIsXCJhbGlwYXlcIjpcIlwiLFwiYWxsZmluYW56XCI6XCJcIixcImFsbHN0YXRlXCI6XCJcIixcImFsbHlcIjpcIlwiLFwiYWxzYWNlXCI6XCJcIixcImFsc3RvbVwiOlwiXCIsXCJhbWVyaWNhbmV4cHJlc3NcIjpcIlwiLFwiYW1lcmljYW5mYW1pbHlcIjpcIlwiLFwiYW1leFwiOlwiXCIsXCJhbWZhbVwiOlwiXCIsXCJhbWljYVwiOlwiXCIsXCJhbXN0ZXJkYW1cIjpcIlwiLFwiYW5hbHl0aWNzXCI6XCJcIixcImFuZHJvaWRcIjpcIlwiLFwiYW5xdWFuXCI6XCJcIixcImFuelwiOlwiXCIsXCJhb2xcIjpcIlwiLFwiYXBhcnRtZW50c1wiOlwiXCIsXCJhcHBcIjpcIlwiLFwiYXBwbGVcIjpcIlwiLFwiYXF1YXJlbGxlXCI6XCJcIixcImFyYWJcIjpcIlwiLFwiYXJhbWNvXCI6XCJcIixcImFyY2hpXCI6XCJcIixcImFybXlcIjpcIlwiLFwiYXJ0XCI6XCJcIixcImFydGVcIjpcIlwiLFwiYXNkYVwiOlwiXCIsXCJhc3NvY2lhdGVzXCI6XCJcIixcImF0aGxldGFcIjpcIlwiLFwiYXR0b3JuZXlcIjpcIlwiLFwiYXVjdGlvblwiOlwiXCIsXCJhdWRpXCI6XCJcIixcImF1ZGlibGVcIjpcIlwiLFwiYXVkaW9cIjpcIlwiLFwiYXVzcG9zdFwiOlwiXCIsXCJhdXRob3JcIjpcIlwiLFwiYXV0b1wiOlwiXCIsXCJhdXRvc1wiOlwiXCIsXCJhdmlhbmNhXCI6XCJcIixcImF3c1wiOlwiXCIsXCJheGFcIjpcIlwiLFwiYXp1cmVcIjpcIlwiLFwiYmFieVwiOlwiXCIsXCJiYWlkdVwiOlwiXCIsXCJiYW5hbWV4XCI6XCJcIixcImJhbmFuYXJlcHVibGljXCI6XCJcIixcImJhbmRcIjpcIlwiLFwiYmFua1wiOlwiXCIsXCJiYXJcIjpcIlwiLFwiYmFyY2Vsb25hXCI6XCJcIixcImJhcmNsYXljYXJkXCI6XCJcIixcImJhcmNsYXlzXCI6XCJcIixcImJhcmVmb290XCI6XCJcIixcImJhcmdhaW5zXCI6XCJcIixcImJhc2ViYWxsXCI6XCJcIixcImJhc2tldGJhbGxcIjpcIlwiLFwiYmF1aGF1c1wiOlwiXCIsXCJiYXllcm5cIjpcIlwiLFwiYmJjXCI6XCJcIixcImJidFwiOlwiXCIsXCJiYnZhXCI6XCJcIixcImJjZ1wiOlwiXCIsXCJiY25cIjpcIlwiLFwiYmVhdHNcIjpcIlwiLFwiYmVhdXR5XCI6XCJcIixcImJlZXJcIjpcIlwiLFwiYmVudGxleVwiOlwiXCIsXCJiZXJsaW5cIjpcIlwiLFwiYmVzdFwiOlwiXCIsXCJiZXN0YnV5XCI6XCJcIixcImJldFwiOlwiXCIsXCJiaGFydGlcIjpcIlwiLFwiYmlibGVcIjpcIlwiLFwiYmlkXCI6XCJcIixcImJpa2VcIjpcIlwiLFwiYmluZ1wiOlwiXCIsXCJiaW5nb1wiOlwiXCIsXCJiaW9cIjpcIlwiLFwiYmxhY2tcIjpcIlwiLFwiYmxhY2tmcmlkYXlcIjpcIlwiLFwiYmxhbmNvXCI6XCJcIixcImJsb2NrYnVzdGVyXCI6XCJcIixcImJsb2dcIjpcIlwiLFwiYmxvb21iZXJnXCI6XCJcIixcImJsdWVcIjpcIlwiLFwiYm1zXCI6XCJcIixcImJtd1wiOlwiXCIsXCJibmxcIjpcIlwiLFwiYm5wcGFyaWJhc1wiOlwiXCIsXCJib2F0c1wiOlwiXCIsXCJib2VocmluZ2VyXCI6XCJcIixcImJvZmFcIjpcIlwiLFwiYm9tXCI6XCJcIixcImJvbmRcIjpcIlwiLFwiYm9vXCI6XCJcIixcImJvb2tcIjpcIlwiLFwiYm9va2luZ1wiOlwiXCIsXCJib290c1wiOlwiXCIsXCJib3NjaFwiOlwiXCIsXCJib3N0aWtcIjpcIlwiLFwiYm9zdG9uXCI6XCJcIixcImJvdFwiOlwiXCIsXCJib3V0aXF1ZVwiOlwiXCIsXCJib3hcIjpcIlwiLFwiYnJhZGVzY29cIjpcIlwiLFwiYnJpZGdlc3RvbmVcIjpcIlwiLFwiYnJvYWR3YXlcIjpcIlwiLFwiYnJva2VyXCI6XCJcIixcImJyb3RoZXJcIjpcIlwiLFwiYnJ1c3NlbHNcIjpcIlwiLFwiYnVkYXBlc3RcIjpcIlwiLFwiYnVnYXR0aVwiOlwiXCIsXCJidWlsZFwiOlwiXCIsXCJidWlsZGVyc1wiOlwiXCIsXCJidXNpbmVzc1wiOlwiXCIsXCJidXlcIjpcIlwiLFwiYnV6elwiOlwiXCIsXCJiemhcIjpcIlwiLFwiY2FiXCI6XCJcIixcImNhZmVcIjpcIlwiLFwiY2FsXCI6XCJcIixcImNhbGxcIjpcIlwiLFwiY2Fsdmlua2xlaW5cIjpcIlwiLFwiY2FtXCI6XCJcIixcImNhbWVyYVwiOlwiXCIsXCJjYW1wXCI6XCJcIixcImNhbmNlcnJlc2VhcmNoXCI6XCJcIixcImNhbm9uXCI6XCJcIixcImNhcGV0b3duXCI6XCJcIixcImNhcGl0YWxcIjpcIlwiLFwiY2FwaXRhbG9uZVwiOlwiXCIsXCJjYXJcIjpcIlwiLFwiY2FyYXZhblwiOlwiXCIsXCJjYXJkc1wiOlwiXCIsXCJjYXJlXCI6XCJcIixcImNhcmVlclwiOlwiXCIsXCJjYXJlZXJzXCI6XCJcIixcImNhcnNcIjpcIlwiLFwiY2FydGllclwiOlwiXCIsXCJjYXNhXCI6XCJcIixcImNhc2VcIjpcIlwiLFwiY2FzZWloXCI6XCJcIixcImNhc2hcIjpcIlwiLFwiY2FzaW5vXCI6XCJcIixcImNhdGVyaW5nXCI6XCJcIixcImNhdGhvbGljXCI6XCJcIixcImNiYVwiOlwiXCIsXCJjYm5cIjpcIlwiLFwiY2JyZVwiOlwiXCIsXCJjYnNcIjpcIlwiLFwiY2ViXCI6XCJcIixcImNlbnRlclwiOlwiXCIsXCJjZW9cIjpcIlwiLFwiY2VyblwiOlwiXCIsXCJjZmFcIjpcIlwiLFwiY2ZkXCI6XCJcIixcImNoYW5lbFwiOlwiXCIsXCJjaGFubmVsXCI6XCJcIixcImNoYXNlXCI6XCJcIixcImNoYXRcIjpcIlwiLFwiY2hlYXBcIjpcIlwiLFwiY2hpbnRhaVwiOlwiXCIsXCJjaGxvZVwiOlwiXCIsXCJjaHJpc3RtYXNcIjpcIlwiLFwiY2hyb21lXCI6XCJcIixcImNocnlzbGVyXCI6XCJcIixcImNodXJjaFwiOlwiXCIsXCJjaXByaWFuaVwiOlwiXCIsXCJjaXJjbGVcIjpcIlwiLFwiY2lzY29cIjpcIlwiLFwiY2l0YWRlbFwiOlwiXCIsXCJjaXRpXCI6XCJcIixcImNpdGljXCI6XCJcIixcImNpdHlcIjpcIlwiLFwiY2l0eWVhdHNcIjpcIlwiLFwiY2xhaW1zXCI6XCJcIixcImNsZWFuaW5nXCI6XCJcIixcImNsaWNrXCI6XCJcIixcImNsaW5pY1wiOlwiXCIsXCJjbGluaXF1ZVwiOlwiXCIsXCJjbG90aGluZ1wiOlwiXCIsXCJjbG91ZFwiOlwibXlmdXNpb258KnN0YXRpY3N8Km1hZ2VudG9zaXRlfHZhcG9yfCpzZW5zaW9zaXRlfHRyYWZmaWNwbGV4XCIsXCJjbHViXCI6XCJjbG91ZG5zXCIsXCJjbHVibWVkXCI6XCJcIixcImNvYWNoXCI6XCJcIixcImNvZGVzXCI6XCJcIixcImNvZmZlZVwiOlwiXCIsXCJjb2xsZWdlXCI6XCJcIixcImNvbG9nbmVcIjpcIlwiLFwiY29tY2FzdFwiOlwiXCIsXCJjb21tYmFua1wiOlwiXCIsXCJjb21tdW5pdHlcIjpcIlwiLFwiY29tcGFueVwiOlwiXCIsXCJjb21wYXJlXCI6XCJcIixcImNvbXB1dGVyXCI6XCJcIixcImNvbXNlY1wiOlwiXCIsXCJjb25kb3NcIjpcIlwiLFwiY29uc3RydWN0aW9uXCI6XCJcIixcImNvbnN1bHRpbmdcIjpcIlwiLFwiY29udGFjdFwiOlwiXCIsXCJjb250cmFjdG9yc1wiOlwiXCIsXCJjb29raW5nXCI6XCJcIixcImNvb2tpbmdjaGFubmVsXCI6XCJcIixcImNvb2xcIjpcImRlXCIsXCJjb3JzaWNhXCI6XCJcIixcImNvdW50cnlcIjpcIlwiLFwiY291cG9uXCI6XCJcIixcImNvdXBvbnNcIjpcIlwiLFwiY291cnNlc1wiOlwiXCIsXCJjcmVkaXRcIjpcIlwiLFwiY3JlZGl0Y2FyZFwiOlwiXCIsXCJjcmVkaXR1bmlvblwiOlwiXCIsXCJjcmlja2V0XCI6XCJcIixcImNyb3duXCI6XCJcIixcImNyc1wiOlwiXCIsXCJjcnVpc2VcIjpcIlwiLFwiY3J1aXNlc1wiOlwiXCIsXCJjc2NcIjpcIlwiLFwiY3Vpc2luZWxsYVwiOlwiXCIsXCJjeW1ydVwiOlwiXCIsXCJjeW91XCI6XCJcIixcImRhYnVyXCI6XCJcIixcImRhZFwiOlwiXCIsXCJkYW5jZVwiOlwiXCIsXCJkYXRhXCI6XCJcIixcImRhdGVcIjpcIlwiLFwiZGF0aW5nXCI6XCJcIixcImRhdHN1blwiOlwiXCIsXCJkYXlcIjpcIlwiLFwiZGNsa1wiOlwiXCIsXCJkZHNcIjpcIlwiLFwiZGVhbFwiOlwiXCIsXCJkZWFsZXJcIjpcIlwiLFwiZGVhbHNcIjpcIlwiLFwiZGVncmVlXCI6XCJcIixcImRlbGl2ZXJ5XCI6XCJcIixcImRlbGxcIjpcIlwiLFwiZGVsb2l0dGVcIjpcIlwiLFwiZGVsdGFcIjpcIlwiLFwiZGVtb2NyYXRcIjpcIlwiLFwiZGVudGFsXCI6XCJcIixcImRlbnRpc3RcIjpcIlwiLFwiZGVzaVwiOlwiXCIsXCJkZXNpZ25cIjpcIlwiLFwiZGV2XCI6XCJcIixcImRobFwiOlwiXCIsXCJkaWFtb25kc1wiOlwiXCIsXCJkaWV0XCI6XCJcIixcImRpZ2l0YWxcIjpcIlwiLFwiZGlyZWN0XCI6XCJcIixcImRpcmVjdG9yeVwiOlwiXCIsXCJkaXNjb3VudFwiOlwiXCIsXCJkaXNjb3ZlclwiOlwiXCIsXCJkaXNoXCI6XCJcIixcImRpeVwiOlwiXCIsXCJkbnBcIjpcIlwiLFwiZG9jc1wiOlwiXCIsXCJkb2N0b3JcIjpcIlwiLFwiZG9kZ2VcIjpcIlwiLFwiZG9nXCI6XCJcIixcImRvaGFcIjpcIlwiLFwiZG9tYWluc1wiOlwiXCIsXCJkb3RcIjpcIlwiLFwiZG93bmxvYWRcIjpcIlwiLFwiZHJpdmVcIjpcIlwiLFwiZHR2XCI6XCJcIixcImR1YmFpXCI6XCJcIixcImR1Y2tcIjpcIlwiLFwiZHVubG9wXCI6XCJcIixcImR1bnNcIjpcIlwiLFwiZHVwb250XCI6XCJcIixcImR1cmJhblwiOlwiXCIsXCJkdmFnXCI6XCJcIixcImR2clwiOlwiXCIsXCJlYXJ0aFwiOlwiXCIsXCJlYXRcIjpcIlwiLFwiZWNvXCI6XCJcIixcImVkZWthXCI6XCJcIixcImVkdWNhdGlvblwiOlwiXCIsXCJlbWFpbFwiOlwiXCIsXCJlbWVyY2tcIjpcIlwiLFwiZW5lcmd5XCI6XCJcIixcImVuZ2luZWVyXCI6XCJcIixcImVuZ2luZWVyaW5nXCI6XCJcIixcImVudGVycHJpc2VzXCI6XCJcIixcImVwb3N0XCI6XCJcIixcImVwc29uXCI6XCJcIixcImVxdWlwbWVudFwiOlwiXCIsXCJlcmljc3NvblwiOlwiXCIsXCJlcm5pXCI6XCJcIixcImVzcVwiOlwiXCIsXCJlc3RhdGVcIjpcIipjb21wdXRlXCIsXCJlc3VyYW5jZVwiOlwiXCIsXCJldGlzYWxhdFwiOlwiXCIsXCJldXJvdmlzaW9uXCI6XCJcIixcImV1c1wiOlwidXNlci5wYXJ0eVwiLFwiZXZlbnRzXCI6XCJcIixcImV2ZXJiYW5rXCI6XCJcIixcImV4Y2hhbmdlXCI6XCJcIixcImV4cGVydFwiOlwiXCIsXCJleHBvc2VkXCI6XCJcIixcImV4cHJlc3NcIjpcIlwiLFwiZXh0cmFzcGFjZVwiOlwiXCIsXCJmYWdlXCI6XCJcIixcImZhaWxcIjpcIlwiLFwiZmFpcndpbmRzXCI6XCJcIixcImZhaXRoXCI6XCJ5Ym9cIixcImZhbWlseVwiOlwiXCIsXCJmYW5cIjpcIlwiLFwiZmFuc1wiOlwiXCIsXCJmYXJtXCI6XCJzdG9yalwiLFwiZmFybWVyc1wiOlwiXCIsXCJmYXNoaW9uXCI6XCJcIixcImZhc3RcIjpcIlwiLFwiZmVkZXhcIjpcIlwiLFwiZmVlZGJhY2tcIjpcIlwiLFwiZmVycmFyaVwiOlwiXCIsXCJmZXJyZXJvXCI6XCJcIixcImZpYXRcIjpcIlwiLFwiZmlkZWxpdHlcIjpcIlwiLFwiZmlkb1wiOlwiXCIsXCJmaWxtXCI6XCJcIixcImZpbmFsXCI6XCJcIixcImZpbmFuY2VcIjpcIlwiLFwiZmluYW5jaWFsXCI6XCJcIixcImZpcmVcIjpcIlwiLFwiZmlyZXN0b25lXCI6XCJcIixcImZpcm1kYWxlXCI6XCJcIixcImZpc2hcIjpcIlwiLFwiZmlzaGluZ1wiOlwiXCIsXCJmaXRcIjpcInB0cGx1c1wiLFwiZml0bmVzc1wiOlwiXCIsXCJmbGlja3JcIjpcIlwiLFwiZmxpZ2h0c1wiOlwiXCIsXCJmbGlyXCI6XCJcIixcImZsb3Jpc3RcIjpcIlwiLFwiZmxvd2Vyc1wiOlwiXCIsXCJmbHlcIjpcIlwiLFwiZm9vXCI6XCJcIixcImZvb2RcIjpcIlwiLFwiZm9vZG5ldHdvcmtcIjpcIlwiLFwiZm9vdGJhbGxcIjpcIlwiLFwiZm9yZFwiOlwiXCIsXCJmb3JleFwiOlwiXCIsXCJmb3JzYWxlXCI6XCJcIixcImZvcnVtXCI6XCJcIixcImZvdW5kYXRpb25cIjpcIlwiLFwiZm94XCI6XCJcIixcImZyZWVcIjpcIlwiLFwiZnJlc2VuaXVzXCI6XCJcIixcImZybFwiOlwiXCIsXCJmcm9nYW5zXCI6XCJcIixcImZyb250ZG9vclwiOlwiXCIsXCJmcm9udGllclwiOlwiXCIsXCJmdHJcIjpcIlwiLFwiZnVqaXRzdVwiOlwiXCIsXCJmdWppeGVyb3hcIjpcIlwiLFwiZnVuXCI6XCJcIixcImZ1bmRcIjpcIlwiLFwiZnVybml0dXJlXCI6XCJcIixcImZ1dGJvbFwiOlwiXCIsXCJmeWlcIjpcIlwiLFwiZ2FsXCI6XCJcIixcImdhbGxlcnlcIjpcIlwiLFwiZ2FsbG9cIjpcIlwiLFwiZ2FsbHVwXCI6XCJcIixcImdhbWVcIjpcIlwiLFwiZ2FtZXNcIjpcIlwiLFwiZ2FwXCI6XCJcIixcImdhcmRlblwiOlwiXCIsXCJnYml6XCI6XCJcIixcImdkblwiOlwiXCIsXCJnZWFcIjpcIlwiLFwiZ2VudFwiOlwiXCIsXCJnZW50aW5nXCI6XCJcIixcImdlb3JnZVwiOlwiXCIsXCJnZ2VlXCI6XCJcIixcImdpZnRcIjpcIlwiLFwiZ2lmdHNcIjpcIlwiLFwiZ2l2ZXNcIjpcIlwiLFwiZ2l2aW5nXCI6XCJcIixcImdsYWRlXCI6XCJcIixcImdsYXNzXCI6XCJcIixcImdsZVwiOlwiXCIsXCJnbG9iYWxcIjpcIlwiLFwiZ2xvYm9cIjpcIlwiLFwiZ21haWxcIjpcIlwiLFwiZ21iaFwiOlwiXCIsXCJnbW9cIjpcIlwiLFwiZ214XCI6XCJcIixcImdvZGFkZHlcIjpcIlwiLFwiZ29sZFwiOlwiXCIsXCJnb2xkcG9pbnRcIjpcIlwiLFwiZ29sZlwiOlwiXCIsXCJnb29cIjpcIlwiLFwiZ29vZGhhbmRzXCI6XCJcIixcImdvb2R5ZWFyXCI6XCJcIixcImdvb2dcIjpcImNsb3VkXCIsXCJnb29nbGVcIjpcIlwiLFwiZ29wXCI6XCJcIixcImdvdFwiOlwiXCIsXCJncmFpbmdlclwiOlwiXCIsXCJncmFwaGljc1wiOlwiXCIsXCJncmF0aXNcIjpcIlwiLFwiZ3JlZW5cIjpcIlwiLFwiZ3JpcGVcIjpcIlwiLFwiZ3JvY2VyeVwiOlwiXCIsXCJncm91cFwiOlwiXCIsXCJndWFyZGlhblwiOlwiXCIsXCJndWNjaVwiOlwiXCIsXCJndWdlXCI6XCJcIixcImd1aWRlXCI6XCJcIixcImd1aXRhcnNcIjpcIlwiLFwiZ3VydVwiOlwiXCIsXCJoYWlyXCI6XCJcIixcImhhbWJ1cmdcIjpcIlwiLFwiaGFuZ291dFwiOlwiXCIsXCJoYXVzXCI6XCJcIixcImhib1wiOlwiXCIsXCJoZGZjXCI6XCJcIixcImhkZmNiYW5rXCI6XCJcIixcImhlYWx0aFwiOlwiXCIsXCJoZWFsdGhjYXJlXCI6XCJcIixcImhlbHBcIjpcIlwiLFwiaGVsc2lua2lcIjpcIlwiLFwiaGVyZVwiOlwiXCIsXCJoZXJtZXNcIjpcIlwiLFwiaGd0dlwiOlwiXCIsXCJoaXBob3BcIjpcIlwiLFwiaGlzYW1pdHN1XCI6XCJcIixcImhpdGFjaGlcIjpcIlwiLFwiaGl2XCI6XCJcIixcImhrdFwiOlwiXCIsXCJob2NrZXlcIjpcIlwiLFwiaG9sZGluZ3NcIjpcIlwiLFwiaG9saWRheVwiOlwiXCIsXCJob21lZGVwb3RcIjpcIlwiLFwiaG9tZWdvb2RzXCI6XCJcIixcImhvbWVzXCI6XCJcIixcImhvbWVzZW5zZVwiOlwiXCIsXCJob25kYVwiOlwiXCIsXCJob25leXdlbGxcIjpcIlwiLFwiaG9yc2VcIjpcIlwiLFwiaG9zcGl0YWxcIjpcIlwiLFwiaG9zdFwiOlwiY2xvdWRhY2Nlc3N8ZnJlZXNpdGVcIixcImhvc3RpbmdcIjpcIm9wZW5jcmFmdFwiLFwiaG90XCI6XCJcIixcImhvdGVsZXNcIjpcIlwiLFwiaG90ZWxzXCI6XCJcIixcImhvdG1haWxcIjpcIlwiLFwiaG91c2VcIjpcIlwiLFwiaG93XCI6XCJcIixcImhzYmNcIjpcIlwiLFwiaHRjXCI6XCJcIixcImh1Z2hlc1wiOlwiXCIsXCJoeWF0dFwiOlwiXCIsXCJoeXVuZGFpXCI6XCJcIixcImlibVwiOlwiXCIsXCJpY2JjXCI6XCJcIixcImljZVwiOlwiXCIsXCJpY3VcIjpcIlwiLFwiaWVlZVwiOlwiXCIsXCJpZm1cIjpcIlwiLFwiaWthbm9cIjpcIlwiLFwiaW1hbWF0XCI6XCJcIixcImltZGJcIjpcIlwiLFwiaW1tb1wiOlwiXCIsXCJpbW1vYmlsaWVuXCI6XCJcIixcImluZHVzdHJpZXNcIjpcIlwiLFwiaW5maW5pdGlcIjpcIlwiLFwiaW5nXCI6XCJcIixcImlua1wiOlwiXCIsXCJpbnN0aXR1dGVcIjpcIlwiLFwiaW5zdXJhbmNlXCI6XCJcIixcImluc3VyZVwiOlwiXCIsXCJpbnRlbFwiOlwiXCIsXCJpbnRlcm5hdGlvbmFsXCI6XCJcIixcImludHVpdFwiOlwiXCIsXCJpbnZlc3RtZW50c1wiOlwiXCIsXCJpcGlyYW5nYVwiOlwiXCIsXCJpcmlzaFwiOlwiXCIsXCJpc2VsZWN0XCI6XCJcIixcImlzbWFpbGlcIjpcIlwiLFwiaXN0XCI6XCJcIixcImlzdGFuYnVsXCI6XCJcIixcIml0YXVcIjpcIlwiLFwiaXR2XCI6XCJcIixcIml2ZWNvXCI6XCJcIixcIml3Y1wiOlwiXCIsXCJqYWd1YXJcIjpcIlwiLFwiamF2YVwiOlwiXCIsXCJqY2JcIjpcIlwiLFwiamNwXCI6XCJcIixcImplZXBcIjpcIlwiLFwiamV0enRcIjpcIlwiLFwiamV3ZWxyeVwiOlwiXCIsXCJqaW9cIjpcIlwiLFwiamxjXCI6XCJcIixcImpsbFwiOlwiXCIsXCJqbXBcIjpcIlwiLFwiam5qXCI6XCJcIixcImpvYnVyZ1wiOlwiXCIsXCJqb3RcIjpcIlwiLFwiam95XCI6XCJcIixcImpwbW9yZ2FuXCI6XCJcIixcImpwcnNcIjpcIlwiLFwianVlZ29zXCI6XCJcIixcImp1bmlwZXJcIjpcIlwiLFwia2F1ZmVuXCI6XCJcIixcImtkZGlcIjpcIlwiLFwia2Vycnlob3RlbHNcIjpcIlwiLFwia2Vycnlsb2dpc3RpY3NcIjpcIlwiLFwia2Vycnlwcm9wZXJ0aWVzXCI6XCJcIixcImtmaFwiOlwiXCIsXCJraWFcIjpcIlwiLFwia2ltXCI6XCJcIixcImtpbmRlclwiOlwiXCIsXCJraW5kbGVcIjpcIlwiLFwia2l0Y2hlblwiOlwiXCIsXCJraXdpXCI6XCJcIixcImtvZWxuXCI6XCJcIixcImtvbWF0c3VcIjpcIlwiLFwia29zaGVyXCI6XCJcIixcImtwbWdcIjpcIlwiLFwia3BuXCI6XCJcIixcImtyZFwiOlwiY298ZWR1XCIsXCJrcmVkXCI6XCJcIixcImt1b2tncm91cFwiOlwiXCIsXCJreW90b1wiOlwiXCIsXCJsYWNhaXhhXCI6XCJcIixcImxhZGJyb2tlc1wiOlwiXCIsXCJsYW1ib3JnaGluaVwiOlwiXCIsXCJsYW1lclwiOlwiXCIsXCJsYW5jYXN0ZXJcIjpcIlwiLFwibGFuY2lhXCI6XCJcIixcImxhbmNvbWVcIjpcIlwiLFwibGFuZFwiOlwic3RhdGljfGRldi5zdGF0aWN8c2l0ZXMuc3RhdGljXCIsXCJsYW5kcm92ZXJcIjpcIlwiLFwibGFueGVzc1wiOlwiXCIsXCJsYXNhbGxlXCI6XCJcIixcImxhdFwiOlwiXCIsXCJsYXRpbm9cIjpcIlwiLFwibGF0cm9iZVwiOlwiXCIsXCJsYXdcIjpcIlwiLFwibGF3eWVyXCI6XCJcIixcImxkc1wiOlwiXCIsXCJsZWFzZVwiOlwiXCIsXCJsZWNsZXJjXCI6XCJcIixcImxlZnJha1wiOlwiXCIsXCJsZWdhbFwiOlwiXCIsXCJsZWdvXCI6XCJcIixcImxleHVzXCI6XCJcIixcImxnYnRcIjpcIlwiLFwibGlhaXNvblwiOlwiXCIsXCJsaWRsXCI6XCJcIixcImxpZmVcIjpcIlwiLFwibGlmZWluc3VyYW5jZVwiOlwiXCIsXCJsaWZlc3R5bGVcIjpcIlwiLFwibGlnaHRpbmdcIjpcIlwiLFwibGlrZVwiOlwiXCIsXCJsaWxseVwiOlwiXCIsXCJsaW1pdGVkXCI6XCJcIixcImxpbW9cIjpcIlwiLFwibGluY29sblwiOlwiXCIsXCJsaW5kZVwiOlwiXCIsXCJsaW5rXCI6XCJjeW9ufG15cGVwXCIsXCJsaXBzeVwiOlwiXCIsXCJsaXZlXCI6XCJcIixcImxpdmluZ1wiOlwiXCIsXCJsaXhpbFwiOlwiXCIsXCJsb2FuXCI6XCJcIixcImxvYW5zXCI6XCJcIixcImxvY2tlclwiOlwiXCIsXCJsb2N1c1wiOlwiXCIsXCJsb2Z0XCI6XCJcIixcImxvbFwiOlwiXCIsXCJsb25kb25cIjpcIlwiLFwibG90dGVcIjpcIlwiLFwibG90dG9cIjpcIlwiLFwibG92ZVwiOlwiXCIsXCJscGxcIjpcIlwiLFwibHBsZmluYW5jaWFsXCI6XCJcIixcImx0ZFwiOlwiXCIsXCJsdGRhXCI6XCJcIixcImx1bmRiZWNrXCI6XCJcIixcImx1cGluXCI6XCJcIixcImx1eGVcIjpcIlwiLFwibHV4dXJ5XCI6XCJcIixcIm1hY3lzXCI6XCJcIixcIm1hZHJpZFwiOlwiXCIsXCJtYWlmXCI6XCJcIixcIm1haXNvblwiOlwiXCIsXCJtYWtldXBcIjpcIlwiLFwibWFuXCI6XCJcIixcIm1hbmFnZW1lbnRcIjpcInJvdXRlclwiLFwibWFuZ29cIjpcIlwiLFwibWFwXCI6XCJcIixcIm1hcmtldFwiOlwiXCIsXCJtYXJrZXRpbmdcIjpcIlwiLFwibWFya2V0c1wiOlwiXCIsXCJtYXJyaW90dFwiOlwiXCIsXCJtYXJzaGFsbHNcIjpcIlwiLFwibWFzZXJhdGlcIjpcIlwiLFwibWF0dGVsXCI6XCJcIixcIm1iYVwiOlwiXCIsXCJtY2RcIjpcIlwiLFwibWNkb25hbGRzXCI6XCJcIixcIm1ja2luc2V5XCI6XCJcIixcIm1lZFwiOlwiXCIsXCJtZWRpYVwiOlwiXCIsXCJtZWV0XCI6XCJcIixcIm1lbGJvdXJuZVwiOlwiXCIsXCJtZW1lXCI6XCJcIixcIm1lbW9yaWFsXCI6XCJcIixcIm1lblwiOlwiXCIsXCJtZW51XCI6XCJcIixcIm1lb1wiOlwiXCIsXCJtZXJja21zZFwiOlwiXCIsXCJtZXRsaWZlXCI6XCJcIixcIm1pYW1pXCI6XCJcIixcIm1pY3Jvc29mdFwiOlwiXCIsXCJtaW5pXCI6XCJcIixcIm1pbnRcIjpcIlwiLFwibWl0XCI6XCJcIixcIm1pdHN1YmlzaGlcIjpcIlwiLFwibWxiXCI6XCJcIixcIm1sc1wiOlwiXCIsXCJtbWFcIjpcIlwiLFwibW9iaWxlXCI6XCJcIixcIm1vYmlseVwiOlwiXCIsXCJtb2RhXCI6XCJcIixcIm1vZVwiOlwiXCIsXCJtb2lcIjpcIlwiLFwibW9tXCI6XCJcIixcIm1vbmFzaFwiOlwiXCIsXCJtb25leVwiOlwiXCIsXCJtb25zdGVyXCI6XCJcIixcIm1vbnRibGFuY1wiOlwiXCIsXCJtb3BhclwiOlwiXCIsXCJtb3Jtb25cIjpcIlwiLFwibW9ydGdhZ2VcIjpcIlwiLFwibW9zY293XCI6XCJcIixcIm1vdG9cIjpcIlwiLFwibW90b3JjeWNsZXNcIjpcIlwiLFwibW92XCI6XCJcIixcIm1vdmllXCI6XCJcIixcIm1vdmlzdGFyXCI6XCJcIixcIm1zZFwiOlwiXCIsXCJtdG5cIjpcIlwiLFwibXRwY1wiOlwiXCIsXCJtdHJcIjpcIlwiLFwibXV0dWFsXCI6XCJcIixcIm5hYlwiOlwiXCIsXCJuYWRleFwiOlwiXCIsXCJuYWdveWFcIjpcIlwiLFwibmF0aW9ud2lkZVwiOlwiXCIsXCJuYXR1cmFcIjpcIlwiLFwibmF2eVwiOlwiXCIsXCJuYmFcIjpcIlwiLFwibmVjXCI6XCJcIixcIm5ldGJhbmtcIjpcIlwiLFwibmV0ZmxpeFwiOlwiXCIsXCJuZXR3b3JrXCI6XCIqYWxjZXNcIixcIm5ldXN0YXJcIjpcIlwiLFwibmV3XCI6XCJcIixcIm5ld2hvbGxhbmRcIjpcIlwiLFwibmV3c1wiOlwiXCIsXCJuZXh0XCI6XCJcIixcIm5leHRkaXJlY3RcIjpcIlwiLFwibmV4dXNcIjpcIlwiLFwibmZsXCI6XCJcIixcIm5nb1wiOlwiXCIsXCJuaGtcIjpcIlwiLFwibmljb1wiOlwiXCIsXCJuaWtlXCI6XCJcIixcIm5pa29uXCI6XCJcIixcIm5pbmphXCI6XCJcIixcIm5pc3NhblwiOlwiXCIsXCJuaXNzYXlcIjpcIlwiLFwibm9raWFcIjpcIlwiLFwibm9ydGh3ZXN0ZXJubXV0dWFsXCI6XCJcIixcIm5vcnRvblwiOlwiXCIsXCJub3dcIjpcIlwiLFwibm93cnV6XCI6XCJcIixcIm5vd3R2XCI6XCJcIixcIm5yYVwiOlwiXCIsXCJucndcIjpcIlwiLFwibnR0XCI6XCJcIixcIm55Y1wiOlwiXCIsXCJvYmlcIjpcIlwiLFwib2JzZXJ2ZXJcIjpcIlwiLFwib2ZmXCI6XCJcIixcIm9mZmljZVwiOlwiXCIsXCJva2luYXdhXCI6XCJcIixcIm9sYXlhblwiOlwiXCIsXCJvbGF5YW5ncm91cFwiOlwiXCIsXCJvbGRuYXZ5XCI6XCJcIixcIm9sbG9cIjpcIlwiLFwib21lZ2FcIjpcIlwiLFwib25lXCI6XCJob21lbGlua1wiLFwib25nXCI6XCJcIixcIm9ubFwiOlwiXCIsXCJvbmxpbmVcIjpcImJhcnN5XCIsXCJvbnlvdXJzaWRlXCI6XCJcIixcIm9vb1wiOlwiXCIsXCJvcGVuXCI6XCJcIixcIm9yYWNsZVwiOlwiXCIsXCJvcmFuZ2VcIjpcIlwiLFwib3JnYW5pY1wiOlwiXCIsXCJvcmlnaW5zXCI6XCJcIixcIm9zYWthXCI6XCJcIixcIm90c3VrYVwiOlwiXCIsXCJvdHRcIjpcIlwiLFwib3ZoXCI6XCJuZXJkcG9sXCIsXCJwYWdlXCI6XCJcIixcInBhbXBlcmVkY2hlZlwiOlwiXCIsXCJwYW5hc29uaWNcIjpcIlwiLFwicGFuZXJhaVwiOlwiXCIsXCJwYXJpc1wiOlwiXCIsXCJwYXJzXCI6XCJcIixcInBhcnRuZXJzXCI6XCJcIixcInBhcnRzXCI6XCJcIixcInBhcnR5XCI6XCJ5Ym9cIixcInBhc3NhZ2Vuc1wiOlwiXCIsXCJwYXlcIjpcIlwiLFwicGNjd1wiOlwiXCIsXCJwZXRcIjpcIlwiLFwicGZpemVyXCI6XCJcIixcInBoYXJtYWN5XCI6XCJcIixcInBoZFwiOlwiXCIsXCJwaGlsaXBzXCI6XCJcIixcInBob25lXCI6XCJcIixcInBob3RvXCI6XCJcIixcInBob3RvZ3JhcGh5XCI6XCJcIixcInBob3Rvc1wiOlwiXCIsXCJwaHlzaW9cIjpcIlwiLFwicGlhZ2V0XCI6XCJcIixcInBpY3NcIjpcIlwiLFwicGljdGV0XCI6XCJcIixcInBpY3R1cmVzXCI6XCIxMzM3XCIsXCJwaWRcIjpcIlwiLFwicGluXCI6XCJcIixcInBpbmdcIjpcIlwiLFwicGlua1wiOlwiXCIsXCJwaW9uZWVyXCI6XCJcIixcInBpenphXCI6XCJcIixcInBsYWNlXCI6XCJcIixcInBsYXlcIjpcIlwiLFwicGxheXN0YXRpb25cIjpcIlwiLFwicGx1bWJpbmdcIjpcIlwiLFwicGx1c1wiOlwiXCIsXCJwbmNcIjpcIlwiLFwicG9obFwiOlwiXCIsXCJwb2tlclwiOlwiXCIsXCJwb2xpdGllXCI6XCJcIixcInBvcm5cIjpcIlwiLFwicHJhbWVyaWNhXCI6XCJcIixcInByYXhpXCI6XCJcIixcInByZXNzXCI6XCJcIixcInByaW1lXCI6XCJcIixcInByb2RcIjpcIlwiLFwicHJvZHVjdGlvbnNcIjpcIlwiLFwicHJvZlwiOlwiXCIsXCJwcm9ncmVzc2l2ZVwiOlwiXCIsXCJwcm9tb1wiOlwiXCIsXCJwcm9wZXJ0aWVzXCI6XCJcIixcInByb3BlcnR5XCI6XCJcIixcInByb3RlY3Rpb25cIjpcIlwiLFwicHJ1XCI6XCJcIixcInBydWRlbnRpYWxcIjpcIlwiLFwicHViXCI6XCJcIixcInB3Y1wiOlwiXCIsXCJxcG9uXCI6XCJcIixcInF1ZWJlY1wiOlwiXCIsXCJxdWVzdFwiOlwiXCIsXCJxdmNcIjpcIlwiLFwicmFjaW5nXCI6XCJcIixcInJhZGlvXCI6XCJcIixcInJhaWRcIjpcIlwiLFwicmVhZFwiOlwiXCIsXCJyZWFsZXN0YXRlXCI6XCJcIixcInJlYWx0b3JcIjpcIlwiLFwicmVhbHR5XCI6XCJcIixcInJlY2lwZXNcIjpcIlwiLFwicmVkXCI6XCJcIixcInJlZHN0b25lXCI6XCJcIixcInJlZHVtYnJlbGxhXCI6XCJcIixcInJlaGFiXCI6XCJcIixcInJlaXNlXCI6XCJcIixcInJlaXNlblwiOlwiXCIsXCJyZWl0XCI6XCJcIixcInJlbGlhbmNlXCI6XCJcIixcInJlblwiOlwiXCIsXCJyZW50XCI6XCJcIixcInJlbnRhbHNcIjpcIlwiLFwicmVwYWlyXCI6XCJcIixcInJlcG9ydFwiOlwiXCIsXCJyZXB1YmxpY2FuXCI6XCJcIixcInJlc3RcIjpcIlwiLFwicmVzdGF1cmFudFwiOlwiXCIsXCJyZXZpZXdcIjpcInlib1wiLFwicmV2aWV3c1wiOlwiXCIsXCJyZXhyb3RoXCI6XCJcIixcInJpY2hcIjpcIlwiLFwicmljaGFyZGxpXCI6XCJcIixcInJpY29oXCI6XCJcIixcInJpZ2h0YXRob21lXCI6XCJcIixcInJpbFwiOlwiXCIsXCJyaW9cIjpcIlwiLFwicmlwXCI6XCJjbGFuXCIsXCJybWl0XCI6XCJcIixcInJvY2hlclwiOlwiXCIsXCJyb2Nrc1wiOlwibXlkZG5zfGxpbWEtY2l0eXx3ZWJzcGFjZVwiLFwicm9kZW9cIjpcIlwiLFwicm9nZXJzXCI6XCJcIixcInJvb21cIjpcIlwiLFwicnN2cFwiOlwiXCIsXCJydWdieVwiOlwiXCIsXCJydWhyXCI6XCJcIixcInJ1blwiOlwiXCIsXCJyd2VcIjpcIlwiLFwicnl1a3l1XCI6XCJcIixcInNhYXJsYW5kXCI6XCJcIixcInNhZmVcIjpcIlwiLFwic2FmZXR5XCI6XCJcIixcInNha3VyYVwiOlwiXCIsXCJzYWxlXCI6XCJcIixcInNhbG9uXCI6XCJcIixcInNhbXNjbHViXCI6XCJcIixcInNhbXN1bmdcIjpcIlwiLFwic2FuZHZpa1wiOlwiXCIsXCJzYW5kdmlrY29yb21hbnRcIjpcIlwiLFwic2Fub2ZpXCI6XCJcIixcInNhcFwiOlwiXCIsXCJzYXBvXCI6XCJcIixcInNhcmxcIjpcIlwiLFwic2FzXCI6XCJcIixcInNhdmVcIjpcIlwiLFwic2F4b1wiOlwiXCIsXCJzYmlcIjpcIlwiLFwic2JzXCI6XCJcIixcInNjYVwiOlwiXCIsXCJzY2JcIjpcIlwiLFwic2NoYWVmZmxlclwiOlwiXCIsXCJzY2htaWR0XCI6XCJcIixcInNjaG9sYXJzaGlwc1wiOlwiXCIsXCJzY2hvb2xcIjpcIlwiLFwic2NodWxlXCI6XCJcIixcInNjaHdhcnpcIjpcIlwiLFwic2NpZW5jZVwiOlwieWJvXCIsXCJzY2pvaG5zb25cIjpcIlwiLFwic2NvclwiOlwiXCIsXCJzY290XCI6XCJcIixcInNlYXJjaFwiOlwiXCIsXCJzZWF0XCI6XCJcIixcInNlY3VyZVwiOlwiXCIsXCJzZWN1cml0eVwiOlwiXCIsXCJzZWVrXCI6XCJcIixcInNlbGVjdFwiOlwiXCIsXCJzZW5lclwiOlwiXCIsXCJzZXJ2aWNlc1wiOlwiXCIsXCJzZXNcIjpcIlwiLFwic2V2ZW5cIjpcIlwiLFwic2V3XCI6XCJcIixcInNleFwiOlwiXCIsXCJzZXh5XCI6XCJcIixcInNmclwiOlwiXCIsXCJzaGFuZ3JpbGFcIjpcIlwiLFwic2hhcnBcIjpcIlwiLFwic2hhd1wiOlwiXCIsXCJzaGVsbFwiOlwiXCIsXCJzaGlhXCI6XCJcIixcInNoaWtzaGFcIjpcIlwiLFwic2hvZXNcIjpcIlwiLFwic2hvcFwiOlwiXCIsXCJzaG9wcGluZ1wiOlwiXCIsXCJzaG91amlcIjpcIlwiLFwic2hvd1wiOlwiXCIsXCJzaG93dGltZVwiOlwiXCIsXCJzaHJpcmFtXCI6XCJcIixcInNpbGtcIjpcIlwiLFwic2luYVwiOlwiXCIsXCJzaW5nbGVzXCI6XCJcIixcInNpdGVcIjpcImN5b258KnBsYXRmb3Jtc2hcIixcInNraVwiOlwiXCIsXCJza2luXCI6XCJcIixcInNreVwiOlwiXCIsXCJza3lwZVwiOlwiXCIsXCJzbGluZ1wiOlwiXCIsXCJzbWFydFwiOlwiXCIsXCJzbWlsZVwiOlwiXCIsXCJzbmNmXCI6XCJcIixcInNvY2NlclwiOlwiXCIsXCJzb2NpYWxcIjpcIlwiLFwic29mdGJhbmtcIjpcIlwiLFwic29mdHdhcmVcIjpcIlwiLFwic29odVwiOlwiXCIsXCJzb2xhclwiOlwiXCIsXCJzb2x1dGlvbnNcIjpcIlwiLFwic29uZ1wiOlwiXCIsXCJzb255XCI6XCJcIixcInNveVwiOlwiXCIsXCJzcGFjZVwiOlwic3RhY2tzcGFjZXx1YmVyfHhzNGFsbFwiLFwic3BpZWdlbFwiOlwiXCIsXCJzcG90XCI6XCJcIixcInNwcmVhZGJldHRpbmdcIjpcIlwiLFwic3JsXCI6XCJcIixcInNydFwiOlwiXCIsXCJzdGFkYVwiOlwiXCIsXCJzdGFwbGVzXCI6XCJcIixcInN0YXJcIjpcIlwiLFwic3Rhcmh1YlwiOlwiXCIsXCJzdGF0ZWJhbmtcIjpcIlwiLFwic3RhdGVmYXJtXCI6XCJcIixcInN0YXRvaWxcIjpcIlwiLFwic3RjXCI6XCJcIixcInN0Y2dyb3VwXCI6XCJcIixcInN0b2NraG9sbVwiOlwiXCIsXCJzdG9yYWdlXCI6XCJcIixcInN0b3JlXCI6XCJcIixcInN0cmVhbVwiOlwiXCIsXCJzdHVkaW9cIjpcIlwiLFwic3R1ZHlcIjpcIlwiLFwic3R5bGVcIjpcIlwiLFwic3Vja3NcIjpcIlwiLFwic3VwcGxpZXNcIjpcIlwiLFwic3VwcGx5XCI6XCJcIixcInN1cHBvcnRcIjpcImJhcnN5XCIsXCJzdXJmXCI6XCJcIixcInN1cmdlcnlcIjpcIlwiLFwic3V6dWtpXCI6XCJcIixcInN3YXRjaFwiOlwiXCIsXCJzd2lmdGNvdmVyXCI6XCJcIixcInN3aXNzXCI6XCJcIixcInN5ZG5leVwiOlwiXCIsXCJzeW1hbnRlY1wiOlwiXCIsXCJzeXN0ZW1zXCI6XCJrbmlnaHRwb2ludFwiLFwidGFiXCI6XCJcIixcInRhaXBlaVwiOlwiXCIsXCJ0YWxrXCI6XCJcIixcInRhb2Jhb1wiOlwiXCIsXCJ0YXJnZXRcIjpcIlwiLFwidGF0YW1vdG9yc1wiOlwiXCIsXCJ0YXRhclwiOlwiXCIsXCJ0YXR0b29cIjpcIlwiLFwidGF4XCI6XCJcIixcInRheGlcIjpcIlwiLFwidGNpXCI6XCJcIixcInRka1wiOlwiXCIsXCJ0ZWFtXCI6XCJcIixcInRlY2hcIjpcIlwiLFwidGVjaG5vbG9neVwiOlwiXCIsXCJ0ZWxlY2l0eVwiOlwiXCIsXCJ0ZWxlZm9uaWNhXCI6XCJcIixcInRlbWFzZWtcIjpcIlwiLFwidGVubmlzXCI6XCJcIixcInRldmFcIjpcIlwiLFwidGhkXCI6XCJcIixcInRoZWF0ZXJcIjpcIlwiLFwidGhlYXRyZVwiOlwiXCIsXCJ0aWFhXCI6XCJcIixcInRpY2tldHNcIjpcIlwiLFwidGllbmRhXCI6XCJcIixcInRpZmZhbnlcIjpcIlwiLFwidGlwc1wiOlwiXCIsXCJ0aXJlc1wiOlwiXCIsXCJ0aXJvbFwiOlwiXCIsXCJ0am1heHhcIjpcIlwiLFwidGp4XCI6XCJcIixcInRrbWF4eFwiOlwiXCIsXCJ0bWFsbFwiOlwiXCIsXCJ0b2RheVwiOlwiXCIsXCJ0b2t5b1wiOlwiXCIsXCJ0b29sc1wiOlwiXCIsXCJ0b3BcIjpcIlwiLFwidG9yYXlcIjpcIlwiLFwidG9zaGliYVwiOlwiXCIsXCJ0b3RhbFwiOlwiXCIsXCJ0b3Vyc1wiOlwiXCIsXCJ0b3duXCI6XCJcIixcInRveW90YVwiOlwiXCIsXCJ0b3lzXCI6XCJcIixcInRyYWRlXCI6XCJ5Ym9cIixcInRyYWRpbmdcIjpcIlwiLFwidHJhaW5pbmdcIjpcIlwiLFwidHJhdmVsY2hhbm5lbFwiOlwiXCIsXCJ0cmF2ZWxlcnNcIjpcIlwiLFwidHJhdmVsZXJzaW5zdXJhbmNlXCI6XCJcIixcInRydXN0XCI6XCJcIixcInRydlwiOlwiXCIsXCJ0dWJlXCI6XCJcIixcInR1aVwiOlwiXCIsXCJ0dW5lc1wiOlwiXCIsXCJ0dXNodVwiOlwiXCIsXCJ0dnNcIjpcIlwiLFwidWJhbmtcIjpcIlwiLFwidWJzXCI6XCJcIixcInVjb25uZWN0XCI6XCJcIixcInVuaWNvbVwiOlwiXCIsXCJ1bml2ZXJzaXR5XCI6XCJcIixcInVub1wiOlwiXCIsXCJ1b2xcIjpcIlwiLFwidXBzXCI6XCJcIixcInZhY2F0aW9uc1wiOlwiXCIsXCJ2YW5hXCI6XCJcIixcInZhbmd1YXJkXCI6XCJcIixcInZlZ2FzXCI6XCJcIixcInZlbnR1cmVzXCI6XCJcIixcInZlcmlzaWduXCI6XCJcIixcInZlcnNpY2hlcnVuZ1wiOlwiXCIsXCJ2ZXRcIjpcIlwiLFwidmlhamVzXCI6XCJcIixcInZpZGVvXCI6XCJcIixcInZpZ1wiOlwiXCIsXCJ2aWtpbmdcIjpcIlwiLFwidmlsbGFzXCI6XCJcIixcInZpblwiOlwiXCIsXCJ2aXBcIjpcIlwiLFwidmlyZ2luXCI6XCJcIixcInZpc2FcIjpcIlwiLFwidmlzaW9uXCI6XCJcIixcInZpc3RhXCI6XCJcIixcInZpc3RhcHJpbnRcIjpcIlwiLFwidml2YVwiOlwiXCIsXCJ2aXZvXCI6XCJcIixcInZsYWFuZGVyZW5cIjpcIlwiLFwidm9ka2FcIjpcIlwiLFwidm9sa3N3YWdlblwiOlwiXCIsXCJ2b2x2b1wiOlwiXCIsXCJ2b3RlXCI6XCJcIixcInZvdGluZ1wiOlwiXCIsXCJ2b3RvXCI6XCJcIixcInZveWFnZVwiOlwiXCIsXCJ2dWVsb3NcIjpcIlwiLFwid2FsZXNcIjpcIlwiLFwid2FsbWFydFwiOlwiXCIsXCJ3YWx0ZXJcIjpcIlwiLFwid2FuZ1wiOlwiXCIsXCJ3YW5nZ291XCI6XCJcIixcIndhcm1hblwiOlwiXCIsXCJ3YXRjaFwiOlwiXCIsXCJ3YXRjaGVzXCI6XCJcIixcIndlYXRoZXJcIjpcIlwiLFwid2VhdGhlcmNoYW5uZWxcIjpcIlwiLFwid2ViY2FtXCI6XCJcIixcIndlYmVyXCI6XCJcIixcIndlYnNpdGVcIjpcIlwiLFwid2VkXCI6XCJcIixcIndlZGRpbmdcIjpcIlwiLFwid2VpYm9cIjpcIlwiLFwid2VpclwiOlwiXCIsXCJ3aG9zd2hvXCI6XCJcIixcIndpZW5cIjpcIlwiLFwid2lraVwiOlwiXCIsXCJ3aWxsaWFtaGlsbFwiOlwiXCIsXCJ3aW5cIjpcIlwiLFwid2luZG93c1wiOlwiXCIsXCJ3aW5lXCI6XCJcIixcIndpbm5lcnNcIjpcIlwiLFwid21lXCI6XCJcIixcIndvbHRlcnNrbHV3ZXJcIjpcIlwiLFwid29vZHNpZGVcIjpcIlwiLFwid29ya1wiOlwiXCIsXCJ3b3Jrc1wiOlwiXCIsXCJ3b3JsZFwiOlwiXCIsXCJ3b3dcIjpcIlwiLFwid3RjXCI6XCJcIixcInd0ZlwiOlwiXCIsXCJ4Ym94XCI6XCJcIixcInhlcm94XCI6XCJcIixcInhmaW5pdHlcIjpcIlwiLFwieGlodWFuXCI6XCJcIixcInhpblwiOlwiXCIsXCJ4bi0tMTFiNGMzZFwiOlwiXCIsXCJ4bi0tMWNrMmUxYlwiOlwiXCIsXCJ4bi0tMXFxdzIzYVwiOlwiXCIsXCJ4bi0tMzBycjd5XCI6XCJcIixcInhuLS0zYnN0MDBtXCI6XCJcIixcInhuLS0zZHM0NDNnXCI6XCJcIixcInhuLS0zb3ExOHZsOHBuMzZhXCI6XCJcIixcInhuLS0zcHh1OGtcIjpcIlwiLFwieG4tLTQyYzJkOWFcIjpcIlwiLFwieG4tLTQ1cTExY1wiOlwiXCIsXCJ4bi0tNGdicmltXCI6XCJcIixcInhuLS01NXF3NDJnXCI6XCJcIixcInhuLS01NXF4NWRcIjpcIlwiLFwieG4tLTVzdTM0ajkzNmJnc2dcIjpcIlwiLFwieG4tLTV0em01Z1wiOlwiXCIsXCJ4bi0tNmZyejgyZ1wiOlwiXCIsXCJ4bi0tNnFxOTg2YjN4bFwiOlwiXCIsXCJ4bi0tODBhZHhoa3NcIjpcIlwiLFwieG4tLTgwYXFlY2RyMWFcIjpcIlwiLFwieG4tLTgwYXNlaGRiXCI6XCJcIixcInhuLS04MGFzd2dcIjpcIlwiLFwieG4tLTh5MGEwNjNhXCI6XCJcIixcInhuLS05ZGJxMmFcIjpcIlwiLFwieG4tLTlldDUydVwiOlwiXCIsXCJ4bi0tOWtydDAwYVwiOlwiXCIsXCJ4bi0tYjR3NjA1ZmVyZFwiOlwiXCIsXCJ4bi0tYmNrMWI5YTVkcmU0Y1wiOlwiXCIsXCJ4bi0tYzFhdmdcIjpcIlwiLFwieG4tLWMyYnI3Z1wiOlwiXCIsXCJ4bi0tY2NrMmIzYlwiOlwiXCIsXCJ4bi0tY2c0YmtpXCI6XCJcIixcInhuLS1jenI2OTRiXCI6XCJcIixcInhuLS1jenJzMHRcIjpcIlwiLFwieG4tLWN6cnUyZFwiOlwiXCIsXCJ4bi0tZDFhY2ozYlwiOlwiXCIsXCJ4bi0tZWNrdmR0YzlkXCI6XCJcIixcInhuLS1lZnZ5ODhoXCI6XCJcIixcInhuLS1lc3R2NzVnXCI6XCJcIixcInhuLS1mY3Q0MjlrXCI6XCJcIixcInhuLS1maGJlaVwiOlwiXCIsXCJ4bi0tZmlxMjI4YzVoc1wiOlwiXCIsXCJ4bi0tZmlxNjRiXCI6XCJcIixcInhuLS1manE3MjBhXCI6XCJcIixcInhuLS1mbHczNTFlXCI6XCJcIixcInhuLS1menlzOGQ2OXV2Z21cIjpcIlwiLFwieG4tLWcyeHg0OGNcIjpcIlwiLFwieG4tLWdja3IzZjBmXCI6XCJcIixcInhuLS1nazNhdDFlXCI6XCJcIixcInhuLS1oeHQ4MTRlXCI6XCJcIixcInhuLS1pMWI2YjFhNmEyZVwiOlwiXCIsXCJ4bi0taW1yNTEzblwiOlwiXCIsXCJ4bi0taW8wYTdpXCI6XCJcIixcInhuLS1qMWFlZlwiOlwiXCIsXCJ4bi0tamxxNjF1OXc3YlwiOlwiXCIsXCJ4bi0tanZyMTg5bVwiOlwiXCIsXCJ4bi0ta2NyeDc3ZDF4NGFcIjpcIlwiLFwieG4tLWtwdTcxNmZcIjpcIlwiLFwieG4tLWtwdXQzaVwiOlwiXCIsXCJ4bi0tbWdiYTNhM2VqdFwiOlwiXCIsXCJ4bi0tbWdiYTdjMGJibjBhXCI6XCJcIixcInhuLS1tZ2JhYWtjN2R2ZlwiOlwiXCIsXCJ4bi0tbWdiYWIyYmRcIjpcIlwiLFwieG4tLW1nYmI5ZmJwb2JcIjpcIlwiLFwieG4tLW1nYmNhN2R6ZG9cIjpcIlwiLFwieG4tLW1nYmk0ZWNleHBcIjpcIlwiLFwieG4tLW1nYnQzZGhkXCI6XCJcIixcInhuLS1tazFidTQ0Y1wiOlwiXCIsXCJ4bi0tbXh0cTFtXCI6XCJcIixcInhuLS1uZ2JjNWF6ZFwiOlwiXCIsXCJ4bi0tbmdiZTllMGFcIjpcIlwiLFwieG4tLW5nYnJ4XCI6XCJcIixcInhuLS1ucXY3ZlwiOlwiXCIsXCJ4bi0tbnF2N2ZzMDBlbWFcIjpcIlwiLFwieG4tLW55cXkyNmFcIjpcIlwiLFwieG4tLXAxYWNmXCI6XCJcIixcInhuLS1wYnQ5NzdjXCI6XCJcIixcInhuLS1wc3N5MnVcIjpcIlwiLFwieG4tLXE5anliNGNcIjpcIlwiLFwieG4tLXFja2ExcG1jXCI6XCJcIixcInhuLS1yaHF2OTZnXCI6XCJcIixcInhuLS1yb3Z1ODhiXCI6XCJcIixcInhuLS1zZXM1NTRnXCI6XCJcIixcInhuLS10NjBiNTZhXCI6XCJcIixcInhuLS10Y2t3ZVwiOlwiXCIsXCJ4bi0tdGlxNDl4cXlqXCI6XCJcIixcInhuLS11bnVwNHlcIjpcIlwiLFwieG4tLXZlcm1nZW5zYmVyYXRlci1jdGJcIjpcIlwiLFwieG4tLXZlcm1nZW5zYmVyYXR1bmctcHdiXCI6XCJcIixcInhuLS12aHF1dlwiOlwiXCIsXCJ4bi0tdnVxODYxYlwiOlwiXCIsXCJ4bi0tdzRyODVlbDhmaHU1ZG5yYVwiOlwiXCIsXCJ4bi0tdzRyczQwbFwiOlwiXCIsXCJ4bi0teGhxNTIxYlwiOlwiXCIsXCJ4bi0temZyMTY0YlwiOlwiXCIsXCJ4cGVyaWFcIjpcIlwiLFwieHl6XCI6XCJibG9nc2l0ZXxmaGFwcFwiLFwieWFjaHRzXCI6XCJcIixcInlhaG9vXCI6XCJcIixcInlhbWF4dW5cIjpcIlwiLFwieWFuZGV4XCI6XCJcIixcInlvZG9iYXNoaVwiOlwiXCIsXCJ5b2dhXCI6XCJcIixcInlva29oYW1hXCI6XCJcIixcInlvdVwiOlwiXCIsXCJ5b3V0dWJlXCI6XCJcIixcInl1blwiOlwiXCIsXCJ6YXBwb3NcIjpcIlwiLFwiemFyYVwiOlwiXCIsXCJ6ZXJvXCI6XCJcIixcInppcFwiOlwiXCIsXCJ6aXBwb1wiOlwiXCIsXCJ6b25lXCI6XCIqdHJpdG9ufGxpbWFcIixcInp1ZXJpY2hcIjpcIlwifSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGxkID0gcmVxdWlyZSgnLi9saWIvdGxkLmpzJykuaW5pdCgpO1xudGxkLnJ1bGVzID0gcmVxdWlyZSgnLi9ydWxlcy5qc29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdGxkO1xuIiwiaW1wb3J0IHRsZCBmcm9tICd0bGRqcyc7XG5leHBvcnQgZGVmYXVsdCB0bGQ7XG4iLCJpbXBvcnQgeyBpc0lwQWRkcmVzcyB9IGZyb20gJy4vdXJsJztcbmltcG9ydCB0bGRzIGZyb20gJy4uL3BsYXRmb3JtL3RsZGpzJztcblxuLy8gUmUtZXhwb3J0IHN5bWJvbHMgZnJvbSBgdGxkanNgXG5jb25zdCBnZXREb21haW4gPSB0bGRzLmdldERvbWFpbi5iaW5kKHRsZHMpO1xuY29uc3QgZ2V0UHVibGljU3VmZml4ID0gdGxkcy5nZXRQdWJsaWNTdWZmaXguYmluZCh0bGRzKTtcbmNvbnN0IGdldFN1YmRvbWFpbiA9IHRsZHMuZ2V0U3ViZG9tYWluLmJpbmQodGxkcyk7XG5jb25zdCB0bGRFeGlzdHMgPSB0bGRzLnRsZEV4aXN0cy5iaW5kKHRsZHMpO1xuY29uc3QgVExEcyA9IHRsZHMucnVsZXM7XG5cbi8vXG4vLyBFZmZpY2llbnQgaW1wbGVtZW50YXRpb24gb2YgZ2V0IGdlbmVyYWwgZG9tYWluIHdpdGggYnVpbHQtaW4gY2FjaGluZy5cbi8vXG5cbmNvbnN0IGludmFsaWRIb3N0bmFtZUNoYXJhY3RlcnMgPSAvW15hLXpBLVowLTkuLV0vO1xuXG5cbi8qKlxuICogRXh0cmFjaCB0aGUgZG9tYWluIGZyb20gYW4gdXJsLCBpZ25vcmluZyB0aGUgc2NoZW1hIGFuZCBwYXJhbWV0ZXJzLlxuICovXG5mdW5jdGlvbiBfZXh0cmFjdERvbWFpbih1cmwpIHtcbiAgbGV0IGRvbWFpbiA9IHVybDtcblxuICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoYXQgdGhlIGluZGV4IGlzIDw9IGJlY2F1c2UgdGhpcyBwcm90b2NvbCBjb3VsZCBhcHBlYXJcbiAgLy8gYXMgYSB2YWx1ZSBvZiBhIHBhcmFtZXRlciBpbiB0aGUgVVJMLlxuICBjb25zdCBpbmRleE9mUHJvdG9jb2wgPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gIGlmIChpbmRleE9mUHJvdG9jb2wgIT09IC0xICYmIGluZGV4T2ZQcm90b2NvbCA8PSA2KSB7XG4gICAgZG9tYWluID0gdXJsLnN1YnN0cmluZyhpbmRleE9mUHJvdG9jb2wgKyAzKTtcbiAgfVxuXG4gIGNvbnN0IGluZGV4T2ZTbGFzaCA9IGRvbWFpbi5pbmRleE9mKCcvJyk7XG4gIGlmIChpbmRleE9mU2xhc2ggIT09IC0xKSB7XG4gICAgZG9tYWluID0gZG9tYWluLnN1YnN0cmluZygwLCBpbmRleE9mU2xhc2gpO1xuICB9XG5cbiAgaWYgKGRvbWFpbi5zdGFydHNXaXRoKCd3d3cuJykpIHtcbiAgICBkb21haW4gPSBkb21haW4uc3Vic3RyaW5nKDQpO1xuICB9XG5cbiAgcmV0dXJuIGRvbWFpbjtcbn1cblxuXG5mdW5jdGlvbiBfZ2V0R2VuZXJhbERvbWFpbkZyb21Ib3N0bmFtZShob3N0bmFtZSkge1xuICBjb25zdCBnZCA9IGdldERvbWFpbihob3N0bmFtZSk7XG5cbiAgLy8gU29tZSBob3N0bmFtZSB3aWxsIG5vdCBwbGF5IHdlbGwgd2l0aCB0aGUgYGdldERvbWFpbmAgZnVuY3Rpb24gaWYgdGhleVxuICAvLyBhbHNvIGNvbnN0aXR1dGUgYSB2YWxpZCBwdWJsaWMgc3VmZml4IChlZzogZ29vZ2xlYXBpcy5jb20pXG4gIGlmIChnZCA9PT0gbnVsbCAmJiB0bGRFeGlzdHMoaG9zdG5hbWUpKSB7XG4gICAgcmV0dXJuIGhvc3RuYW1lO1xuICB9XG5cbiAgcmV0dXJuIGdkO1xufVxuXG5cbi8qKlxuICogRWZmaWNpZW50IGFjY2VsZXJhdGluZyBzdHJ1Y3R1cmUgdXNlZCB0byBzdG9yZSBkb21haW5zLiBUaGlzIGlzIHVzZWQgYXMgYVxuICogY2FjaGUgZm9yIHRoZSBnZXRHZW5lcmFsRG9tYWluIGZ1bmN0aW9uLiBJZiBhbiBob3N0bmFtZSBlbmRzIHdpdGggYSB2YWxpZFxuICogZ2VuZXJhbCBkb21haW4gZnJvbSB0aGUgc3VmZml4IHRyZWUsIHRoZW4gd2UgY29uc2lkZXIgaXQgYSBtYXRjaCBhbmQgdXNlIHRoZVxuICogaGl0IGFzIGEgZ2VuZXJhbCBkb21haW4gZm9yIHRoaXMgaG9zdG5hbWUuXG4gKi9cbmNsYXNzIFN1ZmZpeFRyZWVEb21haW5DYWNoZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyeSB0byBnZXQgYSB2YWx1ZSBmcm9tIHRoZSBjYWNoZSBmb3IgdGhpcyB1cmwsIGlmIG5vbmUgaXMgcHJlc2VudCwgdGhlblxuICAgKiBjb21wdXRlIHRoZSByZXN1bHQgYW5kIHN0b3JlIGl0IGluIHRoZSBjYWNoZSBmb3IgbmV4dCB0aW1lLlxuICAgKi9cbiAgZ2V0KHVybCkge1xuICAgIGNvbnN0IGhvc3RuYW1lID0gX2V4dHJhY3REb21haW4odXJsKTtcblxuICAgIC8vIENoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSB0aGlzIGdlbmVyYWwgZG9tYWluIGluIHRoZSBjYWNoZVxuICAgIC8vIFRoaXMgaXMgc3VwZXIgY2hlYXAsIHNvIHdlIGRvIGl0IGZpcnN0LlxuICAgIGNvbnN0IGNhY2hlUmVzdWx0ID0gdGhpcy5sb29rdXAoaG9zdG5hbWUpO1xuICAgIGlmIChjYWNoZVJlc3VsdCkge1xuICAgICAgcmV0dXJuIGNhY2hlUmVzdWx0O1xuICAgIH1cblxuICAgIC8vIElmIGl0J3MgYSB2YWxpZCBJUCBhZGRyZXNzLCB3ZSByZXR1cm4gaXQuXG4gICAgaWYgKGlzSXBBZGRyZXNzKGhvc3RuYW1lKSkge1xuICAgICAgcmV0dXJuIGhvc3RuYW1lO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBmb3JiaWRkZW4gY2hhcmFjdGVycyBpbiB0aGUgaG9zdG5hbWVcbiAgICBpZiAoaG9zdG5hbWUuc2VhcmNoKGludmFsaWRIb3N0bmFtZUNoYXJhY3RlcnMpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgbm90IGNhY2hlZCBhbmQgdGhlIGhvc3RuYW1lIGlzIHZhbGlkLCB0aGVuIGV4dHJhY3QgdGhlIGdlbmVyYWwgZG9tYWluXG4gICAgY29uc3QgZ2QgPSBfZ2V0R2VuZXJhbERvbWFpbkZyb21Ib3N0bmFtZShob3N0bmFtZSk7XG5cbiAgICBpZiAoZ2QgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0KGdkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2Q7XG4gIH1cblxuICAvKipcbiAgICogVHJ5IHRvIGxvb2t1cCBhIHZhbGlkIHN1ZmZpeCBmb3IgdGhlIGdpdmVuIGBob3N0bmFtZWAuXG4gICAqIGVnOiBhIHZhbGlkIHJlc3VsdCBmb3IgJ2Zvby5iYXIuY29tJyBjb3VsZCBiZSAnYmFyLmNvbSdcbiAgICovXG4gIGxvb2t1cChob3N0bmFtZSkge1xuICAgIGNvbnN0IHBhcnRzID0gaG9zdG5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKCk7XG4gICAgbGV0IGNhY2hlID0gdGhpcy5jYWNoZTtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGNhY2hlLiQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwYXJ0c1tpbmRleF07XG4gICAgICBjb25zdCBjID0gY2FjaGVbdmFsdWVdO1xuICAgICAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICBjYWNoZSA9IGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGUuJDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZSBhIGhvc3RuYW1lIGluIHRoZSBzdWZmaXggdHJlZS5cbiAgICovXG4gIHNldChnZW5lcmFsRG9tYWluKSB7XG4gICAgY29uc3QgcGFydHMgPSBnZW5lcmFsRG9tYWluLnNwbGl0KCcuJykucmV2ZXJzZSgpO1xuICAgIGxldCBjYWNoZSA9IHRoaXMuY2FjaGU7XG5cbiAgICAvLyBJbnNlcnQgaW50ZXJtZWRpYXJ5IGVsZW1lbnRzXG4gICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgbGV0IGMgPSBjYWNoZVtwYXJ0XTtcbiAgICAgIGlmIChjID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGNhY2hlW3BhcnRdID0gYztcbiAgICAgIH1cblxuICAgICAgY2FjaGUgPSBjO1xuICAgIH0pO1xuXG4gICAgLy8gTGFzdCBlbGVtZW50IG9mIHRoZSBgcGFydHNcbiAgICBjYWNoZS4kID0gZ2VuZXJhbERvbWFpbjtcbiAgfVxufVxuXG4vLyBVc2UgYW4gb3B0aW1pemVkIHN1ZmZpeC10cmVlIGNhY2hlIHBvcHVsYXRlZCB3aXRoIGdlbmVyYWwgZG9tYWlucyBhbmQgdXNlZFxuLy8gZXZlcnl0aW1lIHdlIHdhbnQgdG8gZXh0cmFjdCB0aGUgZ2VuZXJhbCBkb21haW4gZnJvbSBhIGhvc3RuYW1lLlxuZXhwb3J0IGNvbnN0IENBQ0hFID0gbmV3IFN1ZmZpeFRyZWVEb21haW5DYWNoZSgpO1xuZnVuY3Rpb24gZ2V0R2VuZXJhbERvbWFpbih1cmwpIHtcbiAgcmV0dXJuIENBQ0hFLmdldCh1cmwpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0R2VuZXJhbERvbWFpbixcblxuICAvLyB0bGRqc1xuICBnZXRQdWJsaWNTdWZmaXgsXG4gIGdldERvbWFpbixcbiAgZ2V0U3ViZG9tYWluLFxuICB0bGRFeGlzdHMsXG4gIFRMRHMsXG59O1xuIiwiLyogZ2xvYmFsIGNocm9tZSwgd2luZG93ICovXG5leHBvcnQge1xuICBjaHJvbWUsXG4gIHdpbmRvdyxcbn1cbiIsImltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4vZ2xvYmFscyc7XG5leHBvcnQgZGVmYXVsdCB3aW5kb3cuY29uc29sZTtcbiIsIi8qIGdsb2JhbCBsb2NhbFN0b3JhZ2UgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmwpIHtcbiAgaWYgKHVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbG9jYWxTdG9yYWdlIGZvciBVUkwgaXMgbm90IHN1cHBvcnRlZCcpO1xuICB9XG4gIHJldHVybiBsb2NhbFN0b3JhZ2U7XG59XG4iLCJpbXBvcnQgZ2V0U3RvcmFnZSBmcm9tICcuLi9wbGF0Zm9ybS9zdG9yYWdlJztcblxuLyoqXG4qIEBuYW1lc3BhY2UgY29yZVxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xuXG4gIGNvbnN0cnVjdG9yKHVybCkge1xuICAgIC8vIGlmIG5vdCBjYWxsZWQgYXMgY29uc3RydWN0b3IsIHN0aWxsIGFjdCBhcyBvbmVcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3RvcmFnZSkpIHtcbiAgICAgIHJldHVybiBuZXcgU3RvcmFnZSh1cmwpO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmFnZSA9IGdldFN0b3JhZ2UuYmluZChudWxsLCB1cmwpO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgZ2V0SXRlbShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlKCkuZ2V0SXRlbShrZXkpO1xuICB9XG5cbiAgc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZSgpLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVJdGVtKGtleSkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UoKS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlKCkuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHNldE9iamVjdFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvYmplY3RcbiAgICovXG4gIHNldE9iamVjdChrZXksIG9iamVjdCkge1xuICAgIHRoaXMuc3RvcmFnZSgpLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3QpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIGdldE9iamVjdFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XG4gICAqIEBwYXJhbSBub3RGb3VuZCB7Qm9vbGVhbn1cbiAgICovXG4gIGdldE9iamVjdChrZXksIG5vdEZvdW5kID0gZmFsc2UpIHtcbiAgICBjb25zdCBvID0gdGhpcy5zdG9yYWdlKCkuZ2V0SXRlbShrZXkpO1xuICAgIGlmIChvKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShvKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vdEZvdW5kO1xuICB9XG59XG4iLCIvKlxuICogVGhpcyBtZXRob2QgaW1wbGVtZW50cyB0aGUgcHVibGlzaCBzdWJzY3JpYmUgZGVzaWduIHBhdHRlcm5cbiAqXG4gKiBFdmVudCBuYW1pbmcgc2NoZW1lOlxuICogICAgY2xpcXoubW9kdWxlX25hbWUuZXZlbnRfbmFtZVxuICpcbiAqICBzaW5nbGUgc2VuZGVyIC0+IG11bHRpcGxlIHBvdGVudGlhbCByZWNpcGllbnRzXG4gKiAgICBmb3IgZXhhbXBsZTogY2xpcXouY29yZS51cmxiYXJfZm9jdXMgKGluZm9ybSBvdGhlcnMgYWJvdXQgdXJsYmFyIGZvY3VzKVxuICogICAgbW9kdWxlX25hbWUgZGVzY3JpYmVzIHNlbmRlclxuICogIG11bHRpcGxlIHBvdGVudGlhbCBzZW5kZXJzIC0+IHNpbmdsZSByZWNpcGllbnRcbiAqICAgIGZvciBleGFtcGxlOiBjbGlxei5tc2dfY2VudGVyLnNob3dfbWVzc2FnZSAodGVsbCB0aGUgbWVzc2FnZSBjZW50ZXIgdG8gc2hvdyBhIG1lc3NhZ2UpXG4gKiAgICBtb2R1bGVfbmFtZSBkZXNjcmliZXMgcmVjaXBpZW50ICh0aGlzIGlzIG1vcmUgbGlrZSBhIFJQQylcbiAqL1xuXG5pbXBvcnQgY29uc29sZSBmcm9tIFwiLi9jb25zb2xlXCI7XG5pbXBvcnQgQ2xpcXpVdGlscyBmcm9tIFwiLi91dGlsc1wiO1xuXG52YXIgQ2xpcXpFdmVudHMgPSBDbGlxekV2ZW50cyB8fCB7XG4gIC8vdXNlIGEgamF2YXNjcmlwdCBvYmplY3QgdG8gcHVzaCB0aGUgbWVzc2FnZSBpZHMgYW5kIHRoZSBjYWxsYmFja3NcbiAgY2FjaGU6IHt9LFxuICB0aWNrQ2FsbGJhY2tzOiBbXSxcbiAgLypcbiAgICogUHVibGlzaCBldmVudHMgb2YgaW50ZXJlc3Qgd2l0aCBhIHNwZWNpZmljIGlkXG4gICAqL1xuICBxdWV1ZTogW10sXG5cbiAgcHViOiBmdW5jdGlvbiAoaWQpIHtcbiAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IChDbGlxekV2ZW50cy5jYWNoZVtpZF0gfHwgW10pLm1hcChldiA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIENsaXF6VXRpbHMuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV2LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2xpcXpFdmVudHMgZXJyb3I6ICR7aWR9YCwgZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbmlzaGVkUHJvbWlzZSA9IFByb21pc2UuYWxsKGNhbGxiYWNrcykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMucXVldWUuaW5kZXhPZihmaW5pc2hlZFByb21pc2UpO1xuICAgICAgdGhpcy5xdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgaWYgKHRoaXMucXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlck5leHRUaWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKGZpbmlzaGVkUHJvbWlzZSk7XG4gIH0sXG5cbiAgdHJpZ2dlck5leHRUaWNrKCkge1xuICAgIHRoaXMudGlja0NhbGxiYWNrcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50aWNrQ2FsbGJhY2tzID0gW107XG4gIH0sXG5cbiAgbmV4dFRpY2soY2IgPSAoKSA9PiB7fSkge1xuICAgIHRoaXMudGlja0NhbGxiYWNrcyA9IHRoaXMudGlja0NhbGxiYWNrcyB8fCBbXTtcbiAgICB0aGlzLnRpY2tDYWxsYmFja3MucHVzaChjYik7XG4gIH0sXG5cbiAgLyogU3Vic2NyaWJlIHRvIGV2ZW50cyBvZiBpbnRlcmVzdFxuICAgKiB3aXRoIGEgc3BlY2lmaWMgaWQgYW5kIGEgY2FsbGJhY2tcbiAgICogdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgZXZlbnQgaXMgb2JzZXJ2ZWRcbiAgICovXG4gIHN1YjogZnVuY3Rpb24gKGlkLCBmbikge1xuICAgIENsaXF6RXZlbnRzLmNhY2hlW2lkXSA9IENsaXF6RXZlbnRzLmNhY2hlW2lkXSB8fCBbXTtcbiAgICBDbGlxekV2ZW50cy5jYWNoZVtpZF0ucHVzaChmbik7XG4gIH0sXG5cbiAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2ssIHRoYXQpIHtcbiAgICBsZXQgY2I7XG4gICAgaWYgKHRoYXQpIHtcbiAgICAgIGNiID0gY2FsbGJhY2suYmluZCh0aGF0KVxuICAgIH0gZWxzZSB7XG4gICAgICBjYiA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIENsaXF6RXZlbnRzLnN1YihldmVudE5hbWUsIGNiKTtcblxuICAgIHJldHVybiB7XG4gICAgICB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgQ2xpcXpFdmVudHMudW5fc3ViKGV2ZW50TmFtZSwgY2IpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1bl9zdWI6IGZ1bmN0aW9uIChpZCwgZm4pIHtcbiAgICBpZiAoIUNsaXF6RXZlbnRzLmNhY2hlW2lkXSB8fCBDbGlxekV2ZW50cy5jYWNoZVtpZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVHJ5aW5nIHRvIHVuc3Vic2NyaWJlIGV2ZW50IHRoYXQgaGFkIG5vIHN1YnNjcmliZXJzXCIpXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGluZGV4ID0gQ2xpcXpFdmVudHMuY2FjaGVbaWRdLmluZGV4T2YoZm4pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBDbGlxekV2ZW50cy5jYWNoZVtpZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIlRyeWluZyB0byB1bnN1YnNjcmliZSBhbiB1bmtub3duIGxpc3RlbmVyXCIpO1xuICAgIH1cbiAgfSxcblxuICBjbGVhbl9jaGFubmVsOiBmdW5jdGlvbihpZCkge1xuICAgIGlmICghQ2xpcXpFdmVudHMuY2FjaGVbaWRdKSB7XG4gICAgICB0aHJvdyBcIlRyeWluZyB0byB1bnN1YnNjcmliZSBhbiB1bmtub3duIGNoYW5uZWxcIjtcbiAgICB9XG4gICAgQ2xpcXpFdmVudHMuY2FjaGVbaWRdID0gW107XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFkZHMgYSBsaXN0ZW5lciB0byBldmVudFRhcmdldCBmb3IgZXZlbnRzIG9mIHR5cGUgZXZlbnRUeXBlLCBhbmQgcmVwdWJsaXNoZXMgdGhlbVxuICAgKiAgdGhyb3VnaCBDbGlxekV2ZW50cyB3aXRoIGlkIGNsaXF6RXZlbnROYW1lLlxuICAgKi9cbiAgcHJveHlFdmVudChjbGlxekV2ZW50TmFtZSwgZXZlbnRUYXJnZXQsIGV2ZW50VHlwZSwgcHJvcGFnYXRlID0gZmFsc2UsIHRyYW5zZm9ybSkgIHtcbiAgICBjb25zdCBwdWJsaXNoZXIgPSBDbGlxekV2ZW50cy5wdWIuYmluZChDbGlxekV2ZW50cywgY2xpcXpFdmVudE5hbWUpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSB0cmFuc2Zvcm0gPyB0cmFuc2Zvcm0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IGFyZ3VtZW50cztcbiAgICAgIHB1Ymxpc2hlci5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG5cbiAgICBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgcHJvcGFnYXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIG5leHRJZDogZnVuY3Rpb24gbmV4dElkKCkge1xuICAgIG5leHRJZC5pZCA9IG5leHRJZC5pZCB8fCAwO1xuICAgIG5leHRJZC5pZCArPSAxO1xuICAgIHJldHVybiBuZXh0SWQuaWQ7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaXF6RXZlbnRzO1xuZXhwb3J0IGxldCBzdWJzY3JpYmUgPSBDbGlxekV2ZW50cy5zdWJzY3JpYmU7XG4iLCJpbXBvcnQgU3RvcmFnZSBmcm9tICcuLi9jb3JlL3N0b3JhZ2UnO1xuaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9jb3JlL2V2ZW50cyc7XG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlZihwcmVmLCBub3RGb3VuZCkge1xuICBjb25zdCBteXByZWYgPSBzdG9yYWdlLmdldEl0ZW0ocHJlZik7XG4gIGlmIChteXByZWYpIHtcbiAgICBpZiAobXlwcmVmID09PSAnZmFsc2UnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChteXByZWYgPT09ICd0cnVlJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghaXNOYU4obXlwcmVmKSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KG15cHJlZiwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gbXlwcmVmO1xuICB9XG4gIHJldHVybiBub3RGb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByZWYocHJlZiwgdmFsKSB7XG4gIHN0b3JhZ2Uuc2V0SXRlbShwcmVmLCB2YWwpO1xuICBldmVudHMucHViKCdwcmVmY2hhbmdlJywgcHJlZik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNQcmVmKHByZWYpIHtcbiAgcmV0dXJuIHN0b3JhZ2UuZ2V0SXRlbShwcmVmKSAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUHJlZihwcmVmKSB7XG4gIHN0b3JhZ2UucmVtb3ZlSXRlbShwcmVmKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUNoYW5nZUV2ZW50cygpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQgLSBwcmVmcy5lbmFibGVDaGFuZ2VFdmVudHMnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVDaGFuZ2VFdmVudHMoKSB7XG4gIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkIC0gcHJlZnMuZGlzYWJsZUNoYW5nZUV2ZW50cycpO1xufVxuIiwiaW1wb3J0IHsgZ2V0UHJlZiwgc2V0UHJlZiwgaGFzUHJlZiwgY2xlYXJQcmVmLCBlbmFibGVDaGFuZ2VFdmVudHMsIGRpc2FibGVDaGFuZ2VFdmVudHMgfSBmcm9tIFwiLi4vcGxhdGZvcm0vcHJlZnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogR2V0IGEgdmFsdWUgZnJvbSBwcmVmZXJlbmNlcyBkYlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIHByZWYgLSBwcmVmZXJlbmNlIGlkZW50aWZpZXJcbiAgICogQHBhcmFtIHsqPX0gICAgICBkZWZhdXRsVmFsdWUgLSByZXR1cm5lZCB2YWx1ZSBpbiBjYXNlIHByZWYgaXMgbm90IGRlZmluZWRcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBwcmVmaXggLSBwcmVmaXggZm9yIHByZWZcbiAgICovXG4gIGdldDogZ2V0UHJlZixcbiAgLyoqXG4gICAqIFNldCBhIHZhbHVlIGluIHByZWZlcmVuY2VzIGRiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcHJlZiAtIHByZWZlcmVuY2UgaWRlbnRpZmllclxuICAgKiBAcGFyYW0ge3N0cmluZz19IHByZWZpeCAtIHByZWZpeCBmb3IgcHJlZlxuICAgKi9cbiAgc2V0OiBzZXRQcmVmLFxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlcmUgaXMgYSB2YWx1ZSBpbiBwcmVmZXJlbmNlcyBkYlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIHByZWYgLSBwcmVmZXJlbmNlIGlkZW50aWZpZXJcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBwcmVmaXggLSBwcmVmaXggZm9yIHByZWZcbiAgICovXG4gIGhhczogaGFzUHJlZixcbiAgLyoqXG4gICAqIENsZWFyIHZhbHVlIGluIHByZWZlcmVuY2VzIGRiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcHJlZiAtIHByZWZlcmVuY2UgaWRlbnRpZmllclxuICAgKiBAcGFyYW0ge3N0cmluZz19IHByZWZpeCAtIHByZWZpeCBmb3IgcHJlZlxuICAgKi9cbiAgY2xlYXI6IGNsZWFyUHJlZixcblxuICBlbmFibGVDaGFuZ2VFdmVudHMsXG5cbiAgZGlzYWJsZUNoYW5nZUV2ZW50cyxcbn07XG4iLCJpbXBvcnQgY29uc29sZSBmcm9tIFwiLi4vcGxhdGZvcm0vY29uc29sZVwiO1xuaW1wb3J0IHByZWZzIGZyb20gXCIuL3ByZWZzXCI7XG5cbmNvbnN0IGlzTG9nZ2luZ0VuYWJsZWQgPSBwcmVmcy5nZXQoJ3Nob3dDb25zb2xlTG9ncycsIGZhbHNlKTtcblxubGV0IGxvZztcbmxldCBlcnJvcjtcbmxldCBkZWJ1ZztcblxuaWYgKGlzTG9nZ2luZ0VuYWJsZWQpIHtcbiAgbG9nID0gY29uc29sZS5sb2cuYmluZChjb25zb2xlLCAnQ0xJUVonKTtcbiAgZXJyb3IgPSBjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwgJ0NMSVFaIGVycm9yJyk7XG4gIGlmIChwcmVmcy5nZXQoJ2RldmVsb3BlcicpKSB7XG4gICAgZGVidWcgPSBsb2c7XG4gIH0gZWxzZSB7XG4gICAgZGVidWcgPSAoKSA9PiB7fTtcbiAgfVxufSBlbHNlIHtcbiAgbG9nID0gKCkgPT4ge307XG4gIGVycm9yID0gKCkgPT4ge307XG4gIGRlYnVnID0gKCkgPT4ge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9nLFxuICBlcnJvcixcbiAgZGVidWcsXG59O1xuIiwiZnVuY3Rpb24gc2V0UHJpdmF0ZUZsYWdzKCkge31cbmZ1bmN0aW9uIHNldEJhY2tncm91bmRSZXF1ZXN0KCkge31cbmZ1bmN0aW9uIFhNTEh0dHBSZXF1ZXN0RmFjdG9yeSgpIHtcbiAgcmV0dXJuIFhNTEh0dHBSZXF1ZXN0O1xufVxuXG5leHBvcnQge1xuICBYTUxIdHRwUmVxdWVzdEZhY3RvcnksXG4gIHNldFByaXZhdGVGbGFncyxcbiAgc2V0QmFja2dyb3VuZFJlcXVlc3Rcbn1cbiIsImV4cG9ydCBjb25zdCBjaHJvbWVVcmxIYW5kbGVyID0gZmFsc2U7XG4iLCJpbXBvcnQgKiBhcyBmdGNoIGZyb20gJy4uL3BsYXRmb3JtL2ZldGNoJztcbmltcG9ydCBjb25zb2xlIGZyb20gJy4vY29uc29sZSc7XG5pbXBvcnQgeyBjb21wcmVzcyB9IGZyb20gJy4vZ3ppcCc7XG5pbXBvcnQgeyBYTUxIdHRwUmVxdWVzdEZhY3RvcnksIHNldFByaXZhdGVGbGFncywgc2V0QmFja2dyb3VuZFJlcXVlc3QgfSBmcm9tICcuLi9wbGF0Zm9ybS94bWxodHRwcmVxdWVzdCc7XG5pbXBvcnQgeyBjaHJvbWVVcmxIYW5kbGVyIH0gZnJvbSAnLi4vcGxhdGZvcm0vY2hyb21lLXVybC1oYW5kbGVyJztcblxuZXhwb3J0IGxldCBmZXRjaCA9IGZ0Y2guZmV0Y2g7XG5leHBvcnQgbGV0IEhlYWRlcnMgPSBmdGNoLkhlYWRlcnM7XG5leHBvcnQgbGV0IFJlcXVlc3QgPSBmdGNoLlJlcXVlc3Q7XG5leHBvcnQgbGV0IFJlc3BvbnNlID0gZnRjaC5SZXNwb25zZTtcblxuLyoqIExlZ2FjeSBodHRwSGFuZGxlciBpbXBsZW1lbnRhdGlvbiwgYmFzZWQgb24gWE1MSHR0cFJlcXVlc3QuXG4gKlxuICogIElmIHlvdSB3YW50IHRvIG1ha2UgSFRUUCByZXF1ZXN0cywgcGxlYXNlIGNoZWNrIG91dCB0aGUgZmV0Y2ggQVBJIChwbGF0Zm9ybS9mZXRjaClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRIdHRwSGFuZGxlcihtZXRob2QsIHVybCwgY2FsbGJhY2ssIG9uZXJyb3IsIHRpbWVvdXQsIGRhdGEsIHN5bmMsIGVuY29kaW5nLCBiYWNrZ3JvdW5kKSB7XG4gIGlmIChtZXRob2QgPT09ICdHRVQnICYmIHVybC5zdGFydHNXaXRoKCdjaHJvbWU6Ly8nKSAmJiBjaHJvbWVVcmxIYW5kbGVyKSB7XG4gICAgY2hyb21lVXJsSGFuZGxlcih1cmwsIGNhbGxiYWNrLCBvbmVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgWE1MSHR0cFJlcXVlc3QgPSBYTUxIdHRwUmVxdWVzdEZhY3RvcnkoKTtcbiAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICByZXEudGltZXN0YW1wID0gKyBuZXcgRGF0ZSgpO1xuICBpZiAoYmFja2dyb3VuZCkge1xuICAgIHNldEJhY2tncm91bmRSZXF1ZXN0KHJlcSk7XG4gIH1cbiAgcmVxLm9wZW4obWV0aG9kLCB1cmwsICFzeW5jKTtcbiAgc2V0UHJpdmF0ZUZsYWdzKHJlcSk7XG4gIHJlcS5vdmVycmlkZU1pbWVUeXBlICYmIHJlcS5vdmVycmlkZU1pbWVUeXBlKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIC8vIGhlYWRlcnMgZm9yIGNvbXByZXNzZWQgZGF0YVxuICBpZiAoZW5jb2RpbmcpIHtcbiAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LUVuY29kaW5nJywgZW5jb2RpbmcpO1xuICB9XG5cbiAgcmVxLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKCFwYXJzZUludCkgcmV0dXJuOyAvL3BhcnNlSW50IGlzIG5vdCBhIGZ1bmN0aW9uIGFmdGVyIGV4dGVuc2lvbiBkaXNhYmxlL3VuaW5zdGFsbFxuXG4gICAgICB2YXIgc3RhdHVzQ2xhc3MgPSBwYXJzZUludChyZXEuc3RhdHVzIC8gMTAwKTtcbiAgICAgIGlmKHN0YXR1c0NsYXNzID09IDIgfHwgc3RhdHVzQ2xhc3MgPT0gMyB8fCBzdGF0dXNDbGFzcyA9PSAwIC8qIGxvY2FsIGZpbGVzICovKXtcbiAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhyZXEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlcnJvciA9IGBsb2FkZWQgd2l0aCBub24tMjAwICR7dXJsfSAoc3RhdHVzPSR7cmVxLnN0YXR1c30gJHtyZXEuc3RhdHVzVGV4dH0pIENMSVFaRW52aXJvbm1lbnQuaHR0cEhhbmRsZXJgO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICBvbmVycm9yICYmIG9uZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICB9XG4gIHJlcS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGVycm9yID0gYGVycm9yIGxvYWRpbmcgJHt1cmx9IChzdGF0dXM9JHtyZXEuc3RhdHVzfSAke3JlcS5zdGF0dXNUZXh0fSkgQ0xJUVpFbnZpcm9ubWVudC5odHRwSGFuZGxlcmA7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIG9uZXJyb3IgJiYgb25lcnJvcihlcnJvcik7XG4gIH1cbiAgcmVxLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBlcnJvciA9IGB0aW1lb3V0IGZvciAke3VybH0gQ0xJUVpFbnZpcm9ubWVudC5odHRwSGFuZGxlcmA7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIG9uZXJyb3IgJiYgb25lcnJvcihlcnJvcik7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgcmVxLnRpbWVvdXQgPSBwYXJzZUludCh0aW1lb3V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXEudGltZW91dCA9IChbJ1BPU1QnLCAnUFVUJ10uaW5kZXhPZihtZXRob2QpID49IDAgPyAxMDAwMCA6IDEwMDApO1xuICAgICAgfVxuICB9XG5cbiAgcmVxLnNlbmQoZGF0YSk7XG4gIHJldHVybiByZXE7XG59O1xuXG5sZXQgYWN0aXZlSGFuZGxlciA9IGRlZmF1bHRIdHRwSGFuZGxlcjtcblxuZXhwb3J0IGZ1bmN0aW9uIGh0dHBIYW5kbGVyKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGFjdGl2ZUhhbmRsZXIoLi4uYXJncyk7XG59XG5cbi8qKlxuICogIFJlcGxhY2UgZGVmYXVsdCBodHRwIGhhbmRsZXIgd2l0aCBmblxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcnJpZGVIdHRwSGFuZGxlcihmbikge1xuICBhY3RpdmVIYW5kbGVyID0gZm47XG59XG5cbmNvbnN0IGNvbXByZXNzaW9uQXZhaWxhYmxlID0gQm9vbGVhbihjb21wcmVzcyk7XG5sZXQgY29tcHJlc3Npb25FeGNsdXNpb25zID0gbmV3IFNldCgpO1xuXG5mdW5jdGlvbiBjb21wcmVzc2lvbkVuYWJsZWQodXJsKSB7XG4gIHJldHVybiBjb21wcmVzc2lvbkF2YWlsYWJsZSAmJiAhY29tcHJlc3Npb25FeGNsdXNpb25zLmhhcyh1cmwpO1xufVxuXG4vKipcbiAqICBBZGQgYSB1cmwgZm9yIHdoaWNoIHdlIHNob3VsZCBub3QgY29tcHJlc3Mgd2hlbiB1c2luZyBwcm9taXNlSHR0cEhhbmRsZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbXByZXNzaW9uRXhjbHVzaW9uKHVybCkge1xuICBjb21wcmVzc2lvbkV4Y2x1c2lvbnMuYWRkKHVybCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9taXNlSHR0cEhhbmRsZXIobWV0aG9kLCB1cmwsIGRhdGEsIHRpbWVvdXQsIGNvbXByZXNzZWRQb3N0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAvLyBnemlwLmNvbXByZXNzIG1heSBiZSBmYWxzZSBpZiB0aGVyZSBpcyBubyBpbXBsZW1lbnRhdGlvbiBmb3IgdGhpcyBwbGF0Zm9ybVxuICAgLy8gb3IgbWF5YmUgaXQgaXMgbm90IGxvYWRlZCB5ZXRcbiAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiBjb21wcmVzc2VkUG9zdCAmJiBjb21wcmVzc2lvbkVuYWJsZWQodXJsKSkge1xuICAgICBjb25zdCBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgIGRhdGEgPSBjb21wcmVzcyhkYXRhKTtcbiAgICAgY29uc29sZS5sb2coXCJDb21wcmVzc2VkIHJlcXVlc3QgdG8gXCIrIHVybCArXCIsIGJ5dGVzIHNhdmVkID0gXCIrIChkYXRhTGVuZ3RoIC0gZGF0YS5sZW5ndGgpICsgXCIgKFwiICsgKDEwMCooZGF0YUxlbmd0aCAtIGRhdGEubGVuZ3RoKS8gZGF0YUxlbmd0aCkudG9GaXhlZCgxKSArXCIlKVwiLCBcIkNMSVFaRW52aXJvbm1lbnQuaHR0cEhhbmRsZXJcIik7XG4gICAgIGh0dHBIYW5kbGVyKG1ldGhvZCwgdXJsLCByZXNvbHZlLCByZWplY3QsIHRpbWVvdXQsIGRhdGEsIHVuZGVmaW5lZCwgJ2d6aXAnKTtcbiAgIH0gZWxzZSB7XG4gICAgIGh0dHBIYW5kbGVyKG1ldGhvZCwgdXJsLCByZXNvbHZlLCByZWplY3QsIHRpbWVvdXQsIGRhdGEpO1xuICAgfVxuIH0pO1xufTtcbiIsImltcG9ydCAqIGFzIGd6aXAgZnJvbSBcIi4uL3BsYXRmb3JtL2d6aXBcIjtcblxuLyoqXG4gKiAgQ29tcHJlc3MgYSBzdHJpbmdcbiAqXG4gKiAgQHBhcmFtIHtzdHJpbmd9IHN0cmluZyB0byBjb21wcmVzc1xuICogIEByZXR1cm5zIHtVSW50OEFycmF5fSBjb21wcmVzc2VkIGRhdGFcbiAqL1xuZXhwb3J0IGxldCBjb21wcmVzcyA9IGd6aXAuY29tcHJlc3MgfHwgZmFsc2U7XG5cbi8qKlxuICogIERlY29tcHJlc3MgYSBHemlwIGNvbXByZXNzZWQgc3RyaW5nXG4gKlxuICogIEBwYXJhbSB7VUludDhBcnJheX0gZ3ppcHBlZCBkYXRhXG4gKiAgQHJldHVybnMge3N0cmluZ30gZGVjb21wcmVzc2VkIHN0cmluZ1xuICovXG5leHBvcnQgbGV0IGRlY29tcHJlc3MgPSBnemlwLmRlY29tcHJlc3MgfHwgZmFsc2U7XG4iLCJ2YXIgQ2xpcXpMYW5ndWFnZSA9IHtcbiAgaW5pdCgpIHt9LFxuICBzdGF0ZVRvUXVlcnlTdHJpbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcmbGFuZz1kZSxlbic7IH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaXF6TGFuZ3VhZ2U7XG4iLCJpbXBvcnQgTGFuZ3VhZ2UgZnJvbSAnLi4vcGxhdGZvcm0vbGFuZ3VhZ2UnO1xuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2U7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNVUkkodGV4dCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVxdWFsKHVybDEsIHVybDIpIHtcbiAgcmV0dXJuIHVybDEgPT09IHVybDI7XG59XG4iLCJpbXBvcnQgeyBpc1VSSSB9IGZyb20gJy4uL3BsYXRmb3JtL3VybCc7XG5cbmNvbnN0IFVybFJlZ0V4cCA9IC9eKChbYS16XFxkXShbYS16XFxkLV0qW2EtelxcZF0pPylcXC4pK1thLXpdezIsfShcXDpcXGQrKT8kL2k7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VybChpbnB1dCkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRPRE86IGhhbmRsZSBpcCBhZGRyZXNzZXNcbiAgaWYgKGlzVVJJKGlucHV0KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vc3RlcCAxIHJlbW92ZSBldmVudHVhbCBwcm90b2NvbFxuICAgIGNvbnN0IHByb3RvY29sUG9zID0gaW5wdXQuaW5kZXhPZignOi8vJyk7XG4gICAgaWYocHJvdG9jb2xQb3MgIT0gLTEgJiYgcHJvdG9jb2xQb3MgPD0gNil7XG4gICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKHByb3RvY29sUG9zKzMpXG4gICAgfVxuICAgIC8vc3RlcDIgcmVtb3ZlIHBhdGggJiBldmVyeXRoaW5nIGFmdGVyXG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCgnLycpWzBdO1xuICAgIC8vc3RlcDMgcnVuIHRoZSByZWdleFxuICAgIHJldHVybiBVcmxSZWdFeHAudGVzdChpbnB1dCk7XG4gIH1cbn1cblxuLypcbnN0cmlwIHByb3RvY29sIGZyb20gdXJsXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHVybFN0cmlwUHJvdG9jb2wodXJsKSB7XG4gIGxldCByZXN1bHRVcmwgPSB1cmw7XG4gIGNvbnN0IHRvUmVtb3ZlID0gWydodHRwczovLycsICdodHRwOi8vJyxcbiAgICAnd3d3Mi4nLCAnd3d3LicsXG4gICAgJ21vYmlsZS4nLCAnbW9iaWwuJywgJ20uJ107XG4gIHRvUmVtb3ZlLmZvckVhY2gocGFydCA9PiB7XG4gICAgaWYgKHJlc3VsdFVybC50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgocGFydCkpIHtcbiAgICAgIHJlc3VsdFVybCA9IHJlc3VsdFVybC5zdWJzdHJpbmcocGFydC5sZW5ndGgpO1xuICAgIH1cbiAgfSk7XG4gIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaCBhcyB3ZWxsIHRvIGhhdmUgYWxsIHVybHMgaW4gdGhlIHNhbWUgZm9ybWF0XG4gIGlmIChyZXN1bHRVcmxbcmVzdWx0VXJsLmxlbmd0aCAtIDFdID09PSAnLycpIHtcbiAgICByZXN1bHRVcmwgPSByZXN1bHRVcmwuc2xpY2UoMCwgLTEpO1xuICB9XG4gIHJldHVybiByZXN1bHRVcmw7XG59XG5cblxuLy8gSVAgVmFsaWRhdGlvblxuXG5jb25zdCBpcHY0X3BhcnQgPSBcIjAqKFswLTldfFsxLTldWzAtOV18MVswLTldezJ9fDJbMC00XVswLTldfDI1WzAtNV0pXCI7IC8vIG51bWJlcnMgMCAtIDI1NVxuY29uc3QgaXB2NF9yZWdleCA9IG5ldyBSZWdFeHAoXCJeXCIgKyBpcHY0X3BhcnQgKyBcIlxcXFwuXCIrIGlwdjRfcGFydCArIFwiXFxcXC5cIisgaXB2NF9wYXJ0ICsgXCJcXFxcLlwiKyBpcHY0X3BhcnQgKyBcIihbOl0oWzAtOV0pKyk/JFwiKTsgLy8gcG9ydCBudW1iZXJcbmNvbnN0IGlwdjZfcmVnZXggPSBuZXcgUmVnRXhwKFwiXlxcXFxbPygoWzAtOV18W2EtZl18W0EtRl0pKls6Ll0rKFswLTldfFthLWZdfFtBLUZdKStbOi5dKikrW1xcXFxdXT8oWzpdWzAtOV0rKT8kXCIpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lwdjRBZGRyZXNzKGhvc3QpIHtcbiAgcmV0dXJuIGlwdjRfcmVnZXgudGVzdChob3N0KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaXNJcHY2QWRkcmVzcyhob3N0KSB7XG4gIHJldHVybiBpcHY2X3JlZ2V4LnRlc3QoaG9zdCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSXBBZGRyZXNzKGhvc3QpIHtcbiAgcmV0dXJuIGlzSXB2NEFkZHJlc3MoaG9zdCkgfHwgaXNJcHY2QWRkcmVzcyhob3N0KTtcbn1cblxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVxdWFscyB9IGZyb20gJy4uL3BsYXRmb3JtL3VybCc7XG4iLCJleHBvcnQgZGVmYXVsdCBjcnlwdG87XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5cbmltcG9ydCBjcnlwdG8gZnJvbSAnLi4vLi4vcGxhdGZvcm0vY3J5cHRvJztcblxuLy8gQ3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlIE1hdGgucmFuZG9tIHJlcGxhY2VtZW50XG4vL1xuLy8gIERvaW5nIHRoZSBzYW1lIGFzIEZpcmVmb3ggTWF0aC5yYW5kb20gZG9lcywgYnV0IHdpdGggYSBjcnlwdG8gc2VjdXJlIDY0IGJpdCBudW1iZXIgaW5zdGVhZC5cbi8vICBUaGUgZXF1aXZhbGVudCBpbiBDKysgaXM6IGRvdWJsZSh1aW50NjR2YWwgJiAweDFGRkZGRkZGRkZGRkZGKSAvICgxIDw8IDUzKTtcbi8vICBXQVJOSU5HOiBJbiB0ZXN0cyAoTGludXgpLCBjb25zaWRlcmFibHkgc2xvd2VyIHRoYW4gTWF0aC5yYW5kb20gKDUtMTAgdGltZXMpXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20oKSB7XG4gIGNvbnN0IHZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KDIpKTtcbiAgcmV0dXJuICgoKDIgKiogMzIpICogKHZhbHVlc1swXSAmIDB4MUZGRkZGKSkgKyB2YWx1ZXNbMV0pIC8gKDIgKiogNTMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb20oKSAqIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZmV0Y2g7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEZhY3RvcnkoKSB7XG4gIHJldHVybiBmZXRjaDtcbn1cblxuZXhwb3J0IHtcbiAgZmV0Y2gsXG4gIEhlYWRlcnMsXG4gIFJlcXVlc3QsXG4gIFJlc3BvbnNlLFxufVxuIiwiaW1wb3J0IENMSVFaRW52aXJvbm1lbnQgZnJvbSBcIi4uL3BsYXRmb3JtL2Vudmlyb25tZW50XCI7XG5pbXBvcnQgY29uc29sZSBmcm9tIFwiLi9jb25zb2xlXCI7XG5pbXBvcnQgcHJlZnMgZnJvbSBcIi4vcHJlZnNcIjtcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBDbGlxekV2ZW50cyBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgdGxkcyBmcm9tIFwiLi90bGRzXCI7XG5pbXBvcnQgeyBodHRwSGFuZGxlciwgcHJvbWlzZUh0dHBIYW5kbGVyIH0gZnJvbSAnLi9odHRwJztcbmltcG9ydCBnemlwIGZyb20gJy4vZ3ppcCc7XG5pbXBvcnQgQ2xpcXpMYW5ndWFnZSBmcm9tICcuL2xhbmd1YWdlJztcbmltcG9ydCB7IGlzVXJsLCBpc0lwdjRBZGRyZXNzLCBpc0lwdjZBZGRyZXNzIH0gZnJvbSAnLi91cmwnO1xuaW1wb3J0IHJhbmRvbSBmcm9tICcuL2NyeXB0by9yYW5kb20nO1xuaW1wb3J0IHsgZmV0Y2hGYWN0b3J5IH0gZnJvbSAnLi4vcGxhdGZvcm0vZmV0Y2gnO1xuXG52YXIgVkVSVElDQUxfRU5DT0RJTkdTID0ge1xuICAgICdwZW9wbGUnOidwJyxcbiAgICAnbmV3cyc6J24nLFxuICAgICd2aWRlbyc6J3YnLFxuICAgICdocSc6J2gnLFxuICAgICdibSc6ICdtJyxcbiAgICAncmVjaXBlcmQnOiAncicsXG4gICAgJ2dhbWUnOiAnZycsXG4gICAgJ21vdmllJzogJ28nXG59O1xuXG52YXIgQ09MT1VSUyA9IFsnI2ZmY2U2ZCcsJyNmZjZmNjknLCcjOTZlMzk3JywnIzVjN2JhMScsJyNiZmJmYmYnLCcjM2I1NTk4JywnI2ZiYjQ0YycsJyMwMGIyZTUnLCcjYjNiM2IzJywnIzk5Y2NjYycsJyNmZjAwMjcnLCcjOTk5OTk5J10sXG4gICAgTE9HT1MgPSBbJ3dpa2lwZWRpYScsICdnb29nbGUnLCAnZmFjZWJvb2snLCAneW91dHViZScsICdkdWNrZHVja2dvJywgJ3N0ZXJuZWZyZXNzZXInLCAnemFsYW5kbycsICdiaWxkJywgJ3dlYicsICdlYmF5JywgJ2dteCcsICdhbWF6b24nLCAndC1vbmxpbmUnLCAnd2l3bycsICd3d2UnLCAnd2VpZ2h0d2F0Y2hlcnMnLCAncnAtb25saW5lJywgJ3dtYWdhemluZScsICdjaGlwJywgJ3NwaWVnZWwnLCAneWFob28nLCAncGF5cGFsJywgJ2ltZGInLCAnd2lraWEnLCAnbXNuJywgJ2F1dG9iaWxkJywgJ2RhaWx5bW90aW9uJywgJ2htJywgJ2hvdG1haWwnLCAnemVpdCcsICdiYWhuJywgJ3NvZnRvbmljJywgJ2hhbmRlbHNibGF0dCcsICdzdGVybicsICdjbm4nLCAnbW9iaWxlJywgJ2FldHYnLCAncG9zdGJhbmsnLCAnZGtiJywgJ2JpbmcnLCAnYWRvYmUnLCAnYmJjJywgJ25pa2UnLCAnc3RhcmJ1Y2tzJywgJ3RlY2hjcnVuY2gnLCAndmV2bycsICd0aW1lJywgJ3R3aXR0ZXInLCAnd2VhdGhlcnVuZGVyZ3JvdW5kJywgJ3hpbmcnLCAneWVscCcsICd5YW5kZXgnLCAnd2VhdGhlcicsICdmbGlja3InXSxcbiAgICBCUkFORFNfREFUQUJBU0UgPSB7IGRvbWFpbnM6IHt9LCBwYWxldHRlOiBbXCI5OTlcIl0gfTtcbmNvbnN0IHNjaGVtZVJFID0gL14oXFxTKz8pOihcXC9cXC8pPyguKikkL2k7XG5cbnZhciBDbGlxelV0aWxzID0ge1xuICBlbnZpcm9ubWVudDogQ0xJUVpFbnZpcm9ubWVudCxcbiAgUkVTVUxUU19QUk9WSURFUjogICAgICAgICAgICAgICBDTElRWkVudmlyb25tZW50LlJFU1VMVFNfUFJPVklERVIsXG4gIFJJQ0hfSEVBREVSOiAgICAgICAgICAgICAgICAgICAgQ0xJUVpFbnZpcm9ubWVudC5SSUNIX0hFQURFUixcbiAgUkVTVUxUU19QUk9WSURFUl9MT0c6ICAgICAgICAgICAnaHR0cHM6Ly9hcGkuY2xpcXouY29tL2FwaS92MS9sb2dnaW5nP3E9JyxcbiAgUkVTVUxUU19QUk9WSURFUl9QSU5HOiAgICAgICAgICAnaHR0cHM6Ly9hcGkuY2xpcXouY29tL3BpbmcnLFxuICBDT05GSUdfUFJPVklERVI6ICAgICAgICAgICAgICAgICdodHRwczovL2FwaS5jbGlxei5jb20vYXBpL3YxL2NvbmZpZycsXG4gIFNBRkVfQlJPV1NJTkc6ICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vc2FmZS1icm93c2luZy5jbGlxei5jb20nLFxuICBUVVRPUklBTF9VUkw6ICAgICAgICAgICAgICAgICAgICdodHRwczovL2NsaXF6LmNvbS9ob21lL29uYm9hcmRpbmcnLFxuICBVTklOU1RBTEw6ICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL2NsaXF6LmNvbS9ob21lL29mZmJvYXJkaW5nJyxcbiAgRkVFREJBQ0s6ICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9jbGlxei5jb20vZmVlZGJhY2svJyxcbiAgUFJFRkVSUkVEX0xBTkdVQUdFOiAgICAgICAgICAgICBudWxsLFxuICBSRVNVTFRTX1RJTUVPVVQ6ICAgICAgICAgICAgICAgIENMSVFaRW52aXJvbm1lbnQuUkVTVUxUU19USU1FT1VULFxuXG4gIEJSQU5EU19EQVRBQkFTRTogQlJBTkRTX0RBVEFCQVNFLFxuXG4gIC8vd2lsbCBiZSB1cGRhdGVkIGZyb20gdGhlIG1peGVyIGNvbmZpZyBlbmRwb2ludCBldmVyeSB0aW1lIG5ldyBsb2dvcyBhcmUgZ2VuZXJhdGVkXG4gIEJSQU5EU19EQVRBQkFTRV9WRVJTSU9OOiAxNDgzOTgwMjEzNjMwLFxuICBHRU9MT0NfV0FUQ0hfSUQ6ICAgICAgICAgICAgICAgIG51bGwsIC8vIFRoZSBJRCBvZiB0aGUgZ2VvbG9jYXRpb24gd2F0Y2hlciAoZnVuY3Rpb24gdGhhdCB1cGRhdGVzIGNhY2hlZCBnZW9sb2NhdGlvbiBvbiBjaGFuZ2UpXG4gIFZFUlRJQ0FMX1RFTVBMQVRFUzoge1xuICAgICAgICAnbic6ICduZXdzJyAgICAsXG4gICAgICAgICdwJzogJ3Blb3BsZScgICxcbiAgICAgICAgJ3YnOiAndmlkZW8nICAgLFxuICAgICAgICAnaCc6ICdocScgICAgICAsXG4gICAgICAgICdyJzogJ3JlY2lwZScgLFxuICAgICAgICAnZyc6ICdjcGdhbWVfbW92aWUnLFxuICAgICAgICAnbyc6ICdjcGdhbWVfbW92aWUnXG4gICAgfSxcbiAgaG06IG51bGwsXG4gIGh3OiBudWxsLFxuICBtYzogbnVsbCxcbiAgVEVNUExBVEVTX1BBVEg6IENMSVFaRW52aXJvbm1lbnQuVEVNUExBVEVTX1BBVEgsXG4gIFRFTVBMQVRFUzogQ0xJUVpFbnZpcm9ubWVudC5URU1QTEFURVMsXG4gIE1FU1NBR0VfVEVNUExBVEVTOiBDTElRWkVudmlyb25tZW50Lk1FU1NBR0VfVEVNUExBVEVTLFxuICBQQVJUSUFMUzogQ0xJUVpFbnZpcm9ubWVudC5QQVJUSUFMUyxcbiAgU0tJTl9QQVRIOiBDTElRWkVudmlyb25tZW50LlNLSU5fUEFUSCxcbiAgTE9DQUxFX1BBVEg6IENMSVFaRW52aXJvbm1lbnQuTE9DQUxFX1BBVEgsXG4gIFJFUkFOS0VSUzogQ0xJUVpFbnZpcm9ubWVudC5SRVJBTktFUlMsXG4gIENMSVFaX09OQk9BUkRJTkc6IENMSVFaRW52aXJvbm1lbnQuQ0xJUVpfT05CT0FSRElORyxcbiAgQ0xJUVpfT05CT0FSRElOR19VUkw6IENMSVFaRW52aXJvbm1lbnQuQ0xJUVpfT05CT0FSRElOR19VUkwsXG4gIEJST1dTRVJfT05CT0FSRElOR19QUkVGOiBDTElRWkVudmlyb25tZW50LkJST1dTRVJfT05CT0FSRElOR19QUkVGLFxuICBDTElRWl9ORVdfVEFCOiBDTElRWkVudmlyb25tZW50LkNMSVFaX05FV19UQUIsXG4gIENMSVFaX05FV19UQUJfUkVTT1VSQ0VfVVJMOiBDTElRWkVudmlyb25tZW50LkNMSVFaX05FV19UQUJfUkVTT1VSQ0VfVVJMLFxuXG4gIHRlbGVtZXRyeUhhbmRsZXJzOiBbXG4gICAgQ0xJUVpFbnZpcm9ubWVudC50ZWxlbWV0cnlcbiAgXSxcblxuICBpbml0OiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICBpZiAoIW9wdGlvbnMubGFuZykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwibGFuZyBtaXNzaW5nXCIpO1xuICAgIH1cblxuICAgIENMSVFaRW52aXJvbm1lbnQuZ3ppcCA9IGd6aXA7XG5cbiAgICAvLyBjdXR0aW5nIGN5Y2xpYyBkZXBlbmRlbmN5XG4gICAgQ0xJUVpFbnZpcm9ubWVudC5nZXRMb2dvRGV0YWlscyA9IENsaXF6VXRpbHMuZ2V0TG9nb0RldGFpbHMuYmluZChDbGlxelV0aWxzKTtcbiAgICBDTElRWkVudmlyb25tZW50LmdldERldGFpbHNGcm9tVXJsID0gQ2xpcXpVdGlscy5nZXREZXRhaWxzRnJvbVVybC5iaW5kKENsaXF6VXRpbHMpO1xuICAgIENMSVFaRW52aXJvbm1lbnQuZ2V0TG9jYWxpemVkU3RyaW5nID0gQ2xpcXpVdGlscy5nZXRMb2NhbGl6ZWRTdHJpbmcuYmluZChDbGlxelV0aWxzKTtcbiAgICBDTElRWkVudmlyb25tZW50LmFwcCA9IENsaXF6VXRpbHMuYXBwO1xuICAgIENsaXF6VXRpbHMubG9nKCdJbml0aWFsaXplZCcsICdDbGlxelV0aWxzJyk7XG5cbiAgICB0cnkge1xuICAgICAgQ2xpcXpVdGlscy5zZXRMYW5nKG9wdGlvbnMubGFuZyk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAvLyBUT0RPOiBmaXggZm9yIGdob3N0ZXJ5XG4gICAgfVxuXG4gICAgQ2xpcXpVdGlscy50bGRFeHRyYWN0b3IgPSBDTElRWkVudmlyb25tZW50LnRsZEV4dHJhY3RvciB8fCBDbGlxelV0aWxzLmdlbmVyaWNUbGRFeHRyYWN0b3I7XG4gIH0sXG4gIGdldExhbmd1YWdlRnJvbUxvY2FsZTogZnVuY3Rpb24obG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5tYXRjaCgvKFthLXpdKykoPzpbLV9dKFtBLVpdKykpPy8pWzFdO1xuICB9LFxuICBTVVBQT1JURURfTEFOR1M6IHsnZGUnOidkZScsICdlbic6J2VuJywgJ2ZyJzonZnInfSxcbiAgZ2V0U3VwcG9ydGVkTGFuZ3VhZ2U6IGZ1bmN0aW9uKGxhbmcpIHtcbiAgICByZXR1cm4gQ2xpcXpVdGlscy5TVVBQT1JURURfTEFOR1NbbGFuZ10gfHwgJ2VuJztcbiAgfSxcbiAgc2V0TGFuZzogZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgIGNvbnN0IGxhbmcgPSBDbGlxelV0aWxzLmdldExhbmd1YWdlRnJvbUxvY2FsZShsb2NhbGUpO1xuICAgIGNvbnN0IHN1cHBvcnRlZExhbmcgPSBDbGlxelV0aWxzLmdldFN1cHBvcnRlZExhbmd1YWdlKGxhbmcpO1xuICAgIENsaXF6VXRpbHMuUFJFRkVSUkVEX0xBTkdVQUdFID0gbG9jYWxlO1xuICAgIENsaXF6VXRpbHMuZ2V0TG9jYWxlRmlsZShzdXBwb3J0ZWRMYW5nKTtcbiAgfSxcblxuICBpc051bWJlcjogZnVuY3Rpb24obil7XG4gICAgICAvKlxuICAgICAgTk9URTogdGhpcyBmdW5jdGlvbiBjYW4ndCByZWNvZ25pemUgbnVtYmVycyBpbiB0aGUgZm9ybSBzdWNoIGFzOiBcIjEuMkJcIiwgYnV0IGl0IGNhbiBmb3IgXCIxZTRcIi4gU2VlIHNwZWNpZmljYXRpb24gZm9yIGlzRmluaXRlKClcbiAgICAgICAqL1xuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgfSxcblxuICAvL3JldHVybnMgdGhlIHR5cGUgb25seSBpZiBpdCBpcyBrbm93blxuICBnZXRLbm93blR5cGU6IGZ1bmN0aW9uKHR5cGUpe1xuICAgIHJldHVybiBWRVJUSUNBTF9FTkNPRElOR1MuaGFzT3duUHJvcGVydHkodHlwZSkgJiYgdHlwZTtcbiAgfSxcblxuICAvKipcbiAgICogQ29uc3RydWN0IGEgdXJpIGZyb20gYSB1cmxcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBhVXJsIC0gdXJsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgYU9yaWdpbkNoYXJzZXQgLSBvcHRpb25hbCBjaGFyYWN0ZXIgc2V0IGZvciB0aGUgVVJJXG4gICAqIEBwYXJhbSB7bnNJVVJJfSAgYUJhc2VVUkkgLSBiYXNlIFVSSSBmb3IgdGhlIHNwZWNcbiAgICovXG4gIG1ha2VVcmk6IENMSVFaRW52aXJvbm1lbnQubWFrZVVyaSxcblxuICBzZXRMb2dvRGI6IGZ1bmN0aW9uIChkYikge1xuICAgIEJSQU5EU19EQVRBQkFTRSA9IENsaXF6VXRpbHMuQlJBTkRTX0RBVEFCQVNFID0gZGI7XG4gIH0sXG4gIGdldExvZ29EZXRhaWxzOiBmdW5jdGlvbih1cmxEZXRhaWxzKXtcbiAgICB2YXIgYmFzZSA9IHVybERldGFpbHMubmFtZSxcbiAgICAgICAgYmFzZUNvcmUgPSBiYXNlLnJlcGxhY2UoL1stXS9nLCBcIlwiKSxcbiAgICAgICAgY2hlY2sgPSBmdW5jdGlvbihob3N0LHJ1bGUpe1xuICAgICAgICAgIHZhciBhZGRyZXNzID0gaG9zdC5sYXN0SW5kZXhPZihiYXNlKSwgcGFyc2VkZG9tYWluID0gaG9zdC5zdWJzdHIoMCxhZGRyZXNzKSArIFwiJFwiICsgaG9zdC5zdWJzdHIoYWRkcmVzcyArIGJhc2UubGVuZ3RoKVxuXG4gICAgICAgICAgcmV0dXJuIHBhcnNlZGRvbWFpbi5pbmRleE9mKHJ1bGUpICE9IC0xXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3VsdCA9IHt9LFxuICAgICAgICBkb21haW5zID0gQlJBTkRTX0RBVEFCQVNFLmRvbWFpbnM7XG5cblxuXG4gICAgaWYoYmFzZS5sZW5ndGggPT0gMClcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBpZiAoYmFzZSA9PSBcIklQXCIpIHJlc3VsdCA9IHsgdGV4dDogXCJJUFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiOTA3N2UzXCIgfVxuXG4gICAgZWxzZSBpZiAoZG9tYWluc1tiYXNlXSkge1xuICAgICAgZm9yICh2YXIgaT0wLGltYXg9ZG9tYWluc1tiYXNlXS5sZW5ndGg7aTxpbWF4O2krKykge1xuICAgICAgICB2YXIgcnVsZSA9IGRvbWFpbnNbYmFzZV1baV0gLy8gciA9IHJ1bGUsIGIgPSBiYWNrZ3JvdW5kLWNvbG9yLCBsID0gbG9nbywgdCA9IHRleHQsIGMgPSBjb2xvclxuXG4gICAgICAgIGlmIChpID09IGltYXggLSAxIHx8IGNoZWNrKHVybERldGFpbHMuaG9zdCxydWxlLnIpKSB7XG4gICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBydWxlLmI/cnVsZS5iOm51bGwsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHJ1bGUubD9cInVybChodHRwczovL2Nkbi5jbGlxei5jb20vYnJhbmRzLWRhdGFiYXNlL2RhdGFiYXNlL1wiICsgdGhpcy5CUkFORFNfREFUQUJBU0VfVkVSU0lPTiArIFwiL2xvZ29zL1wiICsgYmFzZSArIFwiL1wiICsgcnVsZS5yICsgXCIuc3ZnKVwiOlwiXCIsXG4gICAgICAgICAgICB0ZXh0OiBydWxlLnQsXG4gICAgICAgICAgICBjb2xvcjogcnVsZS5jP1wiXCI6XCIjZmZmXCJcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC50ZXh0ID0gcmVzdWx0LnRleHQgfHwgKGJhc2VDb3JlLmxlbmd0aCA+IDEgPyAoKGJhc2VDb3JlWzBdLnRvVXBwZXJDYXNlKCkgKyBiYXNlQ29yZVsxXS50b0xvd2VyQ2FzZSgpKSkgOiBcIlwiKVxuICAgIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSByZXN1bHQuYmFja2dyb3VuZENvbG9yIHx8IEJSQU5EU19EQVRBQkFTRS5wYWxldHRlW2Jhc2Uuc3BsaXQoXCJcIikucmVkdWNlKGZ1bmN0aW9uKGEsYil7IHJldHVybiBhICsgYi5jaGFyQ29kZUF0KDApIH0sMCkgJSBCUkFORFNfREFUQUJBU0UucGFsZXR0ZS5sZW5ndGhdXG4gICAgdmFyIGNvbG9ySUQgPSBCUkFORFNfREFUQUJBU0UucGFsZXR0ZS5pbmRleE9mKHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IpLFxuICAgICAgICBidXR0b25DbGFzcyA9IEJSQU5EU19EQVRBQkFTRS5idXR0b25zICYmIGNvbG9ySUQgIT0gLTEgJiYgQlJBTkRTX0RBVEFCQVNFLmJ1dHRvbnNbY29sb3JJRF0/QlJBTkRTX0RBVEFCQVNFLmJ1dHRvbnNbY29sb3JJRF06MTBcblxuICAgIHJlc3VsdC5idXR0b25zQ2xhc3MgPSBcImNsaXF6LWJyYW5kcy1idXR0b24tXCIgKyBidXR0b25DbGFzc1xuICAgIHJlc3VsdC5zdHlsZSA9IFwiYmFja2dyb3VuZC1jb2xvcjogI1wiICsgcmVzdWx0LmJhY2tncm91bmRDb2xvciArIFwiO2NvbG9yOlwiICsgKHJlc3VsdC5jb2xvciB8fCAnI2ZmZicpICsgXCI7XCJcblxuXG4gICAgaWYgKHJlc3VsdC5iYWNrZ3JvdW5kSW1hZ2UpIHJlc3VsdC5zdHlsZSArPSBcImJhY2tncm91bmQtaW1hZ2U6XCIgKyByZXN1bHQuYmFja2dyb3VuZEltYWdlICsgXCI7IHRleHQtaW5kZW50OiAtMTBlbTtcIlxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9LFxuICBodHRwSGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBlcnJvckhhbmRsZXIgPSBhcmd1bWVudHNbM107IC8vIHNlZSBodHRwR2V0IG9yIGh0dHBQb3N0IGFyZ3VtZW50c1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gaHR0cEhhbmRsZXIuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgaWYoZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgIGVycm9ySGFuZGxlcihlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIENsaXF6VXRpbHMubG9nKGUsIFwiaHR0cEhhbmRsZXIgZmFpbGVkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaHR0cEdldDogZnVuY3Rpb24odXJsLCBjYWxsYmFjaywgb25lcnJvciwgdGltZW91dCwgXywgc3luYyl7XG4gICAgcmV0dXJuIENsaXF6VXRpbHMuaHR0cEhhbmRsZXIoJ0dFVCcsIHVybCwgY2FsbGJhY2ssIG9uZXJyb3IsIHRpbWVvdXQsIF8sIHN5bmMpO1xuICB9LFxuICBodHRwUG9zdDogZnVuY3Rpb24odXJsLCBjYWxsYmFjaywgZGF0YSwgb25lcnJvciwgdGltZW91dCkge1xuICAgIHJldHVybiBDbGlxelV0aWxzLmh0dHBIYW5kbGVyKCdQT1NUJywgdXJsLCBjYWxsYmFjaywgb25lcnJvciwgdGltZW91dCwgZGF0YSk7XG4gIH0sXG4gIGh0dHBQdXQ6IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2ssIGRhdGEsIG9uZXJyb3IsIHRpbWVvdXQpIHtcbiAgICByZXR1cm4gQ2xpcXpVdGlscy5odHRwSGFuZGxlcignUFVUJywgdXJsLCBjYWxsYmFjaywgb25lcnJvciwgdGltZW91dCwgZGF0YSk7XG4gIH0sXG4gIGdldExvY2FsU3RvcmFnZSh1cmwpIHtcbiAgICByZXR1cm4gbmV3IFN0b3JhZ2UodXJsKTtcbiAgfSxcbiAgLyoqXG4gICAqIExvYWRzIGEgcmVzb3VyY2UgVVJMIGZyb20gdGhlIHhwaS5cbiAgICpcbiAgICogV3JhcHMgaHR0cEdldCBpbiBhIHRyeS1jYXRjaCBjbGF1c2UuIFdlIG5lZWQgdG8gZG8gdGhpcywgYmVjYXVzZSB3aGVuXG4gICAqIHRyeWluZyB0byBsb2FkIGEgbm9uLWV4aXN0aW5nIGZpbGUgZnJvbSBhbiB4cGkgdmlhIHhtbGh0dHByZXF1ZXN0LCBGaXJlZm94XG4gICAqIHRocm93cyBhIE5TX0VSUk9SX0ZJTEVfTk9UX0ZPVU5EIGV4Y2VwdGlvbiBpbnN0ZWFkIG9mIGNhbGxpbmcgdGhlIG9uZXJyb3JcbiAgICogZnVuY3Rpb24uXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODI3MjQzIChwcm9iYWJseSkuXG4gICAqL1xuICBsb2FkUmVzb3VyY2U6IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gQ2xpcXpVdGlscy5odHRwR2V0KHVybCwgY2FsbGJhY2ssIG9uZXJyb3IsIDMwMDApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIENsaXF6VXRpbHMubG9nKFwiQ291bGQgbm90IGxvYWQgcmVzb3VyY2UgXCIgKyB1cmwgKyBcIiBmcm9tIHRoZSB4cGlcIixcbiAgICAgICAgICAgICAgICAgICAgIFwiQ2xpcXpVdGlscy5odHRwSGFuZGxlclwiKTtcbiAgICAgIG9uZXJyb3IgJiYgb25lcnJvcigpO1xuICAgIH1cbiAgfSxcbiAgb3BlblRhYkluV2luZG93OiBDTElRWkVudmlyb25tZW50Lm9wZW5UYWJJbldpbmRvdyxcbiAgZ2V0UHJlZjogcHJlZnMuZ2V0LFxuICBzZXRQcmVmOiBwcmVmcy5zZXQsXG4gIGhhc1ByZWY6IHByZWZzLmhhcyxcbiAgY2xlYXJQcmVmOiBwcmVmcy5jbGVhcixcbiAgbG9nOiBmdW5jdGlvbiAobXNnLCBrZXkpIHtcbiAgICBjb25zb2xlLmxvZyhrZXksIG1zZyk7XG4gIH0sXG4gIGdldERheTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyA4NjQwMDAwMCk7XG4gIH0sXG4gIC8vY3JlYXRlcyBhIHJhbmRvbSAnbGVuJyBsb25nIHN0cmluZyBmcm9tIHRoZSBpbnB1dCBzcGFjZVxuICByYW5kOiBmdW5jdGlvbihsZW4sIF9zcGFjZSl7XG4gICAgICB2YXIgcmV0ID0gJycsIGksXG4gICAgICAgICAgc3BhY2UgPSBfc3BhY2UgfHwgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JyxcbiAgICAgICAgICBzTGVuID0gc3BhY2UubGVuZ3RoO1xuXG4gICAgICBmb3IoaT0wOyBpIDwgbGVuOyBpKysgKVxuICAgICAgICAgIHJldCArPSBzcGFjZS5jaGFyQXQoTWF0aC5mbG9vcihyYW5kb20oKSAqIHNMZW4pKTtcblxuICAgICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgaGFzaDogZnVuY3Rpb24ocyl7XG4gICAgcmV0dXJuIHMuc3BsaXQoJycpLnJlZHVjZShmdW5jdGlvbihhLGIpeyByZXR1cm4gKCgoYTw8NCktYSkrYi5jaGFyQ29kZUF0KDApKSAmIDB4RUZGRkZGRn0sIDApXG4gIH0sXG4gIGNsZWFuTW96aWxsYUFjdGlvbnM6IGZ1bmN0aW9uKHVybCA9ICcnKXtcbiAgICBpZih1cmwuaW5kZXhPZihcIm1vei1hY3Rpb246XCIpID09IDApIHtcbiAgICAgICAgdmFyIFssIGFjdGlvbiwgdXJsXSA9IHVybC5tYXRjaCgvXm1vei1hY3Rpb246KFteLF0rKSwoLiopJC8pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIGhhbmRsZSBjYXNlcyBsaWtlOiBtb3otYWN0aW9uOnZpc2l0dXJsLHtcInVybFwiOiBcIi4uLlwifVxuICAgICAgICAgIGNvbnN0IG1vekFjdGlvblVybCA9IEpTT04ucGFyc2UodXJsKS51cmw7XG4gICAgICAgICAgaWYgKG1vekFjdGlvblVybCkge1xuICAgICAgICAgICAgdXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KG1vekFjdGlvblVybCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFthY3Rpb24sIHVybF07XG4gIH0sXG4gIGNsZWFuVXJsUHJvdG9jb2w6IGZ1bmN0aW9uKHVybCwgY2xlYW5XV1cpe1xuICAgIGlmICghdXJsKVxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgLy8gcmVtb3ZlcyBwcm90b2NvbCBpZiBpdCdzIGh0dHAocykuIFNlZSBDTElRWklVTS0yMTguXG4gICAgY29uc3QgdXJsTG93ZXJlZCA9IHVybC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh1cmxMb3dlcmVkLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSlcbiAgICAgIHVybCA9IHVybC5zbGljZSg3KTtcbiAgICBpZiAodXJsTG93ZXJlZC5zdGFydHNXaXRoKCdodHRwczovLycpKVxuICAgICAgdXJsID0gdXJsLnNsaWNlKDgpO1xuXG4gICAgLy8gcmVtb3ZlcyB0aGUgd3d3LlxuICAgIGlmIChjbGVhbldXVyAmJiB1cmwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCd3d3cuJykpXG4gICAgICB1cmwgPSB1cmwuc2xpY2UoNCk7XG5cbiAgICByZXR1cm4gdXJsO1xuICB9LFxuICBnZW5lcmljVGxkRXh0cmFjdG9yOiB0bGRzLmdldFB1YmxpY1N1ZmZpeCxcbiAgZ2V0RGV0YWlsc0Zyb21Vcmw6IGZ1bmN0aW9uKG9yaWdpbmFsVXJsKXtcbiAgICB2YXIgW2FjdGlvbiwgb3JpZ2luYWxVcmxdID0gQ2xpcXpVdGlscy5jbGVhbk1vemlsbGFBY3Rpb25zKG9yaWdpbmFsVXJsKTtcbiAgICAvLyBleGNsdWRlIHByb3RvY29sXG4gICAgdmFyIHVybCA9IG9yaWdpbmFsVXJsLFxuICAgICAgICBzY2hlbWUgPSAnJyxcbiAgICAgICAgc2xhc2hlcyA9ICcnLFxuICAgICAgICBuYW1lID0gJycsXG4gICAgICAgIHRsZCA9ICcnLFxuICAgICAgICBzdWJkb21haW5zID0gW10sXG4gICAgICAgIHBhdGggPSAnJyxcbiAgICAgICAgcXVlcnkgPScnLFxuICAgICAgICBmcmFnbWVudCA9ICcnO1xuXG4gICAgLy8gcmVtb3ZlIHNjaGVtZVxuICAgIGNvbnN0IHNjaGVtZU1hdGNoID0gc2NoZW1lUkUuZXhlYyh1cmwpO1xuICAgIGlmIChzY2hlbWVNYXRjaCkge1xuICAgICAgc2NoZW1lID0gc2NoZW1lTWF0Y2hbMV07XG4gICAgICBzbGFzaGVzID0gc2NoZW1lTWF0Y2hbMl07XG4gICAgICB1cmwgPSBzY2hlbWVNYXRjaFszXTtcbiAgICB9XG4gICAgY29uc3Qgc3NsID0gc2NoZW1lID09ICdodHRwcyc7XG5cbiAgICAvLyBzZXBhcmF0ZSBob3N0bmFtZSBmcm9tIHBhdGgsIGV0Yy4gQ291bGQgYmUgc2VwYXJhdGVkIGZyb20gcmVzdCBieSAvLCA/IG9yICNcbiAgICB2YXIgaG9zdCA9IHVybC5zcGxpdCgvW1xcL1xcI1xcP10vKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBwYXRoID0gdXJsLnJlcGxhY2UoaG9zdCwnJyk7XG5cbiAgICAvLyBzZXBhcmF0ZSB1c2VybmFtZTpwYXNzd29yZEAgZnJvbSBob3N0XG4gICAgdmFyIHVzZXJwYXNzX2hvc3QgPSBob3N0LnNwbGl0KCdAJyk7XG4gICAgaWYodXNlcnBhc3NfaG9zdC5sZW5ndGggPiAxKVxuICAgICAgaG9zdCA9IHVzZXJwYXNzX2hvc3RbMV07XG5cbiAgICAvLyBQYXJzZSBQb3J0IG51bWJlclxuICAgIHZhciBwb3J0ID0gXCJcIjtcblxuICAgIHZhciBpc0lQdjQgPSBpc0lwdjRBZGRyZXNzKGhvc3QpO1xuICAgIHZhciBpc0lQdjYgPSBpc0lwdjZBZGRyZXNzKGhvc3QpO1xuXG4gICAgdmFyIGluZGV4T2ZDb2xvbiA9IGhvc3QuaW5kZXhPZihcIjpcIik7XG4gICAgaWYgKCghaXNJUHY2IHx8IGlzSVB2NCkgJiYgaW5kZXhPZkNvbG9uID49IDApIHtcbiAgICAgIHBvcnQgPSBob3N0LnN1YnN0cihpbmRleE9mQ29sb24rMSk7XG4gICAgICBob3N0ID0gaG9zdC5zdWJzdHIoMCxpbmRleE9mQ29sb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0lQdjYpIHtcbiAgICAgIC8vIElmIGFuIElQdjYgYWRkcmVzcyBoYXMgYSBwb3J0IG51bWJlciwgaXQgd2lsbCBiZSByaWdodCBhZnRlciBhIGNsb3NpbmcgYnJhY2tldCBdIDogZm9ybWF0IFtpcF92Nl06cG9ydFxuICAgICAgdmFyIGVuZE9mSVAgPSBob3N0LmluZGV4T2YoJ106Jyk7XG4gICAgICBpZiAoZW5kT2ZJUCA+PSAwKSB7XG4gICAgICAgIHBvcnQgPSBob3N0LnNwbGl0KCddOicpWzFdO1xuICAgICAgICBob3N0ID0gaG9zdC5zcGxpdCgnXTonKVswXS5yZXBsYWNlKCdbJywnJykucmVwbGFjZSgnXScsJycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV4dHJhY3QgcXVlcnkgYW5kIGZyYWdtZW50IGZyb20gdXJsXG4gICAgdmFyIHF1ZXJ5ID0gJyc7XG4gICAgdmFyIHF1ZXJ5X2lkeCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGlmKHF1ZXJ5X2lkeCAhPSAtMSkge1xuICAgICAgcXVlcnkgPSBwYXRoLnN1YnN0cihxdWVyeV9pZHgrMSk7XG4gICAgfVxuXG4gICAgdmFyIGZyYWdtZW50ID0gJyc7XG4gICAgdmFyIGZyYWdtZW50X2lkeCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmKGZyYWdtZW50X2lkeCAhPSAtMSkge1xuICAgICAgZnJhZ21lbnQgPSBwYXRoLnN1YnN0cihmcmFnbWVudF9pZHgrMSk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIHF1ZXJ5IGFuZCBmcmFnbWVudCBmcm9tIHBhdGhcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKCc/JyArIHF1ZXJ5LCAnJyk7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgnIycgKyBmcmFnbWVudCwgJycpO1xuICAgIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgnIycgKyBmcmFnbWVudCwgJycpO1xuXG4gICAgLy8gZXh0cmEgLSBhbGwgcGF0aCwgcXVlcnkgYW5kIGZyYWdtZW50XG4gICAgdmFyIGV4dHJhID0gcGF0aDtcbiAgICBpZihxdWVyeSlcbiAgICAgIGV4dHJhICs9IFwiP1wiICsgcXVlcnk7XG4gICAgaWYoZnJhZ21lbnQpXG4gICAgICBleHRyYSArPSBcIiNcIiArIGZyYWdtZW50O1xuXG4gICAgaXNJUHY0ID0gaXNJcHY0QWRkcmVzcyhob3N0KTtcbiAgICBpc0lQdjYgPSBpc0lwdjZBZGRyZXNzKGhvc3QpO1xuICAgIHZhciBpc0xvY2FsaG9zdCA9IENsaXF6VXRpbHMuaXNMb2NhbGhvc3QoaG9zdCwgaXNJUHY0LCBpc0lQdjYpO1xuXG4gICAgLy8gZmluZCBwYXJ0cyBvZiBob3N0bmFtZVxuICAgIGlmICghaXNJUHY0ICYmICFpc0lQdjYgJiYgIWlzTG9jYWxob3N0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgaG9zdFdpdGhvdXRUbGQgPSBob3N0O1xuICAgICAgICB0bGQgPSBDbGlxelV0aWxzLnRsZEV4dHJhY3Rvcihob3N0KTtcblxuICAgICAgICBpZiAodGxkKSB7XG4gICAgICAgICAgaG9zdFdpdGhvdXRUbGQgPSBob3N0LnNsaWNlKDAsIC0odGxkLmxlbmd0aCArIDEpKTsgLy8gKzEgZm9yIHRoZSAnLidcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldCBzdWJkb21haW5zXG4gICAgICAgIHN1YmRvbWFpbnMgPSBob3N0V2l0aG91dFRsZC5zcGxpdCgnLicpO1xuICAgICAgICAvLyBHZXQgdGhlIGRvbWFpbiBuYW1lIHcvbyBzdWJkb21haW5zIGFuZCB3L28gVExEXG4gICAgICAgIG5hbWUgPSBzdWJkb21haW5zLnBvcCgpO1xuXG4gICAgICAgIC8vcmVtb3ZlIHd3dyBpZiBleGlzdHNcbiAgICAgICAgLy8gVE9ETzogSSBkb24ndCB0aGluayB0aGlzIGlzIHRoZSByaWdodCBwbGFjZSB0byBkbyB0aGlzLlxuICAgICAgICAvLyAgICAgICBEaXNhYmxlZCBmb3Igbm93LCBidXQgY2hlY2sgdGhlcmUgYXJlIG5vIGlzc3Vlcy5cbiAgICAgICAgLy8gaG9zdCA9IGhvc3QuaW5kZXhPZignd3d3LicpID09IDAgPyBob3N0LnNsaWNlKDQpIDogaG9zdDtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIG5hbWUgPSBcIlwiO1xuICAgICAgICBob3N0ID0gXCJcIjtcbiAgICAgICAgLy9DbGlxelV0aWxzLmxvZygnV0FSTklORyBGYWlsZWQgZm9yOiAnICsgb3JpZ2luYWxVcmwsICdDbGlxelV0aWxzLmdldERldGFpbHNGcm9tVXJsJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbmFtZSA9IGlzTG9jYWxob3N0ID8gXCJsb2NhbGhvc3RcIiA6IFwiSVBcIjtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgd3d3IGZyb20gYmVnaW5uaW5nLCB3ZSBuZWVkIGNsZWFuSG9zdCBpbiB0aGUgZnJpZW5kbHkgdXJsXG4gICAgdmFyIGNsZWFuSG9zdCA9IGhvc3Q7XG4gICAgaWYoaG9zdC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3d3dy4nKSA9PSAwKSB7XG4gICAgICBjbGVhbkhvc3QgPSBob3N0LnNsaWNlKDQpO1xuICAgIH1cblxuICAgIHZhciBmcmllbmRseV91cmwgPSBjbGVhbkhvc3QgKyBleHRyYTtcbiAgICBpZiAoc2NoZW1lICYmIHNjaGVtZSAhPSAnaHR0cCcgJiYgc2NoZW1lICE9ICdodHRwcycpXG4gICAgICBmcmllbmRseV91cmwgPSBzY2hlbWUgKyBcIjpcIiArIHNsYXNoZXMgKyBmcmllbmRseV91cmw7XG4gICAgLy9yZW1vdmUgdHJhaWxpbmcgc2xhc2ggZnJvbSB0aGUgZW5kXG4gICAgZnJpZW5kbHlfdXJsID0gQ2xpcXpVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2goZnJpZW5kbHlfdXJsKTtcblxuICAgIC8vSGFuZGxlIGNhc2Ugd2hlcmUgd2UgaGF2ZSBvbmx5IHRsZCBmb3IgZXhhbXBsZSBodHRwOi8vY2xpcXpuYXNcbiAgICBpZihjbGVhbkhvc3QgPT09IHRsZCkge1xuICAgICAgbmFtZSA9IHRsZDtcbiAgICB9XG5cbiAgICB2YXIgdXJsRGV0YWlscyA9IHtcbiAgICAgICAgICAgICAgc2NoZW1lOiBzY2hlbWUgPyBzY2hlbWUgKyAnOicgOiAnJyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgZG9tYWluOiB0bGQgPyBuYW1lICsgJy4nICsgdGxkIDogJycsXG4gICAgICAgICAgICAgIHRsZDogdGxkLFxuICAgICAgICAgICAgICBzdWJkb21haW5zOiBzdWJkb21haW5zLFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICAgICAgICAgIGZyYWdtZW50OiBmcmFnbWVudCxcbiAgICAgICAgICAgICAgZXh0cmE6IGV4dHJhLFxuICAgICAgICAgICAgICBob3N0OiBob3N0LFxuICAgICAgICAgICAgICBjbGVhbkhvc3Q6IGNsZWFuSG9zdCxcbiAgICAgICAgICAgICAgc3NsOiBzc2wsXG4gICAgICAgICAgICAgIHBvcnQ6IHBvcnQsXG4gICAgICAgICAgICAgIGZyaWVuZGx5X3VybDogZnJpZW5kbHlfdXJsXG4gICAgICAgIH07XG5cbiAgICByZXR1cm4gdXJsRGV0YWlscztcbiAgfSxcbiAgc3RyaXBUcmFpbGluZ1NsYXNoOiBmdW5jdGlvbihzdHIpIHtcbiAgICBpZihzdHIuc3Vic3RyKC0xKSA9PT0gJy8nKSB7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfSxcbiAgaXNVcmwsXG4gIC8vIENoZWNrcyBpZiB0aGUgZ2l2ZW4gc3RyaW5nIGlzIGEgdmFsaWQgSVB2NCBhZGRyZXNcbiAgaXNJUHY0OiBpc0lwdjRBZGRyZXNzLFxuICBpc0lQdjY6IGlzSXB2NkFkZHJlc3MsXG5cbiAgaXNMb2NhbGhvc3Q6IGZ1bmN0aW9uKGhvc3QsIGlzSVB2NCwgaXNJUHY2KSB7XG4gICAgaWYgKGhvc3QgPT0gXCJsb2NhbGhvc3RcIikgcmV0dXJuIHRydWU7XG4gICAgaWYgKGlzSVB2NCAmJiBob3N0LnN1YnN0cigwLDMpID09IFwiMTI3XCIpIHJldHVybiB0cnVlO1xuICAgIGlmIChpc0lQdjYgJiYgaG9zdCA9PSBcIjo6MVwiKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9LFxuICAvLyBjaGVja3MgaWYgYSB2YWx1ZSByZXByZXNlbnRzIGFuIHVybCB3aGljaCBpcyBhIHNlYWNoIGVuZ2luZVxuICBpc1NlYXJjaDogZnVuY3Rpb24odmFsdWUpe1xuICAgIGlmIChDbGlxelV0aWxzLmlzVXJsKHZhbHVlKSkge1xuICAgICAgY29uc3QgdXJsID0gdGhpcy5jbGVhbk1vemlsbGFBY3Rpb25zKHZhbHVlKVsxXTtcbiAgICAgIGNvbnN0IHtuYW1lLCBzdWJkb21haW5zLCBwYXRofSA9IENsaXF6VXRpbHMuZ2V0RGV0YWlsc0Zyb21VcmwodXJsKTtcbiAgICAgIC8vIGFsbG93IG9ubHkgJ3d3dycgYW5kICdkZScgKGZvciBZYWhvbykgc3ViZG9tYWlucyB0byBleGNsdWRlICdtYXBzLmdvb2dsZS5jb20nIGV0Yy5cbiAgICAgIC8vIGFuZCBlbXB0eSBwYXRoIG9ubHkgdG8gZXhjbHVkZSAnd3d3Lmdvb2dsZS5jb20vbWFwcycgZXRjLlxuICAgICAgY29uc3QgZmlyc3RTdWJkb21haW4gPSBzdWJkb21haW5zLmxlbmd0aCA/IHN1YmRvbWFpbnNbMF0gOiAnJztcbiAgICAgIHJldHVybiAoIXBhdGggfHwgKHBhdGgubGVuZ3RoID09PSAxICYmIHBhdGhbMF0gPT09ICcvJykpICYmIChcbiAgICAgICAgKFxuICAgICAgICAgIG5hbWUgPT09ICdnb29nbGUnIHx8XG4gICAgICAgICAgbmFtZSA9PT0gJ2JpbmcnIHx8XG4gICAgICAgICAgbmFtZSA9PT0gJ2R1Y2tkdWNrZ28nIHx8XG4gICAgICAgICAgbmFtZSA9PT0gJ3N0YXJ0cGFnZSdcbiAgICAgICAgKSAmJiAoIWZpcnN0U3ViZG9tYWluIHx8IGZpcnN0U3ViZG9tYWluID09PSAnd3d3JykgfHxcbiAgICAgICAgKFxuICAgICAgICAgIG5hbWUgPT09ICd5YWhvbydcbiAgICAgICAgKSAmJiAoIWZpcnN0U3ViZG9tYWluIHx8IGZpcnN0U3ViZG9tYWluID09PSAnZGUnKSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgLy8gY2hlY2tzIGlmIGEgc3RyaW5nIGlzIGEgY29tcGxldGUgdXJsXG4gIGlzQ29tcGxldGVVcmw6IGZ1bmN0aW9uKGlucHV0KXtcbiAgICB2YXIgcGF0dGVybiA9IC8oZnRwfGh0dHB8aHR0cHMpOlxcL1xcLyhcXHcrOnswLDF9XFx3KkApPyhcXFMrKSg6WzAtOV0rKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcbiAgICBpZighcGF0dGVybi50ZXN0KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIC8vIGV4dHJhY3QgcXVlcnkgdGVybSBmcm9tIHNlYXJjaCBlbmdpbmUgcmVzdWx0IHBhZ2UgVVJMc1xuICBleHRyYWN0UXVlcnlGcm9tVXJsOiBmdW5jdGlvbih1cmwpIHtcbiAgICAvLyBHb29nbGVcbiAgICBpZiAodXJsLnNlYXJjaCgvaHR0cChzPyk6XFwvXFwvd3d3XFwuZ29vZ2xlXFwuLipcXC8uKnE9LiovaSkgPT09IDApIHtcbiAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCdxPScpICsgMikuc3BsaXQoJyYnKVswXTtcbiAgICAvLyBCaW5nXG4gICAgfSBlbHNlIGlmICh1cmwuc2VhcmNoKC9odHRwKHM/KTpcXC9cXC93d3dcXC5iaW5nXFwuLipcXC8uKnE9LiovaSkgPT09IDApIHtcbiAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoJ3E9JykgKyAyKS5zcGxpdCgnJicpWzBdO1xuICAgIC8vIFlhaG9vXG4gICAgfSBlbHNlIGlmICh1cmwuc2VhcmNoKC9odHRwKHM/KTpcXC9cXC8uKnNlYXJjaFxcLnlhaG9vXFwuY29tXFwvc2VhcmNoLipwPS4qL2kpID09PSAwKSB7XG4gICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKCdwPScpICsgMikuc3BsaXQoJyYnKVswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gbnVsbDtcbiAgICB9XG4gICAgdmFyIGRlY29kZWQgPSB1cmwgPyBkZWNvZGVVUklDb21wb25lbnQodXJsLnJlcGxhY2UoL1xcKy9nLCcgJykpIDogbnVsbDtcbiAgICBpZiAoZGVjb2RlZCkgcmV0dXJuIGRlY29kZWQ7XG4gICAgZWxzZSByZXR1cm4gdXJsO1xuICB9LFxuICAvLyBSZW1vdmUgY2x1dHRlciAoaHR0cCwgd3d3KSBmcm9tIHVybHNcbiAgZ2VuZXJhbGl6ZVVybDogZnVuY3Rpb24odXJsLCBza2lwQ29ycmVjdGlvbikge1xuICAgIGlmICghdXJsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciB2YWwgPSB1cmwudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgY2xlYW5QYXJ0cyA9IENsaXF6VXRpbHMuY2xlYW5VcmxQcm90b2NvbCh2YWwsIGZhbHNlKS5zcGxpdCgnLycpLFxuICAgICAgaG9zdCA9IGNsZWFuUGFydHNbMF0sXG4gICAgICBwYXRoTGVuZ3RoID0gMCxcbiAgICAgIFNZTUJPTFMgPSAvLHxcXC4vZztcbiAgICBpZiAoIXNraXBDb3JyZWN0aW9uKSB7XG4gICAgICBpZiAoY2xlYW5QYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhdGhMZW5ndGggPSAoJy8nICsgY2xlYW5QYXJ0cy5zbGljZSgxKS5qb2luKCcvJykpLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGlmIChob3N0LmluZGV4T2YoJ3d3dycpID09PSAwICYmIGhvc3QubGVuZ3RoID4gNCkge1xuICAgICAgICAvLyBvbmx5IGZpeCBzeW1ib2xzIGluIGhvc3RcbiAgICAgICAgaWYgKFNZTUJPTFMudGVzdChob3N0WzNdKSAmJiBob3N0WzRdICE9ICcgJylcbiAgICAgICAgLy8gcmVwbGFjZSBvbmx5IGlzc3VlcyBpbiB0aGUgaG9zdCBuYW1lLCBub3QgZXZlciBpbiB0aGUgcGF0aFxuICAgICAgICAgIHZhbCA9IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIHBhdGhMZW5ndGgpLnJlcGxhY2UoU1lNQk9MUywgJy4nKSArXG4gICAgICAgICAgKHBhdGhMZW5ndGggPyB2YWwuc3Vic3RyKC1wYXRoTGVuZ3RoKSA6ICcnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdXJsID0gQ2xpcXpVdGlscy5jbGVhblVybFByb3RvY29sKHZhbCwgdHJ1ZSk7XG4gICAgcmV0dXJuIHVybFt1cmwubGVuZ3RoIC0gMV0gPT0gJy8nID8gdXJsLnNsaWNlKDAsLTEpIDogdXJsO1xuICB9LFxuICAvLyBSZW1vdmUgY2x1dHRlciBmcm9tIHVybHMgdGhhdCBwcmV2ZW50cyBwYXR0ZXJuIGRldGVjdGlvbiwgZS5nLiBjaGVja3N1bVxuICBzaW1wbGlmeVVybDogZnVuY3Rpb24odXJsKSB7XG4gICAgdmFyIHE7XG4gICAgLy8gR29vZ2xlIHJlZGlyZWN0IHVybHNcbiAgICBpZiAodXJsLnNlYXJjaCgvaHR0cChzPyk6XFwvXFwvd3d3XFwuZ29vZ2xlXFwuLipcXC91cmxcXD8uKnVybD0uKi9pKSA9PT0gMCkge1xuICAgICAgLy8gUmV0dXJuIHRhcmdldCBVUkwgaW5zdGVhZFxuICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoJ3VybD0nKSkuc3BsaXQoJyYnKVswXTtcbiAgICAgIHVybCA9IHVybC5zdWJzdHIoNCk7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHVybCk7XG5cbiAgICAgIC8vIFJlbW92ZSBjbHV0dGVyIGZyb20gR29vZ2xlIHNlYXJjaGVzXG4gICAgfSBlbHNlIGlmICh1cmwuc2VhcmNoKC9odHRwKHM/KTpcXC9cXC93d3dcXC5nb29nbGVcXC4uKlxcLy4qcT0uKi9pKSA9PT0gMCkge1xuICAgICAgcSA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCdxPScpKS5zcGxpdCgnJicpWzBdO1xuICAgICAgaWYgKHEgIT0gJ3E9Jykge1xuICAgICAgICAvLyB0Ym0gZGVmaW5lcyBjYXRlZ29yeSAoaW1hZ2VzL25ld3MvLi4uKVxuICAgICAgICB2YXIgcGFyYW0gPSB1cmwuaW5kZXhPZignIycpICE9IC0xID8gdXJsLnN1YnN0cih1cmwuaW5kZXhPZignIycpKSA6IHVybC5zdWJzdHIodXJsLmluZGV4T2YoJz8nKSk7XG4gICAgICAgIHZhciB0Ym0gPSBwYXJhbS5pbmRleE9mKCd0Ym09JykgIT0gLTEgPyAoJyYnICsgcGFyYW0uc3Vic3RyaW5nKHBhcmFtLmxhc3RJbmRleE9mKCd0Ym09JykpLnNwbGl0KCcmJylbMF0pIDogJyc7XG4gICAgICAgIHZhciBwYWdlID0gcGFyYW0uaW5kZXhPZignc3RhcnQ9JykgIT0gLTEgPyAoJyYnICsgcGFyYW0uc3Vic3RyaW5nKHBhcmFtLmxhc3RJbmRleE9mKCdzdGFydD0nKSkuc3BsaXQoJyYnKVswXSkgOiAnJztcbiAgICAgICAgcmV0dXJuICdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD8nICsgcSArIHRibSAvKisgcGFnZSovO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgIH1cbiAgICAgIC8vIEJpbmdcbiAgICB9IGVsc2UgaWYgKHVybC5zZWFyY2goL2h0dHAocz8pOlxcL1xcL3d3d1xcLmJpbmdcXC4uKlxcLy4qcT0uKi9pKSA9PT0gMCkge1xuICAgICAgcSA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YoJ3E9JykpLnNwbGl0KCcmJylbMF07XG4gICAgICBpZiAocSAhPSAncT0nKSB7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZignc2VhcmNoPycpICE9IC0xKVxuICAgICAgICAgIHJldHVybiB1cmwuc3Vic3RyKDAsIHVybC5pbmRleE9mKCdzZWFyY2g/JykpICsgJ3NlYXJjaD8nICsgcTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiB1cmwuc3Vic3RyKDAsIHVybC5pbmRleE9mKCcvPycpKSArICcvPycgKyBxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgIH1cbiAgICAgIC8vIFlhaG9vIHJlZGlyZWN0XG4gICAgfSBlbHNlIGlmICh1cmwuc2VhcmNoKC9odHRwKHM/KTpcXC9cXC9yLnNlYXJjaFxcLnlhaG9vXFwuY29tXFwvLiovaSkgPT09IDApIHtcbiAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcodXJsLmxhc3RJbmRleE9mKCcvUlU9JykpLnNwbGl0KCcvUks9JylbMF07XG4gICAgICB1cmwgPSB1cmwuc3Vic3RyKDQpO1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh1cmwpO1xuICAgICAgLy8gWWFob29cbiAgICB9IGVsc2UgaWYgKHVybC5zZWFyY2goL2h0dHAocz8pOlxcL1xcLy4qc2VhcmNoXFwueWFob29cXC5jb21cXC9zZWFyY2guKnA9LiovaSkgPT09IDApIHtcbiAgICAgIHZhciBwID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZigncD0nKSkuc3BsaXQoJyYnKVswXTtcbiAgICAgIGlmIChwICE9ICdwPScgJiYgdXJsLmluZGV4T2YoJzsnKSAhPSAtMSkge1xuICAgICAgICByZXR1cm4gdXJsLnN1YnN0cigwLCB1cmwuaW5kZXhPZignOycpKSArICc/JyArIHA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgfSxcblxuICAvLyBlc3RhYmxpc2hlcyB0aGUgY29ubmVjdGlvblxuICBwaW5nQ2xpcXpSZXN1bHRzOiBmdW5jdGlvbigpe1xuICAgIENsaXF6VXRpbHMuaHR0cEhhbmRsZXIoJ0hFQUQnLCBDbGlxelV0aWxzLlJFU1VMVFNfUFJPVklERVJfUElORyk7XG4gIH0sXG5cbiAgZ2V0UmVzdWx0c1Byb3ZpZGVyUXVlcnlTdHJpbmc6IGZ1bmN0aW9uKHEpIHtcbiAgICBsZXQgbnVtYmVyUmVzdWx0cyA9IDU7XG4gICAgaWYgKENsaXF6VXRpbHMuZ2V0UHJlZignbGFuZ3VhZ2VEZWR1cCcsIGZhbHNlKSkge1xuICAgICAgbnVtYmVyUmVzdWx0cyA9IDc7XG4gICAgfVxuICAgIGlmIChDbGlxelV0aWxzLmdldFByZWYoJ21vZHVsZXMuY29udGV4dC1zZWFyY2guZW5hYmxlZCcsIGZhbHNlKSkge1xuICAgICAgbnVtYmVyUmVzdWx0cyA9IDEwO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHEpICtcbiAgICAgICAgICAgQ2xpcXpVdGlscy5lbmNvZGVTZXNzaW9uUGFyYW1zKCkgK1xuICAgICAgICAgICBDbGlxekxhbmd1YWdlLnN0YXRlVG9RdWVyeVN0cmluZygpICtcbiAgICAgICAgICAgQ2xpcXpVdGlscy5lbmNvZGVMb2NhbGUoKSArXG4gICAgICAgICAgIENsaXF6VXRpbHMuZW5jb2RlUmVzdWx0T3JkZXIoKSArXG4gICAgICAgICAgIENsaXF6VXRpbHMuZW5jb2RlQ291bnRyeSgpICtcbiAgICAgICAgICAgQ2xpcXpVdGlscy5lbmNvZGVGaWx0ZXIoKSArXG4gICAgICAgICAgIENsaXF6VXRpbHMuZW5jb2RlTG9jYXRpb24odHJ1ZSkgKyAvLyBAVE9ETzogcmVtb3ZlIHRydWVcbiAgICAgICAgICAgQ2xpcXpVdGlscy5lbmNvZGVSZXN1bHRDb3VudChudW1iZXJSZXN1bHRzKSArXG4gICAgICAgICAgIENsaXF6VXRpbHMuZW5uY29kZVF1ZXJ5U3VnZ2VzdGlvblBhcmFtKCkgK1xuICAgICAgICAgICBDbGlxelV0aWxzLmRpc2FibGVXaWtpRGVkdXAoKTtcbiAgfSxcblxuICBnZXRSaWNoSGVhZGVyUXVlcnlTdHJpbmc6IGZ1bmN0aW9uKHEsIGxvYywgbG9jYWxlKSB7XG4gICAgbGV0IG51bWJlclJlc3VsdHMgPSA1O1xuICAgIGlmIChDbGlxelV0aWxzLmdldFByZWYoJ2xhbmd1YWdlRGVkdXAnLCBmYWxzZSkpIHtcbiAgICAgIG51bWJlclJlc3VsdHMgPSA3O1xuICAgIH1cbiAgICBpZiAoQ2xpcXpVdGlscy5nZXRQcmVmKCdtb2R1bGVzLmNvbnRleHQtc2VhcmNoLmVuYWJsZWQnLCBmYWxzZSkpIHtcbiAgICAgIG51bWJlclJlc3VsdHMgPSAxMDtcbiAgICB9XG4gICAgcmV0dXJuIFwiJnE9XCIgKyBlbmNvZGVVUklDb21wb25lbnQocSkgKyAvLyBAVE9ETzogc2hvdWxkIHN0YXJ0IHdpdGggJnE9XG4gICAgICAgICAgICBDbGlxelV0aWxzLmVuY29kZVNlc3Npb25QYXJhbXMoKSArXG4gICAgICAgICAgICBDbGlxekxhbmd1YWdlLnN0YXRlVG9RdWVyeVN0cmluZygpICtcbiAgICAgICAgICAgIENsaXF6VXRpbHMuZW5jb2RlTG9jYWxlKGxvY2FsZSkgK1xuICAgICAgICAgICAgQ2xpcXpVdGlscy5lbmNvZGVSZXN1bHRPcmRlcigpICtcbiAgICAgICAgICAgIENsaXF6VXRpbHMuZW5jb2RlQ291bnRyeSgpICtcbiAgICAgICAgICAgIENsaXF6VXRpbHMuZW5jb2RlRmlsdGVyKCkgK1xuICAgICAgICAgICAgQ2xpcXpVdGlscy5lbmNvZGVMb2NhdGlvbih0cnVlLCBsb2MgJiYgbG9jLmxhdGl0dWRlLCBsb2MgJiYgbG9jLmxvbmdpdHVkZSkgK1xuICAgICAgICAgICAgQ2xpcXpVdGlscy5lbmNvZGVSZXN1bHRDb3VudChudW1iZXJSZXN1bHRzKSArXG4gICAgICAgICAgICBDbGlxelV0aWxzLmRpc2FibGVXaWtpRGVkdXAoKTtcbiAgfSxcblxuICBnZXRCYWNrZW5kUmVzdWx0czogZnVuY3Rpb24ocSkge1xuICAgIGlmICghQ2xpcXpVdGlscy5nZXRQcmVmKCdjbGlxekJhY2tlbmRQcm92aWRlci5lbmFibGVkJywgdHJ1ZSkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICByZXNwb25zZToge1xuICAgICAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBxdWVyeTogcVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgQ2xpcXpVdGlscy5fc2Vzc2lvblNlcSsrO1xuXG4gICAgLy8gaWYgdGhlIHVzZXIgc2VlcyB0aGUgcmVzdWx0cyBtb3JlIHRoYW4gNTAwbXMgd2UgY29uc2lkZXIgdGhhdCBoZSBzdGFydHMgYSBuZXcgcXVlcnlcbiAgICBpZiAoQ2xpcXpVdGlscy5fcXVlcnlMYXN0RHJhdyAmJiAoRGF0ZS5ub3coKSA+IENsaXF6VXRpbHMuX3F1ZXJ5TGFzdERyYXcgKyA1MDApKXtcbiAgICAgIENsaXF6VXRpbHMuX3F1ZXJ5Q291bnQrKztcbiAgICB9XG4gICAgQ2xpcXpVdGlscy5fcXVlcnlMYXN0RHJhdyA9IDA7IC8vIHJlc2V0IGxhc3QgRHJhdyAtIHdhaXQgZm9yIHRoZSBhY3R1YWwgZHJhd1xuICAgIENsaXF6VXRpbHMuX3F1ZXJ5TGFzdExlbmd0aCA9IHEubGVuZ3RoO1xuICAgIGNvbnN0IHVybCA9IENsaXF6VXRpbHMuUkVTVUxUU19QUk9WSURFUiArIENsaXF6VXRpbHMuZ2V0UmVzdWx0c1Byb3ZpZGVyUXVlcnlTdHJpbmcocSk7XG5cbiAgICBjb25zdCBmZXRjaCA9IGZldGNoRmFjdG9yeSgpO1xuICAgIHJldHVybiBmZXRjaCh1cmwpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+ICh7XG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgICBxdWVyeTogcVxuICAgICAgfSkpO1xuICB9LFxuXG4gIC8vIElQIGRyaXZlbiBjb25maWd1cmF0aW9uXG4gIGZldGNoQW5kU3RvcmVDb25maWcoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBDbGlxelV0aWxzLmh0dHBHZXQoQ2xpcXpVdGlscy5DT05GSUdfUFJPVklERVIsXG4gICAgICAgIGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgaWYocmVzICYmIHJlcy5yZXNwb25zZSl7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB2YXIgY29uZmlnID0gSlNPTi5wYXJzZShyZXMucmVzcG9uc2UpO1xuICAgICAgICAgICAgICBmb3IodmFyIGsgaW4gY29uZmlnKXtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ1trXSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgQ2xpcXpVdGlscy5zZXRQcmVmKCdjb25maWdfJyArIGssIEpTT04uc3RyaW5naWZ5KGNvbmZpZ1trXSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBDbGlxelV0aWxzLnNldFByZWYoJ2NvbmZpZ18nICsgaywgY29uZmlnW2tdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyB3ZSBvbmx5IHNldCB0aGUgcHJlZmVyZWQgYmFja2VuZCBvbmNlIGF0IGZpcnN0IHN0YXJ0XG4gICAgICAgICAgICAgIGlmIChDbGlxelV0aWxzLmdldFByZWYoJ2JhY2tlbmRfY291bnRyeScsICcnKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBmYWxsYmFjayB0byBnZXJtYW4gcmVzdWx0cyBpZiB3ZSBkaWQgbm90IGRlY29kZSB0aGUgbG9jYXRpb25cbiAgICAgICAgICAgICAgICBDbGlxelV0aWxzLnNldERlZmF1bHRJbmRleENvdW50cnkoQ2xpcXpVdGlscy5nZXRQcmVmKCdjb25maWdfbG9jYXRpb24nLCAnZGUnKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAgIENsaXF6VXRpbHMubG9nKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmUsIC8vb24gZXJyb3IgdGhlIGNhbGxiYWNrIHN0aWxsIG5lZWRzIHRvIGJlIGNhbGxlZFxuICAgICAgICAxMDAwMFxuICAgICAgKTtcbiAgICB9KTtcbiAgfSxcbiAgc2V0RGVmYXVsdEluZGV4Q291bnRyeTogZnVuY3Rpb24oY291bnRyeSkge1xuICAgIHZhciBzdXBwb3J0ZWRDb3VudHJpZXMgPSBKU09OLnBhcnNlKENsaXF6VXRpbHMuZ2V0UHJlZihcImNvbmZpZ19iYWNrZW5kc1wiLCAnW1wiZGVcIl0nKSk7XG4gICAgaWYoc3VwcG9ydGVkQ291bnRyaWVzLmluZGV4T2YoY291bnRyeSkgIT09IC0xKXtcbiAgICAgIC8vIHN1cHBvcnRlZCBjb3VudHJ5XG4gICAgICBDbGlxelV0aWxzLnNldFByZWYoJ2JhY2tlbmRfY291bnRyeScsIGNvdW50cnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1bnN1cHBvcnRlZCBjb3VudHJ5IC0gZmFsbGJhY2sgdG9cbiAgICAgIC8vICAgICdkZScgZm9yIGdlcm1hbiBzcGVha2luZyB1c2Vyc1xuICAgICAgLy8gICAgJ2VuJyBmb3IgZXZlcnlib2R5IGVsc2VcbiAgICAgIGlmKENsaXF6VXRpbHMuY3VyckxvY2FsZSA9PT0gJ2RlJyl7XG4gICAgICAgIENsaXF6VXRpbHMuc2V0UHJlZignYmFja2VuZF9jb3VudHJ5JywgJ2RlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDbGlxelV0aWxzLnNldFByZWYoJ2JhY2tlbmRfY291bnRyeScsICd1cycpXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBlbmNvZGVMb2NhbGU6IGZ1bmN0aW9uKGxvY2FsZSkge1xuICAgIHZhciBwcmVmZXJyZWQgPSAoQ2xpcXpVdGlscy5QUkVGRVJSRURfTEFOR1VBR0UgfHwgXCJcIik7XG4gICAgaWYobG9jYWxlKSB7XG4gICAgICBwcmVmZXJyZWQgPSBsb2NhbGU7XG4gICAgfVxuICAgIC8vIHNlbmQgYnJvd3NlciBsYW5ndWFnZSB0byB0aGUgYmFjay1lbmRcbiAgICAvL3JldHVybiAnJmxvY2FsZT0nICsgKGxvY2FsZSA/IGxvY2FsZSA6IChDbGlxelV0aWxzLlBSRUZFUlJFRF9MQU5HVUFHRSB8fCBcIlwiKSk7XG4gICAgcmV0dXJuICcmbG9jYWxlPScrIHByZWZlcnJlZDtcbiAgfSxcbiAgZW5jb2RlQ291bnRyeTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICcmY291bnRyeT0nICsgQ2xpcXpVdGlscy5nZXRQcmVmKCdiYWNrZW5kX2NvdW50cnknLCAnZGUnKTtcbiAgfSxcbiAgZGlzYWJsZVdpa2lEZWR1cDogZnVuY3Rpb24oKSB7XG4gICAgLy8gZGlzYWJsZSB3aWtpcGVkaWEgZGVkdXBsaWNhdGlvbiBvbiB0aGUgYmFja2VuZCBzaWRlXG4gICAgdmFyIGRvRGVkdXAgPSBDbGlxelV0aWxzLmdldFByZWYoXCJsYW5ndWFnZURlZHVwXCIsIGZhbHNlKTtcbiAgICBpZiAoZG9EZWR1cCkgcmV0dXJuICcmZGRsPTAnO1xuICAgIGVsc2UgcmV0dXJuIFwiXCJcbiAgfSxcbiAgZ2V0QWR1bHRDb250ZW50RmlsdGVyU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgJ2NvbnNlcnZhdGl2ZSc6IDMsXG4gICAgICAnbW9kZXJhdGUnOiAwLFxuICAgICAgJ2xpYmVyYWwnOiAxXG4gICAgfSxcbiAgICBwcmVmID0gQ2xpcXpVdGlscy5nZXRQcmVmKCdhZHVsdENvbnRlbnRGaWx0ZXInLCAnbW9kZXJhdGUnKTtcbiAgICByZXR1cm4gZGF0YVtwcmVmXTtcbiAgfSxcbiAgZW5jb2RlRmlsdGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJyZhZHVsdD0nICsgQ2xpcXpVdGlscy5nZXRBZHVsdENvbnRlbnRGaWx0ZXJTdGF0ZSgpO1xuICB9LFxuICBlbmNvZGVSZXN1bHRDb3VudDogZnVuY3Rpb24oY291bnQpIHtcbiAgICBjb3VudCA9IGNvdW50IHx8IDU7XG4gICAgcmV0dXJuICcmY291bnQ9JyArIGNvdW50O1xuICB9LFxuICBlbm5jb2RlUXVlcnlTdWdnZXN0aW9uUGFyYW06IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzdWdnZXN0aW9uc0VuYWJsZWQgPSBDbGlxelV0aWxzLmdldFByZWYoXCJzdWdnZXN0aW9uc0VuYWJsZWRcIiwgZmFsc2UpO1xuICAgIHJldHVybiBgJnN1Z2dlc3Q9JHtzdWdnZXN0aW9uc0VuYWJsZWQgPyAxIDogMH1gO1xuICB9LFxuICBlbmNvZGVSZXN1bHRUeXBlOiBmdW5jdGlvbih0eXBlKXtcbiAgICBpZih0eXBlLmluZGV4T2YoJ2FjdGlvbicpICE9PSAtMSkgcmV0dXJuIFsnVCddO1xuICAgIGVsc2UgaWYodHlwZS5pbmRleE9mKCdjbGlxei1yZXN1bHRzJykgPT0gMCkgcmV0dXJuIENsaXF6VXRpbHMuZW5jb2RlQ2xpcXpSZXN1bHRUeXBlKHR5cGUpO1xuICAgIGVsc2UgaWYodHlwZS5pbmRleE9mKCdjbGlxei1wYXR0ZXJuJykgPT0gMCkgcmV0dXJuIFsnQyddO1xuICAgIGVsc2UgaWYodHlwZSA9PT0gJ2NsaXF6LWV4dHJhJykgcmV0dXJuIFsnWCddO1xuICAgIGVsc2UgaWYodHlwZSA9PT0gJ2NsaXF6LXNlcmllcycpIHJldHVybiBbJ1MnXTtcblxuICAgIGVsc2UgaWYodHlwZS5pbmRleE9mKCdib29rbWFyaycpID09IDAgfHxcbiAgICAgICAgICAgIHR5cGUuaW5kZXhPZigndGFnJykgPT0gMCkgcmV0dXJuIFsnQiddLmNvbmNhdChDbGlxelV0aWxzLmVuY29kZUNsaXF6UmVzdWx0VHlwZSh0eXBlKSk7XG5cbiAgICBlbHNlIGlmKHR5cGUuaW5kZXhPZignZmF2aWNvbicpID09IDAgfHxcbiAgICAgICAgICAgIHR5cGUuaW5kZXhPZignaGlzdG9yeScpID09IDApIHJldHVybiBbJ0gnXS5jb25jYXQoQ2xpcXpVdGlscy5lbmNvZGVDbGlxelJlc3VsdFR5cGUodHlwZSkpO1xuXG4gICAgLy8gY2xpcXogdHlwZSA9IFwiY2xpcXotY3VzdG9tIHNvdXJjZXMtWFwiXG4gICAgZWxzZSBpZih0eXBlLmluZGV4T2YoJ2NsaXF6LWN1c3RvbScpID09IDApIHJldHVybiB0eXBlLnN1YnN0cigyMSk7XG5cbiAgICByZXR1cm4gdHlwZTsgLy9zaG91bGQgbmV2ZXIgaGFwcGVuXG4gIH0sXG4gIC8vZWcgdHlwZXM6IFsgXCJIXCIsIFwibVwiIF0sIFsgXCJIfGluc3RhbnRcIiwgXCJYfDExXCIgXVxuICBpc1ByaXZhdGVSZXN1bHRUeXBlOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgdmFyIG9ubHlUeXBlID0gdHlwZVswXS5zcGxpdCgnfCcpWzBdO1xuICAgIHJldHVybiAnSEJUQ1MnLmluZGV4T2Yob25seVR5cGUpICE9IC0xICYmIHR5cGUubGVuZ3RoID09IDE7XG4gIH0sXG4gIC8vIGNsaXF6IHR5cGUgPSBcImNsaXF6LXJlc3VsdHMgc291cmNlcy1YWFhYWFwiIG9yIFwiZmF2aWNvbiBzb3VyY2VzLVhYWFhYXCIgaWYgY29tYmluZWQgd2l0aCBoaXN0b3J5XG4gIGVuY29kZUNsaXF6UmVzdWx0VHlwZTogZnVuY3Rpb24odHlwZSl7XG4gICAgdmFyIHBvcyA9IHR5cGUuaW5kZXhPZignc291cmNlcy0nKVxuICAgIGlmKHBvcyAhPSAtMSlcbiAgICAgIHJldHVybiBDbGlxelV0aWxzLmVuY29kZVNvdXJjZXModHlwZS5zdWJzdHIocG9zKzgpKTtcbiAgICBlbHNlXG4gICAgICByZXR1cm4gW107XG4gIH0sXG4gIC8vIHJhbmRvbSBJRCBnZW5lcmF0ZWQgYXQgZWFjaCB1cmxiYXIgZm9jdXNcbiAgX3NlYXJjaFNlc3Npb246ICcnLFxuICAvLyBudW1iZXIgb2Ygc2VxdWVuY2VzIGluIGVhY2ggc2Vzc2lvblxuICBfc2Vzc2lvblNlcTogMCxcbiAgX3F1ZXJ5TGFzdExlbmd0aDogbnVsbCxcbiAgX3F1ZXJ5TGFzdERyYXc6IG51bGwsXG4gIC8vIG51bWJlciBvZiBxdWVyaWVzIGluIHNlYXJjaCBzZXNzaW9uXG4gIF9xdWVyeUNvdW50OiBudWxsLFxuICBzZXRTZWFyY2hTZXNzaW9uOiBmdW5jdGlvbihyYW5kKXtcbiAgICBDbGlxelV0aWxzLl9zZWFyY2hTZXNzaW9uID0gcmFuZDtcbiAgICBDbGlxelV0aWxzLl9zZXNzaW9uU2VxID0gMDtcbiAgICBDbGlxelV0aWxzLl9xdWVyeUNvdW50ID0gMDtcbiAgICBDbGlxelV0aWxzLl9xdWVyeUxhc3RMZW5ndGggPSAwO1xuICAgIENsaXF6VXRpbHMuX3F1ZXJ5TGFzdERyYXcgPSAwO1xuICB9LFxuICBlbmNvZGVTZXNzaW9uUGFyYW1zOiBmdW5jdGlvbigpe1xuICAgIGlmKENsaXF6VXRpbHMuX3NlYXJjaFNlc3Npb24ubGVuZ3RoKXtcbiAgICAgIHJldHVybiAnJnM9JyArIGVuY29kZVVSSUNvbXBvbmVudChDbGlxelV0aWxzLl9zZWFyY2hTZXNzaW9uKSArXG4gICAgICAgICAgICAgJyZuPScgKyBDbGlxelV0aWxzLl9zZXNzaW9uU2VxICtcbiAgICAgICAgICAgICAnJnFjPScgKyBDbGlxelV0aWxzLl9xdWVyeUNvdW50XG4gICAgfSBlbHNlIHJldHVybiAnJztcbiAgfSxcblxuICBlbmNvZGVMb2NhdGlvbjogZnVuY3Rpb24oc3BlY2lmeVNvdXJjZSwgbGF0LCBsbmcpIHtcbiAgICBsZXQgbG9jYXRpb25QcmVmID0gQ2xpcXpVdGlscy5nZXRQcmVmKCdzaGFyZV9sb2NhdGlvbicsICdhc2snKTtcbiAgICBpZiAobG9jYXRpb25QcmVmID09PSAnc2hvd09uY2UnKSB7XG4gICAgICBsb2NhdGlvblByZWYgPSAnYXNrJztcbiAgICB9XG4gICAgbGV0IHFzID0gYCZsb2NfcHJlZj0ke2xvY2F0aW9uUHJlZn1gO1xuXG4gICAgaWYgKENsaXF6VXRpbHMuVVNFUl9MQVQgJiYgQ2xpcXpVdGlscy5VU0VSX0xORyB8fCBsYXQgJiYgbG5nKSB7XG4gICAgICBxcyArPSBbXG4gICAgICAgICcmbG9jPScsXG4gICAgICAgIGxhdCB8fCBDbGlxelV0aWxzLlVTRVJfTEFULFxuICAgICAgICAnLCcsXG4gICAgICAgIGxuZyB8fCBDbGlxelV0aWxzLlVTRVJfTE5HLFxuICAgICAgICAoc3BlY2lmeVNvdXJjZSA/ICcsVScgOiAnJylcbiAgICAgIF0uam9pbignJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHFzO1xuICB9LFxuICBlbmNvZGVTb3VyY2VzOiBmdW5jdGlvbihzb3VyY2VzKXtcbiAgICByZXR1cm4gc291cmNlcy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsICcpLm1hcChcbiAgICAgIGZ1bmN0aW9uKHMpe1xuICAgICAgICBpZihzLmluZGV4T2YoJ2NhY2hlJykgPT0gMCkgLy8gdG8gY2F0Y2ggJ2NhY2hlLSonIGZvciBzcGVjaWZpYyBjb3VudHJpZXNcbiAgICAgICAgICByZXR1cm4gJ2QnXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gVkVSVElDQUxfRU5DT0RJTkdTW3NdIHx8IHM7XG4gICAgICB9KTtcbiAgfSxcbiAgaXNQcml2YXRlOiBDTElRWkVudmlyb25tZW50LmlzUHJpdmF0ZSxcbiAgdGVsZW1ldHJ5OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICBDbGlxelV0aWxzLnRlbGVtZXRyeUhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3MpKTtcbiAgfSxcbiAgcmVzdWx0VGVsZW1ldHJ5OiBmdW5jdGlvbihxdWVyeSwgcXVlcnlBdXRvY29tcGxldGVkLCByZXN1bHRJbmRleCwgcmVzdWx0VXJsLCByZXN1bHRPcmRlciwgZXh0cmEpIHtcbiAgICBDbGlxelV0aWxzLnNldFJlc3VsdE9yZGVyKHJlc3VsdE9yZGVyKTtcbiAgICBDbGlxekV2ZW50cy5wdWIoXCJodW1hbi13ZWI6c2FuaXRpemUtcmVzdWx0LXRlbGVtZXRyeVwiLFxuICAgICAgeyB0eXBlOiAnZXh0ZW5zaW9uLXJlc3VsdC10ZWxlbWV0cnknLFxuICAgICAgICBxOiBxdWVyeSxcbiAgICAgICAgczogQ2xpcXpVdGlscy5lbmNvZGVTZXNzaW9uUGFyYW1zKCksXG4gICAgICAgIG1zZzoge1xuICAgICAgICAgIGk6IHJlc3VsdEluZGV4LFxuICAgICAgICAgIG86IENsaXF6VXRpbHMuZW5jb2RlUmVzdWx0T3JkZXIoKSxcbiAgICAgICAgICB1OiAocmVzdWx0VXJsID8gcmVzdWx0VXJsIDogJycpLFxuICAgICAgICAgIGE6IHF1ZXJ5QXV0b2NvbXBsZXRlZCxcbiAgICAgICAgICBlOiBleHRyYVxuICAgICAgICB9LFxuICAgICAgICBlbmRwb2ludDogQ2xpcXpVdGlscy5SRVNVTFRTX1BST1ZJREVSX0xPRyxcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgfVxuICAgICk7XG4gICAgQ2xpcXpVdGlscy5zZXRSZXN1bHRPcmRlcignJyk7XG4gIH0sXG4gIHNlbmRVc2VyRmVlZGJhY2soZGF0YSkge1xuICAgIGRhdGEuX3R5cGUgPSAndXNlcl9mZWVkYmFjayc7XG4gICAgLy8gUGFyYW1zOiBtZXRob2QsIHVybCwgcmVzb2x2ZSwgcmVqZWN0LCB0aW1lb3V0LCBkYXRhXG4gICAgaHR0cEhhbmRsZXIoJ1BPU1QnLCBDTElRWkVudmlyb25tZW50LkxPRywgbnVsbCwgbnVsbCwgMTAwMDAsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfSxcbiAgX3Jlc3VsdE9yZGVyOiAnJyxcbiAgc2V0UmVzdWx0T3JkZXI6IGZ1bmN0aW9uKHJlc3VsdE9yZGVyKSB7XG4gICAgQ2xpcXpVdGlscy5fcmVzdWx0T3JkZXIgPSByZXN1bHRPcmRlcjtcbiAgfSxcbiAgZW5jb2RlUmVzdWx0T3JkZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBDbGlxelV0aWxzLl9yZXN1bHRPcmRlciAmJiBDbGlxelV0aWxzLl9yZXN1bHRPcmRlci5sZW5ndGggPyAnJm89JyArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShDbGlxelV0aWxzLl9yZXN1bHRPcmRlcikpIDogJyc7XG4gIH0sXG4gIHNldEludGVydmFsOiBDTElRWkVudmlyb25tZW50LnNldEludGVydmFsLFxuICBzZXRUaW1lb3V0OiBDTElRWkVudmlyb25tZW50LnNldFRpbWVvdXQsXG4gIGNsZWFyVGltZW91dDogQ0xJUVpFbnZpcm9ubWVudC5jbGVhclRpbWVvdXQsXG4gIGNsZWFySW50ZXJ2YWw6IENMSVFaRW52aXJvbm1lbnQuY2xlYXJUaW1lb3V0LFxuICBQcm9taXNlOiBDTElRWkVudmlyb25tZW50LlByb21pc2UsXG4gIGxvY2FsZToge30sXG4gIGN1cnJMb2NhbGU6IG51bGwsXG4gIGdldExvY2FsZUZpbGU6IGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAvLyBsb2NhbGUgZmlsZSBtaWdodCBub3QgZXhpc3Qgb24gbW9iaWxlXG4gICAgaWYgKENsaXF6VXRpbHMuTE9DQUxFX1BBVEgpIHtcbiAgICAgIGNvbnN0IHVybCA9IENsaXF6VXRpbHMuTE9DQUxFX1BBVEggKyBsb2NhbGUgKyAnL2NsaXF6Lmpzb24nO1xuICAgICAgLy8gU3luY2hyb25vdXMgcmVxdWVzdCBpcyBkZXByaWNhdGVkXG4gICAgICBjb25zdCByZXEgPSBDbGlxelV0aWxzLmh0dHBHZXQodXJsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgIENsaXF6VXRpbHMuY3VyckxvY2FsZSA9IGxvY2FsZTtcbiAgICAgIENsaXF6VXRpbHMubG9jYWxlLmRlZmF1bHQgPSBDbGlxelV0aWxzLmxvY2FsZVtsb2NhbGVdID0gSlNPTi5wYXJzZShyZXEucmVzcG9uc2UpO1xuICAgIH1cbiAgfSxcbiAgZ2V0TG9jYWxpemVkU3RyaW5nOiBmdW5jdGlvbihrZXksIHN1YnN0aXR1dGlvbnMpe1xuICAgIGlmKCFrZXkpIHJldHVybiAnJztcblxuICAgIHZhciBzdHIgPSBrZXksXG4gICAgICAgIGxvY2FsTWVzc2FnZXM7XG5cbiAgICBpZiAoQ2xpcXpVdGlscy5jdXJyTG9jYWxlICE9IG51bGwgJiYgQ2xpcXpVdGlscy5sb2NhbGVbQ2xpcXpVdGlscy5jdXJyTG9jYWxlXVxuICAgICAgICAgICAgJiYgQ2xpcXpVdGlscy5sb2NhbGVbQ2xpcXpVdGlscy5jdXJyTG9jYWxlXVtrZXldKSB7XG4gICAgICAgIHN0ciA9IENsaXF6VXRpbHMubG9jYWxlW0NsaXF6VXRpbHMuY3VyckxvY2FsZV1ba2V5XS5tZXNzYWdlO1xuICAgICAgICBsb2NhbE1lc3NhZ2VzID0gQ2xpcXpVdGlscy5sb2NhbGVbQ2xpcXpVdGlscy5jdXJyTG9jYWxlXTtcbiAgICB9IGVsc2UgaWYgKENsaXF6VXRpbHMubG9jYWxlLmRlZmF1bHQgJiYgQ2xpcXpVdGlscy5sb2NhbGUuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgIHN0ciA9IENsaXF6VXRpbHMubG9jYWxlLmRlZmF1bHRba2V5XS5tZXNzYWdlO1xuICAgICAgICBsb2NhbE1lc3NhZ2VzID0gQ2xpcXpVdGlscy5sb2NhbGUuZGVmYXVsdDtcbiAgICB9XG5cbiAgICBpZiAoIXN1YnN0aXR1dGlvbnMpIHtcbiAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHN1YnN0aXR1dGlvbnMpKSB7XG4gICAgICBzdWJzdGl0dXRpb25zID0gW3N1YnN0aXR1dGlvbnNdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKG1hdGNoZWQsIGluZGV4LCBkb2xsYXJTaWducykge1xuICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgIGluZGV4ID0gcGFyc2VJbnQoaW5kZXgsIDEwKSAtIDE7XG4gICAgICAgIHJldHVybiBpbmRleCBpbiBzdWJzdGl0dXRpb25zID8gc3Vic3RpdHV0aW9uc1tpbmRleF0gOiBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIGFueSBzZXJpZXMgb2YgY29udGlndW91cyBgJGBzLCB0aGUgZmlyc3QgaXMgZHJvcHBlZCwgYW5kXG4gICAgICAgIC8vIHRoZSByZXN0IHJlbWFpbiBpbiB0aGUgb3V0cHV0IHN0cmluZy5cbiAgICAgICAgcmV0dXJuIGRvbGxhclNpZ25zO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJCg/OihbMS05XVxcZCopfChcXCQrKSkvZywgcmVwbGFjZXIpO1xuICB9LFxuICAvLyBnZXRzIGFsbCB0aGUgZWxlbWVudHMgd2l0aCB0aGUgY2xhc3MgJ2NsaXF6LWxvY2FsZScgYW5kIGFkZHNcbiAgLy8gdGhlIGxvY2FsaXplZCBzdHJpbmcgLSBrZXkgYXR0cmlidXRlIC0gYXMgY29udGVudFxuICBsb2NhbGl6ZURvYzogZnVuY3Rpb24oZG9jKXtcbiAgICB2YXIgbG9jYWxlID0gZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NsaXF6LWxvY2FsZScpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsb2NhbGUubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgZWwgPSBsb2NhbGVbaV07XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gQ2xpcXpVdGlscy5nZXRMb2NhbGl6ZWRTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdrZXknKSk7XG4gICAgfVxuICB9LFxuICBpc1dpbmRvd3M6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIENMSVFaRW52aXJvbm1lbnQuT1MuaW5kZXhPZihcIndpblwiKSA9PT0gMDtcbiAgfSxcbiAgaXNNYWM6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIENMSVFaRW52aXJvbm1lbnQuT1MuaW5kZXhPZihcImRhcndpblwiKSA9PT0gMDtcbiAgfSxcbiAgaXNMaW51eDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIENMSVFaRW52aXJvbm1lbnQuT1MuaW5kZXhPZihcImxpbnV4XCIpID09PSAwO1xuICB9LFxuICBnZXRXaW5kb3c6IENMSVFaRW52aXJvbm1lbnQuZ2V0V2luZG93LFxuICBnZXRXaW5kb3dJRDogQ0xJUVpFbnZpcm9ubWVudC5nZXRXaW5kb3dJRCxcbiAgLyoqXG4gICAqIEJpbmQgZnVuY3Rpb25zIGNvbnRleHRzIHRvIGEgc3BlY2lmaWVkIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGZyb20gLSBBbiBvYmplY3QsIHdob3NlIGZ1bmN0aW9uIHByb3BlcnRpZXMgd2lsbCBiZSBwcm9jZXNzZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB0byAtIEFuIG9iamVjdCwgd2hpY2ggd2lsbCBiZSB0aGUgY29udGV4dCAodGhpcykgb2YgcHJvY2Vzc2VkIGZ1bmN0aW9ucy5cbiAgICovXG4gIGJpbmRPYmplY3RGdW5jdGlvbnM6IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gICAgZm9yICh2YXIgZnVuY05hbWUgaW4gZnJvbSkge1xuICAgICAgdmFyIGZ1bmMgPSBmcm9tW2Z1bmNOYW1lXTtcbiAgICAgIGlmICghZnJvbS5oYXNPd25Qcm9wZXJ0eShmdW5jTmFtZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgLy8gQ2FuJ3QgY29tcGFyZSB3aXRoIHByb3RvdHlwZSBvZiBvYmplY3QgZnJvbSBhIGRpZmZlcmVudCBtb2R1bGUuXG4gICAgICBpZiAodHlwZW9mIGZ1bmMgIT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGZyb21bZnVuY05hbWVdID0gZnVuYy5iaW5kKHRvKTtcbiAgICB9XG4gIH0sXG4gIHRyeURlY29kZVVSSUNvbXBvbmVudDogZnVuY3Rpb24ocykge1xuICAgIC8vIGF2b2lkZSBlcnJvciBmcm9tIGRlY29kZVVSSUNvbXBvbmVudCgnJTInKVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICB9LFxuICB0cnlFbmNvZGVVUklDb21wb25lbnQ6IGZ1bmN0aW9uKHMpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgfSxcbiAgcGFyc2VRdWVyeVN0cmluZzogZnVuY3Rpb24ocXN0cikge1xuICAgIHZhciBxdWVyeSA9IHt9O1xuICAgIHZhciBhID0gKHFzdHIgfHwgJycpLnNwbGl0KCcmJyk7XG4gICAgZm9yICh2YXIgaSBpbiBhKVxuICAgIHtcbiAgICAgIHZhciBiID0gYVtpXS5zcGxpdCgnPScpO1xuICAgICAgcXVlcnlbQ2xpcXpVdGlscy50cnlEZWNvZGVVUklDb21wb25lbnQoYlswXSldID0gQ2xpcXpVdGlscy50cnlEZWNvZGVVUklDb21wb25lbnQoYlsxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9LFxuICByb3VuZFRvRGVjaW1hbDogZnVuY3Rpb24obnVtYmVyLCBkaWdpdHMpIHtcbiAgICB2YXIgbXVsdGlwbGllciA9IE1hdGgucG93KDEwLCBkaWdpdHMpO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIG11bHRpcGxpZXIpIC8gbXVsdGlwbGllcjtcbiAgfSxcbiAgZ2V0QWR1bHRGaWx0ZXJTdGF0ZTogZnVuY3Rpb24oKXtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICdjb25zZXJ2YXRpdmUnOiB7XG4gICAgICAgICAgICAgIG5hbWU6IENsaXF6VXRpbHMuZ2V0TG9jYWxpemVkU3RyaW5nKCdhbHdheXMnKSxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgJ21vZGVyYXRlJzoge1xuICAgICAgICAgICAgICBuYW1lOiBDbGlxelV0aWxzLmdldExvY2FsaXplZFN0cmluZygnYWx3YXlzX2FzaycpLFxuICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICAnbGliZXJhbCc6IHtcbiAgICAgICAgICBuYW1lOiBDbGlxelV0aWxzLmdldExvY2FsaXplZFN0cmluZygnbmV2ZXInKSxcbiAgICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBzdGF0ZSA9IENsaXF6VXRpbHMuZ2V0UHJlZignYWR1bHRDb250ZW50RmlsdGVyJywgJ21vZGVyYXRlJyk7XG4gICAgaWYgKHN0YXRlID09PSAnc2hvd09uY2UnKSB7XG4gICAgICBzdGF0ZSA9ICdtb2RlcmF0ZSc7XG4gICAgfVxuICAgIGRhdGFbc3RhdGVdLnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9LFxuICBnZXRMb2NhdGlvblBlcm1TdGF0ZSgpe1xuICAgIHZhciBkYXRhID0ge1xuICAgICAgJ3llcyc6IHtcbiAgICAgICAgbmFtZTogQ2xpcXpVdGlscy5nZXRMb2NhbGl6ZWRTdHJpbmcoJ2Fsd2F5cycpLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICAnYXNrJzoge1xuICAgICAgICBuYW1lOiBDbGlxelV0aWxzLmdldExvY2FsaXplZFN0cmluZygnYWx3YXlzX2FzaycpLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICAnbm8nOiB7XG4gICAgICAgIG5hbWU6IENsaXF6VXRpbHMuZ2V0TG9jYWxpemVkU3RyaW5nKCduZXZlcicpLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZGF0YVtDbGlxelV0aWxzLmdldFByZWYoJ3NoYXJlX2xvY2F0aW9uJywgJ2FzaycpXS5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSxcblxuICAvLyBSZXR1cm5zIHJlc3VsdCBlbGVtZW50cyBzZWxlY2F0YmxlIGFuZCBuYXZpZ2F0YWJsZSBmcm9tIGtleWJvYXJkLlxuICAvLyB8Y29udGFpbmVyfCBzZWFyY2ggY29udGV4dCwgdXN1YWxseSBpdCdzIGBDTElRWi5VSS5nQ2xpcXpCb3hgLlxuICBleHRyYWN0U2VsZWN0YWJsZUVsZW1lbnRzKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcnJvd10nKSkuZmlsdGVyKFxuICAgICAgICAgICAgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgLy8gZG9udCBjb25zaWRlciBoaWRkZW4gZWxlbWVudHNcbiAgICAgICAgICAgICAgaWYoZWwub2Zmc2V0UGFyZW50ID09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgIGlmKCFlbC5nZXRBdHRyaWJ1dGUoJ2Fycm93LWlmLXZpc2libGUnKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgZWxlbWVudCBpcyB2aXNpYmxlXG4gICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgIC8vIGZvciBub3cgdGhpcyBjaGVjayBpcyBlbm91Z2ggYnV0IHdlIG1pZ2h0IGJlIGZvcmNlZCB0byBzd2l0Y2ggdG8gYVxuICAgICAgICAgICAgICAvLyBtb3JlIGdlbmVyaWMgYXBwcm9hY2ggLSBtYXliZSB1c2luZyBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpXG4gICAgICAgICAgICAgIGlmIChlbC5vZmZzZXRMZWZ0ICsgZWwub2Zmc2V0V2lkdGggPiBlbC5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICB9LFxuXG4gIGdldE5vUmVzdWx0czogQ0xJUVpFbnZpcm9ubWVudC5nZXROb1Jlc3VsdHMsXG4gIGdldFBhcmFtZXRlckJ5TmFtZTogZnVuY3Rpb24obmFtZSwgbG9jYXRpb24pIHtcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXS8sIFwiXFxcXFtcIikucmVwbGFjZSgvW1xcXV0vLCBcIlxcXFxdXCIpO1xuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoXCJbXFxcXD8mXVwiICsgbmFtZSArIFwiPShbXiYjXSopXCIpLFxuICAgIHJlc3VsdHMgPSByZWdleC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XG4gICAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyBcIlwiIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csIFwiIFwiKSk7XG4gIH0sXG4gIGFkZEV2ZW50TGlzdGVuZXJUb0VsZW1lbnRzOiBDTElRWkVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXJUb0VsZW1lbnRzLFxuICBzZWFyY2g6IENMSVFaRW52aXJvbm1lbnQuc2VhcmNoLFxuICBkaXN0YW5jZTogZnVuY3Rpb24obG9uMSwgbGF0MSwgbG9uMiA9IENsaXF6VXRpbHMuVVNFUl9MTkcsIGxhdDIgPSBDbGlxelV0aWxzLlVTRVJfTEFUKSB7XG4gICAgLyoqIENvbnZlcnRzIG51bWVyaWMgZGVncmVlcyB0byByYWRpYW5zICovXG4gICAgZnVuY3Rpb24gZGVncmVlc1RvUmFkKGRlZ3JlZSl7XG4gICAgICByZXR1cm4gZGVncmVlICogTWF0aC5QSSAvIDE4MDtcbiAgICB9XG5cbiAgICB2YXIgUiA9IDYzNzE7IC8vIFJhZGl1cyBvZiB0aGUgZWFydGggaW4ga21cbiAgICBpZighbG9uMiB8fCAhbG9uMSB8fCAhbGF0MiB8fCAhbGF0MSkgeyByZXR1cm4gLTE7IH1cbiAgICB2YXIgZExhdCA9IGRlZ3JlZXNUb1JhZChsYXQyLWxhdDEpOyAgLy8gSmF2YXNjcmlwdCBmdW5jdGlvbnMgaW4gcmFkaWFuc1xuICAgIHZhciBkTG9uID0gZGVncmVlc1RvUmFkKGxvbjItbG9uMSk7XG4gICAgdmFyIGEgPSBNYXRoLnNpbihkTGF0LzIpICogTWF0aC5zaW4oZExhdC8yKSArXG4gICAgICAgICAgICBNYXRoLmNvcyhkZWdyZWVzVG9SYWQobGF0MSkpICogTWF0aC5jb3MoZGVncmVlc1RvUmFkKGxhdDIpKSAqXG4gICAgICAgICAgICBNYXRoLnNpbihkTG9uLzIpICogTWF0aC5zaW4oZExvbi8yKTtcbiAgICB2YXIgYyA9IDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEtYSkpO1xuICAgIHZhciBkID0gUiAqIGM7IC8vIERpc3RhbmNlIGluIGttXG4gICAgcmV0dXJuIGQ7XG4gIH0sXG4gIGdldERlZmF1bHRTZWFyY2hFbmdpbmU6IENMSVFaRW52aXJvbm1lbnQuZ2V0RGVmYXVsdFNlYXJjaEVuZ2luZSxcbiAgY29weVJlc3VsdDogQ0xJUVpFbnZpcm9ubWVudC5jb3B5UmVzdWx0LFxuICBvcGVuUG9wdXA6IENMSVFaRW52aXJvbm1lbnQub3BlblBvcHVwLFxuICBpc09uUHJpdmF0ZVRhYjogQ0xJUVpFbnZpcm9ubWVudC5pc09uUHJpdmF0ZVRhYixcbiAgZ2V0QWxsQ2xpcXpQcmVmczogQ0xJUVpFbnZpcm9ubWVudC5nZXRBbGxDbGlxelByZWZzLFxuICBpc0RlZmF1bHRCcm93c2VyOiBDTElRWkVudmlyb25tZW50LmlzRGVmYXVsdEJyb3dzZXIsXG4gIHNldERlZmF1bHRTZWFyY2hFbmdpbmU6IENMSVFaRW52aXJvbm1lbnQuc2V0RGVmYXVsdFNlYXJjaEVuZ2luZSxcbiAgaXNVbmtub3duVGVtcGxhdGU6IENMSVFaRW52aXJvbm1lbnQuaXNVbmtub3duVGVtcGxhdGUsXG4gIGdldEVuZ2luZUJ5TmFtZTogQ0xJUVpFbnZpcm9ubWVudC5nZXRFbmdpbmVCeU5hbWUsXG4gIGFkZEVuZ2luZVdpdGhEZXRhaWxzOiBDTElRWkVudmlyb25tZW50LmFkZEVuZ2luZVdpdGhEZXRhaWxzLFxuICBnZXRFbmdpbmVCeUFsaWFzOiBDTElRWkVudmlyb25tZW50LmdldEVuZ2luZUJ5QWxpYXMsXG4gIGdldFNlYXJjaEVuZ2luZXM6IENMSVFaRW52aXJvbm1lbnQuZ2V0U2VhcmNoRW5naW5lcyxcbiAgYmxhY2tMaXN0ZWRFbmdpbmVzOiBDTElRWkVudmlyb25tZW50LmJsYWNrTGlzdGVkRW5naW5lcyxcbiAgdXBkYXRlQWxpYXM6IENMSVFaRW52aXJvbm1lbnQudXBkYXRlQWxpYXMsXG4gIG9wZW5MaW5rOiBDTElRWkVudmlyb25tZW50Lm9wZW5MaW5rLFxuICBnZXRDbGlxelByZWZzKCkge1xuICAgIGZ1bmN0aW9uIGZpbHRlcmVyKGVudHJ5KSB7XG4gICAgICAgIC8vIGF2b2lkIHByaXZheSBsZWFraW5nIHByZWZzICgnYmFja3VwJykuXG4gICAgICAgIC8vIGF2b2lkIGlycmVsZXZhbnQgZGVlcCBwcmVmcyAoc29tZXRoaW5nLm90aGVydGhpbmcueC55KVxuICAgICAgICAvLyBhbGxvdyAnZW5hYmxlZCcgcHJlZnNcbiAgICAgICAgcmV0dXJuICgoZW50cnkuaW5kZXhPZignLicpID09IC0xICYmIGVudHJ5LmluZGV4T2YoJ2JhY2t1cCcpID09IC0xKVxuICAgICAgICAgICAgICAgIHx8IGVudHJ5LmluZGV4T2YoJy5lbmFibGVkJykgIT0gLTEpO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2xpcXpQcmVmcyA9IHt9XG4gICAgICBsZXQgY2xpcXpQcmVmc0tleXMgPSBDbGlxelV0aWxzLmdldEFsbENsaXF6UHJlZnMoKS5maWx0ZXIoZmlsdGVyZXIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaXF6UHJlZnNLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNsaXF6UHJlZnNbY2xpcXpQcmVmc0tleXNbaV1dID0gcHJlZnMuZ2V0KGNsaXF6UHJlZnNLZXlzW2ldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsaXF6UHJlZnM7XG4gIH0sXG4gIHByb21pc2VIdHRwSGFuZGxlcjogcHJvbWlzZUh0dHBIYW5kbGVyLFxuICByZWdpc3RlclJlc3VsdFByb3ZpZGVyOiBmdW5jdGlvbiAobykge1xuICAgIENMSVFaRW52aXJvbm1lbnQuQ2xpcXpSZXN1bHRQcm92aWRlcnMgPSBvLlJlc3VsdFByb3ZpZGVycztcbiAgICBDTElRWkVudmlyb25tZW50LlJlc3VsdCA9IG8uUmVzdWx0O1xuICB9LFxuICBsYXN0UmVuZGVyZWRSZXN1bHRzOiBbXSxcbiAgbGFzdFJlbmRlcmVkVVJMczogW10sXG4gIGxhc3RTZWxlY3Rpb246IC0xLFxuICBvblJlbmRlckNvbXBsZXRlOiBmdW5jdGlvbiBvblJlbmRlckNvbXBsZXRlKHF1ZXJ5LCBib3gpIHtcbiAgICBpZiAoIUNMSVFaRW52aXJvbm1lbnQub25SZW5kZXJDb21wbGV0ZSkgcmV0dXJuO1xuXG4gICAgQ2xpcXpVdGlscy5sYXN0UmVuZGVyZWRSZXN1bHRzID0gdGhpcy5leHRyYWN0U2VsZWN0YWJsZUVsZW1lbnRzKGJveCkuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICByZXR1cm4gISEobm9kZS5nZXRBdHRyaWJ1dGUoXCJ1cmxcIikgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcbiAgICB9KTtcbiAgICBDbGlxelV0aWxzLmxhc3RSZW5kZXJlZFVSTHMgPSBDbGlxelV0aWxzLmxhc3RSZW5kZXJlZFJlc3VsdHNcbiAgICAgIC5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKFwidXJsXCIpIHx8IG5vZGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgIH0pO1xuXG4gICAgQ0xJUVpFbnZpcm9ubWVudC5vblJlbmRlckNvbXBsZXRlKHF1ZXJ5LCBDbGlxelV0aWxzLmxhc3RSZW5kZXJlZFVSTHMpO1xuICB9LFxuICBvblNlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24gb25TZWxlY3Rpb25DaGFuZ2UoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgdmFyIGN1cnJlbnQgPSBDbGlxelV0aWxzLmxhc3RSZW5kZXJlZFJlc3VsdHMuaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAoY3VycmVudCA9PSAtMSkge1xuICAgICAgY3VycmVudCA9IENsaXF6VXRpbHMubGFzdFJlbmRlcmVkVVJMcy5pbmRleE9mKFxuICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwidXJsXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoQ2xpcXpVdGlscy5sYXN0U2VsZWN0aW9uID09IGN1cnJlbnQpXG4gICAgICByZXR1cm47XG4gICAgQ2xpcXpVdGlscy5sYXN0U2VsZWN0aW9uID0gY3VycmVudDtcblxuICAgIGlmICghQ0xJUVpFbnZpcm9ubWVudC5vblJlc3VsdFNlbGVjdGlvbkNoYW5nZSkgcmV0dXJuO1xuICAgIENMSVFaRW52aXJvbm1lbnQub25SZXN1bHRTZWxlY3Rpb25DaGFuZ2UoY3VycmVudCk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaXF6VXRpbHM7XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vY29yZS91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblxuICBjb25zdHJ1Y3Rvcih7IHdpbmRvdywgYmFja2dyb3VuZCB9KSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB0aGlzLndpbmRvdyA9IHdpbmRvdztcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZC5DbGlxelNlY3VyZU1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuYmFja2dyb3VuZC5DbGlxelNlY3VyZU1lc3NhZ2UuaW5pdEF0V2luZG93KHRoaXMud2luZG93KTtcbiAgICAgIHRoaXMud2luZG93LkNsaXF6U2VjdXJlTWVzc2FnZSA9IHRoaXMuYmFja2dyb3VuZC5DbGlxelNlY3VyZU1lc3NhZ2VcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy53aW5kb3cuQ2xpcXpTZWN1cmVNZXNzYWdlLCB0aGlzLmJhY2tncm91bmQuYWN0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgdW5sb2FkKCkge1xuICB9XG5cbiAgc3RhdHVzKCkge1xuICAgIGlmICh0aGlzLmJhY2tncm91bmQuQ2xpcXpTZWN1cmVNZXNzYWdlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBzdGF0ZTogdXRpbHMuZ2V0UHJlZignaHBuLXF1ZXJ5JyksXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9iYWNrZ3JvdW5kJztcbmltcG9ydCBXaW5kb3cgZnJvbSAnLi93aW5kb3cnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEJhY2tncm91bmQsXG4gIFdpbmRvdyxcbn07XG4iLCIvKiBnbG9iYWxzIHdpbmRvdyAqL1xuLy8gRklYTUU6IHN0b3AgdXNpbmcgdGhpcyBmaWxlIGFzIHNvb24gYXMgc3VicHJvamVjdCBjaHJvbWUtdGVzdC1ody1ocG4gaXMga2lsbGVkXG5pbXBvcnQgaHBuIGZyb20gJy4vaW5kZXgnO1xuXG53aW5kb3cuQ2xpcXpTZWN1cmVNZXNzYWdlID0ge1xuICBpbml0KCkge1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IGhwbi5CYWNrZ3JvdW5kO1xuICAgIHRoaXMubG9hZGluZ1Byb21pc2UgPSB0aGlzLmJhY2tncm91bmQuaW5pdCgpO1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmdQcm9taXNlO1xuICB9LFxuXG4gIHRlbGVtZXRyeShtc2cpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nUHJvbWlzZS50aGVuKFxuICAgICAgKCkgPT4gdGhpcy5iYWNrZ3JvdW5kLmFjdGlvbnMuc2VuZFRlbGVtZXRyeShtc2cpXG4gICAgKTtcbiAgfSxcbiAgc2hhMShtc2cpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nUHJvbWlzZS50aGVuKFxuICAgICgpID0+IHRoaXMuYmFja2dyb3VuZC5hY3Rpb25zLnNoYTEobXNnKVxuICAgICk7XG4gIH0sXG5cbiAgc2VuZEluc3RhbnRNZXNzYWdlKHJwLCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZ1Byb21pc2UudGhlbihcbiAgICAgICgpID0+IHRoaXMuYmFja2dyb3VuZC5hY3Rpb25zLnNlbmRJbnN0YW50TWVzc2FnZShycCwgcGF5bG9hZClcbiAgICApO1xuICB9XG59O1xuIl19