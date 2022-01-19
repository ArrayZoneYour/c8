var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.pnpm/path-exists@4.0.0/node_modules/path-exists/index.js
var require_path_exists = __commonJS({
  "node_modules/.pnpm/path-exists@4.0.0/node_modules/path-exists/index.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var { promisify } = require("util");
    var pAccess = promisify(fs.access);
    module2.exports = (path) => __async(exports, null, function* () {
      try {
        yield pAccess(path);
        return true;
      } catch (_) {
        return false;
      }
    });
    module2.exports.sync = (path) => {
      try {
        fs.accessSync(path);
        return true;
      } catch (_) {
        return false;
      }
    };
  }
});

// ex.js
var { sync } = require_path_exists();
console.log("sync: ", typeof sync);
//# sourceMappingURL=ex.js.map
