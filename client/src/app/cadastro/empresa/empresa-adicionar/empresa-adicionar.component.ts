// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // REATIVO: FormGroup, FormBuilder, Validators

import { CustomValidators } from 'ng2-validation';

// Primeng
import { MessageService } from 'primeng/api';
import { EmpresaViewModel } from '../models/empresa.viewmodel';

// Empresa
import { EmpresaService } from './../services/empresa.service';

@Component({
  selector: 'app-empresa-adicionar',
  templateUrl: './empresa-adicionar.component.html',
  styleUrls: ['./empresa-adicionar.component.css']
})
export class EmpresaAdicionarComponent implements OnInit {

  public errors: any[] = [];
  formulario: FormGroup;
  empresaViewModel: EmpresaViewModel;

  constructor(
                private router:         Router,
                private formBuilder:    FormBuilder,
                private messageService: MessageService,
                private empresaService: EmpresaService) { }

  ngOnInit() {

    this.configurarFormulario();
  }



  configurarFormulario() {

    this.formulario = this.formBuilder.group({

      codEmpresa:   ['', [Validators.required, CustomValidators.rangeLength([4, 4])]],

      nome:         ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],

      cnpj:         ['', Validators.required]
    });
  }


  salvar() {

    if (this.formulario.dirty && this.formulario.valid) {

      // tslint:disable-next-line:prefer-const
      let empresa = Object.assign({}, this.empresaViewModel, this.formulario.value);


      this.empresaService.adicionarEmpresa(empresa)
        .subscribe(

          result  => { this.onSaveComplete(result); },

          fail    => { this.onError(fail); });
    }
  }



  onSaveComplete(response: any): void {

    this.formulario.reset();
    this.errors = [];


    this.mensagemSucesso('Empresa Adicionada com Sucesso!');


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
