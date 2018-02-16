import { User } from ".";

export class Entite {
    id: number;
    id_parent: number;
    nom: string;
    type: string;
    users:User[];
}
