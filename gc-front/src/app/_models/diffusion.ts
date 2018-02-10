import { Documents } from "./documents";
import { Entite } from "./index";
import { Instruction } from "./instruction";

export class Diffusion {
    id: number = 0;
    entite: Entite;
    description: string;
    responsable: String;
    action: string;
    instruction: Instruction;
    delai: number;
    reponse: string;
}
