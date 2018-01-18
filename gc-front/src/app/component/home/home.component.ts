import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "HOME COMPONENT";

  constructor(router: Router) { 
  }

  receiveMessage($event) {
    this.message=$event;
  }

  ngOnInit() {
  }

}
