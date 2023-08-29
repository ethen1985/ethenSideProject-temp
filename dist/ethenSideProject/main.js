(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Angular\ethenSideProject\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "AytR":
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
const environment = {
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


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngzorro_ngzorro_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ngzorro/ngzorro.module */ "vfJH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ngzorro_ngzorro_module__WEBPACK_IMPORTED_MODULE_1__["NgzorroModule"],
        ], _ngzorro_ngzorro_module__WEBPACK_IMPORTED_MODULE_1__["NgzorroModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ngzorro_ngzorro_module__WEBPACK_IMPORTED_MODULE_1__["NgzorroModule"]], exports: [_ngzorro_ngzorro_module__WEBPACK_IMPORTED_MODULE_1__["NgzorroModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'tensorFlowJS';
        this.demoValue = 0;
        this.lucy = '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/zh */ "Kd/A");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _tensorFlow_mobile_net_mobile_net_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tensorFlow/mobile-net/mobile-net.component */ "g8Wm");
/* harmony import */ var _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time-line/time-line.component */ "rnbW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["zh_TW"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _tensorFlow_mobile_net_mobile_net_component__WEBPACK_IMPORTED_MODULE_10__["MobileNetComponent"],
        _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_11__["TimeLineComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "g8Wm":
/*!***************************************************************!*\
  !*** ./src/app/tensorFlow/mobile-net/mobile-net.component.ts ***!
  \***************************************************************/
/*! exports provided: MobileNetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNetComponent", function() { return MobileNetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "zhpf");
/* harmony import */ var _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow-models/mobilenet */ "g3tL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "A07A");













function MobileNetComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileNetComponent_div_13_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.deleteImage(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function MobileNetComponent_div_13_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { color: "#3F8600" }; };
function MobileNetComponent_div_13_ng_template_6_nz_statistic_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-statistic", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "percent");
} if (rf & 2) {
    const list_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, list_r12.probability))("nzTitle", list_r12.className)("nzValueStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
} }
function MobileNetComponent_div_13_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MobileNetComponent_div_13_ng_template_6_nz_statistic_0_Template, 2, 6, "nz-statistic", 18);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r1.predictions);
} }
function MobileNetComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function MobileNetComponent_div_13_Template_nz_card_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const item_r1 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.cardMouse(item_r1.fileName); })("mouseleave", function MobileNetComponent_div_13_Template_nz_card_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.cardMouse(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nz-card-meta", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MobileNetComponent_div_13_div_3_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MobileNetComponent_div_13_ng_template_4_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MobileNetComponent_div_13_ng_template_6_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzCover", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzDescription", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isHovered === item_r1.fileName);
} }
class MobileNetComponent {
    constructor() {
        this.picList = [];
        this.tempPic = {
            url: '',
            fileName: '',
            predictions: []
        };
        this.loading = false;
        this.isHovered = '';
        this.beforeUpload = (file) => {
            console.log("🚀 ~ file:", file);
            this.loading = true;
            this.handleImageUpload(file);
            return false; // 取消上傳操作
        };
    }
    ngOnInit() {
    }
    handleImageUpload(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const model = yield _tensorflow_models_mobilenet__WEBPACK_IMPORTED_MODULE_2__["load"]();
            const img = yield this.readImage(file);
            const tfImg = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["browser"].fromPixels(img);
            const predictions = yield model.classify(tfImg);
            this.tempPic.predictions = predictions;
            this.picList.push({
                url: img.src,
                fileName: file.name,
                predictions: predictions
            });
            this.loading = false;
        });
    }
    readImage(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = (error) => reject(error);
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });
    }
    deleteImage(item) {
        const index = this.picList.indexOf(item);
        if (index !== -1) {
            this.picList.splice(index, 1);
        }
    }
    cardMouse(fileName) {
        this.isHovered = fileName;
    }
}
MobileNetComponent.ɵfac = function MobileNetComponent_Factory(t) { return new (t || MobileNetComponent)(); };
MobileNetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MobileNetComponent, selectors: [["app-mobile-net"]], decls: 14, vars: 4, consts: [[3, "nzSpinning"], [1, "alldiv"], [1, "container"], [3, "nzBeforeUpload", "nzMultiple"], ["nz-button", ""], ["nz-icon", "", "nzType", "upload"], [1, "content-container"], [1, "card-container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["nzHoverable", "", 1, "card-bordered", 3, "nzCover", "mouseenter", "mouseleave"], ["nzTitle", "\u5206\u6790\u7D50\u679C", 3, "nzDescription"], ["class", "delete-container", 4, "ngIf"], ["coverTemplate", ""], ["Description", ""], [1, "delete-container"], ["nz-button", "", "nzType", "danger", 1, "delete-button", 3, "click"], [2, "width", "100%", "height", "250px", 3, "src"], [3, "nzValue", "nzTitle", "nzValueStyle", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzTitle", "nzValueStyle"]], template: function MobileNetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-spin", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Welcome to Image Analysis!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Upload an image and analyze its content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-upload", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Click to Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, MobileNetComponent_div_13_Template, 8, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSpinning", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBeforeUpload", ctx.beforeUpload)("nzMultiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.picList);
    } }, directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_4__["NzSpinComponent"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__["NzUploadComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardComponent"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_11__["NzCardMetaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_12__["NzStatisticComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PercentPipe"]], styles: [".alldiv[_ngcontent-%COMP%] {\r\n  background-image: url('cool-background.png');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n.card-bordered[_ngcontent-%COMP%] {\r\n  border: 1px solid #d9d9d9;\r\n  border-radius: 4px;\r\n}\r\n\r\n.card-bordered[_ngcontent-%COMP%]   .ant-card-body[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n\r\n  width: 240px;\r\n  margin: 10px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   nz-card-meta[_ngcontent-%COMP%] {\r\n  height: 280px;\r\n  overflow: auto;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%] {\r\n  height: 350px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   nz-card-meta[_ngcontent-%COMP%]   nz-description[_ngcontent-%COMP%] {\r\n  max-height: 100px;\r\n  overflow: hidden;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   nz-card-meta[_ngcontent-%COMP%]   nz-description[_ngcontent-%COMP%]   nz-statistic[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.delete-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS1uZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUF1RTtFQUN2RSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJtb2JpbGUtbmV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsZGl2IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kL2Nvb2wtYmFja2dyb3VuZC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4uY2FyZC1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvcmRlcmVkIC5hbnQtY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcblxyXG4gIHdpZHRoOiAyNDBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIG56LWNhcmQtbWV0YSB7XHJcbiAgaGVpZ2h0OiAyODBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNhcmQgbnotYXZhdGFyIHtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG4uY2FyZCBuei1jYXJkLW1ldGEgbnotZGVzY3JpcHRpb24ge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkIG56LWNhcmQtbWV0YSBuei1kZXNjcmlwdGlvbiBuei1zdGF0aXN0aWMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5kZWxldGUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "rnbW":
/*!**************************************************!*\
  !*** ./src/app/time-line/time-line.component.ts ***!
  \**************************************************/
/*! exports provided: TimeLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeLineComponent", function() { return TimeLineComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "ncdi");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");







function TimeLineComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const section_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", section_r2.background);
} }
function TimeLineComponent_ng_container_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
} if (rf & 2) {
    const section_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", section_r4.icon);
} }
function TimeLineComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-timeline-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TimeLineComponent_ng_container_2_ng_template_3_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDot", _r6)("nzColor", ctx_r1.findIndex(section_r4.timeLineTitle) ? "green" : "blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](section_r4.timeLineContent);
} }
class TimeLineComponent {
    constructor() {
        // 在組件類別中新增一個成員變數
        this.visibleSections = [];
        this.numToShow = 5; // 顯示的區塊數量
        this.sections = [
            {
                content: '區塊 1',
                icon: 'android',
                timeLineTitle: '第一個區塊的標題',
                timeLineContent: 'Create a services site 1Create a services site 1Create a services site 1',
                background: 'url("https://img.ixintu.com/download/jpg/202010/e390b22120b1a6c01732c3bf5a4c8dd7_800_500.jpg!con")'
            },
            {
                content: '區塊 2',
                icon: 'android',
                timeLineTitle: '2個區塊的標題',
                timeLineContent: 'Create a services site 2',
                background: 'url("https://img.ixintu.com/download/jpg/202110/ebdf9d9127383b8c414571bacffa89f8_800_509.jpg!con")'
            },
            {
                content: '區塊 3',
                icon: 'android',
                timeLineTitle: '3個區塊的標題',
                timeLineContent: 'Create a services site 3',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 4',
                icon: 'android',
                timeLineTitle: '4個區塊的標題',
                timeLineContent: 'Create a services site 4',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 5',
                icon: 'android',
                timeLineTitle: '5個區塊的標題',
                timeLineContent: 'Create a services site 5',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 6',
                icon: 'android',
                timeLineTitle: '6個區塊的標題',
                timeLineContent: 'Create a services site 6',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 3',
                icon: 'android',
                timeLineTitle: '7個區塊的標題',
                timeLineContent: 'Create a services site 7',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 3',
                icon: 'android',
                timeLineTitle: '8個區塊的標題',
                timeLineContent: 'Create a services site 8',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 3',
                icon: 'android',
                timeLineTitle: '9個區塊的標題',
                timeLineContent: 'Create a services site 9',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 3',
                icon: 'android',
                timeLineTitle: '10個區塊的標題',
                timeLineContent: 'Create a services site 10',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 3',
                icon: 'android',
                timeLineTitle: '11個區塊的標題',
                timeLineContent: 'Create a services site 11',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 3',
                icon: 'android',
                timeLineTitle: '12個區塊的標題',
                timeLineContent: 'Create a services site 12',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 3',
                icon: 'android',
                timeLineTitle: '13個區塊的標題',
                timeLineContent: 'Create a services site 13',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
            {
                content: '區塊 3',
                icon: 'qq',
                timeLineTitle: '14個區塊的標題',
                timeLineContent: 'Create a services site 14',
                background: 'url("https://img.ixintu.com/download/jpg/202003/f9e1561a55bec2e7972822702172126f_800_399.jpg!con")'
            },
        ];
        this.currentSectionIndex = 0;
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'scroll')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(100))
            .subscribe(() => {
            this.updateCurrentSectionIndex();
            this.updateVisibleSections();
        });
        this.visibleSections = this.sections.slice(0, this.numToShow);
    }
    updateVisibleSections() {
        const groupIndex = Math.floor(this.currentSectionIndex / this.numToShow);
        const startIdx = groupIndex * this.numToShow;
        const endIdx = startIdx + this.numToShow;
        this.visibleSections = this.sections.slice(startIdx, endIdx);
    }
    findIndex(timeLineTitle) {
        return this.sections.findIndex(x => x.timeLineTitle === timeLineTitle) === this.currentSectionIndex;
    }
    updateCurrentSectionIndex() {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const halfWindowHeight = windowHeight / 2;
        for (let i = 0; i < this.sections.length; i++) {
            const sectionTop = i * windowHeight;
            const sectionBottom = (i + 1) * windowHeight;
            if (sectionTop - scrollTop <= halfWindowHeight && sectionBottom - scrollTop > halfWindowHeight) {
                this.currentSectionIndex = i;
                break;
            }
        }
    }
}
TimeLineComponent.ɵfac = function TimeLineComponent_Factory(t) { return new (t || TimeLineComponent)(); };
TimeLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TimeLineComponent, selectors: [["app-time-line"]], decls: 7, vars: 4, consts: [["class", "full-screen-section", 3, "background-image", 4, "ngFor", "ngForOf"], ["nzMode", "alternate", 1, "timeline"], [4, "ngFor", "ngForOf"], [1, "timeLine-title"], [1, "content"], [1, "full-screen-section"], [3, "nzDot", "nzColor"], ["dotTemplate", ""], ["nz-icon", "", "nzTheme", "fill", 1, "custom-icon", 3, "nzType"]], template: function TimeLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TimeLineComponent_div_0_Template, 1, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TimeLineComponent_ng_container_2_Template, 5, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sections);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.visibleSections);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.sections[ctx.currentSectionIndex] == null ? null : ctx.sections[ctx.currentSectionIndex].timeLineTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.sections[ctx.currentSectionIndex] == null ? null : ctx.sections[ctx.currentSectionIndex].content, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_4__["NzTimelineComponent"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_4__["NzTimelineItemComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]], styles: [".full-screen-section[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  scroll-snap-align: start;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 100px;\r\n  left: 100px;\r\n  max-width: 300px;\r\n  max-height: 600; \r\n  background-color: rgba(\r\n    255,\r\n    255,\r\n    255,\r\n    0.5\r\n  ); \r\n  padding: 20px; \r\n  border-radius: 8px; \r\n  \r\n  z-index: 1; \r\n}\r\n\r\n.nz-timeline-item[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.5); \r\n  color: white; \r\n  padding: 4px 8px; \r\n  border-radius: 4px; \r\n}\r\n\r\n.timeLine-title[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 50%;\r\n  transform: translateX(-50%); \r\n  background-color: white;\r\n  background-color: rgba(255, 255, 255, 0.25); \r\n  width: 100%; \r\n  height: 25%;\r\n  text-align: center;\r\n  padding: 10px 0;\r\n  font-size: 40px;\r\n  font-weight: 600;\r\n  z-index: 2; \r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 30px;\r\n  font-weight: 340;\r\n}\r\n\r\n.custom-icon[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  font-size: 25px;\r\n}\r\n\r\n  .ant-timeline.ant-timeline-alternate .ant-timeline-item-head-custom {\r\n  background-color: transparent !important ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFFLGFBQWE7RUFDOUI7Ozs7O0dBS0MsRUFBRSw4QkFBOEI7RUFDakMsYUFBYSxFQUFFLFVBQVU7RUFDekIsa0JBQWtCLEVBQUUsV0FBVztFQUMvQiw0Q0FBNEM7RUFDNUMsVUFBVSxFQUFFLFdBQVc7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0MsRUFBRSxXQUFXO0VBQ2pELFlBQVksRUFBRSxXQUFXO0VBQ3pCLGdCQUFnQixFQUFFLFlBQVk7RUFDOUIsa0JBQWtCLEVBQUUsV0FBVztBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULDJCQUEyQixFQUFFLFNBQVM7RUFDdEMsdUJBQXVCO0VBQ3ZCLDJDQUEyQyxFQUFFLFdBQVc7RUFDeEQsV0FBVyxFQUFFLFdBQVc7RUFDeEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVLEVBQUUsZUFBZTtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoidGltZS1saW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC1zY3JlZW4tc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgbGVmdDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXgtaGVpZ2h0OiA2MDA7IC8qIOenu+mZpOacgOWkp+mrmOW6pumZkOWItiAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoXHJcbiAgICAyNTUsXHJcbiAgICAyNTUsXHJcbiAgICAyNTUsXHJcbiAgICAwLjVcclxuICApOyAvKiDoqK3lrprog4zmma/poY/oibLvvIzpgJnoo6Hkvb/nlKjkuobnmb3oibLnmoTog4zmma/vvIzkuKboqK3lrprkuobpgI/mmI7luqYgKi9cclxuICBwYWRkaW5nOiAyMHB4OyAvKiDoqr/mlbTlhafpgorot50gKi9cclxuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIOa3u+WKoOWck+inkuaViOaenCAqL1xyXG4gIC8qb3ZlcmZsb3cteTogYXV0bzsgIOaWsOWinuWeguebtOa7vuWLleaine+8jOWPquWcqOWFp+Wuuei2hemBjuWFg+e0oOmrmOW6puaZgumhr+ekuiAqL1xyXG4gIHotaW5kZXg6IDE7IC8qIOioreWumueWiuaUvumghuW6jyAqL1xyXG59XHJcblxyXG4ubnotdGltZWxpbmUtaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiDoqr/mlbTog4zmma/poY/oibIgKi9cclxuICBjb2xvcjogd2hpdGU7IC8qIOiqv+aVtOaWh+Wtl+mhj+iJsiAqL1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7IC8qIOiqv+aVtOahhueahOWFp+mCiui3nSAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgLyog5paw5aKe5ZyT6KeS5pWI5p6cICovXHJcbn1cclxuXHJcbi50aW1lTGluZS10aXRsZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyAvKiDmsLTlubPnva7kuK0gKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpOyAvKiDoqr/mlbTog4zmma/poY/oibIgKi9cclxuICB3aWR0aDogMTAwJTsgLyog6Leo6Laz5pW05YCL5a+s5bqmICovXHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB6LWluZGV4OiAyOyAvKiDnorrkv53kvY3mlrzlhbblroPlhYPntKDkuYvkuIogKi9cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDM0MDtcclxufVxyXG4uY3VzdG9tLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hbnQtdGltZWxpbmUuYW50LXRpbWVsaW5lLWFsdGVybmF0ZSAuYW50LXRpbWVsaW5lLWl0ZW0taGVhZC1jdXN0b20ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQgO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tensorFlow_mobile_net_mobile_net_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tensorFlow/mobile-net/mobile-net.component */ "g8Wm");
/* harmony import */ var _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time-line/time-line.component */ "rnbW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _tensorFlow_mobile_net_mobile_net_component__WEBPACK_IMPORTED_MODULE_1__["MobileNetComponent"]
    },
    {
        path: 'timeLine',
        component: _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_2__["TimeLineComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vfJH":
/*!*******************************************!*\
  !*** ./src/app/ngzorro/ngzorro.module.ts ***!
  \*******************************************/
/*! exports provided: NgzorroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgzorroModule", function() { return NgzorroModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/image */ "6ekq");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "A07A");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/upload */ "D9mS");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/timeline */ "ncdi");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/affix */ "4hBO");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class NgzorroModule {
}
NgzorroModule.ɵfac = function NgzorroModule_Factory(t) { return new (t || NgzorroModule)(); };
NgzorroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: NgzorroModule });
NgzorroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__["NzInputNumberModule"],
            ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__["NzImageModule"],
            ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_3__["NzStatisticModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
            ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__["NzUploadModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzGridModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
            ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinModule"],
            ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_12__["NzAffixModule"],
            ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_11__["NzTimelineModule"],
        ], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__["NzInputNumberModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__["NzImageModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_3__["NzStatisticModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__["NzUploadModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzGridModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_12__["NzAffixModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_11__["NzTimelineModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](NgzorroModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__["NzInputNumberModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__["NzImageModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_3__["NzStatisticModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__["NzUploadModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzGridModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinModule"],
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_12__["NzAffixModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_11__["NzTimelineModule"]], exports: [ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_1__["NzInputNumberModule"],
        ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_2__["NzImageModule"],
        ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_3__["NzStatisticModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectModule"],
        ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_5__["NzUploadModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzGridModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__["NzLayoutModule"],
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_12__["NzAffixModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinModule"],
        ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_11__["NzTimelineModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map