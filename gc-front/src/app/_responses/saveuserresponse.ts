import { GenericResponse } from "./genericresponse";
import { User } from "../_models/index";
export class SaveUserResponse extends GenericResponse {
  user: User;
}