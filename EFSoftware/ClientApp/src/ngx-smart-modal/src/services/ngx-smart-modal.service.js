"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NgxSmartModalService = /** @class */ (function () {
    function NgxSmartModalService() {
        this.modalStack = [];
    }
    /**
     * Add a new modal instance. This step is essential and allows to retrieve any modal at any time.
     * It stores an object that contains the given modal identifier and the modal itself directly in the `modalStack`.
     *
     * @param modalInstance The object that contains the given modal identifier and the modal itself.
     * @param force Optional parameter that forces the overriding of modal instance if it already exists.
     * @returns nothing special.
     */
    NgxSmartModalService.prototype.addModal = function (modalInstance, force) {
        if (force) {
            var i = this.modalStack.findIndex(function (o) { return o.id === modalInstance.id; });
            if (i > -1) {
                this.modalStack[i].modal = modalInstance.modal;
            }
            else {
                this.modalStack.push(modalInstance);
            }
            return;
        }
        this.modalStack.push(modalInstance);
    };
    /**
     * Retrieve a modal instance by its identifier.
     *
     * @param id The modal identifier used at creation time.
     */
    NgxSmartModalService.prototype.getModal = function (id) {
        var i = this.modalStack.find(function (o) { return o.id === id; });
        if (i !== undefined) {
            return i.modal;
        }
        else {
            throw new Error("Cannot find modal with identifier " + id);
        }
    };
    /**
     * Alias of `getModal` to retrieve a modal instance by its identifier.
     *
     * @param id The modal identifier used at creation time.
     */
    NgxSmartModalService.prototype.get = function (id) {
        return this.getModal(id);
    };
    /**
     * Open a given modal
     *
     * @param id The modal identifier used at creation time.
     * @param force Tell the modal to open top of all other opened modals
     */
    NgxSmartModalService.prototype.open = function (id, force) {
        if (force === void 0) { force = false; }
        var i;
        if (i = this.get(id)) {
            i.open(force);
        }
    };
    /**
     * Close a given modal
     *
     * @param id The modal identifier used at creation time.
     */
    NgxSmartModalService.prototype.close = function (id) {
        var i;
        if (i = this.get(id)) {
            i.close();
        }
    };
    /**
     * Toggles a given modal
     * If the retrieved modal is opened it closes it, else it opens it.
     *
     * @param id The modal identifier used at creation time.
     * @param force Tell the modal to open top of all other opened modals
     */
    NgxSmartModalService.prototype.toggle = function (id, force) {
        if (force === void 0) { force = false; }
        var i;
        if (i = this.get(id)) {
            i.toggle(force);
        }
    };
    /**
     * Retrieve all the created modals.
     *
     * @returns an array that contains all modal instances.
     */
    NgxSmartModalService.prototype.getModalStack = function () {
        return this.modalStack;
    };
    /**
     * Retrieve all the opened modals. It looks for all modal instances with their `visible` property set to `true`.
     *
     * @returns an array that contains all the opened modals.
     */
    NgxSmartModalService.prototype.getOpenedModals = function () {
        return this.modalStack.filter(function (o) { return o.modal.visible; });
    };
    /**
     * Retrieve the opened modal with highest z-index.
     *
     * @returns the opened modal with highest z-index.
     */
    NgxSmartModalService.prototype.getTopOpenedModal = function () {
        if (!this.getOpenedModals().length) {
            throw new Error('No modal is opened');
        }
        return this.getOpenedModals()
            .map(function (o) { return o.modal; })
            .reduce(function (highest, item) { return item.layerPosition > highest.layerPosition ? item : highest; }, this.getOpenedModals()[0].modal);
    };
    /**
     * Get the higher `z-index` value between all the modal instances. It iterates over the `ModalStack` array and
     * calculates a higher value (it takes the highest index value between all the modal instances and adds 1).
     * Use it to make a modal appear foreground.
     *
     * @returns a higher index from all the existing modal instances.
     */
    NgxSmartModalService.prototype.getHigherIndex = function () {
        return Math.max.apply(Math, this.modalStack.map(function (o) { return o.modal.layerPosition; }).concat([1041])) + 1;
    };
    /**
     * It gives the number of modal instances. It's helpful to know if the modal stack is empty or not.
     *
     * @returns the number of modal instances.
     */
    NgxSmartModalService.prototype.getModalStackCount = function () {
        return this.modalStack.length;
    };
    /**
     * Remove a modal instance from the modal stack.
     *
     * @param id The modal identifier.
     * @returns the removed modal instance.
     */
    NgxSmartModalService.prototype.removeModal = function (id) {
        var i = this.modalStack.findIndex(function (o) { return o.id === id; });
        if (i > -1) {
            this.modalStack.splice(i, 1);
        }
    };
    /**
     * Associate data to an identified modal. If the modal isn't already associated to some data, it creates a new
     * entry in the `modalData` array with its `id` and the given `data`. If the modal already has data, it rewrites
     * them with the new ones. Finally if no modal found it returns an error message in the console and false value
     * as method output.
     *
     * @param data The data you want to associate to the modal.
     * @param id The modal identifier.
     * @param force If true, overrides the previous stored data if there was.
     * @returns true if the given modal exists and the process has been tried, either false.
     */
    NgxSmartModalService.prototype.setModalData = function (data, id, force) {
        var i;
        if (i = this.get(id)) {
            i.setData(data, force);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Retrieve modal data by its identifier.
     *
     * @param id The modal identifier used at creation time.
     * @returns the associated modal data.
     */
    NgxSmartModalService.prototype.getModalData = function (id) {
        var i;
        if (i = this.get(id)) {
            return i.getData();
        }
    };
    /**
     * Reset the data attached to a given modal.
     *
     * @param id The modal identifier used at creation time.
     * @returns the removed data or false if modal doesn't exist.
     */
    NgxSmartModalService.prototype.resetModalData = function (id) {
        if (!!this.modalStack.find(function (o) { return o.id === id; })) {
            var removed = this.getModal(id).getData();
            this.getModal(id).removeData();
            return removed;
        }
        else {
            return false;
        }
    };
    /**
     * Close the latest opened modal if it has been declared as escapable
     * Using a debounce system because one or more modals could be listening
     * escape key press event.
     */
    NgxSmartModalService.prototype.closeLatestModal = function () {
        this.getTopOpenedModal().close();
    };
    NgxSmartModalService = __decorate([
        core_1.Injectable()
    ], NgxSmartModalService);
    return NgxSmartModalService;
}());
exports.NgxSmartModalService = NgxSmartModalService;
//# sourceMappingURL=ngx-smart-modal.service.js.map