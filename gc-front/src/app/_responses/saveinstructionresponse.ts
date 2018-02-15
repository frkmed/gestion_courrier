import { GenericResponse } from "./genericresponse";
import { Instruction } from "../_models/index";
export class SaveInstructionResponse extends GenericResponse {
  instruction: Instruction;
}