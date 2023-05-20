import { Imageappartement } from "src/app/core/model/imageappartement";
import { User } from "src/app/core/model/user";

export interface Data
{
  imageappartement:Imageappartement;
  user:User;
  name:string;
  desc:string;
  image_appart:String;
  prix:String;
  ville:String;
  file:File;
  updated_at_appart:Date;
  likeappartemnts_count:number;
  commentaireappartements_count:number
  body:String;
  image_actu:String;
  updated_at_actu:Date;
  likes_count:number;
  comments_count:number
}
