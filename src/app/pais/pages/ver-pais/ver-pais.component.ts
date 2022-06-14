import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/Pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:Country; 
  constructor(private activatedRouted:ActivatedRoute,
              private paisService:PaisService,
  ) { }

  ngOnInit(): void {

    this.activatedRouted.params
        .pipe(
          switchMap(({id})=>this.paisService.getPaisPorAlpha(id)),
          tap(console.log)
        )
        .subscribe(pais=>this.pais = pais[0])



    // this.activatedRouted.params
    //   .subscribe(({id})=>{
    //     console.log(id);

    //       this.paisService.getPaisPorAlpha(id)
    //           .subscribe(pais=>{
    //               console.log(pais)
    //           })

    //   })

  }

}
