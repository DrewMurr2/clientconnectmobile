webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/admin/users/users-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_page_users_page_component__ = __webpack_require__("../../../../../src/app/admin/users/users/users-page/users-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__users_users_component__["a" /* UsersComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__users_users_page_users_page_component__["a" /* UsersPageComponent */] }
        ] }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_routing_module__ = __webpack_require__("../../../../../src/app/admin/users/users-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_page_users_page_component__ = __webpack_require__("../../../../../src/app/admin/users/users/users-page/users-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_user_user_component__ = __webpack_require__("../../../../../src/app/admin/users/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_user_user_editor_card_layout_user_editor_card_layout_component__ = __webpack_require__("../../../../../src/app/admin/users/users/user/user-editor-card-layout/user-editor-card-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__users_routing_module__["a" /* UsersRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_4__users_users_page_users_page_component__["a" /* UsersPageComponent */], __WEBPACK_IMPORTED_MODULE_5__users_user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_7__users_user_user_editor_card_layout_user_editor_card_layout_component__["a" /* UserEditorCardLayoutComponent */]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users/user/user-editor-card-layout/user-editor-card-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\"\r\n(mouseenter)=\"showForm()\"\r\n(mouseleave)=\"hideForm()\"\r\n>\r\n  <div class=\"card bg-color-white\"\r\n       [ngClass]=\"{'active':isFormActive}\"\r\n  >\r\n    <mat-progress-bar\r\n            [ngClass]=\"{'active':processing }\"\r\n            mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n    <div class=\"card-content text-left\">\r\n\r\n      <div class=\"panel\">\r\n        <div class=\"front flipCard text-center\">\r\n          <div style=\"    color: #3b3b3b; background-color:transparent !important\">Create User +</div>\r\n        </div>\r\n        <form [formGroup]=\"formGroup\" class=\"back flipCard\">\r\n          <div class=\"row\">\r\n            <mat-form-field  class=\"col-sm-6\">\r\n              <input matInput placeholder=\"Name\" formControlName=\"name\" value=\"\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field  class=\"col-sm-6\">\r\n              <mat-select\r\n                      formControlName=\"role_id\"\r\n                      placeholder=\"Select role\"\r\n                      (openedChange)=\"onRoleSelectorOpenedChanged($event)\"\r\n              >\r\n                <mat-option *ngFor=\"let key of roles | objectToArray\" [value]=\"roles[key]\" >\r\n                  {{key}}\r\n                </mat-option>\r\n\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field  class=\"col-sm-6\">\r\n              <input matInput placeholder=\"Email\" formControlName=\"email\" value=\"\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"col-sm-6\">\r\n              <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" value=\"\">\r\n            </mat-form-field>\r\n            <div class=\"col-sm-12 text-right\">\r\n              <button\r\n                      [disabled]=\"!formGroup.valid || processing\"\r\n                      style=\"display:block; width:100%;\"\r\n                      mat-raised-button\r\n                      color=\"primary\"\r\n                      (click)=\"addUser()\"\r\n              >\r\n                {{getSubmitBtnLabel()}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users/user/user-editor-card-layout/user-editor-card-layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section .card {\n  height: 110px;\n  overflow: hidden;\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n  section .card.active {\n    height: 190px; }\n  @media screen and (min-width: 0px) and (max-width: 767px) {\n      section .card.active {\n        height: 330px !important; } }\n  section .card.active .front {\n      z-index: 1;\n      -webkit-transform: rotateX(180deg);\n      transform: rotateX(180deg); }\n  section .card.active .back {\n      display: block;\n      z-index: 2;\n      -webkit-transform: rotateX(0deg);\n      transform: rotateX(0deg); }\n  section .card.active .panel {\n      height: 151px; }\n  section .card mat-progress-bar {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    opacity: 0;\n    -webkit-transition: all 0.4s;\n    transition: all 0.4s; }\n  section .card mat-progress-bar.active {\n      opacity: 1; }\n  .panel {\n  width: 100%;\n  height: 100px;\n  margin: auto;\n  overflow: hidden;\n  position: relative; }\n  @media screen and (min-width: 0px) and (max-width: 767px) {\n    .panel {\n      height: 300px !important; } }\n  .flipCard {\n  width: 100%;\n  height: 169px;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n  top: 0px;\n  left: 0px; }\n  .front {\n  z-index: 2;\n  line-height: 70px; }\n  .back {\n  display: none;\n  height: 241px;\n  z-index: 1;\n  -webkit-transform: rotateX(-180deg);\n  transform: rotateX(-180deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users/user/user-editor-card-layout/user-editor-card-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditorCardLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_general_service__ = __webpack_require__("../../../../../src/app/shared/services/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_constants__ = __webpack_require__("../../../../../src/app/shared/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditorCardLayoutComponent = /** @class */ (function () {
    function UserEditorCardLayoutComponent(fb, userService, generalService) {
        this.fb = fb;
        this.userService = userService;
        this.generalService = generalService;
        this.processing = false;
        this.selectingRole = false;
        this.isFormActive = false;
        this.roles = __WEBPACK_IMPORTED_MODULE_4__shared_constants__["a" /* roles */];
        this.userAdded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserEditorCardLayoutComponent.prototype.ngOnInit = function () {
        this.setupForm();
    };
    UserEditorCardLayoutComponent.prototype.setupForm = function () {
        var controls = {};
        controls.email = this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required);
        controls.password = this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required);
        controls.role_id = this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required);
        controls.name = this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* Validators */].required);
        this.formGroup = this.fb.group(controls);
    };
    UserEditorCardLayoutComponent.prototype.getSubmitBtnLabel = function () {
        if (this.processing) {
            return 'Please wait...';
        }
        return 'Create +';
    };
    UserEditorCardLayoutComponent.prototype.addUser = function () {
        var _this = this;
        this.processing = true;
        this.userService.addUser(this.formGroup.value.email, this.formGroup.value.password, this.formGroup.value.role_id, this.userService.user.accountId, this.formGroup.value.name).subscribe(function (response) {
            if (response.success === true) {
                _this.generalService.showNotification('New user is inserted successfully.', 'Okay');
                var user = {
                    id: response.userId,
                    name: _this.formGroup.value.name,
                    email: _this.formGroup.value.email,
                    role: _this.generalService.getObjectKeyByValue(_this.roles, _this.formGroup.value.role_id)
                };
                _this.userAdded.emit(user);
                _this.reset();
            }
        }, function () {
            _this.processing = false;
        }, function () { _this.processing = false; });
    };
    UserEditorCardLayoutComponent.prototype.reset = function () {
        this.formGroup.reset();
        this.formGroup.clearValidators();
    };
    UserEditorCardLayoutComponent.prototype.onRoleSelectorOpenedChanged = function (isOpened) {
        if (isOpened) {
            this.selectingRole = true;
        }
        else {
            this.selectingRole = false;
        }
    };
    UserEditorCardLayoutComponent.prototype.showForm = function () {
        this.isFormActive = true;
    };
    UserEditorCardLayoutComponent.prototype.hideForm = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.selectingRole) {
                return false;
            }
            else {
                _this.isFormActive = false;
            }
        }, 400);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('userAdded'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], UserEditorCardLayoutComponent.prototype, "userAdded", void 0);
    UserEditorCardLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-editor-card-layout',
            template: __webpack_require__("../../../../../src/app/admin/users/users/user/user-editor-card-layout/user-editor-card-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/users/users/user/user-editor-card-layout/user-editor-card-layout.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_general_service__["a" /* GeneralService */]])
    ], UserEditorCardLayoutComponent);
    return UserEditorCardLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n  <div class=\"card bg-color-white\">\r\n  <div class=\"card-content text-left\">\r\n        <span class=\"card-title\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3 mobile-avatar\">\r\n                    <ngx-avatar [gravatarId]=\"user.email\"  [name]=\"user.name\"></ngx-avatar>\r\n                </div>\r\n                <div class=\"col-sm-9 mobile-category\">\r\n                    {{user.name}}\r\n                </div>\r\n\r\n            </div>\r\n        </span>\r\n\r\n      <div class=\"col-sm-9 offset-sm-3 mobile-category\">\r\n          {{user.role}}\r\n      </div>\r\n  </div>\r\n</div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/users/users/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 0px) and (max-width: 767px) {\n  div.mobile-avatar {\n    padding-left: calc(50vw - 40px); } }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n  div.mobile-category {\n    text-align: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('user'),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/admin/users/users/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/users/users/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users/users-page/users-page.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-6 col-lg-4\" >\r\n        <app-user-editor-card-layout\r\n            (userAdded)=\"onUserAdded($event)\"\r\n        ></app-user-editor-card-layout>\r\n    </div>\r\n    <ng-container *ngFor=\"let user of users;\">\r\n        <div class=\"col-sm-6 col-lg-4\" *ngIf=\"user.id != loggedInUser.id\">\r\n            <app-user [user]=\"user\"></app-user>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users/users-page/users-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users/users-page/users-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersPageComponent = /** @class */ (function () {
    function UsersPageComponent(userService) {
        this.userService = userService;
        this.loggedInUser = this.userService.user;
    }
    UsersPageComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UsersPageComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (response) {
            _this.users = response.results;
        });
    };
    UsersPageComponent.prototype.onUserAdded = function (user) {
        this.users.unshift(user);
    };
    UsersPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users-page',
            template: __webpack_require__("../../../../../src/app/admin/users/users/users-page/users-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/users/users/users-page/users-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]])
    ], UsersPageComponent);
    return UsersPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/users/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
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

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/admin/users/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/users/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return roles; });
var roles = {
    USER: 4,
    ADMINISTRATOR: 14
};


/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map