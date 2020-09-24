import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../Model/auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  authenticate(form: NgForm) {
    if (form.valid) {
      // perform the authentication
      this.authService
        .authenitcate(this.username, this.password)
        .subscribe((response) => {
          if (response) {
            this.router.navigateByUrl('/admin/main');
          }
          this.errorMessage = 'Oops...Authentication Failed..!!';
        });
    } else {
      this.errorMessage = 'Wrong Credentials..Form Data Invalid..!';
    }
  }
}
