(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/layout/users/users-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/users/users-routing.module.ts ***!
  \******************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/layout/users/users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/users/users.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/users/users.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"createUser\" fxFlex>\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>\n                <div class=\"text-center\">\n                    Create User\n                </div>\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <!-- <h1 class=\"app-name\">Sb Admin Material</h1> -->\n            <form [formGroup]=\"userForm\" (ngSubmit)=\"onSave()\" class=\"login-form\" fxFlex>\n                <div fxFlex fxlayout=\"row\" fxlayout.lt-md=\"column\">\n                    <div fxFlexFill>\n                        <mat-form-field class=\"w-100\">\n                            <input matInput placeholder=\"Firstname\" formControlName=\"firstName\">\n                            <mat-error>\n                                <span *ngIf=\"userForm.controls['firstName'].hasError('required')\">Firstname is\n                                    <strong>required &nbsp;</strong>\n                                </span>\n                            </mat-error>\n\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div fxFlex fxlayout=\"row\" fxlayout.lt-md=\"column\">\n                    <div fxFlexFill>\n                        <mat-form-field class=\"w-100\">\n                            <input matInput placeholder=\"Lastname\" formControlName=\"lastName\">\n                            <mat-error>\n                                <span *ngIf=\"userForm.controls['lastName'].hasError('required')\">Lastname is\n                                    <strong>required &nbsp;</strong>\n                                </span>\n                            </mat-error>\n                        </mat-form-field>\n\n                    </div>\n                </div>\n\n                <div fxFlex fxlayout=\"row\" fxlayout.lt-md=\"column\">\n                    <div fxFlexFill>\n                        <mat-form-field class=\"w-100\">\n                            <input matInput placeholder=\"Email\" formControlName=\"email\">\n                            <mat-error>\n                                <span *ngIf=\"userForm.controls['email'].hasError('isEmailUnique')\">Email is\n                                    <strong>already exists. &nbsp;</strong>\n                                </span>\n                                <span *ngIf=\"userForm.controls['email'].hasError('required')\">Email is\n                                    <strong>required &nbsp;</strong>\n                                </span>\n\n                            </mat-error>\n\n                        </mat-form-field>\n                    </div>\n                </div>\n                <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                    <div fxFlexFill>\n                        <mat-form-field class=\"w-100\">\n                            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n                            <mat-error>\n                                <span *ngIf=\"userForm.controls['password'].hasError('required')\">Password is\n                                    <strong>required &nbsp;</strong>\n                                </span>\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                </div>\n\n                <div fxFlex fxLayout=\"row\" fxLayout.lt-md=\"column\">\n                    <div fxFlexFill>\n                        <button [disabled]=\"!userForm.valid\" type=\"submit\" mat-raised-button color=\"primary\" class=\"w-100 mr-10\">Save</button>\n                        <button mat-raised-button color=\"primary\" class=\"w-100\" (click)=\"onActivateUserListing()\">Cancel</button>\n                    </div>\n                </div>\n\n            </form>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n<!--  listing of the users -->\n\n<div fxFlex *ngIf=\"userListing\">\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>Users\n\n                <button style=\"text-align:right\" (click)=\"onActivateCreateUser()\" mat-raised-button color=\"primary\">Add</button>\n\n            </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n\n\n            <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n\n            <div class=\"mat-elevation-z8\">\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" [class.isMobile]=\"isMobile\" matsort>\n                    <ng-container matColumnDef=\"firstName\">\n                        <th mat-header-cell *matHeaderCellDef> First Name </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.firstname}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"lastName\">\n                        <th mat-header-cell *matHeaderCellDef> Last Name </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.lastname}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef> Email </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef>Action</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            \n                            <!-- <button mat-mini-fab color=\"primary\">\n                                <mat-icon>edit</mat-icon>\n                            </button> -->\n\n                            <mat-slide-toggle *ngIf=\"element.status == 0\"  (change)=\"onStatusChange($event,element.userId)\" class=\"\" [color]=\"color\" [checked]=\"'false'\" [disabled]=\"'false'\">\n\n                            </mat-slide-toggle>\n                            <mat-slide-toggle *ngIf=\"element.status == 1\"  (change)=\"onStatusChange($event,element.userId)\" class=\"\" [color]=\"color\" [checked]=\"'true'\" [disabled]=\"'false'\">\n\n                            </mat-slide-toggle>\n\n                        </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"action\">\n                        <th mat-header-cell *matHeaderCellDef> Details </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <button mat-raised-button class=\"bggreen\">loc 1</button>\n                            <b>==></b>\n                            <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Failed'?'red':'green','color':'white'}\">Loc\n                                2</button>\n                            <b>==></b>\n                            <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed' ?'green':'grey','color':'white'}\">Loc\n                                3</button>\n                            <b>==></b>\n                            <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed'?'green':'grey','color':'white'}\">Loc\n                                4</button>\n                            <b>==></b>\n                            <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed'?'green':'grey','color':'white'}\">Loc\n                                5</button>\n                        </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n            </div>\n        </mat-card-content>\n    </mat-card>"

/***/ }),

/***/ "./src/app/layout/users/users.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/users/users.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table th,\ntd {\n  text-align: center; }\n\n.bggreen {\n  background-color: green;\n  color: white; }\n\n.bgred {\n  background-color: red;\n  color: white; }\n\n.mr-10 {\n  margin-right: 10px; }\n\n/* CSS to change Default/'Accent' color */\n\n::ng-deep .mat-slide-toggle-thumb {\n  background-color: red; }\n\n::ng-deep .mat-slide-toggle-bar {\n  background-color: #66222c; }\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: green;\n  /*replace with your color*/ }\n\n::ng-deep .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #164424;\n  /*replace with your color*/ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211bS1kZXZlbG9wZXI0L0Rlc2t0b3AvdGVzdC9hbmd1bGFyLW1hdGVyaWFsL2dpdC9hZG1pbi9zcmMvYXBwL2xheW91dC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR2Y7O0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQ0osRUFBQTs7QUFFQTtFQUNJLHFCQUFxQjtFQUNyQixZQUNKLEVBQUE7O0FBQ0E7RUFBTyxrQkFBaUIsRUFBQTs7QUFJeEIseUNBQUE7O0FBRUE7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSx1QkFBdUI7RUFBRSwwQkFBQSxFQUEyQjs7QUFHeEQ7RUFDSSx5QkFBd0I7RUFBRywwQkFBQSxFQUEyQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtdGFibGUgdGgsXG50ZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmdncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlXG59XG5cbi5iZ3JlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZVxufVxuLm1yLTEwe21hcmdpbi1yaWdodDoxMHB4O31cblxuXG5cbi8qIENTUyB0byBjaGFuZ2UgRGVmYXVsdC8nQWNjZW50JyBjb2xvciAqL1xuXG46Om5nLWRlZXAgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjIyMmM7XG59XG5cbjo6bmctZGVlcCAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZDpub3QoLm1hdC1kaXNhYmxlZCkgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuOyAvKnJlcGxhY2Ugd2l0aCB5b3VyIGNvbG9yKi9cbn1cblxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzE2NDQyNDsgIC8qcmVwbGFjZSB3aXRoIHlvdXIgY29sb3IqL1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/layout/users/users.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/users/users.component.ts ***!
  \*************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dialog-logs/dialog-logs.component */ "./src/app/layout/shared/dialog-logs/dialog-logs.component.ts");
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/index */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsersComponent = /** @class */ (function () {
    function UsersComponent(changeDetectorRefs, toastr, router, formBuilder, dialog, indexService) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.toastr = toastr;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.indexService = indexService;
        this.userListing = true;
        this.createUser = false;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'status'];
        this.userForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required], this.isEmailUnique.bind(this)],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        // Create 100 users
        var users = [];
        for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    UsersComponent.prototype.isEmailUnique = function (control) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.indexService.getUserByEmail(control.value).subscribe(function (res) {
                if (res.data.length > 0)
                    resolve({ 'isEmailUnique': true });
                else
                    resolve(null);
            }, function (err) { });
            //resolve({ 'isEmailUnique': false });
        });
    };
    UsersComponent.prototype.onSave = function () {
        var _this = this;
        // console.log(JSON.stringify(this.userForm.value));
        this.indexService.saveUser(this.userForm.value).subscribe(function (res) {
            _this.userForm.reset();
            _this.onActivateUserListing();
            _this.loadData();
            _this.toastr.success('', 'User Saved Successfully !');
        }, function (err) { });
    };
    UsersComponent.prototype.onActivateCreateUser = function () {
        this.createUser = true;
        this.userListing = false;
    };
    UsersComponent.prototype.onActivateUserListing = function () {
        this.createUser = false;
        this.userListing = true;
    };
    UsersComponent.prototype.loadData = function () {
        var _this = this;
        this.indexService.getAllusers().subscribe(function (res) {
            _this.changeDetectorRefs.detectChanges();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](res.data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) { console.log(err); });
    };
    UsersComponent.prototype.onStatusChange = function (event, userId) {
        var _this = this;
        console.log('Toggle fired');
        alert(userId);
        var statusObj = { status: 0 };
        if (event.checked) {
            statusObj.status = 1;
        }
        this.indexService.updateUserStatus(userId, statusObj).subscribe(function (res) {
            _this.toastr.success('', 'User Status Changed Successfully !');
        }, function (err) { });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.indexService.getUserById().subscribe(function (res) {
            console.log(res);
        }, function (err) { console.log(err); });
        this.loadData();
    };
    UsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UsersComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_3__["DialogLogsComponent"], {
            width: '550px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/layout/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/layout/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _shared_services_index__WEBPACK_IMPORTED_MODULE_4__["IndexService"]])
    ], UsersComponent);
    return UsersComponent;
}());

/** Constants used to fill up our data base. */
var COLORS = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
];
var NAMES = [
    ' ',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth'
];
/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}


/***/ }),

/***/ "./src/app/layout/users/users.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/users/users.module.ts ***!
  \**********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/layout/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "./src/app/layout/users/users.component.ts");
/* harmony import */ var _shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dialog-logs/dialog-logs.component */ "./src/app/layout/shared/dialog-logs/dialog-logs.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/layout/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]],
            entryComponents: [
                _shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_5__["DialogLogsComponent"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map