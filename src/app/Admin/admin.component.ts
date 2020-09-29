import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../Model/auth.service';

@Component({
  templateUrl: 'admin.component.html',
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  ngOnInit() {}

  logout() {
    this.auth.clear();
    this.router.navigateByUrl('/');
  }
}
