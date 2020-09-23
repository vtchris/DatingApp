import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  // public used so authService can be used for interpolation in the html
  constructor(public authService: AuthService, private alertify: AlertifyService) {  }

  ngOnInit() {  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn(){
    return this.authService.loggedIn();
    // const token = localStorage.getItem('token');
    // Double !! returns true/false -- shorthand
    // return !!token;
  }

  logout(){
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

}
