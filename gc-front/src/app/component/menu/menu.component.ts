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
      'title': 'COURRIER',
      'link': '/courrier',
    },
    {
      'title': 'ARCHIVAGE',
      'link': '/archive',
    },
    {
      'title': 'ENREGISTREMENT',
      'link': '/enregistrement',
    },
    {
      'title': 'RECHERCHE',
      'link': '/recherche',
    },
    {
      'title': 'ADMINISTRATION',
      'link': '/admin',
    },
    {
      'title': 'UTILISATEURS',
      'link': '/users',
    },
    {
      'title': 'STATISTIQUES',
      'link': '/stat',
    },
  ];
  selectedMenu: any;

  constructor(private router: Router) {

  }

  ngOnInit() {
    var u = this.menu.filter(
      book => book.link === this.router.url);
    if (u.length == 0) {
      this.sendMessage("ACCUEIL");
    } else {
      this.sendMessage(u[0].title);
    }

  }


  sendMessage(title) {
    this.messageEvent.emit(title?title:'ACCUEIL');
  }
}
