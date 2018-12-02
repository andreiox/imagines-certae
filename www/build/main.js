webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.customOptions = {
            displayRemoveButton: false,
            displayEditButton: false,
        };
        this.options = {
            mobileBreakpoint: 0,
            defaultItemCols: 5,
            defaultItemRows: 5,
            minCols: 3,
            minRows: 3,
            draggable: {
                delayStart: 300,
                enabled: true,
            },
            resizable: {
                enabled: true,
            }
        };
        this.dashboard = [
            { cols: 5, rows: 1, y: 0, x: 0, background: '#FFFFFF' },
            { cols: 3, rows: 1, y: 1, x: 1, background: '#FFFFFF' },
            { cols: 1, rows: 1, y: 2, x: 1, background: '#FFFFFF' },
            { cols: 1, rows: 1, y: 2, x: 2, background: '#FFFFFF' },
            { cols: 1, rows: 1, y: 2, x: 3, background: '#FFFFFF' },
            { cols: 3, rows: 1, y: 3, x: 1, background: '#FFFFFF' },
            { cols: 5, rows: 1, y: 4, x: 0, background: '#FFFFFF' },
        ];
    }
    HomePage.prototype.addItem = function () {
        this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1, background: '#FFFFFF' });
    };
    HomePage.prototype.removeItem = function ($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    };
    HomePage.prototype.openModalEdit = function ($event, item) {
        var modal = this.modalCtrl.create(ModalContentPage, { item: item });
        modal.present();
    };
    HomePage.prototype.toggleRemoveButton = function () {
        this.customOptions.displayRemoveButton = !this.customOptions.displayRemoveButton;
    };
    HomePage.prototype.toggleEditButton = function () {
        this.customOptions.displayEditButton = !this.customOptions.displayEditButton;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/andre/git/imagines-certae/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Imagines Certae</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="toggleEditButton()" class="add-button cols-2" style="padding: 5px">\n        <ion-icon name="hammer"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="toggleRemoveButton()" class="add-button cols-2" style="padding: 5px">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="addItem()" class="add-button cols-2" style="padding: 5px; margin-right: 10px;">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <gridster [options]="options">\n    <gridster-item [item]="item" *ngFor="let item of dashboard">\n      <div [ngStyle]="{ \'background\': item.background }" class="div-item">\n\n        <button *ngIf="customOptions.displayEditButton" ion-button icon-only (mousedown)="openModalEdit($event, item)"\n          (touchstart)="openModalEdit($event, item)">\n          <ion-icon name="hammer"></ion-icon>\n        </button>\n        <button *ngIf="customOptions.displayRemoveButton" ion-button icon-only (mousedown)="removeItem($event, item)"\n          (touchstart)="removeItem($event, item)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </div>\n    </gridster-item>\n  </gridster>\n\n</ion-content>'/*ion-inline-end:"/home/andre/git/imagines-certae/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

var ModalContentPage = /** @class */ (function () {
    function ModalContentPage(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.item = this.params.get('item');
        this.background = this.item.background;
    }
    ModalContentPage.prototype.setColor = function (hexColor) {
        this.background = hexColor;
    };
    ModalContentPage.prototype.applyBackground = function () {
        this.item.background = this.background;
        this.dismiss();
    };
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/andre/git/imagines-certae/src/pages/home/modal-edit.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Escolha o fundo do item\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n            <ion-col style="background:#330000" (tap)="setColor(\'#330000\')">&nbsp;</ion-col>\n            <ion-col style="background:#331900" (tap)="setColor(\'#331900\')">&nbsp;</ion-col>\n            <ion-col style="background:#333300" (tap)="setColor(\'#333300\')">&nbsp;</ion-col>\n            <ion-col style="background:#193300" (tap)="setColor(\'#193300\')">&nbsp;</ion-col>\n            <ion-col style="background:#003300" (tap)="setColor(\'#003300\')">&nbsp;</ion-col>\n            <ion-col style="background:#003319" (tap)="setColor(\'#003319\')">&nbsp;</ion-col>\n            <ion-col style="background:#003333" (tap)="setColor(\'#003333\')">&nbsp;</ion-col>\n            <ion-col style="background:#001933" (tap)="setColor(\'#001933\')">&nbsp;</ion-col>\n            <ion-col style="background:#000033" (tap)="setColor(\'#000033\')">&nbsp;</ion-col>\n            <ion-col style="background:#190033" (tap)="setColor(\'#190033\')">&nbsp;</ion-col>\n            <ion-col style="background:#330033" (tap)="setColor(\'#330033\')">&nbsp;</ion-col>\n            <ion-col style="background:#330019" (tap)="setColor(\'#330019\')">&nbsp;</ion-col>\n            <ion-col style="background:#000000" (tap)="setColor(\'#000000\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col style="background:#660000" (tap)="setColor(\'#660000\')">&nbsp;</ion-col>\n            <ion-col style="background:#663300" (tap)="setColor(\'#663300\')">&nbsp;</ion-col>\n            <ion-col style="background:#666600" (tap)="setColor(\'#666600\')">&nbsp;</ion-col>\n            <ion-col style="background:#336600" (tap)="setColor(\'#336600\')">&nbsp;</ion-col>\n            <ion-col style="background:#006600" (tap)="setColor(\'#006600\')">&nbsp;</ion-col>\n            <ion-col style="background:#006633" (tap)="setColor(\'#006633\')">&nbsp;</ion-col>\n            <ion-col style="background:#006666" (tap)="setColor(\'#006666\')">&nbsp;</ion-col>\n            <ion-col style="background:#003366" (tap)="setColor(\'#003366\')">&nbsp;</ion-col>\n            <ion-col style="background:#000066" (tap)="setColor(\'#000066\')">&nbsp;</ion-col>\n            <ion-col style="background:#330066" (tap)="setColor(\'#330066\')">&nbsp;</ion-col>\n            <ion-col style="background:#660066" (tap)="setColor(\'#660066\')">&nbsp;</ion-col>\n            <ion-col style="background:#660033" (tap)="setColor(\'#660033\')">&nbsp;</ion-col>\n            <ion-col style="background:#202020" (tap)="setColor(\'#202020\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col style="background:#990000" (tap)="setColor(\'#990000\')">&nbsp;</ion-col>\n            <ion-col style="background:#994C00" (tap)="setColor(\'#994C00\')">&nbsp;</ion-col>\n            <ion-col style="background:#999900" (tap)="setColor(\'#999900\')">&nbsp;</ion-col>\n            <ion-col style="background:#4C9900" (tap)="setColor(\'#4C9900\')">&nbsp;</ion-col>\n            <ion-col style="background:#009900" (tap)="setColor(\'#009900\')">&nbsp;</ion-col>\n            <ion-col style="background:#00994C" (tap)="setColor(\'#00994C\')">&nbsp;</ion-col>\n            <ion-col style="background:#009999" (tap)="setColor(\'#009999\')">&nbsp;</ion-col>\n            <ion-col style="background:#004C99" (tap)="setColor(\'#004C99\')">&nbsp;</ion-col>\n            <ion-col style="background:#000099" (tap)="setColor(\'#000099\')">&nbsp;</ion-col>\n            <ion-col style="background:#4C0099" (tap)="setColor(\'#4C0099\')">&nbsp;</ion-col>\n            <ion-col style="background:#990099" (tap)="setColor(\'#990099\')">&nbsp;</ion-col>\n            <ion-col style="background:#99004C" (tap)="setColor(\'#99004C\')">&nbsp;</ion-col>\n            <ion-col style="background:#404040" (tap)="setColor(\'#404040\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col style="background:#CC0000" (tap)="setColor(\'#CC0000\')">&nbsp;</ion-col>\n            <ion-col style="background:#CC6600" (tap)="setColor(\'#CC6600\')">&nbsp;</ion-col>\n            <ion-col style="background:#CCCC00" (tap)="setColor(\'#CCCC00\')">&nbsp;</ion-col>\n            <ion-col style="background:#66CC00" (tap)="setColor(\'#66CC00\')">&nbsp;</ion-col>\n            <ion-col style="background:#00CC00" (tap)="setColor(\'#00CC00\')">&nbsp;</ion-col>\n            <ion-col style="background:#00CC66" (tap)="setColor(\'#00CC66\')">&nbsp;</ion-col>\n            <ion-col style="background:#00CCCC" (tap)="setColor(\'#00CCCC\')">&nbsp;</ion-col>\n            <ion-col style="background:#0066CC" (tap)="setColor(\'#0066CC\')">&nbsp;</ion-col>\n            <ion-col style="background:#0000CC" (tap)="setColor(\'#0000CC\')">&nbsp;</ion-col>\n            <ion-col style="background:#6600CC" (tap)="setColor(\'#6600CC\')">&nbsp;</ion-col>\n            <ion-col style="background:#CC00CC" (tap)="setColor(\'#CC00CC\')">&nbsp;</ion-col>\n            <ion-col style="background:#CC0066" (tap)="setColor(\'#CC0066\')">&nbsp;</ion-col>\n            <ion-col style="background:#606060" (tap)="setColor(\'#606060\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col style="background:#FF0000" (tap)="setColor(\'#FF0000\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF8000" (tap)="setColor(\'#FF8000\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFFF00" (tap)="setColor(\'#FFFF00\')">&nbsp;</ion-col>\n            <ion-col style="background:#80FF00" (tap)="setColor(\'#80FF00\')">&nbsp;</ion-col>\n            <ion-col style="background:#00FF00" (tap)="setColor(\'#00FF00\')">&nbsp;</ion-col>\n            <ion-col style="background:#00FF80" (tap)="setColor(\'#00FF80\')">&nbsp;</ion-col>\n            <ion-col style="background:#00FFFF" (tap)="setColor(\'#00FFFF\')">&nbsp;</ion-col>\n            <ion-col style="background:#0080FF" (tap)="setColor(\'#0080FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#0000FF" (tap)="setColor(\'#0000FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#7F00FF" (tap)="setColor(\'#7F00FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF00FF" (tap)="setColor(\'#FF00FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF007F" (tap)="setColor(\'#FF007F\')">&nbsp;</ion-col>\n            <ion-col style="background:#808080" (tap)="setColor(\'#808080\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col style="background:#FF3333" (tap)="setColor(\'#FF3333\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF9933" (tap)="setColor(\'#FF9933\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFFF33" (tap)="setColor(\'#FFFF33\')">&nbsp;</ion-col>\n            <ion-col style="background:#99FF33" (tap)="setColor(\'#99FF33\')">&nbsp;</ion-col>\n            <ion-col style="background:#33FF33" (tap)="setColor(\'#33FF33\')">&nbsp;</ion-col>\n            <ion-col style="background:#33FF99" (tap)="setColor(\'#33FF99\')">&nbsp;</ion-col>\n            <ion-col style="background:#33FFFF" (tap)="setColor(\'#33FFFF\')">&nbsp;</ion-col>\n            <ion-col style="background:#3399FF" (tap)="setColor(\'#3399FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#3333FF" (tap)="setColor(\'#3333FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#9933FF" (tap)="setColor(\'#9933FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF33FF" (tap)="setColor(\'#FF33FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF3399" (tap)="setColor(\'#FF3399\')">&nbsp;</ion-col>\n            <ion-col style="background:#A0A0A0" (tap)="setColor(\'#A0A0A0\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col style="background:#FF6666" (tap)="setColor(\'#FF6666\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFB266" (tap)="setColor(\'#FFB266\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFFF66" (tap)="setColor(\'#FFFF66\')">&nbsp;</ion-col>\n            <ion-col style="background:#B2FF66" (tap)="setColor(\'#B2FF66\')">&nbsp;</ion-col>\n            <ion-col style="background:#66FF66" (tap)="setColor(\'#66FF66\')">&nbsp;</ion-col>\n            <ion-col style="background:#66FFB2" (tap)="setColor(\'#66FFB2\')">&nbsp;</ion-col>\n            <ion-col style="background:#66FFFF" (tap)="setColor(\'#66FFFF\')">&nbsp;</ion-col>\n            <ion-col style="background:#66B2FF" (tap)="setColor(\'#66B2FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#6666FF" (tap)="setColor(\'#6666FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#B266FF" (tap)="setColor(\'#B266FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF66FF" (tap)="setColor(\'#FF66FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF66B2" (tap)="setColor(\'#FF66B2\')">&nbsp;</ion-col>\n            <ion-col style="background:#C0C0C0" (tap)="setColor(\'#C0C0C0\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col style="background:#FF9999" (tap)="setColor(\'#FF9999\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFCC99" (tap)="setColor(\'#FFCC99\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFFF99" (tap)="setColor(\'#FFFF99\')">&nbsp;</ion-col>\n            <ion-col style="background:#CCFF99" (tap)="setColor(\'#CCFF99\')">&nbsp;</ion-col>\n            <ion-col style="background:#99FF99" (tap)="setColor(\'#99FF99\')">&nbsp;</ion-col>\n            <ion-col style="background:#99FFCC" (tap)="setColor(\'#99FFCC\')">&nbsp;</ion-col>\n            <ion-col style="background:#99FFFF" (tap)="setColor(\'#99FFFF\')">&nbsp;</ion-col>\n            <ion-col style="background:#99CCFF" (tap)="setColor(\'#99CCFF\')">&nbsp;</ion-col>\n            <ion-col style="background:#9999FF" (tap)="setColor(\'#9999FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#CC99FF" (tap)="setColor(\'#CC99FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF99FF" (tap)="setColor(\'#FF99FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FF99CC" (tap)="setColor(\'#FF99CC\')">&nbsp;</ion-col>\n            <ion-col style="background:#E0E0E0" (tap)="setColor(\'#E0E0E0\')">&nbsp;</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col style="background:#FFCCCC" (tap)="setColor(\'#FFCCCC\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFE5CC" (tap)="setColor(\'#FFE5CC\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFFFCC" (tap)="setColor(\'#FFFFCC\')">&nbsp;</ion-col>\n            <ion-col style="background:#E5FFCC" (tap)="setColor(\'#E5FFCC\')">&nbsp;</ion-col>\n            <ion-col style="background:#CCFFCC" (tap)="setColor(\'#CCFFCC\')">&nbsp;</ion-col>\n            <ion-col style="background:#CCFFE5" (tap)="setColor(\'#CCFFE5\')">&nbsp;</ion-col>\n            <ion-col style="background:#CCFFFF" (tap)="setColor(\'#CCFFFF\')">&nbsp;</ion-col>\n            <ion-col style="background:#CCE5FF" (tap)="setColor(\'#CCE5FF\')">&nbsp;</ion-col>\n            <ion-col style="background:#CCCCFF" (tap)="setColor(\'#CCCCFF\')">&nbsp;</ion-col>\n            <ion-col style="background:#E5CCFF" (tap)="setColor(\'#E5CCFF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFCCFF" (tap)="setColor(\'#FFCCFF\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFCCE5" (tap)="setColor(\'#FFCCE5\')">&nbsp;</ion-col>\n            <ion-col style="background:#FFFFFF" (tap)="setColor(\'#FFFFFF\')">&nbsp;</ion-col>\n        </ion-row>\n\n        <div class="div-apply-background">\n            <div>\n                <span style="position: relative; bottom: 30px;">Fundo selecionado:</span>\n                <div class="div-preview-background" [ngStyle]="{ \'background\': background }"></div>\n            </div>\n            <button ion-button (click)="applyBackground()">Aplicar alteração</button>\n        </div>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/andre/git/imagines-certae/src/pages/home/modal-edit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], ModalContentPage);
    return ModalContentPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screenshot__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_gridster2__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* ModalContentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9_angular_gridster2__["a" /* GridsterModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* ModalContentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_screenshot__["a" /* Screenshot */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_path__["a" /* FilePath */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screenshot__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, screenshot, menuCtrl, alertCtrl, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.screenshot = screenshot;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Export', component: null }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.component) {
            this.nav.setRoot(page.component);
        }
        else {
            this.menuCtrl.close().then(function (value) {
                setTimeout(function () {
                    var filename = 'imagines-certae-' + new Date().getTime();
                    _this.screenshot.save('jpg', 100, filename).then(function (value) {
                        _this.presentAlertExportSuccess();
                    }, function (error) {
                        _this.presentAlertExportFailed();
                    });
                }, 1000);
            });
        }
    };
    MyApp.prototype.presentAlertExportSuccess = function () {
        var alert = this.alertCtrl.create({
            title: 'Exportação concluída',
            message: 'Imagem salva na sua galeria',
            buttons: ['OK']
        });
        alert.present();
    };
    MyApp.prototype.presentAlertExportFailed = function () {
        var alert = this.alertCtrl.create({
            title: 'Exportação falhou',
            message: 'A exportação falhou. Tente novamente mais tarde.',
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/andre/git/imagines-certae/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/andre/git/imagines-certae/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_screenshot__["a" /* Screenshot */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/andre/git/imagines-certae/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/andre/git/imagines-certae/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map