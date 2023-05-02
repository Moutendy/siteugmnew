import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Appartement } from '../model/appartement';
import { AppartementClasse } from '../classes/appartements';

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
    return this.http.get<Appartement>(this.ApiUrl + 'appartements', this.httpOptions);
  }
  indexPage(currentPage:number,perPage:number):Observable<Appartement> {
    const url = `?page=${currentPage}&per_page=${perPage}`;
    return this.http.get<Appartement>(this.ApiUrl + 'appartementspage'+url, this.httpOptions);
  }


  storeappartement(appart:AppartementClasse){

    const reader = new FileReader();
    reader.readAsArrayBuffer(appart.file);
    reader.onloadend = () => {
      if(reader.result){
          const formData = new FormData();
          formData.append('image', appart.file);
          formData.append('name',appart.name);
          formData.append('desc',appart.desc);
          formData.append('ville',appart.ville);
          formData.append('prix',appart.prix);
          return this.http.post(this.ApiUrl + 'appartementsadmin',formData)
            .subscribe(response => {

            });
      }else{

          return;
      }

    }

  }

  show(id:number):Observable<Appartement> {
    return this.http.get<Appartement>(this.ApiUrl + 'appartements/'+id, this.httpOptions)
  }

  update(act:Appartement,id:number):Observable<Appartement> {
    return this.http.post<Appartement>(this.ApiUrl + 'appartements/'+id,act, this.httpOptions)
  }

  updateuser(id:number):Observable<any> {
    return this.http.post(this.ApiUrl + 'updateuser', this.httpOptions)
  }

  detailsuser(id:number):Observable<any> {
    return this.http.post(this.ApiUrl + 'detailsuser', this.httpOptions)
  }

  destroy(id:number):Observable<any> {
    return this.http.delete(this.ApiUrl + 'appartementsadmin/'+id, this.httpOptions)
  }




  likeOrUnlike(id:number):Observable<any> {
    return this.http.get(this.ApiUrl + 'appartements/'+id+'/likes', this.httpOptions)
  }
}
