(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./src/app/layout/tables/tables-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/tables/tables-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.component */ "./src/app/layout/tables/tables.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _tables_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"]
    }
];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/tables/tables.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <div fxFlex>\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Transports</mat-card-title>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n<mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" [class.isMobile]=\"isMobile\" matsort>\r\n        <ng-container matColumnDef=\"process\">\r\n            <th mat-header-cell *matHeaderCellDef> Process </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.process}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"data\">\r\n            <th mat-header-cell *matHeaderCellDef> Data </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.data}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"startDate\">\r\n            <th mat-header-cell *matHeaderCellDef> Start Date </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.startDate}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"lastUpdatedDate\">\r\n            <th mat-header-cell *matHeaderCellDef>Last Updated</th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.lastUpdatedDate}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef>Status</th>\r\n            <td mat-cell *matCellDef=\"let element\" [ngStyle]=\"{'color':element.color}\" > {{element.status}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef> Details </th>\r\n            <td mat-cell *matCellDef=\"let element\"> \r\n                <button mat-raised-button class=\"bggreen\" >loc 1</button><b>==></b>\r\n                <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Failed'?'red':'green','color':'white'}\" >Loc 2</button><b>==></b>\r\n                <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed' ?'green':'grey','color':'white'}\" >Loc 3</button><b>==></b>\r\n                <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed'?'green':'grey','color':'white'}\">Loc 4</button><b>==></b>\r\n                <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed'?'green':'grey','color':'white'}\" >Loc 5</button>\r\n            </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n</mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/layout/tables/tables.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table th,\ntd {\n  text-align: center; }\n\n.bggreen {\n  background-color: green;\n  color: white; }\n\n.bgred {\n  background-color: red;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYmxlcy9DOlxccmFqaXZcXHByb2plY3RzXFxub2RlanNcXGdpdFxcYWRtaW4vc3JjXFxhcHBcXGxheW91dFxcdGFibGVzXFx0YWJsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLFlBQVcsRUFDZDs7QUFFRDs7RUFFSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSx3QkFBdUI7RUFDdkIsYUFDSixFQUFDOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLGFBQ0osRUFBQyIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90YWJsZXMvdGFibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC10YWJsZSB0aCxcclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmdncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uYmdyZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/tables/tables.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/tables/tables.component.ts ***!
  \***************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
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
    { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/05/19 12:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Success", action: 'Logs', color: "blue" },
    { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/06/19 13:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Completed", action: 'Logs', color: "green" },
    { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/07/19 14:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Failed", action: 'Logs', color: "red" },
    { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/08/19 15:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Success", action: 'Logs', color: "blue" },
    { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/09/19 16:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Completed", action: 'Logs', color: "green" },
    { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/10/19 17:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Failed", action: 'Logs', color: "red" },
    { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/11/19 18:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Success", action: 'Logs', color: "blue" }
];
var TablesComponent = /** @class */ (function () {
    function TablesComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['process', 'data', 'startDate', 'lastUpdatedDate', 'status', 'action'];
        // Create 100 users
        var users = [];
        for (var i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TablesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TablesComponent.prototype.openDialog = function () {
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
    ], TablesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TablesComponent.prototype, "sort", void 0);
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/layout/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.scss */ "./src/app/layout/tables/tables.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], TablesComponent);
    return TablesComponent;
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

/***/ "./src/app/layout/tables/tables.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/tables/tables.module.ts ***!
  \************************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/layout/tables/tables-routing.module.ts");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables.component */ "./src/app/layout/tables/tables.component.ts");
/* harmony import */ var _shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dialog-logs/dialog-logs.component */ "./src/app/layout/shared/dialog-logs/dialog-logs.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/layout/dashboard/dashboard.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"],
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
            declarations: [_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"]],
            entryComponents: [
                _shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_5__["DialogLogsComponent"]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map