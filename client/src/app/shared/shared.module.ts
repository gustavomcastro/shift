// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Primeng
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';


// Shared
import { CalendarioComponent } from './calendario/calendario.component';
import { MensagemComponent } from './mensagem/mensagem.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    // Primeng
    CalendarModule,
    MessageModule
  ],
  declarations: [CalendarioComponent, MensagemComponent],
  exports: [
    CalendarioComponent,
    MensagemComponent
  ]
})
export class SharedModule { }
