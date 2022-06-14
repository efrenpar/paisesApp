import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
      li{
        cursor:pointer
      }
  `]
})
export class PorPaisComponent implements OnInit {

  termino:string='';
  hayError:boolean = false;
  paises:Country[]=[];
  paisesSugeridos:Country[]=[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
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
      this.termino = termino;
      this.paisService.buscarPais(termino)
        .subscribe(paises=>{
            this.paisesSugeridos = paises.splice(0,5),
            (err:any)=>this.paisesSugeridos=[];
        })
  }

}
