import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';
import { AuthService } from '../../seguranca/services/auth.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('menu', [
      state('hidden', style({
        height: '0px'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class ProfileComponent implements OnInit {

  public token;
  public user;
  public nomeUsuario: string;
  active: boolean;

  constructor(public auth: AuthService, private router: Router,  private confirmationService:  ConfirmationService) {}


  ngOnInit() {
    this.usuarioLogado();
  }



  onClick(event) {
    this.active = !this.active;
    event.preventDefault();
  }


  usuarioLogado(): boolean {

    this.token = localStorage.getItem('shift.token');
    this.user = JSON.parse(localStorage.getItem('shift.user'));

    if (this.user) {
      this.nomeUsuario = this.user.nome;
    }


    return this.token !== null;
  }



  confirmarSaida() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja sair?',
      accept: () => {
        this.logout();
      }
    });
  }


  logout() {

    localStorage.removeItem('shift.token');
    localStorage.removeItem('shift.user');

    this.router.navigate(['/login']);
  }

}
