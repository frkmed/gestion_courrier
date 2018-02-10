import { GenericResponse } from "./genericresponse";
import { Courrier } from "../_models/index";
export class SaveCourrierResponse extends GenericResponse {
  courrier: Courrier;
}