import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Actu } from '../model/actu';
@Injectable({
  providedIn: 'root'
})
export class ActualService {
  readonly ApiUrl = environment.APIUrl;

  readonly httpOptions = {
    headers: new HttpHeaders().set(
      'Content-Type', 'application/x-www-form-urlencoded'
    )
    }
  constructor(private http: HttpClient) { }
  index():Observable<Actu> {
    return this.http.get<Actu>(this.ApiUrl + 'posts', this.httpOptions);
  }
  store(act:Actu):Observable<any> {
    return this.http.post<Actu>(this.ApiUrl + 'posts',act, this.httpOptions)
  }

  show(id:number):Observable<Actu> {
    return this.http.get<Actu>(this.ApiUrl + 'posts/'+id, this.httpOptions)
  }

  update(act:Actu,id:number):Observable<Actu> {
    return this.http.post<Actu>(this.ApiUrl + 'posts/'+id,act, this.httpOptions)
  }

  updateuser(id:number):Observable<any> {
    return this.http.post(this.ApiUrl + 'updateuser', this.httpOptions)
  }

  detailsuser(id:number):Observable<any> {
    return this.http.post(this.ApiUrl + 'detailsuser', this.httpOptions)
  }

  destroy(id:number):Observable<any> {
    return this.http.delete(this.ApiUrl + 'posts/'+id, this.httpOptions)
  }


  likeOrUnlike(id:number):Observable<any> {
    return this.http.get(this.ApiUrl + 'posts/'+id+'/likes', this.httpOptions)
  }
}
