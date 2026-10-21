import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-binding',
  standalone: false,
  styleUrl: './form.binding.component.css',
  templateUrl: './form.binding.component.html',
})
export class FormBindingComponent {
  public user: any;
  public mensaje: string;
  getDatos(): void {
    this.mensaje = 'Enviado';
  }
  constructor() {
    this.mensaje = '';
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };
  }
}
