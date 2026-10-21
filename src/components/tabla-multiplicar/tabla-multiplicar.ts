import { Component, ViewChild, ElementRef } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-tabla-multiplicar',
  standalone: false,
  styleUrl: './tabla-multiplicar.css',
  templateUrl: './tabla-multiplicar.html',
})
export class TablaMultiplicar {
  public lista!: Array<Number>;
  public numeroInicial: number;
  @ViewChild('numero') numero!: ElementRef;
  enviar(): void {
    this.numeroInicial = parseInt(this.numero.nativeElement.value);
    for (let i = 1; i <= 10; i++) {
      this.lista.push(this.numeroInicial * i)
    }
    console.log(this.lista);
  }
  constructor() {
    this.numeroInicial = 0;
    this.lista = [];
  }
}
