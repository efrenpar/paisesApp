import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string='';
  hayError:boolean = false;
  paises:Country[]=[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPaisXCapital(this.termino)
      .subscribe(paises=>{
        this.paises = paises;
        },
        (err)=>{
          console.log("Error");
          this.hayError = true;
        }
      )
  }

  sugerencias(termino:string){
      this.hayError = false;
  }

}
