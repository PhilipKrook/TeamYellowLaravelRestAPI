function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(httpClient) {
        _classCallCheck(this, ApiService);

        this.httpClient = httpClient;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/json'
          })
        }; // Use your own API-key here.

        this.API_KEY = '0e6da493848bce79b514981005d24f35'; // Different URLs used in the functions below.

        this.MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
        this.BASE_URL = 'https://api.themoviedb.org';
        this.SEARCH_URL = 'https://api.themoviedb.org/3/search/multi';
        this.searchResults = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      } // Function that displays popular movies at Dashboard.


      _createClass(ApiService, [{
        key: "getMovies",
        value: function getMovies() {
          return this.httpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(this.API_KEY));
        } // Function that gets the id for a specific movie, to show more details about it.

      }, {
        key: "getMovie",
        value: function getMovie(movieId) {
          return this.httpClient.get("".concat(this.MOVIE_URL).concat(movieId, "?api_key=").concat(this.API_KEY));
        } // Function used to search in TMDBs API, it takes a query(string,input) and joins it with
        // SEARCH_URL to build up a correct URL.

      }, {
        key: "searchTmdb",
        value: function searchTmdb(query) {
          var params = ["query=".concat(query), "api_key=".concat(this.API_KEY)].join('&');
          var queryUrl = "".concat(this.SEARCH_URL, "?").concat(params);
          return this.httpClient.get(queryUrl);
        } // Sets and gets the search-results, used in search.comp.ts

      }, {
        key: "setResults",
        value: function setResults(results) {
          this.searchResults.next(results);
        }
      }, {
        key: "getResults",
        value: function getResults() {
          return this.searchResults.asObservable();
        } // Function that gets a Persons ID so we can se more details about a specific person.

      }, {
        key: "getPerson",
        value: function getPerson(id) {
          var actorUrl = "".concat(this.BASE_URL, "/3/person/").concat(id, "?api_key=").concat(this.API_KEY);
          return this.httpClient.get(actorUrl);
        } // Function that gets a specific movies credits, we can see a movies cast/crew.

      }, {
        key: "getCredits",
        value: function getCredits(id) {
          return this.httpClient.get("".concat(this.MOVIE_URL).concat(id, "/credits?api_key=").concat(this.API_KEY));
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./movie-detail/movie-detail.component */
    "./src/app/movie-detail/movie-detail.component.ts");
    /* harmony import */


    var _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./person-detail/person-detail.component */
    "./src/app/person-detail/person-detail.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: 'movie-detail/:id',
      component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailComponent"]
    }, {
      path: 'person-detail/:id',
      component: _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_4__["PersonDetailComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'TMDB app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 1,
      consts: [["routerLink", "/"], ["src", "https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png", "alt", "logo", "height", "60px"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./movie-detail/movie-detail.component */
    "./src/app/movie-detail/movie-detail.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search-result/search-result.component */
    "./src/app/search-result/search-result.component.ts");
    /* harmony import */


    var _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./person-detail/person-detail.component */
    "./src/app/person-detail/person-detail.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultComponent"], _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_9__["PersonDetailComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultComponent"], _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_9__["PersonDetailComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../search-result/search-result.component */
    "./src/app/search-result/search-result.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function DashboardComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var movie_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w185", movie_r1.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/movie-detail/", movie_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vote: ", movie_r1.vote_average, "");
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(apiService) {
        _classCallCheck(this, DashboardComponent);

        this.apiService = apiService;
      } // OnInit, get popular movies and display.


      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiService.getMovies().subscribe(function (data) {
            console.log(data);
            _this.movies = data['results'];
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 6,
      vars: 1,
      consts: [[1, "test"], ["class", "inside", 4, "ngFor", "ngForOf"], [1, "inside"], ["alt", "Poster of movie", 3, "src"], [1, "con", 3, "routerLink"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-search-result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Popular Movies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_Template, 7, 4, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
        }
      },
      directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _search_result_search_result_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.test[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.inside[_ngcontent-%COMP%] {\n  display: block; \n  float: left;\n  margin-top: 30px; \n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.con[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 200px;\n}\n\n@media all and (min-width: 320px) {\n    \n  .test[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      max-width: 100%;\n      height: auto;\n   }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJDOztBQUVEO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUdBOztFQUVFO01BQ0ksZUFBZTtNQUNmLFlBQVk7R0FDZjtFQUNEIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypbY2xhc3MqPSdjb2wtJ10ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiBcbmgxIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4gIC5jb2wtMS00IHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIFxuICAuZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuKi9cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRlc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnNpZGUge1xuICBkaXNwbGF5OiBibG9jazsgXG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAzMHB4OyBcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAgIFxuICAudGVzdCBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgfVxuICB9XG5cblxuXG5cblxuXG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/movie-detail/movie-detail.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/movie-detail/movie-detail.component.ts ***!
    \********************************************************/

  /*! exports provided: MovieDetailComponent */

  /***/
  function srcAppMovieDetailMovieDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function () {
      return MovieDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MovieDetailComponent_div_0_li_19_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
      }

      if (rf & 2) {
        var castMember_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://image.tmdb.org/t/p/w185", castMember_r6.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MovieDetailComponent_div_0_li_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailComponent_div_0_li_19_img_1_Template, 1, 1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var castMember_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", castMember_r6.profile_path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/person-detail/", castMember_r6.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](castMember_r6.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Character: ", castMember_r6.character, " ");
      }
    }

    function MovieDetailComponent_div_0_li_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var crewMember_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Name: ", crewMember_r9.name, " Job: ", crewMember_r9.job, "");
      }
    }

    function MovieDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Overview");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cast:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MovieDetailComponent_div_0_li_19_Template, 6, 4, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Crew:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MovieDetailComponent_div_0_li_23_Template, 2, 2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w780", ctx_r2.movie.backdrop_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.movie.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.movie.overview);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vote: ", ctx_r2.movie.vote_average, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Runtime: ", ctx_r2.movie.runtime, "min");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Release date: ", ctx_r2.movie.release_date, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Budget: $", ctx_r2.movie.budget, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.movie.cast);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.movie.crew);
      }
    }

    function MovieDetailComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please wait... :D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MovieDetailComponent =
    /*#__PURE__*/
    function () {
      function MovieDetailComponent(apiService, route) {
        _classCallCheck(this, MovieDetailComponent);

        this.apiService = apiService;
        this.route = route;
      }

      _createClass(MovieDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMovie();
          this.getDetails();
        }
      }, {
        key: "getMovie",
        value: function getMovie() {
          var _this2 = this;

          var movieId = window.location.pathname.split('/')[2];
          this.apiService.getMovie(movieId).subscribe(function (response) {
            _this2.movie = response;
          });
        }
      }, {
        key: "getDetails",
        value: function getDetails() {
          var _this3 = this;

          var id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
          this.apiService.getCredits(id).subscribe(function (response) {
            console.log('credits', response);
            _this3.movie.cast = response.cast;
            _this3.movie.crew = response.crew;
            console.log('cast', _this3.movie.cast);
          });
        }
      }]);

      return MovieDetailComponent;
    }();

    MovieDetailComponent.ɵfac = function MovieDetailComponent_Factory(t) {
      return new (t || MovieDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    MovieDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MovieDetailComponent,
      selectors: [["app-movie-detail"]],
      decls: 2,
      vars: 2,
      consts: [["class", "test", 4, "ngIf"], [4, "ngIf"], [1, "test"], ["id", "img-list", "alt", "Poster of movie", 3, "src"], [1, "overview"], [1, "con"], [4, "ngFor", "ngForOf"], ["class", "castPersons", "height", "150", "alt", "Profile of actor", 3, "src", 4, "ngIf"], [3, "routerLink"], ["height", "150", "alt", "Profile of actor", 1, "castPersons", 3, "src"]],
      template: function MovieDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovieDetailComponent_div_0_Template, 24, 9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieDetailComponent_div_1_Template, 3, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.movie);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n  \n  .test[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  .inside[_ngcontent-%COMP%] {\n    display: block; \n    float: left;\n    margin-top: 30px; \n    margin-left: 10px;\n    margin-right: 10px;\n  }\n  \n  .con[_ngcontent-%COMP%] {\n    display: inline-block;\n    max-width: 700px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n  \n  .castPersons[_ngcontent-%COMP%] {\n    display: inline-block;\n    max-width: 700px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    \n  }\n  \n  .overview[_ngcontent-%COMP%] {\n      padding-top: 20px;\n  }\n  \n  @media all and (min-width: 320px) {\n    \n    .test[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 100%;\n        height: auto;\n     }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7RUFDWjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0VBRXRCOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztFQUtFOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7S0FDZjtJQUNEIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC50ZXN0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5pbnNpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyBcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5jb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuY2FzdFBlcnNvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIFxuICB9XG5cbiAgLm92ZXJ2aWV3IHtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG5cbiAgXG4gIFxuICAgIFxuICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gICAgXG4gICAgLnRlc3QgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgIH1cbiAgICB9XG5cblxuXG5cblxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-movie-detail',
          templateUrl: './movie-detail.component.html',
          styleUrls: ['./movie-detail.component.css']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/person-detail/person-detail.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/person-detail/person-detail.component.ts ***!
    \**********************************************************/

  /*! exports provided: PersonDetailComponent */

  /***/
  function srcAppPersonDetailPersonDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonDetailComponent", function () {
      return PersonDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PersonDetailComponent_div_0_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Birthday: ", ctx_r11.actor.birthday, "");
      }
    }

    function PersonDetailComponent_div_0_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Age: ", ctx_r12.age, "");
      }
    }

    function PersonDetailComponent_div_0_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Place of birth: ", ctx_r13.actor.place_of_birth, "");
      }
    }

    function PersonDetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PersonDetailComponent_div_0_li_5_Template, 2, 1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PersonDetailComponent_div_0_li_6_Template, 2, 1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PersonDetailComponent_div_0_li_7_Template, 2, 1, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Biography");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.getPersonProfileUri(ctx_r10.actor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.actor.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.actor.birthday);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.age);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.actor.place_of_birth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.actor.biography);
      }
    }

    var PersonDetailComponent =
    /*#__PURE__*/
    function () {
      function PersonDetailComponent(route, apiService, location) {
        _classCallCheck(this, PersonDetailComponent);

        this.route = route;
        this.apiService = apiService;
        this.location = location;
        this.imageUri = 'https://image.tmdb.org/t/p/w300/';
      }

      _createClass(PersonDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
          this.getPerson();
        } // Fuction that gets persons id and checks if actor.birthday is true 
        // and then calculates age with BD and time now.

      }, {
        key: "getPerson",
        value: function getPerson() {
          var _this4 = this;

          this.apiService.getPerson(this.id).subscribe(function (actor) {
            _this4.actor = actor;

            if (actor.birthday) {
              var birth = new Date(actor.birthday).getTime();
              var now;
              var timeDiff = now - birth;
              _this4.age = Math.floor(timeDiff / 31536000000);
            }
          }, function (error) {
            console.error(error);
          });
        } // If Person have a profile image, display it.

      }, {
        key: "getPersonProfileUri",
        value: function getPersonProfileUri(actor) {
          if (actor.profile_path) {
            return this.imageUri + actor.profile_path;
          }
        }
      }]);

      return PersonDetailComponent;
    }();

    PersonDetailComponent.ɵfac = function PersonDetailComponent_Factory(t) {
      return new (t || PersonDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    PersonDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonDetailComponent,
      selectors: [["app-person-detail"]],
      decls: 1,
      vars: 1,
      consts: [["class", "test", 4, "ngIf"], [1, "test"], ["alt", "Picture of Person", 3, "src"], [1, "overview"], [4, "ngIf"], [1, "castPersons"]],
      template: function PersonDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PersonDetailComponent_div_0_Template, 12, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.actor);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n  \n  .test[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  \n  .inside[_ngcontent-%COMP%] {\n    display: block; \n    float: left;\n    margin-top: 30px; \n    margin-left: 10px;\n    margin-right: 10px;\n  }\n  \n  .con[_ngcontent-%COMP%] {\n    display: inline-block;\n    max-width: 700px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n  \n  .castPersons[_ngcontent-%COMP%] {\n    display: inline-block;\n    max-width: 700px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    \n  }\n  \n  .overview[_ngcontent-%COMP%] {\n      padding-top: 20px;\n  }\n  \n  @media all and (min-width: 320px) {\n    \n    .test[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 100%;\n        height: auto;\n     }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uLWRldGFpbC9wZXJzb24tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjs7RUFFdEI7O0VBRUE7TUFDSSxpQkFBaUI7RUFDckI7O0VBR0E7O0lBRUU7UUFDSSxlQUFlO1FBQ2YsWUFBWTtLQUNmO0lBQ0QiLCJmaWxlIjoic3JjL2FwcC9wZXJzb24tZGV0YWlsL3BlcnNvbi1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAudGVzdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuaW5zaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDsgXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICAuY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLmNhc3RQZXJzb25zIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBcbiAgfVxuXG4gIC5vdmVydmlldyB7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG5cbiAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgICBcbiAgICAudGVzdCBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgfVxuICAgIH1cblxuXG5cblxuXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-person-detail',
          templateUrl: './person-detail.component.html',
          styleUrls: ['./person-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search-result/search-result.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/search-result/search-result.component.ts ***!
    \**********************************************************/

  /*! exports provided: SearchResultComponent */

  /***/
  function srcAppSearchResultSearchResultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function () {
      return SearchResultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SearchResultComponent_div_0_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchResultComponent_div_0_div_1_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.goTo("/movie-detail", i_r18.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r18.title);
      }
    }

    function SearchResultComponent_div_0_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchResultComponent_div_0_div_1_div_2_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.goTo("/person-detail", i_r18.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r18.name);
      }
    }

    function SearchResultComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchResultComponent_div_0_div_1_div_1_Template, 4, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchResultComponent_div_0_div_1_div_2_Template, 4, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18.media_type === "movie");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18.media_type === "person");
      }
    }

    function SearchResultComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchResultComponent_div_0_div_1_Template, 3, 2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.searchResults);
      }
    }

    var SearchResultComponent =
    /*#__PURE__*/
    function () {
      function SearchResultComponent(apiService, router) {
        _classCallCheck(this, SearchResultComponent);

        this.apiService = apiService;
        this.router = router;
      }

      _createClass(SearchResultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.apiService.searchResults.subscribe(function (success) {
            _this5.searchResults = success;
          }, function (error) {
            console.error(error);
          });
        } // Navigates to the search-results(#searchBox input) path + id.

      }, {
        key: "goTo",
        value: function goTo(path, id) {
          this.searchResults = null;
          var searchBoxElm = document.querySelector('#searchBox');
          searchBoxElm.value = '';
          this.router.navigate([path, id]);
        }
      }]);

      return SearchResultComponent;
    }();

    SearchResultComponent.ɵfac = function SearchResultComponent_Factory(t) {
      return new (t || SearchResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SearchResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchResultComponent,
      selectors: [["app-search-result"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"], [1, "result-title"]],
      template: function SearchResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchResultComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResults);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".result-title[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: #333;\n    display: block;\n    padding-bottom: 8px;\n  }\n  \n  .result-title[_ngcontent-%COMP%]:hover {\n    color: gray;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQtdGl0bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICAucmVzdWx0LXRpdGxlOmhvdmVyIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuXG5cblxuXG5cblxuXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-result',
          templateUrl: './search-result.component.html',
          styleUrls: ['./search-result.component.scss']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(apiService) {
        _classCallCheck(this, SearchComponent);

        this.apiService = apiService;
        this.searchValue = '';
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search(query) {
          this.searchResult = null;
          clearTimeout(this.timer);
          this.timer = setTimeout(this.executeSearch.bind(this), 250, query);
        } // If search-input is < 2 give no results
        // If search-input is > 2 give success and 
        // display results of media type 'movie' and 'person'
        // depending on media type matches string/input.

      }, {
        key: "executeSearch",
        value: function executeSearch(query) {
          var _this6 = this;

          if (query === '' || query.length <= 2) {
            this.apiService.setResults(null);
            return;
          }

          this.apiService.searchTmdb(query).subscribe(function (success) {
            _this6.searchResult = success.results.filter(function (item) {
              return item.media_type === 'movie' || item.media_type === 'person';
            });

            _this6.apiService.setResults(_this6.searchResult);
          }, function (error) {
            console.error(error);
          });
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 3,
      vars: 0,
      consts: [[1, "form-inline", "my-2", "my-lg-0"], ["id", "searchBox", "type", "search", "placeholder", "Search here...", "aria-label", "Search", 1, "form-control", "mr-sm-2", 3, "input"], ["searchBox", ""]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SearchComponent_Template_input_input_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.search(_r14.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".search-container[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  padding: 5px 16px;\n  width: 250px;\n  color: #333;\n  border-radius: 100px;\n  border: none;\n  height: 30px;\n}\n\n.result-container[_ngcontent-%COMP%] {\n  padding: 8px 16px 0;\n  background-color: #fafafa;\n  text-align: start;\n}\n\n.result-title[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n  display: block;\n  padding-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgcGFkZGluZzogNXB4IDE2cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnJlc3VsdC1jb250YWluZXIge1xuICBwYWRkaW5nOiA4cHggMTZweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnJlc3VsdC10aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzMzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG5cblxuXG5cblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/patrik/Develop/projects/github/weatherapp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map