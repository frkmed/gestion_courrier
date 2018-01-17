import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private menu: any = [
    {
      'title': 'LOGIN',
      'link': ['login'],
    },
    {
      'title': 'COURRIER',
      'link': ['courrier'],
    },
    {
      'title': 'ARCHIVAGE',
      'link': ['archive'],
    },
    {
      'title': 'ENREGISTREMENT',
      'link': ['enregistrement'],
    },
    {
      'title': 'RECHERCHE',
      'link': ['recherche'],
    },
    {
      'title': 'ADMINISTRATION',
      'link': ['admin'],
    },
    {
      'title': 'UTILISATEURS',
      'link': ['users'],
    },
    {
      'title': 'STATISTIQUES',
      'link': ['stat'],
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
