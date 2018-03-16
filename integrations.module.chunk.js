webpackJsonp(["integrations.module"],{

/***/ "../../../../../src/app/admin/integrations/csv/csv.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<article class=\"article container\">\n    <h2 class=\"article-title\">CSV Upload</h2>\n    <div class=\"box box-default\">\n      <div class=\"box-body\">\n\n        <mat-tab-group>\n          <mat-tab label=\"Instructions\">\n            <section class=\"box box-transparent\">\n              <div class=\"box-body\">\n                <div class=\"callout callout-success\">\n                    <h4>Step 1</h4>\n                    <p>Uploaded Document must be in .csv Format.</p>\n                  </div>\n                  <div class=\"callout callout-success\">\n                    <h4>Step 2</h4>\n                    <p>It Should Contain Four Headers i.e. <span class=\"badge badge-pill badge-danger\">name</span> <span class=\"badge badge-pill badge-danger\">number</span> <span class=\"badge badge-pill badge-danger\">tags</span> <span class=\"badge badge-pill badge-danger\">email</span></p>\n                  </div>\n                  <div class=\"callout callout-success\">\n                    <h4>Stem 3</h4>\n                    <p> <span class=\"badge badge-pill badge-danger\">name</span> <span class=\"badge badge-pill badge-danger\">number</span> are mandatory fields.</p>\n                  </div>\n                  <div class=\"callout callout-success\">\n                    <h4>Step 4</h4>\n                    <p> In tag field multiple tags can be added seprated by <span class=\"badge badge-danger\">&</span> . Example:- <span class=\"badge badge-pill badge-danger\">Tag1&Tag2</span> </p>\n                  </div>\n              </div>\n            </section>\n          </mat-tab>\n          <mat-tab label=\"Upload CSV\">\n            <section class=\"box box-transparent\">\n              <div class=\"box-body\">\n                <form [formGroup]=\"form\" (ngSubmit)=\"upload()\">\n                    <div class=\"form-group\">\n                      <input type=\"file\" id=\"avatar\" (change)=\"onFileChange($event)\" #fileInput accept=\".csv\">\n                      <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n                    </div>\n                    <button type=\"submit\" [disabled]=\"!disbleButton\" mat-raised-button color=\"primary\" class=\"btn-w-sm\">Submit<i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button><div class=\"divider divider-sm\"></div>\n                  </form>\n                  \n              </div>\n            </section>\n          </mat-tab>\n         \n        </mat-tab-group>\n\n      </div>\n    </div>\n  </article>"

/***/ }),

/***/ "../../../../../src/app/admin/integrations/csv/csv.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/integrations/csv/csv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CsvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialog_modal_dialog_modal_component__ = __webpack_require__("../../../../../src/app/admin/integrations/csv/dialog-modal/dialog-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CsvComponent = /** @class */ (function () {
    function CsvComponent(apiService, fb, userService, dialog) {
        this.apiService = apiService;
        this.fb = fb;
        this.userService = userService;
        this.dialog = dialog;
        this.loading = false;
        this.disbleButton = false;
        this.SERVER_URL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].SERVER_URL || 'http://localhost:3100';
        this.createForm();
        this.filesToUpload = [];
    }
    CsvComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* Validators */].required],
            avatar: null
        });
    };
    CsvComponent.prototype.ngOnInit = function () {
    };
    CsvComponent.prototype.onFileChange = function (evt) {
        this.disbleButton = true;
        this.filesToUpload = evt.target.files;
    };
    CsvComponent.prototype.upload = function () {
        var _this = this;
        this.loading = true;
        this.disbleButton = false;
        this.makeFileRequest(this.SERVER_URL + "/api/csv/uploadCsv", [], this.filesToUpload).then(function (result) {
            _this.loading = false;
            _this.disbleButton = true;
            if (!result['success']) {
                ;
            }
            else {
                _this.clearFile();
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */], {
                data: result
            });
        }, function (error) {
            console.error('errrr', error);
        });
    };
    CsvComponent.prototype.makeFileRequest = function (url, params, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            var token = {
                token: _this.userService.user.token
            };
            for (var i = 0; i < files.length; i++) {
                formData.append("data", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader('x-access-token', _this.userService.user.token);
            xhr.send(formData);
        });
    };
    CsvComponent.prototype.clearFile = function () {
        this.disbleButton = false;
        this.form.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CsvComponent.prototype, "fileInput", void 0);
    CsvComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-csv',
            template: __webpack_require__("../../../../../src/app/admin/integrations/csv/csv.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/integrations/csv/csv.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */]])
    ], CsvComponent);
    return CsvComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/integrations/csv/dialog-modal/dialog-modal.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"!data.success\" class=\"callout callout-danger\"><p>{{data.message}}</p> </div>\n<div *ngIf=\"data.success\" class=\"callout callout-success\">\n  <p>{{data.message}} </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/integrations/csv/dialog-modal/dialog-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/integrations/csv/dialog-modal/dialog-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogModalComponent; });
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogModalComponent = /** @class */ (function () {
    function DialogModalComponent(data) {
        this.data = data;
    }
    DialogModalComponent.prototype.ngOnInit = function () {
    };
    DialogModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-modal',
            template: __webpack_require__("../../../../../src/app/admin/integrations/csv/dialog-modal/dialog-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/integrations/csv/dialog-modal/dialog-modal.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], DialogModalComponent);
    return DialogModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/integrations/integrations-page/integrations-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\n\n    <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/integrations/integrations-page/integrations-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#page {\n  padding: 30px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/integrations/integrations-page/integrations-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntegrationsPageComponent = /** @class */ (function () {
    function IntegrationsPageComponent() {
    }
    IntegrationsPageComponent.prototype.ngOnInit = function () {
    };
    IntegrationsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-integrations-page',
            template: __webpack_require__("../../../../../src/app/admin/integrations/integrations-page/integrations-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/integrations/integrations-page/integrations-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntegrationsPageComponent);
    return IntegrationsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/integrations/integrations-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__integrations_integrations_component__ = __webpack_require__("../../../../../src/app/admin/integrations/integrations/integrations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__integrations_page_integrations_page_component__ = __webpack_require__("../../../../../src/app/admin/integrations/integrations-page/integrations-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__needles_setup_needles_setup_component__ = __webpack_require__("../../../../../src/app/admin/integrations/needles-setup/needles-setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__csv_csv_component__ = __webpack_require__("../../../../../src/app/admin/integrations/csv/csv.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', children: [
            { path: 'needles/setup', component: __WEBPACK_IMPORTED_MODULE_4__needles_setup_needles_setup_component__["a" /* NeedlesSetupComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__integrations_integrations_component__["a" /* IntegrationsComponent */] },
            { path: 'CSV/Instructions', component: __WEBPACK_IMPORTED_MODULE_5__csv_csv_component__["a" /* CsvComponent */] }
        ], component: __WEBPACK_IMPORTED_MODULE_3__integrations_page_integrations_page_component__["a" /* IntegrationsPageComponent */]
    }
];
var IntegrationsRoutingModule = /** @class */ (function () {
    function IntegrationsRoutingModule() {
    }
    IntegrationsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], IntegrationsRoutingModule);
    return IntegrationsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/integrations/integrations.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationsModule", function() { return IntegrationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__integrations_routing_module__ = __webpack_require__("../../../../../src/app/admin/integrations/integrations-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__integrations_integrations_component__ = __webpack_require__("../../../../../src/app/admin/integrations/integrations/integrations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__integrations_page_integrations_page_component__ = __webpack_require__("../../../../../src/app/admin/integrations/integrations-page/integrations-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__csv_csv_component__ = __webpack_require__("../../../../../src/app/admin/integrations/csv/csv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__csv_dialog_modal_dialog_modal_component__ = __webpack_require__("../../../../../src/app/admin/integrations/csv/dialog-modal/dialog-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__needles_setup_needles_setup_component__ = __webpack_require__("../../../../../src/app/admin/integrations/needles-setup/needles-setup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var IntegrationsModule = /** @class */ (function () {
    function IntegrationsModule() {
    }
    IntegrationsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__integrations_routing_module__["a" /* IntegrationsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__integrations_integrations_component__["a" /* IntegrationsComponent */], __WEBPACK_IMPORTED_MODULE_4__integrations_page_integrations_page_component__["a" /* IntegrationsPageComponent */], __WEBPACK_IMPORTED_MODULE_8__needles_setup_needles_setup_component__["a" /* NeedlesSetupComponent */], __WEBPACK_IMPORTED_MODULE_6__csv_csv_component__["a" /* CsvComponent */], __WEBPACK_IMPORTED_MODULE_7__csv_dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__csv_dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */]
            ]
        })
    ], IntegrationsModule);
    return IntegrationsModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/integrations/integrations/integrations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n    <div class=\"row\">\n        <div class=\"col-sm-4 my-auto\" routerLink=\"/app/admin/integrations/needles/setup\">\n            <img src=\"../../../../assets/images/needlesIcon.png\"/>\n        </div>\n\n        <div class=\"col-sm-4 my-auto\" routerLink=\"/app/admin/integrations/facebook\">\n            <img src=\"../../../../assets/images/facebook.png\"/>\n        </div>\n\n        <div class=\"col-sm-4 my-auto\" routerLink=\"/app/admin/integrations/gmail\">\n            <img src=\"../../../../assets/images/gmailIcon.png\"/>\n        </div>\n    </div>\n\n    <div class=\"col-sm-4 my-auto\" [routerLink]=\"['CSV/Instructions']\">\n        <img class=\"csvImage\" src=\"../../../../assets/images/csv-flat.png\"/>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/integrations/integrations/integrations.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  max-width: 50%; }\n\n.row {\n  text-align: center; }\n\n.row .my-auto {\n    cursor: pointer; }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n      .row .my-auto {\n        text-align: center; } }\n\n.my-auto {\n  padding-bottom: 20px; }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n    .my-auto {\n      text-align: center; } }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n  .my-auto img {\n    height: 100px; } }\n\n.csvImage {\n  width: 35% !important;\n  margin-left: 85px; }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n    .csvImage {\n      margin-left: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/integrations/integrations/integrations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegrationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntegrationsComponent = /** @class */ (function () {
    function IntegrationsComponent() {
    }
    IntegrationsComponent.prototype.ngOnInit = function () {
    };
    IntegrationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-integrations',
            template: __webpack_require__("../../../../../src/app/admin/integrations/integrations/integrations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/integrations/integrations/integrations.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntegrationsComponent);
    return IntegrationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/integrations/needles-setup/needles-setup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>\n\n        <h4>Step 1:</h4>\n        <hr>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n        Click the image below to download zipped integration application folder.\n      </p>\n\n      <a (click)=\"downloadZippedApplication()\">\n        <img src=\"../../../../assets/images/needlesIcon.png\" /><mat-icon>sync</mat-icon>\n      </a>\n\n    </mat-card-content>\n\n  </mat-card>\n\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n\n        <h4>Step 2:</h4>\n        <hr>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n        Unzip the folder either on your Needles host or on a machine in your Needles Network.\n      </p>\n    </mat-card-content>\n\n  </mat-card>\n\n\n\n  <mat-card>\n\n    <mat-progress-bar\n            *ngIf=\"savingSetp3Data\"\n            mode=\"indeterminate\" ></mat-progress-bar>\n\n    <mat-card-header>\n      <mat-card-title>\n\n        <h4>Step 3:</h4>\n        <hr>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n        Fill out your Needles integrations settings:\n      </p>\n      <p>Localhost or local IP Address of the Needles database</p>\n\n      <div class=\"example-container\">\n        <mat-form-field>\n          <input [(ngModel)]=\"ip\" matInput placeholder=\"localhost\">\n          <mat-hint>Localhost or local IP Address</mat-hint>\n        </mat-form-field><br>\n\n        <mat-form-field>\n          <input [(ngModel)]=\"port\" matInput placeholder=\"Port\">\n          <mat-hint>Default 2638</mat-hint>\n        </mat-form-field><br>\n\n        <mat-form-field>\n          <input [(ngModel)]=\"sync_interval\" matInput placeholder=\"Seconds\">\n          <mat-hint>Seconds between sync (default 10)</mat-hint>\n        </mat-form-field><br><br>\n\n        <button\n                (click)=\"saveStep3()\"\n                mat-raised-button\n                color=\"primary\"\n                [disabled]=\"savingSetp3Data\"\n\n        >{{savingSetp3Data ? 'Please wait' : 'Save'}}</button>\n\n      </div>\n\n    </mat-card-content>\n\n  </mat-card>\n\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n\n        <h4>Step 4:</h4>\n        <hr>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n        In application folder run needles-sync.exe and log in with your user credentials.\n      </p>\n    </mat-card-content>\n\n  </mat-card>\n\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n\n        <h4>Step 5:</h4>\n        <hr>\n      </mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p>\n        Enjoy!\n      </p>\n    </mat-card-content>\n\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/integrations/needles-setup/needles-setup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  margin-top: 0px; }\n\nh4 {\n  margin-top: 0px; }\n\n::ng-deep mat-card-title, ::ng-deep .mat-card-header-text {\n  display: block;\n  width: 100%; }\n\nmat-card {\n  margin-bottom: 20px; }\n\nmat-progress-bar {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\nmat-form-field {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/integrations/needles-setup/needles-setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedlesSetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_general_service__ = __webpack_require__("../../../../../src/app/shared/services/general.service.ts");
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




var NeedlesSetupComponent = /** @class */ (function () {
    function NeedlesSetupComponent(apiService, userService, generalService) {
        this.apiService = apiService;
        this.userService = userService;
        this.generalService = generalService;
        this.savingSetp3Data = false;
    }
    NeedlesSetupComponent.prototype.ngOnInit = function () {
        this.loadSettings();
    };
    NeedlesSetupComponent.prototype.loadSettings = function () {
        var _this = this;
        this.apiService.call('/api/integrations/needles/get', { account: this.userService.user.accountId }).subscribe(function (result) {
            if (result.success == true) {
                var setting = result.setting;
                if (result.setting) {
                    _this.ip = setting.ip;
                    _this.port = setting.port;
                    _this.sync_interval = setting.sync_interval;
                }
            }
        });
    };
    NeedlesSetupComponent.prototype.downloadZippedApplication = function () {
        window.open(this.apiService.SERVER_URL + '/api/download-zipped-integration');
    };
    NeedlesSetupComponent.prototype.saveStep3 = function () {
        var _this = this;
        this.savingSetp3Data = true;
        this.apiService.call('/api/integrations/needles/save', { ip: this.ip, sync_interval: this.sync_interval, port: this.port, account: this.userService.user.accountId, }).subscribe(function (response) {
            if (response.success == true) {
                _this.savingSetp3Data = false;
                _this.generalService.showNotification('Settings are saved successfully.', 'Okay');
            }
        }, function () {
            _this.savingSetp3Data = false;
        });
    };
    NeedlesSetupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-needles-setup',
            template: __webpack_require__("../../../../../src/app/admin/integrations/needles-setup/needles-setup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/integrations/needles-setup/needles-setup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_general_service__["a" /* GeneralService */]])
    ], NeedlesSetupComponent);
    return NeedlesSetupComponent;
}());



/***/ })

});
//# sourceMappingURL=integrations.module.chunk.js.map