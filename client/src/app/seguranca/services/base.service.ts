// Angular
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { Observable } from 'rxjs/Observable';
// import { Router } from '@angular/router';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';



export abstract class BaseService {


  protected UrlServiceV1 = 'http://localhost:50552';


  protected httpJsonOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  protected httpJsonAuth() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.ObterTokenUsuario()}`
      })
    };
  }



  protected ObterTokenUsuario(): string {
    return localStorage.getItem('shift.token');
  }



  public obterUsuario() {
    return JSON.parse(localStorage.getItem('shift.user'));
  }


  protected serviceError(error: Response | any) {

    let errMsg: string;

    if (error instanceof Response) {

      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(error);

    // return Observable.throw(error);
    return Observable.throwError(error);

  }



  protected extractData(response: any) {
    return response.data || {};
  }

}
