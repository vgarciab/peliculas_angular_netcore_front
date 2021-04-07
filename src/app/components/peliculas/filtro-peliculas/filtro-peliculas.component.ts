import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  form: FormGroup | any;
  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Acción'},
    {id: 3, nombre: 'Comedia'},
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo:'',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false,
    })
  }

  limpiar() {
    
  }

}