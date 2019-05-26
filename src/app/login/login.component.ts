import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IndexService } from '../shared/services/index';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    forgotPassword:boolean;
    login:boolean=true;
    loginForm: FormGroup;
    constructor(private router: Router,private toastr: ToastrService,private formBuilder: FormBuilder, public indexService: IndexService) {
        this.loginForm = this.formBuilder.group({            
            email: ['', [Validators.email, Validators.required]],
            password: ['', [Validators.required]]
        });
    }

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
        this.indexService.loggedin(this.loginForm.value).subscribe(
            res=>{
                if(res.data.length>0){
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                }
                else{
                    this.toastr.error('', 'Invalid Email/Password !');
                    // localStorage.setItem('isLoggedin', 'true');
                    // this.router.navigate(['/dashboard']);
                }
            },
            err=>{}
        );
        
    }
}
