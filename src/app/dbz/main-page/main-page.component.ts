import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes:Personaje[]=[
    {
      nombre:'Goku',
      power:15000
    },
    {
      nombre:'Vegeta',
      power:7500
    }

  ];

  nuevo:Personaje={
    nombre:'',
    power:0
  }

  cambiarNombre(event: any){
    console.log(event.target.value)
  }

  agregar(){

    if(this.nuevo.nombre.trim().length===0){
      return
    }else{
      this.personajes.push(this.nuevo)
      this.nuevo={
        nombre:'',
        power:0
      }
    }
    console.log(this.nuevo);
  }
}
