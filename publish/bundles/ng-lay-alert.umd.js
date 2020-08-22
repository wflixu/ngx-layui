(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-lay/alert', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['ng-lay'] = global['ng-lay'] || {}, global['ng-lay'].alert = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var LaAlertComponent = /** @class */ (function () {
        function LaAlertComponent() {
        }
        LaAlertComponent.prototype.ngOnInit = function () {
        };
        /** @nocollapse */ LaAlertComponent.ɵfac = function LaAlertComponent_Factory(t) { return new (t || LaAlertComponent)(); };
        /** @nocollapse */ LaAlertComponent.ɵcmp = core.ɵɵdefineComponent({ type: LaAlertComponent, selectors: [["la-alert"]], decls: 2, vars: 0, template: function LaAlertComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, "alert works!adkjf jjk ajksdfj ");
                core.ɵɵelementEnd();
            } }, styles: [""] });
        return LaAlertComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LaAlertComponent, [{
            type: core.Component,
            args: [{
                    selector: 'la-alert',
                    templateUrl: './alert.component.html',
                    styleUrls: ['./alert.component.less']
                }]
        }], function () { return []; }, null); })();

    var LaAlertModule = /** @class */ (function () {
        function LaAlertModule() {
        }
        /** @nocollapse */ LaAlertModule.ɵmod = core.ɵɵdefineNgModule({ type: LaAlertModule });
        /** @nocollapse */ LaAlertModule.ɵinj = core.ɵɵdefineInjector({ factory: function LaAlertModule_Factory(t) { return new (t || LaAlertModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return LaAlertModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(LaAlertModule, { declarations: [LaAlertComponent], imports: [common.CommonModule], exports: [LaAlertComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LaAlertModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [LaAlertComponent],
                    exports: [LaAlertComponent],
                    imports: [
                        common.CommonModule
                    ]
                }]
        }], null, null); })();

    exports.LaAlertComponent = LaAlertComponent;
    exports.LaAlertModule = LaAlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-lay-alert.umd.js.map
