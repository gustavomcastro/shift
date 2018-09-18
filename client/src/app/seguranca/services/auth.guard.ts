import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  public token: string;
  public user;

  canActivate(routeAc: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      this.token = localStorage.getItem('shift.token');
      this.user = JSON.parse(localStorage.getItem('shift.user'));

      if (!this.token) {
          this.router.navigate(['/login']);
      }

      // tslint:disable-next-line:prefer-const
      let claim: any = routeAc.data[0];

      if (claim !== undefined) {


        let claim = routeAc.data[0]['claim'];

          if (claim) {
              if (!this.user.claims) {
                  this.router.navigate(['/nao-autorizado']);
              }

              // tslint:disable-next-line:prefer-const
              let userClaims = this.user.claims.some(x => x.type === claim.nome && x.value === claim.valor);
              if (!userClaims) {

                  this.router.navigate(['/nao-autorizado']);
              }
          }
      }

      return true;
  }
}
