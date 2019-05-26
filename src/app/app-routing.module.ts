import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
