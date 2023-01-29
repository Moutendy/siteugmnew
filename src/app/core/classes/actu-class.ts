import { Actu } from "../model/actu";
import { User } from "../model/user";

export class ActuCLass implements Actu{
  id!: number;
  user!: User;
  body!: String;
  image!: String;
  updated_at!: Date;
  likes_count!: number;
  comments_count!: number;

  constructor(image: string, body: string) {
    this.image = image;
    this.body = body;
  }
}
