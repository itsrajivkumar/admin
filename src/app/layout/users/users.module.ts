import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule,MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { DialogLogsComponent } from '../shared/dialog-logs/dialog-logs.component';
import {DashboardModule} from '../dashboard/dashboard.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        
        UsersRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        DashboardModule
    ],
    declarations: [UsersComponent],
    entryComponents: [
        DialogLogsComponent
      
    ]
})
export class UsersModule {}