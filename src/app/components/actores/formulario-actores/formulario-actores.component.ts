import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

  // se configura el FormGroup utilizando el FormBuilder
  form: FormGroup | any; 


  @Input()
  modelo: actorDTO | any;
  @Output()
  submitFormulario: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  @Input()
  errores: string[] = [];

  imagenCambiada = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { // el valor por defecto del campo
        validators: [Validators.required],
      }],
      fechaNacimiento: '',
      foto: '',
      biografia: '',
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }

  }


  archivoSeleccionado(file:any) {
    this.imagenCambiada = true;
    this.form.get('foto').setValue(file)

  }


  cambioMarkdown(texto: string) {
    this.form.get('biografia').setValue(texto);
  }


  guardarCambios() { // este método se llama onSubmit() en el código fuente de Felipe Gavilán
    if (!this.imagenCambiada) {
      this.form.patchValue({'foto': null})
    }
    this.submitFormulario.emit(this.form.value); // aquí se accede a toda la información  contenida en el formulario.
  }


}
