import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class UgmInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.auth.isAuthenticated())
    {
      const token = this.auth.getToken();

      if(token)
      {
        request=this.addAccessTokenToHeader(request,token);
      }
    }
    return next.handle(request).pipe(
      tap({
          error: (error: HttpErrorResponse) => {
              if (error.status == 401 || error.status == 403) {

              }

              // return this.handleRefreshToken(request, next);
          },
      })
  );
  }


  addAccessTokenToHeader(request: HttpRequest<unknown>, token: string) {
    return request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
}
}
