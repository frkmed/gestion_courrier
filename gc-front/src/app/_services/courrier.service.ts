import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Courrier} from '../_models/index';
import { GenericResponse, SaveDocumentResponse } from "../_responses";
import { DatePipe } from "@angular/common";

@Injectable()
export class CourrierService {
  private baseUrl = 'http://localhost/gestion_courrier/gc-api/web/index.php';
  private getAllCourrierUrl = 'http://localhost:4200/assets/demo_courriers.txt';
  private addNewCourrierUrl = this.baseUrl + '/saveCourrier/';
  private deleteCourrierUrl = this.baseUrl + '/supprimerCourrier/';
  private saveDocUrl = this.baseUrl + '/saveDocument';

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getAll(): Observable<Courrier[]> {
    return this.http.get<Courrier[]>(this.getAllCourrierUrl);
  }

  create(courrier: Courrier, docs: Map<number, string>) {
    console.log(courrier);
    
    let titre = encodeURIComponent(courrier.titre);
    let description = encodeURIComponent(courrier.description);
    let dateCourrier = encodeURIComponent(this.datePipe.transform(courrier.datecourrier, 'dd-MM-yyyy'));
    let typeCourrier = encodeURIComponent(courrier.type);
    let nature = encodeURIComponent(courrier.nature);
    let adresse = encodeURIComponent(courrier.adresse);
    let reference = encodeURIComponent(courrier.reference);
    let idEntite = courrier.idEntite;

    let url = this.addNewCourrierUrl + `${titre}/${description}/${dateCourrier}/${typeCourrier}/${nature}/${adresse}/${reference}/${idEntite}`;
    console.log(url);
    let rep = this.http.post(url, '');

    console.log(rep);
  }

  delete(id: number) {
    return this.http.delete(this.deleteCourrierUrl + id);
  }

  saveDoc(base64: string) : Observable<SaveDocumentResponse> {
    console.log('saving doc');
    var headers = new Headers();
    return this.http.post<SaveDocumentResponse>(this.saveDocUrl, base64);
  }



  /**getById(id: number) {
      return this.http.get('/api/users/' + id);
  }



  update(user: User) {
      return this.http.put('/api/users/' + user.id, user);
  }

  **/
}