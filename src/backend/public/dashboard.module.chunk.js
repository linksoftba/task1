webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/views/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n    width:100%;;\r\n    height: 100%;\r\n}\r\n\r\n.col {\r\n    height: inherit;\r\n    padding-left: 0.5%;\r\n    padding-right: 0.5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn wrapper\">\r\n  <div class=\"col-md-3 col\">\r\n    <about-company></about-company>\r\n    <about-user></about-user>\r\n    <active-users-chat></active-users-chat>\r\n  </div>\r\n  <div class=\"col-md-6 col\">\r\n    <company-news></company-news>\r\n  </div>\r\n  <div class=\"col-md-3 col\">\r\n    <clock></clock>\r\n    <calendar></calendar>\r\n    <task></task>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_linkos_about_company_about_company_component__ = __webpack_require__("../../../../../src/app/components/linkos-about-company/about-company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_linkos_about_user_about_user_component__ = __webpack_require__("../../../../../src/app/components/linkos-about-user/about-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_linkos_active_users_chat_active_users_chat_component__ = __webpack_require__("../../../../../src/app/components/linkos-active-users-chat/active-users-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_linkos_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/components/linkos-calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_linkos_clock_clock_component__ = __webpack_require__("../../../../../src/app/components/linkos-clock/clock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_linkos_company_news_company_news_component__ = __webpack_require__("../../../../../src/app/components/linkos-company-news/company-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_linkos_task_task_component__ = __webpack_require__("../../../../../src/app/components/linkos-task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_linkos_about_company_about_company_component__["a" /* AboutCompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_linkos_about_user_about_user_component__["a" /* AboutUserComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_linkos_active_users_chat_active_users_chat_component__["a" /* ActiveUsersChatComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_linkos_company_news_company_news_component__["a" /* CompanyNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_linkos_clock_clock_component__["a" /* ClockComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_linkos_calendar_calendar_component__["a" /* LinkosCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_linkos_task_task_component__["a" /* TaskComponent */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map