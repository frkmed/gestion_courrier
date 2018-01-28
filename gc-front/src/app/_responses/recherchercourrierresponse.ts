import { Courrier } from "../_models";
import { GenericResponse } from "./genericresponse";
export class RechercherCourrierResponse extends GenericResponse {
  resultat: Courrier[];
}