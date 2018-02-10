import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Courrier } from '../_models';
import { DatePipe } from "@angular/common";

import { GenericResponse, SaveDocumentResponse, SaveCourrierResponse, RechercherCourrierResponse } from "../_responses";
@Injectable()
export class CourrierService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private headers2: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private baseUrl = 'http://localhost/gestion_courrier/gc-api/web/index.php';

  private addNewCourrierUrl = this.baseUrl + '/saveCourrier';
  private deleteCourrierUrl = this.baseUrl + '/supprimerCourrier/';
  private saveDocUrl = this.baseUrl + '/saveDocument';
  private rechercherCourrierUrl = this.baseUrl + '/rechercherCourrier/';
  private getAllCourrierUrl = this.rechercherCourrierUrl + '*:*';

  constructor(
    //private http2: HttpClient,
    private http: Http,
    private datePipe: DatePipe
  ) { }

  /**
     * Return all courriers
     * @returns {Promise<Courrier[]>}
  */
  getAll(): Promise<RechercherCourrierResponse> {
    return this.http.get(this.getAllCourrierUrl)
      .toPromise()
      .then(response => {
        console.log(response);
        return response.json() as RechercherCourrierResponse;
      })
      .catch(this.handleError);
  }

  /**
       * Adds new courrier
       * @param courrier:Courrier
       * @returns {Promise<SaveCourrierResponse>}
  */
  create(courrier: Courrier): Promise<SaveCourrierResponse> {
    return this.http.post(this.addNewCourrierUrl, JSON.stringify(courrier), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json() as SaveCourrierResponse;
      })
      .catch(this.handleError);
  }
  /**
    * Removes Courrier
    * @param id:string
    * @returns {Promise<Courrier>}
    */
  delete(id: number): Promise<GenericResponse> {
    return this.http.post(this.deleteCourrierUrl, JSON.stringify({ 'id': id }), { headers: this.headers })
      .toPromise()
      .then(response => response.json() as GenericResponse)
      .catch(this.handleError);
  }

  saveDoc(base64: string): Promise<SaveDocumentResponse> {
    return this.http.post(this.saveDocUrl, base64)
      .toPromise()
      .then(response => {
        return response.json() as SaveCourrierResponse;
      })
      .catch(this.handleError);
  }

  rechercherCourrier(query: string): Promise<RechercherCourrierResponse> {
    if (query.trim() === '') { query = "*:*"; }

    return this.http.get(this.rechercherCourrierUrl + encodeURIComponent(query))
      .toPromise()
      .then(response => {
        return response.json() as RechercherCourrierResponse;
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