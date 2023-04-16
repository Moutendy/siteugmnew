import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  readonly ApiUrl = environment.APIUrl;
  constructor(private http: HttpClient) { }


  store(image: File){

    const reader = new FileReader();
    reader.readAsArrayBuffer(image);
    reader.onloadend = () => {
      if(reader.result){
          const formData = new FormData();
          formData.append('image', image);

          return this.http.post(this.ApiUrl + 'updateuserimageprofil',formData)
            .subscribe(response => {

            });
      }else{

          return;
      }

    }

  }
  userprofil()
  {
    return this.http.get<User>(this.ApiUrl + 'profiluser');

  }

  usercouverture(image: File)
  {
    const reader = new FileReader();
    reader.readAsArrayBuffer(image);
    reader.onloadend = () => {
      if(reader.result){
          const formData = new FormData();
          formData.append('image', image);

          return this.http.post(this.ApiUrl + 'updateuserimagecouverture',formData)
            .subscribe(response => {

            });
      }else{

          return;
      }
  }
}
}
