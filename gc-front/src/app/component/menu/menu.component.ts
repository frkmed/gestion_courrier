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
      'link': ['courrier'],
    },
    {
      'title': 'ARCHIVAGE',
      'link': ['/archive'],
    },
    {
      'title': 'UTILISATEURS',
      'link': ['user'],
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
