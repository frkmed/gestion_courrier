import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-courrier',
  templateUrl: './recherche-courrier.component.html',
  styleUrls: ['./recherche-courrier.component.css']
})
export class RechercheCourrierComponent implements OnInit {
data=[
  {'id':10,'type':'recherche','categorie':'prive','date':'20/1/2018','correspondant': 'youssef','objet':'facture','destination':'service budget'},
  {'id':20,'type':'recherche','categorie':'prive','date':'20/1/2018','correspondant': 'mohamed','objet':'facture','destination':'service budget'},
  {'id':30,'type':'recherche','categorie':'prive','date':'15/1/2018','correspondant': 'mehdi','objet':'facture','destination':'service budget'},
  {'id':40,'type':'recherche','categorie':'public','date':'5/9/2017','correspondant': 'assia','objet':'facture','destination':'service budget'},
  {'id':50,'type':'recherche','categorie':'prive','date':'23/8/2017','correspondant': 'hajhouj','objet':'facture','destination':'service budget'},
  {'id':60,'type':'recherche','categorie':'prive','date':'23/6/2017','correspondant': 'mohamed','objet':'facture','destination':'service budget'},
  {'id':70,'type':'recherche','categorie':'prive','date':'20/1/2018','correspondant': 'youssef','objet':'facture','destination':'service budget'},
  {'id':80,'type':'recherche','categorie':'prive','date':'20/1/2018','correspondant': 'mohamed','objet':'facture','destination':'service budget'},
  {'id':90,'type':'recherche','categorie':'prive','date':'20/1/2018','correspondant': 'mehdi','objet':'facture','destination':'service budget'},
  {'id':100,'type':'recherche','categorie':'public','date':'20/1/2018','correspondant': 'assia','objet':'facture','destination':'service budget'},
  {'id':110,'type':'recherche','categorie':'prive','date':'20/1/2018','correspondant': 'hajhouj','objet':'facture','destination':'service budget'},
  {'id':120,'type':'recherche','categorie':'prive','date':'20/1/2018','correspondant': 'mohamed','objet':'facture','destination':'service budget'},
  {'id':130,'type':'recherche','categorie':'prive','date':'27/1/2018','correspondant': 'youssef','objet':'facture','destination':'service budget'},
  {'id':140,'type':'recherche','categorie':'prive','date':'18/9/2017','correspondant': 'youssef','objet':'facture','destination':'service budget'},
  {'id':150,'type':'recherche','categorie':'prive','date':'08/8/2017','correspondant': 'mohamed','objet':'facture','destination':'service budget'},
  {'id':160,'type':'recherche','categorie':'prive','date':'13/3/2017','correspondant': 'mehdi','objet':'facture','destination':'service budget'},
  {'id':170,'type':'recherche','categorie':'public','date':'20/8/2017','correspondant': 'assia','objet':'facture','destination':'service budget'},
  {'id':180,'type':'recherche','categorie':'prive','date':'1/1/2018','correspondant': 'hajhouj','objet':'facture','destination':'service budget'},
  {'id':190,'type':'recherche','categorie':'prive','date':'20/6/2017','correspondant': 'mohamed','objet':'facture','destination':'service budget'},
  {'id':200,'type':'recherche','categorie':'prive','date':'10/8/2017','correspondant': 'youssef','objet':'facture','destination':'service budget'},
  {'id':210,'type':'recherche','categorie':'prive','date':'20/2/2017','correspondant': 'youssef','objet':'facture','destination':'service budget'}
];
  constructor() { }

  ngOnInit() {
  }

}
