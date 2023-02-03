import { Imageappartement } from "./imageappartement";
import { User } from "./user";

export interface Appartement {
  id:number;
  imageappartement:Imageappartement;
  user:User;
  name:String;
  desc:String;
  image:String;
  prix:String;
  ville:String
  updated_at:Date;
  likeappartemnts_count:number;
  commentaireappartements_count:number
}
