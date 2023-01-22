import { User } from "./user";

export interface Actu {
  id:number;
  user:User;
  body:String;
  image:String;
  updated_at:Date;
  likes_count:number;
  comments_count:number
}
