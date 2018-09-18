// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Primeng
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import {CardModule} from 'primeng/card';

// Seguranca
import { LoginComponent } from './login/login.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';

// Shared
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Primeng
    InputTextModule,
    ButtonModule,
    CardModule,

    // Modulos
    SharedModule,
    SegurancaRoutingModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class SegurancaModule { }
