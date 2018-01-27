import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

import { Entite } from '../_models/index';

@Injectable()
export class EntiteService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serviceUrl = 'http://localhost:4200/assets/demo_users.txt';
    private apiUrl = 'http://localhost/gestion_courrier/gc-api/web/index.php/';


    constructor(private http: Http) { }

    /**
     * Return all entites
     * @returns {Promise<User[]>}
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
      * Returns user based on id
      * @param id:number
      * @returns {Promise<User>}
      */
    getUserById(id: number): Promise<Entite> {
        const url = `${this.apiUrl}/?id=${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Entite)
            .catch(this.handleError);
    }
    /**
     * Adds new user
     * @param user:User
     * @returns {Promise<User>}
     */
    add(entite: Entite): Promise<Entite> {
        return this.http.post(`${this.apiUrl}addUser/`, JSON.stringify(entite), { headers: this.headers })
            .toPromise()
            .then(response => {
                // console.log(response);
                return response.json() as Entite;
            })
            .catch(this.handleError);
    }

    /**
     * Updates user that matches to id
     * @param user:User
     * @returns {Promise<User>}
     */
    update(entite: Entite): Promise<Entite> {
        return this.http.post(this.apiUrl, JSON.stringify(entite), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Entite)
            .catch(this.handleError);
    }

    /**
     * Removes user
     * @param id:string
     * @returns {Promise<User>}
     */
    remove(id: string): Promise<any> {
        return this.http.post(this.apiUrl, JSON.stringify({ _id: id, delete: 1 }), { headers: this.headers })
            .toPromise()
            .then(response => console.log(response))
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
