import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})
export class Tab2Page {

  contador: number = 0;
  primoActual: number = 2;

  siguientePrimo() {
    let numero = this.primoActual + 1;

    while (!this.esPrimo(numero)) {
      numero++;
    }

    this.primoActual = numero;
    this.contador++;
  }

  esPrimo(numero: number): boolean {
    if (numero < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return true;
  }

  reiniciar() {
    this.contador = 0;
    this.primoActual = 2;
  }

}