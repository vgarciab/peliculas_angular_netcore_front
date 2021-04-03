import { Component, Inject, OnInit, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Al valor que yo quiera';
  peliculasEnCines?:Array<{titulo:string, fechaLanzamiento: Date, precio:number}>;
  // otra manera de declarar la variable >> peliculas: {titulo:string, fechaLanzamiento: Date, precio:number}[] | any;
  peliculasProximosEstrenos?:Array<{titulo:string, fechaLanzamiento: Date, precio:number}>;
  ocultar:boolean = false;
  

  ngOnInit(): void {
    setTimeout(() => {
      // this.peliculas = [];
      this.peliculasEnCines = [ 
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
        },
      ];

      this.peliculasProximosEstrenos = [ 
        {
          titulo: 'Avengers: Endgame',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
        },
        {
          titulo: 'Inception',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
        },
        {
          titulo: 'Rocky',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
        }
      ]


    },500);
  }

  manejarRated(voto:number): void {
   alert(voto);
  }


  asignarTitulo(e:any) {
    this.title = e.target.value;
  }
  
}
