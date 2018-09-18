
// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Seguranca
import { BaseService } from '../../seguranca/services/base.service';
import { Observable } from 'rxjs';
import { SituacaoViewModel } from '../models/situacao.viewmodel';


@Injectable()
export class SituacaoService extends BaseService {


  url: string;

  constructor(public http: HttpClient) {
    super();

    this.url = `${this.UrlServiceV1}/v1/situacao`;

  }


  listarTodas(): Observable<SituacaoViewModel[]> {

    return this.http
            .get<SituacaoViewModel[]>(this.url, super.httpJsonAuth())
            .catch(super.serviceError);

  }


}
