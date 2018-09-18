// Angular
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Necessario para configurar o idioma da aplicação.
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// Primeng
import { ScrollPanelModule } from 'primeng/primeng';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';

// Core
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProfileComponent } from './profile/profile.component';


// Módulo Seguranca
import { SegurancaModule } from '../seguranca/seguranca.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from '../seguranca/services/auth.service';
import { AuthGuard } from '../seguranca/services/auth.guard';
import { ErrorInterceptor } from '../seguranca/services/error-handler.service';
import { ErrorHandlerService } from '../seguranca/services/error-handler-alga.services';

// Módulo Cadastro
import { EmpresaService } from '../cadastro/empresa/services/empresa.service';


// Módulo Shared
import { SituacaoService } from '../shared/services/situacao.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './nao-autorizado/nao-autorizado.component';


@NgModule({
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,

     // Primeng
     ScrollPanelModule,
     BreadcrumbModule,
     ButtonModule,
     ConfirmDialogModule,
     ToastModule,

     // Modulos Internos
     SegurancaModule

  ],
  declarations: [
    FooterComponent,
    TopbarComponent,
    ProfileComponent,
    DashboardComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  exports: [
    FooterComponent,
    TopbarComponent,
    ProfileComponent,
    ScrollPanelModule,
    DashboardComponent,
    ConfirmDialogModule,
    ToastModule],

  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },

    Title,

    ConfirmationService,

    MessageService,

    AuthService,

    ErrorHandlerService,

    AuthGuard,


    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },

    SituacaoService,

    EmpresaService,
  ]
})
export class CoreModule { }
