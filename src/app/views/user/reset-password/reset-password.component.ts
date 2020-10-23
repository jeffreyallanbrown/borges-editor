import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {
  @ViewChild('resetForm') resetForm: NgForm;
  emailModel = 'demo@vien.com';
  passwordModel = 'demovien1122';

  buttonDisabled = false;
  buttonState = '';

  constructor(
    private authService: AuthenticationService,
    private notifications: NotificationsService,
    private router: Router
  ) {}

  ngOnInit() {}

}
