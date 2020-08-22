(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-lay/alert')) :
    typeof define === 'function' && define.amd ? define('ng-lay', ['exports', '@angular/core', 'ng-lay/alert'], factory) :
    (global = global || self, factory(global['ng-lay'] = {}, global.ng.core, global['ng-lay'].alert));
}(this, (function (exports, core, alert) { 'use strict';

    var NgLayModule = /** @class */ (function () {
        function NgLayModule() {
        }
        /** @nocollapse */ NgLayModule.ɵmod = core.ɵɵdefineNgModule({ type: NgLayModule });
        /** @nocollapse */ NgLayModule.ɵinj = core.ɵɵdefineInjector({ factory: function NgLayModule_Factory(t) { return new (t || NgLayModule)(); }, imports: [alert.LaAlertModule] });
        return NgLayModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NgLayModule, { exports: [alert.LaAlertModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgLayModule, [{
            type: core.NgModule,
            args: [{
                    exports: [
                        alert.LaAlertModule,
                    ]
                }]
        }], function () { return []; }, null); })();

    Object.keys(alert).forEach(function (k) {
        if (k !== 'default') Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return alert[k];
            }
        });
    });
    exports.NgLayModule = NgLayModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-lay.umd.js.map
