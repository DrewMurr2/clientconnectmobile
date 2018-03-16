webpackJsonp(["settings.module"],{

/***/ "../../../../../src/app/settings/settings-page/settings-page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-sm-12\" style=\"margin-top:10px;\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings-page/settings-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings-page/settings-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPageComponent; });
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

var SettingsPageComponent = /** @class */ (function () {
    function SettingsPageComponent() {
    }
    SettingsPageComponent.prototype.ngOnInit = function () {
    };
    SettingsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings-page',
            template: __webpack_require__("../../../../../src/app/settings/settings-page/settings-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings-page/settings-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsPageComponent);
    return SettingsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_page_settings_page_component__ = __webpack_require__("../../../../../src/app/settings/settings-page/settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__settings_page_settings_page_component__["a" /* SettingsPageComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */] }
        ] }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_routing_module__ = __webpack_require__("../../../../../src/app/settings/settings-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_page_settings_page_component__ = __webpack_require__("../../../../../src/app/settings/settings-page/settings-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__settings_routing_module__["a" /* SettingsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_4__settings_page_settings_page_component__["a" /* SettingsPageComponent */]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<h3><mat-icon>build</mat-icon> Settings\n\n<mat-progress-bar [style.opacity]=\"processing?1:0\" mode=\"indeterminate\"></mat-progress-bar>\n</h3>\n<form [formGroup]=\"formGroup\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <mat-card>\n        <mat-card-content>\n          <mat-form-field>\n            <mat-select\n                    formControlName=\"defaultAccountNumber\"\n                    placeholder=\"Select default number\">\n              <mat-option\n\n                      *ngFor=\"let number of numbers\" [value]=\"number\">\n                {{ number }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n\n          <div class=\"row\">\n\n            <div class=\"col-sm-12 text-right\">\n              <button\n                      (click)=\"save('defaultAccountNumber')\"\n                      [disabled]=\"!formGroup.value.defaultAccountNumber || processing\" mat-raised-button=\"\" color=\"primary\">Save</button>\n            </div>\n\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n\n    <div class=\"col-sm-4\">\n      <mat-card>\n        <mat-card-content>\n          <mat-form-field>\n            <input formControlName=\"mobile\" matInput placeholder=\"Mobile number\" value=\"\">\n          </mat-form-field>\n\n          <div class=\"row\">\n\n            <div class=\"col-sm-12 text-right\">\n              <button\n                      (click)=\"save('mobile')\"\n                      [disabled]=\"!formGroup.value.mobile || processing\" mat-raised-button=\"\" color=\"primary\">Save</button>\n            </div>\n\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n\n    <div class=\"col-sm-4\" [formGroup]=\"formGroup.controls.passwords\">\n      <mat-card>\n        <mat-card-content>\n\n          <strong style=\"display:block; margin-bottom:13px;\">Change Password: </strong>\n\n          <mat-form-field>\n            <input type=\"password\" formControlName=\"oldPassword\"  matInput placeholder=\"Old Password\" value=\"\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"password\" formControlName=\"password\" matInput placeholder=\"Password\" value=\"\">\n          </mat-form-field>\n\n          <mat-form-field>\n            <input type=\"password\" formControlName=\"confPassword\" matInput placeholder=\"Confirm Password\" value=\"\">\n          </mat-form-field>\n\n          <div class=\"row\">\n\n            <div class=\"col-sm-12 text-right\">\n              <button\n                      (click)=\"save('passwords')\"\n                      [disabled]=\"!formGroup.controls.passwords.valid || processing\" mat-raised-button=\"\" color=\"primary\">Save</button>\n            </div>\n\n          </div>\n\n\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n  border-bottom: 1px solid #CCC;\n  padding-bottom: 12px;\n  position: relative; }\n\nmat-progress-bar {\n  position: absolute;\n  bottom: 0px;\n  opacity: 0; }\n\nmat-form-field {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_general_service__ = __webpack_require__("../../../../../src/app/shared/services/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(userService, fb, apiService, generalService) {
        this.userService = userService;
        this.fb = fb;
        this.apiService = apiService;
        this.generalService = generalService;
        this.processing = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.numbers = this.userService.user.numbers;
        this.setupForm();
    };
    SettingsComponent.prototype.setupForm = function () {
        var _this = this;
        var formControls = {};
        formControls.defaultAccountNumber = [this.userService.user.defaultAccountNumber, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* Validators */].required];
        formControls.mobile = ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* Validators */].required];
        formControls.passwords = this.fb.group({
            oldPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* Validators */].required],
            confPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["m" /* Validators */].required]
        }, { validator: this.arePasswordEqual });
        this.formGroup = this.fb.group(formControls);
        setTimeout(function () {
            _this.formGroup.patchValue({ defaultAccountNumber: _this.userService.user.defaultAccountNumber, mobile: _this.userService.user.mobile });
            _this.formGroup.updateValueAndValidity();
        }, 100);
    };
    SettingsComponent.prototype.arePasswordEqual = function (AC) {
        console.log('controlllll');
        console.log(AC);
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('confPassword').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    SettingsComponent.prototype.save = function (controlName) {
        var _this = this;
        this.processing = true;
        var body = {};
        if (typeof this.formGroup.controls[controlName].value == 'object') {
            body[controlName] = JSON.stringify(this.formGroup.controls[controlName].value);
        }
        else {
            body[controlName] = this.formGroup.controls[controlName].value;
        }
        this.apiService.call('/api/settings/save', body).subscribe(function (response) {
            _this.processing = false;
            if (response.success == true) {
                // update values user session
                _this.userService.user.defaultAccountNumber = _this.formGroup.value.defaultAccountNumber;
                _this.userService.user.mobile = _this.formGroup.value.mobile;
                window.localStorage.setItem('user', JSON.stringify(_this.userService.user));
                _this.generalService.showNotification('Settings has been saved successfully.', 'Okay');
            }
        }, function () {
            _this.processing = false;
        });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_general_service__["a" /* GeneralService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ })

});
//# sourceMappingURL=settings.module.chunk.js.map