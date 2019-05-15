import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule,MatDialogModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { DialogLogsComponent } from '../shared/dialog-logs/dialog-logs.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree'; 
import {MatExpansionModule} from '@angular/material/expansion'; 


import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        StatModule,
        MatCardModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatTreeModule,
        
        Ng2Charts,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    exports:[DialogLogsComponent],
    declarations: [DashboardComponent,DialogLogsComponent],    
    entryComponents: [
        DialogLogsComponent
      
    ]
})
export class DashboardModule {}
