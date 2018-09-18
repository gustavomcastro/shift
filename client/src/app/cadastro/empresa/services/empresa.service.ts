import { RequestOptions } from '@angular/http';

// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

// Seguranca
import { BaseService } from '../../../seguranca/services/base.service';

// Empresa
import { EmpresaViewModel } from '../models/empresa.viewmodel';
import { EmpresaFiltro } from '../models/empresa.filtro';






@Injectable()
export class EmpresaService extends BaseService {

  url: string;

  urlPaginada: string;

  constructor(public http: HttpClient) {
    super();

    this.url = `${this.UrlServiceV1}/v1/empresas`;

  }

  public obterUsuario() {
    return JSON.parse(localStorage.getItem('shift.token'));
  }


  listarTodas(filtro: EmpresaFiltro): Promise<any> {


    console.log('estou no servico');


    let params = new HttpParams({
      fromObject: {

        pagina: filtro.pagina.toString(),

        qtdeItensPorPagina: filtro.qtdeItensPorPagina.toString()
      }
    });


    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }



    return this.http.get<any>(`${this.url}-paginadas`, {params: params, headers: super.httpJsonAuth().headers } )
      .toPromise()
      .then(response => {
        const registros = response.dados;

        const resultado = {

          registros,

          total: response.totalRegistros
        };

        return resultado;
      });
  }


  listarTodasObservable(filtro: EmpresaFiltro): Observable<EmpresaViewModel[]> {

    let params = new HttpParams({
      fromObject: {

        pagina: filtro.pagina.toString(),

        qtdeItensPorPagina: filtro.qtdeItensPorPagina.toString()
      }
    });


    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }


    return this.http.get<EmpresaViewModel[]>(`${this.url}-paginadas`, { params, headers: super.httpJsonAuth().headers })
      .catch(super.serviceError);
  }



  obterEmpresa(id: string): Observable<EmpresaViewModel> {

    return this.http
      .get<EmpresaViewModel>(this.url + '/' + id, super.httpJsonAuth())
      .catch(super.serviceError);

  }



  adicionarEmpresa(empresa: EmpresaViewModel): Observable<EmpresaViewModel> {

    // tslint:disable-next-line:prefer-const
    let response = this.http
                        .post(this.url, empresa, super.httpJsonAuth())
                        .map(super.extractData)
                        .catch((super.serviceError));

                        return response;
  }



  editarEmpresa(empresa: EmpresaViewModel): Observable<EmpresaViewModel> {

    // tslint:disable-next-line:prefer-const
    let response = this.http
                        .put(this.url, empresa, super.httpJsonAuth())
                        .map(super.extractData)
                        .catch((super.serviceError));

                        return response;
  }


  excluirEmpresa(id: string): Observable<EmpresaViewModel> {

    // tslint:disable-next-line:prefer-const
    let response = this.http
                        .delete(this.url + '/' + id, super.httpJsonAuth())
                        .map(super.extractData)
                        .catch((super.serviceError));

                        return response;
  }

}
