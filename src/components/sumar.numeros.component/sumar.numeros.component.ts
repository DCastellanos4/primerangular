import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sumar-numeros',
  standalone: false,
  styleUrl: './sumar.numeros.component.css',
  templateUrl: './sumar.numeros.component.html',
})
export class SumarNumerosComponent {
  @ViewChild('cajanumero1') cajaNumero1!: ElementRef;
  @ViewChild('cajanumero2') cajaNumero2!: ElementRef;
  public suma: number;
  //Para inicializar los ElementRef, debemos indicar new ElementRef(valor)
  sumar(): void {
    let n1 = parseInt(this.cajaNumero1.nativeElement.value);
    let n2 = parseInt(this.cajaNumero2.nativeElement.value);
    this.suma = n1 + n2;
  }
  constructor() {
    this.suma = 0;
  }
}
