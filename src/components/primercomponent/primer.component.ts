import { Component } from '@angular/core';

//Siempre debemos declarar el contenido del component
@Component({
  //Nombre del component en las vistas
  selector: 'primer-component',
  standalone: false,
  //No necesitamos ni codigo HTML ni css de forma obligatoria
  //Para dibujar los objetos en la plantilla usamos la {{}}
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css'],
})
//Cada component debe tener siempre una clase asociada en su TS
//El nombre de la clase tiene que iniciar en mayusculas y debemos incluir este nombre dentro del module para utilizarlo
export class PrimerComponent {
  //Aqui es donde se declaran las varibles del component junto a su tipo de dato
  public nombre: string;
  public year: number;
  //En Angular al igual que en React tenemos un constructor
  //es donde debemos inicializar los objetos de la clase
  constructor() {
    //Para acceder a los objetos de la clase, se utiliza la palabra clave THIS
    this.nombre = 'David';
    this.year = 2026;
  }
  //Los metodos de ciclo de vida de un component
  // ngOnInit -> Es el primer metodo que se ejecuta despues del constructor
  // ngDoCheck -> Este metodo se ejecuta cuando el render es modificado
  // ngOnDestroy -> Se ejecuta cuando el parent elimina el component de su dibujo

  //Tipos de metodos
  //void -> Metodos de accion sin devolucion
  // nombreMetodoAccion() :void{
  //   //ACCIONES
  // }
  //return -> metodos que devuelven datos al ser llamados
  // nombreMetodoreturn() :tipodedato{
  //   //acciones del metodo
  //   return datos
  // }
}
