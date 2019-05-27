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

module.exports = "<div fxFlex>\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>Transports</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n\n            <div class=\"mat-elevation-z8\">\n\n                <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" [class.isMobile]=\"isMobile\" matsort>\n                    <ng-container matColumnDef=\"process\">\n                        <th mat-header-cell *matHeaderCellDef> Process </th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.fileRegistry.processName}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"data\">\n                        <th mat-header-cell *matHeaderCellDef>Data </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.fileRegistry.sourceDataName}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"startDate\">\n                        <th mat-header-cell *matHeaderCellDef> Start Date </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.fileRegistry.processTimeStamp*1000 | date:'MM/dd/yyyy H:m:s'}}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"lastUpdatedDate\">\n                        <th mat-header-cell *matHeaderCellDef>Last Updated</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.lastTimeStamp*1000 |date: 'MM/dd/yyyy H:m:s'}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef>Status</th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <span [ngStyle]=\"{'color':'blue'}\" *ngIf=\"element.status == 0\">In-Progress</span>\n                            <span [ngStyle]=\"{'color':'green'}\" *ngIf=\"element.status == 1\">Completed</span>\n                            <span [ngStyle]=\"{'color':'red'}\" *ngIf=\"element.status == 2\">Failed</span>\n                        </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"action\">\n                        <th mat-header-cell *matHeaderCellDef> Details </th>\n                        <td mat-cell *matCellDef=\"let element\">\n                            <span *ngFor=\"let  location of element.route; let idx = index\">\n                                <button *ngIf=\"location.status==0\" mat-raised-button class=\"bggrey\">{{location.locationName}}</button>\n                                <button (click)=\"openDialog(location.type,location.id)\" *ngIf=\"location.status==1\" mat-raised-button class=\"bggreen\">{{location.locationName}}</button>\n                                <button (click)=\"openDialog(location.type,location.id)\" *ngIf=\"location.status==2\" mat-raised-button class=\"bgred\">{{location.locationName}}</button>\n                                <span *ngIf=\"element.route.length > idx+1\">\n                                    <b>==></b>\n                                </span>\n                            </span>\n\n                            <!-- <button mat-raised-button class=\"bggreen\">loc 1</button>\n                            <b>==></b>\n                            <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Failed'?'red':'green','color':'white'}\">Loc 2</button>\n                            <b>==></b>\n                            <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed' ?'green':'grey','color':'white'}\">Loc 3</button>\n                            <b>==></b>\n                            <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed'?'green':'grey','color':'white'}\">Loc 4</button>\n                            <b>==></b>\n                            <button mat-raised-button [ngStyle]=\"{'background-color':element.status==='Completed'?'green':'grey','color':'white'}\">Loc 5</button> -->\n                        </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n\n                <mat-paginator [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n            </div>\n        </mat-card-content>\n    </mat-card>"

/***/ }),

/***/ "./src/app/layout/tables/tables.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/tables/tables.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table th,\ntd {\n  text-align: center; }\n\n.bggreen {\n  background-color: green;\n  color: white; }\n\n.bgred {\n  background-color: red;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL211bS1kZXZlbG9wZXI0L0Rlc2t0b3AvdGVzdC9hbmd1bGFyLW1hdGVyaWFsL2dpdC9hZG1pbi9zcmMvYXBwL2xheW91dC90YWJsZXMvdGFibGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHZjs7RUFFSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx1QkFBdUI7RUFDdkIsWUFDSixFQUFBOztBQUVBO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC90YWJsZXMvdGFibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZSB0aCxcbnRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iZ2dyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICBjb2xvcjogd2hpdGVcbn1cblxuLmJncmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6IHdoaXRlXG59Il19 */"

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
/* harmony import */ var _shared_services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/index */ "./src/app/shared/services/index.ts");
/* harmony import */ var _shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dialog-logs/dialog-logs.component */ "./src/app/layout/shared/dialog-logs/dialog-logs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const ELEMENT_DATA: PeriodicElement[] = [
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/05/19 12:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "In-Progress", action: 'Logs', color: "blue" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/06/19 13:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Completed", action: 'Logs', color: "green" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/07/19 14:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Failed", action: 'Logs', color: "red" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/08/19 15:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "In-Progress", action: 'Logs', color: "blue" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/09/19 16:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Completed", action: 'Logs', color: "green" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/10/19 17:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Failed", action: 'Logs', color: "red" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/11/19 18:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "In-Progress", action: 'Logs', color: "blue" }
// ];
var TablesComponent = /** @class */ (function () {
    function TablesComponent(dialog, indexService) {
        this.dialog = dialog;
        this.indexService = indexService;
        this.displayedColumns = ['process', 'data', 'startDate', 'lastUpdatedDate', 'status', 'action'];
        //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    TablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Assign the data to the data source for the table to render
        this.indexService.getFileRegistry().subscribe(function (result) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](result.data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (err) { console.log(err); });
    };
    TablesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TablesComponent.prototype.openDialog = function (type, id) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_dialog_logs_dialog_logs_component__WEBPACK_IMPORTED_MODULE_3__["DialogLogsComponent"], {
            width: '550px',
            data: { type: type, id: id }
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _shared_services_index__WEBPACK_IMPORTED_MODULE_2__["IndexService"]])
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