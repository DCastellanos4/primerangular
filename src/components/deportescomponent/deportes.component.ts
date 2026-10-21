import { Component } from '@angular/core';
@Component({
  selector: 'app-deportes',
  standalone: false,
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css'],
})
export class DeportesComponent {
  public sports: Array<string>;
  public numeros: Array<number>;
  constructor() {
    this.sports = ['Canicas', 'Petanca', 'Curling', 'Futbol'];
    this.numeros = [4, 2, 1, 2, 4, 5, 6, 7, 81];
  }
}
