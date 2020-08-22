import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var LaAlertComponent = /** @class */ (function () {
    function LaAlertComponent() {
    }
    LaAlertComponent.prototype.ngOnInit = function () {
    };
    /** @nocollapse */ LaAlertComponent.ɵfac = function LaAlertComponent_Factory(t) { return new (t || LaAlertComponent)(); };
    /** @nocollapse */ LaAlertComponent.ɵcmp = ɵɵdefineComponent({ type: LaAlertComponent, selectors: [["la-alert"]], decls: 2, vars: 0, template: function LaAlertComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, "alert works!adkjf jjk ajksdfj ");
            ɵɵelementEnd();
        } }, styles: [""] });
    return LaAlertComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(LaAlertComponent, [{
        type: Component,
        args: [{
                selector: 'la-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.less']
            }]
    }], function () { return []; }, null); })();

var LaAlertModule = /** @class */ (function () {
    function LaAlertModule() {
    }
    /** @nocollapse */ LaAlertModule.ɵmod = ɵɵdefineNgModule({ type: LaAlertModule });
    /** @nocollapse */ LaAlertModule.ɵinj = ɵɵdefineInjector({ factory: function LaAlertModule_Factory(t) { return new (t || LaAlertModule)(); }, imports: [[
                CommonModule
            ]] });
    return LaAlertModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(LaAlertModule, { declarations: [LaAlertComponent], imports: [CommonModule], exports: [LaAlertComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(LaAlertModule, [{
        type: NgModule,
        args: [{
                declarations: [LaAlertComponent],
                exports: [LaAlertComponent],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { LaAlertComponent, LaAlertModule };
//# sourceMappingURL=ng-lay-alert.js.map
