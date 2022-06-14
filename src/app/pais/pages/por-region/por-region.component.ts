import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
      button {
          margin-right:5px;
      }
  `]
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  regionActiva:string = '';
  paises:Country[]=[];


  constructor(private paisesService:PaisService) { }

  getClaseCss(region:string):string{
      return (region===this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary';
  }

  ngOnInit(): void {
  }

  activarRegion(region:string){
      this.regionActiva = region
      this.paises=[];
      this.paisesService.buscarPaisXRegion(region)
      .subscribe(res=>{
        this.paises = res;
      })
  }

}
