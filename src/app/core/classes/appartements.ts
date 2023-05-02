import { User } from "../model/user";

export class AppartementClasse {
  id!:number;
  user!:User;
  name!:string;
  desc!:string;
  image!:String;
  prix!:string;
  ville!:string;
  file!:File;
  updated_at!:Date;


}
