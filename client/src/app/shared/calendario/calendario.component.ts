import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html'
})
export class CalendarioComponent implements OnInit {

  date: any;
  pt_BR: any;

  constructor() { }

  ngOnInit() {
    this.traduzirCalendario();
  }


  traduzirCalendario() {
    this.pt_BR = {

      firstDayOfWeek: 0,

      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],

      dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],

      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],

      // tslint:disable-next-line:max-line-length
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],

      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    };
  }

}
