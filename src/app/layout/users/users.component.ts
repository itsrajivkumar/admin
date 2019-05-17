import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogLogsComponent } from '../shared/dialog-logs/dialog-logs.component';

export interface PeriodicElement {
    firstName: string;
    lastName: string;
    email: string;
    status:string; 
    color:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
    { firstName: "Ankit", lastName: 'Singh', email:"ankit@gmail.com", status:"Active", color:"green" },
    { firstName: "Ritesh", lastName: 'Mallick', email:"Ritesh@gmail.com", status:"Active", color:"green" },
    { firstName:"Asmita",  lastName: 'Sangar', email: "asmita@gmail.com", status:"Active", color:"green" },
    { firstName: "Rahul", lastName: 'Jagtap', email: "rahul@gmail.com", status:"Active", color:"green" },
    { firstName: "Kunal", lastName: 'Marathe', email: "kunal@yahoo.com", status:"Active", color:"green" },
    { firstName: "Vignesh", lastName: 'Gupta', email: "vignesh@gmail.com", status:"Deactive", color:"red" },
    { firstName: "Hemant", lastName: 'Khadse', email: "hemant@gmail.com",status:"Deactive", color:"red"}
];

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    animal: string;
    name: string;

    displayedColumns = ['firstName', 'lastName', 'email', 'status'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog) {
        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }

    ngOnInit() {
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
