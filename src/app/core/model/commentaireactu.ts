import { Actu } from "./actu";
import { User } from "./user";

export interface Commentaireactu {
  actu:Actu;
  user:User;
  comment:string;
}
