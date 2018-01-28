import { GenericResponse } from "./genericresponse";
import { Entite } from "../_models/index";
export class SaveEntiteResponse extends GenericResponse {
  entite: Entite;
}