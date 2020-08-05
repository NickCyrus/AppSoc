(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modals-info-info-module~pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/info/info.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/info/info.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n \n  <div class=\"content\">\n\n      <div class=\"box-contet\">\n          <a (click)=\"salirModal()\" class=\"btn-exit\"></a>\n          <div class=\"logo-leyent\"></div> \n          <div class=\"box-info\">\n            <table>\n                  <tr>\n                    <td>Aquesta es una aplicació pels clients de Social Partners. \n                      Contacta amb nosaltres:</td>\n                  </tr>\n                  <tr>\n                    <td><img src=\"../../../assets/images/market.svg\" width=\"36\" height=\"36\" style=\"margin-top: 20px;\" /></td>\n                  </tr>\n                  <tr>\n                    <td>Passeig Verdaguer 171,<br/>\n                      Igualada 08700<br/>\n                      Barcelona</td>\n                  </tr>\n                  <tr>\n                    <td><img src=\"../../../assets/images/tel.svg\" width=\"36\" height=\"36\" style=\"margin-top: 20px;\" /></td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"tel:+34938050537\"> +34 93 805 05 37</a></td>\n                  </tr>\n                  <tr>\n                    <td><img src=\"../../../assets/images/email2.svg\" width=\"36\" height=\"36\" style=\"margin-top: 20px;\" /></td>\n                  </tr>\n                  <tr>\n                    <td><a href=\"mailto:info@socialpartners.org\">info@socialpartners.org</a></td>\n                  </tr>\n                  <tr>\n                    <td><img src=\"../../../assets/images/globe.svg\" width=\"36\" height=\"36\" style=\"margin-top: 20px;\" /></td>\n                  </tr> \n                  <tr>\n                    <td><a href=\"https://www.socialpartners.org\">www.socialpartners.org</a></td>\n                  </tr>\n            </table>\n            \n\n          </div>\n          \n      </div> \n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/modals/info/info-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modals/info/info-routing.module.ts ***!
  \****************************************************/
/*! exports provided: InfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function() { return InfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.page */ "./src/app/modals/info/info.page.ts");




var routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
    }
];
var InfoPageRoutingModule = /** @class */ (function () {
    function InfoPageRoutingModule() {
    }
    InfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InfoPageRoutingModule);
    return InfoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/modals/info/info.module.ts":
/*!********************************************!*\
  !*** ./src/app/modals/info/info.module.ts ***!
  \********************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-routing.module */ "./src/app/modals/info/info-routing.module.ts");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info.page */ "./src/app/modals/info/info.page.ts");








var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _info_routing_module__WEBPACK_IMPORTED_MODULE_6__["InfoPageRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forChild()
            ],
            declarations: [_info_page__WEBPACK_IMPORTED_MODULE_7__["InfoPage"]]
        })
    ], InfoPageModule);
    return InfoPageModule;
}());



/***/ }),

/***/ "./src/app/modals/info/info.page.scss":
/*!********************************************!*\
  !*** ./src/app/modals/info/info.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: transparent ;\n}\n\n.content {\n  background-color: rgba(207, 180, 156, 0.9);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.box-contet {\n  position: relative;\n  padding: 39px;\n  width: 100%;\n  height: 100%;\n}\n\n.btn-exit {\n  background: url('mdi_close.svg') 0 0/100% 100% no-repeat;\n  width: 24px;\n  height: 24px;\n  display: block;\n}\n\n.logo-leyent {\n  background: url('logo-leyent.svg') 0 0/100% 100% no-repeat;\n  width: 105px;\n  height: 105px;\n  display: block;\n  position: absolute;\n  top: 50px;\n  right: 30px;\n}\n\n.box-info {\n  position: absolute;\n  width: 100%;\n  right: 0px;\n  top: 180px;\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  display: flex;\n  align-items: center;\n  color: #000000;\n  padding: 0px 40px;\n}\n\n.box-info a {\n  color: #000000;\n  text-decoration: none;\n}\n\n.icon-ok {\n  background: url('ok.svg') 0 0/100% 100% no-repeat;\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  left: 62px;\n  top: 371px;\n  display: block;\n}\n\n.box-input {\n  position: absolute;\n  width: 282.46px;\n  height: 70px;\n  left: 62.9px;\n  bottom: 226px;\n}\n\n.box-input .input-color {\n  padding: 10px;\n  border: 0px;\n  width: 100%;\n  border-bottom: 2px solid var(--color-naranja);\n  color: var(--color-naranja);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2luZm8vQzpcXGlvbmljXFxzb2NpYWwvc3JjXFxhcHBcXG1vZGFsc1xcaW5mb1xcaW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9pbmZvL2luZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLHdEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSwwREFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURJQTtFQUNJLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDJCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvaW5mby9pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG4uY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMDcsIDE4MCwgMTU2LCAwLjkpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgLy8gI0RDQkZBN1xyXG59IFxyXG5cclxuLmJveC1jb250ZXR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzOXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4tZXhpdHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tZGlfY2xvc2Uuc3ZnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9nby1sZXllbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby1sZXllbnQuc3ZnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMTA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxufVxyXG5cclxuLmJveC1pbmZve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdG9wOiAxODBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBhZGRpbmc6MHB4IDQwcHg7XHJcbn1cclxuXHJcbi5ib3gtaW5mbyBhIHtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIFxyXG5cclxuLmljb24tb2t7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb2suc3ZnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBsZWZ0OiA2MnB4O1xyXG4gICAgdG9wOiAzNzFweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYm94LWlucHV0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI4Mi40NnB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbGVmdDogNjIuOXB4O1xyXG4gICAgYm90dG9tOiAyMjZweDtcclxufSBcclxuXHJcbi5ib3gtaW5wdXQgLmlucHV0LWNvbG9ye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItbmFyYW5qYSk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbmFyYW5qYSk7XHJcbn0gXHJcblxyXG4gICAiLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgO1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA3LCAxODAsIDE1NiwgMC45KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYm94LWNvbnRldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0bi1leGl0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tZGlfY2xvc2Uuc3ZnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvZ28tbGV5ZW50IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLWxleWVudC5zdmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDVweDtcbiAgaGVpZ2h0OiAxMDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICByaWdodDogMzBweDtcbn1cblxuLmJveC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAxODBweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDBweCA0MHB4O1xufVxuXG4uYm94LWluZm8gYSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pY29uLW9rIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vay5zdmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgbGVmdDogNjJweDtcbiAgdG9wOiAzNzFweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ib3gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyODIuNDZweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBsZWZ0OiA2Mi45cHg7XG4gIGJvdHRvbTogMjI2cHg7XG59XG5cbi5ib3gtaW5wdXQgLmlucHV0LWNvbG9yIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItbmFyYW5qYSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1uYXJhbmphKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modals/info/info.page.ts":
/*!******************************************!*\
  !*** ./src/app/modals/info/info.page.ts ***!
  \******************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");



var InfoPage = /** @class */ (function () {
    function InfoPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    InfoPage.prototype.ngOnInit = function () { };
    InfoPage.prototype.salirModal = function () {
        this.modalCtrl.dismiss({
            showBoxLoing: false
        });
    };
    InfoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    InfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/info/info.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./info.page.scss */ "./src/app/modals/info/info.page.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], InfoPage);
    return InfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~modals-info-info-module~pages-home-home-module.js.map