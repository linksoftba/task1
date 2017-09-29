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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">Dio koji rade svi kandidati</h1>\n      <p class=\"lead\">\n        Na dashboardu konstruisati layout i postaviti 7 angular komponenti na mjesta prema slici. Komponente snimati u u app/components\n        folderu sa prefixom linkos- npr u folder linkos-about-user smjestiti komponentu \"About user\".\n\n      </p>\n    </div>\n  </div>\n\n\n  <img src=\"assets/img/dashboard.png\" class=\"w-100\" alt=\"dashboard\">\n  <div>\n    <h2>Opis komponenti</h2>\n  </div>\n  <div>\n    <dl>\n      <dt> About company</dt>\n      <dd>Prikazati naziv adresu broj tel. kompanije</dd>\n      <dt>\n        About user\n      </dt>\n      <dd>\n        Prikazati sliku korisnika ime prezime i ulogu u kompaniji te tri linka sa ikonama: za podesenja, poruke i profil. Primjer:\n        <br/>\n        <figure class=\"figure\">\n          <img src=\"assets/img/about_user.PNG\" class=\"figure-img img-fluid rounded\" alt=\"about_user\" />\n          <figcaption class=\"figure-caption\">Primjer about user.</figcaption>\n        </figure>\n      </dd>\n\n      <dt>\n        Active users - chat\n      </dt>\n      <dd>\n        Lista korisnika sa imenom i prezimenom te ulogom u kompaniji i dva linka sa ikonama za slanje poruke i slanje emaila korisniku\n      </dd>\n      <dt>\n        Company news\n      </dt>\n      <dd>\n        Kartice sa naslovom i opisom vjesti i obavjestenja imaju dvije kategorije redovna i vazna obavjestenja bojom naglasiti vazna\n        obavjestanja. Trebaju biti sortirana po datumu da su najnovija na vrhu\n      </dd>\n      <dt>\n        Clock\n      </dt>\n      <dd> Digitalni sat koji pokazuje realno vrijeme (bez refresha) sa datumom ispod</dd>\n      <dt>\n        Calendar\n      </dt>\n      <dd>\n        Kalendar sa oznacenim eventima (event ima naziv vrijeme i lokaciju). Iskoristiti neki od ova dva kalendara\n        <a href=\"https://github.com/mattlewis92/angular-calendar\">https://github.com/mattlewis92/angular-calendar</a>\n        <a href=\"https://github.com/angular-ui/ui-calendar\">https://github.com/angular-ui/ui-calendar</a>\n      </dd>\n      <dt>\n        Tasks\n      </dt>\n      <dd>\n        Lista zadataka za korisnika sa krticama od kojih svaka sadrzi opis zadatka, vrijeme zadatka, link detalje o tasku.<br/>\n        <figure class=\"figure\">\n          <img src=\"assets/img/tasks.PNG\" class=\"figure-img img-fluid rounded\" alt=\"tasks\" />\n          <figcaption class=\"figure-caption\">Primjer liste zadataka.</figcaption>\n        </figure>\n\n      </dd>\n    </dl>\n  </div>\n\n  <div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">Individualni zadaci (Backend i povezivanje sa frontendom)</h1>\n      <p class=\"lead\">Vrijedi za sve: Potrebno je napraviti REST Api sa feathersjs nad mysql bazom (nad jednom tabelom). REST api povezati\n        sa komponentom da prikazuje podatke koji se dobiju sa Api-ja </p>\n    </div>\n  </div>\n\n\n\n  <div class=\"card\" style=\"width: 100%;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Kenan Tendzo</h4>\n      <p class=\"card-text\">\n        REST API za active users. Uvezati komponentu Active users sa ovim api-jem odnosno prikazati podatke koji se dobiju sa api-ja.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"card\" style=\"width: 100%;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Denis Dzafo</h4>\n      <p class=\"card-text\">\n        REST API za Company news. Uvezati komponentu Company news sa ovim api-jem odnosno prikazati podatke koji se dobiju sa api-ja.\n      </p>\n    </div>\n  </div>\n  <div class=\"card\" style=\"width: 100%;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Kerim Dragolj</h4>\n      <p class=\"card-text\">\n        REST API za Calendar. Uvezati komponentu Calendar sa ovim api-jem odnosno prikazati podatke koji se dobiju sa api-ja.\n      </p>\n    </div>\n  </div>\n  <div class=\"card\" style=\"width: 100%;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Faris Cancar</h4>\n      <p class=\"card-text\">\n        REST API za Tasks. Uvezati komponentu Tasks sa ovim api-jem odnosno prikazati podatke koji se dobiju sa api-ja.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"card\" style=\"width: 100%;\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">\n        Sabahudin Brkan</h4>\n      <p class=\"card-text\">\n        REST API za About user i About company koji vraca podatke za komponente About user i about company Uvezati komponente sa\n        podacima koji se dobiju sa API-ja.\n      </p>\n    </div>\n  </div>\n\n\n  <dt> Korisni linkovi</dt>\n  <dd>\n    <ul>\n      <li><a href=\"http://coreui.io/docs/getting-started/introduction/\">http://coreui.io/docs/getting-started/introduction/</a>\n      </li>\n      <li> <a href=\"https://docs.feathersjs.com/api/databases/sequelize.html\">https://docs.feathersjs.com/api/databases/sequelize.html</a>\n      </li>\n    </ul>\n  </dd>\n\n</div>\n"

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