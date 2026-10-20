import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'hooks-component',
  standalone: false,
  templateUrl: './hooks.component.html',
})
export class HooksComponent implements OnInit {
  public mensaje: string;
  constructor() {
    console.log('Constructor: primer metodo');
    this.mensaje = 'hoy es lunes...';
  }
  ngOnInit(): void {
    console.log('OnInit: Me ejecuto despues del constructor');
  }
  ngDoCheck(): void {
    console.log("ngDoCheck: Me ejecuto al cambiar el render (componentDidUpdate)");
  }
  cambiarMensaje() : void{
    this.mensaje="Y mañana martes!!!"
  }
}
