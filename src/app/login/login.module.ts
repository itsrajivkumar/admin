import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        FormModule,
        ReactiveFormsModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
