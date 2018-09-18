// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


// Primeng
import { MessageService } from 'primeng/api';


// Shared
import { SituacaoService } from '../../../shared/services/situacao.service';


// Empresa
import { EmpresaViewModel } from '../models/empresa.viewmodel';

import { EmpresaService } from '../services/empresa.service';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'app-empresa-editar',
  templateUrl: './empresa-editar.component.html',
  styleUrls: ['./empresa-editar.component.css']
})
export class EmpresaEditarComponent implements OnInit {


  errors: any[] = [];
  formulario: FormGroup;
  empresaViewModel: EmpresaViewModel;
  situacoes = [];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private situacaoService: SituacaoService,
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {

    this.configurarFormulario();

    const codEmpresa = this.route.snapshot.params['id'];

    if (codEmpresa) {
      this.carregarEmpresa(codEmpresa);
    }

    this.carregarSituacoes();

  }


  configurarFormulario() {

    this.formulario = this.formBuilder.group({

      codEmpresa: [null, [Validators.required,  CustomValidators.rangeLength([4, 4])]],

      cnpj: [null, [Validators.required]],

      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],

      idSituacao: [null, Validators.required]
    });

  }


  salvar() {

    if (this.formulario.dirty && this.formulario.valid) {

      // tslint:disable-next-line:prefer-const
      let empresa = Object.assign({}, this.empresaViewModel, this.formulario.value);


      this.empresaService.editarEmpresa(empresa)
        .subscribe(

          result => { this.onSaveComplete(result); },

          fail => { this.onError(fail); });
    }
  }


  carregarSituacoes() {
    this.situacaoService.listarTodas()
      .subscribe(
        situacoes =>
          this.situacoes = situacoes.map(o => ({ label: o.descSituacao, value: o.idSituacao })),
        error => this.errors);
  }


  carregarEmpresa(codigo: string) {

    this.empresaService.obterEmpresa(codigo)
      .subscribe(
        empresa => this.preencherFormulario(empresa),
        response => {
          if (response.status === 404) {
            this.router.navigate(['/pagina-nao-encontrada']);
          }
        }
      );
  }


  preencherFormulario(empresa: EmpresaViewModel): void {

    this.empresaViewModel = empresa;

    this.formulario.patchValue({

      codEmpresa: this.empresaViewModel.codEmpresa,

      nome: this.empresaViewModel.nome,

      cnpj: this.empresaViewModel.cnpj,

      idSituacao: this.empresaViewModel.idSituacao

    });
  }



  onSaveComplete(response: any): void {
    this.formulario.reset();
    this.errors = [];

    this.mensagemSucesso('Empresa Atualizada com Sucesso!');


    this.router.navigate(['/cadastro/empresas']);
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
