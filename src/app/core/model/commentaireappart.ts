import { Appartement } from "./appartement";
import { User } from "./user";

export interface Commentaireappart {
  id:number
  appartement:Appartement;
  user:User;
  comment:string;
}
