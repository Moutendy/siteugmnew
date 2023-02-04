import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commentaireappart } from '../model/commentaireappart';

@Injectable({
  providedIn: 'root'
})
export class CommentaireappartService {

  readonly ApiUrl = environment.APIUrl;

  readonly httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
    )
    }
  constructor(private http: HttpClient) { }

  index(id:number):Observable<Commentaireappart> {
    return this.http.get<Commentaireappart>(this.ApiUrl + 'appartemnt/comments/'+id, this.httpOptions);
  }
  store(comment:string,id:any){

    let body = new URLSearchParams();
    body.set('comment', comment);
    return this.http.post(this.ApiUrl + 'appartemnt/comments/'+id,body,this.httpOptions)
  }
  delete(id:any):Observable<any>{
   return this.http.delete<any>(this.ApiUrl + 'appartemnt/deleteadmincomments/'+id, this.httpOptions);
  }
}
