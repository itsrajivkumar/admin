import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogLogsComponent } from '../shared/dialog-logs/dialog-logs.component';

export interface PeriodicElement {
    name: string;
    position: string;
    weight: string;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: "FCC_Fin1", name: 'chart_of_ac1', weight:"05/05/19", symbol: 'Logs' },
    { position: "FCC_Fin1", name: 'chart_of_ac1', weight:"05/06/19", symbol: 'Logs' },
    { position:"FCC_Fin1",  name: 'chart_of_ac1', weight: "05/07/19", symbol: 'Logs' },
    { position: "FCC_Fin1", name: 'chart_of_ac1', weight: "05/08/19", symbol: 'Logs' },
    { position: "FCC_Fin1", name: 'chart_of_ac1', weight: "05/09/19", symbol: 'Logs' },
    { position: "FCC_Fin1", name: 'chart_of_ac1', weight: "05/10/19", symbol: 'Logs' },
    { position: "FCC_Fin1", name: 'chart_of_ac1', weight: "05/11/19", symbol: 'Logs' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    animal: string;
    name: string;


    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [ 'Nov-18','Dec-18', 'Jan-19', 'Feb-19', 'Mar-19', 'April-19', 'May-19'];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Failed Transport' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Success Transport' }
    ];

    
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor(public dialog: MatDialog) {
        this.places = [
            {
                imgSrc: 'assets/images/card-1.jpg',
                place: 'Cozy 5 Stars Apartment',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
                charge: '$899/night',
                location: 'Barcelona, Spain'
            },
            {
                imgSrc: 'assets/images/card-2.jpg',
                place: 'Office Studio',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
                charge: '$1,119/night',
                location: 'London, UK'
            },
            {
                imgSrc: 'assets/images/card-3.jpg',
                place: 'Beautiful Castle',
                description:
                    // tslint:disable-next-line:max-line-length
                    'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
                charge: '$459/night',
                location: 'Milan, Italy'
            }
        ];
    }

    ngOnInit() {
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
