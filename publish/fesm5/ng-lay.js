import { ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, ɵsetClassMetadata, NgModule } from '@angular/core';
import { LaAlertModule } from 'ng-lay/alert';
export * from 'ng-lay/alert';

var NgLayModule = /** @class */ (function () {
    function NgLayModule() {
    }
    /** @nocollapse */ NgLayModule.ɵmod = ɵɵdefineNgModule({ type: NgLayModule });
    /** @nocollapse */ NgLayModule.ɵinj = ɵɵdefineInjector({ factory: function NgLayModule_Factory(t) { return new (t || NgLayModule)(); }, imports: [LaAlertModule] });
    return NgLayModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgLayModule, { exports: [LaAlertModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgLayModule, [{
        type: NgModule,
        args: [{
                exports: [
                    LaAlertModule,
                ]
            }]
    }], function () { return []; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { NgLayModule };
//# sourceMappingURL=ng-lay.js.map
