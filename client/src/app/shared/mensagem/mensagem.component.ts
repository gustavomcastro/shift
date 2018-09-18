import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {

  @Input() error: string;

  @Input() control: FormControl;

  @Input() text: string;

  constructor() { }


  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
