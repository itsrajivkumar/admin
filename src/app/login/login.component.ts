import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    forgotPassword:boolean;
    login:boolean=true;
    constructor(private router: Router) {}

    ngOnInit() {}
    onForgotPassword() {
        this.forgotPassword=true;
        this.login=false;
    }
    onSignIn() {
        this.forgotPassword=false;
        this.login=true;
    }

    onLogin() {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }
}
