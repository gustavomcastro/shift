// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Primeng
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';

// Cadastro => Rotas
import { CadastroRoutingModule } from './cadastro-routing.module';

// Cadastro => Empresas
import { CadastroComponent } from './cadastro.component';
import { EmpresaAdicionarComponent } from './empresa/empresa-adicionar/empresa-adicionar.component';
import { EmpresaPesquisarComponent } from './empresa/empresa-pesquisar/empresa-pesquisar.component';
import { EmpresaEditarComponent } from './empresa/empresa-editar/empresa-editar.component';
import { EmpresaDetalhesComponent } from './empresa/empresa-detalhes/empresa-detalhes.component';

// Shared
import { SharedModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';


@NgModule({
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


    // Primeng
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    PaginatorModule,
    InputTextareaModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,


    // Modulos Internos
    SharedModule,
    CadastroRoutingModule,
  ],
  declarations: [
    CadastroComponent,
    EmpresaPesquisarComponent,
    EmpresaAdicionarComponent,
    EmpresaEditarComponent,
    EmpresaDetalhesComponent],
})
export class CadastroModule { }
