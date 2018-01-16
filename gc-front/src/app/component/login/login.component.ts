import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/index';

import { AuthenticationService } from '../../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  returnUrl: string;
  constructor(private route: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
   // this.returnUrl = this.route.
  }

  seConnecter() {
    if (this.user.username === 'user' && this.user.password === '1234') {
      localStorage.setItem('currentUser', 'user');
    } else {
      console.log('NOT CONNECTED');
    }
  }

}
