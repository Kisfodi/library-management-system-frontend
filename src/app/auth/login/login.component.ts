import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "./service/login.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{


  constructor(public authService: AuthService, public router: Router) {}

  login() {
    this.authService.login()
      .subscribe(() => {
        if (this.authService.isLoggedIn) {
          const redirectUrl = '/homepage';
          this.router.navigate([redirectUrl]);
        }
      })
  }

  logout() {
    this.authService.logout()
  }

/*
errorMsg:string|undefined;

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl<string>(''),
    password: new FormControl<string>('')
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {

    const loginFormValue = this.loginForm.value;
    if (loginFormValue.userName && loginFormValue.password) {
      this.errorMsg = undefined;
      this.loginService
        .login(loginFormValue.userName, loginFormValue.password)
        .subscribe({
          next: () => {
            this.router.navigate(['']);
          },
          error: () => {
            this.errorMsg = 'Invalid User/Password';
          }
        });
    } else {
      this.errorMsg = 'Invalid User/Password';
    }
  }*/



}
