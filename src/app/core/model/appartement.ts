import { Imageappartement } from "./imageappartement";
import { User } from "./user";

export interface Appartement {
  id:number;
  imageappartement:Imageappartement;
  user:User;
  name:string;
  desc:string;
  image:String;
  prix:String;
  ville:String;
  file:File;
  updated_at:Date;
  likeappartemnts_count:number;
  commentaireappartements_count:number
}
