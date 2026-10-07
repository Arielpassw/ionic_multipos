import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonButton]
})
export class Tab2Page {

  // Nombre 
  nombre: string = "Ariel Arias";

  // Arreglo
  primos: number[] = [];

  constructor() {}

  // Mostras numeros primos
  mostrarPrimos(): void {
    this.primos = [];
    // Generamos números primos del 2 al 100
    for (let i = 2; i <= 100; i++) {
      if (this.esPrimo(i)) {
        this.primos.push(i);
      }
    }
  }

  }
