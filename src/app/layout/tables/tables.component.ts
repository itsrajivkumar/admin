import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { IndexService } from '../../shared/services/index';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogLogsComponent } from '../shared/dialog-logs/dialog-logs.component';

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
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
    animal: string;
    name: string;

    displayedColumns = ['process', 'data', 'startDate', 'lastUpdatedDate', 'status', 'action'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog, public indexService: IndexService) {
        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }
        //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }

    ngOnInit() {
        // Assign the data to the data source for the table to render
        this.indexService.getFileRegistry().subscribe((result) => {     
            this.dataSource = new MatTableDataSource(result.data);
        }, err => { console.log(err) });

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
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

/** Constants used to fill up our data base. */
const COLORS = [
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
const NAMES = [
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

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
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
