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

module.exports = "\n <div fxFlex>\n        <mat-card>\n            <mat-card-header>\n                <mat-card-title>Users</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n<mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" [class.isMobile]=\"isMobile\" matsort>\n        <ng-container matColumnDef=\"firstName\">\n            <th mat-header-cell *matHeaderCellDef> First Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.firstName}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"lastName\">\n            <th mat-header-cell *matHeaderCellDef> Last Name </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.lastName}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef> Email </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n        </ng-container>\n       \n        <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef>Status</th>\n            <td mat-cell *matCellDef=\"let element\" [ngStyle]=\"{'color':element.color}\" > {{element.status}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef> Details </th>\n            <td mat-cell *matCellDef=\"let element\"> \n                <button mat-raised-button class=\"bggreen\" >loc 1</button><b>==></b>\n                <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Failed'?'red':'green','color':'white'}\" >Loc 2</button><b>==></b>\n                <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed' ?'green':'grey','color':'white'}\" >Loc 3</button><b>==></b>\n                <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed'?'green':'grey','color':'white'}\">Loc 4</button><b>==></b>\n                <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed'?'green':'grey','color':'white'}\" >Loc 5</button>\n            </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n</mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/layout/users/users.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/users/users.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table th,\ntd {\n  text-align: center; }\n\n.bggreen {\n  background-color: green;\n  color: white; }\n\n.bgred {\n  background-color: red;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211bS1kZXZlbG9wZXI0L0Rlc2t0b3AvdGVzdC9hbmd1bGFyLW1hdGVyaWFsL2dpdC9hZG1pbi9zcmMvYXBwL2xheW91dC91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsWUFBVyxFQUNkOztBQUVEOztFQUVJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLHdCQUF1QjtFQUN2QixhQUNKLEVBQUM7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsYUFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZSB0aCxcbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iZ2dyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGVcbn1cblxuLmJncmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlXG59Il19 */"

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
/* harmony import */ var _shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dialog-logs/dialog-logs.component */ "./src/app/layout/shared/dialog-logs/dialog-logs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ELEMENT_DATA = [
    { firstName: "Ankit", lastName: 'Singh', email: "ankit@gmail.com", status: "Active", color: "green" },
    { firstName: "Ritesh", lastName: 'Mallick', email: "Ritesh@gmail.com", status: "Active", color: "green" },
    { firstName: "Asmita", lastName: 'Sangar', email: "asmita@gmail.com", status: "Active", color: "green" },
    { firstName: "Rahul", lastName: 'Jagtap', email: "rahul@gmail.com", status: "Active", color: "green" },
    { firstName: "Kunal", lastName: 'Marathe', email: "kunal@yahoo.com", status: "Active", color: "green" },
    { firstName: "Vignesh", lastName: 'Gupta', email: "vignesh@gmail.com", status: "Deactive", color: "red" },
    { firstName: "Hemant", lastName: 'Khadse', email: "hemant@gmail.com", status: "Deactive", color: "red" }
];
var UsersComponent = /** @class */ (function () {
    function UsersComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['firstName', 'lastName', 'email', 'status'];
        // Create 100 users
        var users = [];
        for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
        var dialogRef = this.dialog.open(_shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_2__["DialogLogsComponent"], {
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
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
    'Maia',
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
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"]
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