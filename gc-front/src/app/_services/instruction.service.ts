import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from "@angular/http";

import {  Instruction } from '../_models/index';


@Injectable()
export class InstructionService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl = 'http://localhost/gestion_courrier/gc-api/web/index.php/';

    constructor(private http: Http) { }

    /**
     * Return all Instruction
     * @returns {Promise<Instruction[]>}
     */
    getInstructions(): Promise<Instruction[]> {
        return this.http.get(`${this.apiUrl}listInstruction`)
            .toPromise()
            .then(response => {
                return response.json() as Instruction[];
            })
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
