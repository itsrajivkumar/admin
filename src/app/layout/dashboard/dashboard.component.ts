import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogLogsComponent } from '../shared/dialog-logs/dialog-logs.component';
import { IndexService } from '../../shared/services/index';
import { ToastrService } from 'ngx-toastr';
import { Response } from 'selenium-webdriver/http';
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
    inprocesscount: any;
    successTransport: any;
    failedTransport: any;
    barchartShow :boolean=false;

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
    public barChartData: any[]=[{data:'',label:'Failed Transport'},{data:'',label:'Successful Transport'}] ;
    public yearArr: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    public barChartLabels: string[];
    public barChartType: string;
    public barChartLegend: boolean;

    


    displayedColumns = ['process', 'data', 'startDate', 'lastUpdatedDate', 'status', 'action'];
    //dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor(public dialog: MatDialog, public indexService: IndexService, private toastr: ToastrService) {


    }
   
    ngOnInit() {
        // this.toastr.success('Hello world!', 'Toastr fun!');
        // this.toastr.error('Error world!', 'Toastr fun!');
        this.barChartLabels = this.getBarChartLabel();
        this.indexService.getBarchart().subscribe((response: any) => {
            // { data: [65, 59, 80, 81, 56, 55], label: 'Failed Transport' },
            // { data: [28, 48, 40, 19, 86, 27], label: 'Successful Transport' }
           
            
            this.barChartData[0].data = response.data.failedArr;

            
            this.barChartData[1].data = response.data.successArr;

            this.barChartType = 'bar';
            this.barChartLegend = true;
            this.barchartShow=true;
          
        }, err => { console.log(err) });
        this.indexService.getFileRegistry().subscribe((response: any) => {
            this.dataSource = new MatTableDataSource(response.data);
        }, err => { console.log(err) });

        this.indexService.getUserCount().subscribe((response: any) => {
            this.usercount = response.data;
        }, err => { console.log(err) });
        this.indexService.getTransport().subscribe((response: any) => {
            this.filecount = response.data.count;
            this.inprocesscount = response.data.inProcesscount;
            this.successTransport = response.data.successcount;
            this.failedTransport = response.data.failurecount;
        }, err => { console.log(err) });

        
    }
    getBarChartLabel() {
        
        let tempLabelArr = [];
        for (let monthCount = 6; monthCount >= 1; monthCount--) { 
                    
            var d = new Date();          
            d.setMonth(d.getMonth() - monthCount);
            let month = d.getMonth();
            let year = d.getFullYear();
            
            tempLabelArr.push(this.yearArr[month]+"-"+year);
        }
        
        return tempLabelArr;
    }
    openDialog(type, id): void {
        const dialogRef = this.dialog.open(DialogLogsComponent, {
            width: '500px',
            data: { type: type, id: id }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
