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
      'desc': 'Gestion du courrier',
    },
    {
      'title': 'ADMINISTRATION',
      'link': '/admin',
      'desc': 'Administration',
    },
    {
      'title': 'UTILISATEURS',
      'link': '/users',
      'desc': 'Gestion des utilisateurs',
    },
    /**
    {
      'title': 'ARCHIVAGE',
      'link': '/archive',
      'desc': 'Gestion d\'archive',
    },
    {
      'title': 'ENREGISTREMENT',
      'link': '/enregistrement',
      'desc': 'Nouveau courrier',
    },
    {
      'title': 'RECHERCHE',
      'link': '/recherche',
      'desc': 'Recherche courrier',
    },
    {
      'title': 'STATISTIQUES',
      'link': '/stat',
      'desc': 'Statistiques',
    },*/
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
