import { AuthService } from './../../_services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertifyService } from './../../_services/alertify.service';
import { User } from './../../_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  user: User;
  // this provides a popup warning that you are closing the browser before saving changes.
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }
  
  constructor(
      private route: ActivatedRoute,
      private alertify: AlertifyService,
      private userService: UserService,
      private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data[`user`];
    });
  }

  updateUser(){
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertify.success('Profile Updated Successfully!');
      // You need to have the viewChild decorator above to access the form and methods.
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });
  }

}