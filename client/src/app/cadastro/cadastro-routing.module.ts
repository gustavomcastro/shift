// Angular
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


// Empresa
import { EmpresaPesquisarComponent } from './empresa/empresa-pesquisar/empresa-pesquisar.component';
import { EmpresaAdicionarComponent } from './empresa/empresa-adicionar/empresa-adicionar.component';
import { EmpresaEditarComponent } from './empresa/empresa-editar/empresa-editar.component';
import { EmpresaDetalhesComponent } from './empresa/empresa-detalhes/empresa-detalhes.component';

// Seguranca
import { AuthGuard } from '../seguranca/services/auth.guard';




const routes: Routes = [

    // Empresa
    {
      path: 'empresas', component: EmpresaPesquisarComponent
    },
    {
      path: 'nova-empresa', component: EmpresaAdicionarComponent, canActivate: [AuthGuard],
      data: [{ claim: { nome: 'Empresa', valor: 'Gravar' } }]
    },
    {
      path: 'editar-empresa/:id', component: EmpresaEditarComponent, canActivate: [AuthGuard],
      data: [{ claim: { nome: 'Empresa', valor: 'Gravar' } }]
    },
    {
      path: 'detalhes-empresa/:id', component: EmpresaDetalhesComponent
    }

];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],

})
export class CadastroRoutingModule { }
