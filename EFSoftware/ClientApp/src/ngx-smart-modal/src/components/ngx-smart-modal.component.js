"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_smart_modal_service_1 = require("../services/ngx-smart-modal.service");
var NgxSmartModalComponent = /** @class */ (function () {
    function NgxSmartModalComponent(_renderer, _changeDetectorRef, _ngxSmartModalService) {
        var _this = this;
        this._renderer = _renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this._ngxSmartModalService = _ngxSmartModalService;
        this.closable = true;
        this.escapable = true;
        this.dismissable = true;
        this.identifier = '';
        this.customClass = 'nsm-dialog-animation-fade';
        this.visible = false;
        this.backdrop = true;
        this.force = true;
        this.hideDelay = 500;
        this.autostart = false;
        this.visibleChange = new core_1.EventEmitter();
        this.onClose = new core_1.EventEmitter();
        this.onCloseFinished = new core_1.EventEmitter();
        this.onDismiss = new core_1.EventEmitter();
        this.onDismissFinished = new core_1.EventEmitter();
        this.onAnyCloseEvent = new core_1.EventEmitter();
        this.onAnyCloseEventFinished = new core_1.EventEmitter();
        this.onOpen = new core_1.EventEmitter();
        this.onEscape = new core_1.EventEmitter();
        this.onDataAdded = new core_1.EventEmitter();
        this.onDataRemoved = new core_1.EventEmitter();
        this.layerPosition = 1041;
        this.overlayVisible = false;
        this.openedClass = false;
        /**
         * Close the latest opened modal if escape key event is emitted
         */
        this.escapeKeyboardEvent = function (event) {
            if (event.keyCode === 27) {
                if (_this.layerPosition === _this._ngxSmartModalService.getTopOpenedModal().layerPosition) {
                    _this.onEscape.emit(_this);
                    _this._ngxSmartModalService.closeLatestModal();
                }
            }
        };
    }
    NgxSmartModalComponent.prototype.ngOnInit = function () {
        if (!!this.identifier && this.identifier.length) {
            this.layerPosition += this._ngxSmartModalService.getModalStackCount();
            this._ngxSmartModalService.addModal({ id: this.identifier, modal: this }, this.force);
            if (this.autostart) {
                this._ngxSmartModalService.open(this.identifier);
            }
        }
        else {
            throw new Error('identifier field isn’t set. Please set one before calling <ngx-smart-modal> in a template.');
        }
    };
    NgxSmartModalComponent.prototype.ngOnDestroy = function () {
        this._ngxSmartModalService.removeModal(this.identifier);
        window.removeEventListener('keyup', this.escapeKeyboardEvent);
        if (!this._ngxSmartModalService.getModalStack.length) {
            this._renderer.removeClass(document.body, 'dialog-open');
        }
    };
    /**
     * Open the modal instance
     *
     * @param top open the modal top of all other
     */
    NgxSmartModalComponent.prototype.open = function (top) {
        var _this = this;
        if (top) {
            this.layerPosition = this._ngxSmartModalService.getHigherIndex();
        }
        this._renderer.addClass(document.body, 'dialog-open');
        this.overlayVisible = true;
        this.visible = true;
        setTimeout(function () {
            _this.openedClass = true;
            if (_this.target) {
                _this.targetPlacement();
            }
            _this._changeDetectorRef.markForCheck();
        });
        this.onOpen.emit(this);
        if (this.escapable) {
            window.addEventListener('keyup', this.escapeKeyboardEvent);
        }
    };
    /**
     * Close the modal instance
     */
    NgxSmartModalComponent.prototype.close = function () {
        var me = this;
        this.openedClass = false;
        this.onClose.emit(this);
        this.onAnyCloseEvent.emit(this);
        if (this._ngxSmartModalService.getOpenedModals().length < 2) {
            this._renderer.removeClass(document.body, 'dialog-open');
        }
        setTimeout(function () {
            me.visibleChange.emit(me.visible);
            me.visible = false;
            me.overlayVisible = false;
            me._changeDetectorRef.markForCheck();
            me.onCloseFinished.emit(me);
            me.onAnyCloseEventFinished.emit(me);
        }, this.hideDelay);
        window.removeEventListener('keyup', this.escapeKeyboardEvent);
    };
    /**
     * Dismiss the modal instance
     *
     * @param e the event sent by the browser
     */
    NgxSmartModalComponent.prototype.dismiss = function (e) {
        var me = this;
        if (!this.dismissable) {
            return;
        }
        if (e.target.classList.contains('overlay')) {
            this.openedClass = false;
            this.onDismiss.emit(this);
            this.onAnyCloseEvent.emit(this);
            if (this._ngxSmartModalService.getOpenedModals().length < 2) {
                this._renderer.removeClass(document.body, 'dialog-open');
            }
            setTimeout(function () {
                me.visible = false;
                me.visibleChange.emit(me.visible);
                me.overlayVisible = false;
                me._changeDetectorRef.markForCheck();
                me.onDismissFinished.emit(me);
                me.onAnyCloseEventFinished.emit(me);
            }, this.hideDelay);
            window.removeEventListener('keyup', this.escapeKeyboardEvent);
        }
    };
    /**
     * Toggle visibility of the modal instance
     *
     * @param top open the modal top of all other
     */
    NgxSmartModalComponent.prototype.toggle = function (top) {
        if (this.visible) {
            this.close();
        }
        else {
            this.open(top);
        }
    };
    /**
     * Add a custom class to the modal instance
     *
     * @param className the class to add
     */
    NgxSmartModalComponent.prototype.addCustomClass = function (className) {
        if (!this.customClass.length) {
            this.customClass = className;
        }
        else {
            this.customClass += ' ' + className;
        }
    };
    /**
     * Remove a custom class to the modal instance
     *
     * @param className the class to remove
     */
    NgxSmartModalComponent.prototype.removeCustomClass = function (className) {
        if (className) {
            this.customClass = this.customClass.replace(className, '').trim();
        }
        else {
            this.customClass = '';
        }
    };
    /**
     * Returns the visibility state of the modal instance
     */
    NgxSmartModalComponent.prototype.isVisible = function () {
        return this.visible;
    };
    /**
     * Checks if data is attached to the modal instance
     */
    NgxSmartModalComponent.prototype.hasData = function () {
        return this._data !== undefined;
    };
    /**
     * Attach data to the modal instance
     *
     * @param data the data to attach
     * @param force override potentially attached data
     */
    NgxSmartModalComponent.prototype.setData = function (data, force) {
        if (!this.hasData() || (this.hasData() && force)) {
            this._data = data;
            this.onDataAdded.emit(this._data);
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * Retrieve the data attached to the modal instance
     */
    NgxSmartModalComponent.prototype.getData = function () {
        return this._data;
    };
    /**
     * Remove the data attached to the modal instance
     */
    NgxSmartModalComponent.prototype.removeData = function () {
        this._data = undefined;
        this.onDataRemoved.emit(true);
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Listens for window resize event and recalculates modal instance position if it is element-relative
     */
    NgxSmartModalComponent.prototype.targetPlacement = function () {
        if (!this.nsmDialog || !this.nsmContent || !this.nsmOverlay || !this.target) {
            return;
        }
        var targetElementRect = document.querySelector(this.target).getBoundingClientRect();
        var bodyRect = this.nsmOverlay.nativeElement.getBoundingClientRect();
        var nsmContentRect = this.nsmContent.nativeElement.getBoundingClientRect();
        var nsmDialogRect = this.nsmDialog.nativeElement.getBoundingClientRect();
        var marginLeft = parseInt(getComputedStyle(this.nsmContent.nativeElement).marginLeft, 10);
        var marginTop = parseInt(getComputedStyle(this.nsmContent.nativeElement).marginTop, 10);
        var offsetTop = targetElementRect.top - nsmDialogRect.top - ((nsmContentRect.height - targetElementRect.height) / 2);
        var offsetLeft = targetElementRect.left - nsmDialogRect.left - ((nsmContentRect.width - targetElementRect.width) / 2);
        if (offsetLeft + nsmDialogRect.left + nsmContentRect.width + (marginLeft * 2) > bodyRect.width) {
            offsetLeft = bodyRect.width - (nsmDialogRect.left + nsmContentRect.width) - (marginLeft * 2);
        }
        else if (offsetLeft + nsmDialogRect.left < 0) {
            offsetLeft = -nsmDialogRect.left;
        }
        if (offsetTop + nsmDialogRect.top + nsmContentRect.height + marginTop > bodyRect.height) {
            offsetTop = bodyRect.height - (nsmDialogRect.top + nsmContentRect.height) - marginTop;
        }
        if (offsetTop < 0) {
            offsetTop = 0;
        }
        this._renderer.setStyle(this.nsmContent.nativeElement, 'top', offsetTop + 'px');
        this._renderer.setStyle(this.nsmContent.nativeElement, 'left', offsetLeft + 'px');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgxSmartModalComponent.prototype, "closable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgxSmartModalComponent.prototype, "escapable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgxSmartModalComponent.prototype, "dismissable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgxSmartModalComponent.prototype, "identifier", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], NgxSmartModalComponent.prototype, "customClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgxSmartModalComponent.prototype, "visible", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgxSmartModalComponent.prototype, "backdrop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgxSmartModalComponent.prototype, "force", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NgxSmartModalComponent.prototype, "hideDelay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], NgxSmartModalComponent.prototype, "autostart", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], NgxSmartModalComponent.prototype, "target", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "visibleChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onClose", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onCloseFinished", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onDismiss", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onDismissFinished", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onAnyCloseEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onAnyCloseEventFinished", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onOpen", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onEscape", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onDataAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NgxSmartModalComponent.prototype, "onDataRemoved", void 0);
    __decorate([
        core_1.ViewChild('nsmContent'),
        __metadata("design:type", core_1.ElementRef)
    ], NgxSmartModalComponent.prototype, "nsmContent", void 0);
    __decorate([
        core_1.ViewChild('nsmDialog'),
        __metadata("design:type", core_1.ElementRef)
    ], NgxSmartModalComponent.prototype, "nsmDialog", void 0);
    __decorate([
        core_1.ViewChild('nsmOverlay'),
        __metadata("design:type", core_1.ElementRef)
    ], NgxSmartModalComponent.prototype, "nsmOverlay", void 0);
    __decorate([
        core_1.HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgxSmartModalComponent.prototype, "targetPlacement", null);
    NgxSmartModalComponent = __decorate([
        core_1.Component({
            selector: 'ngx-smart-modal',
            template: "\n    <div *ngIf=\"overlayVisible\"\n         [style.z-index]=\"visible ? layerPosition-1 : -1\"\n         [ngClass]=\"{'transparent':!backdrop, 'overlay':true, 'nsm-overlay-open':openedClass}\"\n         (mousedown)=\"dismiss($event)\" #nsmOverlay>\n      <div [style.z-index]=\"visible ? layerPosition : -1\"\n           [ngClass]=\"['nsm-dialog', customClass, openedClass ? 'nsm-dialog-open': 'nsm-dialog-close']\" #nsmDialog>\n        <div class=\"nsm-content\" #nsmContent>\n          <div class=\"nsm-body\">\n            <ng-content></ng-content>\n          </div>\n          <button type=\"button\" *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"nsm-dialog-btn-close\">\n            <img\n              src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDMsNi4wNThjLTguMDc3LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDksMEw2LjA1OCw0NzYuNjkzYy04LjA3Nyw4LjA3Ny04LjA3NywyMS4xNzIsMCwyOS4yNDkgICAgQzEwLjA5Niw1MDkuOTgyLDE1LjM5LDUxMiwyMC42ODMsNTEyYzUuMjkzLDAsMTAuNTg2LTIuMDE5LDE0LjYyNS02LjA1OUw1MDUuOTQzLDM1LjMwNiAgICBDNTE0LjAxOSwyNy4yMyw1MTQuMDE5LDE0LjEzNSw1MDUuOTQzLDYuMDU4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDIsNDc2LjY5NEwzNS4zMDYsNi4wNTljLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMGMtOC4wNzcsOC4wNzYtOC4wNzcsMjEuMTcxLDAsMjkuMjQ4bDQ3MC42MzYsNDcwLjYzNiAgICBjNC4wMzgsNC4wMzksOS4zMzIsNi4wNTgsMTQuNjI1LDYuMDU4YzUuMjkzLDAsMTAuNTg3LTIuMDE5LDE0LjYyNC02LjA1N0M1MTQuMDE4LDQ5Ny44NjYsNTE0LjAxOCw0ODQuNzcxLDUwNS45NDIsNDc2LjY5NHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K\" />\n          </button>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [core_1.Renderer2,
            core_1.ChangeDetectorRef,
            ngx_smart_modal_service_1.NgxSmartModalService])
    ], NgxSmartModalComponent);
    return NgxSmartModalComponent;
}());
exports.NgxSmartModalComponent = NgxSmartModalComponent;
//# sourceMappingURL=ngx-smart-modal.component.js.map