import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private menu: any = [
    {
      'title': 'COURRIER',
      'link': ['login'],
    },
    {
      'title': 'ARCHIVAGE',
      'link': ['home'],
    },
    {
      'title': 'UTILISATEURS',
      'link': ['users'],
    },
    {
      'title': 'ADMINISTRATION',
      'link': ['admin'],
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
