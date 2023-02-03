import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Appartement } from '../model/appartement';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {
  readonly ApiUrl = environment.APIUrl;

  readonly httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
    )
    }

    readonly httpOptionsiamge = {
      headers: new HttpHeaders().set(
        'Content-Type', 'multipart/form-data'
      )
      }
  constructor(private http: HttpClient) { }

  index():Observable<Appartement> {
    return this.http.get<Appartement>(this.ApiUrl + 'appartemnt', this.httpOptions);
  }
  store(image: File,body:any){

    const reader = new FileReader();
    reader.readAsArrayBuffer(image);
    reader.onloadend = () => {
      if(reader.result){
          const formData = new FormData();
          formData.append('image', image);
          formData.append('body',body);
          return this.http.post(this.ApiUrl + 'storeadmin',formData)
            .subscribe(response => {

            });
      }else{

          return;
      }

    }

  }

  show(id:number):Observable<Appartement> {
    return this.http.get<Appartement>(this.ApiUrl + 'appartemnt/'+id, this.httpOptions)
  }

  update(act:Appartement,id:number):Observable<Appartement> {
    return this.http.post<Appartement>(this.ApiUrl + 'appartemnt/'+id,act, this.httpOptions)
  }

  updateuser(id:number):Observable<any> {
    return this.http.post(this.ApiUrl + 'updateuser', this.httpOptions)
  }

  detailsuser(id:number):Observable<any> {
    return this.http.post(this.ApiUrl + 'detailsuser', this.httpOptions)
  }

  destroy(id:number):Observable<any> {
    return this.http.delete(this.ApiUrl + 'destroyadmin/'+id, this.httpOptions)
  }

  listeuser():Observable<any>{
return this.http.get<any>(this.ApiUrl+'users' ,this.httpOptions);
  }



  likeOrUnlike(id:number):Observable<any> {
    return this.http.get(this.ApiUrl + 'appartemnt/'+id+'/likes', this.httpOptions)
  }
}
