(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div id=\"container\">\n      <div class=\"logo-home\">\n          <div>{{ \"slogan\" | translate }}</div>\n      </div>\n      \n      <div class=\"box-login\" id=\"box-login\" [hidden]=hiddenLogin>\n        <div class=\"login\">\n            <input placeholder='{{ \"user\" | translate }}'  autofocus />\n            <input placeholder='{{ \"password\" | translate }}' />\n            <div class=\"box-forgot\"><a class=\"forgot\" (click)=\"openModalRemember()\">{{ \"forgot_password\" | translate }}</a></div>\n\n            <ion-button class=\"btn-plane-orange\" expand=\"full\">{{ \"entry\" | translate }}</ion-button>\n\n            <div><a class=\"accountnot\" (click)=\"openModalInfo()\">{{ \"accountnot\" | translate }}</a></div>\n\n        </div>\n      </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modals_info_info_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../modals/info/info.module */ "./src/app/modals/info/info.module.ts");
/* harmony import */ var _modals_info_info_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../modals/info/info.page */ "./src/app/modals/info/info.page.ts");
/* harmony import */ var _modals_remember_remember_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../modals/remember/remember.module */ "./src/app/modals/remember/remember.module.ts");
/* harmony import */ var _modals_remember_remember_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../modals/remember/remember.page */ "./src/app/modals/remember/remember.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");












var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            entryComponents: [
                _modals_remember_remember_page__WEBPACK_IMPORTED_MODULE_4__["RememberPage"],
                _modals_info_info_page__WEBPACK_IMPORTED_MODULE_2__["InfoPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_11__["HomePageRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                _modals_remember_remember_module__WEBPACK_IMPORTED_MODULE_3__["RememberPageModule"],
                _modals_info_info_module__WEBPACK_IMPORTED_MODULE_1__["InfoPageModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_10__["HomePage"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: url('background-home.jpg') 0 0/100% 100% no-repeat;\n  width: 100%;\n  height: 100%;\n}\n\n.logo-home {\n  position: absolute;\n  width: 100%;\n  height: 206px;\n  left: 0px;\n  top: 142px;\n  background: url('Logotipo.svg') center center no-repeat;\n  z-index: 1;\n}\n\n.logo-home div {\n  position: absolute;\n  width: 100%;\n  top: 136px;\n  color: #FFF;\n  text-align: center;\n  font-size: 12px;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.box-login {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n\n.box-login .login {\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  position: absolute;\n  width: 330px;\n  height: 218px;\n  left: calc(50% - 330px/2 - 0.36px);\n  top: calc(50% - 218px/2 + 224px);\n}\n\n.box-login .login input {\n  background: #FFF;\n  padding: 10px 20px;\n  border: none;\n  margin-top: 0px;\n  margin-bottom: 3px;\n}\n\n.box-forgot {\n  text-align: right;\n}\n\n.forgot {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  color: #FCFCFC;\n  text-align: right;\n  padding: 10px 0px;\n  display: inline-block;\n}\n\n.accountnot {\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  color: #FCFCFC;\n  text-align: left;\n  padding: 10px 0px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcaW9uaWNcXHNvY2lhbC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVEQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ0FKOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1ob21lLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTsgXG59IFxuXG5cbi5sb2dvLWhvbWV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjA2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMTQycHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0xvZ290aXBvLnN2ZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICAgIHotaW5kZXg6IDE7XG59XG4gXG4ubG9nby1ob21lIGRpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAxMzZweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgXG59XG5cbi5ib3gtbG9naW57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHotaW5kZXg6IDA7IFxufVxuXG4uYm94LWxvZ2luIC5sb2dpbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMzBweDtcbiAgaGVpZ2h0OiAyMThweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAzMzBweC8yIC0gMC4zNnB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDIxOHB4LzIgKyAyMjRweCk7XG59XG5cbi5ib3gtbG9naW4gLmxvZ2luIGlucHV0e1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufSBcblxuLmJveC1mb3Jnb3R7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZvcmdvdHtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgY29sb3I6ICNGQ0ZDRkM7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIFxuLmFjY291bnRub3R7XG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiAjRkNGQ0ZDO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSIsIiNjb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtaG9tZS5qcGdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dvLWhvbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwNnB4O1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMTQycHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvTG9nb3RpcG8uc3ZnXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICB6LWluZGV4OiAxO1xufVxuXG4ubG9nby1ob21lIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMTM2cHg7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5ib3gtbG9naW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5ib3gtbG9naW4gLmxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMzBweDtcbiAgaGVpZ2h0OiAyMThweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAzMzBweC8yIC0gMC4zNnB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDIxOHB4LzIgKyAyMjRweCk7XG59XG5cbi5ib3gtbG9naW4gLmxvZ2luIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uYm94LWZvcmdvdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZm9yZ290IHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICNGQ0ZDRkM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWNjb3VudG5vdCB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjRkNGQ0ZDO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modals_info_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../modals/info/info.page */ "./src/app/modals/info/info.page.ts");
/* harmony import */ var _modals_remember_remember_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../modals/remember/remember.page */ "./src/app/modals/remember/remember.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");





var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.hiddenLogin = false;
    }
    HomePage.prototype.openModalRemember = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hiddenLogin = true;
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_remember_remember_page__WEBPACK_IMPORTED_MODULE_2__["RememberPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        this.hiddenLogin = data.showBoxLoing;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openModalInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal, data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hiddenLogin = true;
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: _modals_info_info_page__WEBPACK_IMPORTED_MODULE_1__["InfoPage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        this.hiddenLogin = data.showBoxLoing;
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map