import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { UserService } from './../../services/user.service';
import { ToastrMessageModel } from 'src/app/toastr.model';
import { MESSAGE_TYPE_SUCCESS, MESSAGE_TYPE_ERROR } from 'src/app/app-config/app.constants';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  hide = true;

  Roles: any[] = [
    {name: 'Admin', value: 'Admin'},
    {name: 'Client', value: 'Client'},
    {name: 'Employee', value: 'Employee'}
  ];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.formControls();
  }

  formControls() {
    this.registerForm.addControl('userName', new FormControl('', [Validators.required]));
    this.registerForm.addControl('emailId', new FormControl('', [Validators.required]));
    this.registerForm.addControl('password', new FormControl('', [Validators.required]));
    this.registerForm.addControl('role', new FormControl('', [Validators.required]));
  }

  register() {
    this.userService.register(this.registerForm.value).subscribe((data) => {
      this.successMessage('Successfully Registered!.....');
      this.router.navigate(['/login']);
    }, (error) => {
      this.errorMessage('Failed to register!.....');
    });
  }

  successMessage(data: string) {
    const message = new ToastrMessageModel();
    message.message = data;
    message.type = MESSAGE_TYPE_SUCCESS;
    this.alertService.toastrMessage(message);
  }

  errorMessage(data: string) {
    const message = new ToastrMessageModel();
    message.message = data;
    message.type = MESSAGE_TYPE_ERROR;
    this.alertService.toastrMessage(message);
  }
  
}
