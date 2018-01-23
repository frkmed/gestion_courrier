import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Entite } from '../_models/index';

@Injectable()
export class EntiteService {
    private serviceUrl = 'http://localhost:9090/gestion_courrier/gc-api/web/index.php/listEntites/';

    constructor(private http: HttpClient) { }

    getAll() : Observable<Entite[]> {
        return this.http.get<Entite[]>(this.serviceUrl);       
    }

    /**getById(id: number) {
        return this.http.get('/api/entite/' + id);
    }

    create(entite: Entite) {
        return this.http.post('/api/entite', user);
    }

    update(entite: Entite) {
        return this.http.put('/api/entite/' + entite.id, entite);
    }

    delete(id: number) {
        return this.http.delete('/api/uentite/' + id);
    }**/
}