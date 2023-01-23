import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaireactu } from '../model/commentaireactu';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaireactuService {
  readonly ApiUrl = environment.APIUrl;

  readonly httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
    )
    }
  constructor(private http: HttpClient) { }

  index(id:number):Observable<Commentaireactu> {
    return this.http.get<Commentaireactu>(this.ApiUrl + 'posts/comments/'+id, this.httpOptions);
  }
  store(comment:string,id:any){

    let body = new URLSearchParams();
    body.set('comment', comment);
    return this.http.post(this.ApiUrl + 'posts/comments/'+id,body,this.httpOptions)
  }
  delete(id:any):Observable<any>{
   return this.http.delete<any>(this.ApiUrl + 'deleteadmincomments/'+id, this.httpOptions);
  }

}
