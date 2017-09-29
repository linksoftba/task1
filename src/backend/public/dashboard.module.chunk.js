webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/components/linkos-about-company/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkos_about_company_component__ = __webpack_require__("../../../../../src/app/components/linkos-about-company/linkos-about-company.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__linkos_about_company_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-about-company/linkos-about-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n  display: inline-block;\r\n  padding-left: 7px;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.card {\r\n    margin: 0;\r\n}\r\n\r\n.card-body {\r\n    padding: 6px 6px 6px 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/linkos-about-company/linkos-about-company.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">About Company</div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{name}}</h5>\n    <i class=\"fa fa-home\" aria-hidden=\"true\"> </i><p class=\"card-text\">{{adress}}</p><br>\n    <i class=\"fa fa-phone\" aria-hidden=\"true\"> </i><p class=\"card-text\">{{telephone}}</p>\n  </div></div>"

/***/ }),

/***/ "../../../../../src/app/components/linkos-about-company/linkos-about-company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkosAboutCompany; });
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

var LinkosAboutCompany = /** @class */ (function () {
    function LinkosAboutCompany() {
    }
    LinkosAboutCompany.prototype.ngOnInit = function () {
        this.name = 'Sales Force',
            this.adress = 'San Francisco, CA 94105',
            this.telephone = '1-800-667-6389';
    };
    LinkosAboutCompany = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'linkos-about-company',
            template: __webpack_require__("../../../../../src/app/components/linkos-about-company/linkos-about-company.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/linkos-about-company/linkos-about-company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkosAboutCompany);
    return LinkosAboutCompany;
}());

//# sourceMappingURL=linkos-about-company.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-about-user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkos_about_user_component__ = __webpack_require__("../../../../../src/app/components/linkos-about-user/linkos-about-user.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__linkos_about_user_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-about-user/linkos-about-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    width: 90%\r\n}\r\n\r\n.card {\r\n    margin: 0;\r\n}\r\n\r\n.card-body {\r\n    padding: 6px 6px 6px 20px;\r\n}\r\n\r\nh5 {\r\n    margin: 15px 0 0 0;\r\n}\r\n\r\ni {\r\n    font-size: 130%;\r\n    padding: 0 10px 0 10px;\r\n}\r\n.btn{\r\n    padding: 0;\r\n    background: #fff;\r\n    color: #00abdb;\r\n    border: 0;\r\n    font-size: 130%;\r\n}\r\n\r\n.settings p {\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/linkos-about-user/linkos-about-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">About User</div>\n    <div class=\"card-body text-center\">\n      <img src={{imgPath}} class=\"img-responsive\">\n      <h5 class=\"card-title\">{{name}}</h5>\n      <p>{{function}}</p>\n      \n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#settings\">\n        <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n      </button>\n      \n      <a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#profileview\">\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n</div>\n    <div class=\"modal fade\" id=\"settings\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Profile Settings</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>Name:</p><input type=\"text\" #newname class=\"form-control\" value=\"{{name}}\">\n              <p>Profile Image Url:</p><input type=\"text\" #profileimg class=\"form-control\" value=\"{{imgPath}}\">\n              <p>Working Place:</p><input type=\"text\" #workplace class=\"form-control\" value=\"{{function}}\">\n              <p>Email:</p><input type=\"text\" #newemail class=\"form-control\" value=\"{{email}}\">\n              <p>Telephone Number</p><input type=\"text\" #newtelephone class=\"form-control\" value=\"{{telephone}}\">\n              <p>Skype:</p><input type=\"text\" #newskype class=\"form-control\" value=\"{{skype}}\">\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"changeDetails(newname.value, profileimg.value, workplace.value, newemail.value, newtelephone.value, newskype.value)\">Save changes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal fade\" id=\"profileview\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Your Profile</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <img src={{imgPath}} class=\"img-responsive\">\n              <h4 class=\"text-center\">{{name}}</h4>\n              <p>Working Place: {{function}}</p>\n              <p>Email: {{email}}</p>\n              <p>Telephone number: {{telephone}}</p>\n              <p>Skype: {{skype}}</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n   "

/***/ }),

/***/ "../../../../../src/app/components/linkos-about-user/linkos-about-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkosAboutUser; });
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

var LinkosAboutUser = /** @class */ (function () {
    function LinkosAboutUser() {
    }
    LinkosAboutUser.prototype.ngOnInit = function () {
        this.name = 'Marc Benioff';
        this.function = 'CEO & founder';
        this.imgPath = 'https://cdn.geekwire.com/wp-content/uploads/2016/05/marcbenioff.jpg';
        this.telephone = '1-800-667-6389';
        this.email = 'marc.benioff@salesforce.com';
        this.skype = 'm.benioff';
    };
    LinkosAboutUser.prototype.changeDetails = function (newname, profileimg, workplace, newemail, newtelephone, newskype) {
        this.name = newname;
        this.function = workplace;
        this.imgPath = profileimg;
        this.email = newemail;
        this.telephone = newtelephone;
        this.skype = newskype;
    };
    LinkosAboutUser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'linkos-about-user',
            template: __webpack_require__("../../../../../src/app/components/linkos-about-user/linkos-about-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/linkos-about-user/linkos-about-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkosAboutUser);
    return LinkosAboutUser;
}());

//# sourceMappingURL=linkos-about-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-activ-users/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkos_activ_users_component__ = __webpack_require__("../../../../../src/app/components/linkos-activ-users/linkos-activ-users.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__linkos_activ_users_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-activ-users/linkos-activ-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-3 {\r\n    padding: 0;\r\n}\r\n\r\n.card-body {\r\n    padding: 6px 6px 6px 20px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    border-bottom: 1px solid #D8D8D8\r\n}\r\n\r\n.fa {\r\n    font-size: 130%;\r\n    padding: 0 4px;\r\n}\r\n\r\nh6, p {\r\n    margin: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/linkos-activ-users/linkos-activ-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">Active Users</div>\n    <div class=\"card-body\" *ngFor=\"let user of data.data\">\n      <div class=\"user\">\n        <h6>{{user.title}}</h6>\n        <p>{{user.funkcija}}</p>\n      </div>\n      <div class=\"opcije\">\n        <a href=\"#\"><i class=\"fa fa-commenting-o\" aria-hidden=\"true\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/linkos-activ-users/linkos-activ-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkosActivUsers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkosActivUsers = /** @class */ (function () {
    function LinkosActivUsers(http) {
        this.http = http;
        this.ApiURL = 'http://localhost:3030/user';
        this.data = {};
    }
    LinkosActivUsers.prototype.ngOnInit = function () {
        this.getData();
        this.getImages();
    };
    LinkosActivUsers.prototype.getData = function () {
        return this.http.get(this.ApiURL).map(function (res) { return res.json(); });
    };
    LinkosActivUsers.prototype.getImages = function () {
        var _this = this;
        this.getData()
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    LinkosActivUsers = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'linkos-activ-users',
            template: __webpack_require__("../../../../../src/app/components/linkos-activ-users/linkos-activ-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/linkos-activ-users/linkos-activ-users.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], LinkosActivUsers);
    return LinkosActivUsers;
    var _a;
}());

//# sourceMappingURL=linkos-activ-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-calendar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkos_calendar_component__ = __webpack_require__("../../../../../src/app/components/linkos-calendar/linkos-calendar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__linkos_calendar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-calendar/linkos-calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n  margin: 0 0 10px;\r\n}\r\n\r\npre {\r\n  background-color: #f5f5f5;\r\n  padding: 15px;\r\n}\r\n\r\n.modal-dialog {\r\n  max-width: 700px;\r\n}\r\n\r\n.btn-group {\r\n  margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/linkos-calendar/linkos-calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Calendar</div>\r\n  <div class=\"card-body\">\r\n\r\n      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#calendar-open\">\r\n          Open Calendar\r\n        </button>\r\n\r\n\r\n        <!-- Modal -->\r\n<div class=\"modal fade\" id=\"calendar-open\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <ng-template #modalContent let-close=\"close\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\">{{this.modalData.event.title}}</h5>\r\n                  <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <p>Event start: {{this.modalData.event.start}}</p>\r\n                  <p>Location: {{this.modalData.event.location}}</p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\r\n                </div>\r\n              </ng-template>\r\n              \r\n              <div class=\"row text-center\">\r\n                  <div class=\"col-md-12\">\r\n                      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n                    </div>\r\n                \r\n                <div class=\"col-md-12\">\r\n                  <div class=\"btn-group\">\r\n                    <div\r\n                      class=\"btn btn-primary\"\r\n                      (click)=\"view = 'month'\"\r\n                      [class.active]=\"view === 'month'\">\r\n                      Month\r\n                    </div>\r\n                    <div\r\n                      class=\"btn btn-primary\"\r\n                      (click)=\"view = 'week'\"\r\n                      [class.active]=\"view === 'week'\">\r\n                      Week\r\n                    </div>\r\n                    <div\r\n                      class=\"btn btn-primary\"\r\n                      (click)=\"view = 'day'\"\r\n                      [class.active]=\"view === 'day'\">\r\n                      Day\r\n                    </div>\r\n                  </div>\r\n                </div><br>\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"btn-group\">\r\n                      <div\r\n                        class=\"btn btn-primary\"\r\n                        mwlCalendarPreviousView\r\n                        [view]=\"view\"\r\n                        [(viewDate)]=\"viewDate\">\r\n                        Previous\r\n                      </div>\r\n                      <div\r\n                        class=\"btn btn-outline-secondary\"\r\n                        mwlCalendarToday\r\n                        [(viewDate)]=\"viewDate\">\r\n                        Today\r\n                      </div>\r\n                      <div\r\n                        class=\"btn btn-primary\"\r\n                        mwlCalendarNextView\r\n                        [view]=\"view\"\r\n                        [(viewDate)]=\"viewDate\">\r\n                        Next\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <div [ngSwitch]=\"view\">\r\n                <mwl-calendar-month-view\r\n                  *ngSwitchCase=\"'month'\"\r\n                  [viewDate]=\"viewDate\"\r\n                  [events]=\"events\"\r\n                  [refresh]=\"refresh\"\r\n                  [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                  (dayClicked)=\"dayClicked($event.day)\"\r\n                  (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                  (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                </mwl-calendar-month-view>\r\n                <mwl-calendar-week-view\r\n                  *ngSwitchCase=\"'week'\"\r\n                  [viewDate]=\"viewDate\"\r\n                  [events]=\"events\"\r\n                  [refresh]=\"refresh\"\r\n                  (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                  (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                </mwl-calendar-week-view>\r\n                <mwl-calendar-day-view\r\n                  *ngSwitchCase=\"'day'\"\r\n                  [viewDate]=\"viewDate\"\r\n                  [events]=\"events\"\r\n                  [refresh]=\"refresh\"\r\n                  (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n                  (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                </mwl-calendar-day-view>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n   \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/linkos-calendar/linkos-calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkosCalendar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var LinkosCalendar = /** @class */ (function () {
    function LinkosCalendar(modal) {
        var _this = this;
        this.modal = modal;
        this.CalendarEvent = {
            location: location
        };
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = [
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])('2017-09-30')), 0),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])('2017-10-04', 0),
                title: 'New UI project',
                color: colors.red,
                location: 'Meeting Room'
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])('2017-09-27'),
                title: 'Meeting With Lucas',
                color: colors.yellow,
                location: 'San Francisco, CA 94105'
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])('2017-09-27'), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])('2017-11-05'), 3),
                title: 'Finish website',
                color: colors.blue,
                location: 'Office'
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])('2017-09-29'), 2),
                end: new Date(),
                title: 'Skype Call',
                color: colors.yellow,
                location: 'Office',
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    LinkosCalendar.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    LinkosCalendar.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    };
    LinkosCalendar.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    LinkosCalendar.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalContent'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
    ], LinkosCalendar.prototype, "modalContent", void 0);
    LinkosCalendar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'linkos-calendar',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__("../../../../../src/app/components/linkos-calendar/linkos-calendar.component.css")],
            template: __webpack_require__("../../../../../src/app/components/linkos-calendar/linkos-calendar.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
    ], LinkosCalendar);
    return LinkosCalendar;
    var _a, _b;
}());

//# sourceMappingURL=linkos-calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-clock/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkos_clock_component__ = __webpack_require__("../../../../../src/app/components/linkos-clock/linkos-clock.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__linkos_clock_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-clock/linkos-clock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/linkos-clock/linkos-clock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Clock</div>\n  <div class=\"card-body text-center\">\n    <h4 class=\"card-title\">{{time | date:\"HH:mm:ss\"}}</h4>\n    <h5 class=\"card-title\">{{time | date:\"dd/MM/yyyy\"}}</h5>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/linkos-clock/linkos-clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkosClock; });
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

var LinkosClock = /** @class */ (function () {
    function LinkosClock() {
        this.time = new Date();
    }
    LinkosClock.prototype.ngOnInit = function () {
        this.updateClock();
    };
    LinkosClock.prototype.updateClock = function () {
        var _this = this;
        this.time = new Date();
        setTimeout(function () { return _this.updateClock(); }, 500);
    };
    LinkosClock = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'linkos-clock',
            template: __webpack_require__("../../../../../src/app/components/linkos-clock/linkos-clock.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/linkos-clock/linkos-clock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkosClock);
    return LinkosClock;
}());

//# sourceMappingURL=linkos-clock.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-company-news/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkos_company_news_component__ = __webpack_require__("../../../../../src/app/components/linkos-company-news/linkos-company-news.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__linkos_company_news_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-company-news/linkos-company-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-top {\r\n    margin-top: 21px;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid #c2cfd6;\r\n}\r\n.card {\r\n    margin: 0 0 10px 0;\r\n    \r\n}\r\n\r\n.news-card-body {\r\n    padding: 0;\r\n}\r\n\r\n.important-news {\r\n    background: #963a3a;\r\n}\r\n\r\n.btn {\r\n    margin: 5px 0 0 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/linkos-company-news/linkos-company-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" card-top\">\n    <div class=\"card-header text-center\">\n      Company News\n    </div>\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n        Add News\n      </button>\n      \n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add News</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"input-group\">\n                    <input type=\"text\" #newstitle class=\"form-control\" placeholder=\"Title\" aria-label=\"Title\" aria-describedby=\"basic-addon2\">\n                    \n                  </div>\n                  <div class=\"input-group\">\n                      <input type=\"text\" #newsmessage class=\"form-control\" placeholder=\"Message\" aria-label=\"Message\" aria-describedby=\"basic-addon2\">\n                      \n                  </div>\n                  <input type=\"checkbox\" name=\"vehicle\" #importantNews value=\"Bike\"> Is this important?\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"addNews(newstitle.value , newsmessage.value, importantNews.checked)\">Save changes</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    <div class=\"card-body\">\n        <div class=\"card text-center\" *ngFor=\"let news of newsList\">\n            <div class=\"card-header news-card-header\" [ngClass]=\"{'important-news': news.important}\" >\n              \n            </div>\n            <div class=\"card-body news-card-body\">\n              <h4 class=\"card-title\">{{news.title}}</h4>\n              <p class=\"card-text\">{{news.description}}</p>\n            </div>\n            <div class=\"card-footer text-muted\">\n              {{news.time | date:\"dd/MM/yyyy HH:mm\"}}\n            </div>\n          </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/linkos-company-news/linkos-company-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkosCompanyNews; });
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

var LinkosCompanyNews = /** @class */ (function () {
    function LinkosCompanyNews() {
    }
    LinkosCompanyNews.prototype.ngOnInit = function () {
        this.newsList = [
            {
                title: 'Sales',
                description: 'Sell faster and smarter with the world’s #1 sales platform.',
                important: true,
                time: new Date('2017-09-28T21:14:00')
            },
            {
                title: 'Service',
                description: 'Manage customer support across every channel with the #1 service platform.',
                important: false,
                time: new Date('2017-09-27T16:22:00')
            },
            {
                title: 'Marketing',
                description: 'Deliver personalized messages on any channel with the #1 marketing platform.',
                important: false,
                time: new Date('2017-09-25T18:55:00')
            }
        ];
    };
    LinkosCompanyNews.prototype.addNews = function (newstitle, newsmessage, importantNews) {
        if (newstitle !== "" || newsmessage !== "") {
            var newtime = new Date();
            this.newsList.unshift({
                title: newstitle,
                description: newsmessage,
                important: importantNews,
                time: newtime
            });
        }
    };
    LinkosCompanyNews = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'linkos-company-news',
            template: __webpack_require__("../../../../../src/app/components/linkos-company-news/linkos-company-news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/linkos-company-news/linkos-company-news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkosCompanyNews);
    return LinkosCompanyNews;
}());

//# sourceMappingURL=linkos-company-news.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-tasks/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linkos_tasks_component__ = __webpack_require__("../../../../../src/app/components/linkos-tasks/linkos-tasks.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__linkos_tasks_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/linkos-tasks/linkos-tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-body {\r\n    padding: 0;\r\n}\r\n\r\n.day {\r\n    width: 100%;\r\n    padding: 9px 0;\r\n    margin: 0;\r\n    background: #e4e4e4;\r\n}\r\n\r\np{\r\n    display: inline-block;\r\n    margin: 0 0 0 10px;\r\n}\r\n\r\ni {\r\n    margin-right: 5px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.task {\r\n    padding: 5px 0;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.details {\r\n    margin-bottom: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/linkos-tasks/linkos-tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Tasks</div>\n  <div class=\"card-body\">\n    <h6 class=\"text-center day\">Today</h6>\n    <div class=\"task\" *ngFor='let today of today; let i=index'>\n      <p>{{today.title}}</p><br>\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i><p>{{today.time}}</p>\n      <i class=\"fa fa-info\" aria-hidden=\"true\"></i><a href=\"#\" data-toggle=\"modal\" [attr.data-target]=\"'#today' + i\">details</a>\n        <!-- Modal -->\n<div class=\"modal fade\" id=\"today{{i}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel1\">Task details</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <h4>{{today.title}}</h4>\n          <p class=\"details\">{{today.description}}</p>\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i><p>{{today.time}}</p>\n          <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><p>{{today.location}}</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    </div>\n\n    <h6 class=\"text-center day\">Tomorow</h6>\n    <div class=\"task\" *ngFor='let tomorow of tomorow; let i=index'>\n      <p>{{tomorow.title}}</p><br>\n      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i><p>{{tomorow.time}}</p>\n      <i class=\"fa fa-info\" aria-hidden=\"true\"></i><a href=\"#\" data-toggle=\"modal\" [attr.data-target]=\"'#tomorow' + i\">details</a>\n        <!-- Modal -->\n<div class=\"modal fade\" id=\"tomorow{{i}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel1\">Task details</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <h4>{{tomorow.title}}</h4>\n          <p class=\"details\">{{tomorow.description}}</p>\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i><p>{{tomorow.time}}</p>\n          <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><p>{{tomorow.location}}</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/linkos-tasks/linkos-tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkosTasks; });
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

var LinkosTasks = /** @class */ (function () {
    function LinkosTasks() {
    }
    LinkosTasks.prototype.ngOnInit = function () {
        this.today = [
            {
                title: 'Meeting with Lucas',
                time: '12pm-1pm',
                location: 'San Francisco, CA 94105',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fugiat libero odit amet eveniet. Sint commodi atque consequuntur earum odit distinctio minima ea veniam laborum?'
            },
            {
                title: 'Skype Call',
                time: '1pm-2pm',
                location: 'Office',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fugiat libero odit amet eveniet. Sint commodi atque consequuntur earum odit distinctio minima ea veniam laborum?'
            }
        ];
        this.tomorow = [
            {
                title: 'Project UI',
                time: '2pm-3pm',
                location: 'Meeting Room',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fugiat libero odit amet eveniet. Sint commodi atque consequuntur earum odit distinctio minima ea veniam laborum?'
            },
            {
                title: 'Startups',
                time: '4pm-5pm',
                location: 'Palo Alto',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid fugiat libero odit amet eveniet. Sint commodi atque consequuntur earum odit distinctio minima ea veniam laborum?'
            }
        ];
    };
    LinkosTasks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'linkos-tasks',
            template: __webpack_require__("../../../../../src/app/components/linkos-tasks/linkos-tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/linkos-tasks/linkos-tasks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LinkosTasks);
    return LinkosTasks;
}());

//# sourceMappingURL=linkos-tasks.component.js.map

/***/ }),

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
exports.push([module.i, ".main1 {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.col-md-3 {\r\n    padding: 0;\r\n}\r\n\r\n.col-md-12 {\r\n    margin: 0;\r\n}\r\n\r\n@media (max-width: 576px) { \r\n    .container {\r\n        padding: 0;\r\n    }\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"main1\">\n<div class=\"sidebar-left col-md-3\">\n        <linkos-about-company class=\"col-md-12 \"></linkos-about-company>\n        <linkos-about-user class=\"col-md-12\"></linkos-about-user>\n        <linkos-activ-users class=\"col-md-12\"></linkos-activ-users>\n</div>\n\n<linkos-company-news class=\"col-md-6\"></linkos-company-news>\n\n<div class=\"sidebar-right col-md-3\">\n        <linkos-clock class=\"col-md-12\"></linkos-clock>\n        <linkos-calendar class=\"col-md-12\"></linkos-calendar>\n        <linkos-tasks class=\"col-md-12\"></linkos-tasks>\n</div></div></div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_linkos_calendar_demo_utils_module__ = __webpack_require__("../../../../../src/app/components/linkos-calendar/demo-utils/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_linkos_about_company__ = __webpack_require__("../../../../../src/app/components/linkos-about-company/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_linkos_about_user__ = __webpack_require__("../../../../../src/app/components/linkos-about-user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_linkos_activ_users__ = __webpack_require__("../../../../../src/app/components/linkos-activ-users/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_linkos_company_news__ = __webpack_require__("../../../../../src/app/components/linkos-company-news/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_linkos_clock__ = __webpack_require__("../../../../../src/app/components/linkos-clock/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_linkos_calendar__ = __webpack_require__("../../../../../src/app/components/linkos-calendar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_linkos_tasks__ = __webpack_require__("../../../../../src/app/components/linkos-tasks/index.ts");
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
                __WEBPACK_IMPORTED_MODULE_8__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_angular_calendar__["a" /* CalendarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__components_linkos_calendar_demo_utils_module__["a" /* DemoUtilsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_linkos_about_company__["a" /* LinkosAboutCompany */],
                __WEBPACK_IMPORTED_MODULE_10__components_linkos_about_user__["a" /* LinkosAboutUser */],
                __WEBPACK_IMPORTED_MODULE_11__components_linkos_activ_users__["a" /* LinkosActivUsers */],
                __WEBPACK_IMPORTED_MODULE_12__components_linkos_company_news__["a" /* LinkosCompanyNews */],
                __WEBPACK_IMPORTED_MODULE_13__components_linkos_clock__["a" /* LinkosClock */],
                __WEBPACK_IMPORTED_MODULE_14__components_linkos_calendar__["a" /* LinkosCalendar */],
                __WEBPACK_IMPORTED_MODULE_15__components_linkos_tasks__["a" /* LinkosTasks */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map