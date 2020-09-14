import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor() {
        console.log('initalized');
  }

  ngOnInit() {  }

  login(){
    console.log('clicked');
    console.log(this.model);
  }

}
