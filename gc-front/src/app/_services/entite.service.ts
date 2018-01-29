import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from "@angular/http";

import { Entite } from '../_models/index';
import { SaveEntiteResponse } from "../_responses/saveentiteresponse";

@Injectable()
export class EntiteService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serviceUrl = 'http://localhost:4200/assets/demo_users.txt';
    private apiUrl = 'http://localhost/gestion_courrier/gc-api/web/index.php/';

    constructor(private http: Http) { }

    /**
     * Return all entites
     * @returns {Promise<Entite[]>}
     */
    getEntites(): Promise<Entite[]> {
        return this.http.get(`${this.apiUrl}listEntites`)
            .toPromise()
            .then(response => {
                return response.json() as Entite[];
            })
            .catch(this.handleError);
    }

    /**
      * Returns entite based on id
      * @param id:number
      * @returns {Promise<Entite>}
      */
    getEntiteById(id: number): Promise<Entite> {
        const url = `${this.apiUrl}/?id=${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Entite)
            .catch(this.handleError);
    }
   
    /**
     * Adds new entite
     * @param entite:Entite
     * @returns {Promise<SaveEntiteResponse>}
     */
    add(entite: Entite): Promise<SaveEntiteResponse> {
        return this.http.post(`${this.apiUrl}addEntite/`, JSON.stringify(entite), { headers: this.headers })
            .toPromise()
            .then(response => {
                // console.log(response);
                return response.json() as SaveEntiteResponse;
            })
            .catch(this.handleError);
    }

    /**
     * Updates entite that matches to id
     * @param entite:Entite
     * @returns {Promise<SaveEntiteResponse>}
     */
    update(entite: Entite): Promise<SaveEntiteResponse> {
        return this.http.post(`${this.apiUrl}updateEntite/`, JSON.stringify(entite), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as SaveEntiteResponse)
            .catch(this.handleError);
    }

    /**
     * Removes entite
     * @param id:string
     * @returns {Promise<Entite>}
     */
    remove(id: number): Promise<SaveEntiteResponse> {
        return this.http.post(`${this.apiUrl}deleteEntite/`, JSON.stringify({ 'id': id }), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as SaveEntiteResponse)
                // console.log(response))
            .catch(this.handleError);
    }

    /**
     * Handles error thrown during HTTP call
     * @param error:any
     * @returns {Promise<never>}
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // FOR TESTING  PURPOSES ONLY
        return Promise.reject(error.message || error);
    }
}
