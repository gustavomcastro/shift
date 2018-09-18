import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).catch(err => {

        if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
        if (err.status === 403) {
          this.router.navigate(['/nao-autorizado']);
        }
        if (err.status === 404) {
          this.router.navigate(['/pagina-nao-encontrada']);
        }
      }

      return Observable.throw(err);
    });
  }

}
