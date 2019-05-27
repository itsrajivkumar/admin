(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./src/app/layout/user-profile/user-profile-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/user-profile/user-profile-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: UserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function() { return UserProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/layout/user-profile/user-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]
    }
];
var UserProfileRoutingModule = /** @class */ (function () {
    function UserProfileRoutingModule() {
    }
    UserProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserProfileRoutingModule);
    return UserProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user-profile/user-profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/user-profile/user-profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex>\n    <div fxLayout fxLayoutGap=\"10px\">\n        <div fxFlex=\"50%\">\n            <mat-card>\n                <mat-card-title>My Profile</mat-card-title>\n                <!-- <mat-divider></mat-divider> -->\n                <mat-card-content>\n                    <div class=\"login-form\">\n                        <div fxLayout>\n                            <div fxFlex=\"30%\"><b>Firstname:</b></div>\n                            <div fxFlex><input  matInput placeholder=\"Firstname\"></div>\n                        </div>\n                        <div fxLayout>\n                            <div fxFlex=\"30%\"><b>Lastname:</b></div>\n                            <div fxFlex><input matInput placeholder=\"Lastname\"></div>\n                        </div>\n                        <div fxLayout>\n                            <div fxFlex=\"30%\"><b>Email:</b></div>\n                            <div fxFlex><input matInput placeholder=\"Email\"></div>\n                        </div>\n                        <div fxLayout fxLayoutGap=\"10px\">\n                                <div fxFlex=\"15%\"> <button  type=\"submit\" mat-raised-button color=\"primary\" >Save</button></div>\n                                <div fxFlex=\"10%\"><button mat-raised-button color=\"primary\" >Cancel</button></div>\n                                \n                            </div>\n                    </div>\n\n                </mat-card-content>\n            </mat-card>\n        </div>\n\n        <div fxFlex=\"50%\">\n            <mat-card>\n                <mat-card-title>Password Change</mat-card-title>\n                <!-- <mat-divider></mat-divider> -->\n                <mat-card-content>\n                    <div class=\"login-form\">\n                        <div fxLayout>\n                            <div fxFlex=\"40%\"><b>Current Password:</b></div>\n                            <div fxFlex><input type=\"password\" matInput placeholder=\"*******\"></div>\n                        </div>\n                        <div fxLayout>\n                            <div fxFlex=\"40%\"><b>New Password:</b></div>\n                            <div fxFlex><input type=\"password\" matInput placeholder=\"*******\"></div>\n                        </div>\n                        <div fxLayout>\n                            <div fxFlex=\"40%\"><b>Confirm Password:</b></div>\n                            <div fxFlex><input type=\"password\" matInput placeholder=\"*******\"></div>\n                        </div>\n                        <div fxLayout fxLayoutGap=\"10px\">\n                                <div fxFlex=\"15%\"> <button  type=\"submit\" mat-raised-button color=\"primary\" >Save</button></div>\n                                <div fxFlex=\"10%\"><button mat-raised-button color=\"primary\" >Cancel</button></div>\n                                \n                            </div>\n                    </div>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/layout/user-profile/user-profile.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/user-profile/user-profile.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  cursor: pointer; }\n\n.login-form {\n  padding: 40px;\n  background: #fff;\n  box-shadow: 0 0 10px #ddd; }\n\n.login-form input:-webkit-autofill {\n    -webkit-box-shadow: 0 0 0 30px white inset; }\n\n.login-form div {\n  margin-bottom: 10px; }\n\n.login-form input {\n  background: #fff;\n  padding: 10px;\n  box-shadow: 0 0 10px #ddd; }\n\n.login-form input input:-webkit-autofill {\n    -webkit-box-shadow: 0 0 0 30px white inset; }\n\n.login-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative; }\n\n.login-page .content {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n.login-page .content .app-name {\n      margin-top: 0px;\n      padding-bottom: 10px;\n      font-size: 32px; }\n\n.login-page:after {\n    content: '';\n    background: #fff;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 50%;\n    right: 0; }\n\n.login-page:before {\n    content: '';\n    background: #3f51b5;\n    position: absolute;\n    top: 50%;\n    left: 0;\n    bottom: 0;\n    right: 0; }\n\n.text-center {\n  text-align: center; }\n\n.w-100 {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211bS1kZXZlbG9wZXI0L0Rlc2t0b3AvdGVzdC9hbmd1bGFyLW1hdGVyaWFsL2dpdC9hZG1pbi9zcmMvYXBwL2xheW91dC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUUsZUFBZSxFQUFBOztBQUNqQjtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFFaEIseUJBQXlCLEVBQUE7O0FBSjdCO0lBTVEsMENBQTBDLEVBQUE7O0FBR2xEO0VBQWdCLG1CQUFrQixFQUFBOztBQUNsQztFQUNJLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBSDdCO0lBS1EsMENBQTBDLEVBQUE7O0FBR2xEO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUx0QjtJQU9RLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QixFQUFBOztBQVYvQjtNQVlZLGVBQWU7TUFDZixvQkFBb0I7TUFDcEIsZUFBZSxFQUFBOztBQWQzQjtJQW9CUSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRLEVBQUE7O0FBMUJoQjtJQTZCUSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe2N1cnNvcjogcG9pbnRlcn1cbi5sb2dpbi1mb3JtIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2RkZDtcbiAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0O1xuICAgIH1cbn1cbi5sb2dpbi1mb3JtIGRpdnttYXJnaW4tYm90dG9tOjEwcHg7fVxuLmxvZ2luLWZvcm0gaW5wdXR7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNkZGQ7XG4gICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCB3aGl0ZSBpbnNldDtcbiAgICB9XG59XG4ubG9naW4tcGFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLmFwcC1uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogNTAlO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53LTEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/user-profile/user-profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/user-profile/user-profile.component.ts ***!
  \***************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
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

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () { };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/layout/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/layout/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-profile/user-profile.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/user-profile/user-profile.module.ts ***!
  \************************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile-routing.module */ "./src/app/layout/user-profile/user-profile-routing.module.ts");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/layout/user-profile/user-profile.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserProfileModule = /** @class */ (function () {
    function UserProfileModule() {
    }
    UserProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserProfileRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"]
            ],
            declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"]]
        })
    ], UserProfileModule);
    return UserProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module.js.map