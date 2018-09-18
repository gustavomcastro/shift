
// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';



const routes: Routes = [

  // Lazy Loading
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroModule' },

  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent},
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  { path: '**', redirectTo: 'pagina-nao-encontrada' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false}),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
