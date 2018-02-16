import { Documents } from "./documents";
import { Entite, User } from "./index";
import { Instruction } from "./instruction";

export class Diffusion {
    id: number = 0;
    entite: Entite;
    description: string;
    responsable: User;
    action: string;
    instruction: Instruction;
    delai: number;
    reponse: string;
}
