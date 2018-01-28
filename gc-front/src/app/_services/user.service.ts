import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

import { User } from '../_models/index';
import { SaveUserResponse } from '../_responses/index';

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serviceUrl = 'http://localhost:4200/assets/demo_users.txt';
    private apiUrl = 'http://localhost:9090/gestion_courrier/gc-api/web/index.php/';


    constructor(private http: Http) { }

    /**
     * Return all users
     * @returns {Promise<User[]>}
     */
    getUsers(): Promise<User[]> {
        return this.http.get(`${this.apiUrl}listUsers`)
            .toPromise()
            .then(response => {
                return response.json() as User[];
            })
            .catch(this.handleError);
    }

    /**
      * Returns user based on id
      * @param id:number
      * @returns {Promise<User>}
      */
    getUserById(id: number): Promise<User> {
        const url = `${this.apiUrl}/?id=${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }
    /**
     * Adds new user
     * @param user:User
     * @returns {Promise<SaveUserResponse>}
     */
    add(user: User): Promise<SaveUserResponse> {
        return this.http.post(`${this.apiUrl}addUser/`, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(response => {
                return response.json() as SaveUserResponse;
            })
            .catch(this.handleError);
    }

    /**
     * Updates user that matches to id
     * @param user:User
     * @returns {Promise<SaveUserResponse>}
     */
    update(user: User): Promise<SaveUserResponse> {
        return this.http.post(`${this.apiUrl}updateUser/`, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as SaveUserResponse)
            .catch(this.handleError);
    }

    /**
     * Removes user
     * @param id:string
     * @returns {Promise<User>}
     */
    remove(id: number): Promise<SaveUserResponse> {
        return this.http.post(`${this.apiUrl}deleteUser/`, JSON.stringify({ 'id': id }), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as SaveUserResponse)
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
