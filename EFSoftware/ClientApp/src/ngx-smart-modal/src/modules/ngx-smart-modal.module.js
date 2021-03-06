"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var ngx_smart_modal_service_1 = require("../services/ngx-smart-modal.service");
var ngx_smart_modal_component_1 = require("../components/ngx-smart-modal.component");
var NgxSmartModalModule = /** @class */ (function () {
    function NgxSmartModalModule() {
    }
    NgxSmartModalModule_1 = NgxSmartModalModule;
    /**
     * Use in AppModule: new instance of NgxSmartModal.
     */
    NgxSmartModalModule.forRoot = function () {
        return {
            ngModule: NgxSmartModalModule_1,
            providers: [ngx_smart_modal_service_1.NgxSmartModalService]
        };
    };
    /**
     * Use in features modules with lazy loading: new instance of NgxSmartModal.
     */
    NgxSmartModalModule.forChild = function () {
        return {
            ngModule: NgxSmartModalModule_1,
            providers: [ngx_smart_modal_service_1.NgxSmartModalService]
        };
    };
    var NgxSmartModalModule_1;
    NgxSmartModalModule = NgxSmartModalModule_1 = __decorate([
        core_1.NgModule({
            declarations: [ngx_smart_modal_component_1.NgxSmartModalComponent],
            exports: [ngx_smart_modal_component_1.NgxSmartModalComponent],
            imports: [common_1.CommonModule]
        })
    ], NgxSmartModalModule);
    return NgxSmartModalModule;
}());
exports.NgxSmartModalModule = NgxSmartModalModule;
//# sourceMappingURL=ngx-smart-modal.module.js.map