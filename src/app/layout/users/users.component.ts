import { Component, OnInit, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogLogsComponent } from '../shared/dialog-logs/dialog-logs.component';
import { IndexService } from '../../shared/services/index';
import { resolve } from 'path';
import { reject } from 'q';
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
    firstName: string;
    lastName: string;
    email: string;
    status: string;
    color: string;
}

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    animal: string;
    name: string;
    userListing: boolean = true;
    createUser: boolean = false;
    userForm: FormGroup;

    displayedColumns = ['firstName', 'lastName', 'email', 'status'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private changeDetectorRefs:ChangeDetectorRef,private toastr: ToastrService,private router: Router,private formBuilder: FormBuilder, public dialog: MatDialog, public indexService: IndexService) {

        this.userForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', Validators.required],
            email: ['', [Validators.email, Validators.required], this.isEmailUnique.bind(this)],
            password: ['', [Validators.required]]
        });

        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }

        // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }

    isEmailUnique(control: FormControl) {
        return new Promise((resolve, reject) => {
            return this.indexService.getUserByEmail(control.value).subscribe(res=>{
                if(res.data.length>0)
                    resolve({ 'isEmailUnique': true });
                else
                    resolve(null);
            },err=>{});
            
            //resolve({ 'isEmailUnique': false });
        })

    }

    onSave() {
      // console.log(JSON.stringify(this.userForm.value));
       this.indexService.saveUser(this.userForm.value).subscribe(
           res=>{
            this.userForm.reset();
            this.onActivateUserListing();
            this.loadData();
            
            this.toastr.success('', 'User Saved Successfully !');
      
                
            },
           err=>{}
       );
      
    }

    onActivateCreateUser() {
        this.createUser = true;
        this.userListing = false;
    }
    onActivateUserListing() {
        this.createUser = false;
        this.userListing = true;

    }
    loadData(){
        
        this.indexService.getAllusers().subscribe((res) => {
            this.changeDetectorRefs.detectChanges();            
            this.dataSource = new MatTableDataSource(res.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            
        }, err => { console.log(err) });
    }
    onStatusChange(event,userId) {
        console.log('Toggle fired');
        alert(userId);
        let statusObj={status:0};
        if(event.checked){
            statusObj.status=1;

        }
        this.indexService.updateUserStatus(userId,statusObj).subscribe(
            (res:any)=>{
                this.toastr.success('', 'User Status Changed Successfully !');
            },
            (err:any)=>{}
        );
    }

    ngOnInit() {
        this.indexService.getUserById().subscribe((res) => {
            console.log(res)
        },
            err => { console.log(err) }
        );

        this.loadData();

        

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
