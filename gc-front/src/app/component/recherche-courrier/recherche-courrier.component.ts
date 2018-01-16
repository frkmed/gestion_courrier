import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-courrier',
  templateUrl: './recherche-courrier.component.html',
  styleUrls: ['./recherche-courrier.component.css']
})
export class RechercheCourrierComponent implements OnInit {
data=[
  {'id':10,'type':'recherche','categorie':'prive'},
  {'id':20,'type':'recherche','categorie':'prive'},
  {'id':30,'type':'recherche','categorie':'prive'},
  {'id':40,'type':'recherche','categorie':'prive'},
  {'id':50,'type':'recherche','categorie':'prive'},
  {'id':60,'type':'recherche','categorie':'prive'},
  {'id':70,'type':'recherche','categorie':'prive'}
];
  constructor() { }

  ngOnInit() {
  }

}
