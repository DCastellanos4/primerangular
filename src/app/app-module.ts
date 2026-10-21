import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksComponent } from '../components/hookscomponent/hook.component';
import { DeportesComponent } from '../components/deportescomponent/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormBindingComponent } from '../components/form.binding.component/form.binding.component';
import { SumarNumerosComponent } from '../components/sumar.numeros.component/sumar.numeros.component';
import { TablaMultiplicar } from '../components/tabla-multiplicar/tabla-multiplicar';
@NgModule({
  declarations: [
    App,
    PrimerComponent,
    HooksComponent,
    DeportesComponent,
    FormBindingComponent,
    SumarNumerosComponent,
    TablaMultiplicar
  ],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { }
