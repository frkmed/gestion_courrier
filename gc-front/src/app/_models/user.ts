import { Entite } from './index';

export class User {
    id: number;
    login: string;
    nom: string;
    prenom: string;
    email: string;
    role: string;
    password: string;
    entite: Entite;
}

