webpackJsonp(["instructions.module"],{

/***/ "../../../../../src/app/views/instructions/instructions-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instructions_component__ = __webpack_require__("../../../../../src/app/views/instructions/instructions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__instructions_component__["a" /* InstructionsComponent */],
        data: {
            title: 'Instructions'
        }
    }
];
var InstructionsRoutingModule = /** @class */ (function () {
    function InstructionsRoutingModule() {
    }
    InstructionsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], InstructionsRoutingModule);
    return InstructionsRoutingModule;
}());

//# sourceMappingURL=instructions-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/instructions/instructions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-3\">Dio koji rade svi kandidati</h1>\r\n      <p class=\"lead\">\r\n        Na dashboardu konstruisati layout i postaviti 7 angular komponenti na mjesta prema slici. Komponente snimati u u app/components\r\n        folderu sa prefixom linkos- npr u folder linkos-about-user smjestiti komponentu \"About user\".\r\n\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <img src=\"assets/img/dashboard.png\" class=\"w-100\" alt=\"dashboard\">\r\n  <div>\r\n    <h2>Opis komponenti</h2>\r\n  </div>\r\n  <div>\r\n    <dl>\r\n      <dt> About company</dt>\r\n      <dd>Prikazati naziv adresu broj tel. kompanije</dd>\r\n      <dt>\r\n        About user\r\n      </dt>\r\n      <dd>\r\n        Prikazati sliku korisnika ime prezime i ulogu u kompaniji te tri linka sa ikonama: za podesenja, poruke i profil. Primjer:\r\n        <br/>\r\n        <figure class=\"figure\">\r\n          <img src=\"assets/img/about_user.PNG\" class=\"figure-img img-fluid rounded\" alt=\"about_user\" />\r\n          <figcaption class=\"figure-caption\">Primjer about user.</figcaption>\r\n        </figure>\r\n      </dd>\r\n\r\n      <dt>\r\n        Active users - chat\r\n      </dt>\r\n      <dd>\r\n        Lista korisnika sa imenom i prezimenom te ulogom u kompaniji i dva linka sa ikonama za slanje poruke i slanje emaila korisniku\r\n      </dd>\r\n      <dt>\r\n        Company news\r\n      </dt>\r\n      <dd>\r\n        Kartice sa naslovom i opisom vjesti i obavjestenja imaju dvije kategorije redovna i vazna obavjestenja bojom naglasiti vazna\r\n        obavjestanja. Trebaju biti sortirana po datumu da su najnovija na vrhu\r\n      </dd>\r\n      <dt>\r\n        Clock\r\n      </dt>\r\n      <dd> Digitalni sat koji pokazuje realno vrijeme (bez refresha) sa datumom ispod</dd>\r\n      <dt>\r\n        Calendar\r\n      </dt>\r\n      <dd>\r\n        Kalendar sa oznacenim eventima (event ima naziv vrijeme i lokaciju). Iskoristiti neki od ova dva kalendara\r\n        <a href=\"https://github.com/mattlewis92/angular-calendar\">https://github.com/mattlewis92/angular-calendar</a>\r\n        <a href=\"https://github.com/angular-ui/ui-calendar\">https://github.com/angular-ui/ui-calendar</a>\r\n      </dd>\r\n      <dt>\r\n        Tasks\r\n      </dt>\r\n      <dd>\r\n        Lista zadataka za korisnika sa krticama od kojih svaka sadrzi opis zadatka, vrijeme zadatka, link detalje o tasku.<br/>\r\n        <figure class=\"figure\">\r\n          <img src=\"assets/img/tasks.PNG\" class=\"figure-img img-fluid rounded\" alt=\"tasks\" />\r\n          <figcaption class=\"figure-caption\">Primjer liste zadataka.</figcaption>\r\n        </figure>\r\n\r\n      </dd>\r\n    </dl>\r\n  </div>\r\n\r\n  <div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-3\">Individualni zadaci (Backend i povezivanje sa frontendom)</h1>\r\n      <p class=\"lead\">Vrijedi za sve: Potrebno je napraviti REST Api sa feathersjs nad mysql bazom (nad jednom tabelom). REST api povezati\r\n        sa komponentom da prikazuje podatke koji se dobiju sa Api-ja </p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"card\" style=\"width: 100%;\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Kenan Tendzo</h4>\r\n      <p class=\"card-text\">\r\n        REST API za active users. Uvezati komponentu Active users sa ovim api-jem odnosno prikazati podatke koji se dobiju sa api-ja.\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" style=\"width: 100%;\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Denis Dzafo</h4>\r\n      <p class=\"card-text\">\r\n        REST API za Company news. Uvezati komponentu Company news sa ovim api-jem odnosno prikazati podatke koji se dobiju sa api-ja.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\" style=\"width: 100%;\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Kerim Dragolj</h4>\r\n      <p class=\"card-text\">\r\n        REST API za Calendar. Uvezati komponentu Calendar sa ovim api-jem odnosno prikazati podatke koji se dobiju sa api-ja.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\" style=\"width: 100%;\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Faris Cancar</h4>\r\n      <p class=\"card-text\">\r\n        REST API za Tasks. Uvezati komponentu Tasks sa ovim api-jem odnosno prikazati podatke koji se dobiju sa api-ja.\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\" style=\"width: 100%;\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">\r\n        Sabahudin Brkan</h4>\r\n      <p class=\"card-text\">\r\n        REST API za About user i About company koji vraca podatke za komponente About user i about company Uvezati komponente sa\r\n        podacima koji se dobiju sa API-ja.\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <dt> Korisni linkovi</dt>\r\n  <dd>\r\n    <ul>\r\n      <li><a href=\"http://coreui.io/docs/getting-started/introduction/\">http://coreui.io/docs/getting-started/introduction/</a>\r\n      </li>\r\n      <li> <a href=\"https://docs.feathersjs.com/api/databases/sequelize.html\">https://docs.feathersjs.com/api/databases/sequelize.html</a>\r\n      </li>\r\n    </ul>\r\n  </dd>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/instructions/instructions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsComponent; });
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

var InstructionsComponent = /** @class */ (function () {
    function InstructionsComponent() {
    }
    InstructionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/instructions/instructions.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InstructionsComponent);
    return InstructionsComponent;
}());

//# sourceMappingURL=instructions.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/instructions/instructions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsModule", function() { return InstructionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instructions_component__ = __webpack_require__("../../../../../src/app/views/instructions/instructions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instructions_routing_module__ = __webpack_require__("../../../../../src/app/views/instructions/instructions-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InstructionsModule = /** @class */ (function () {
    function InstructionsModule() {
    }
    InstructionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__instructions_routing_module__["a" /* InstructionsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__instructions_component__["a" /* InstructionsComponent */]]
        })
    ], InstructionsModule);
    return InstructionsModule;
}());

//# sourceMappingURL=instructions.module.js.map

/***/ })

});
//# sourceMappingURL=instructions.module.chunk.js.map