// Angular
import { Component, OnInit, ViewChild } from '@angular/core';


// Primeng
import { LazyLoadEvent, ConfirmationService, MessageService } from 'primeng/api';


// Segurança
import { AuthService } from '../../../seguranca/services/auth.service';

// Empresa
import { EmpresaService } from '../services/empresa.service';
import { EmpresaViewModel } from '../models/empresa.viewmodel';
import { EmpresaFiltro } from '../models/empresa.filtro';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from '../../../seguranca/services/error-handler-alga.services';

@Component({
  selector: 'app-empresa-pesquisar',
  templateUrl: './empresa-pesquisar.component.html',
  styleUrls: ['./empresa-pesquisar.component.css']
})
export class EmpresaPesquisarComponent implements OnInit {


  errors: any[] = [];

  public empresas: EmpresaViewModel[];

  public empresasObservable: EmpresaViewModel[];

  filtro = new EmpresaFiltro();

  public errorMessage: string;

  totalRegistros = 0;

  totalRegistrosObservable = 0;

  @ViewChild('tabela') grid;

  constructor(
    private authService: AuthService,
    private errorHandlerService:  ErrorHandlerService,
    private empresaService: EmpresaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de Empresas');

    // this.listarEmpresas();

    // this.listarEmpresasPaginadas();

    // console.log('no OnInit');
  }



  listarEmpresas(pagina = 1) {

    this.filtro.pagina = pagina;

    this.empresaService.listarTodas(this.filtro)
      .then(resultado => {

        this.totalRegistros = resultado.total;

        this.empresas = resultado.registros;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }



  listarEmpresasPaginadas(pagina = 1) {

    this.filtro.pagina = pagina;

  this.empresaService.listarTodasObservable(this.filtro)
    .subscribe(empresas => {
        this.empresasObservable = empresas;

        console.log(this.empresasObservable);

        this.totalRegistrosObservable = empresas['totalRegistros'];

        console.log(this.totalRegistrosObservable);

      },
    error => this.errorMessage);
}



  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = (event.first / event.rows) + 1;


    console.log('Ao Mudar pagina xxxx');

    // this.listarEmpresas(pagina);

    this.listarEmpresasPaginadas(pagina);
  }



  confirmarExclusao(empresa: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(empresa);
      }
    });
  }



  excluir(empresa: any) {
    this.empresaService.excluirEmpresa(empresa.codEmpresa)
      .subscribe(

        // tslint:disable-next-line:no-shadowed-variable
        empresa => { this.onDeleteComplete(empresa); },

        fail => { this.onError(fail); }
      );

  }



  onDeleteComplete(empresa: any) {
    this.mensagemSucesso('Empresa excluída com sucesso');

    this.listarEmpresas();
  }


  onError(fail) {
    this.mensagemErro('Opa! Erro no processamento remoto');

    this.errors = fail.error.errors;
  }

  mensagemSucesso(mensagem) {
    this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: mensagem });
  }



  mensagemErro(mensagem) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: mensagem });
  }

}
