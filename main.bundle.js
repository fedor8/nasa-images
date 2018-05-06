webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nasa-image-dashboard></nasa-image-dashboard>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__image_dashboard_image_dashboard_component__ = __webpack_require__("../../../../../src/app/image-dashboard/image-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_services_image_search_service__ = __webpack_require__("../../../../../src/app/common/services/image-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_dashboard_image_card_image_card_component__ = __webpack_require__("../../../../../src/app/image-dashboard/image-card/image-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_config__ = __webpack_require__("../../../../../src/app/common/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__image_dashboard_image_dashboard_component__["a" /* ImageDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__image_dashboard_image_card_image_card_component__["a" /* ImageCardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDividerModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__common_services_image_search_service__["a" /* ImageSearchService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_9__common_config__["b" /* BASE_URL_TOKEN */],
                useValue: __WEBPACK_IMPORTED_MODULE_9__common_config__["a" /* BASE_URL */],
                multi: false
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "../../../../../src/app/common/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");


const BASE_URL_TOKEN = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* InjectionToken */]('BASE_URL_TOKEN');
/* harmony export (immutable) */ __webpack_exports__["b"] = BASE_URL_TOKEN;

const BASE_URL = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].baseUrl;
/* harmony export (immutable) */ __webpack_exports__["a"] = BASE_URL;



/***/ }),

/***/ "../../../../../src/app/common/services/image-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm2015/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("../../../../../src/app/common/config.ts");
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





let ImageSearchService = class ImageSearchService {
    constructor(_http, _baseUrl) {
        this._http = _http;
        this._baseUrl = _baseUrl;
    }
    getImages$(query, yearFrom, yearTo) {
        const params = { q: query };
        if (yearFrom) {
            params['year_start'] = yearFrom;
        }
        if (yearTo) {
            params['year_end'] = yearTo;
        }
        return this._http.get(this._baseUrl, {
            params: params
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(err => {
            console.error('getImages$', err);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
        }));
    }
    getImagesNextPage$(url) {
        if (url != null) {
            return this._http.get(url)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(err => {
                console.error('getImagesNextPage$', err);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
            }));
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
        }
    }
};
ImageSearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__config__["b" /* BASE_URL_TOKEN */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], String])
], ImageSearchService);



/***/ }),

/***/ "../../../../../src/app/image-dashboard/image-card/image-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card{\r\n  margin: 15px;\r\n}\r\n.example-card{\r\n  height: 600px;\r\n}\r\n.example-card-header{\r\n  height: 20px;\r\n}\r\n.example-card-image{\r\n  max-height: 400px;\r\n  width: calc(90% - 10px);\r\n  padding: 24px;\r\n}\r\n.example-card-image-container{\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}\r\n.mat-card-title{\r\n  white-space: nowrap;\r\n  overflow-x: hidden;\r\n  text-overflow: ellipsis;\r\n  width: 300px;\r\n}\r\n.image-description{\r\n  overflow-y: auto;\r\n  height: 150px;\r\n}\r\n.nasa-image-card{\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-dashboard/image-card/image-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\" *ngIf=\"imageItem.links\">\n  <mat-card-header class=\"example-card-header\">\n    <mat-card-title matTooltip=\"{{imageItem.data[0].title}}\">{{imageItem.data[0].title}}</mat-card-title>\n    <mat-card-subtitle>{{imageItem.data[0].date_created | date}}</mat-card-subtitle>\n  </mat-card-header>\n  <img class=\"example-card-image\" mat-card-image [src]=\"imageItem.links[0]?.href\" alt=\"Image not found\">\n  <mat-card-content>\n    <p class=\"image-description\" [innerHTML]=\"imageItem.data[0].description\">\n    </p>\n  </mat-card-content>\n<!--  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>-->\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/image-dashboard/image-card/image-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ImageCardComponent = class ImageCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
    __metadata("design:type", Object)
], ImageCardComponent.prototype, "imageItem", void 0);
ImageCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'nasa-image-card',
        template: __webpack_require__("../../../../../src/app/image-dashboard/image-card/image-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-dashboard/image-card/image-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ImageCardComponent);



/***/ }),

/***/ "../../../../../src/app/image-dashboard/image-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.year-field{\r\n  width: 100px;\r\n}\r\n\r\n.search-filter-controls{\r\n\r\n}\r\n\r\n.results-list{\r\n  position: absolute;\r\n  top: 120px;\r\n  bottom: 0;\r\n  width: calc(100% - 10px);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  margin-top: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-dashboard/image-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"search-filter-controls\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput name=\"searchQuery\"\n           #searchQuery\n           placeholder=\"Type something like 'Jupiter', 'Venus', 'NGC', etc.\"\n           [value]=\"initValue\"\n           (input)=\"onQueryInput(searchQuery.value)\">\n  </mat-form-field>\n  <mat-form-field class=\"year-field\">\n    <input matInput value=\"\" name=\"yearFrom\" #yearFrom\n           type=\"number\"\n           placeholder=\"Year from\"\n           [max]=\"yearTo.value\"\n           [min]=\"1950\"\n           (input)=\"onSetYearFrom(yearFrom.value, yearFrom.checkValidity())\">\n  </mat-form-field>\n  <mat-form-field class=\"year-field\">\n    <input matInput value=\"\" name=\"yearTo\" #yearTo\n           type=\"number\"\n           placeholder=\"Year to\"\n           [max]=\"2018\"\n           [min]=\"yearFrom.value\"\n           (input)=\"onSetYearTo(yearTo.value, yearTo.checkValidity())\">\n  </mat-form-field>\n  <span>Loaded {{images.length}} of {{allItemsCount}} images.</span>\n</div>\n<mat-divider></mat-divider>\n<div class=\"results-list scroll\" (scroll)=\"onScroll($event)\">\n  <mat-grid-list cols=\"4\" rowHeight=\"700px\">\n    <mat-grid-tile\n      *ngFor=\"let item of images\"\n      [colspan]=\"1\"\n      [rowspan]=\"1\">\n      <nasa-image-card class=\"nasa-image-card\" [imageItem]=\"item\"></nasa-image-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/image-dashboard/image-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_image_search_service__ = __webpack_require__("../../../../../src/app/common/services/image-search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm2015/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm2015/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm2015/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/_esm2015/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mapTo__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_reduce__ = __webpack_require__("../../../../rxjs/_esm2015/add/operator/reduce.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











const INIT_VALUE = 'Planet';
let ImageDashboardComponent = class ImageDashboardComponent {
    constructor(_imageSearchService) {
        this.query$$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.yearFrom$$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.yearTo$$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.nextPage$$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.allItemsCount = 0;
        this.imageSearchService = _imageSearchService;
    }
    mapNasaImagesToNasaImageItems(result) {
        if (result.collection.links) {
            const nextLink = result.collection.links.find((element, index, array) => element.rel === 'next');
            if (nextLink) {
                this.nextPage = nextLink.href;
            }
        }
        else {
            this.nextPage = null;
        }
        const itemsWithImages = result.collection.items.filter((item) => {
            const hasImageLink = item.links && item.links.find((element) => element.render === 'image') !== undefined;
            if (!hasImageLink) {
                this.allItemsCount--;
            }
            return hasImageLink;
        });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(itemsWithImages);
    }
    ngOnInit() {
        this.initValue = INIT_VALUE;
        this.imagesSubscription = this.query$$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* startWith */])(INIT_VALUE), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* combineLatest */])(this.yearFrom$$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* startWith */])(null)), this.yearTo$$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["e" /* startWith */])(null)), (query, yearFrom, yearTo) => ({ query, yearFrom, yearTo })), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* debounceTime */])(500), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["f" /* switchMap */])(({ query, yearFrom, yearTo }) => this.imageSearchService.getImages$(query, yearFrom, yearTo)), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["g" /* tap */])((result) => {
            this.allItemsCount = result.collection.metadata.total_hits;
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["f" /* switchMap */])(this.mapNasaImagesToNasaImageItems.bind(this)), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])((err) => {
            console.error('imageSearchServiceError', err);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(null);
        })).subscribe(value => {
            this.images = value;
        });
        this.nextPageSubscription = this.nextPage$$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["d" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["f" /* switchMap */])((nextPage) => this.imageSearchService.getImagesNextPage$(nextPage)), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["f" /* switchMap */])(this.mapNasaImagesToNasaImageItems.bind(this))).subscribe((images) => {
            this.images = this.images.concat(images);
        });
        /*   const clicksInFiveSeconds = Observable.fromEvent(document, 'click')
                 .takeUntil(Observable.interval(5000));
            const ones = clicksInFiveSeconds.mapTo(1);
            const seed = 0;
            const count = ones.reduce((acc, one) => acc + one, seed);
           count.subscribe(x => console.log(x));*/
    }
    onQueryInput(value) {
        this.query$$.next(value);
    }
    onSetYearFrom(value, valid) {
        if (valid) {
            this.yearFrom$$.next(value);
        }
    }
    onSetYearTo(value, valid) {
        if (valid) {
            this.yearTo$$.next(value);
        }
    }
    onScroll($event) {
        if (this.nextPage && $event.target.scrollTop + $event.target.clientHeight + 200 >= $event.target.scrollHeight) {
            if (this.nextPage) {
                this.nextPage$$.next(this.nextPage);
            }
        }
    }
    ngOnDestroy() {
        this.imagesSubscription.unsubscribe();
        this.nextPageSubscription.unsubscribe();
    }
};
ImageDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'nasa-image-dashboard',
        template: __webpack_require__("../../../../../src/app/image-dashboard/image-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-dashboard/image-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_image_search_service__["a" /* ImageSearchService */]])
], ImageDashboardComponent);



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    baseUrl: 'https://images-api.nasa.gov/search'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map