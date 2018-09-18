// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Primeng
import { MessageService } from 'primeng/api';

// Seguranca
import { AuthService } from '../services/auth.service';
import { LoginViewModel } from '../models/LoginViewModels';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public errors:  any[] = [];
  formulario:     FormGroup;
  loginViewModel: LoginViewModel;

  constructor(
                private authService:    AuthService,
                private router:         Router,
                private formBuilder:    FormBuilder,
                private messageService: MessageService) { }

  ngOnInit() {
    this.configurarFormulario();
  }




  configurarFormulario() {

    this.formulario = this.formBuilder.group({

      username:  ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]] ,

      password:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }


  login() {
    if (this.formulario.dirty && this.formulario.valid) {


      // tslint:disable-next-line:prefer-const
      let usuario = Object.assign({}, this.loginViewModel, this.formulario.value);

      this.authService.login(usuario)
        .subscribe(

            result  => { this.onSaveComplete(result); },

            fail    => { this.onError(fail); }
        );
    }
  }


  onSaveComplete(response: any): void {

    this.formulario.reset();
    this.errors = [];


    localStorage.setItem('shift.token', response.access_token);
    localStorage.setItem('shift.user', JSON.stringify(response.user));


    this.mensagemSucesso('Você está logado');

    this.router.navigate(['/']);
  }


  onError(fail) {
    this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Opa :( Ocorreu um erro! Usuário ou Senha incorretos' });

    this.errors = fail.error.errors;
  }


  mensagemSucesso(mensagem) {
    this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: mensagem });
  }

}
