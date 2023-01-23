import { Actu } from "./actu";
import { User } from "./user";

export interface Commentaireactu {
  id:number
  actu:Actu;
  user:User;
  comment:string;
}
