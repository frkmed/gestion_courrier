import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Courrier } from '../_models/index';

@Injectable()
export class CourrierService {
    private baseUrl = 'http://localhost/gestion_courrier/gc-api/web/index.php';
    private getAllCourrierUrl = 'http://localhost:4200/assets/demo_courriers.txt';
    private addNewCourrierUrl = this.baseUrl + '/saveCourrier/';
    private deleteCourrierUrl = this.baseUrl + '/supprimerCourrier/';
    
    constructor(private http: HttpClient) { }

    getAll() : Observable<Courrier[]> {
        return this.http.get<Courrier[]>(this.getAllCourrierUrl);
    }
  
    create(courrier: Courrier) {
      console.log(courrier);
      
      let titre = courrier.titre;
      let description = courrier.description;
      let dateCourrier = courrier.datecourrier;
      let typeCourrier = courrier.type;
      let nature = courrier.nature;
      let adresse = courrier.adresse;
      let reference = courrier.reference;
      let idEntite = courrier.idEntite;

      let rep = this.http.post(this.addNewCourrierUrl + `${titre}/${description}/${dateCourrier}/${typeCourrier}/${nature}/${adresse}/${reference}/${idEntite}`, '');
      console.log (rep);
    }
  
    delete(id: number) {
        return this.http.delete(this.deleteCourrierUrl + id);
    }

    /**getById(id: number) {
        return this.http.get('/api/users/' + id);
    }



    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    **/
}