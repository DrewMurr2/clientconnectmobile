webpackJsonp(["needles.module"],{

/***/ "../../../../../src/app/needles/needles-persons/add-filter-dialog/add-filter-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "  <mat-dialog-content *ngIf=\"dialogReady\">\n      <mat-progress-bar\n              [style.opacity]=\"!processing?0:1\"\n              mode=\"indeterminate\"\n              style.margin-bottom ='10px'\n      ></mat-progress-bar>\n\n      <div class=\"row\">\n          <div class=\"col-sm-2 label\">{{field.title}}</div>\n\n          <mat-form-field class=\"col-sm-5\">\n              <mat-select\n                      (selectionChange)=\"(selectedValue || ['isNull', 'isNotNull'].indexOf(selectedOperator) >= 0?add():'')\"\n                      [(ngModel)]=\"selectedOperator\"\n                      placeholder=\"Select Operator\"\n              >\n                  <mat-option\n                          *ngFor=\"let operator of getOperators()\"\n                          [value]=\"operator.value\">{{operator.title}}</mat-option>\n\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field\n                  *ngIf=\"field.valueType!='date'\"\n                  class=\"col-sm-5\">\n              <mat-select\n\n                      (selectionChange)=\"selectedOperator?add():''\"\n                      [(ngModel)]=\"selectedValue\"\n                      [placeholder]=\"'Select '+field.title\"\n              >\n                  <mat-option [value]=\"value\" *ngFor=\"let value of field.values\">{{value}}</mat-option>\n              </mat-select>\n\n\n\n          </mat-form-field>\n\n\n          <mat-form-field class=\"col-sm-5\" *ngIf=\"field.valueType=='date' && ['isNull', 'isNotNull'].indexOf(selectedOperator) <0\" >\n              <input (dateChange)=\"selectedOperator  ?add():''\" [(ngModel)]=\"selectedValue\" matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n\n      </div>\n\n  </mat-dialog-content>"

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/add-filter-dialog/add-filter-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".label {\n  line-height: 47px;\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/add-filter-dialog/add-filter-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFilterDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_context_menu_context_menu_component__ = __webpack_require__("../../../../../src/app/shared/context-menu/context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AddFilterDialogComponent = /** @class */ (function () {
    function AddFilterDialogComponent(dialogRef, data, apiService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiService = apiService;
        this.processing = false;
        this.selectedOperator = '';
        this.selectedValue = '';
        this.field = { values: [] };
        this.defaultOperators = [];
        this.dialogReady = false;
        if (this.dialogOpenSubscription) {
            this.dialogOpenSubscription.unsubscribe();
        }
    }
    AddFilterDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.showField(this.data.fieldObj);
        setTimeout(function () {
            _this.dialogReady = true;
        }, 100);
    };
    AddFilterDialogComponent.prototype.ngOnInit = function () {
    };
    AddFilterDialogComponent.prototype.getOperators = function () {
        return this.field.operators ? this.field.operators : this.defaultOperators;
    };
    AddFilterDialogComponent.prototype.getDefaultOperators = function () {
        this.defaultOperators = [
            { value: '=', title: 'is equal' },
            { value: '!=', title: 'is not equal' }
        ];
        if (this.field.valueType == 'date') {
            this.defaultOperators = this.defaultOperators.concat([
                { value: '>', title: 'is greater than' },
                { value: '<', title: 'is less than' },
                { value: 'isNull', title: 'is null' },
                { value: 'isNotNull', title: 'is not null' },
            ]);
        }
    };
    AddFilterDialogComponent.prototype.showField = function (fieldObj) {
        this.field = fieldObj;
        // if no value provided by default then load it from database
        if (this.field.values == undefined || (this.field.values != undefined && !this.field.values.length) && this.field.valueType != 'date') {
            // load field values
            this.loadFields();
        }
        this.getDefaultOperators();
    };
    AddFilterDialogComponent.prototype.add = function () {
        var data = { field: this.field.id, operator: this.selectedOperator, value: this.selectedValue };
        if (this.field.valueType == 'date' && ['isNull', 'isNotNull'].indexOf(this.selectedOperator) < 0) {
            var date = '';
            if (this.selectedValue != null) {
                var d = this.selectedValue;
                var m = parseInt(d.getMonth()) + 1;
                date = d.getFullYear() + '-' + (('0' + m).slice(-2)) + '-' + ('0' + d.getDate()).slice(-2);
            }
            else {
                date = '';
            }
            data.value = date;
        }
        this.dialogRef.close({ status: 1, data: { filter: data } });
    };
    AddFilterDialogComponent.prototype.loadFields = function () {
        var _this = this;
        this.processing = true;
        this.apiService.call('/api/integrations/needles/getFieldValues', { field: this.field.id, dataType: this.data.dataType }).subscribe(function (response) {
            if (response.success) {
                _this.field.values = response.data.values;
            }
            _this.processing = false;
        }, function () {
            _this.processing = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_context_menu_context_menu_component__["a" /* ContextMenuComponent */]),
        __metadata("design:type", Object)
    ], AddFilterDialogComponent.prototype, "ContextMenuComponent", void 0);
    AddFilterDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-filter-dialog',
            template: __webpack_require__("../../../../../src/app/needles/needles-persons/add-filter-dialog/add-filter-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/needles/needles-persons/add-filter-dialog/add-filter-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */]])
    ], AddFilterDialogComponent);
    return AddFilterDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/create-filter-name-dialog/create-filter-name-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create filter name</h1>\n\n<mat-dialog-content>\n\n  <mat-input-container style=\"width:100%\">\n    <input [(ngModel)]=\"name\" matInput=\"\" placeholder=\"Please type filter name\">\n  </mat-input-container>\n\n</mat-dialog-content>\n\n\n<mat-dialog-actions>\n\n  <button\n  mat-raised-button=\"\"\n  color=\"primary\"\n  (click)=\"saveClicked()\"\n  [disabled]=\"!name\"\n  >\n    Save\n  </button>\n\n\n  <button mat-raised-button mat-dialog-close=\"\">Cancel</button>\n\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/create-filter-name-dialog/create-filter-name-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/create-filter-name-dialog/create-filter-name-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateFilterNameDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateFilterNameDialogComponent = /** @class */ (function () {
    function CreateFilterNameDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.name = '';
    }
    CreateFilterNameDialogComponent.prototype.ngOnInit = function () {
    };
    CreateFilterNameDialogComponent.prototype.saveClicked = function () {
        this.dialogRef.close({ status: 1, data: { name: this.name } });
    };
    CreateFilterNameDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-filter-name-dialog',
            template: __webpack_require__("../../../../../src/app/needles/needles-persons/create-filter-name-dialog/create-filter-name-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/needles/needles-persons/create-filter-name-dialog/create-filter-name-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */]])
    ], CreateFilterNameDialogComponent);
    return CreateFilterNameDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/needles-filters/needles-filters.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div (contextmenu)=\"showContextMenu($event)\" id=\"main\">\n  <app-context-menu\n    [menuItems]=\"contextMenuItems\"\n    (buttonClicked)=\"onContextMenuBtnClicked($event)\"\n  ></app-context-menu>\n    <mat-chip-list>\n      <ng-container *ngFor=\"let filter of filters\">\n\n\n      <mat-chip\n              *ngIf=\"filter.button\"\n              style=\"cursor: pointer; background-color:transparent; color:#636c72\"\n              (click)=\"addFilterClicked($event)\"\n      >\n\n       + Add Filter\n\n      </mat-chip>\n      <mat-chip\n              *ngIf=\"!filter.button\"\n                [selectable]=\"selectable\"\n                [removable]=\"removable\" (remove)=\"remove(filter)\">\n        {{filter.field+\" \"+filter.operator+\" \"+filter.value}}\n        <mat-icon matChipRemove *ngIf=\"removable\">close</mat-icon>\n      </mat-chip>\n\n      </ng-container>\n\n    </mat-chip-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/needles-filters/needles-filters.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\n  position: relative;\n  background-color: #FFF;\n  padding: 7px 10px;\n  -webkit-box-shadow: 0 0 3px 2px #CCC;\n          box-shadow: 0 0 3px 2px #CCC;\n  border-bottom: 2px solid #b9b8b8;\n  padding-bottom: 0px; }\n  #main .mat-chip-list-wrapper {\n    margin-bottom: 5px; }\n  #main mat-chip {\n    z-index: 1;\n    margin-bottom: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/needles-filters/needles-filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedlesFiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_context_menu_context_menu_component__ = __webpack_require__("../../../../../src/app/shared/context-menu/context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NeedlesFiltersComponent = /** @class */ (function () {
    function NeedlesFiltersComponent(route) {
        this.route = route;
        this.filters = [];
        this.filterRemoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.contextMenuBtnClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.visible = true;
        this.selectable = true;
        this.removable = true;
    }
    NeedlesFiltersComponent.prototype.getContextMenuItems = function () {
        if (this.dataType === 'parties') {
            this.contextMenuItems = this.getFieldsForParties();
        }
        else {
            this.contextMenuItems = this.getFieldsForProviders();
        }
    };
    NeedlesFiltersComponent.prototype.getFieldsForProviders = function () {
        var fields = [
            { title: 'Select a field', disabled: true },
            { title: 'Expert', id: 'expert', values: [] },
            { title: 'Specialty', id: 'specialty', values: [] },
            { title: 'Code', id: 'code', values: [] },
            { title: 'Cross Ref', id: 'cross_ref', values: [] },
            { title: 'Master', id: 'Master', values: [] }
        ];
        return fields;
    };
    NeedlesFiltersComponent.prototype.getFieldsForParties = function () {
        var fields = [
            { title: 'Select a field', disabled: true },
            { title: 'Role', id: 'role', values: [] },
            { title: 'Class', id: 'class', values: [] },
            { title: 'Our Client', id: 'our_client', values: ['Y', 'N'] },
            { title: 'Date Opened', id: 'date_opened', valueType: 'date', values: [] },
            { title: 'Date Close', id: 'date_close', valueType: 'date', values: [] },
            { title: 'Minor', id: 'minor', values: ['Y', 'N'] },
            { title: 'Date of Incident', id: 'date_of_incident', valueType: 'date', values: [] }
        ];
        // add context menu items for staff fields
        for (var i = 1; i <= 10; i++) {
            fields.push({ title: 'Staff ' + i, id: 'staff_' + i, values: [] });
        }
        // add context menu items for case date fields
        for (var i = 1; i <= 9; i++) {
            fields.push({
                title: 'Case Date ' + i,
                id: 'case_date_' + i,
                valueType: 'date', values: []
            });
        }
        return fields;
    };
    NeedlesFiltersComponent.prototype.ngOnInit = function () {
        this.removeAllFilters();
    };
    NeedlesFiltersComponent.prototype.remove = function (filter) {
        var index = this.filters.indexOf(filter);
        this.filterRemoved.emit(index);
        if (index >= 0) {
            this.filters.splice(index, 1);
        }
    };
    NeedlesFiltersComponent.prototype.addFilterClicked = function (e) {
        this.showContextMenu(e);
    };
    NeedlesFiltersComponent.prototype.showContextMenu = function (e) {
        this.ContextMenuComponent.showContextMenu(e);
    };
    NeedlesFiltersComponent.prototype.onContextMenuBtnClicked = function (e) {
        this.contextMenuBtnClicked.emit(e);
    };
    NeedlesFiltersComponent.prototype.addFilters = function (filters) {
        this.filters = filters.concat([{ button: true }]);
    };
    NeedlesFiltersComponent.prototype.removeAllFilters = function () {
        this.filters = [{ button: true }];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('dataType'),
        __metadata("design:type", Object)
    ], NeedlesFiltersComponent.prototype, "dataType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('filterRemoved'),
        __metadata("design:type", Object)
    ], NeedlesFiltersComponent.prototype, "filterRemoved", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('contextMenuBtnClicked'),
        __metadata("design:type", Object)
    ], NeedlesFiltersComponent.prototype, "contextMenuBtnClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__shared_context_menu_context_menu_component__["a" /* ContextMenuComponent */]),
        __metadata("design:type", Object)
    ], NeedlesFiltersComponent.prototype, "ContextMenuComponent", void 0);
    NeedlesFiltersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-needles-filters',
            template: __webpack_require__("../../../../../src/app/needles/needles-persons/needles-filters/needles-filters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/needles/needles-persons/needles-filters/needles-filters.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NeedlesFiltersComponent);
    return NeedlesFiltersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/needles-persons.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-sm-12\">\n    <div class=\"text-right\">\n      <br>\n      <app-needles-filters\n              style=\"display: block; margin-bottom:10px;\"\n              (contextMenuBtnClicked)=\"onContextMenuBtnClicked($event)\"\n              (filterRemoved)=\"onFilterRemove($event)\"\n              [dataType]=\"dataType\"\n      ></app-needles-filters>\n\n      <button mat-raised-button\n              class=\"categoryBtn\"\n              (click)=\"openSavedFilters()\"\n      >\n        <mat-icon>open_in_new</mat-icon>\n        Open saved filters\n      </button>\n\n      <button\n              class=\"categoryBtn\"\n              (click)=\"saveFiltersClicked()\"\n              [disabled]=\"filters.length<1 || savingFilters || disableSaveFiltersBtn\" mat-raised-button color=\"accent\">\n        <mat-icon>save</mat-icon>\n        Save\n      </button>\n\n      <button\n              class=\"categoryBtn\"\n              (click)=\"showAddTagDialog()\"\n              [disabled]=\"persons.length<1 || showPersonsProgressBar\"\n              color=\"primary\"\n              mat-raised-button\n      >\n        <mat-icon>local_offer</mat-icon>\n        Add Tag\n      </button>\n\n\n    </div>\n  </div>\n\n\n<br>\n<br>\n  <div class=\"col-sm-12\" *ngIf=\"!filters.length\">\n    <mat-card class=\" text-center\" >\n      <mat-card-content>\n        Please add filters.\n      </mat-card-content>\n    </mat-card>\n  </div>\n<div class=\"col-sm-12\">\n  <div id=\"persons\" class=\"row\">\n    <div class=\"col-sm-12\">\n      <mat-progress-bar\n              style=\"margin-top:10px;\"\n              mode=\"indeterminate\"\n              *ngIf=\"showPersonsProgressBar\"\n      ></mat-progress-bar>\n    </div>\n    <div class=\"col-sm-4\" *ngFor=\"let party of persons;\">\n\n      <app-contact-card-layout\n              [contact]=\"party\"\n      ></app-contact-card-layout>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/needles-persons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 0px) and (max-width: 567px) {\n  button.categoryBtn {\n    width: 100%;\n    margin-bottom: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/needles-persons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedlesPersonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_filter_dialog_add_filter_dialog_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/add-filter-dialog/add-filter-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_create_tags_dialog_create_tags_dialog_component__ = __webpack_require__("../../../../../src/app/shared/create-tags-dialog/create-tags-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_general_service__ = __webpack_require__("../../../../../src/app/shared/services/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__needles_filters_needles_filters_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/needles-filters/needles-filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_filter_name_dialog_create_filter_name_dialog_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/create-filter-name-dialog/create-filter-name-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__saved_filters_dialog_saved_filters_dialog_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/saved-filters-dialog/saved-filters-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NeedlesPersonsComponent = /** @class */ (function () {
    function NeedlesPersonsComponent(dialog, apiService, generalService, route) {
        this.dialog = dialog;
        this.apiService = apiService;
        this.generalService = generalService;
        this.route = route;
        this.savingFilters = false;
        this.disableSaveFiltersBtn = true;
        this.showPersonsProgressBar = false;
        this.filters = [];
        this.persons = [];
        this.dataType = 'parties';
    }
    NeedlesPersonsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function () {
            _this.reset();
            _this.dataType = _this.route.snapshot.params['dataType'];
            setTimeout(function () {
                _this.NeedlesFiltersComponent.getContextMenuItems();
            }, 1);
        });
    };
    NeedlesPersonsComponent.prototype.reset = function () {
        this.NeedlesFiltersComponent.removeAllFilters();
        this.filters = [];
        this.persons = [];
        this.unsubscribeAll();
    };
    NeedlesPersonsComponent.prototype.unsubscribeAll = function () {
        if (this.addFilterDialogSubscription) {
            this.addFilterDialogSubscription.unsubscribe();
        }
        if (this.getPersonsSubscription) {
            this.getPersonsSubscription.unsubscribe();
        }
        if (this.createTagsDialogSubscription) {
            this.createTagsDialogSubscription.unsubscribe();
        }
        if (this.createTagsSubscription) {
            this.createTagsSubscription.unsubscribe();
        }
        if (this.createFilterNameDialogAfterclosedSubscription) {
            this.createFilterNameDialogAfterclosedSubscription.unsubscribe();
        }
        if (this.saveFiltersSubscription) {
            this.saveFiltersSubscription.unsubscribe();
        }
        if (this.saveFiltersDialogAfterClosedSubscription) {
            this.saveFiltersDialogAfterClosedSubscription.unsubscribe();
        }
    };
    NeedlesPersonsComponent.prototype.openAddFiltersDialog = function (fieldObj) {
        this.addFilterDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__add_filter_dialog_add_filter_dialog_component__["a" /* AddFilterDialogComponent */], { width: '700px', data: { fieldObj: fieldObj, dataType: this.dataType } });
        this.registerFilterDialogEvents();
    };
    NeedlesPersonsComponent.prototype.registerFilterDialogEvents = function () {
        var _this = this;
        if (this.addFilterDialogSubscription) {
            this.addFilterDialogSubscription.unsubscribe();
        }
        this.addFilterDialogSubscription = this.addFilterDialogRef.afterClosed().subscribe(function (response) {
            _this.onAfterClosedAddFilterDialog(response);
        });
    };
    NeedlesPersonsComponent.prototype.onAfterClosedAddFilterDialog = function (response) {
        if (response.status) {
            this.filters.push(response.data.filter);
            this.NeedlesFiltersComponent.addFilters(this.filters);
            this.loadPersons();
            if (this.filters) {
                this.disableSaveFiltersBtn = false;
            }
        }
    };
    NeedlesPersonsComponent.prototype.loadPersons = function () {
        var _this = this;
        if (this.getPersonsSubscription) {
            this.getPersonsSubscription.unsubscribe();
        }
        this.showPersonsProgressBar = true;
        this.getPersonsSubscription = this.apiService.call('/api/integrations/needles/getPersons', { dataType: this.dataType, filters: JSON.stringify(this.filters) }).subscribe(function (response) {
            if (response.contacts) {
                _this.persons = response.contacts;
            }
            _this.showPersonsProgressBar = false;
        }, function () {
            _this.showPersonsProgressBar = false;
        });
    };
    NeedlesPersonsComponent.prototype.showAddTagDialog = function () {
        this.createTagsDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_create_tags_dialog_create_tags_dialog_component__["a" /* CreateTagsDialogComponent */], { width: '500px' });
        this.registerEventsForCreateTagsDialogRef();
    };
    NeedlesPersonsComponent.prototype.registerEventsForCreateTagsDialogRef = function () {
        var _this = this;
        if (this.createTagsDialogSubscription) {
            this.createTagsDialogSubscription.unsubscribe();
        }
        this.createTagsDialogSubscription = this.createTagsDialogRef.afterClosed().subscribe(function (response) {
            if (response.tags) {
                _this.saveTags(response.tags);
            }
        });
    };
    NeedlesPersonsComponent.prototype.saveTags = function (tags) {
        var _this = this;
        if (this.createTagsSubscription) {
            this.createTagsSubscription.unsubscribe();
        }
        this.showPersonsProgressBar = true;
        var contactIds = this.extractContactsIds();
        this.createTagsSubscription = this.apiService.call('/api/createTags', {
            tags: JSON.stringify(tags),
            contactIds: JSON.stringify(contactIds)
        }).subscribe(function (response) {
            if (response.success) {
                _this.generalService.showNotification('Tags are saved successfully.', 'Okay');
            }
            _this.showPersonsProgressBar = false;
        }, function () {
            _this.showPersonsProgressBar = false;
        });
    };
    NeedlesPersonsComponent.prototype.extractContactsIds = function () {
        var contacts = this.persons;
        var contactIds = [];
        contacts.forEach(function (contact, index) {
            contactIds.push(contact.id);
        });
        return contactIds;
    };
    NeedlesPersonsComponent.prototype.onContextMenuBtnClicked = function (menuItem) {
        this.openAddFiltersDialog(menuItem);
    };
    NeedlesPersonsComponent.prototype.onFilterRemove = function (index) {
        this.filters.splice(index, 1);
        if (this.filters.length > 0) {
            this.disableSaveFiltersBtn = false;
            this.loadPersons();
        }
        else {
            this.persons = [];
        }
    };
    NeedlesPersonsComponent.prototype.saveFiltersClicked = function () {
        var _this = this;
        if (this.createFilterNameDialogAfterclosedSubscription) {
            this.createFilterNameDialogAfterclosedSubscription.unsubscribe();
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__create_filter_name_dialog_create_filter_name_dialog_component__["a" /* CreateFilterNameDialogComponent */], { width: '350px' });
        this.createFilterNameDialogAfterclosedSubscription = dialogRef.afterClosed().subscribe(function (response) {
            if (response && response.status) {
                _this.saveFilters(response.data.name);
            }
        });
    };
    NeedlesPersonsComponent.prototype.saveFilters = function (name) {
        var _this = this;
        if (this.saveFiltersSubscription) {
            this.saveFiltersSubscription.unsubscribe();
        }
        this.savingFilters = true;
        this.saveFiltersSubscription = this.apiService.call('/api/needles/saveFilters', {
            dataType: this.dataType,
            name: name,
            filters: JSON.stringify(this.filters)
        }).subscribe(function (response) {
            if (response.success) {
                _this.generalService.showNotification('Filters are saved successfully.', 'Okay');
                _this.disableSaveFiltersBtn = true;
            }
            _this.savingFilters = false;
        }, function () {
            _this.savingFilters = false;
        });
    };
    NeedlesPersonsComponent.prototype.openSavedFilters = function () {
        var _this = this;
        if (this.saveFiltersDialogAfterClosedSubscription) {
            this.saveFiltersDialogAfterClosedSubscription.unsubscribe();
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__saved_filters_dialog_saved_filters_dialog_component__["a" /* SavedFiltersDialogComponent */], { width: '400px', data: { dataType: this.dataType } });
        this.saveFiltersDialogAfterClosedSubscription = dialogRef.afterClosed().subscribe(function (response) {
            if (response && response.status) {
                _this.addFilters(response.data.filters);
            }
        });
    };
    NeedlesPersonsComponent.prototype.addFilters = function (filters) {
        this.filters = filters;
        this.NeedlesFiltersComponent.addFilters(filters);
        this.loadPersons();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__needles_filters_needles_filters_component__["a" /* NeedlesFiltersComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__needles_filters_needles_filters_component__["a" /* NeedlesFiltersComponent */])
    ], NeedlesPersonsComponent.prototype, "NeedlesFiltersComponent", void 0);
    NeedlesPersonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-needles-persons',
            template: __webpack_require__("../../../../../src/app/needles/needles-persons/needles-persons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/needles/needles-persons/needles-persons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_general_service__["a" /* GeneralService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* ActivatedRoute */]])
    ], NeedlesPersonsComponent);
    return NeedlesPersonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/saved-filters-dialog/saved-filters-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title=\"\">Saved Filters</h1>\n\n<mat-dialog-content>\n\n  <mat-accordion *ngIf=\"filters.length\">\n    <mat-expansion-panel *ngFor=\"let obj of filters;\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{obj.name}}\n        </mat-panel-title>\n        <mat-panel-description style=\"flex-direction: row-reverse;\">\n          {{obj.filters.length}} Filters\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <mat-chip-list>\n        <mat-chip *ngFor=\"let filter of obj.filters\">{{filter.field+\" \"+filter.operator+ \" \"+filter.value}}</mat-chip>\n      </mat-chip-list>\n\n      <div><br><br><button (click)=\"load(obj.filters)\" mat-raised-button=\"\" color=\"primary\">Load</button></div>\n\n    </mat-expansion-panel>\n\n  </mat-accordion>\n\n  <p *ngIf=\"filters.length<1 && !filtersLoading\">No filters found for this account. Please add some filters first.</p>\n\n  <p style=\"height:160px; \" *ngIf=\"filtersLoading\">Loading filters, please wait..<br>.<mat-spinner style=\"margin:0 auto;\"></mat-spinner></p>\n\n</mat-dialog-content>\n\n\n<mat-dialog-actions>\n  <br>\n<hr>\n  <button\n          mat-dialog-close=\"\"\n    mat-raised-button=\"\"\n  >\n    Close\n  </button>\n\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/saved-filters-dialog/saved-filters-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/needles/needles-persons/saved-filters-dialog/saved-filters-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedFiltersDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SavedFiltersDialogComponent = /** @class */ (function () {
    function SavedFiltersDialogComponent(apiService, data, dialogRef) {
        this.apiService = apiService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.filters = [];
        this.filtersLoading = false;
    }
    SavedFiltersDialogComponent.prototype.ngOnInit = function () {
        this.loadFilters();
    };
    SavedFiltersDialogComponent.prototype.loadFilters = function () {
        var _this = this;
        this.filtersLoading = true;
        this.apiService.call('/api/needles/getFilters', { dataType: this.data.dataType }).subscribe(function (response) {
            if (response.success) {
                _this.filters = _this.parseFilters(response.data.filters);
                console.log(_this.filters);
            }
            _this.filtersLoading = false;
        }, function () {
            _this.filtersLoading = false;
        });
    };
    SavedFiltersDialogComponent.prototype.jsonParse = function (obj) {
        try {
            return JSON.parse(obj);
        }
        catch (e) {
            return [];
        }
    };
    SavedFiltersDialogComponent.prototype.parseFilters = function (f) {
        f.forEach(function (obj, i) {
            obj.filters = JSON.parse(obj.filters);
            f[i] = obj;
        });
        return f;
    };
    SavedFiltersDialogComponent.prototype.load = function (filters) {
        this.dialogRef.close({ status: 1, data: { filters: filters } });
    };
    SavedFiltersDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-saved-filters-dialog',
            template: __webpack_require__("../../../../../src/app/needles/needles-persons/saved-filters-dialog/saved-filters-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/needles/needles-persons/saved-filters-dialog/saved-filters-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */]])
    ], SavedFiltersDialogComponent);
    return SavedFiltersDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/needles/needles-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedlesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__needles_component__ = __webpack_require__("../../../../../src/app/needles/needles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__needles_persons_needles_persons_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/needles-persons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__needles_component__["a" /* NeedlesComponent */], children: [
            { path: ':dataType', component: __WEBPACK_IMPORTED_MODULE_3__needles_persons_needles_persons_component__["a" /* NeedlesPersonsComponent */] },
        ] }
];
var NeedlesRoutingModule = /** @class */ (function () {
    function NeedlesRoutingModule() {
    }
    NeedlesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], NeedlesRoutingModule);
    return NeedlesRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/needles/needles.component.html":
/***/ (function(module, exports) {

module.exports = "    <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/needles/needles.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .mat-tab-label {\n  border-right: 1px solid #d1d1d1;\n  border-left: 1px solid #d1d1d1;\n  border-top: 1px solid #d1d1d1; }\n\n::ng-deep .mat-tab-label {\n  background-color: #FFF; }\n\n::ng-deep .mat-tab-label-active {\n  background-color: #e4eff7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/needles/needles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NeedlesComponent = /** @class */ (function () {
    function NeedlesComponent(router) {
        this.router = router;
    }
    NeedlesComponent.prototype.ngOnInit = function () {
    };
    NeedlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-needles',
            template: __webpack_require__("../../../../../src/app/needles/needles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/needles/needles.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], NeedlesComponent);
    return NeedlesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/needles/needles.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedlesModule", function() { return NeedlesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__needles_routing_module__ = __webpack_require__("../../../../../src/app/needles/needles-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__needles_persons_needles_persons_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/needles-persons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__needles_component__ = __webpack_require__("../../../../../src/app/needles/needles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__needles_persons_add_filter_dialog_add_filter_dialog_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/add-filter-dialog/add-filter-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__needles_persons_needles_filters_needles_filters_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/needles-filters/needles-filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__needles_persons_create_filter_name_dialog_create_filter_name_dialog_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/create-filter-name-dialog/create-filter-name-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__needles_persons_saved_filters_dialog_saved_filters_dialog_component__ = __webpack_require__("../../../../../src/app/needles/needles-persons/saved-filters-dialog/saved-filters-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var NeedlesModule = /** @class */ (function () {
    function NeedlesModule() {
    }
    NeedlesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__needles_routing_module__["a" /* NeedlesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__needles_component__["a" /* NeedlesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__needles_persons_needles_persons_component__["a" /* NeedlesPersonsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__needles_persons_add_filter_dialog_add_filter_dialog_component__["a" /* AddFilterDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__needles_persons_needles_filters_needles_filters_component__["a" /* NeedlesFiltersComponent */],
                __WEBPACK_IMPORTED_MODULE_8__needles_persons_create_filter_name_dialog_create_filter_name_dialog_component__["a" /* CreateFilterNameDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__needles_persons_saved_filters_dialog_saved_filters_dialog_component__["a" /* SavedFiltersDialogComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__needles_persons_add_filter_dialog_add_filter_dialog_component__["a" /* AddFilterDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_8__needles_persons_create_filter_name_dialog_create_filter_name_dialog_component__["a" /* CreateFilterNameDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__needles_persons_saved_filters_dialog_saved_filters_dialog_component__["a" /* SavedFiltersDialogComponent */]
            ]
        })
    ], NeedlesModule);
    return NeedlesModule;
}());



/***/ })

});
//# sourceMappingURL=needles.module.chunk.js.map