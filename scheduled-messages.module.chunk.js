webpackJsonp(["scheduled-messages.module"],{

/***/ "../../../../../src/app/scheduled-messages/scheduled-messages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledMessagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduled_messages_scheduled_messages_component__ = __webpack_require__("../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-messages.component.ts");


var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__scheduled_messages_scheduled_messages_component__["a" /* ScheduledMessagesComponent */] },
];
var ScheduledMessagesRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["g" /* RouterModule */].forChild(AppRoutes);


/***/ }),

/***/ "../../../../../src/app/scheduled-messages/scheduled-messages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledMessagesModule", function() { return ScheduledMessagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduled_messages_scheduled_messages_component__ = __webpack_require__("../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scheduled_messages_scheduled_message_scheduled_message_component__ = __webpack_require__("../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-message/scheduled-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scheduled_messages_routing_module__ = __webpack_require__("../../../../../src/app/scheduled-messages/scheduled-messages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__number_threads_thread_module_thread_module__ = __webpack_require__("../../../../../src/app/number-threads/thread.module/thread.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ScheduledMessagesModule = /** @class */ (function () {
    function ScheduledMessagesModule() {
    }
    ScheduledMessagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__scheduled_messages_routing_module__["a" /* ScheduledMessagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__number_threads_thread_module_thread_module__["a" /* ThreadModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__scheduled_messages_scheduled_messages_component__["a" /* ScheduledMessagesComponent */], __WEBPACK_IMPORTED_MODULE_3__scheduled_messages_scheduled_message_scheduled_message_component__["a" /* ScheduledMessageComponent */]]
        })
    ], ScheduledMessagesModule);
    return ScheduledMessagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-message/scheduled-message.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card bg-color-white\"  >\r\n\r\n\r\n  <div *ngIf=\"message.mediaUrl\" class=\"mdl-card__title\" [ngStyle]=\"{'background-image':'url('+message.mediaUrl+')'}\"\r\n       style=\" height: 176px; color: #fff; background-size:cover; background-position:center;\">\r\n    <h2 class=\"mdl-card__title-text\"></h2>\r\n  </div>\r\n\r\n\r\n  <div class=\"card-content\">\r\n\r\n      <span class=\"card-title\">{{message.sent_to}}</span>\r\n    <p>{{message.body}}</p>\r\n\r\n  </div>\r\n  <div class=\"card-action\">\r\n    <div class=\"time\">\r\n\r\n      {{messageService.showTime(message, 'future')}}\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div> -->\r\n\r\n<app-thread id=\"thread\" \r\n  [thread]=\"message\"\r\n  [contacts]=\"contacts\"\r\n  [disableReplyFeature]='true'\r\n ></app-thread>"

/***/ }),

/***/ "../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-message/scheduled-message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-message/scheduled-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_message_service__ = __webpack_require__("../../../../../src/app/shared/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScheduledMessageComponent = /** @class */ (function () {
    function ScheduledMessageComponent(messageService) {
        this.messageService = messageService;
    }
    ScheduledMessageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('message'),
        __metadata("design:type", Object)
    ], ScheduledMessageComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('contacts'),
        __metadata("design:type", Object)
    ], ScheduledMessageComponent.prototype, "contacts", void 0);
    ScheduledMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scheduled-message',
            template: __webpack_require__("../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-message/scheduled-message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-message/scheduled-message.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_message_service__["a" /* MessageService */]])
    ], ScheduledMessageComponent);
    return ScheduledMessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n  <ng-container *ngFor=\"let messagesGroup of messagesGroups;\">\r\n  <br>\r\n  <h2 class=\"article-title\">{{messagesGroup.dateString}}\r\n\r\n  </h2>\r\n  <hr>\r\n\r\n  <div class=\"row\">\r\n    <div\r\n            class=\"col-xl-4 col-lg-6 col-thread\" *ngFor=\"let message of messagesGroup.messages ;let i = index\" >\r\n      <app-scheduled-message\r\n\r\n      [contacts]=\"contacts\"\r\n      [message]=\"message\">\r\n    </app-scheduled-message>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</ng-container>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-scheduled-message {\n  display: block;\n  margin-bottom: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_websocket_service__ = __webpack_require__("../../../../../src/app/shared/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_general_service__ = __webpack_require__("../../../../../src/app/shared/services/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScheduledMessagesComponent = /** @class */ (function () {
    function ScheduledMessagesComponent(apiService, websocketService, generalService) {
        this.apiService = apiService;
        this.websocketService = websocketService;
        this.generalService = generalService;
        this.messages = [];
        this.messagesGroups = [];
        this.contacts = [];
    }
    ScheduledMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadMessages();
        this.websocketService.messages.delete.subscribe(function (msg) {
            _this.messagesGroups.forEach(function (group) {
                var messages = group.messages;
                _this.generalService.removeObjectFromArrayByKeyValue(messages, 'id', msg.id);
            });
        });
    };
    ScheduledMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.apiService.call('/components/scheduled-messages').subscribe(function (response) {
            if (response.error == null) {
                _this.messages = response.messages;
                _this.contacts = response.contacts;
                _this.createGroups();
            }
        });
    };
    ScheduledMessagesComponent.prototype.createGroups = function () {
        var _this = this;
        var dates = this.extractUniqueDatesFromMsgs();
        console.log('Dates:');
        console.log(dates);
        dates.forEach(function (date, index) {
            _this.messagesGroups[index] = {
                date: date,
                dateString: new Date(date).toDateString(),
                messages: _this.extractMessagesByDate(date)
            };
        });
    };
    ScheduledMessagesComponent.prototype.extractUniqueDatesFromMsgs = function () {
        var dates = [];
        this.messages.map(function (message) {
            message.schedule_date = message.scheduled_time.split('T')[0];
            if (dates.indexOf(message.schedule_date) < 0) {
                dates.push(message.schedule_date);
            }
            return message;
        });
        return dates;
    };
    ScheduledMessagesComponent.prototype.extractMessagesByDate = function (date) {
        var messages = this.messages.filter(function (message) { return message.schedule_date == date; });
        return messages;
    };
    ScheduledMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scheduled-messages',
            template: __webpack_require__("../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/scheduled-messages/scheduled-messages/scheduled-messages.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_general_service__["a" /* GeneralService */]])
    ], ScheduledMessagesComponent);
    return ScheduledMessagesComponent;
}());



/***/ })

});
//# sourceMappingURL=scheduled-messages.module.chunk.js.map