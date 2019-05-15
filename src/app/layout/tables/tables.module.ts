import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule,MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { DialogLogsComponent } from '../shared/dialog-logs/dialog-logs.component';
import {DashboardModule} from '../dashboard/dashboard.module';

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        DashboardModule
    ],
    declarations: [TablesComponent],
    entryComponents: [
        DialogLogsComponent
      
    ]
})
export class TablesModule {}
