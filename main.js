(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 標題 -->\r\n<div class=\"page-head_agile_info_w3l\">\r\n  <div class=\"container\">\r\n    <h3>About <span>Us </span></h3>\r\n    <div class=\"services-breadcrumb\">\r\n      <div class=\"agile_inner_breadcrumb\">\r\n\r\n        <ul class=\"w3_short\">\r\n          <li><a [routerLink]=\"['/']\">Home</a><i>|</i></li>\r\n          <li>About</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- //標題 -->\r\n<div class=\"banner_bottom_agile_info\">\r\n  <div class=\"container\">\r\n    <!-- 介紹文 -->\r\n    <div class=\"agile_ab_w3ls_info\">\r\n      <div class=\"col-md-6 ab_pic_w3ls\">\r\n        <img src=\"assets/images/ab_pic.jpg\" alt=\" \" class=\"img-responsive\" />\r\n      </div>\r\n      <div class=\"col-md-6 ab_pic_w3ls_text_info\">\r\n        <h5>關於我們的 <span> 貓咪書店</span> </h5>\r\n        <p>我們的宗旨是擁有一間貓咪書店不含貓咪。</p>\r\n        <p>俗話說，有貓就推。<br>人生在世，無非是為了與貓咪相遇；<br>即使這輩子名利雙收、子孫滿堂，沒有了貓咪也是枉然。</p>\r\n        <p>貓咪，是一種精神象徵，存在於我們的骨血之中；<br>我們不需要貓咪的形體，只需一顆掛念貓咪的心，喵敖嗚。</p>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n    <!-- //介紹文 -->\r\n    <!-- 團隊介紹 -->\r\n    <div class=\"banner_bottom_agile_info team\">\r\n      <div class=\"container\">\r\n        <h3 class=\"wthree_text_info\">團隊<span>成員</span></h3>\r\n        <div class=\"inner_w3l_agile_grids\">\r\n          <div class=\"col-md-3 team-grids\" *ngFor=\"let item of admins\">\r\n            <div class=\"thumbnail team-w3agile\">\r\n              <img [src]=\"item.picture\" class=\"img-responsive\" alt=\"\">\r\n              <div class=\"social-icons team-icons right-w3l fotw33\">\r\n                <div class=\"caption\">\r\n                  <h4>{{ item.display_name }}</h4>\r\n                  <p>{{ item.discrimination }}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"> </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- //團隊介紹 -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admins_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admins.service */ "./src/app/admins.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(adminsService) {
        this.adminsService = adminsService;
    }
    Object.defineProperty(AboutComponent.prototype, "admins", {
        get: function () {
            return this.adminsService.admins;
        },
        enumerable: true,
        configurable: true
    });
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_admins_service__WEBPACK_IMPORTED_MODULE_1__["AdminsService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admins.service.ts":
/*!***********************************!*\
  !*** ./src/app/admins.service.ts ***!
  \***********************************/
/*! exports provided: AdminsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminsService", function() { return AdminsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminsService = /** @class */ (function () {
    function AdminsService() {
        this.admins = [
            {
                id: '1',
                display_name: '洪偉捷',
                discrimination: '',
                picture: 'assets/images/t1.jpg'
            },
            {
                id: '2',
                display_name: '吳宇宸',
                discrimination: '',
                picture: 'assets/images/t2.jpg'
            },
            {
                id: '3',
                display_name: '謝維毅',
                discrimination: '專業貓奴，負責前台',
                picture: 'assets/images/t3.jpg'
            },
            {
                id: '4',
                display_name: '黃千綾',
                discrimination: '抹茶控．負責前台部分',
                picture: 'assets/images/t4.jpg'
            },
        ];
    }
    AdminsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AdminsService);
    return AdminsService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _cartlist_cartlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cartlist/cartlist.component */ "./src/app/cartlist/cartlist.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _reload_reload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reload/reload.component */ "./src/app/reload/reload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: _master_master_component__WEBPACK_IMPORTED_MODULE_3__["MasterComponent"],
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
            },
            {
                path: 'about',
                component: _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
            },
            {
                path: 'products',
                component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]
            },
            {
                path: 'products/:id',
                component: _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]
            },
            {
                path: 'contact',
                component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]
            },
            {
                path: 'cartlist',
                component: _cartlist_cartlist_component__WEBPACK_IMPORTED_MODULE_11__["CartlistComponent"]
            },
            {
                path: 'checkout',
                component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"]
            },
            {
                path: 'orderlist',
                component: _order_order_component__WEBPACK_IMPORTED_MODULE_12__["OrderComponent"]
            },
            {
                path: 'reload',
                component: _reload_reload_component__WEBPACK_IMPORTED_MODULE_13__["ReloadComponent"]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FrontEnd';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _master_master_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./master/master.component */ "./src/app/master/master.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _cartlist_cartlist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cartlist/cartlist.component */ "./src/app/cartlist/cartlist.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _reload_reload_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./reload/reload.component */ "./src/app/reload/reload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _master_master_component__WEBPACK_IMPORTED_MODULE_7__["MasterComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutComponent"],
                _cartlist_cartlist_component__WEBPACK_IMPORTED_MODULE_16__["CartlistComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_18__["OrderComponent"],
                _reload_reload_component__WEBPACK_IMPORTED_MODULE_20__["ReloadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartService = /** @class */ (function () {
    function CartService(httpClient, usersService, cookieService, productsService) {
        this.httpClient = httpClient;
        this.usersService = usersService;
        this.cookieService = cookieService;
        this.productsService = productsService;
        this.show_cart = [];
        this.cart = [];
    }
    CartService.prototype.add_to_cart = function (id, item_amount, stock) {
        if (stock !== 0) {
            if (JSON.stringify(this.cart) !== '[]') {
                for (var i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].id === id) {
                        if (this.cart[i].item_amount + item_amount > stock) {
                            alert('訂購數量超過庫存量。');
                        }
                        else {
                            this.cart[i].item_amount += item_amount;
                            alert('已增加' + item_amount + '件此商品至購物車中。');
                            if (this.usersService.isLogin()) {
                                this.cookieService.set('cart', JSON.stringify(this.cart));
                            }
                        }
                        return;
                    }
                }
                this.cart.push({ id: id, item_amount: item_amount });
                alert('已加入' + item_amount + '件此商品至購物車。');
                if (this.usersService.isLogin()) {
                    this.cookieService.set('cart', JSON.stringify(this.cart));
                }
            }
            else {
                this.cart.push({ id: id, item_amount: item_amount });
                alert('已加入' + item_amount + '件此商品至購物車。');
                if (this.usersService.isLogin()) {
                    this.cookieService.set('cart', JSON.stringify(this.cart));
                }
            }
        }
        else {
            alert('庫存不足，無法加入購物車。');
        }
    };
    CartService.prototype.delete_item = function (index) {
        this.cart.splice(index, index + 1);
        this.show_cart.splice(index, index + 1);
        if (this.usersService.isLogin()) {
            this.cookieService.set('cart', JSON.stringify(this.cart));
        }
    };
    CartService.prototype.show = function () {
        var _this = this;
        this.show_cart = [];
        if (JSON.stringify(this.cart) !== '[]') {
            var _loop_1 = function (i) {
                this_1.productsService
                    .getProduct(this_1.cart[i].id)
                    .subscribe(function (data) {
                    _this.show_cart[i] = {
                        id: _this.cart[i].id,
                        item_amount: _this.cart[i].item_amount,
                        product: data
                    };
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.cart.length; i++) {
                _loop_1(i);
            }
            console.log('show_cart', this.show_cart);
        }
    };
    CartService.prototype.getCart = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + "orders/cart", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        });
    };
    CartService.prototype.patchCart = function (cart) {
        if (this.usersService.isLogin()) {
            var cartdata_1 = {};
            cart.forEach(function (product) {
                cartdata_1[product.id] = product.item_amount;
            });
            console.log(cartdata_1);
            return this.httpClient
                .patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + "orders/cart", encodeURI("products=" + JSON.stringify(cartdata_1)), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })
                .subscribe(function (response) {
                console.log(response);
            });
        }
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cartlist/cartlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/cartlist/cartlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li,\r\nol li {\r\n  font-size: 14px;\r\n}\r\np {\r\n  margin: 0;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na {\r\n  font-family: 'Raleway', sans-serif;\r\n  margin: 0;\r\n  font-weight: 700;\r\n}\r\nul,\r\nlabel {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody a:hover {\r\n  text-decoration: none;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n}\r\n.logo-nav-left1 ul li.active a.act {\r\n  color: #fff !important;\r\n}\r\n.multi-column-dropdown li a {\r\n  color: #999 !important;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  background-color: transparent;\r\n  color: #fff !important;\r\n}\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border: none;\r\n}\r\n.navbar {\r\n  position: relative;\r\n  min-height: 50px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid transparent;\r\n}\r\n.nav .open > a,\r\n.nav .open > a:hover,\r\n.nav .open > a:focus {\r\n  color: #fff;\r\n}\r\n.navbar-default {\r\n  background: none;\r\n  border: none;\r\n}\r\n.navbar-collapse {\r\n  padding: 0;\r\n}\r\nul.multi-column-dropdown h6 {\r\n  font-size: 20px;\r\n  color: #68d6c1;\r\n  margin: 0 0 0em;\r\n  padding-bottom: 1em;\r\n  border-bottom: 1px solid #e4e4e4;\r\n  text-transform: capitalize;\r\n}\r\n.multi-column-dropdown li {\r\n  list-style-type: none;\r\n  margin: 14px 0;\r\n}\r\n.multi-column-dropdown li a {\r\n  display: block;\r\n  clear: both;\r\n  line-height: 1.428571429;\r\n  color: #999 !important;\r\n  white-space: normal;\r\n  font-weight: 500 !important;\r\n}\r\n.dropdown-menu.columns-3 {\r\n  min-width: 190px;\r\n  padding: 20px 30px;\r\n}\r\n.nav .open > a,\r\n.nav .open > a:hover,\r\n.nav .open > a:focus {\r\n  background: none;\r\n  border: none;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  background-color: transparent;\r\n}\r\n.nav > li > a:hover,\r\n.nav > li > a:focus {\r\n  background: none;\r\n  color: #fff !important;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  color: #fff;\r\n}\r\n.multi-gd-img img {\r\n  width: 100%;\r\n}\r\n.navigation-agileits {\r\n  background: #68d6c1;\r\n}\r\n.navbar-nav > li {\r\n  float: left;\r\n  margin-left: 17px;\r\n}\r\n.navbar-nav > li:nth-child(1) {\r\n  margin-left: 0px;\r\n}\r\n/*-- banner --*/\r\n.navbar-collapse {\r\n  padding: 0;\r\n  box-shadow: none;\r\n}\r\n.navbar {\r\n  margin-bottom: 0;\r\n  border: none;\r\n}\r\n.column div.agile_top_brand_left_grid {\r\n  position: relative;\r\n  margin: 0;\r\n}\r\n.agile_top_brand_left_grid figure {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: transparent;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\r\ndiv#myTabContent {\r\n  padding: 40px 40px;\r\n}\r\n.nav-tabs > li {\r\n  width: 50%;\r\n}\r\n.nav-tabs > li > a {\r\n  margin: 0 0px;\r\n  padding: 10px 53px;\r\n  line-height: 1.42857143;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  border: 0px solid transparent;\r\n  border-radius: 0px 0px 0 0;\r\n  color: #016773;\r\n}\r\n.nav-tabs > li > a:hover,\r\n.nav > li > a:focus {\r\n  text-decoration: none;\r\n  background: #68d6c1;\r\n  color: #fff;\r\n  border: 0px solid transparent;\r\n}\r\n.nav-tabs > li.active > a,\r\n.nav-tabs > li.active > a:hover,\r\n.nav-tabs > li.active > a:focus {\r\n  color: #fff;\r\n  background: #68d6c1;\r\n  border: 0px solid transparent;\r\n}\r\n.nav-tabs {\r\n  border-bottom: 1px solid #fff;\r\n}\r\n.grid_3.grid_5 {\r\n  margin-top: 5em;\r\n  border: 1px solid #bebebe;\r\n}\r\n.grid_3.grid_5 h5 {\r\n  font-size: 20px;\r\n  color: #000;\r\n  margin-bottom: 16px;\r\n}\r\np.w3l-ad {\r\n  font-size: 14px;\r\n  color: #777;\r\n  width: 42%;\r\n  line-height: 28px;\r\n}\r\n.agile_top_brands_grids {\r\n  margin-top: 40px;\r\n}\r\n.hover14.column {\r\n  border: 1px solid #c0bebe;\r\n}\r\n.stars {\r\n  text-align: center;\r\n  margin-bottom: 13px;\r\n}\r\ni.blue-star {\r\n  color: #3399cc;\r\n}\r\ni.gray-star {\r\n  color: #808080;\r\n}\r\n.ban-bottom-w3l {\r\n  padding: 5em 0;\r\n}\r\n.ban-bottom1 {\r\n  float: left;\r\n  width: 48%;\r\n  margin-right: 2%;\r\n}\r\n.ban-bottom2 {\r\n  float: left;\r\n  width: 48%;\r\n  margin-left: 2%;\r\n}\r\n.ban-img {\r\n  margin-top: 2.1em;\r\n}\r\n.ban-top {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.ban-top img {\r\n  transition: all 1s;\r\n  width: 100%;\r\n}\r\n.ban-top:hover img {\r\n  -webkit-transform: scale3d(1.1, 1.1, 1);\r\n  transform: scale3d(1.1, 1.1, 1);\r\n}\r\n.ban-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 25%;\r\n  background: rgb(254, 145, 38);\r\n  padding: 10px 30px;\r\n}\r\n.ban-text1 {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 25%;\r\n  background: rgb(254, 145, 38);\r\n  padding: 10px 30px;\r\n}\r\n.ban-text h4 {\r\n  font-size: 22px;\r\n  color: #fff;\r\n}\r\n.ban-text1 h4 {\r\n  font-size: 22px;\r\n  color: #fff;\r\n}\r\n.ban-text2 h4 {\r\n  font-size: 1.5em;\r\n  color: #fff;\r\n}\r\n.ban-text2 span {\r\n  display: block;\r\n  line-height: 1.5em;\r\n}\r\n.newproducts-w3agile {\r\n  padding: 5em 0;\r\n  background: #f5f5f5;\r\n}\r\n.breadcrumb1 li span {\r\n  left: 0em;\r\n  padding-right: 1em;\r\n  color: #3399cc;\r\n}\r\n.breadcrumbs {\r\n  padding: 1.5em 0;\r\n  background: #f5f5f5;\r\n}\r\n.breadcrumb {\r\n  margin-bottom: 0 !important;\r\n  padding: 0 !important;\r\n}\r\n.breadcrumb1 li {\r\n  font-size: 1em;\r\n  color: #999;\r\n}\r\n.breadcrumb1 li a {\r\n  color: #3399cc;\r\n  text-decoration: none;\r\n}\r\n/*-- checkout --*/\r\n.checkout h2 {\r\n  font-size: 1em;\r\n  color: #212121;\r\n  text-transform: uppercase;\r\n  margin: 0 0 3em;\r\n}\r\n.checkout h2 span {\r\n  color: #3399cc;\r\n}\r\ntable.timetable_sub {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.timetable_sub thead {\r\n  background: #004284;\r\n}\r\n.timetable_sub th {\r\n  background: #68d6c1;\r\n  color: #fff !important;\r\n  text-transform: capitalize;\r\n  font-size: 13px;\r\n  border-right: 1px solid #68d6c1;\r\n}\r\n.timetable_sub th,\r\n.timetable_sub td {\r\n  text-align: center;\r\n  padding: 7px;\r\n  font-size: 14px;\r\n  color: #212121;\r\n}\r\n.timetable_sub td {\r\n  border: 1px solid #cdcdcd;\r\n}\r\ntd.invert-image a img {\r\n  width: 30%;\r\n  margin: 0 auto;\r\n}\r\n/*-- quantity-starts --*/\r\n.value-minus,\r\n.value-plus {\r\n  height: 40px;\r\n  line-height: 24px;\r\n  width: 40px;\r\n  margin-right: 3px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  position: relative;\r\n  font-size: 18px;\r\n  color: #fff;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  border: 1px solid #b2b2b2;\r\n  vertical-align: bottom;\r\n}\r\n.quantity-select .entry.value-minus:before,\r\n.quantity-select .entry.value-plus:before {\r\n  content: '';\r\n  width: 13px;\r\n  height: 2px;\r\n  background: #000;\r\n  left: 50%;\r\n  margin-left: -7px;\r\n  top: 50%;\r\n  margin-top: -0.5px;\r\n  position: absolute;\r\n}\r\n.quantity-select .entry.value-plus:after {\r\n  content: '';\r\n  height: 13px;\r\n  width: 2px;\r\n  background: #000;\r\n  left: 50%;\r\n  margin-left: -1.4px;\r\n  top: 50%;\r\n  margin-top: -6.2px;\r\n  position: absolute;\r\n}\r\n.value {\r\n  cursor: default;\r\n  width: 40px;\r\n  height: 40px;\r\n  padding: 8px 0px;\r\n  color: #a9a9a9;\r\n  line-height: 24px;\r\n  border: 1px solid #e5e5e5;\r\n  background-color: #e5e5e5;\r\n  text-align: center;\r\n  display: inline-block;\r\n  margin-right: 3px;\r\n}\r\n.quantity-select .entry.value-minus:hover,\r\n.quantity-select .entry.value-plus:hover {\r\n  background: #e5e5e5;\r\n}\r\n.quantity-select .entry.value-minus {\r\n  margin-left: 0;\r\n}\r\n/*-- quantity-end --*/\r\n.checkout-left-basket h4 {\r\n  padding: 1em;\r\n  background: #68d6c1;\r\n  font-size: 1.1em;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  margin: 0 0 1em;\r\n}\r\n.checkout-left {\r\n  margin: 2em 0 0;\r\n}\r\n.checkout-left-basket ul li {\r\n  list-style-type: none;\r\n  margin-bottom: 1em;\r\n  font-size: 14px;\r\n  color: #999;\r\n}\r\n.checkout-left-basket {\r\n  float: left;\r\n  width: 25%;\r\n}\r\n.checkout-right-basket {\r\n  float: right;\r\n  margin: 8em 0 0 0em;\r\n}\r\n.checkout-left-basket ul li span {\r\n  float: right;\r\n}\r\n.checkout-left-basket ul li:nth-child(5) {\r\n  font-size: 1em;\r\n  color: #212121;\r\n  font-weight: 600;\r\n  padding: 1em 0;\r\n  border-top: 1px solid #ddd;\r\n  border-bottom: 1px solid #ddd;\r\n  margin: 2em 0 0;\r\n}\r\n.checkout-right-basket a {\r\n  padding: 10px 30px;\r\n  color: #fff;\r\n  font-size: 1em;\r\n  background: #212121;\r\n  text-decoration: none;\r\n}\r\n.checkout-right-basket a:hover {\r\n  background: #68d6c1;\r\n}\r\n.checkout-right-basket a span {\r\n  left: -0.5em;\r\n  top: 0.1em;\r\n}\r\n.checkout {\r\n  padding: 5em 0;\r\n}\r\n/*-- //checkout --*/\r\n/*-- faq --*/\r\nh3.w3ls-title.w3ls-title1 {\r\n  text-align: center;\r\n  margin: 0 0 1.5em;\r\n  font-size: 2.5em;\r\n}\r\n.faq > li > a {\r\n  width: 100%;\r\n  display: block;\r\n  position: relative;\r\n  color: #fff;\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n}\r\n.faq-w3agile .faq li {\r\n  margin-top: 2em;\r\n  list-style-type: decimal;\r\n  padding-left: 0.5em;\r\n}\r\n.faq-w3agile .faq > li > a {\r\n  color: #999;\r\n}\r\n.faq-w3agile .faq li li.subitem1 {\r\n  display: block;\r\n  margin-top: 1em;\r\n}\r\n.faq-w3agile {\r\n  padding: 5em 0;\r\n}\r\nul.faq {\r\n  margin-top: 5em;\r\n}\r\n/*-- //faq-page --*/\r\n/*-- single --*/\r\n.agileinfo_single h2 {\r\n  font-size: 1.8em;\r\n  color: #212121;\r\n  line-height: 1.5em;\r\n  text-transform: uppercase;\r\n  margin-bottom: 1em;\r\n}\r\n.agileinfo_single_left {\r\n  padding: 2em;\r\n  box-shadow: 0px 0px 5px #b2afaf;\r\n}\r\n/*-- Ratings --*/\r\n.rating1 {\r\n  direction: ltr;\r\n}\r\n.starRating:not(old) {\r\n  display: inline-block;\r\n  height: 17px;\r\n  width: 100px;\r\n  overflow: hidden;\r\n}\r\n.starRating:not(old) > input {\r\n  margin-right: -26%;\r\n  opacity: 0;\r\n}\r\n.starRating:not(old) > label {\r\n  float: right;\r\n  background: url(/assets/images/star.png);\r\n  background-size: contain;\r\n  margin-right: 2px;\r\n}\r\n.starRating:not(old) > label:before {\r\n  content: '';\r\n  display: block;\r\n  width: 16px;\r\n  height: 16px;\r\n  background: url(/assets/images/star1.png);\r\n  background-size: contain;\r\n  opacity: 0;\r\n  transition: opacity 0.2s linear;\r\n}\r\n.starRating:not(old) > label:hover:before,\r\n.starRating:not(old) > label:hover ~ label:before,\r\n.starRating:not(:hover) > :checked ~ label:before {\r\n  opacity: 1;\r\n}\r\n/*-- //Ratings --*/\r\n.agileinfo_single_right {\r\n  padding-left: 5em;\r\n}\r\n.agileinfo_single_right_snipcart {\r\n  margin: 0 0 2em;\r\n}\r\n.agileinfo_single_right_details {\r\n  margin: 0 !important;\r\n  width: 25% !important;\r\n}\r\n.w3agile_description h4 {\r\n  font-size: 1em;\r\n  color: #212121;\r\n  text-transform: uppercase;\r\n}\r\n.w3agile_description p {\r\n  font-size: 14px;\r\n  color: #999;\r\n  line-height: 2em;\r\n  margin: 0.5em 0 0;\r\n  width: 80%;\r\n}\r\n.w3agile_description {\r\n  margin: 2em 0;\r\n}\r\n.w3ls_w3l_banner_nav_right_grid_popular {\r\n  background: #f5f5f5;\r\n  padding: 5em 0 !important;\r\n}\r\n/*-- //single --*/\r\n.brands {\r\n  padding: 5em 0;\r\n  background: #eed3b6;\r\n}\r\n.brands-w3l {\r\n  text-align: center;\r\n}\r\n.brands-w3l p a {\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  color: #39c;\r\n  background: #fff;\r\n  padding: 16px;\r\n  display: block;\r\n  border: 1px solid #e1e1e1;\r\n}\r\n.brands-w3l p a:hover {\r\n  box-shadow: 0 0 6px 1px #b6b6b6;\r\n}\r\n.brands-agile-1 {\r\n  margin: 20px 0;\r\n}\r\n.brands-agile {\r\n  margin-top: 5em;\r\n}\r\n/*-- products --*/\r\n.products {\r\n  padding: 5em 0;\r\n}\r\n.sorting {\r\n  float: right;\r\n  width: 35%;\r\n}\r\n.sorting-left {\r\n  float: right;\r\n  margin-right: 2em;\r\n  width: 25%;\r\n}\r\nselect#country,\r\nselect#country1 {\r\n  border: 1px solid #212121;\r\n  outline: none;\r\n  font-size: 14px;\r\n  color: #212121;\r\n  padding: 0.5em;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.products-right-grids {\r\n  margin-bottom: 2em;\r\n}\r\n.numbering {\r\n  text-align: right;\r\n}\r\nul.paging {\r\n  margin: 4em auto 0;\r\n}\r\n.paging > .active > a,\r\n.paging > .active > a:hover {\r\n  background-color: #ffc229;\r\n  border-color: #edb62b;\r\n}\r\n.pagination > li > a {\r\n  color: #212121;\r\n}\r\n.categories,\r\n.new-products {\r\n  border: 1px solid #999;\r\n}\r\n.categories h2 {\r\n  font-size: 1.5em;\r\n  color: #212121;\r\n  margin: 0;\r\n  padding: 0.5em;\r\n  background: #f5f5f5;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  letter-spacing: 5px;\r\n}\r\n.filter-price h3 {\r\n  background: none;\r\n}\r\n.categories ul.cate,\r\n.new-products-grids {\r\n  padding: 2em;\r\n}\r\n.categories ul li {\r\n  display: block;\r\n  color: #999;\r\n  font-size: 14px;\r\n  margin-bottom: 1em;\r\n}\r\n.categories ul li a {\r\n  color: #999;\r\n  text-decoration: none;\r\n}\r\n.categories ul li a:hover {\r\n  color: #3399cc;\r\n}\r\n.categories ul li span {\r\n  float: right;\r\n}\r\nul.cate ul {\r\n  margin-left: 2em;\r\n}\r\nul.dropdown-menu1 li {\r\n  display: block;\r\n  font-size: 14px;\r\n}\r\nul.dropdown-menu1 li a {\r\n  color: #212121;\r\n  text-decoration: none;\r\n}\r\ninput#amount {\r\n  outline: none;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.new-products-grid-left {\r\n  float: left;\r\n  width: 35%;\r\n}\r\n.new-products-grid-right {\r\n  float: right;\r\n  width: 60%;\r\n}\r\n/*-- //products --*/\r\n/*-- about --*/\r\n.about,\r\n.about-team,\r\n.contact,\r\n.codes {\r\n  padding: 5em 0;\r\n}\r\nh3.w3_agile_header,\r\nh2.w3_agile_header {\r\n  text-align: center;\r\n  color: #212121;\r\n  padding-bottom: 0.5em;\r\n  position: relative;\r\n  font-size: 2.5em;\r\n  text-transform: uppercase;\r\n}\r\nh3.w3_agile_header:after,\r\nh2.w3_agile_header:after {\r\n  content: '';\r\n  background: #68d6c1;\r\n  height: 2px;\r\n  width: 15%;\r\n  position: absolute;\r\n  bottom: 0%;\r\n  left: 43%;\r\n}\r\n.icons {\r\n  margin: 50px 0;\r\n}\r\n.about-agileinfo {\r\n  margin-top: 4em;\r\n}\r\n.about .grid-top h4 {\r\n  font-size: 1.5em;\r\n  color: #222;\r\n  letter-spacing: 4px;\r\n}\r\n.about img {\r\n  width: 100%;\r\n}\r\n.about-w3imgs {\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n.about .grid-top p {\r\n  font-size: 1em;\r\n  color: #999;\r\n  line-height: 1.8em;\r\n  margin: 1em 0 2.5em;\r\n}\r\n.about .grid-top p.top {\r\n  margin: 1em 0;\r\n}\r\n.offic-time {\r\n  text-align: center;\r\n}\r\n.time-top {\r\n  padding: 1em;\r\n  background-color: #68d6c1;\r\n}\r\n.time-top h4 {\r\n  font-size: 1.7em;\r\n  color: #fff;\r\n}\r\n.time-bottom {\r\n  padding: 1.6em 2em;\r\n  background-color: #212121;\r\n}\r\n.time-bottom h5 {\r\n  font-size: 1.1em;\r\n  color: #fff;\r\n  line-height: 1.8em;\r\n  letter-spacing: 1px;\r\n}\r\n.time-bottom p {\r\n  font-size: 1em;\r\n  color: #bbbbbb;\r\n  margin-top: 0.5em;\r\n  line-height: 1.8em;\r\n}\r\n/*-- //about-page --*/\r\n.testi {\r\n  width: 100%;\r\n  margin-top: 3em;\r\n  position: relative;\r\n}\r\n.testi h3.w3ls-title1 {\r\n  text-align: left;\r\n  font-size: 2.5em;\r\n}\r\n.testi h4 {\r\n  color: #ffffff;\r\n  font-size: 1.4em;\r\n  letter-spacing: 1px;\r\n}\r\n.testi p {\r\n  font-style: italic;\r\n  color: #000;\r\n  font-size: 1em;\r\n  margin-top: 1em;\r\n  line-height: 1.5em;\r\n  font-weight: 300;\r\n}\r\n.testi-subscript p {\r\n  margin: 1em 2.8em 0 0;\r\n}\r\n.testi p a {\r\n  font-size: 1em;\r\n  font-weight: 600;\r\n  color: #000;\r\n  margin: 0 5px;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: 0.5s all;\r\n}\r\n.testi p a:hover {\r\n  color: #fff;\r\n}\r\n.testi-subscript {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n.testi span.w3-agilesub {\r\n  position: absolute;\r\n  background: url(/assets/images/icon3.png) no-repeat 0px 0px;\r\n  display: block;\r\n  width: 30px;\r\n  height: 29px;\r\n  top: 0%;\r\n  right: 0%;\r\n}\r\n.testi-slider {\r\n  padding: 4em 2em 3em;\r\n  background: #68d6c1;\r\n  margin-top: 2em;\r\n}\r\n/*-- social-icons --*/\r\n.w3_agile_social_icons ul li {\r\n  display: inline-block;\r\n}\r\n.icon {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  overflow: hidden;\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.icon-cube {\r\n  position: relative;\r\n  -webkit-perspective: 100px;\r\n  perspective: 100px;\r\n  overflow: visible;\r\n}\r\n/*-- agileits --*/\r\n.icon-cube::before,\r\n.icon-cube::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: FontAwesome;\r\n  font-size: 1em;\r\n  transition: all 0.3s;\r\n  line-height: 2.6em;\r\n}\r\n.icon-cube::before {\r\n  z-index: 2;\r\n  background-color: #fff;\r\n}\r\n.icon-cube::after {\r\n  z-index: 1;\r\n  opacity: 0;\r\n  -webkit-transform: translateY(25px) rotateX(-90deg);\r\n  transform: translateY(25px) rotateX(-90deg);\r\n}\r\n.icon-cube:hover::before {\r\n  opacity: 0;\r\n  -webkit-transform: translateY(-25px) rotateX(90deg);\r\n  transform: translateY(-25px) rotateX(90deg);\r\n}\r\n.icon-cube:hover::after {\r\n  opacity: 1;\r\n  -webkit-transform: rotateX(0);\r\n  transform: rotateX(0);\r\n}\r\n/*-- facebook --*/\r\n/*-- w3layouts --*/\r\n.icon-cube.agile_facebook::before,\r\n.icon-cube.agile_facebook::after {\r\n  content: '\\f09a';\r\n  color: #3b5998;\r\n}\r\n.icon-cube.agile_facebook::after {\r\n  background-color: #3b5998;\r\n  color: #fff;\r\n}\r\n/*-- rss --*/\r\n.icon-cube.agile_rss::before,\r\n.icon-cube.agile_rss::after {\r\n  content: '\\f09e';\r\n  color: #f26522;\r\n}\r\n.icon-cube.agile_rss::after {\r\n  background-color: #f26522;\r\n  color: #fff;\r\n}\r\n/*-- instagram --*/\r\n.icon-cube.agile_instagram::before,\r\n.icon-cube.agile_instagram::after {\r\n  content: '\\f16d';\r\n  color: #833ab4;\r\n}\r\n.icon-cube.agile_instagram::after {\r\n  background-color: #833ab4;\r\n  color: #fff;\r\n}\r\n/*-- t --*/\r\n.icon-cube.agile_t::before,\r\n.icon-cube.agile_t::after {\r\n  content: '\\f173';\r\n  color: #35465c;\r\n}\r\n.icon-cube.agile_t::after {\r\n  background-color: #35465c;\r\n  color: #fff;\r\n}\r\n/*-- //social-icons --*/\r\n/*-- icons --*/\r\n.codes a {\r\n  color: #999;\r\n}\r\n.icon-box {\r\n  padding: 8px 15px;\r\n  background: rgba(149, 149, 149, 0.18);\r\n  margin: 1em 0 1em 0;\r\n  border: 5px solid #ffffff;\r\n  text-align: left;\r\n  box-sizing: border-box;\r\n  font-size: 13px;\r\n  transition: 0.5s all;\r\n  -webkit-transition: 0.5s all;\r\n  -o-transition: 0.5s all;\r\n  -ms-transition: 0.5s all;\r\n  -moz-transition: 0.5s all;\r\n  cursor: pointer;\r\n}\r\n.icon-box:hover {\r\n  background: #000;\r\n  transition: 0.5s all;\r\n  -webkit-transition: 0.5s all;\r\n  -o-transition: 0.5s all;\r\n  -ms-transition: 0.5s all;\r\n  -moz-transition: 0.5s all;\r\n}\r\n.icon-box:hover i.fa {\r\n  color: #fff !important;\r\n}\r\n.icon-box:hover a.agile-icon {\r\n  color: #fff !important;\r\n}\r\n.codes .bs-glyphicons li {\r\n  float: left;\r\n  width: 12.5%;\r\n  height: 115px;\r\n  padding: 10px;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  list-style-type: none;\r\n}\r\n.codes .bs-glyphicons .glyphicon {\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n}\r\n.codes .glyphicon {\r\n  position: relative;\r\n  top: 1px;\r\n  display: inline-block;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  color: #777;\r\n}\r\n.codes .bs-glyphicons .glyphicon-class {\r\n  display: block;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n}\r\nh4.m-sing {\r\n  text-align: left;\r\n}\r\nh3.icon-subheading {\r\n  font-size: 28px;\r\n  color: #68d6c1 !important;\r\n  margin: 30px 0 15px;\r\n  font-weight: 600;\r\n  letter-spacing: 2px;\r\n}\r\nh3.agileits-icons-title {\r\n  text-align: center;\r\n  font-size: 33px;\r\n  color: #222222;\r\n  font-weight: 600;\r\n  letter-spacing: 2px;\r\n}\r\n.icons a {\r\n  color: #999;\r\n}\r\n.icon-box i {\r\n  margin-right: 10px !important;\r\n  font-size: 20px !important;\r\n  color: #282a2b !important;\r\n}\r\n.bs-glyphicons li {\r\n  float: left;\r\n  width: 18%;\r\n  height: 115px;\r\n  padding: 10px;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  list-style-type: none;\r\n  background: rgba(149, 149, 149, 0.18);\r\n  margin: 1%;\r\n}\r\n.bs-glyphicons .glyphicon {\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n  color: #282a2b;\r\n}\r\n.glyphicon {\r\n  position: relative;\r\n  top: 1px;\r\n  display: inline-block;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  color: #777;\r\n}\r\n.bs-glyphicons .glyphicon-class {\r\n  display: block;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n}\r\n@media (max-width: 991px) {\r\n  h3.agileits-icons-title {\r\n    font-size: 28px;\r\n  }\r\n  h3.icon-subheading {\r\n    font-size: 22px;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  h3.agileits-icons-title {\r\n    font-size: 28px;\r\n  }\r\n  h3.icon-subheading {\r\n    font-size: 25px;\r\n  }\r\n  .row {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n  .icon-box {\r\n    margin: 0;\r\n  }\r\n}\r\n@media (max-width: 640px) {\r\n  .icon-box {\r\n    float: left;\r\n    width: 50%;\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  .bs-glyphicons li {\r\n    width: 31%;\r\n  }\r\n  .icon-box {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n}\r\n@media (max-width: 414px) {\r\n  h3.agileits-icons-title {\r\n    font-size: 23px;\r\n  }\r\n  h3.icon-subheading {\r\n    font-size: 18px;\r\n  }\r\n  .bs-glyphicons li {\r\n    width: 31.33%;\r\n  }\r\n}\r\n@media (max-width: 384px) {\r\n  .icon-box {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n}\r\n/*-- //icons --*/\r\n.w3_wthree_agileits_icons.main-grid-border {\r\n  padding: 5em 0;\r\n}\r\n/*-----start-responsive-design------*/\r\n@media (max-width: 1680px) {\r\n}\r\n@media (max-width: 1600px) {\r\n}\r\n@media (max-width: 1440px) {\r\n}\r\n@media (max-width: 1366px) {\r\n}\r\n@media (max-width: 1280px) {\r\n}\r\n@media (max-width: 1080px) {\r\n  #PPMiniCart {\r\n    left: 42% !important;\r\n  }\r\n  #Awesome h4 {\r\n    padding: 1.9em 0 0;\r\n  }\r\n  .w3ls_logo_products_left h1 a {\r\n    font-size: 34px;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 81%;\r\n  }\r\n  .navbar-nav > li {\r\n    margin-left: 8px;\r\n  }\r\n  .nav > li > a {\r\n    padding: 10px 8px !important;\r\n  }\r\n  .top-brands h2,\r\n  .newproducts-w3agile h3,\r\n  .login h2,\r\n  .register h2,\r\n  .faq-w3agile h3,\r\n  .brands h3 {\r\n    font-size: 2em;\r\n  }\r\n  .w3_footer_grid h3 {\r\n    font-size: 1.4em;\r\n  }\r\n  .products-right {\r\n    padding: 0;\r\n  }\r\n  .snipcart-details {\r\n    width: 81%;\r\n  }\r\n  h3.w3_agile_header,\r\n  h2.w3_agile_header {\r\n    font-size: 2em;\r\n  }\r\n  .w3_agileits_contact_grid_right {\r\n    padding: 0 2em 0 6em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 65%;\r\n  }\r\n  .about-team-grids {\r\n    width: 24.4%;\r\n  }\r\n  .about-team-grids h4 {\r\n    font-size: 0.9em;\r\n  }\r\n  .about-team-grids:hover .caption {\r\n    top: 42.2%;\r\n  }\r\n  .testi h4 {\r\n    font-size: 1.1em;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n}\r\n@media (max-width: 991px) {\r\n  .w3l_offers p {\r\n    font-size: 14px;\r\n  }\r\n  .w3l_offers {\r\n    width: 52%;\r\n  }\r\n  .agile-login {\r\n    padding: 6px 0;\r\n  }\r\n  .w3view-cart {\r\n    height: 36px;\r\n  }\r\n  .agileits_header {\r\n    padding: 12px 0 8px;\r\n  }\r\n  .w3ls_logo_products_left h1 a {\r\n    font-size: 30px;\r\n  }\r\n  i.fa.fa-phone {\r\n    margin-right: 7px;\r\n    font-size: 15px;\r\n  }\r\n  ul.phone_email li {\r\n    font-size: 13px;\r\n  }\r\n  .w3ls_logo_products_left1 {\r\n    margin-top: 0;\r\n    width: 38%;\r\n  }\r\n  .w3l_search {\r\n    width: 27%;\r\n    margin: 0em 0 0em 0em;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 76%;\r\n  }\r\n  .navbar-default .navbar-nav > li > a {\r\n    font-size: 14px;\r\n  }\r\n  .nav > li > a {\r\n    padding: 10px 2px !important;\r\n  }\r\n  .navbar-nav > li {\r\n    margin-left: 5px;\r\n  }\r\n  .navbar {\r\n    min-height: 43px;\r\n  }\r\n  .top_brand_left {\r\n    float: left;\r\n    width: 33.33%;\r\n  }\r\n  .agile_top_brand_left_grid1 img {\r\n    max-width: 100% !important ;\r\n  }\r\n  .brands-agile-1 {\r\n    margin: 0;\r\n  }\r\n  .w3layouts-brand {\r\n    float: left;\r\n    width: 33.33%;\r\n    margin-bottom: 3%;\r\n  }\r\n  .top_brand_left-1 {\r\n    width: 50%;\r\n    float: left;\r\n    margin-bottom: 3%;\r\n  }\r\n  .newproducts-w3agile {\r\n    padding: 3em 0 2em;\r\n  }\r\n  .footer {\r\n    padding: 3em 0 2em;\r\n  }\r\n  .w3_footer_grid {\r\n    float: left;\r\n    width: 50%;\r\n    margin-bottom: 1em;\r\n  }\r\n  .footer-copy p {\r\n    margin: 1.5em 0 0;\r\n  }\r\n  .ban-bottom3 {\r\n    margin: 2em 0;\r\n  }\r\n  .products-left {\r\n    padding: 0;\r\n    margin-bottom: 24px;\r\n  }\r\n  .w3_agileits_contact_grid_right {\r\n    padding: 0 1em 0 1em;\r\n    margin-top: 2em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    right: 6%;\r\n    width: 38%;\r\n  }\r\n  .about-w3imgs {\r\n    float: left;\r\n    width: 33.33%;\r\n  }\r\n  .about-wthree-grids {\r\n    margin-top: 2em;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 2.5em;\r\n  }\r\n  .about-slid-info {\r\n    width: 100%;\r\n  }\r\n  .about-team-grids {\r\n    margin-left: 16px;\r\n    width: 47%;\r\n    float: left;\r\n    padding: 2em 2em;\r\n    margin-bottom: 20px;\r\n  }\r\n  .login-form-grids {\r\n    width: 65%;\r\n  }\r\n  .login h4 {\r\n    font-size: 1.3em;\r\n  }\r\n  .timetable_sub th,\r\n  .timetable_sub td {\r\n    font-size: 12px;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 34%;\r\n  }\r\n  .agileinfo_single_left {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n  .agileinfo_single_right {\r\n    padding-left: 2em;\r\n    float: left;\r\n    width: 60%;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 1.4em;\r\n  }\r\n  .w3agile_description p {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  .agileinfo_single_right_details {\r\n    width: 36% !important;\r\n  }\r\n}\r\n@media (max-width: 800px) {\r\n}\r\n@media (max-width: 768px) {\r\n  #PPMiniCart {\r\n    left: 39% !important;\r\n  }\r\n  .top-brands {\r\n    padding: 3em 0;\r\n  }\r\n  p.w3l-ad {\r\n    width: 80%;\r\n  }\r\n  .brands {\r\n    padding: 3em 0;\r\n  }\r\n  .ban-bottom-w3l {\r\n    padding: 3em 0;\r\n  }\r\n  .brands-agile {\r\n    margin-top: 3em;\r\n  }\r\n  .grid_3.grid_5 {\r\n    margin-top: 3em;\r\n  }\r\n  .products {\r\n    padding: 3em 0;\r\n  }\r\n  ul.paging {\r\n    margin: 2em auto 0;\r\n  }\r\n  .about,\r\n  .about-team,\r\n  .contact,\r\n  .codes {\r\n    padding: 3em 0;\r\n  }\r\n  .about-agileinfo {\r\n    margin-top: 3em;\r\n  }\r\n  .team-agileitsinfo {\r\n    margin-top: 3em;\r\n  }\r\n  .register {\r\n    padding: 3em 0;\r\n  }\r\n  .login {\r\n    padding: 3em 0;\r\n  }\r\n  .checkout {\r\n    padding: 3em 0;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-nav > li {\r\n    float: none;\r\n    margin-left: 0px;\r\n    text-align: center;\r\n  }\r\n  .navbar-nav {\r\n    margin: 0;\r\n  }\r\n  .about,\r\n  .about-team,\r\n  .contact,\r\n  .codes {\r\n    padding: 3em 0;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 45%;\r\n  }\r\n  ul.faq {\r\n    margin-top: 3em;\r\n    padding: 0 1.5em;\r\n  }\r\n  .faq-w3agile {\r\n    padding: 3em 0em;\r\n  }\r\n  .navbar-nav .open .dropdown-menu {\r\n    background: #fff;\r\n  }\r\n  .navbar-default {\r\n    background: none;\r\n    border: none;\r\n    text-align: center;\r\n  }\r\n}\r\n@media (max-width: 736px) {\r\n  #PPMiniCart {\r\n    top: 140px !important;\r\n  }\r\n  #PPMiniCart form {\r\n    max-height: 185px !important;\r\n  }\r\n  .w3l_offers p {\r\n    font-size: 13px;\r\n  }\r\n  .w3ls_logo_products_left h1 a {\r\n    font-size: 26px;\r\n  }\r\n  .logo_products {\r\n    padding: 1.5em 0;\r\n  }\r\n  .skdslider {\r\n    height: 281px;\r\n  }\r\n  .snipcart-details {\r\n    width: 100%;\r\n  }\r\n  .agile_top_brand_left_grid1 p {\r\n    font-size: 13px;\r\n  }\r\n  .agile_top_brand_left_grid1 h4,\r\n  .agileinfo_single_right_snipcart h4 {\r\n    font-size: 0.9em;\r\n  }\r\n  .value {\r\n    width: 27px;\r\n    height: 27px;\r\n    padding: 8px 0px;\r\n    line-height: 13px;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    height: 27px;\r\n    line-height: 13px;\r\n    width: 27px;\r\n    font-size: 16px;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 1.3em;\r\n  }\r\n}\r\n@media (max-width: 667px) {\r\n  #PPMiniCart {\r\n    left: 36% !important;\r\n  }\r\n  #PPMiniCart form {\r\n    max-height: 165px !important;\r\n  }\r\n  .agile-login {\r\n    width: 37%;\r\n  }\r\n  .w3l_offers {\r\n    width: 56%;\r\n  }\r\n  .agile-login ul li {\r\n    padding: 0em 0.4em;\r\n  }\r\n  .w3ls_logo_products_left1 {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .w3ls_logo_products_left {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n  }\r\n  .w3ls_logo_products_left h1 a {\r\n    display: inline-block;\r\n  }\r\n  .w3l_search {\r\n    width: 100%;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 92%;\r\n  }\r\n  .logo_products {\r\n    padding: 1em 0;\r\n  }\r\n  .top_brand_left {\r\n    width: 100%;\r\n    margin-bottom: 3%;\r\n  }\r\n  .snipcart-details input.button {\r\n    width: 54%;\r\n  }\r\n  .agile_top_brands_grids {\r\n    margin-top: 2em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 51%;\r\n  }\r\n  .login-form-grids {\r\n    width: 71%;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 42%;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 1.2em;\r\n  }\r\n  .agileinfo_single_right_details {\r\n    width: 73% !important;\r\n    text-align: left;\r\n  }\r\n}\r\n@media (max-width: 640px) {\r\n  #PPMiniCart form {\r\n    max-height: 400px !important;\r\n  }\r\n  .w3l_offers {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .agile-login {\r\n    width: 38%;\r\n  }\r\n  .about .grid-top h4 {\r\n    font-size: 1.3em;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 2em;\r\n  }\r\n  .about-slid {\r\n    padding: 4em 0;\r\n  }\r\n  .about-slid p {\r\n    font-size: 0.9em;\r\n  }\r\n  .login-form-grids {\r\n    width: 76%;\r\n  }\r\n  .agileinfo_single_left {\r\n    padding: 1em;\r\n  }\r\n  .agileinfo_single_right {\r\n    padding-left: 1em;\r\n  }\r\n}\r\n@media (max-width: 600px) {\r\n  #PPMiniCart form {\r\n    width: 506px !important;\r\n  }\r\n  #PPMiniCart {\r\n    left: 41% !important;\r\n  }\r\n  #PPMiniCart ul {\r\n    width: 464px !important;\r\n  }\r\n  #PPMiniCart form {\r\n    max-height: 210px !important;\r\n  }\r\n  .agile-login {\r\n    width: 40%;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    height: 22px;\r\n    width: 22px;\r\n  }\r\n  .value {\r\n    width: 22px;\r\n    height: 22px;\r\n    line-height: 6px;\r\n  }\r\n}\r\n@media (max-width: 568px) {\r\n  #PPMiniCart form {\r\n    max-height: 100px !important;\r\n  }\r\n  .snipcart-details input.button {\r\n    width: 64%;\r\n  }\r\n  .agile-login {\r\n    width: 43%;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 91%;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 58%;\r\n  }\r\n  .about-team-grids {\r\n    width: 46%;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 49%;\r\n  }\r\n  td.invert-image a img {\r\n    width: 40%;\r\n  }\r\n  .timetable_sub th,\r\n  .timetable_sub td {\r\n    width: 50px;\r\n  }\r\n  .value {\r\n    width: 17px;\r\n    height: 17px;\r\n    line-height: 0px;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    height: 17px;\r\n    width: 17px;\r\n  }\r\n  .timetable_sub th,\r\n  .timetable_sub td {\r\n    padding: 7px 0px;\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  .top_brand_left-1 {\r\n    width: 100%;\r\n  }\r\n  .w3layouts-brand {\r\n    float: left;\r\n    width: 50%;\r\n    margin-bottom: 3%;\r\n  }\r\n  .nav-tabs > li > a {\r\n    font-size: 14px;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 90%;\r\n  }\r\n  .agile-login {\r\n    width: 50%;\r\n  }\r\n  .top-brands h2,\r\n  .newproducts-w3agile h3,\r\n  .login h2,\r\n  .register h2,\r\n  .faq-w3agile h3,\r\n  .brands h3 {\r\n    font-size: 1.7em;\r\n  }\r\n  p.w3l-ad {\r\n    width: 100%;\r\n  }\r\n  .grid_3.grid_5 h5 {\r\n    font-size: 18px;\r\n  }\r\n  .w3_footer_grid {\r\n    width: 100%;\r\n  }\r\n  .w3_footer_grid h3 {\r\n    margin-bottom: 1em;\r\n  }\r\n  .sorting {\r\n    width: 44%;\r\n  }\r\n  .sorting-left {\r\n    width: 42%;\r\n  }\r\n  h3.w3_agile_header,\r\n  h2.w3_agile_header {\r\n    font-size: 1.7em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 70%;\r\n  }\r\n  .about-team-grids {\r\n    width: 65%;\r\n    float: none;\r\n    margin: 0 auto 20px;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 1.7em;\r\n  }\r\n  .login-form-grids {\r\n    width: 90%;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 57%;\r\n  }\r\n  .checkout-right-basket {\r\n    margin: 3em 0 0 0em;\r\n  }\r\n  .agileinfo_single_left {\r\n    width: 100%;\r\n    margin-bottom: 2em;\r\n    padding: 3em 4em;\r\n  }\r\n  .agileinfo_single_right {\r\n    padding-left: 0em;\r\n    width: 100%;\r\n  }\r\n}\r\n@media (max-width: 414px) {\r\n  .agile-login {\r\n    width: 61%;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 87%;\r\n  }\r\n  .w3ls_logo_products_left {\r\n    margin: 12px 0;\r\n  }\r\n  .ban-text1 h4 {\r\n    font-size: 16px;\r\n  }\r\n  .ban-text1 {\r\n    left: 18%;\r\n  }\r\n  .footer-copy p {\r\n    font-size: 14px;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 80%;\r\n  }\r\n  .about-wthree-grids {\r\n    margin-top: 0em;\r\n  }\r\n  .about .grid-top h4 {\r\n    font-size: 1.1em;\r\n    line-height: 24px;\r\n  }\r\n  .about .grid-top p {\r\n    font-size: 0.875em;\r\n  }\r\n  .about-team-grids {\r\n    width: 80%;\r\n  }\r\n  .login-form-grids {\r\n    padding: 2em;\r\n  }\r\n  .checkout h2 {\r\n    font-size: 0.95em;\r\n    margin: 0 0 2em;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    margin: 4px 15px;\r\n    display: inline-block;\r\n  }\r\n  .value {\r\n    margin: 4px 15px;\r\n    display: inline-block;\r\n  }\r\n  .quantity-select .entry.value-minus {\r\n    margin-left: 15px;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 100%;\r\n  }\r\n  .agileinfo_single_left {\r\n    padding: 2em 2em;\r\n  }\r\n}\r\n@media (max-width: 384px) {\r\n  #PPMiniCart form {\r\n    width: 300px !important;\r\n    padding: 10px 10px 40px !important;\r\n  }\r\n  #PPMiniCart ul {\r\n    width: 278px !important;\r\n  }\r\n  #PPMiniCart .minicart-remove {\r\n    width: 11px !important;\r\n    height: 11px !important;\r\n    line-height: 0;\r\n    margin: 3px 0 0 !important;\r\n  }\r\n  #PPMiniCart {\r\n    left: 64% !important;\r\n  }\r\n  #PPMiniCart .minicart-item a {\r\n    font-size: 13px;\r\n  }\r\n  #PPMiniCart .minicart-attributes li {\r\n    font-size: 12px;\r\n  }\r\n  span.minicart-price {\r\n    font-size: 12px;\r\n  }\r\n  #PPMiniCart .minicart-quantity {\r\n    font-size: 11px;\r\n  }\r\n  .w3l_offers p {\r\n    font-size: 12px;\r\n  }\r\n  .agile-login {\r\n    width: 67%;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 86%;\r\n  }\r\n  .w3layouts-foot {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n  }\r\n  .payment-w3ls {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .payment-w3ls img {\r\n    display: inline-block;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 90%;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 1.5em;\r\n  }\r\n  .about-slid p {\r\n    font-size: 0.875em;\r\n  }\r\n  .login-form-grids {\r\n    width: 95%;\r\n  }\r\n  .checkout h2 {\r\n    font-size: 0.9em;\r\n  }\r\n}\r\n@media (max-width: 375px) {\r\n  .login-form-grids {\r\n    width: 100%;\r\n  }\r\n  .checkout h2 {\r\n    font-size: 0.875em;\r\n  }\r\n  .agileinfo_single_left {\r\n    padding: 1em 1em;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 1.1em;\r\n  }\r\n}\r\n@media (max-width: 320px) {\r\n  #PPMiniCart form {\r\n    width: 285px !important;\r\n  }\r\n  #PPMiniCart ul {\r\n    width: 263px !important;\r\n  }\r\n  #PPMiniCart {\r\n    left: 69% !important;\r\n  }\r\n  #PPMiniCart .minicart-subtotal {\r\n    padding-left: 5px !important;\r\n    font-size: 13px !important;\r\n  }\r\n  .agile-login {\r\n    width: 79%;\r\n  }\r\n  .w3l_offers p {\r\n    font-size: 10px;\r\n  }\r\n  .w3l_offers {\r\n    padding: 9px 0 5px;\r\n  }\r\n  .w3ls_logo_products_left {\r\n    margin: 3px 0 12px;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 83%;\r\n  }\r\n  .top-brands h2,\r\n  .newproducts-w3agile h3,\r\n  .login h2,\r\n  .register h2,\r\n  .faq-w3agile h3,\r\n  .brands h3 {\r\n    font-size: 1.4em;\r\n  }\r\n  .nav-tabs > li > a {\r\n    font-size: 12px;\r\n  }\r\n  div#myTabContent {\r\n    padding: 20px 20px;\r\n  }\r\n  p.w3l-ad {\r\n    font-size: 13px;\r\n    line-height: 24px;\r\n  }\r\n  .top_brand_left {\r\n    padding: 0;\r\n  }\r\n  .ban-text1 h4 {\r\n    font-size: 14px;\r\n  }\r\n  .ban-text1 {\r\n    left: 17%;\r\n    padding: 8px 18px;\r\n  }\r\n  .top-brands {\r\n    padding: 2em 0;\r\n  }\r\n  .grid_3.grid_5 {\r\n    margin-top: 2em;\r\n  }\r\n  .ban-bottom-w3l {\r\n    padding: 2em 0;\r\n  }\r\n  .brands {\r\n    padding: 2em 0;\r\n  }\r\n  .w3layouts-brand {\r\n    width: 46%;\r\n    padding: 0;\r\n    margin: 2%;\r\n  }\r\n  .brands-agile {\r\n    margin-top: 2em;\r\n  }\r\n  .newproducts-w3agile {\r\n    padding: 2em 0 1em;\r\n  }\r\n  .footer-copy p {\r\n    margin: 0 0 0;\r\n  }\r\n  .footer {\r\n    padding: 2em 0 1.5em;\r\n  }\r\n  .w3_footer_grid h3 {\r\n    font-size: 1.3em;\r\n  }\r\n  .w3_footer_grid {\r\n    padding: 0;\r\n  }\r\n  .sorting-left {\r\n    width: 47%;\r\n    margin-right: 2%;\r\n  }\r\n  .sorting {\r\n    width: 51%;\r\n  }\r\n  .products {\r\n    padding: 2em 0;\r\n  }\r\n  .categories ul.cate,\r\n  .new-products-grids {\r\n    padding: 1em;\r\n  }\r\n  ul.cate ul {\r\n    margin-left: 1.5em;\r\n  }\r\n  .about,\r\n  .about-team,\r\n  .contact,\r\n  .codes {\r\n    padding: 2em 0;\r\n  }\r\n  .agileits_w3layouts_map_pos1 {\r\n    padding: 1em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    padding: 1em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    top: 13%;\r\n  }\r\n  .agile_map iframe {\r\n    min-height: 430px;\r\n  }\r\n  h3.w3_agile_header,\r\n  h2.w3_agile_header {\r\n    font-size: 1.4em;\r\n  }\r\n  .about-agileinfo {\r\n    margin-top: 2em;\r\n  }\r\n  .about-wthree-grids {\r\n    padding: 0;\r\n  }\r\n  .about .grid-top h4 {\r\n    font-size: 1em;\r\n    letter-spacing: 1px;\r\n  }\r\n  .time-top h4 {\r\n    font-size: 1.5em;\r\n  }\r\n  .about-slid {\r\n    padding: 3em 0;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 1.3em;\r\n  }\r\n  .about-team-grids {\r\n    width: 100%;\r\n  }\r\n  .faq-w3agile {\r\n    padding: 2em 0em;\r\n  }\r\n  ul.faq {\r\n    margin-top: 2em;\r\n    padding: 0 1em;\r\n  }\r\n  .faq-w3agile .faq li {\r\n    margin-top: 1em;\r\n  }\r\n  .faq > li > a {\r\n    line-height: 23px;\r\n  }\r\n  .register {\r\n    padding: 2em 0;\r\n  }\r\n  .login-form-grids {\r\n    margin: 2em auto 0;\r\n  }\r\n  .login-form-grids {\r\n    padding: 1.2em;\r\n  }\r\n  .register-check-box label {\r\n    font-size: 13px;\r\n  }\r\n  .checkbox {\r\n    padding-left: 30px !important;\r\n  }\r\n  .login {\r\n    padding: 2em 0;\r\n  }\r\n  .login p a {\r\n    font-size: 1em;\r\n  }\r\n  .checkout h2 {\r\n    font-size: 0.875em;\r\n    line-height: 22px;\r\n  }\r\n  .checkout {\r\n    padding: 2em 0;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    margin: 4px 10px;\r\n  }\r\n  .quantity-select .entry.value-minus {\r\n    margin-left: 10px;\r\n  }\r\n  .value {\r\n    margin: 4px 10px;\r\n  }\r\n  td.invert-image a img {\r\n    width: 60%;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 0.95em;\r\n  }\r\n  .w3agile_description h4 {\r\n    font-size: 0.875em;\r\n  }\r\n  .w3agile_description {\r\n    margin: 1em 0;\r\n  }\r\n  .w3agile_description p {\r\n    font-size: 13px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/cartlist/cartlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/cartlist/cartlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\"></div>\n<div class=\"checkout\">\n  <div class=\"container\">\n    <h2>\n      購物車中有<span style=\"color: #68d6c1;\"\n        >{{ show_cart.length }}項商品</span\n      >\n    </h2>\n    <!-- 購物車清單 -->\n    <div class=\"checkout-right\">\n      <table class=\"timetable_sub\">\n        <thead>\n          <tr>\n            <th></th>\n            <th>商品名稱</th>\n            <th>商品圖片</th>\n            <th>售價</th>\n            <th>數量</th>\n            <th>刪除</th>\n          </tr>\n        </thead>\n        <ng-container *ngFor=\"let item of show_cart; let index = index\">\n          <tr>\n            <td>{{ index + 1 }}</td>\n            <td>\n              <a [routerLink]=\"['/products/', item?.id]\">{{\n                item?.product?.title\n              }}</a>\n            </td>\n            <td class=\"invert-image\">\n              <a [routerLink]=\"['/products/', item?.id]\"\n                ><img [src]=\"item.product.picture\" alt=\" \"\n              /></a>\n            </td>\n            <td>NT${{ item?.product?.sale_price }}</td>\n            <td>\n              <div class=\"quantity\">\n                <div class=\"quantity-select\">\n                  <a (click)=\"minor(index)\">\n                    <div class=\"entry value-minus\"></div>\n                  </a>\n                  <div class=\"entry value\">\n                    <span>{{ item?.item_amount }}</span>\n                  </div>\n                  <a (click)=\"plus(index)\">\n                    <div class=\"entry value-plus active\"></div> </a\n                  >\n                </div><span\n                    *ngIf=\"item.item_amount == item.product.stock\"\n                    style=\"color:red; z-index: 10;\"\n                    >已達庫存上限</span\n                  >\n              </div>\n            </td>\n            <td>\n              <img\n                src=\"assets/images/close_1.png\"\n                style=\"text-align:center;\"\n                (click)=\"delete_item(index)\"\n              />\n            </td>\n          </tr>\n        </ng-container>\n      </table>\n    </div>\n    <!-- //購物車清單 -->\n    <!-- 計算金額的小表格 -->\n    <div class=\"checkout-left\">\n      <div class=\"checkout-left-basket\">\n        <h4>訂單內容</h4>\n        <ul>\n          <ng-container *ngFor=\"let item of show_cart\">\n            <li *ngIf=\"item.item_amount !== 0\">\n              {{ item?.product?.title }}\n              <span\n                >NT${{ item?.product?.sale_price }} x {{ item?.item_amount }} =\n                NT${{ item?.product?.sale_price * item?.item_amount }}\n              </span>\n            </li>\n          </ng-container>\n          <li>----------------------------------------</li>\n          <li>\n            <strong\n              >總金額 <span>NT${{ total }}</span></strong\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- //計算金額的小表格 -->\n    <!-- 兩個按鈕 -->\n    <div class=\"checkout-right-basket\">\n      <a [routerLink]=\"['/products']\"\n        ><span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span\n        >繼續購物</a\n      >\n\n      <a [routerLink]=\"['/checkout']\"\n        ><span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span\n        >開始結帳</a\n      >\n    </div>\n    <!-- //兩個按鈕 -->\n    <div class=\"clearfix\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cartlist/cartlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/cartlist/cartlist.component.ts ***!
  \************************************************/
/*! exports provided: CartlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartlistComponent", function() { return CartlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartlistComponent = /** @class */ (function () {
    function CartlistComponent(cartService, productsService) {
        this.cartService = cartService;
        this.productsService = productsService;
        this.total = 0;
    }
    CartlistComponent.prototype.ngOnInit = function () {
        this.cartService.show_cart = [];
        this.total = 0;
        this.show();
    };
    CartlistComponent.prototype.show = function () {
        var _this = this;
        console.log('show cart');
        if (JSON.stringify(this.cart) !== '[]') {
            console.log('ee');
            var _loop_1 = function (i) {
                this_1.productsService
                    .getProduct(this_1.cart[i].id)
                    .subscribe(function (data) {
                    _this.cartService.show_cart[i] = {
                        id: _this.cart[i].id,
                        item_amount: _this.cart[i].item_amount,
                        product: data
                    };
                    _this.total +=
                        _this.show_cart[i].item_amount *
                            _this.show_cart[i].product.sale_price;
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.cart.length; i++) {
                _loop_1(i);
            }
            console.log('cart', this.cart);
            console.log('show_cart', this.show_cart);
        }
    };
    Object.defineProperty(CartlistComponent.prototype, "show_cart", {
        get: function () {
            return this.cartService.show_cart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartlistComponent.prototype, "cart", {
        get: function () {
            return this.cartService.cart;
        },
        enumerable: true,
        configurable: true
    });
    CartlistComponent.prototype.plus = function (index) {
        if (this.cartService.show_cart[index].item_amount <
            this.cartService.show_cart[index].product.stock) {
            this.cartService.cart[index].item_amount++;
            this.cartService.show_cart[index].item_amount++;
        }
    };
    CartlistComponent.prototype.minor = function (index) {
        if (this.cartService.cart[index].item_amount > 1) {
            this.cartService.cart[index].item_amount--;
            this.cartService.show_cart[index].item_amount--;
        }
    };
    CartlistComponent.prototype.delete_item = function (index) {
        this.cartService.delete_item(index);
    };
    CartlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cartlist',
            template: __webpack_require__(/*! ./cartlist.component.html */ "./src/app/cartlist/cartlist.component.html"),
            styles: [__webpack_require__(/*! ./cartlist.component.css */ "./src/app/cartlist/cartlist.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]])
    ], CartlistComponent);
    return CartlistComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li,\r\nol li {\r\n  font-size: 14px;\r\n}\r\np {\r\n  margin: 0;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na {\r\n  font-family: 'Raleway', sans-serif;\r\n  margin: 0;\r\n  font-weight: 700;\r\n}\r\nul,\r\nlabel {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody a:hover {\r\n  text-decoration: none;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n}\r\n.logo-nav-left1 ul li.active a.act {\r\n  color: #fff !important;\r\n}\r\n.multi-column-dropdown li a {\r\n  color: #999 !important;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  background-color: transparent;\r\n  color: #fff !important;\r\n}\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border: none;\r\n}\r\n.navbar {\r\n  position: relative;\r\n  min-height: 50px;\r\n  margin-bottom: 10px;\r\n  border: 1px solid transparent;\r\n}\r\n.nav .open > a,\r\n.nav .open > a:hover,\r\n.nav .open > a:focus {\r\n  color: #fff;\r\n}\r\n.navbar-default {\r\n  background: none;\r\n  border: none;\r\n}\r\n.navbar-collapse {\r\n  padding: 0;\r\n}\r\nul.multi-column-dropdown h6 {\r\n  font-size: 20px;\r\n  color: #68d6c1;\r\n  margin: 0 0 0em;\r\n  padding-bottom: 1em;\r\n  border-bottom: 1px solid #e4e4e4;\r\n  text-transform: capitalize;\r\n}\r\n.multi-column-dropdown li {\r\n  list-style-type: none;\r\n  margin: 14px 0;\r\n}\r\n.multi-column-dropdown li a {\r\n  display: block;\r\n  clear: both;\r\n  line-height: 1.428571429;\r\n  color: #999 !important;\r\n  white-space: normal;\r\n  font-weight: 500 !important;\r\n}\r\n.dropdown-menu.columns-3 {\r\n  min-width: 190px;\r\n  padding: 20px 30px;\r\n}\r\n.nav .open > a,\r\n.nav .open > a:hover,\r\n.nav .open > a:focus {\r\n  background: none;\r\n  border: none;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  background-color: transparent;\r\n}\r\n.nav > li > a:hover,\r\n.nav > li > a:focus {\r\n  background: none;\r\n  color: #fff !important;\r\n}\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  color: #fff;\r\n}\r\n.multi-gd-img img {\r\n  width: 100%;\r\n}\r\n.navigation-agileits {\r\n  background: #68d6c1;\r\n}\r\n.navbar-nav > li {\r\n  float: left;\r\n  margin-left: 17px;\r\n}\r\n.navbar-nav > li:nth-child(1) {\r\n  margin-left: 0px;\r\n}\r\n/*-- banner --*/\r\n.navbar-collapse {\r\n  padding: 0;\r\n  box-shadow: none;\r\n}\r\n.navbar {\r\n  margin-bottom: 0;\r\n  border: none;\r\n}\r\n.column div.agile_top_brand_left_grid {\r\n  position: relative;\r\n  margin: 0;\r\n}\r\n.agile_top_brand_left_grid figure {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: transparent;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n}\r\ndiv#myTabContent {\r\n  padding: 40px 40px;\r\n}\r\n.nav-tabs > li {\r\n  width: 50%;\r\n}\r\n.nav-tabs > li > a {\r\n  margin: 0 0px;\r\n  padding: 10px 53px;\r\n  line-height: 1.42857143;\r\n  font-size: 20px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  border: 0px solid transparent;\r\n  border-radius: 0px 0px 0 0;\r\n  color: #016773;\r\n}\r\n.nav-tabs > li > a:hover,\r\n.nav > li > a:focus {\r\n  text-decoration: none;\r\n  background: #68d6c1;\r\n  color: #fff;\r\n  border: 0px solid transparent;\r\n}\r\n.nav-tabs > li.active > a,\r\n.nav-tabs > li.active > a:hover,\r\n.nav-tabs > li.active > a:focus {\r\n  color: #fff;\r\n  background: #68d6c1;\r\n  border: 0px solid transparent;\r\n}\r\n.nav-tabs {\r\n  border-bottom: 1px solid #fff;\r\n}\r\n.grid_3.grid_5 {\r\n  margin-top: 5em;\r\n  border: 1px solid #bebebe;\r\n}\r\n.grid_3.grid_5 h5 {\r\n  font-size: 20px;\r\n  color: #000;\r\n  margin-bottom: 16px;\r\n}\r\np.w3l-ad {\r\n  font-size: 14px;\r\n  color: #777;\r\n  width: 42%;\r\n  line-height: 28px;\r\n}\r\n.agile_top_brands_grids {\r\n  margin-top: 40px;\r\n}\r\n.hover14.column {\r\n  border: 1px solid #c0bebe;\r\n}\r\n.stars {\r\n  text-align: center;\r\n  margin-bottom: 13px;\r\n}\r\ni.blue-star {\r\n  color: #3399cc;\r\n}\r\ni.gray-star {\r\n  color: #808080;\r\n}\r\n.ban-bottom-w3l {\r\n  padding: 5em 0;\r\n}\r\n.ban-bottom1 {\r\n  float: left;\r\n  width: 48%;\r\n  margin-right: 2%;\r\n}\r\n.ban-bottom2 {\r\n  float: left;\r\n  width: 48%;\r\n  margin-left: 2%;\r\n}\r\n.ban-img {\r\n  margin-top: 2.1em;\r\n}\r\n.ban-top {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.ban-top img {\r\n  transition: all 1s;\r\n  width: 100%;\r\n}\r\n.ban-top:hover img {\r\n  -webkit-transform: scale3d(1.1, 1.1, 1);\r\n  transform: scale3d(1.1, 1.1, 1);\r\n}\r\n.ban-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 25%;\r\n  background: rgb(254, 145, 38);\r\n  padding: 10px 30px;\r\n}\r\n.ban-text1 {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 25%;\r\n  background: rgb(254, 145, 38);\r\n  padding: 10px 30px;\r\n}\r\n.ban-text h4 {\r\n  font-size: 22px;\r\n  color: #fff;\r\n}\r\n.ban-text1 h4 {\r\n  font-size: 22px;\r\n  color: #fff;\r\n}\r\n.ban-text2 h4 {\r\n  font-size: 1.5em;\r\n  color: #fff;\r\n}\r\n.ban-text2 span {\r\n  display: block;\r\n  line-height: 1.5em;\r\n}\r\n.newproducts-w3agile {\r\n  padding: 5em 0;\r\n  background: #f5f5f5;\r\n}\r\n.breadcrumb1 li span {\r\n  left: 0em;\r\n  padding-right: 1em;\r\n  color: #3399cc;\r\n}\r\n.breadcrumbs {\r\n  padding: 1.5em 0;\r\n  background: #f5f5f5;\r\n}\r\n.breadcrumb {\r\n  margin-bottom: 0 !important;\r\n  padding: 0 !important;\r\n}\r\n.breadcrumb1 li {\r\n  font-size: 1em;\r\n  color: #999;\r\n}\r\n.breadcrumb1 li a {\r\n  color: #3399cc;\r\n  text-decoration: none;\r\n}\r\n/*-- checkout --*/\r\n.checkout h2 {\r\n  font-size: 1em;\r\n  color: #212121;\r\n  text-transform: uppercase;\r\n  margin: 0 0 3em;\r\n}\r\n.checkout h2 span {\r\n  color: #3399cc;\r\n}\r\ntable.timetable_sub {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.timetable_sub thead {\r\n  background: #004284;\r\n}\r\n.timetable_sub th {\r\n  background: #68d6c1;\r\n  color: #fff !important;\r\n  text-transform: capitalize;\r\n  font-size: 13px;\r\n  border: 1px solid #5ab3a2;\r\n  text-align: center;\r\n  width:30%;\r\n}\r\n.timetable_sub th,\r\n.timetable_sub td {\r\n  padding: 7px;\r\n  font-size: 14px;\r\n  color: #212121;\r\n}\r\n.timetable_sub td {\r\n  border: 1px solid #cdcdcd;\r\n  width: 75%;\r\n  padding-left: 2%;\r\n}\r\n.timetable_sub input[type=\"text\"], textarea {\r\n  width: 98%;\r\n}\r\n.timetable_sub span {\r\n  padding-right: 3%;\r\n}\r\ntd.invert-image a img {\r\n  width: 25%;\r\n  margin: 0 auto;\r\n}\r\n/*-- quantity-starts --*/\r\n.value-minus,\r\n.value-plus {\r\n  height: 40px;\r\n  line-height: 24px;\r\n  width: 40px;\r\n  margin-right: 3px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  position: relative;\r\n  font-size: 18px;\r\n  color: #fff;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  border: 1px solid #b2b2b2;\r\n  vertical-align: bottom;\r\n}\r\n.quantity-select .entry.value-minus:before,\r\n.quantity-select .entry.value-plus:before {\r\n  content: '';\r\n  width: 13px;\r\n  height: 2px;\r\n  background: #000;\r\n  left: 50%;\r\n  margin-left: -7px;\r\n  top: 50%;\r\n  margin-top: -0.5px;\r\n  position: absolute;\r\n}\r\n.quantity-select .entry.value-plus:after {\r\n  content: '';\r\n  height: 13px;\r\n  width: 2px;\r\n  background: #000;\r\n  left: 50%;\r\n  margin-left: -1.4px;\r\n  top: 50%;\r\n  margin-top: -6.2px;\r\n  position: absolute;\r\n}\r\n.value {\r\n  cursor: default;\r\n  width: 40px;\r\n  height: 40px;\r\n  padding: 8px 0px;\r\n  color: #a9a9a9;\r\n  line-height: 24px;\r\n  border: 1px solid #e5e5e5;\r\n  background-color: #e5e5e5;\r\n  text-align: center;\r\n  display: inline-block;\r\n  margin-right: 3px;\r\n}\r\n.quantity-select .entry.value-minus:hover,\r\n.quantity-select .entry.value-plus:hover {\r\n  background: #e5e5e5;\r\n}\r\n.quantity-select .entry.value-minus {\r\n  margin-left: 0;\r\n}\r\n/*-- quantity-end --*/\r\n.checkout-left-basket h4 {\r\n  padding: 1em;\r\n  background: #68d6c1;\r\n  font-size: 1.1em;\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  margin: 0 0 1em;\r\n}\r\n.checkout-left {\r\n  margin: 2em 0 0;\r\n}\r\n.checkout-left-basket ul li {\r\n  list-style-type: none;\r\n  margin-bottom: 1em;\r\n  font-size: 14px;\r\n  color: #999;\r\n}\r\n.checkout-left-basket {\r\n  float: left;\r\n  width: 25%;\r\n}\r\n.checkout-right-basket {\r\n  float: right;\r\n  margin: 8em 0 0 0em;\r\n}\r\n.checkout-left-basket ul li span {\r\n  float: right;\r\n}\r\n.checkout-left-basket ul li:nth-child(5) {\r\n  font-size: 1em;\r\n  color: #212121;\r\n  font-weight: 600;\r\n  padding: 1em 0;\r\n  border-top: 1px solid #ddd;\r\n  border-bottom: 1px solid #ddd;\r\n  margin: 2em 0 0;\r\n}\r\n.checkout-right-basket a {\r\n  padding: 10px 30px;\r\n  color: #fff;\r\n  font-size: 1em;\r\n  background: #212121;\r\n  text-decoration: none;\r\n}\r\n.checkout-right-basket a:hover {\r\n  background: #68d6c1;\r\n}\r\n.checkout-right-basket a span {\r\n  left: -0.5em;\r\n  top: 0.1em;\r\n}\r\n.checkout {\r\n  padding: 5em 0;\r\n}\r\n/*-- //checkout --*/\r\n/*-- faq --*/\r\nh3.w3ls-title.w3ls-title1 {\r\n  text-align: center;\r\n  margin: 0 0 1.5em;\r\n  font-size: 2.5em;\r\n}\r\n.faq > li > a {\r\n  width: 100%;\r\n  display: block;\r\n  position: relative;\r\n  color: #fff;\r\n  font-size: 1em;\r\n  font-weight: 400;\r\n  text-decoration: none;\r\n}\r\n.faq-w3agile .faq li {\r\n  margin-top: 2em;\r\n  list-style-type: decimal;\r\n  padding-left: 0.5em;\r\n}\r\n.faq-w3agile .faq > li > a {\r\n  color: #999;\r\n}\r\n.faq-w3agile .faq li li.subitem1 {\r\n  display: block;\r\n  margin-top: 1em;\r\n}\r\n.faq-w3agile {\r\n  padding: 5em 0;\r\n}\r\nul.faq {\r\n  margin-top: 5em;\r\n}\r\n/*-- //faq-page --*/\r\n/*-- single --*/\r\n.agileinfo_single h2 {\r\n  font-size: 1.8em;\r\n  color: #212121;\r\n  line-height: 1.5em;\r\n  text-transform: uppercase;\r\n  margin-bottom: 1em;\r\n}\r\n.agileinfo_single_left {\r\n  padding: 2em;\r\n  box-shadow: 0px 0px 5px #b2afaf;\r\n}\r\n/*-- Ratings --*/\r\n.rating1 {\r\n  direction: ltr;\r\n}\r\n.starRating:not(old) {\r\n  display: inline-block;\r\n  height: 17px;\r\n  width: 100px;\r\n  overflow: hidden;\r\n}\r\n.starRating:not(old) > input {\r\n  margin-right: -26%;\r\n  opacity: 0;\r\n}\r\n.starRating:not(old) > label {\r\n  float: right;\r\n  background: url(/assets/images/star.png);\r\n  background-size: contain;\r\n  margin-right: 2px;\r\n}\r\n.starRating:not(old) > label:before {\r\n  content: '';\r\n  display: block;\r\n  width: 16px;\r\n  height: 16px;\r\n  background: url(/assets/images/star1.png);\r\n  background-size: contain;\r\n  opacity: 0;\r\n  transition: opacity 0.2s linear;\r\n}\r\n.starRating:not(old) > label:hover:before,\r\n.starRating:not(old) > label:hover ~ label:before,\r\n.starRating:not(:hover) > :checked ~ label:before {\r\n  opacity: 1;\r\n}\r\n/*-- //Ratings --*/\r\n.agileinfo_single_right {\r\n  padding-left: 5em;\r\n}\r\n.agileinfo_single_right_snipcart {\r\n  margin: 0 0 2em;\r\n}\r\n.agileinfo_single_right_details {\r\n  margin: 0 !important;\r\n  width: 25% !important;\r\n}\r\n.w3agile_description h4 {\r\n  font-size: 1em;\r\n  color: #212121;\r\n  text-transform: uppercase;\r\n}\r\n.w3agile_description p {\r\n  font-size: 14px;\r\n  color: #999;\r\n  line-height: 2em;\r\n  margin: 0.5em 0 0;\r\n  width: 80%;\r\n}\r\n.w3agile_description {\r\n  margin: 2em 0;\r\n}\r\n.w3ls_w3l_banner_nav_right_grid_popular {\r\n  background: #f5f5f5;\r\n  padding: 5em 0 !important;\r\n}\r\n/*-- //single --*/\r\n.brands {\r\n  padding: 5em 0;\r\n  background: #eed3b6;\r\n}\r\n.brands-w3l {\r\n  text-align: center;\r\n}\r\n.brands-w3l p a {\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  color: #39c;\r\n  background: #fff;\r\n  padding: 16px;\r\n  display: block;\r\n  border: 1px solid #e1e1e1;\r\n}\r\n.brands-w3l p a:hover {\r\n  box-shadow: 0 0 6px 1px #b6b6b6;\r\n}\r\n.brands-agile-1 {\r\n  margin: 20px 0;\r\n}\r\n.brands-agile {\r\n  margin-top: 5em;\r\n}\r\n/*-- products --*/\r\n.products {\r\n  padding: 5em 0;\r\n}\r\n.sorting {\r\n  float: right;\r\n  width: 35%;\r\n}\r\n.sorting-left {\r\n  float: right;\r\n  margin-right: 2em;\r\n  width: 25%;\r\n}\r\nselect#country,\r\nselect#country1 {\r\n  border: 1px solid #212121;\r\n  outline: none;\r\n  font-size: 14px;\r\n  color: #212121;\r\n  padding: 0.5em;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n.products-right-grids {\r\n  margin-bottom: 2em;\r\n}\r\n.numbering {\r\n  text-align: right;\r\n}\r\nul.paging {\r\n  margin: 4em auto 0;\r\n}\r\n.paging > .active > a,\r\n.paging > .active > a:hover {\r\n  background-color: #ffc229;\r\n  border-color: #edb62b;\r\n}\r\n.pagination > li > a {\r\n  color: #212121;\r\n}\r\n.categories,\r\n.new-products {\r\n  border: 1px solid #999;\r\n}\r\n.categories h2 {\r\n  font-size: 1.5em;\r\n  color: #212121;\r\n  margin: 0;\r\n  padding: 0.5em;\r\n  background: #f5f5f5;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  letter-spacing: 5px;\r\n}\r\n.filter-price h3 {\r\n  background: none;\r\n}\r\n.categories ul.cate,\r\n.new-products-grids {\r\n  padding: 2em;\r\n}\r\n.categories ul li {\r\n  display: block;\r\n  color: #999;\r\n  font-size: 14px;\r\n  margin-bottom: 1em;\r\n}\r\n.categories ul li a {\r\n  color: #999;\r\n  text-decoration: none;\r\n}\r\n.categories ul li a:hover {\r\n  color: #3399cc;\r\n}\r\n.categories ul li span {\r\n  float: right;\r\n}\r\nul.cate ul {\r\n  margin-left: 2em;\r\n}\r\nul.dropdown-menu1 li {\r\n  display: block;\r\n  font-size: 14px;\r\n}\r\nul.dropdown-menu1 li a {\r\n  color: #212121;\r\n  text-decoration: none;\r\n}\r\ninput#amount {\r\n  outline: none;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.new-products-grid-left {\r\n  float: left;\r\n  width: 35%;\r\n}\r\n.new-products-grid-right {\r\n  float: right;\r\n  width: 60%;\r\n}\r\n/*-- //products --*/\r\n/*-- about --*/\r\n.about,\r\n.about-team,\r\n.contact,\r\n.codes {\r\n  padding: 5em 0;\r\n}\r\nh3.w3_agile_header,\r\nh2.w3_agile_header {\r\n  text-align: center;\r\n  color: #212121;\r\n  padding-bottom: 0.5em;\r\n  position: relative;\r\n  font-size: 2.5em;\r\n  text-transform: uppercase;\r\n}\r\nh3.w3_agile_header:after,\r\nh2.w3_agile_header:after {\r\n  content: '';\r\n  background: #3399cc;\r\n  height: 2px;\r\n  width: 15%;\r\n  position: absolute;\r\n  bottom: 0%;\r\n  left: 43%;\r\n}\r\n.icons {\r\n  margin: 50px 0;\r\n}\r\n.about-agileinfo {\r\n  margin-top: 4em;\r\n}\r\n.about .grid-top h4 {\r\n  font-size: 1.5em;\r\n  color: #222;\r\n  letter-spacing: 4px;\r\n}\r\n.about img {\r\n  width: 100%;\r\n}\r\n.about-w3imgs {\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n.about .grid-top p {\r\n  font-size: 1em;\r\n  color: #999;\r\n  line-height: 1.8em;\r\n  margin: 1em 0 2.5em;\r\n}\r\n.about .grid-top p.top {\r\n  margin: 1em 0;\r\n}\r\n.offic-time {\r\n  text-align: center;\r\n}\r\n.time-top {\r\n  padding: 1em;\r\n  background-color: #68d6c1;\r\n}\r\n.time-top h4 {\r\n  font-size: 1.7em;\r\n  color: #fff;\r\n}\r\n.time-bottom {\r\n  padding: 1.6em 2em;\r\n  background-color: #212121;\r\n}\r\n.time-bottom h5 {\r\n  font-size: 1.1em;\r\n  color: #fff;\r\n  line-height: 1.8em;\r\n  letter-spacing: 1px;\r\n}\r\n.time-bottom p {\r\n  font-size: 1em;\r\n  color: #bbbbbb;\r\n  margin-top: 0.5em;\r\n  line-height: 1.8em;\r\n}\r\n/*-- //about-page --*/\r\n.testi {\r\n  width: 100%;\r\n  margin-top: 3em;\r\n  position: relative;\r\n}\r\n.testi h3.w3ls-title1 {\r\n  text-align: left;\r\n  font-size: 2.5em;\r\n}\r\n.testi h4 {\r\n  color: #ffffff;\r\n  font-size: 1.4em;\r\n  letter-spacing: 1px;\r\n}\r\n.testi p {\r\n  font-style: italic;\r\n  color: #000;\r\n  font-size: 1em;\r\n  margin-top: 1em;\r\n  line-height: 1.5em;\r\n  font-weight: 300;\r\n}\r\n.testi-subscript p {\r\n  margin: 1em 2.8em 0 0;\r\n}\r\n.testi p a {\r\n  font-size: 1em;\r\n  font-weight: 600;\r\n  color: #000;\r\n  margin: 0 5px;\r\n  text-decoration: none;\r\n  text-transform: capitalize;\r\n  transition: 0.5s all;\r\n}\r\n.testi p a:hover {\r\n  color: #fff;\r\n}\r\n.testi-subscript {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n.testi span.w3-agilesub {\r\n  position: absolute;\r\n  background: url(/assets/images/icon3.png) no-repeat 0px 0px;\r\n  display: block;\r\n  width: 30px;\r\n  height: 29px;\r\n  top: 0%;\r\n  right: 0%;\r\n}\r\n.testi-slider {\r\n  padding: 4em 2em 3em;\r\n  background: #3399cc;\r\n  margin-top: 2em;\r\n}\r\n/*-- social-icons --*/\r\n.w3_agile_social_icons ul li {\r\n  display: inline-block;\r\n}\r\n.icon {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  overflow: hidden;\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.icon-cube {\r\n  position: relative;\r\n  -webkit-perspective: 100px;\r\n  perspective: 100px;\r\n  overflow: visible;\r\n}\r\n/*-- agileits --*/\r\n.icon-cube::before,\r\n.icon-cube::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: FontAwesome;\r\n  font-size: 1em;\r\n  transition: all 0.3s;\r\n  line-height: 2.6em;\r\n}\r\n.icon-cube::before {\r\n  z-index: 2;\r\n  background-color: #fff;\r\n}\r\n.icon-cube::after {\r\n  z-index: 1;\r\n  opacity: 0;\r\n  -webkit-transform: translateY(25px) rotateX(-90deg);\r\n  transform: translateY(25px) rotateX(-90deg);\r\n}\r\n.icon-cube:hover::before {\r\n  opacity: 0;\r\n  -webkit-transform: translateY(-25px) rotateX(90deg);\r\n  transform: translateY(-25px) rotateX(90deg);\r\n}\r\n.icon-cube:hover::after {\r\n  opacity: 1;\r\n  -webkit-transform: rotateX(0);\r\n  transform: rotateX(0);\r\n}\r\n/*-- facebook --*/\r\n/*-- w3layouts --*/\r\n.icon-cube.agile_facebook::before,\r\n.icon-cube.agile_facebook::after {\r\n  content: '\\f09a';\r\n  color: #3b5998;\r\n}\r\n.icon-cube.agile_facebook::after {\r\n  background-color: #3b5998;\r\n  color: #fff;\r\n}\r\n/*-- rss --*/\r\n.icon-cube.agile_rss::before,\r\n.icon-cube.agile_rss::after {\r\n  content: '\\f09e';\r\n  color: #f26522;\r\n}\r\n.icon-cube.agile_rss::after {\r\n  background-color: #f26522;\r\n  color: #fff;\r\n}\r\n/*-- instagram --*/\r\n.icon-cube.agile_instagram::before,\r\n.icon-cube.agile_instagram::after {\r\n  content: '\\f16d';\r\n  color: #833ab4;\r\n}\r\n.icon-cube.agile_instagram::after {\r\n  background-color: #833ab4;\r\n  color: #fff;\r\n}\r\n/*-- t --*/\r\n.icon-cube.agile_t::before,\r\n.icon-cube.agile_t::after {\r\n  content: '\\f173';\r\n  color: #35465c;\r\n}\r\n.icon-cube.agile_t::after {\r\n  background-color: #35465c;\r\n  color: #fff;\r\n}\r\n/*-- //social-icons --*/\r\n/*-- icons --*/\r\n.codes a {\r\n  color: #999;\r\n}\r\n.icon-box {\r\n  padding: 8px 15px;\r\n  background: rgba(149, 149, 149, 0.18);\r\n  margin: 1em 0 1em 0;\r\n  border: 5px solid #ffffff;\r\n  text-align: left;\r\n  box-sizing: border-box;\r\n  font-size: 13px;\r\n  transition: 0.5s all;\r\n  -webkit-transition: 0.5s all;\r\n  -o-transition: 0.5s all;\r\n  -ms-transition: 0.5s all;\r\n  -moz-transition: 0.5s all;\r\n  cursor: pointer;\r\n}\r\n.icon-box:hover {\r\n  background: #000;\r\n  transition: 0.5s all;\r\n  -webkit-transition: 0.5s all;\r\n  -o-transition: 0.5s all;\r\n  -ms-transition: 0.5s all;\r\n  -moz-transition: 0.5s all;\r\n}\r\n.icon-box:hover i.fa {\r\n  color: #fff !important;\r\n}\r\n.icon-box:hover a.agile-icon {\r\n  color: #fff !important;\r\n}\r\n.codes .bs-glyphicons li {\r\n  float: left;\r\n  width: 12.5%;\r\n  height: 115px;\r\n  padding: 10px;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  list-style-type: none;\r\n}\r\n.codes .bs-glyphicons .glyphicon {\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n}\r\n.codes .glyphicon {\r\n  position: relative;\r\n  top: 1px;\r\n  display: inline-block;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  color: #777;\r\n}\r\n.codes .bs-glyphicons .glyphicon-class {\r\n  display: block;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n}\r\nh4.m-sing {\r\n  text-align: left;\r\n}\r\nh3.icon-subheading {\r\n  font-size: 28px;\r\n  color: #68d6c1 !important;\r\n  margin: 30px 0 15px;\r\n  font-weight: 600;\r\n  letter-spacing: 2px;\r\n}\r\nh3.agileits-icons-title {\r\n  text-align: center;\r\n  font-size: 33px;\r\n  color: #222222;\r\n  font-weight: 600;\r\n  letter-spacing: 2px;\r\n}\r\n.icons a {\r\n  color: #999;\r\n}\r\n.icon-box i {\r\n  margin-right: 10px !important;\r\n  font-size: 20px !important;\r\n  color: #282a2b !important;\r\n}\r\n.bs-glyphicons li {\r\n  float: left;\r\n  width: 18%;\r\n  height: 115px;\r\n  padding: 10px;\r\n  line-height: 1.4;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  list-style-type: none;\r\n  background: rgba(149, 149, 149, 0.18);\r\n  margin: 1%;\r\n}\r\n.bs-glyphicons .glyphicon {\r\n  margin-top: 5px;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n  color: #282a2b;\r\n}\r\n.glyphicon {\r\n  position: relative;\r\n  top: 1px;\r\n  display: inline-block;\r\n  font-family: 'Glyphicons Halflings';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  color: #777;\r\n}\r\n.bs-glyphicons .glyphicon-class {\r\n  display: block;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n}\r\n@media (max-width: 991px) {\r\n  h3.agileits-icons-title {\r\n    font-size: 28px;\r\n  }\r\n  h3.icon-subheading {\r\n    font-size: 22px;\r\n  }\r\n}\r\n@media (max-width: 768px) {\r\n  h3.agileits-icons-title {\r\n    font-size: 28px;\r\n  }\r\n  h3.icon-subheading {\r\n    font-size: 25px;\r\n  }\r\n  .row {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n  .icon-box {\r\n    margin: 0;\r\n  }\r\n}\r\n@media (max-width: 640px) {\r\n  .icon-box {\r\n    float: left;\r\n    width: 50%;\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  .bs-glyphicons li {\r\n    width: 31%;\r\n  }\r\n  .icon-box {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n}\r\n@media (max-width: 414px) {\r\n  h3.agileits-icons-title {\r\n    font-size: 23px;\r\n  }\r\n  h3.icon-subheading {\r\n    font-size: 18px;\r\n  }\r\n  .bs-glyphicons li {\r\n    width: 31.33%;\r\n  }\r\n}\r\n@media (max-width: 384px) {\r\n  .icon-box {\r\n    float: none;\r\n    width: 100%;\r\n  }\r\n}\r\n/*-- //icons --*/\r\n.w3_wthree_agileits_icons.main-grid-border {\r\n  padding: 5em 0;\r\n}\r\n/*-----start-responsive-design------*/\r\n@media (max-width: 1680px) {\r\n}\r\n@media (max-width: 1600px) {\r\n}\r\n@media (max-width: 1440px) {\r\n}\r\n@media (max-width: 1366px) {\r\n}\r\n@media (max-width: 1280px) {\r\n}\r\n@media (max-width: 1080px) {\r\n  #PPMiniCart {\r\n    left: 42% !important;\r\n  }\r\n  #Awesome h4 {\r\n    padding: 1.9em 0 0;\r\n  }\r\n  .w3ls_logo_products_left h1 a {\r\n    font-size: 34px;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 81%;\r\n  }\r\n  .navbar-nav > li {\r\n    margin-left: 8px;\r\n  }\r\n  .nav > li > a {\r\n    padding: 10px 8px !important;\r\n  }\r\n  .top-brands h2,\r\n  .newproducts-w3agile h3,\r\n  .login h2,\r\n  .register h2,\r\n  .faq-w3agile h3,\r\n  .brands h3 {\r\n    font-size: 2em;\r\n  }\r\n  .w3_footer_grid h3 {\r\n    font-size: 1.4em;\r\n  }\r\n  .products-right {\r\n    padding: 0;\r\n  }\r\n  .snipcart-details {\r\n    width: 81%;\r\n  }\r\n  h3.w3_agile_header,\r\n  h2.w3_agile_header {\r\n    font-size: 2em;\r\n  }\r\n  .w3_agileits_contact_grid_right {\r\n    padding: 0 2em 0 6em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 65%;\r\n  }\r\n  .about-team-grids {\r\n    width: 24.4%;\r\n  }\r\n  .about-team-grids h4 {\r\n    font-size: 0.9em;\r\n  }\r\n  .about-team-grids:hover .caption {\r\n    top: 42.2%;\r\n  }\r\n  .testi h4 {\r\n    font-size: 1.1em;\r\n  }\r\n}\r\n@media (max-width: 1024px) {\r\n}\r\n@media (max-width: 991px) {\r\n  .w3l_offers p {\r\n    font-size: 14px;\r\n  }\r\n  .w3l_offers {\r\n    width: 52%;\r\n  }\r\n  .agile-login {\r\n    padding: 6px 0;\r\n  }\r\n  .w3view-cart {\r\n    height: 36px;\r\n  }\r\n  .agileits_header {\r\n    padding: 12px 0 8px;\r\n  }\r\n  .w3ls_logo_products_left h1 a {\r\n    font-size: 30px;\r\n  }\r\n  i.fa.fa-phone {\r\n    margin-right: 7px;\r\n    font-size: 15px;\r\n  }\r\n  ul.phone_email li {\r\n    font-size: 13px;\r\n  }\r\n  .w3ls_logo_products_left1 {\r\n    margin-top: 0;\r\n    width: 38%;\r\n  }\r\n  .w3l_search {\r\n    width: 27%;\r\n    margin: 0em 0 0em 0em;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 76%;\r\n  }\r\n  .navbar-default .navbar-nav > li > a {\r\n    font-size: 14px;\r\n  }\r\n  .nav > li > a {\r\n    padding: 10px 2px !important;\r\n  }\r\n  .navbar-nav > li {\r\n    margin-left: 5px;\r\n  }\r\n  .navbar {\r\n    min-height: 43px;\r\n  }\r\n  .top_brand_left {\r\n    float: left;\r\n    width: 33.33%;\r\n  }\r\n  .agile_top_brand_left_grid1 img {\r\n    max-width: 100% !important ;\r\n  }\r\n  .brands-agile-1 {\r\n    margin: 0;\r\n  }\r\n  .w3layouts-brand {\r\n    float: left;\r\n    width: 33.33%;\r\n    margin-bottom: 3%;\r\n  }\r\n  .top_brand_left-1 {\r\n    width: 50%;\r\n    float: left;\r\n    margin-bottom: 3%;\r\n  }\r\n  .newproducts-w3agile {\r\n    padding: 3em 0 2em;\r\n  }\r\n  .footer {\r\n    padding: 3em 0 2em;\r\n  }\r\n  .w3_footer_grid {\r\n    float: left;\r\n    width: 50%;\r\n    margin-bottom: 1em;\r\n  }\r\n  .footer-copy p {\r\n    margin: 1.5em 0 0;\r\n  }\r\n  .ban-bottom3 {\r\n    margin: 2em 0;\r\n  }\r\n  .products-left {\r\n    padding: 0;\r\n    margin-bottom: 24px;\r\n  }\r\n  .w3_agileits_contact_grid_right {\r\n    padding: 0 1em 0 1em;\r\n    margin-top: 2em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    right: 6%;\r\n    width: 38%;\r\n  }\r\n  .about-w3imgs {\r\n    float: left;\r\n    width: 33.33%;\r\n  }\r\n  .about-wthree-grids {\r\n    margin-top: 2em;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 2.5em;\r\n  }\r\n  .about-slid-info {\r\n    width: 100%;\r\n  }\r\n  .about-team-grids {\r\n    margin-left: 16px;\r\n    width: 47%;\r\n    float: left;\r\n    padding: 2em 2em;\r\n    margin-bottom: 20px;\r\n  }\r\n  .login-form-grids {\r\n    width: 65%;\r\n  }\r\n  .login h4 {\r\n    font-size: 1.3em;\r\n  }\r\n  .timetable_sub th,\r\n  .timetable_sub td {\r\n    font-size: 12px;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 34%;\r\n  }\r\n  .agileinfo_single_left {\r\n    float: left;\r\n    width: 40%;\r\n  }\r\n  .agileinfo_single_right {\r\n    padding-left: 2em;\r\n    float: left;\r\n    width: 60%;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 1.4em;\r\n  }\r\n  .w3agile_description p {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  .agileinfo_single_right_details {\r\n    width: 36% !important;\r\n  }\r\n}\r\n@media (max-width: 800px) {\r\n}\r\n@media (max-width: 768px) {\r\n  #PPMiniCart {\r\n    left: 39% !important;\r\n  }\r\n  .top-brands {\r\n    padding: 3em 0;\r\n  }\r\n  p.w3l-ad {\r\n    width: 80%;\r\n  }\r\n  .brands {\r\n    padding: 3em 0;\r\n  }\r\n  .ban-bottom-w3l {\r\n    padding: 3em 0;\r\n  }\r\n  .brands-agile {\r\n    margin-top: 3em;\r\n  }\r\n  .grid_3.grid_5 {\r\n    margin-top: 3em;\r\n  }\r\n  .products {\r\n    padding: 3em 0;\r\n  }\r\n  ul.paging {\r\n    margin: 2em auto 0;\r\n  }\r\n  .about,\r\n  .about-team,\r\n  .contact,\r\n  .codes {\r\n    padding: 3em 0;\r\n  }\r\n  .about-agileinfo {\r\n    margin-top: 3em;\r\n  }\r\n  .team-agileitsinfo {\r\n    margin-top: 3em;\r\n  }\r\n  .register {\r\n    padding: 3em 0;\r\n  }\r\n  .login {\r\n    padding: 3em 0;\r\n  }\r\n  .checkout {\r\n    padding: 3em 0;\r\n  }\r\n}\r\n@media (max-width: 767px) {\r\n  .navbar-nav > li {\r\n    float: none;\r\n    margin-left: 0px;\r\n    text-align: center;\r\n  }\r\n  .navbar-nav {\r\n    margin: 0;\r\n  }\r\n  .about,\r\n  .about-team,\r\n  .contact,\r\n  .codes {\r\n    padding: 3em 0;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 45%;\r\n  }\r\n  ul.faq {\r\n    margin-top: 3em;\r\n    padding: 0 1.5em;\r\n  }\r\n  .faq-w3agile {\r\n    padding: 3em 0em;\r\n  }\r\n  .navbar-nav .open .dropdown-menu {\r\n    background: #fff;\r\n  }\r\n  .navbar-default {\r\n    background: none;\r\n    border: none;\r\n    text-align: center;\r\n  }\r\n}\r\n@media (max-width: 736px) {\r\n  #PPMiniCart {\r\n    top: 140px !important;\r\n  }\r\n  #PPMiniCart form {\r\n    max-height: 185px !important;\r\n  }\r\n  .w3l_offers p {\r\n    font-size: 13px;\r\n  }\r\n  .w3ls_logo_products_left h1 a {\r\n    font-size: 26px;\r\n  }\r\n  .logo_products {\r\n    padding: 1.5em 0;\r\n  }\r\n  .skdslider {\r\n    height: 281px;\r\n  }\r\n  .snipcart-details {\r\n    width: 100%;\r\n  }\r\n  .agile_top_brand_left_grid1 p {\r\n    font-size: 13px;\r\n  }\r\n  .agile_top_brand_left_grid1 h4,\r\n  .agileinfo_single_right_snipcart h4 {\r\n    font-size: 0.9em;\r\n  }\r\n  .value {\r\n    width: 27px;\r\n    height: 27px;\r\n    padding: 8px 0px;\r\n    line-height: 13px;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    height: 27px;\r\n    line-height: 13px;\r\n    width: 27px;\r\n    font-size: 16px;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 1.3em;\r\n  }\r\n}\r\n@media (max-width: 667px) {\r\n  #PPMiniCart {\r\n    left: 36% !important;\r\n  }\r\n  #PPMiniCart form {\r\n    max-height: 165px !important;\r\n  }\r\n  .agile-login {\r\n    width: 37%;\r\n  }\r\n  .w3l_offers {\r\n    width: 56%;\r\n  }\r\n  .agile-login ul li {\r\n    padding: 0em 0.4em;\r\n  }\r\n  .w3ls_logo_products_left1 {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .w3ls_logo_products_left {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n  }\r\n  .w3ls_logo_products_left h1 a {\r\n    display: inline-block;\r\n  }\r\n  .w3l_search {\r\n    width: 100%;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 92%;\r\n  }\r\n  .logo_products {\r\n    padding: 1em 0;\r\n  }\r\n  .top_brand_left {\r\n    width: 100%;\r\n    margin-bottom: 3%;\r\n  }\r\n  .snipcart-details input.button {\r\n    width: 54%;\r\n  }\r\n  .agile_top_brands_grids {\r\n    margin-top: 2em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 51%;\r\n  }\r\n  .login-form-grids {\r\n    width: 71%;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 42%;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 1.2em;\r\n  }\r\n  .agileinfo_single_right_details {\r\n    width: 73% !important;\r\n    text-align: left;\r\n  }\r\n}\r\n@media (max-width: 640px) {\r\n  #PPMiniCart form {\r\n    max-height: 400px !important;\r\n  }\r\n  .w3l_offers {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .agile-login {\r\n    width: 38%;\r\n  }\r\n  .about .grid-top h4 {\r\n    font-size: 1.3em;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 2em;\r\n  }\r\n  .about-slid {\r\n    padding: 4em 0;\r\n  }\r\n  .about-slid p {\r\n    font-size: 0.9em;\r\n  }\r\n  .login-form-grids {\r\n    width: 76%;\r\n  }\r\n  .agileinfo_single_left {\r\n    padding: 1em;\r\n  }\r\n  .agileinfo_single_right {\r\n    padding-left: 1em;\r\n  }\r\n}\r\n@media (max-width: 600px) {\r\n  #PPMiniCart form {\r\n    width: 506px !important;\r\n  }\r\n  #PPMiniCart {\r\n    left: 41% !important;\r\n  }\r\n  #PPMiniCart ul {\r\n    width: 464px !important;\r\n  }\r\n  #PPMiniCart form {\r\n    max-height: 210px !important;\r\n  }\r\n  .agile-login {\r\n    width: 40%;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    height: 22px;\r\n    width: 22px;\r\n  }\r\n  .value {\r\n    width: 22px;\r\n    height: 22px;\r\n    line-height: 6px;\r\n  }\r\n}\r\n@media (max-width: 568px) {\r\n  #PPMiniCart form {\r\n    max-height: 100px !important;\r\n  }\r\n  .snipcart-details input.button {\r\n    width: 64%;\r\n  }\r\n  .agile-login {\r\n    width: 43%;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 91%;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 58%;\r\n  }\r\n  .about-team-grids {\r\n    width: 46%;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 49%;\r\n  }\r\n  td.invert-image a img {\r\n    width: 40%;\r\n  }\r\n  .timetable_sub th,\r\n  .timetable_sub td {\r\n    width: 50px;\r\n  }\r\n  .value {\r\n    width: 17px;\r\n    height: 17px;\r\n    line-height: 0px;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    height: 17px;\r\n    width: 17px;\r\n  }\r\n  .timetable_sub th,\r\n  .timetable_sub td {\r\n    padding: 7px 0px;\r\n  }\r\n}\r\n@media (max-width: 480px) {\r\n  .top_brand_left-1 {\r\n    width: 100%;\r\n  }\r\n  .w3layouts-brand {\r\n    float: left;\r\n    width: 50%;\r\n    margin-bottom: 3%;\r\n  }\r\n  .nav-tabs > li > a {\r\n    font-size: 14px;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 90%;\r\n  }\r\n  .agile-login {\r\n    width: 50%;\r\n  }\r\n  .top-brands h2,\r\n  .newproducts-w3agile h3,\r\n  .login h2,\r\n  .register h2,\r\n  .faq-w3agile h3,\r\n  .brands h3 {\r\n    font-size: 1.7em;\r\n  }\r\n  p.w3l-ad {\r\n    width: 100%;\r\n  }\r\n  .grid_3.grid_5 h5 {\r\n    font-size: 18px;\r\n  }\r\n  .w3_footer_grid {\r\n    width: 100%;\r\n  }\r\n  .w3_footer_grid h3 {\r\n    margin-bottom: 1em;\r\n  }\r\n  .sorting {\r\n    width: 44%;\r\n  }\r\n  .sorting-left {\r\n    width: 42%;\r\n  }\r\n  h3.w3_agile_header,\r\n  h2.w3_agile_header {\r\n    font-size: 1.7em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 70%;\r\n  }\r\n  .about-team-grids {\r\n    width: 65%;\r\n    float: none;\r\n    margin: 0 auto 20px;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 1.7em;\r\n  }\r\n  .login-form-grids {\r\n    width: 90%;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 57%;\r\n  }\r\n  .checkout-right-basket {\r\n    margin: 3em 0 0 0em;\r\n  }\r\n  .agileinfo_single_left {\r\n    width: 100%;\r\n    margin-bottom: 2em;\r\n    padding: 3em 4em;\r\n  }\r\n  .agileinfo_single_right {\r\n    padding-left: 0em;\r\n    width: 100%;\r\n  }\r\n}\r\n@media (max-width: 414px) {\r\n  .agile-login {\r\n    width: 61%;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 87%;\r\n  }\r\n  .w3ls_logo_products_left {\r\n    margin: 12px 0;\r\n  }\r\n  .ban-text1 h4 {\r\n    font-size: 16px;\r\n  }\r\n  .ban-text1 {\r\n    left: 18%;\r\n  }\r\n  .footer-copy p {\r\n    font-size: 14px;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 80%;\r\n  }\r\n  .about-wthree-grids {\r\n    margin-top: 0em;\r\n  }\r\n  .about .grid-top h4 {\r\n    font-size: 1.1em;\r\n    line-height: 24px;\r\n  }\r\n  .about .grid-top p {\r\n    font-size: 0.875em;\r\n  }\r\n  .about-team-grids {\r\n    width: 80%;\r\n  }\r\n  .login-form-grids {\r\n    padding: 2em;\r\n  }\r\n  .checkout h2 {\r\n    font-size: 0.95em;\r\n    margin: 0 0 2em;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    margin: 4px 15px;\r\n    display: inline-block;\r\n  }\r\n  .value {\r\n    margin: 4px 15px;\r\n    display: inline-block;\r\n  }\r\n  .quantity-select .entry.value-minus {\r\n    margin-left: 15px;\r\n  }\r\n  .checkout-left-basket {\r\n    width: 100%;\r\n  }\r\n  .agileinfo_single_left {\r\n    padding: 2em 2em;\r\n  }\r\n}\r\n@media (max-width: 384px) {\r\n  #PPMiniCart form {\r\n    width: 300px !important;\r\n    padding: 10px 10px 40px !important;\r\n  }\r\n  #PPMiniCart ul {\r\n    width: 278px !important;\r\n  }\r\n  #PPMiniCart .minicart-remove {\r\n    width: 11px !important;\r\n    height: 11px !important;\r\n    line-height: 0;\r\n    margin: 3px 0 0 !important;\r\n  }\r\n  #PPMiniCart {\r\n    left: 64% !important;\r\n  }\r\n  #PPMiniCart .minicart-item a {\r\n    font-size: 13px;\r\n  }\r\n  #PPMiniCart .minicart-attributes li {\r\n    font-size: 12px;\r\n  }\r\n  span.minicart-price {\r\n    font-size: 12px;\r\n  }\r\n  #PPMiniCart .minicart-quantity {\r\n    font-size: 11px;\r\n  }\r\n  .w3l_offers p {\r\n    font-size: 12px;\r\n  }\r\n  .agile-login {\r\n    width: 67%;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 86%;\r\n  }\r\n  .w3layouts-foot {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n  }\r\n  .payment-w3ls {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .payment-w3ls img {\r\n    display: inline-block;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    width: 90%;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 1.5em;\r\n  }\r\n  .about-slid p {\r\n    font-size: 0.875em;\r\n  }\r\n  .login-form-grids {\r\n    width: 95%;\r\n  }\r\n  .checkout h2 {\r\n    font-size: 0.9em;\r\n  }\r\n}\r\n@media (max-width: 375px) {\r\n  .login-form-grids {\r\n    width: 100%;\r\n  }\r\n  .checkout h2 {\r\n    font-size: 0.875em;\r\n  }\r\n  .agileinfo_single_left {\r\n    padding: 1em 1em;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 1.1em;\r\n  }\r\n}\r\n@media (max-width: 320px) {\r\n  #PPMiniCart form {\r\n    width: 285px !important;\r\n  }\r\n  #PPMiniCart ul {\r\n    width: 263px !important;\r\n  }\r\n  #PPMiniCart {\r\n    left: 69% !important;\r\n  }\r\n  #PPMiniCart .minicart-subtotal {\r\n    padding-left: 5px !important;\r\n    font-size: 13px !important;\r\n  }\r\n  .agile-login {\r\n    width: 79%;\r\n  }\r\n  .w3l_offers p {\r\n    font-size: 10px;\r\n  }\r\n  .w3l_offers {\r\n    padding: 9px 0 5px;\r\n  }\r\n  .w3ls_logo_products_left {\r\n    margin: 3px 0 12px;\r\n  }\r\n  .w3l_search input[type='search'] {\r\n    width: 83%;\r\n  }\r\n  .top-brands h2,\r\n  .newproducts-w3agile h3,\r\n  .login h2,\r\n  .register h2,\r\n  .faq-w3agile h3,\r\n  .brands h3 {\r\n    font-size: 1.4em;\r\n  }\r\n  .nav-tabs > li > a {\r\n    font-size: 12px;\r\n  }\r\n  div#myTabContent {\r\n    padding: 20px 20px;\r\n  }\r\n  p.w3l-ad {\r\n    font-size: 13px;\r\n    line-height: 24px;\r\n  }\r\n  .top_brand_left {\r\n    padding: 0;\r\n  }\r\n  .ban-text1 h4 {\r\n    font-size: 14px;\r\n  }\r\n  .ban-text1 {\r\n    left: 17%;\r\n    padding: 8px 18px;\r\n  }\r\n  .top-brands {\r\n    padding: 2em 0;\r\n  }\r\n  .grid_3.grid_5 {\r\n    margin-top: 2em;\r\n  }\r\n  .ban-bottom-w3l {\r\n    padding: 2em 0;\r\n  }\r\n  .brands {\r\n    padding: 2em 0;\r\n  }\r\n  .w3layouts-brand {\r\n    width: 46%;\r\n    padding: 0;\r\n    margin: 2%;\r\n  }\r\n  .brands-agile {\r\n    margin-top: 2em;\r\n  }\r\n  .newproducts-w3agile {\r\n    padding: 2em 0 1em;\r\n  }\r\n  .footer-copy p {\r\n    margin: 0 0 0;\r\n  }\r\n  .footer {\r\n    padding: 2em 0 1.5em;\r\n  }\r\n  .w3_footer_grid h3 {\r\n    font-size: 1.3em;\r\n  }\r\n  .w3_footer_grid {\r\n    padding: 0;\r\n  }\r\n  .sorting-left {\r\n    width: 47%;\r\n    margin-right: 2%;\r\n  }\r\n  .sorting {\r\n    width: 51%;\r\n  }\r\n  .products {\r\n    padding: 2em 0;\r\n  }\r\n  .categories ul.cate,\r\n  .new-products-grids {\r\n    padding: 1em;\r\n  }\r\n  ul.cate ul {\r\n    margin-left: 1.5em;\r\n  }\r\n  .about,\r\n  .about-team,\r\n  .contact,\r\n  .codes {\r\n    padding: 2em 0;\r\n  }\r\n  .agileits_w3layouts_map_pos1 {\r\n    padding: 1em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    padding: 1em;\r\n  }\r\n  .agileits_w3layouts_map_pos {\r\n    top: 13%;\r\n  }\r\n  .agile_map iframe {\r\n    min-height: 430px;\r\n  }\r\n  h3.w3_agile_header,\r\n  h2.w3_agile_header {\r\n    font-size: 1.4em;\r\n  }\r\n  .about-agileinfo {\r\n    margin-top: 2em;\r\n  }\r\n  .about-wthree-grids {\r\n    padding: 0;\r\n  }\r\n  .about .grid-top h4 {\r\n    font-size: 1em;\r\n    letter-spacing: 1px;\r\n  }\r\n  .time-top h4 {\r\n    font-size: 1.5em;\r\n  }\r\n  .about-slid {\r\n    padding: 3em 0;\r\n  }\r\n  .about-slid h2 {\r\n    font-size: 1.3em;\r\n  }\r\n  .about-team-grids {\r\n    width: 100%;\r\n  }\r\n  .faq-w3agile {\r\n    padding: 2em 0em;\r\n  }\r\n  ul.faq {\r\n    margin-top: 2em;\r\n    padding: 0 1em;\r\n  }\r\n  .faq-w3agile .faq li {\r\n    margin-top: 1em;\r\n  }\r\n  .faq > li > a {\r\n    line-height: 23px;\r\n  }\r\n  .register {\r\n    padding: 2em 0;\r\n  }\r\n  .login-form-grids {\r\n    margin: 2em auto 0;\r\n  }\r\n  .login-form-grids {\r\n    padding: 1.2em;\r\n  }\r\n  .register-check-box label {\r\n    font-size: 13px;\r\n  }\r\n  .checkbox {\r\n    padding-left: 30px !important;\r\n  }\r\n  .login {\r\n    padding: 2em 0;\r\n  }\r\n  .login p a {\r\n    font-size: 1em;\r\n  }\r\n  .checkout h2 {\r\n    font-size: 0.875em;\r\n    line-height: 22px;\r\n  }\r\n  .checkout {\r\n    padding: 2em 0;\r\n  }\r\n  .value-minus,\r\n  .value-plus {\r\n    margin: 4px 10px;\r\n  }\r\n  .quantity-select .entry.value-minus {\r\n    margin-left: 10px;\r\n  }\r\n  .value {\r\n    margin: 4px 10px;\r\n  }\r\n  td.invert-image a img {\r\n    width: 60%;\r\n  }\r\n  .agileinfo_single h2 {\r\n    font-size: 0.95em;\r\n  }\r\n  .w3agile_description h4 {\r\n    font-size: 0.875em;\r\n  }\r\n  .w3agile_description {\r\n    margin: 1em 0;\r\n  }\r\n  .w3agile_description p {\r\n    font-size: 13px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"checkout\">\r\n  <div class=\"container\">\r\n    <!-- 訂單商品內容 -->\r\n    <div class=\"checkout-left\">\r\n      <div class=\"checkout-left-basket\" style=\"width:100%;\">\r\n        <h4>訂單內容</h4>\r\n        <ul>\r\n          <ng-container *ngFor=\"let item of this.cartService.show_cart\">\r\n            <li>\r\n              {{ item?.product?.title }}\r\n              <span\r\n                >NT${{ item?.product?.sale_price }} x {{ item?.item_amount }} =\r\n                NT${{ item?.product?.sale_price * item?.item_amount }}\r\n              </span>\r\n            </li>\r\n          </ng-container>\r\n          <li>\r\n            <strong\r\n              >總金額 <span>NT${{ total }}</span></strong\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <!-- //訂單商品內容 -->\r\n    <!-- 填寫資料 -->\r\n    <div class=\"checkout-right\">\r\n      <table class=\"timetable_sub\">\r\n        <tr>\r\n          <th>收件人姓名：</th>\r\n          <td>\r\n            <input\r\n              type=\"text\"\r\n              name=\"name\"\r\n              placeholder=\"請輸入姓名\"\r\n              [(ngModel)]=\"order.receiver\"\r\n            />\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>電話：</th>\r\n          <td>\r\n            <input\r\n              type=\"text\"\r\n              name=\"phone\"\r\n              placeholder=\"請輸入電話\"\r\n              [(ngModel)]=\"order.receiver_phone\"\r\n            />\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>付款方式：</th>\r\n          <td>\r\n            <span\r\n              ><input\r\n                type=\"radio\"\r\n                name=\"pay\"\r\n                value=\"0\"\r\n                [(ngModel)]=\"order.pay_method\"\r\n              />信用卡付款</span\r\n            >\r\n            <span\r\n              ><input\r\n                type=\"radio\"\r\n                name=\"pay\"\r\n                value=\"1\"\r\n                [(ngModel)]=\"order.pay_method\"\r\n              />超商付款</span\r\n            >\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>運送方式：</th>\r\n          <td>\r\n            <span\r\n              ><input\r\n                type=\"radio\"\r\n                name=\"transmit\"\r\n                value=\"0\"\r\n                [(ngModel)]=\"order.ship_method\"\r\n              />郵寄</span\r\n            >\r\n            <span\r\n              ><input\r\n                type=\"radio\"\r\n                name=\"transmit\"\r\n                value=\"1\"\r\n                [(ngModel)]=\"order.ship_method\"\r\n              />超商取貨</span\r\n            >\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th>備註：</th>\r\n          <td>\r\n            <textarea [(ngModel)]=\"order.message\" placeholder=\"請輸入運送地址或指定超商等資訊。\"></textarea>\r\n          </td></tr>\r\n      </table>\r\n    </div>\r\n    <!-- //填寫資料 -->\r\n    <div class=\"checkout-right-basket\">\r\n      <a [routerLink]=\"['/products']\"\r\n        ><span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span\r\n        >返回購物</a\r\n      >\r\n\r\n      <a (click)=\"submit()\"\r\n        ><span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span\r\n        >送出訂單</a\r\n      >\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(cartService, productsService, ordersService, router) {
        this.cartService = cartService;
        this.productsService = productsService;
        this.ordersService = ordersService;
        this.router = router;
        this.total = 0;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.cartService.patchCart(this.cartService.cart);
        this.cartService.show_cart = [];
        this.total = 0;
        this.show();
    };
    Object.defineProperty(CheckoutComponent.prototype, "cart", {
        get: function () {
            return this.cartService.cart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutComponent.prototype, "show_cart", {
        get: function () {
            return this.cartService.show_cart;
        },
        enumerable: true,
        configurable: true
    });
    CheckoutComponent.prototype.show = function () {
        var _this = this;
        console.log('show cart');
        if (JSON.stringify(this.cart) !== '[]') {
            var _loop_1 = function (i) {
                this_1.productsService
                    .getProduct(this_1.cart[i].id)
                    .subscribe(function (data) {
                    _this.cartService.show_cart[i] = {
                        id: _this.cart[i].id,
                        item_amount: _this.cart[i].item_amount,
                        product: data
                    };
                    _this.total +=
                        _this.show_cart[i].item_amount *
                            _this.show_cart[i].product.sale_price;
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.cart.length; i++) {
                _loop_1(i);
            }
            console.log('cart', this.cart);
            console.log('show_cart', this.show_cart);
        }
    };
    Object.defineProperty(CheckoutComponent.prototype, "order", {
        get: function () {
            return this.ordersService.order;
        },
        enumerable: true,
        configurable: true
    });
    CheckoutComponent.prototype.submit = function () {
        this.ordersService.patchOrder();
        this.ordersService.order = {
            state: '1',
            message: '',
            pay_method: '0',
            receiver: '',
            receiver_phone: '',
            products: [],
            ship_method: '0'
        };
        this.cartService.cart = [];
        this.cartService.patchCart(this.cartService.cart);
        alert('訂單已送出，謝謝您的購買！');
        this.router.navigate(['/']);
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 標題 -->\n<div class=\"page-head_agile_info_w3l\">\n  <div class=\"container\">\n    <h3>C<span>ontact Us </span></h3>\n       <div class=\"services-breadcrumb\">\n          <div class=\"agile_inner_breadcrumb\">\n\n             <ul class=\"w3_short\">\n              <li><a [routerLink]=\"['/']\">Home</a><i>|</i></li>\n              <li>Contact</li>\n            </ul>\n           </div>\n      </div>\n</div>\n</div>\n<!-- //標題 -->\n <!-- 聯絡方式-->\n  <div class=\"banner_bottom_agile_info\">\n    <div class=\"container\">\n    <div class=\"contact-grid-agile-w3s\">\n      <div class=\"col-md-4 contact-grid-agile-w3\">\n          <div class=\"contact-grid-agile-w31\">\n            <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n            <h4>Address</h4>\n            <p><span>台北市大安區</span>基隆路一百段10000號地下18樓</p>\n          </div>\n        </div>\n        <div class=\"col-md-4 contact-grid-agile-w3\">\n          <div class=\"contact-grid-agile-w32\">\n            <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n            <h4>Call Us</h4>\n            <p>+886 0 0000 0000<span>+886 2 1234 1234</span></p>\n          </div>\n        </div>\n        <div class=\"col-md-4 contact-grid-agile-w3\">\n          <div class=\"contact-grid-agile-w33\">\n            <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\n            <h4>Email</h4>\n            <p><a href=\"mailto:info@example.com\">info@example1.com</a><span><a href=\"mailto:info@example.com\">info@example2.com</a></span></p>\n          </div>\n        </div>\n        <div class=\"clearfix\"> </div>\n      </div>\n   </div>\n </div>\n <!-- //聯絡方式 -->\n <!-- 地圖 -->\n   <div class=\"contact-w3-agile1 map\" data-aos=\"flip-right\">\n     <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6004061604845!2d121.53849051382183!3d25.013690583981887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2176c4c0ad%3A0x90db5e44ee29f455!2z5ZyL56uL6Ie654Gj56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1540632954545\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n    </div>\n <!-- //地圖 -->\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 標題 -->\r\n<div class=\"page-head_agile_info_w3l\">\r\n  <div class=\"container\">\r\n    <h3>Product <span>Content </span></h3>\r\n    <div class=\"services-breadcrumb\">\r\n      <div class=\"agile_inner_breadcrumb\">\r\n        <ul class=\"w3_short\">\r\n          <li><a [routerLink]=\"['/']\">Home</a><i>|</i></li>\r\n          <li>Content</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- //標題 -->\r\n\r\n<div class=\"banner-bootom-w3-agileits\">\r\n  <div class=\"container\">\r\n    <!-- 商品圖片 -->\r\n    <div class=\"col-md-4 single-right-left \">\r\n      <div class=\"grid assets/images_3_of_2\">\r\n        <div class=\"flexslider\">\r\n          <div class=\"thumb-image\">\r\n            <img\r\n              [src]=\"product?.picture\"\r\n              data-imagezoom=\"true\"\r\n              class=\"img-responsive\"\r\n            />\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- //商品圖片 -->\r\n    <!-- 基本資料 -->\r\n    <div class=\"col-md-8 single-right-left simpleCart_shelfItem\">\r\n      <h3>{{ product.title }}<span style=\"font-size: 70%;color:black;\">－－{{ product.subtitle }}</span></h3>\r\n      <p>\r\n        <span class=\"item_price\">${{ product.sale_price }}</span>\r\n        <del>- ${{ product.list_price }}</del>\r\n      </p>\r\n      <div style=\"padding: 0px 0px 0px 18px\">\r\n        <ul>\r\n          <li>作者：{{ product.author }}</li>\r\n          <li>譯者：{{ product.interpreter }}</li>\r\n          <li>出版社：{{ product.publisher }}</li>\r\n          <li>出版年份：{{ product.publish_year }}</li>\r\n          <li>ISBN：{{ product.ISBN }}</li>\r\n        </ul>\r\n      </div>\r\n\r\n      <form action=\"\">\r\n        <div class=\"description\">\r\n          <ul>\r\n            <li>庫存：{{ product.stock }}</li>\r\n            <li>\r\n              選擇商品數量：<select name=\"amount\" [(ngModel)]=\"item_amount\">\r\n                <option\r\n                  *ngFor=\"let x of stock_range(product.stock)\"\r\n                  [value]=\"x\"\r\n                  >{{ x }}</option\r\n                >\r\n              </select>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <input\r\n          type=\"button\"\r\n          class=\"function_button\"\r\n          value=\"加入購物車\"\r\n          (click)=\"add_to_cart(id, item_amount, product.stock)\"\r\n        />\r\n      </form>\r\n    </div>\r\n    <!-- //基本資料 -->\r\n    <div class=\"clearfix\"></div>\r\n    <!-- 詳細資訊 -->\r\n    <div class=\"responsive_tabs_agileits\">\r\n      <div id=\"horizontalTab\">\r\n        <ul class=\"resp-tabs-list\">\r\n          <li>內容介紹</li>\r\n          <li>作者介紹</li>\r\n          <!-- <li>書籍評價</li> -->\r\n        </ul>\r\n        <div class=\"resp-tabs-container\">\r\n          <!-- 書籍介紹 -->\r\n          <div class=\"tab1\">\r\n            <div class=\"single_page_agile_its_w3ls\">\r\n              <h6>書籍介紹</h6>\r\n              <p class=\"w3ls_para\">{{ product.description }}</p>\r\n            </div>\r\n          </div>\r\n          <!-- //書籍介紹 -->\r\n          <!-- 作者介紹 -->\r\n          <div class=\"tab3\">\r\n            <div class=\"single_page_agile_its_w3ls\">\r\n              <h6>作者介紹</h6>\r\n              <h3>{{ product.author }}</h3>\r\n              <p class=\"w3ls_para\">{{ product.author_description }}</p>\r\n            </div>\r\n          </div>\r\n          <!-- //作者介紹 -->\r\n          <!-- 評價 -->\r\n          <div class=\"tab2\">\r\n            <!-- <div class=\"single_page_agile_its_w3ls\">\r\n              <div class=\"bootstrap-tab-text-grids\">\r\n                <div class=\"bootstrap-tab-text-grid\">\r\n                  <div class=\"bootstrap-tab-text-grid-left\">\r\n                    <img\r\n                      src=\"assets/images/t1.jpg\"\r\n                      alt=\" \"\r\n                      class=\"img-responsive\"\r\n                    />\r\n                  </div>\r\n                  <div class=\"bootstrap-tab-text-grid-right\">\r\n                    <ul>\r\n                      <li><a href=\"#\">路人甲</a></li>\r\n                      <li>\r\n                        <a href=\"#\"\r\n                          ><i class=\"fa fa-reply-all\" aria-hidden=\"true\"></i>\r\n                          Reply</a\r\n                        >\r\n                      </li>\r\n                    </ul>\r\n                    <p>啊我覺得很好看</p>\r\n                  </div>\r\n                  <div class=\"clearfix\"></div>\r\n                </div>\r\n                <div class=\"add-review\">\r\n                  <h4>留下你的好評</h4>\r\n                  <form action=\"#\" method=\"post\">\r\n                    <input\r\n                      type=\"text\"\r\n                      name=\"Name\"\r\n                      required=\"Name\"\r\n                      placeholder=\"請輸入您的暱稱\"\r\n                    />\r\n                    <input\r\n                      type=\"email\"\r\n                      name=\"Email\"\r\n                      required=\"Email\"\r\n                      placeholder=\"請輸入您的E-mail\"\r\n                    />\r\n                    <textarea\r\n                      name=\"Message\"\r\n                      required=\"\"\r\n                      placeholder=\"請輸入評語\"\r\n                    ></textarea>\r\n                    <input type=\"submit\" value=\"SEND\" />\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <!-- //評價 -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- //詳細資訊 -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentComponent = /** @class */ (function () {
    function ContentComponent(route, productsService, cartService) {
        this.route = route;
        this.productsService = productsService;
        this.cartService = cartService;
        this.id = 1;
        this.item_amount = '1';
        this.product = {};
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.id = parseInt(data.id, 10);
            console.log(_this.id);
        });
        this.productsService.getProduct(this.id).subscribe(function (data) {
            _this.product = data;
        });
        $(document).ready(function () {
            // 書籍介紹用的
            $('#horizontalTab').easyResponsiveTabs({
                type: 'default',
                width: 'auto',
                fit: true,
                closed: 'accordion',
                activate: function (event) {
                    // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
            $('#verticalTab').easyResponsiveTabs({
                type: 'vertical',
                width: 'auto',
                fit: true
            });
            // Can also be used with $(document).ready()
            $('.flexslider').flexslider({
                animation: 'slide',
                controlNav: 'thumbnails'
            });
        });
    };
    ContentComponent.prototype.add_to_cart = function (id, item_amount, stock) {
        this.cartService.add_to_cart(id, parseInt(item_amount, 10), parseInt(stock, 10));
    };
    ContentComponent.prototype.stock_range = function (stock) {
        var range = [];
        for (var i = 0; i < stock; i++) {
            range[i] = i + 1;
        }
        return range;
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- footer -->\n<div class=\"footer\">\n\t\t<p class=\"copy-right\">&copy 2017 Elite shoppy. All rights reserved | Design by <a href=\"http://w3layouts.com/\">W3layouts</a></p>\n</div>\n<!-- //footer -->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product_list {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  width: 95%;\r\n  border-collapse: collapse;\r\n}\r\n\r\n.product_list td {\r\n  font-size: 16px;\r\n  border: 1px solid #68D6C1;\r\n  padding: 3px 10px 2px 10px;\r\n  color: #000000;\r\n  background-color: white;\r\n}\r\n\r\n.product_list th {\r\n  padding: 5px 10px 4px 10px;\r\n  background-color: #68D6C1;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.classification_font {\r\nfont-size: 130%;\r\ntext-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 登入註冊（最上面黑色的區塊） -->\r\n<div class=\"header\" id=\"home\">\r\n  <div class=\"container\">\r\n    <ul>\r\n      <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> Call : 01234567898</li>\r\n      <li>\r\n        <i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>\r\n        <a href=\"mailto:info@example.com\">info@example.com</a>\r\n      </li>\r\n      <ng-container *ngIf=\"!this.usersService.isLogin(); else: elseTag\">\r\n        <li>\r\n          <a [routerLink]=\"['/signup']\"\r\n            ><i class=\"fa fa-pencil-square-o\"></i> 註冊\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/login']\"\r\n            ><i class=\"fa fa-unlock-alt\"></i> 登入\r\n          </a>\r\n        </li>\r\n      </ng-container>\r\n      <ng-template #elseTag>\r\n        <li>歡迎回來！</li>\r\n        <li>\r\n          <a [routerLink]=\"\" (click)=\"logout()\"\r\n            ><i class=\"fa fa-unlock-alt\"></i> 登出\r\n          </a>\r\n        </li>\r\n      </ng-template>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<!-- //登入註冊（最上面黑色的區塊） -->\r\n\r\n<!-- 搜尋 大標（白色的區塊） -->\r\n<div class=\"header-bot\">\r\n  <div class=\"header-bot_inner_wthreeinfo_header_mid\">\r\n    <div class=\"col-md-4 header-middle\"></div>\r\n    <!-- 主標題 -->\r\n    <div class=\"col-md-4 logo_agile\">\r\n      <h1>\r\n        <a [routerLink]=\"['/']\"\r\n          ><span>Cat</span>Read\r\n          <i\r\n            class=\"fa fa-shopping-bag top_logo_agile_bag\"\r\n            aria-hidden=\"true\"\r\n          ></i\r\n        ></a>\r\n      </h1>\r\n    </div>\r\n    <!-- //主標題 -->\r\n    <div class=\"col-md-4 agileits-social top_content\"></div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</div>\r\n<!-- //搜尋 大標（白色的區塊） -->\r\n<!-- 選單跟購物車圖示 -->\r\n<div class=\"ban-top\">\r\n  <div class=\"container\">\r\n    <div class=\"top_nav_left\">\r\n      <nav class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n          <!-- Brand and toggle get grouped for better mobile display -->\r\n          <div class=\"navbar-header\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"navbar-toggle collapsed\"\r\n              data-toggle=\"collapse\"\r\n              data-target=\"#bs-example-navbar-collapse-1\"\r\n              aria-expanded=\"false\"\r\n            >\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n          </div>\r\n          <!-- Collect the nav links, forms, and other content for toggling -->\r\n          <div\r\n            class=\"collapse navbar-collapse menu--shylock\"\r\n            id=\"bs-example-navbar-collapse-1\"\r\n          >\r\n            <ul class=\"nav navbar-nav menu__list\">\r\n              <li class=\" menu__item\">\r\n                <a class=\"menu__link\" [routerLink]=\"['/']\">Home</a>\r\n              </li>\r\n              <li class=\" menu__item\">\r\n                <a class=\"menu__link\" [routerLink]=\"['/about']\">About</a>\r\n              </li>\r\n              <li class=\"dropdown menu__item\">\r\n                <a\r\n                  href=\"#\"\r\n                  class=\"dropdown-toggle menu__link\"\r\n                  data-toggle=\"dropdown\"\r\n                  role=\"button\"\r\n                  aria-haspopup=\"true\"\r\n                  aria-expanded=\"false\"\r\n                  >Products <span class=\"caret\"></span\r\n                ></a>\r\n                <ul class=\"dropdown-menu multi-column columns-3\">\r\n                  <div class=\"agile_inner_drop_nav_info classification_font\">\r\n                    <div class=\"col-sm-3 multi-gd-img1 multi-gd-text \">\r\n                      <a\r\n                        (click)=\"\r\n                          this.productsService.search = {\r\n                            category: '',\r\n                            subcategory: '',\r\n                            publisher: '',\r\n                            title: '',\r\n                            author: '',\r\n                            interpreter: '',\r\n                            ISBN: ''\r\n                          };\r\n                          reload('/products')\r\n                        \"\r\n                      >\r\n                        <p><img src=\"assets/images/top2.jpg\" alt=\" \" /></p>\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"col-sm-9 multi-gd-img\">\r\n                      <ul class=\"multi-column-dropdown\">\r\n                        <ng-container *ngFor=\"let category of categories\">\r\n                          <li style=\"font-size: 80%; text-align: left;\">\r\n                            <a\r\n                              [routerLink]=\"['/products']\"\r\n                              (click)=\"\r\n                                this.productsService.search = {\r\n                                  category: category.id,\r\n                                  subcategory: '',\r\n                                  publisher: '',\r\n                                  title: '',\r\n                                  author: '',\r\n                                  interpreter: '',\r\n                                  ISBN: ''\r\n                                };\r\n                                reload('/products')\r\n                              \"\r\n                              >{{ category?.name\r\n                              }}<span *ngIf=\"category.subcategory\">：</span></a\r\n                            >\r\n                            <span\r\n                              *ngFor=\"let subcategory of category?.subcategory\"\r\n                              style=\"font-size: 80%;\"\r\n                            >\r\n                              <a\r\n                                (click)=\"\r\n                                  this.productsService.search = {\r\n                                    category: category.id,\r\n                                    subcategory: subcategory.id,\r\n                                    publisher: '',\r\n                                    title: '',\r\n                                    author: '',\r\n                                    interpreter: '',\r\n                                    ISBN: ''\r\n                                  };\r\n                                  reload('/products')\r\n                                \"\r\n                                >{{ subcategory.name }}\r\n                              </a>\r\n                            </span>\r\n                          </li></ng-container\r\n                        >\r\n                      </ul>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </ul>\r\n              </li>\r\n              <li class=\" menu__item\">\r\n                <a class=\"menu__link\" [routerLink]=\"['/contact']\">Contact</a>\r\n              </li>\r\n              <ng-container *ngIf=\"this.usersService.isLogin()\">\r\n                <li class=\" menu__item\">\r\n                  <a class=\"menu__link\" [routerLink]=\"['/orderlist']\"\r\n                    >MyOrders</a\r\n                  >\r\n                </li>\r\n              </ng-container>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n    <div class=\"top_nav_right\">\r\n      <div style=\"width: 50%;\">\r\n        <div class=\"wthreecartaits wthreecartaits2 cart cart box_1\">\r\n          <a href=\"#\" data-toggle=\"modal\" data-target=\"#cart\"\r\n            ><i\r\n              class=\"fa fa-cart-arrow-down fa-lg\"\r\n              aria-hidden=\"true\"\r\n              (click)=\"ngOnInit()\"\r\n            ></i\r\n          ></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</div>\r\n<!-- //選單跟購物車圖示 -->\r\n<!-- 點購物車圖示會跳出來的那一塊 -->\r\n<div class=\"modal fade\" id=\"cart\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- 那一塊裡的內容 -->\r\n    <div class=\"modal-content\">\r\n      <!-- 那一塊的header（包含右上角的叉叉） -->\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n          &times;\r\n        </button>\r\n      </div>\r\n      <!-- //那一塊的header -->\r\n      <div class=\"modal-body modal-body-sub_agile\">\r\n        <div class=\"\">\r\n          <h3 class=\"agileinfo_sign\">購物車 <span>清單</span></h3>\r\n          <div class=\"clearfix\"></div>\r\n          <div>\r\n            <div>\r\n              <h2>\r\n                購物車中有<span>{{ cart?.length }}項商品</span>\r\n              </h2>\r\n              <br />\r\n              <!-- 購物車表格 -->\r\n              <ng-container *ngIf=\"cart\">\r\n                <table class=\"product_list\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th></th>\r\n                      <th>商品名稱</th>\r\n                      <th>售價</th>\r\n                      <th>數量</th>\r\n                      <th>刪除</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <ng-container\r\n                    *ngFor=\"let item of this.show_cart; let index = index\"\r\n                  >\r\n                    <tr>\r\n                      <td>{{ index + 1 }}</td>\r\n                      <td>\r\n                        <a data-dismiss=\"modal\" (click)=\"clickItem(item)\">{{\r\n                          item?.product?.title\r\n                        }}</a>\r\n                      </td>\r\n                      <td>NT${{ item?.product?.sale_price }}</td>\r\n                      <td>{{ item?.item_amount }}</td>\r\n                      <td>\r\n                        <p style=\"text-align:center;\">\r\n                          <img\r\n                            src=\"assets/images/close_1.png\"\r\n                            (click)=\"delete_item(index)\"\r\n                          />\r\n                        </p>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </table>\r\n              </ng-container>\r\n              <!-- //購物車表格 -->\r\n              <div class=\"clearfix\"></div>\r\n              <br />\r\n              <input\r\n                type=\"button\"\r\n                class=\"function_button\"\r\n                value=\"前往結帳\"\r\n                (click)=\"checkout()\"\r\n                data-dismiss=\"modal\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n      </div>\r\n      <!-- //那一塊裡的內容 -->\r\n    </div>\r\n  </div>\r\n  <!-- //點購物車圖示會跳出來的那一塊 -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(usersService, cartService, productsService, router, cookieService) {
        this.usersService = usersService;
        this.cartService = cartService;
        this.productsService = productsService;
        this.router = router;
        this.cookieService = cookieService;
        this.categories = [];
    }
    Object.defineProperty(HeaderComponent.prototype, "show_cart", {
        get: function () {
            return this.cartService.show_cart;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // read categories
        this.productsService.getCategories().subscribe(function (data) {
            _this.categories = data.data;
            _this.cartService.show();
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.cartService.patchCart(this.cartService.cart);
        // 等下處理成 註冊新會員後跟結帳完自動patch一個空購物車
        this.usersService.logout();
        alert('已登出');
        if (this.cookieService.check('cart') === true) {
            this.cartService.cart = JSON.parse(this.cookieService.get('cart'));
        }
        this.router.navigate(['/']);
    };
    HeaderComponent.prototype.delete_item = function (index) {
        this.cartService.delete_item(index);
        this.cartService.show();
    };
    Object.defineProperty(HeaderComponent.prototype, "cart", {
        get: function () {
            return this.cartService.cart;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.checkout = function () {
        if (this.usersService.isLogin()) {
            if (JSON.stringify(this.cart) === '[]') {
                alert('購物車中沒有商品。');
            }
            else {
                this.router.navigate(['/cartlist']);
            }
        }
        else {
            alert('請登入後結帳。');
            this.router.navigate(['/login']);
        }
    };
    HeaderComponent.prototype.clickItem = function (item) {
        var _this = this;
        if (item !== null) {
            this.router
                .navigateByUrl('/reload', { skipLocationChange: true })
                .then(function () { return _this.router.navigate(['/products', item.id]); });
        }
    };
    HeaderComponent.prototype.reload = function (url) {
        var _this = this;
        this.router
            .navigateByUrl('/reload', { skipLocationChange: true })
            .then(function () { return _this.router.navigate([url]); });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_0__["UsersService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 輪播牆 -->\r\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\" class=\"\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\" class=\"\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\" class=\"\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"4\" class=\"\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"item active\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>The Biggest <span>Sale</span></h3>\r\n          <p>Special for today</p>\r\n          <a class=\"hvr-outline-out button2\" [routerLink]=\"['/products']\">Shop Now </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"item item2\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Summer <span>Collection</span></h3>\r\n          <p>New Arrivals On Sale</p>\r\n          <a class=\"hvr-outline-out button2\" [routerLink]=\"['/products']\">Shop Now </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"item item3\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>The Biggest <span>Sale</span></h3>\r\n          <p>Special for today</p>\r\n          <a class=\"hvr-outline-out button2\" [routerLink]=\"['/products']\">Shop Now </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"item item4\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>Summer <span>Collection</span></h3>\r\n          <p>New Arrivals On Sale</p>\r\n          <a class=\"hvr-outline-out button2\" [routerLink]=\"['/products']\">Shop Now </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"item item5\">\r\n      <div class=\"container\">\r\n        <div class=\"carousel-caption\">\r\n          <h3>The Biggest <span>Sale</span></h3>\r\n          <p>Special for today</p>\r\n          <a class=\"hvr-outline-out button2\" [routerLink]=\"['/products']\">Shop Now </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n  <!-- The Modal -->\r\n</div>\r\n<!-- //banner -->\r\n<!-- /new_arrivals -->\r\n<div class=\"new_arrivals_agile_w3ls_info\">\r\n  <div class=\"container\">\r\n    <h3 class=\"wthree_text_info\">新書 <span>上架</span></h3>\r\n\r\n\r\n    <ng-container *ngFor=\"let item of data.data; let index=index;\">\r\n      <div class=\"col-md-3 product-men\" *ngIf=\"item.stock > 0\">\r\n        <div class=\"men-pro-item simpleCart_shelfItem\">\r\n          <div class=\"men-thumb-item\">\r\n            <img [src]=\"item.picture\" alt=\"\" class=\"pro-image-front\">\r\n            <img [src]=\"item.picture\" alt=\"\" class=\"pro-image-back\">\r\n            <div class=\"men-cart-pro\">\r\n              <div class=\"inner-men-cart-pro\">\r\n                <a [routerLink]=\"['/products/', item.id]\" class=\"link-product-add-cart\">商品資訊</a>\r\n              </div>\r\n            </div>\r\n            <span class=\"product-new-top\">New</span>\r\n\r\n          </div>\r\n          <div class=\"item-info-product \">\r\n            <h4><a [routerLink]=\"['/products/', item?.id]\">{{ item?.title }}</a></h4>\r\n            <div class=\"info-product-price\">\r\n              <span class=\"item_price\">${{ item?.sale_price }}</span>\r\n              <del>${{ item?.list_price }}</del>\r\n            </div>\r\n            <div>\r\n              <input type=\"button\" class=\"function_button\" value=\"加入購物車\" (click)=\"add_to_cart(item.id, 1, item.product_stock)\">\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <div class=\"clearfix\"></div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n<!-- //new_arrivals -->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(productsService, cartService) {
        this.productsService = productsService;
        this.cartService = cartService;
        this.data = { data: [] };
        this.Today = new Date().getFullYear;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getNewProducts().subscribe(function (data) {
            _this.data = data;
            console.log(data);
        }, function (response) {
            console.log(response);
        });
    };
    HomeComponent.prototype.add_to_cart = function (id, item_amount, stock) {
        this.cartService.add_to_cart(id, parseInt(item_amount, 10), stock);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 登入 -->\r\n\r\n<!-- Modal content -->\r\n<div class=\"modal-content\" style=\"padding: 100px;\">\r\n  <div class=\"modal-body modal-body-sub_agile\">\r\n    <div class=\"col-md-8 modal_body_left modal_body_left1\">\r\n      <h3 class=\"agileinfo_sign\">Sign In <span>Now</span></h3>\r\n      <form name=\"loginForm\">\r\n        <div class=\"styled-input\">\r\n          <input\r\n            ng-model=\"email\"\r\n            name=\"email\"\r\n            required=\"\"\r\n            [(ngModel)]=\"user.email\"\r\n            required\r\n            type=\"email\"\r\n          />\r\n          <label>Email</label\r\n          ><label\r\n            style=\"padding-left: 80%; color:red;\"\r\n            ng-show=\"loginForm.email.$error.required && loginForm.email.$dirty\"\r\n            >請勿空白。</label\r\n          >\r\n        </div>\r\n        <div class=\"styled-input\">\r\n          <input\r\n            type=\"password\"\r\n            name=\"password\"\r\n            ng-modle=\"password\"\r\n            required=\"\"\r\n            [(ngModel)]=\"user.password\"\r\n            ng-minlength=\"6\"\r\n            required\r\n          />\r\n          <label>Password</label>\r\n          <label\r\n            style=\"padding-left: 80%; color:red;\"\r\n            ng-show=\"loginForm.password.$error.required && loginForm.email.$dirty\"\r\n            >請勿空白。</label\r\n          >\r\n        </div>\r\n\r\n        <input\r\n          type=\"button\"\r\n          class=\"function_button\"\r\n          value=\"登入\"\r\n          (click)=\"login()\"\r\n          ng-disable=\"loginForm.$invalid\"\r\n        />\r\n        <p ><a href=\"http://host.limaois.me:1723/password/reset\"> 忘記密碼</a></p>\r\n      </form>\r\n\r\n      <div class=\"clearfix\"></div>\r\n      <p><a href=\"#\" [routerLink]=\"['/signup']\"> 點我註冊會員</a></p>\r\n    </div>\r\n    <div class=\"col-md-4 modal_body_right modal_body_right1\">\r\n      <img src=\"assets/images/log_pic.jpg\" alt=\" \" />\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</div>\r\n<!-- //Modal content -->\r\n\r\n<!-- //登入 -->\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, cartService, cookieService, router) {
        this.usersService = usersService;
        this.cartService = cartService;
        this.cookieService = cookieService;
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.cookieService.check('cart') === true) {
            // 如果有cookie先存起來
            this.cookieService.set('cart', JSON.stringify(this.cartService.cart));
        }
        this.cartService.cart = []; // 清空購物車
        this.usersService.login(this.user).subscribe(function (data) {
            if (data.token) {
                localStorage.setItem('token', data.token);
                _this.cartService.getCart().subscribe(function (cartdata) {
                    // 放入資料庫中的購物車
                    console.log(cartdata);
                    if (cartdata.products !== {}) {
                        Object.keys(cartdata.products).forEach(function (product) {
                            _this.cartService.cart.push({
                                id: product,
                                item_amount: cartdata.products[product]
                            });
                        });
                    }
                    console.log(_this.cartService.cart);
                }, function (err) {
                    console.log(err);
                });
                alert('登入成功');
                _this.router.navigate(['/']);
            }
        }, function (err) {
            console.log(err);
            if (err.err === 'Unauthorized') {
                alert('帳號或密碼有誤。');
            }
            else {
                alert('登入失敗。');
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/master/master.component.css":
/*!*********************************************!*\
  !*** ./src/app/master/master.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master/master.component.html":
/*!**********************************************!*\
  !*** ./src/app/master/master.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n<a href=\"#home\" class=\"scroll\" id=\"toTop\" style=\"display: block;\"> <span id=\"toTopHover\" style=\"opacity: 1;\"> </span></a>\n"

/***/ }),

/***/ "./src/app/master/master.component.ts":
/*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MasterComponent = /** @class */ (function () {
    function MasterComponent(usersService, cookieService, cartService) {
        this.usersService = usersService;
        this.cookieService = cookieService;
        this.cartService = cartService;
    }
    MasterComponent.prototype.ngOnInit = function () {
        if (this.usersService.isLogin()) {
            setInterval(this.usersService.refresh, 30 * 60 * 1000);
        }
        if (this.usersService.isLogin()) {
            if (this.cookieService.check('cart') === true) {
                this.cartService.cart = JSON.parse(this.cookieService.get('cart'));
            }
            else {
                this.cookieService.set('cart', JSON.stringify(this.cartService.cart));
            }
        }
    };
    MasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/master/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.css */ "./src/app/master/master.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"this.usersService.isLogin(); else elseTmpl \">\r\n  <div class=\"header-bot\" align=\"center\"><font color=\"green\"  face=\"微軟正黑體\" size = \"7\" > 歷史訂單 </font>\r\n  </div>\r\n\r\n  <table width=\"1000\" border=\"1\" align=\"center\" valign=\"center\" >\r\n    　<tr  align=\"center\">\r\n        <td colspan=\"2\">\r\n          <font size=\"5\" color=\"red\" face=\"微軟正黑體\">訂單紀錄</font>\r\n        </td>\r\n    　</tr>\r\n      <tr>\r\n    　  <td align=\"center\" width=\"20%\">\r\n          <font size=\"5\" color=\"red\" face=\"微軟正黑體\">訂單編號</font>\r\n        </td>\r\n        <td align=\"center\" width=\"80%\">\r\n          <font size=\"5\" color=\"red\" face=\"微軟正黑體\">訂單內容</font>\r\n        </td>\r\n      </tr>\r\n      <ng-container *ngFor=\"let item of this.orderlist; let index=index; let last=last;\">\r\n          <tr align=\"center\">\r\n              <td>\r\n                訂單{{item.id}}\r\n              </td>\r\n              <td>\r\n                <table width=\"100%\" border=\"1\">\r\n                  <tr>\r\n                    <td width=\"20%\">\r\n                      商品列\r\n                    </td>\r\n                    <td>\r\n                      <table width=\"100%\" border=\"1\">\r\n                        <ng-container *ngFor=\"let product of item.productlist; let index=index; let last=last;\">\r\n                          <tr align=\"center\" >\r\n                            <td width=\"30%\" rowspan=\"2\">\r\n                              {{product.title}}\r\n                            </td>\r\n                            <td>\r\n                              <tr align=\"center\">價格：{{product.sale_price}}</tr>\r\n                            </td>\r\n                          </tr>\r\n                          <tr><td align=\"center\">數量：{{item.products[product.id]}}</td></tr>\r\n                        </ng-container>\r\n                      </table>\r\n\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>訂單狀態:</td>\r\n                    <td>{{status[item.state]}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>付款方式:</td>\r\n                    <td>{{pay_method[item.pay_method]}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>付款總金額:</td>\r\n                    <td>{{item.totalAmount+65}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>訂單留言:</td>\r\n                    <td>{{item.message}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>配送方式:</td>\r\n                    <td>{{skipMethod[item.ship_method]}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>配送資訊:</td>\r\n                    <td>{{item.ship_information}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>收件人:</td>\r\n                    <td>{{item.receiver}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>收件人電話:</td>\r\n                    <td>{{item.receiver_phone}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>發票號碼:</td>\r\n                    <td>{{item.invoice_number}}</td>\r\n                  </tr>\r\n                </table>\r\n              </td>\r\n          </tr>\r\n        </ng-container>\r\n    </table><br>\r\n\r\n</ng-container>\r\n<ng-template #elseTmpl>\r\n    <div align= \"center\">\r\n      <font color=\"red\" size = \"9\" >請先登入</font>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "./src/app/orders.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../users.service */ "./src/app/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderComponent = /** @class */ (function () {
    function OrderComponent(orders, products, usersService) {
        this.orders = orders;
        this.products = products;
        this.usersService = usersService;
        this.status = ['未出貨(購物車中)', '已出貨', '交易已完成'];
        this.pay_method = ['信用卡', '超商付款'];
        this.skipMethod = ['超商', '宅配'];
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orders.getOrders().subscribe(function (response) {
            _this.orderlist = response.data;
            console.log(response);
            _this.orderlist.forEach(function (order) {
                order.productlist = [];
                order.totalAmount = 0;
                Object.keys(order.products).forEach(function (key) {
                    _this.products.getProduct(key).subscribe(function (product) {
                        order.productlist.push(product);
                        order.totalAmount += product.sale_price * order.products[product.id];
                    });
                });
            });
        });
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
            _products_service__WEBPACK_IMPORTED_MODULE_0__["ProductsService"],
            _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/orders.service.ts":
/*!***********************************!*\
  !*** ./src/app/orders.service.ts ***!
  \***********************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersService = /** @class */ (function () {
    function OrdersService(httpClient, cartService) {
        this.httpClient = httpClient;
        this.cartService = cartService;
        this.order = {
            state: '1',
            message: '',
            pay_method: '0',
            receiver: '',
            receiver_phone: '',
            products: [],
            ship_method: '0'
        };
    }
    OrdersService.prototype.getOrders = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "orders", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        });
    };
    OrdersService.prototype.patchOrder = function () {
        var _this = this;
        var orderstring = '';
        this.cartService.cart.forEach(function (product) {
            _this.order.products[product.id] = product.item_amount;
        });
        console.log(this.order.products);
        for (var key in this.order) {
            if (key === 'products') {
                orderstring = orderstring.concat(key, '=', JSON.stringify(this.order[key]), '&');
            }
            else {
                orderstring = orderstring.concat(key, '=', this.order[key]);
                if (key !== 'ship_method') {
                    orderstring = orderstring.concat('&');
                }
            }
        }
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "orders", "?" + orderstring);
        return this.httpClient
            .patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "orders", "?" + orderstring, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
            .subscribe(function (response) {
            console.log(response);
        });
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsService = /** @class */ (function () {
    function ProductsService(httpClient) {
        this.httpClient = httpClient;
        this.year = new Date().getFullYear();
        this.search = {
            category: '',
            subcategory: '',
            publisher: '',
            title: '',
            author: '',
            interpreter: '',
            ISBN: ''
        };
    }
    ProductsService.prototype.getNewProducts = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "products?publish_year=" + this.year);
    };
    ProductsService.prototype.getProducts = function (amount, page, sort, search) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "products?count=" + amount + "&page=" + page + "&sort=" + sort + "&search=" + JSON.stringify(search));
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "products/" + id);
    };
    ProductsService.prototype.getCategories = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "categories/");
    };
    ProductsService.prototype.getSubcategories = function (category) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "categories/" + category);
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keyword_list {\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n  width: 100%;\r\n}\r\n.keyword_list tr {\r\n  height: 50px;\r\n}\r\n.keyword_list th {\r\n  text-align: end;\r\n  padding: 0px 20px 0px 25px;\r\n  width: 30%;\r\n}\r\n.keyword_list td {\r\n  width: 70%;\r\n}\r\n.keyword_list input {\r\n  width: 80%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- title -->\r\n<div class=\"page-head_agile_info_w3l\">\r\n  <div class=\"container\">\r\n    <h3>Products</h3>\r\n    <div class=\"services-breadcrumb\">\r\n      <div class=\"agile_inner_breadcrumb\">\r\n        <ul class=\"w3_short\">\r\n          <li><a [routerLink]=\"['/']\">Home</a><i>|</i></li>\r\n          <li>Products</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- //title -->\r\n<div class=\"banner-bootom-w3-agileits\">\r\n  <div class=\"container\">\r\n    <!-- 左欄 -->\r\n    <div class=\"col-md-4 products-left\">\r\n      <div class=\"community-poll\">\r\n        <h4>Search</h4>\r\n          <div>\r\n            <table class=\"keyword_list\">\r\n              <tr>\r\n                <th>主類別</th>\r\n                  <td>\r\n                    <select\r\n                      [(ngModel)]=\"this.productsService.search.category\"\r\n                      (change)=\"this.productsService.search.subcategory='';getSubcategories($event.target.value);\"\r\n                    >\r\n                      -->\r\n                      <option value=\"\">請選擇主類別</option>\r\n\r\n                      <option\r\n                        *ngFor=\"let category of categories\"\r\n                        [value]=\"category.id\"\r\n                        >{{ category?.name }}</option\r\n                      >\r\n                    </select>\r\n                  </td>\r\n              </tr>\r\n              <tr>\r\n                <th>次類別</th>\r\n                  <td>\r\n                    <select [(ngModel)]=\"this.productsService.search.subcategory\">\r\n                      <ng-container *ngIf=\"subcategories !== []; else: elseTag\">\r\n                        <option value=\"\">請選擇次類別</option>\r\n\r\n                          <option *ngFor=\"let subcategory of subcategories\" [value]=\"subcategory.id\">{{\r\n                            subcategory?.name\r\n                          }}</option>\r\n                      </ng-container>\r\n                      <ng-template #elseTag>\r\n                        <option value=\"\">該類別沒有次類別。</option>\r\n                      </ng-template>\r\n                    </select>\r\n                  </td>\r\n              </tr>\r\n              <tr>\r\n                <th>書名</th>\r\n                <td>\r\n                  <input\r\n                     type=\"text\"\r\n                    placeholder=\"請輸入書名\"\r\n                    [(ngModel)]=\"this.productsService.search.title\"\r\n                  />\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>作者</th>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    placeholder=\"請輸入作者\"\r\n                    [(ngModel)]=\"this.productsService.search.author\"\r\n                  />\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>譯者</th>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    placeholder=\"請輸入譯者\"\r\n                    [(ngModel)]=\"this.productsService.search.interpreter\"                    />\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>出版社</th>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    placeholder=\"請輸入出版社\"\r\n                    [(ngModel)]=\"this.productsService.search.publisher\"\r\n                  />\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th>ISBN</th>\r\n                <td>\r\n                  <input\r\n                    type=\"text\"\r\n                    placeholder=\"請輸入ISBN\"\r\n                    [(ngModel)]=\"this.productsService.search.ISBN\"\r\n                  />\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n              <div style=\"padding: 5px 0px 20px 0px; text-align: center\">\r\n                <input\r\n                  type=\"button\"\r\n                  class=\"function_button\"\r\n                  value=\"搜尋商品\"\r\n                  (click)=\"search_submit();\"\r\n                />\r\n              </div>\r\n            </div>\r\n      </div>\r\n      <div class=\"css-treeview\">\r\n        <h4>Categories</h4>\r\n        <ul class=\"tree-list-pad\">\r\n          <li>\r\n            <input type=\"checkbox\" checked=\"checked\" id=\"\" />\r\n            <label\r\n              for=\"item-0\"\r\n              (click)=\"\r\n                this.productsService.search = {\r\n                  category: '',\r\n                  subcategory: '',\r\n                  publisher: '',\r\n                  title: '',\r\n                  author: '',\r\n                  interpreter: '',\r\n                  ISBN: ''\r\n                };\r\n                page = 1;\r\n                search_submit();\r\n              \"\r\n              >\r\n              <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\r\n              所有商品\r\n            </label>\r\n\r\n            <ul>\r\n              <ng-container *ngFor=\"let category of categories; let index = index\">\r\n                <li>\r\n                  <input type=\"checkbox\" id=\"\" checked=\"checked\" />\r\n                  <label\r\n                    for=\"item-0-0\">\r\n                    <a\r\n                      (click)=\"\r\n                        this.productsService.search = {\r\n                          category: category.id,\r\n                          subcategory: '',\r\n                          publisher: '',\r\n                          title: '',\r\n                          author: '',\r\n                          interpreter: '',\r\n                          ISBN: ''\r\n                        };\r\n                        page = 1;\r\n                        search_submit();\r\n                      \"\r\n                      ><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i>\r\n                      {{ category?.name }}\r\n                    </a>\r\n                  </label>\r\n                  <ul>\r\n                    <ng-container *ngFor=\"let subcategory of category.subcategory\">\r\n                      <li>\r\n                        <a (click)=\"\r\n                            this.productsService.search = {\r\n                              category: category.id,\r\n                              subcategory: subcategory.id,\r\n                              publisher: '',\r\n                              title: '',\r\n                              author: '',\r\n                              interpreter: '',\r\n                              ISBN: ''\r\n                            };\r\n                            page = 1;\r\n                            search_submit();\r\n                          \"\r\n                          >{{ subcategory?.name }}\r\n                        </a>\r\n                      </li>\r\n                    </ng-container>\r\n                  </ul>\r\n                </li>\r\n              </ng-container>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n    <!-- //左欄 -->\r\n    <div class=\"col-md-8 products-right\">\r\n      <!-- 右上區塊 -->\r\n      <h5>\r\n        商品 <span>列表（共{{ data.meta.total }}項）</span>\r\n      </h5>\r\n      <div style=\"padding-top: 5%;\">\r\n        <p *ngIf=\"show.category !== ''\">主類別：{{ show.category }}</p>\r\n        <p *ngIf=\"show.subcategory !== ''\">次類別：{{ show.subcategory }}</p>\r\n        <p *ngIf=\"show.title !== ''\">書名：{{ show.title }}</p>\r\n        <p *ngIf=\"show.author !== ''\">作者：{{ show.author }}</p>\r\n        <p *ngIf=\"show.interpreter !== ''\">譯者：{{ show.interpreter }}</p>\r\n        <p *ngIf=\"show.publisher !== ''\">出版社：{{ show.publisher }}</p>\r\n        <p *ngIf=\"show.ISBN !== ''\">ISBN：{{ show.ISBN }}</p>\r\n      </div>\r\n      <div class=\"sort-grid\">\r\n        <div class=\"sorting\">\r\n          <h6>Sort By</h6>\r\n          <select\r\n            id=\"country1\"\r\n            [(ngModel)]=\"sort\"\r\n            (change)=\"page = 1; ngOnInit()\"\r\n            class=\"frm-field required sect\"\r\n          >\r\n            <option value=\"\">請選擇排序方式</option>\r\n            <option value=\"sale_price:-\">價格：由高到低</option>\r\n            <option value=\"sale_price\">價格：由低到高</option>\r\n            <option value=\"publish_year:-\">出版年份：由新到舊</option>\r\n            <option value=\"publish_year\">出版年份：由舊到新</option>\r\n          </select>\r\n          <div class=\"clearfix\"></div>\r\n        </div>\r\n        <!-- 排序（已完成） -->\r\n        <div class=\"sorting\">\r\n          <h6>Showing</h6>\r\n          <select\r\n            id=\"amount\"\r\n            [(ngModel)]=\"amount\"\r\n            (change)=\"page = 1; ngOnInit()\"\r\n          >\r\n            <option value=\"3\">3</option>\r\n            <option value=\"9\">9</option>\r\n            <option value=\"12\">15</option>\r\n            <option value=\"12\">21</option>\r\n          </select>\r\n        </div>\r\n        <!-- /排序 -->\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n      <!-- //右上區塊 -->\r\n      <!-- 商品列表（完成） -->\r\n      <ng-container\r\n        *ngFor=\"let item of data.data; let index = index; let last = last\"\r\n      >\r\n        <div class=\"col-md-4 product-men\">\r\n          <div class=\"men-pro-item simpleCart_shelfItem\">\r\n            <div class=\"men-thumb-item\">\r\n              <img [src]=\"item?.picture\" alt=\"\" class=\"pro-image-front\" />\r\n              <img [src]=\"item?.picture\" alt=\"\" class=\"pro-image-back\" />\r\n              <div class=\"men-cart-pro\">\r\n                <div class=\"inner-men-cart-pro\">\r\n                  <a\r\n                    [routerLink]=\"['/products/', item?.id]\"\r\n                    class=\"link-product-add-cart\"\r\n                    >商品資訊</a\r\n                  >\r\n                </div>\r\n              </div>\r\n              <span class=\"product-new-top\" *ngIf=\"item.publish_year === year\"\r\n                >新品</span\r\n              >\r\n              <span class=\"product-out-of-stock-top\" *ngIf=\"item.stock === 0\"\r\n                >缺貨</span\r\n              >\r\n            </div>\r\n            <div class=\"item-info-product \">\r\n              <h4>\r\n                <a [routerLink]=\"['/products/', item?.id]\">{{ item?.title }}</a>\r\n              </h4>\r\n              <div class=\"info-product-price\">\r\n                <span class=\"item_price\">${{ item?.sale_price }}</span>\r\n                <del>${{ item?.list_price }}</del>\r\n              </div>\r\n              <div>\r\n                <input\r\n                  type=\"button\"\r\n                  class=\"function_button\"\r\n                  value=\"加入購物車\"\r\n                  (click)=\"add_to_cart(item?.id, 1, item.stock)\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <!-- //商品列表 -->\r\n      <div class=\"clearfix\"></div>\r\n      <!-- 選頁（完成） -->\r\n      <div style=\"text-align: center\">\r\n        <ul class=\"pagination pagination-lg\">\r\n          <li *ngIf=\"data.meta.current_page != data.meta.from\">\r\n            <a (click)=\"page = data.meta.from; ngOnInit()\"\r\n              ><span aria-hidden=\"true\">«</span></a\r\n            >\r\n          </li>\r\n          <li *ngIf=\"page > 1\">\r\n            <a (click)=\"page = page - 1; ngOnInit()\"\r\n              ><span aria-hidden=\"true\"><</span></a\r\n            >\r\n          </li>\r\n          <li *ngIf=\"page > 2\">\r\n            <a (click)=\"page = page - 2; ngOnInit()\">{{ page - 2 }}</a>\r\n          </li>\r\n          <li *ngIf=\"page > 1\">\r\n            <a (click)=\"page = page - 1; ngOnInit()\">{{ page - 1 }}</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            <a>{{ page }}</a>\r\n          </li>\r\n          <li *ngIf=\"data.meta.current_page < data.meta.last_page\">\r\n            <a (click)=\"page = page + 1; ngOnInit()\">{{ page + 1 }}</a>\r\n          </li>\r\n          <li *ngIf=\"data.meta.current_page - data.meta.current_page > 1\">\r\n            <a (click)=\"page = page + 2; ngOnInit()\">{{ page + 2 }}</a>\r\n          </li>\r\n\r\n          <li *ngIf=\"data.meta.current_page < data.meta.last_page\">\r\n            <a (click)=\"page = page + 1; ngOnInit()\">></a>\r\n          </li>\r\n          <li *ngIf=\"data.meta.current_page != data.meta.last_page\">\r\n            <a\r\n              (click)=\"page = data.meta.last_page; ngOnInit()\"\r\n              aria-label=\"Next\"\r\n              ><span aria-hidden=\"true\">»</span></a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- //選頁 -->\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, cartService) {
        this.productsService = productsService;
        this.cartService = cartService;
        this.amount = 9;
        this.page = 1;
        this.year = new Date().getFullYear();
        this.show = {
            category: '',
            subcategory: '',
            publisher: '',
            title: '',
            author: '',
            interpreter: '',
            ISBN: ''
        };
        this.sort = '';
        this.categories = [];
        this.subcategories = [];
        this.data = { data: [], link: [], meta: [] };
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getCategories().subscribe(function (data) {
            _this.categories = data.data;
            if (_this.productsService.search.category !== '') {
                _this.show.category = _this.categories[parseInt(_this.productsService.search.category, 10) - 1].name;
            }
            else {
                _this.show.category = '';
            }
            if (_this.productsService.search.subcategory !== '') {
                _this.productsService
                    .getSubcategories(_this.productsService.search.category)
                    .subscribe(function (data2) {
                    _this.subcategories = data2.data;
                    _this.show.subcategory = _this.subcategories[parseInt(_this.productsService.search.subcategory, 10) - 1].name;
                });
            }
            else {
                _this.show.subcategory = '';
            }
            _this.show.publisher = _this.productsService.search.publisher;
            _this.show.title = _this.productsService.search.title;
            _this.show.author = _this.productsService.search.author;
            _this.show.interpreter = _this.productsService.search.interpreter;
            _this.show.ISBN = _this.productsService.search.ISBN;
            _this.getProducts();
        });
    };
    ProductsComponent.prototype.add_to_cart = function (id, item_amount, stock) {
        this.cartService.add_to_cart(id, item_amount, stock);
    };
    ProductsComponent.prototype.search_submit = function () {
        var _this = this;
        if (this.productsService.search.category !== '') {
            this.show.category = this.categories[parseInt(this.productsService.search.category, 10) - 1].name;
        }
        else {
            this.show.category = '';
        }
        if (this.productsService.search.subcategory !== '') {
            this.productsService
                .getSubcategories(this.productsService.search.category)
                .subscribe(function (data) {
                _this.subcategories = data.data;
                _this.show.subcategory = _this.subcategories[parseInt(_this.productsService.search.subcategory, 10) - 1].name;
            });
        }
        else {
            this.show.subcategory = '';
        }
        this.show.publisher = this.productsService.search.publisher;
        this.show.title = this.productsService.search.title;
        this.show.author = this.productsService.search.author;
        this.show.interpreter = this.productsService.search.interpreter;
        this.show.ISBN = this.productsService.search.ISBN;
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productsService
            .getProducts(this.amount, this.page, this.sort, this.productsService.search)
            .subscribe(function (data) {
            _this.data = data;
            _this.page = _this.data.meta.current_page;
        });
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/reload/reload.component.css":
/*!*********************************************!*\
  !*** ./src/app/reload/reload.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reload/reload.component.html":
/*!**********************************************!*\
  !*** ./src/app/reload/reload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reload works!\n</p>\n"

/***/ }),

/***/ "./src/app/reload/reload.component.ts":
/*!********************************************!*\
  !*** ./src/app/reload/reload.component.ts ***!
  \********************************************/
/*! exports provided: ReloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloadComponent", function() { return ReloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReloadComponent = /** @class */ (function () {
    function ReloadComponent() {
    }
    ReloadComponent.prototype.ngOnInit = function () {
    };
    ReloadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reload',
            template: __webpack_require__(/*! ./reload.component.html */ "./src/app/reload/reload.component.html"),
            styles: [__webpack_require__(/*! ./reload.component.css */ "./src/app/reload/reload.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReloadComponent);
    return ReloadComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 註冊 -->\n<!-- Modal content-->\n<div class=\"modal-content\" style=\"padding: 100px\">\n  <div class=\"modal-body modal-body-sub_agile\">\n    <div class=\"col-md-8 modal_body_left modal_body_left1\">\n      <h3 class=\"agileinfo_sign\">Sign Up <span>Now</span></h3>\n      <form action=\"#\" method=\"post\">\n        <div class=\"styled-input agile-styled-input-top\">\n          <input type=\"text\" name=\"Name\" required=\"\" [(ngModel)]=\"user.name\">\n          <label>暱稱</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"email\" name=\"Email\" required=\"\" [(ngModel)]=\"user.email\">\n          <label>Email</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"password\" name=\"password\" required=\"\" [(ngModel)]=\"user.password\">\n          <label>密碼</label>\n          <span></span>\n        </div>\n        <div class=\"styled-input\">\n          <input type=\"password\" name=\"password_confirmation\" required=\"\" [(ngModel)]=\"user.password_confirmation\">\n          <label>確認密碼</label>\n          <span></span>\n        </div>\n\n        <input type=\"button\" class=\"function_button\" value=\"註冊\" (click)=\"signup()\">\n        <ng-container *ngIf=\"user.password !== user.password_confirmation\"> 密碼不一致</ng-container>\n      </form>\n      <ul class=\"social-nav model-3d-0 footer-social w3_agile_social top_agile_third\">\n        <li><a href=\"#\" class=\"facebook\">\n            <div class=\"front\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></div>\n            <div class=\"back\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></div>\n          </a></li>\n        <li><a href=\"#\" class=\"twitter\">\n            <div class=\"front\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></div>\n            <div class=\"back\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></div>\n          </a></li>\n        <li><a href=\"#\" class=\"instagram\">\n            <div class=\"front\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></div>\n            <div class=\"back\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></div>\n          </a></li>\n        <li><a href=\"#\" class=\"pinterest\">\n            <div class=\"front\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></div>\n            <div class=\"back\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></div>\n          </a></li>\n      </ul>\n      <div class=\"clearfix\"></div>\n      <p><a href=\"#\">By clicking register, I agree to your terms</a></p>\n\n    </div>\n    <div class=\"col-md-4 modal_body_right modal_body_right1\">\n      <img src=\"assets/images/log_pic.jpg\" alt=\" \" />\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</div>\n<!-- //Modal content-->\n<!-- //註冊 -->\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(usersService, router, cartService) {
        this.usersService = usersService;
        this.router = router;
        this.cartService = cartService;
        this.user = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        var x = 0;
        for (var key in this.user) {
            if (this.user[key] === '') {
                x++;
            }
        }
        if (x > 0) {
            alert('請勿留白');
        }
        else {
            if (this.user.password !== this.user.password_confirmation) {
                alert('密碼不一致');
            }
            else {
                this.usersService.register(this.user).subscribe(function (data) {
                    console.log(data);
                    if (data.success) {
                        alert('註冊成功');
                        var cart = [];
                        _this.cartService.patchCart(cart);
                        _this.router.navigate(['/']);
                    }
                    else {
                        alert('註冊失敗');
                    }
                }, function (response) {
                    console.log(response);
                });
            }
        }
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(httpClient) {
        this.httpClient = httpClient;
        this.amount = 1;
        this.now = new Date();
    }
    UsersService.prototype.isLogin = function () {
        return localStorage.getItem('token');
    };
    UsersService.prototype.register = function (user) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "register", user);
    };
    UsersService.prototype.login = function (user) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "login", user);
    };
    UsersService.prototype.getUser = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "register");
    };
    UsersService.prototype.refresh = function () {
        this.httpClient
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api + "refresh", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('token', data.token);
        });
    };
    UsersService.prototype.logout = function () {
        return localStorage.removeItem('token');
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'http://host.limaois.me:1723/api/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Aya\全端\FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map