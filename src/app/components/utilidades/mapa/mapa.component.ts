import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { Coordenada, CoordenadaConMensaje } from './coordenada';



@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit {

  constructor() { }


  @Input()  
  coordenadasIniciales: CoordenadaConMensaje[] = [];

  @Input()
  soloLectura: boolean = false;

  @Output() 
  coordenadaSeleccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(39.45419664659368, -31.12838745117188)
  };


  capas: Marker<any>[] = [];

  ngOnInit(): void {
    // Mapear las coordenadas
    this.capas = this.coordenadasIniciales.map((valor) => {
      let marcador = marker([valor.latitud, valor.longitud]);
      if (valor.mensaje) {
        marcador.bindPopup(valor.mensaje, {autoClose: false, autoPan: false});
      }
      return marcador;
    });
  }


  manejarClick(event: LeafletMouseEvent)  {
    if  (!this.soloLectura) {
      const latitud = event.latlng.lat;
      const longitud = event.latlng.lng;
      console.log({latitud, longitud})

      this.capas = [];
      this.capas.push(marker([latitud, longitud]));
      // El componente Padre (éste) va a recibir las coordenadas (desde el html)
      this.coordenadaSeleccionada.emit({ 
        latitud: latitud, 
        longitud: longitud 
      });
    }
  }

}
 

