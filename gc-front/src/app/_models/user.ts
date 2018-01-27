import { Entite } from './index';

export class User {
    id: number;
    login: string;
    nom: string;
    prenom: string;
    email: string;
    role: string;
    mot_passe: string;
    entite: Entite;
}

