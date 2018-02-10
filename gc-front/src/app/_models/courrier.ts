import { Documents } from "./documents";
import { Entite, Diffusion } from "./index";

export class Courrier {
    id: number = 0;
    titre: string;
    description: string;
    datecourrier: Date;
    type: string;
    nature: string;
    adresse: string;
    reference: string;
    entite: Entite;
    documents: Documents[];
    destinataire: Entite;
    destinataires: Diffusion[]
}
