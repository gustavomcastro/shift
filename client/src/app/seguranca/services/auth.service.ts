
// Angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Segurança
import { BaseService } from './base.service';
import { LoginViewModel } from '../models/LoginViewModels';



@Injectable()
export class AuthService extends BaseService {

  constructor(private http: HttpClient) { super();

  }



  login(login: LoginViewModel): Observable<LoginViewModel> {

    // tslint:disable-next-line:prefer-const
    let jsons = JSON.stringify(login);

    // tslint:disable-next-line:prefer-const
    let response = this.http
      .post(`${this.UrlServiceV1}/v1/login`, login, this.httpJsonOptions)
      .map(super.extractData)
      .catch((super.serviceError));
    return response;
  }


  temPermissao(cadastro: string, acao: string) {


    // tslint:disable-next-line:member-ordering
    const user = JSON.parse(localStorage.getItem('shift.user'));

    const userClaims: any [] = user.claims;

    // console.log(userClaims.findIndex(userClaims => userClaims.type === 'Empresa' && userClaims.value === 'Ler'));


    // Se o resultado for igual a "-1" => indica que não foi encontrado a claim informada
    // Se o resultado for maior ou igual a ZERO => indica a posição da claim no array
    // tslint:disable-next-line:no-shadowed-variable
    if (userClaims.findIndex(userClaims => userClaims.type === cadastro && userClaims.value === acao) >= 0) {
      return true;
    }

    return false;

  }
}
