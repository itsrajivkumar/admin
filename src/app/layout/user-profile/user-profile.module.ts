import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';


import { MatInputModule } from '@angular/material';
import { MatCheckboxModule,MatButtonToggleModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    imports: [
        CommonModule, 
        UserProfileRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        FlexLayoutModule,
        MatDividerModule

    ],
    declarations: [UserProfileComponent]
})
export class UserProfileModule {}
