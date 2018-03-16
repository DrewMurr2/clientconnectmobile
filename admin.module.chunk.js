webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__numbers_numbers_component__ = __webpack_require__("../../../../../src/app/numbers/numbers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stripe_stripe_component__ = __webpack_require__("../../../../../src/app/stripe/stripe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */], children: [
            { path: 'numbers', component: __WEBPACK_IMPORTED_MODULE_3__numbers_numbers_component__["a" /* NumbersComponent */] },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'integrations', loadChildren: './integrations/integrations.module#IntegrationsModule' },
            { path: 'stripe', component: __WEBPACK_IMPORTED_MODULE_4__stripe_stripe_component__["a" /* StripeComponent */] }
        ] }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__numbers_numbers_component__ = __webpack_require__("../../../../../src/app/numbers/numbers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__numbers_new_number_new_number_component__ = __webpack_require__("../../../../../src/app/numbers/new-number/new-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__numbers_hosted_number_hosted_number_component__ = __webpack_require__("../../../../../src/app/numbers/hosted-number/hosted-number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__numbers_numberlist_card_numberlist_card_component__ = __webpack_require__("../../../../../src/app/numbers/numberlist-card/numberlist-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stripe_stripe_component__ = __webpack_require__("../../../../../src/app/stripe/stripe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stripe_stripe_form_stripe_form_component__ = __webpack_require__("../../../../../src/app/stripe/stripe-form/stripe-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_5__numbers_numbers_component__["a" /* NumbersComponent */], __WEBPACK_IMPORTED_MODULE_6__numbers_new_number_new_number_component__["a" /* NewNumberComponent */], __WEBPACK_IMPORTED_MODULE_8__numbers_numberlist_card_numberlist_card_component__["a" /* NumberlistCardComponent */], __WEBPACK_IMPORTED_MODULE_7__numbers_hosted_number_hosted_number_component__["a" /* HostedNumberComponent */], __WEBPACK_IMPORTED_MODULE_9__stripe_stripe_component__["a" /* StripeComponent */], __WEBPACK_IMPORTED_MODULE_10__stripe_stripe_form_stripe_form_component__["a" /* StripeFormComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/numbers/hosted-number/hosted-number.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-color-white\" \r\n[class.newAddressFrom]= \"newAddressFrom\"\r\n[class.emailQuestion]= \"useEmailQuestion\"\r\n[class.hostedNumberForm]= \"createHostedNumberForm\"\r\n>\r\n  <div class=\"card-content\"  [class.cardContentOnAreaNumbersScroll]=\"cardLengthBig\">\r\n      <div class=\"panel\">\r\n            <div class=\"front flipCard text-center\" style=\"line-height:100px;\">\r\n              <div *ngIf=\"!newAddressFrom\"  style=\"color: #3b3b3b; background-color:transparent !important\">\r\n                  <span class=\"getnumberHeader\">\r\n                      Get a Hosted Number +\r\n                  </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"back flipCard\">\r\n                <div *ngIf=\"!newAddressFrom && !useEmailQuestion && !createHostedNumberForm\">\r\n                    <div class=\"row hostnumber-hover-form\" align=\"center\">\r\n                        <button\r\n                                style=\"display:block;width: 140px;\"\r\n                                mat-raised-button\r\n                                color=\"warn\" (click)=\"newAddressFrom = false; useEmailQuestion=true;hostedNumberModel.accountAddressSid= user.accountAddressSid\">\r\n                            Previous Address\r\n                        </button>\r\n                        <button *ngIf = \"!user.accountAddressSid\"\r\n                                style=\"display:block;width: 125px;margin-left: 5px;\"\r\n                                mat-raised-button\r\n                                color=\"primary\" (click)=\"newAddressFrom = true\">\r\n                            New Address\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"newAddressFrom && !useEmailQuestion\">\r\n                    <mat-form-field class=\"col-sm-6\">\r\n                        <input matInput placeholder=\"name\" [(ngModel)] = \"address.name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-sm-6\">\r\n                        <input matInput placeholder=\"city\" [(ngModel)] = \"address.city\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-sm-12\">\r\n                    <input matInput placeholder=\"street\" [(ngModel)] = \"address.street\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-sm-6\">\r\n                        <input matInput placeholder=\"state\" [(ngModel)] = \"address.state\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"col-sm-6\">\r\n                        <input matInput placeholder=\"zip\" [(ngModel)] = \"address.zip\">\r\n                    </mat-form-field>\r\n                    <div class=\"row\" align=\"center\" style=\"margin-left:16px;\">\r\n                        <button\r\n                                style=\"display:block;width: 135px;\"\r\n                                mat-raised-button\r\n                                color=\"warn\" (click)=\"newAddressFrom = false\">\r\n                            Cancel\r\n                        </button>\r\n                        <button\r\n                                style=\"display:block;width: 132px;margin-left: 5px;\"\r\n                                mat-raised-button\r\n                                color=\"primary\" (click)=\"createAddress()\">\r\n                            Create Address\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div  *ngIf=\"!newAddressFrom && useEmailQuestion\">\r\n                        <div class=\"row emailQuestionText\" >\r\n                            Would you like to use {{user.email}} as the email address for this phone number?\r\n                        </div>\r\n                    \r\n                    <div class=\"row\" align=\"center\" style=\"margin-left:12px;\">\r\n                        <button\r\n                                style=\"display:block;width: 116px;\"\r\n                                mat-raised-button\r\n                                color=\"warn\"\r\n                                (click)=\"newAddressFrom= false;useEmailQuestion= false;createHostedNumberForm = true;hostedNumberModel.email=''\">\r\n                            Other email\r\n                        </button>\r\n                        <button\r\n                                style=\"display:block;width: 121px;margin-left: 5px;\"\r\n                                mat-raised-button\r\n                                color=\"primary\" \r\n                                (click)=\"createHostedNumberForm=true;newAddressFrom= false;useEmailQuestion=false;hostedNumberModel.email= user.email\">\r\n                            yes\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div *ngIf=\"!newAddressFrom && !useEmailQuestion && createHostedNumberForm\"\r\n                style=\"margin-left: 5px;\">\r\n                    <div class=\"row\">\r\n                        <mat-form-field class=\"col-sm-6\">\r\n                            <input matInput placeholder=\"email\" [(ngModel)] = \"hostedNumberModel.email\">\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"col-sm-6\">\r\n                            <input matInput placeholder=\"number\" [(ngModel)] = \"hostedNumberModel.number\">\r\n                        </mat-form-field>\r\n                        <div class=\"row\" align=\"center\" style=\"margin-left:16px;\">\r\n                            <button\r\n                                    style=\"display:block;width: 131px;\"\r\n                                    mat-raised-button\r\n                                    color=\"warn\" \r\n                                    (click)=\"newAddressFrom= false;useEmailQuestion=true;createHostedNumberForm=false; hostedNumberModel.email=''\">\r\n                                Cancel\r\n                            </button>\r\n                            <button\r\n                                    style=\"display:block;width: 132px;margin-left: 5px;\"\r\n                                    mat-raised-button\r\n                                    color=\"primary\" (click)=\"createHostedNumber()\">\r\n                                Host Number\r\n                            </button>\r\n                        </div>\r\n                    </div>    \r\n                </div>\r\n            </div>          \r\n          <!--  -->\r\n          <div  class=\"getTwillioNumbersLoader\" *ngIf=\"getTwillioAreaNumbersLoaderVisualization\">\r\n              <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n          </div>\r\n\r\n          <div  class=\"addTwillioLoader\" *ngIf=\"addTwillioAreaNumbersLoaderVisualization\">\r\n              <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n          </div>         \r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/numbers/hosted-number/hosted-number.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cardData {\n  margin: 0 auto; }\n\n.getNewNumberCard {\n  height: 257px !important; }\n\n.newAddressFrom {\n  height: 250px !important; }\n\n.emailQuestion {\n  height: 152px !important; }\n\n.emailQuestionText {\n  margin-bottom: 23px !important;\n  margin-left: 11px !important; }\n\n.hostedNumberForm {\n  height: 134px !important; }\n\n.getTwillioNumbersLoader {\n  position: absolute;\n  left: 261px;\n  z-index: 2;\n  top: 8px; }\n\n.addTwillioLoader {\n  position: absolute;\n  top: 206px;\n  left: 248px; }\n\n.cardContentOnAreaNumbersScroll {\n  padding-top: 0px; }\n\n.getnumberHeader {\n  position: relative;\n  top: -23px; }\n\n.card {\n  height: 90px;\n  overflow: hidden;\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n\n.card:hover .front {\n    z-index: 1;\n    -webkit-transform: rotateX(180deg);\n    transform: rotateX(180deg); }\n\n.card:hover .back {\n    z-index: 2;\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); }\n\n.card mat-progress-bar {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    opacity: 0;\n    -webkit-transition: all 0.4s;\n    transition: all 0.4s; }\n\n.card mat-progress-bar.active {\n      opacity: 1; }\n\n.panel {\n  width: 100%;\n  height: 243px;\n  margin: auto;\n  overflow: hidden;\n  position: relative; }\n\n.flipCard {\n  width: 100%;\n  height: 195px;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n  top: 0px;\n  left: 0px; }\n\n.front {\n  z-index: 2; }\n\n.back {\n  z-index: 1;\n  -webkit-transform: rotateX(-180deg);\n  transform: rotateX(-180deg);\n  height: 275px; }\n\n.hostnumber-hover-form {\n  margin-left: 2px;\n  margin-top: 9px; }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n    .hostnumber-hover-form {\n      padding-left: calc((90vw - 310px) / 2); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/numbers/hosted-number/hosted-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostedNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_number_service__ = __webpack_require__("../../../../../src/app/shared/services/number.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HostedNumberComponent = /** @class */ (function () {
    function HostedNumberComponent(NumberService, UserService, dialog) {
        this.NumberService = NumberService;
        this.UserService = UserService;
        this.dialog = dialog;
        this.getLatestNumbers = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.twillioAreaNumbers = [];
        this.address = {};
        this.areacode = "";
        this.user = this.UserService.user;
        this.hostedNumberModel = {};
        this.cardLengthBig = false;
        this.newAddressFrom = false;
        this.useEmailQuestion = false;
        this.createHostedNumberForm = false;
        this.hostedNumber = false;
        this.addTwillioAreaNumbersLoaderVisualization = false;
        this.processing = false;
    }
    HostedNumberComponent.prototype.ngOnInit = function () {
    };
    HostedNumberComponent.prototype.createAddress = function () {
        var _this = this;
        this.NumberService.addAddress(this.address).subscribe(function (response) {
            console.log(response);
            _this.newAddressFrom = false;
            _this.useEmailQuestion = true;
            _this.hostedNumberModel.accountAddressSid = response.result.body.sid;
        }, function (response) {
            var error;
            _this.newAddressFrom = false;
            _this.useEmailQuestion = true;
            _this.getTwillioAreaNumbersLoaderVisualization = false;
            if (response.error) {
                console.log('createAddress:', response);
            }
        });
    };
    HostedNumberComponent.prototype.createHostedNumber = function () {
        var _this = this;
        this.NumberService.addHostedNumber(this.hostedNumberModel).subscribe(function (response) {
            console.log(response);
            _this.getLatestNumbers.emit(response);
        }, function (response) {
            var error;
            _this.getTwillioAreaNumbersLoaderVisualization = false;
            if (response.error) {
                console.log('createAddress:', response);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], HostedNumberComponent.prototype, "getLatestNumbers", void 0);
    HostedNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hosted-number',
            template: __webpack_require__("../../../../../src/app/numbers/hosted-number/hosted-number.component.html"),
            styles: [__webpack_require__("../../../../../src/app/numbers/hosted-number/hosted-number.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_number_service__["a" /* NumberService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], HostedNumberComponent);
    return HostedNumberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/numbers/new-number/new-number.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-color-white\" [class.getNewNumberCard]=\"cardLengthBig\">\r\n    <div class=\"card-content\"  [class.cardContentOnAreaNumbersScroll]=\"cardLengthBig\">\r\n        <div class=\"panel\">\r\n            <div class=\"front flipCard text-center\" style=\"line-height:100px;\">\r\n                <div *ngIf=\"!twillioAreaNumbers.length\"  style=\"color: #3b3b3b; background-color:transparent !important\">\r\n                    <span class=\"getnumberHeader\">\r\n                        Get a New Number +\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <!-- <span *ngIf=\"twillioAreaNumbers.length\">\r\n                    Area Numbers\r\n            </span> -->\r\n            \r\n            <div  *ngIf=\"!twillioAreaNumbers.length\" class=\"back flipCard\">\r\n                <div class=\"row\">\r\n                    <mat-form-field class=\"col-sm-6\">\r\n                        <input matInput placeholder=\"area code\" [(ngModel)] = \"areacode\">\r\n                    </mat-form-field>\r\n                    <div class=\"col-sm-6\">\r\n                        <button\r\n                                style=\"display:block; width:100%;\"\r\n                                mat-raised-button\r\n                                color=\"primary\" (click)=\"getAreaNumbers(areacode)\">\r\n                            Get Numbers\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"twillioAreaNumbers.length\">\r\n                <div class=\"preorder-now-container w-container\">\r\n                    <div align=\"center\" style=\"font-size:12pt\">\r\n                        <br>\r\n                        <div class=\"card\" [class.cardContentOnAreaNumbersScroll]=\"cardLengthBig\" style=\"max-height: 200px; overflow-y: auto; height: 150px; padding-top: 8px;\">\r\n                            <div *ngFor=\"let twillioAreaNumbers of twillioAreaNumbers\" class=\"form-group\">\r\n                            <label>{{twillioAreaNumbers.phone_number}}</label>\r\n                            <input type=\"radio\" [(ngModel)]=\"selectednumber\" value={{twillioAreaNumbers.phone_number}} name=\"selected\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" align=\"center\" style=\"margin-left: 2px;\">\r\n                            <button\r\n                                    style=\"display:block;width: 130px;\"\r\n                                    mat-raised-button\r\n                                    color=\"warn\" (click)=\"cancelAdd()\">\r\n                                Cancel\r\n                            </button>\r\n                            <button\r\n                                    style=\"display:block;width: 132px;margin-left: 5px;\"\r\n                                    mat-raised-button\r\n                                    color=\"primary\" (click)=\"addNumber()\">\r\n                                Add Number\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n            </div>\r\n            <!--  -->\r\n            <div  class=\"getTwillioNumbersLoader\" *ngIf=\"getTwillioAreaNumbersLoaderVisualization\">\r\n                <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n            </div>\r\n\r\n            <div  class=\"addTwillioLoader\" *ngIf=\"addTwillioAreaNumbersLoaderVisualization\">\r\n                <i class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\r\n            </div>\r\n            \r\n            \r\n            \r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/numbers/new-number/new-number.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cardData {\n  margin: 0 auto; }\n\n.getNewNumberCard {\n  height: 257px !important; }\n\n.getTwillioNumbersLoader {\n  position: absolute;\n  left: 261px;\n  z-index: 2;\n  top: 8px; }\n\n.addTwillioLoader {\n  position: absolute;\n  top: 206px;\n  left: 248px; }\n\n.cardContentOnAreaNumbersScroll {\n  padding-top: 0px; }\n\n.getnumberHeader {\n  position: relative;\n  top: -23px; }\n\n.card {\n  height: 90px;\n  overflow: hidden;\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n    .card:hover {\n      height: 150px; } }\n\n.card:hover .front {\n    z-index: 1;\n    -webkit-transform: rotateX(180deg);\n    transform: rotateX(180deg); }\n\n.card:hover .back {\n    z-index: 2;\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); }\n\n.card mat-progress-bar {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    opacity: 0;\n    -webkit-transition: all 0.4s;\n    transition: all 0.4s; }\n\n.card mat-progress-bar.active {\n      opacity: 1; }\n\n.panel {\n  width: 100%;\n  height: 243px;\n  margin: auto;\n  overflow: hidden;\n  position: relative; }\n\n.flipCard {\n  width: 100%;\n  height: 195px;\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  position: absolute;\n  top: 0px;\n  left: 0px; }\n\n.front {\n  z-index: 2; }\n\n.back {\n  z-index: 1;\n  -webkit-transform: rotateX(-180deg);\n  transform: rotateX(-180deg);\n  height: 275px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/numbers/new-number/new-number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewNumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_number_service__ = __webpack_require__("../../../../../src/app/shared/services/number.service.ts");
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



var NewNumberComponent = /** @class */ (function () {
    function NewNumberComponent(NumberService, dialog) {
        this.NumberService = NumberService;
        this.dialog = dialog;
        this.getLatestNumbers = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.twillioAreaNumbers = [];
        this.areacode = "";
        this.cardLengthBig = false;
        this.addTwillioAreaNumbersLoaderVisualization = false;
        this.processing = false;
    }
    NewNumberComponent.prototype.ngOnInit = function () {
    };
    NewNumberComponent.prototype.getAreaNumbers = function (code) {
        var _this = this;
        this.getTwillioAreaNumbersLoaderVisualization = true;
        this.NumberService.getAreaNumbers(code).subscribe(function (response) {
            _this.cardLengthBig = true;
            _this.twillioAreaNumbers = response;
            console.log(response);
            _this.getTwillioAreaNumbersLoaderVisualization = false;
        }, function (response) {
            var error;
            _this.getTwillioAreaNumbersLoaderVisualization = false;
            if (response.error.error.message) {
                error = response.error.error.message;
            }
            else {
                error = response.error.error;
            }
        });
    };
    ;
    NewNumberComponent.prototype.cancelAdd = function () {
        this.twillioAreaNumbers = [];
        this.cardLengthBig = false;
        this.areacode = "";
    };
    NewNumberComponent.prototype.addNumber = function () {
        var _this = this;
        this.addTwillioAreaNumbersLoaderVisualization = true;
        this.NumberService.addNumbers(this.selectednumber).subscribe(function (response) {
            console.log(response);
            _this.getLatestNumbers.emit(response);
            _this.addTwillioAreaNumbersLoaderVisualization = false;
        }, function (response) {
            var error;
            _this.addTwillioAreaNumbersLoaderVisualization = false;
            if (response.error.error.message) {
                error = response.error.error.message;
            }
            else {
                error = response.error.error;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewNumberComponent.prototype, "getLatestNumbers", void 0);
    NewNumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-number',
            template: __webpack_require__("../../../../../src/app/numbers/new-number/new-number.component.html"),
            styles: [__webpack_require__("../../../../../src/app/numbers/new-number/new-number.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_number_service__["a" /* NumberService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], NewNumberComponent);
    return NewNumberComponent;
}());



/***/ }),

/***/ "../../../../../src/app/numbers/numberlist-card/numberlist-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-color-white\">\r\n  <div class=\"card-content\">\r\n        <span class=\"card-title\">\r\n            <div class=\"row\">\r\n                <div class=\"cardData\">\r\n                    {{number.number}}\r\n                    <img \r\n                    class=\"removeNumberLogo\"\r\n                    [class.removeNumberLogoWithStatusButton]=\"number.type == 'hosted'\" \r\n                    (click)=\"openDeleteWarningModal(number.number, number.sid)\" \r\n                    src=\"assets/images/numbers/removeNumber.png\" /><br/>\r\n                </div>\r\n          </div>\r\n        </span>  \r\n       \r\n            \r\n        <div *ngIf =\"number.type == 'hosted'\">\r\n\r\n            <!-- ========================call verification=========================== -->\r\n\r\n            <div *ngIf=\"number.status == 'received'\">\r\n                <div class=\"row\"> \r\n                    Status: {{number.status}}\r\n                </div>\r\n                <div class=\"row\">\r\n                    <input class=\"verificationCodeInput\" type=\"text\" name=\"extension\" \r\n                    placeholder=\"extension(optional)\" [(ngModel)] = \"extension\">\r\n                    <button type=\"button\" \r\n                    class=\"btn btn-primary btn-xs pull-right twillioVerificationButton\"\r\n                    (click)=\"callToVerify(number.number, number.sid, extension)\" \r\n                    >\r\n                    <span>\r\n                        Call To Verify\r\n                    </span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            \r\n\r\n            <!-- ========================code verification=========================== -->\r\n            <div *ngIf=\"number.status == 'pending-verification'\" >\r\n               <div class=\"row\"> \r\n                    Status: {{number.status}}\r\n                </div> \r\n                <div class=\"row\">\r\n                    <!-- <input class=\"verificationCodeInput\" type=\"text\" name=\"code\" \r\n                    placeholder=\"code\" [(ngModel)] = \"code\"> -->\r\n                    {{code}}\r\n                    <!-- <button type=\"button\" \r\n                    class=\"btn btn-primary btn-xs pull-right twillioVerificationButton\"\r\n                    (click)=\"submitVerificationCode(code)\" \r\n                    >\r\n                    <span>\r\n                        Submit Code\r\n                    </span>\r\n                    </button> -->\r\n                </div>\r\n            </div>\r\n            \r\n         <!-- ========================request carier-pending =========================== -->\r\n            <div *ngIf=\"number.status == 'carrier-pending'\" >\r\n                <div class=\"row\"> \r\n                     Status: {{number.status}}\r\n                 </div> \r\n                 <div class=\"row\">\r\n                     <p>LOA has already sent to your Email.</p>\r\n                 </div>\r\n             </div>\r\n\r\n            <!-- ========================request LOA section=========================== -->\r\n            <div *ngIf=\"number.status == 'verified'\" >\r\n                <div class=\"row\">\r\n                    <span selected=\"true\">Status: {{number.status}}</span>\r\n                    <button type=\"button\" \r\n                        class=\"btn btn-primary btn-xs pull-right twillioVerificationButton\"\r\n                        (click)=\"createLoaDocument(number.sid)\" \r\n                    >\r\n                    <span>\r\n                        Request LOA\r\n                    </span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n  </div>\r\n</div>\r\n<!-- <app-delete-number-warning-modal class=\"deleteMessage\"></app-delete-number-warning-modal> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/numbers/numberlist-card/numberlist-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cardData {\n  margin: 0 auto; }\n\n.twillioVerificationButton {\n  margin-left: 70px;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 1px;\n  padding-top: 1px;\n  border: 2px solid #000;\n  border-radius: 7px;\n  background-color: #daead4;\n  color: #000; }\n\n.verificationCodeInput {\n  width: 28%;\n  margin-left: 4%;\n  border-radius: 6px;\n  border-color: #000; }\n\n.removeNumberLogo {\n  height: 25px;\n  position: absolute;\n  bottom: 32px; }\n\n.removeNumberLogoWithStatusButton {\n  left: 280px !important;\n  bottom: 83px !important; }\n\n.deleteMessage {\n  -webkit-transform: none;\n          transform: none;\n  opacity: 1;\n  width: 400px;\n  height: 214px;\n  position: absolute;\n  top: 150px;\n  right: 402px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/numbers/numberlist-card/numberlist-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberlistCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_number_service__ = __webpack_require__("../../../../../src/app/shared/services/number.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delete_number_warning_modal_delete_number_warning_modal_component__ = __webpack_require__("../../../../../src/app/numbers/delete-number-warning-modal/delete-number-warning-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__verification_call_warning_modal_verification_call_warning_modal_component__ = __webpack_require__("../../../../../src/app/numbers/verification-call-warning-modal/verification-call-warning-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmation_modal_confirmation_modal_component__ = __webpack_require__("../../../../../src/app/numbers/confirmation-modal/confirmation-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NumberlistCardComponent = /** @class */ (function () {
    function NumberlistCardComponent(NumberService, dialog) {
        this.NumberService = NumberService;
        this.dialog = dialog;
        this.getLatestNumbers = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NumberlistCardComponent.prototype.ngOnInit = function () {
    };
    NumberlistCardComponent.prototype.openDeleteWarningModal = function (number, sid) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__delete_number_warning_modal_delete_number_warning_modal_component__["a" /* DeleteNumberWarningModalComponent */], {
            width: '320px',
            data: { number: number, sid: sid },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'new') {
                _this.getLatestNumbers.emit();
            }
            ;
        });
    };
    ;
    NumberlistCardComponent.prototype.callToVerify = function (number, sid, extension) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__verification_call_warning_modal_verification_call_warning_modal_component__["a" /* VerificationCallWarningModalComponent */], {
            width: '320px',
            data: { number: number, sid: sid, extension: extension },
        });
        dialogRef.afterClosed().subscribe(function (response) {
            if (response) {
                _this.number.status = response.body.status;
                _this.code = response.body.verification_code;
            }
            ;
        });
        dialogRef.afterClosed().subscribe(function (response) {
            if (response == 'new') {
                _this.getLatestNumbers.emit();
            }
            ;
        });
    };
    ;
    NumberlistCardComponent.prototype.createLoaDocument = function (sid) {
        var _this = this;
        this.NumberService.createLoaDocument(sid).subscribe(function (response) {
            console.log(response.result.body.message);
            var res = response.result.body.message;
            var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */], {
                width: '320px',
                data: { res: res },
            });
        }, function (response) {
            var error;
            if (response.error.error.message) {
                error = response.error.error.message;
            }
            else {
                error = response.error.error;
            }
        });
    };
    NumberlistCardComponent.prototype.submitVerificationCode = function (code) {
        this.NumberService.submitVerificationCode(code, this.number.sid).subscribe(function (response) {
            console.log(response);
        }, function (response) {
            var error;
            if (response.error.error.message) {
                error = response.error.error.message;
            }
            else {
                error = response.error.error;
            }
        });
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NumberlistCardComponent.prototype, "getLatestNumbers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('number'),
        __metadata("design:type", Object)
    ], NumberlistCardComponent.prototype, "number", void 0);
    NumberlistCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-numberlist-card',
            template: __webpack_require__("../../../../../src/app/numbers/numberlist-card/numberlist-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/numbers/numberlist-card/numberlist-card.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_number_service__["a" /* NumberService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], NumberlistCardComponent);
    return NumberlistCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/numbers/numbers.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"loader\" *ngIf=\"numberLoaderVisualization\">\r\n    <i class=\"fa fa-spinner fa-spin fa-5\" aria-hidden=\"true\"></i>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row cardsRow\" *ngIf=\"!numberLoaderVisualization\">\r\n    \r\n    <div class=\"col-xl-4 col-lg-6\" >\r\n        <app-new-number (getLatestNumbers)=\"getLatestNumbers()\"></app-new-number>        \r\n    </div>\r\n\r\n    <div class=\"col-xl-4 col-lg-6\" >\r\n        <app-hosted-number (getLatestNumbers)=\"getLatestNumbers()\"></app-hosted-number>        \r\n    </div>\r\n    \r\n    <div class=\"col-xl-4 col-lg-6\" *ngFor=\"let number of numberList\">\r\n        <app-numberlist-card [number]=\"number\" (getLatestNumbers)=\"getLatestNumbers()\"></app-numberlist-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/numbers/numbers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cardsRow {\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.loader {\n  font-size: 100px;\n  position: absolute;\n  top: 272px;\n  left: 727px; }\n\n.cardData {\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/numbers/numbers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumbersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_number_service__ = __webpack_require__("../../../../../src/app/shared/services/number.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NumbersComponent = /** @class */ (function () {
    function NumbersComponent(NumberService) {
        this.NumberService = NumberService;
        this.searchKeyword = '';
        this.numberLoaderVisualization = true;
    }
    NumbersComponent.prototype.ngOnInit = function () {
        this.getNumbers();
    };
    NumbersComponent.prototype.getNumbers = function () {
        var _this = this;
        this.NumberService.getNumbers(this.searchKeyword).subscribe(function (response) {
            if (response.error == null) {
                _this.numberLoaderVisualization = false;
                _this.numberList = response.results;
                console.log('contacts :', response.results);
            }
            ;
            _this.numberLoaderVisualization = false;
        });
    };
    ;
    /*================= for emitter================*/
    NumbersComponent.prototype.getLatestNumbers = function () {
        var _this = this;
        this.numberLoaderVisualization = true;
        this.NumberService.getNumbers(this.searchKeyword).subscribe(function (response) {
            if (response.error == null) {
                _this.numberLoaderVisualization = false;
                _this.numberList = response.results;
                console.log('contacts :', response.results);
            }
            ;
            _this.numberLoaderVisualization = false;
        });
    };
    ;
    NumbersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-numbers',
            template: __webpack_require__("../../../../../src/app/numbers/numbers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/numbers/numbers.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_number_service__["a" /* NumberService */]])
    ], NumbersComponent);
    return NumbersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stripe/stripe-form/stripe-form.component.html":
/***/ (function(module, exports) {

module.exports = "<label>email address for billing:</label>\n<!-- <button (click)=\"check()\">check</button> -->\n<input #em id=\"emailInput\"  type=\"email\">\n<div style=\"padding: 8px;\n    margin: 3px;\n    margin-bottom: 20px;\n    border-style: solid;\n    border-radius: 5px;\">\n  <div #cardelement></div>\n</div>\n<div align=\"center\" style=\"margin-top : 5%; margin-bottom:5%;\">\n    <button  class=\"btn btn-primary margin-right20\"\n              [disabled]=\"shouldDisableSubmit()\"\n              (click)=\"save(em.value)\" mat-raised-button type=\"button\" \n              >{{getSubmitBtnLabel()}}</button>\n\n  <button type=\"reset\" *ngIf=\"complete\" (click)=\"onCancel.emit('hello')\" color=\"warn\" mat-raised-button=\"\" class=\"mat-raised-button mat-warn\"><span class=\"mat-button-wrapper\">Cancel</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\"></div><div class=\"mat-button-focus-overlay\"></div></button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/stripe/stripe-form/stripe-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-cards-success {\n  color: #fff;\n  border-color: #e64d43;\n  background-color: #e64d43; }\n\n.margin-right20 {\n  margin-right: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stripe/stripe-form/stripe-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeFormComponent; });
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


var StripeFormComponent = /** @class */ (function () {
    function StripeFormComponent(UserService) {
        this.UserService = UserService;
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StripeFormComponent.prototype.ngOnInit = function () {
        this.elements = this.stripe.elements();
        this.card = this.elements.create('card');
        this.el.nativeElement.id = "cardelement";
        this.card.mount('#cardelement');
        if (this.UserService.user['stripeId'] != null) {
            this.getChecked();
        }
    };
    StripeFormComponent.prototype.ngAfterViewChecked = function () {
    };
    StripeFormComponent.prototype.getChecked = function () {
        console.log('tetsw', this.stripe);
        document.getElementById('emailInput')['value'] = this.stripeCardInfo.email;
    };
    StripeFormComponent.prototype.check = function () {
    };
    StripeFormComponent.prototype.ngAfterViewInit = function () {
    };
    StripeFormComponent.prototype.shouldDisableSubmit = function () {
        if (this.processing === true) {
            return true;
        }
        return false;
    };
    StripeFormComponent.prototype.getSubmitBtnLabel = function () {
        if (this.processing === true) {
            return 'please wait...';
        }
        return 'Save';
    };
    StripeFormComponent.prototype.save = function (email) {
        // console.log("test",this.card)
        this.onSubmit.emit({ card: this.card, email: email });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StripeFormComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StripeFormComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StripeFormComponent.prototype, "complete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], StripeFormComponent.prototype, "processing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StripeFormComponent.prototype, "stripe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StripeFormComponent.prototype, "stripeCardInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cardelement'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], StripeFormComponent.prototype, "el", void 0);
    StripeFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stripe-form',
            template: __webpack_require__("../../../../../src/app/stripe/stripe-form/stripe-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stripe/stripe-form/stripe-form.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]])
    ], StripeFormComponent);
    return StripeFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stripe/stripe.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div align=\"center\">   \n    <div class=\"card col-md-8 \" [ngClass]=\"complete()?'card-collapsed':'card-full'\">\n      <div class=\"card-block\">\n        <h4 class=\"card-title \" class=\"paymentTemplate\" >Billing Information</h4>         \n        <a *ngIf=\"complete() && !edit \" class=\"complete_text\">Complete</a>\n        <span *ngIf=\"!edit && complete()\">\n          <button type=\"button\" [disabled] = \"disableEdit\" class=\"btn btn-danger edit btn-circle btn-lg\" (click)=\"edit = true\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button>\n          <span class=\"fa-stack fa-lg check complete-mark\">\n            <i aria-hidden=\"true\" class=\"fa fa-circle-thin fa-stack-2x\"></i>\n            <i aria-hidden=\"true\" class=\"fa fa-check fa-stack-1x fa-inverse\"> </i>\n          </span>\n        </span>\n        <div *ngIf=\"!complete() || edit \">\n          <p class=\"card-text\">\n            You will not be billed until the install is complete and your firm is using Client Connect. You may cancel at anytime.\n          </p>                   \n          <app-stripe-form [stripeCardInfo] = \"stripeData\" [processing] = \"loader\" [stripe]=\"stripe\" [complete]=\"complete()\" (onSubmit)=\"save($event)\" (onCancel)=\"edit = false\"> </app-stripe-form>\n        </div>\n      </div>\n    </div>\n    <div class=\"card col-md-8 paymentPadding\" *ngIf=\"stripeData != null\" >\n      <mat-card>\n        <h4 class=\"card-title \" class=\"cardInformation\" >Card Information</h4>\n        <label for=\"\">Customer Id :</label> {{(stripeData.id != \"\") ? stripeData.id : \"N/A\"}}\n        <br>\n        <br>\n        <label for=\"\">Billing Email :</label> {{(stripeData.email != \"\") ? stripeData.email : \"N/A\"}}\n      </mat-card>\n    </div>\n   <div class=\"card col-md-10 paymentPadding\" *ngIf=\"stripeData != null\">\n      <mat-card>\n          <h4 class=\"card-title \" class=\"paymentTemplate\" >Subscription</h4>\n          <mat-form-field >\n            <mat-select placeholder=\"Select plans\" (click)=\"listPlans()\"  [(ngModel)]=\"plan\">\n              <mat-option *ngFor=\"let plan of unsubscribedList\" [value]=\"plan.id\">\n                {{ plan.name }}\n              </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <button\n             mat-raised-button\n             color=\"primary\"\n             type=\"button\"\n             (click)=\"subsription(plan)\"\n        >\n          submit\n        </button>\n      </mat-card>      \n      <div class=\"box box-default table-box mdl-shadow--2dp\" *ngIf=\"enabledSubscription.length > 0\">\n        <table class=\"mdl-data-table\">\n          <thead>\n            <tr>\n              <th class=\"mdl-data-table__cell--non-numeric\">Plan Name</th>\n              <th class=\"mdl-data-table__cell--non-numeric\">Plan Amount</th>\n              <th class=\"mdl-data-table__cell--non-numeric\">Subscription Id</th>\n              <th >Start Date</th>\n              <th>End Date</th>\n              <th>Cancel Subscription</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let subscription of enabledSubscription\">\n              <td class=\"mdl-data-table__cell--non-numeric\">{{subscription.planName}}</td>\n              <td class=\"mdl-data-table__cell--non-numeric\">{{subscription.planAmount}}</td>\n              <td class=\"mdl-data-table__cell--non-numeric\">{{subscription.subscriptionId}}</td>\n              <td>{{subscription.startDate | date}}</td>\n              <td>{{subscription.endDate | date}}</td>\n              <td><button (click)=\"cancelSubscription(subscription.subscriptionId)\" mat-raised-button color=\"warn\" class=\"btn-w-md\">Cancel Subscription</button></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n   </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/stripe/stripe.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".check {\n  float: right;\n  position: absolute;\n  left: 90%;\n  bottom: 30%;\n  font-size: 16pt;\n  color: #4fce4f; }\n\n.edit {\n  position: absolute;\n  right: 90%;\n  bottom: 31%;\n  border-radius: 50%; }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n    .edit {\n      left: 50px;\n      bottom: 12px;\n      width: 45px; } }\n\n.complete_text {\n  font-family: 'Archivo';\n  font-size: 15pt;\n  position: absolute;\n  left: 76%;\n  bottom: 40%; }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n    .complete_text {\n      top: 40px;\n      position: initial; } }\n\n@media screen and (min-width: 0px) and (max-width: 767px) {\n  .complete-mark {\n    position: relative;\n    left: -100px;\n    top: -10px; } }\n\n.fa-check {\n  color: #4fce4f; }\n\n.paymentTemplate {\n  font-family: 'Yanone Kaffeesatz';\n  font-size: 30pt;\n  height: 65px; }\n\n.cardInformation {\n  font-family: 'Yanone Kaffeesatz';\n  font-size: 30pt;\n  height: 30px; }\n\n.paymentPadding {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stripe/stripe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_window_ref_service__ = __webpack_require__("../../../../../src/app/shared/services/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
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




var StripeComponent = /** @class */ (function () {
    function StripeComponent(UserService, winRef, apiService) {
        this.UserService = UserService;
        this.winRef = winRef;
        this.apiService = apiService;
        this.edit = false;
        this.loader = false;
        this.enabledSubscription = [];
        this.unsubscribedList = [];
        this.complete = this.UserService.completed_functions.stripe_completed;
        this.completed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StripeComponent.prototype.ngOnInit = function () {
        if (this.UserService.user['stripeId'] != null) {
            this.retrieveCardDetail();
        }
        else {
            this.stripeData = null;
        }
        this.stripe = this.winRef.nativeWindow.Stripe('pk_test_wdevjExYH28dYzFg05q7GQTW');
        this.subscribePlan();
        this.listPlans();
    };
    StripeComponent.prototype.ngAfterViewInit = function () {
    };
    StripeComponent.prototype.initCardForm = function () {
    };
    StripeComponent.prototype.retrieveCardDetail = function () {
        var _this = this;
        return this.apiService.call('/api/stripe/retrieveCustomer').subscribe(function (response) {
            _this.stripeData = response.message;
        }, function (error) {
            console.log(error);
        });
    };
    StripeComponent.prototype.listPlans = function () {
        var _this = this;
        var found = false;
        this.unsubscribedList = [];
        return this.apiService.call('/api/stripe/listPlan').subscribe(function (response) {
            _this.unsubscribedList = response.message;
            //if needed for only one select
            // console.log('----->plan',response.message)
            // response.message.forEach(plan => {
            //   if(this.enabledSubscription.length == 0){
            //     this.unsubscribedList = response.message;
            //   }else{
            //     this.enabledSubscription.forEach(subsription  => {
            //       if(subsription.planName == plan.name){
            //         found = true;
            //       }else{
            //         found = false
            //       }
            //     });
            //     if(!found){
            //       this.unsubscribedList.push(plan)
            //     }
            //   }
            // })
        }, function (error) {
            console.log(error);
        });
    };
    StripeComponent.prototype.cancelSubscription = function (subscribeId) {
        var _this = this;
        var postData = {
            subscriptionId: subscribeId
        };
        return this.apiService.call('/api/stripe/cancelSubscription', postData).subscribe(function (response) {
            _this.subscribePlan();
        }, function (error) {
            console.log(error);
        });
    };
    StripeComponent.prototype.subscribePlan = function () {
        var _this = this;
        return this.apiService.call('/api/stripe/enabledSubscription').subscribe(function (response) {
            _this.enabledSubscription = response.message;
            console.log('----->enabledSubscription', _this.enabledSubscription);
        }, function (error) {
            console.log(error);
        });
    };
    StripeComponent.prototype.subsription = function (value) {
        var _this = this;
        console.log(value);
        var postData = {
            plainId: value
        };
        return this.apiService.call('/api/stripe/joinSubscription', postData).subscribe(function (response) {
            console.log('data', response);
            _this.subscribePlan();
            // this.planlist = response.message;
        }, function (error) {
            console.log(error);
        });
    };
    StripeComponent.prototype.submitCreditCard = function (email, callback) {
        this.stripe.createSource(this.card, {
            owner: {
                name: this.UserService.user.firm,
                email: email
            },
            metadata: localStorage.getItem('user')['id']
        }).then(function (result) {
            callback(result);
        });
    };
    ;
    StripeComponent.prototype.save = function ($event) {
        var _this = this;
        console.log('save');
        console.log($event);
        var email = this.email = $event.email;
        this.card = $event.card;
        this.loader = true;
        this.submitCreditCard(email, function (stripeResult) {
            if (stripeResult.error) {
                alert('Stripe Error');
            }
            else {
                var postData = {
                    client_secret: stripeResult.source.client_secret,
                    id: stripeResult.source.id,
                    email: _this.email
                };
                if (!_this.UserService.user['stripeId']) {
                    return _this.apiService.call('/api/stripe/createCustomer', postData).subscribe(function (response) {
                        _this.edit = false;
                        _this.loader = false;
                        _this.completed.emit('stripeId');
                        return _this.apiService.call('/api/refreshToken', { email: _this.UserService.user['email'] }).subscribe(function (response) {
                            _this.UserService.start(response);
                            _this.ngOnInit();
                        }, function (error) {
                            console.log(error);
                        });
                    }, function (error) {
                        alert("Error Sending");
                    });
                }
                else {
                    return _this.apiService.call('/api/stripe/updateCustomer', postData).subscribe(function (response) {
                        _this.edit = false;
                        _this.loader = false;
                        _this.completed.emit('stripeId');
                        return _this.apiService.call('/api/refreshToken', { email: _this.UserService.user['email'] }).subscribe(function (response) {
                            console.log('refresh token', response);
                            _this.UserService.start(response);
                        }, function (error) {
                            console.log(error);
                        });
                    }, function (error) {
                        alert("Error Sending");
                    });
                }
            }
            ;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StripeComponent.prototype, "completed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StripeComponent.prototype, "disableEdit", void 0);
    StripeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stripe',
            template: __webpack_require__("../../../../../src/app/stripe/stripe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stripe/stripe.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_window_ref_service__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_api_service__["a" /* ApiService */]])
    ], StripeComponent);
    return StripeComponent;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map