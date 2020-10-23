import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('passwordForm') passwordForm: NgForm;
  buttonDisabled = false;
  buttonState = '';

  constructor(private authService: AuthenticationService, private notifications: NotificationsService, private router: Router) { }

  ngOnInit() {
  }



}
