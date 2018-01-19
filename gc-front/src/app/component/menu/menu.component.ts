import { Component, OnInit } from '@angular/core';
import { Output, Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: any = [
    /*{
      'title': 'LOGIN',
      'link': '/login',
    },*/
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

  constructor() { }

  ngOnInit() {
  }

  onClickMe(mm) {
    console.log(mm.title);
    this.selectedMenu = mm.title;
  }

}
