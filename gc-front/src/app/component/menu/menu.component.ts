import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<String>();
  message: String = 'MENU COMPONENT';
  menu: any = [
    {
      'title': 'COURRIER DEPART',
      'link': '/courrierdepart',
      'desc': 'Gestion du courrier de départ',
    },
    {
      'title': 'COURRIER ARRIVEE',
      'link': '/courrierarrivee',
      'desc': 'Gestion du courrier d\'arrivée',
    },
    {
      'title': 'ADMINISTRATION',
      'link': '/admin',
      'desc': 'Administration',
    }
  ];
  selectedMenu: any;

  constructor(private router: Router) {

  }

  ngOnInit() {
    let link = this.menu.filter(
      url => url.link === this.router.url);
    if (link.length === 0) {
      this.sendMessage('ACCUEIL');
    } else {
      this.sendMessage(link[0].desc);
    }

  }
  sendMessage(desc) {
    this.messageEvent.emit(desc ? desc : 'ACCUEIL');
  }
}
