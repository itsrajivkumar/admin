import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogLogsComponent } from '../shared/dialog-logs/dialog-logs.component';
import { IndexService } from '../../shared/services/index';
import { ToastrService } from 'ngx-toastr';
export interface PeriodicElement {
    data: string;
    process: string;
    startDate: string;
    action: string;
    lastUpdatedDate: string;
    status: string;
    color: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/05/19 12:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "In-Progress", action: 'Logs', color: "blue" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/06/19 13:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Completed", action: 'Logs', color: "green" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/07/19 14:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Failed", action: 'Logs', color: "red" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/08/19 15:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "In-Progress", action: 'Logs', color: "blue" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/09/19 16:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Completed", action: 'Logs', color: "green" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/10/19 17:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "Failed", action: 'Logs', color: "red" },
//     { process: "FCC_Fin1", data: 'chart_of_ac1', startDate: "05/11/19 18:10:10", lastUpdatedDate: "05/05/19 12:10:10", status: "In-Progress", action: 'Logs', color: "blue" }
// ];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    animal: string;
    name: string;
    dataSource: MatTableDataSource<any>;
    usercount: any;
    filecount: any;
    successTransport:any;
    failedTransport : any;

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barchartColors: any = [
        {
            backgroundColor: '#BF212F'
        },
        {
            backgroundColor: '#01692C'
        }
    ];
    public barChartLabels: string[] = ['Nov-18', 'Dec-18', 'Jan-19', 'Feb-19', 'Mar-19', 'April-19', 'May-19'];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Failed Transport' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Successful Transport' }
    ];


    displayedColumns = ['process', 'data', 'startDate', 'lastUpdatedDate', 'status', 'action'];
    //dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor(public dialog: MatDialog, public indexService: IndexService,private toastr: ToastrService) {
       
        
    }

    ngOnInit() {
        this.toastr.success('Hello world!', 'Toastr fun!');
        this.toastr.error('Error world!', 'Toastr fun!');
        this.indexService.getFileRegistry().subscribe((response:any) => {
            this.dataSource = new MatTableDataSource(response.data);
        }, err => { console.log(err) });
        
        this.indexService.getUserCount().subscribe((response:any) => {
            this.usercount = response.data;          
        }, err => { console.log(err) });
        this.indexService.getTransport().subscribe((response:any) => {
            this.filecount = response.data.count;       
            this.successTransport = response.data.successcount;
            this.failedTransport = response.data.failurecount;   
        }, err => { console.log(err) });

        this.barChartType = 'bar';
        this.barChartLegend = true;
    }
    openDialog(): void {
        const dialogRef = this.dialog.open(DialogLogsComponent, {
            width: '550px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
