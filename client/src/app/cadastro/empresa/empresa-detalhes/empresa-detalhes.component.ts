// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Empresa
import { EmpresaViewModel } from '../models/empresa.viewmodel';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-empresa-detalhes',
  templateUrl: './empresa-detalhes.component.html',
  styleUrls: ['./empresa-detalhes.component.css']
})
export class EmpresaDetalhesComponent implements OnInit {

  public empresaViewModel: EmpresaViewModel;

  constructor(
                private route: ActivatedRoute,
                private router: Router,
                private empresaService: EmpresaService) { }

  ngOnInit() {

    const codEmpresa = this.route.snapshot.params['id'];

    console.log('analisando empresa');

    console.log(codEmpresa);

    if (codEmpresa) {
      this.carregarEmpresa(codEmpresa);
    }

    console.log(this.empresaViewModel);
  }


  carregarEmpresa(codigo: string) {

    this.empresaService.obterEmpresa(codigo)
      .subscribe(
        empresa => this.empresaViewModel = empresa,
        response => {
          if (response.status === 404) {
            this.router.navigate(['/pagina-nao-encontrada']);
          }
        }
      );
  }

}
