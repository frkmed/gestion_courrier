import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { User } from '../../_models/index';
import { AuthenticationService } from '../../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  user: User = new User();
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    this.user.id = 2;
    this.user.nom = 'admin';
    this.user.prenom = 'admin';
    this.user.login = 'admin';
    this.user.mot_passe = 'admin';
    localStorage.setItem('currentUser', JSON.stringify(this.user));

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.login, this.model.password)
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
      });
  }
}
