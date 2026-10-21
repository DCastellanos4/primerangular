import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar',
  standalone: false,
  styleUrl: './tabla-multiplicar.css',
  templateUrl: './tabla-multiplicar.html',
})
export class TablaMultiplicar {
  public lista!: Array<Number>;
  public numeroInicial!: number;
  public numeroBinding!: number;
  @ViewChild('numero') numero!: ElementRef;

  enviar(): void {
    this.lista = []
    this.numeroInicial = parseInt(this.numero.nativeElement.value);
    for (let i = 1; i <= 10; i++) {
      this.lista.push(this.numeroInicial * i)
    }
    console.log(this.lista);
  }
  enviarBinding(): void {
    this.lista = []
    this.numeroInicial = this.numeroBinding
    for (let i = 1; i <= 10; i++) {
      this.lista.push(this.numeroInicial * i)
    }
    console.log(this.lista);
  }
}
