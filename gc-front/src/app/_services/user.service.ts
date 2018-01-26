import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    private serviceUrl = 'http://localhost:4200/assets/demo_users.txt';

    constructor(private http: HttpClient) { }

    getAll() : Observable<User[]> {
        return this.http.get<User[]>(this.serviceUrl);
    }
    
    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post('http://localhost:9090/gestion_courrier/gc-api/web/index.php/addUser/' + user.login +'/'+ user.nom +'/'+ user.prenom +'/'+ user.email +'/' + user.password + '/' + user.role + '/' + user.id_entite,user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
    
}