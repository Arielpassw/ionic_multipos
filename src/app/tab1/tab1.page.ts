import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton],
})
export class Tab1Page {
  constructor() { }

  //Contador multiplo de 2

  contador1 : number =0;
  aumentar1():void {
    this.contador1 += 2;
  }

  //Contador multiplo de 3

  contador2: number =0;
  aumentar2():void {
    this.contador2 += 3;
  }

  //Contador multiplo de 5

  contador3: number =0;
  aumentar3():void {
    this.contador3 += 5;
  }

  //Contador multiplo de 7

  contador4: number =0;
  aumentar4():void {
    this.contador4 += 7;
  }

  //Contador multiplo de 10

  contador5: number =0;
  aumentar5():void {
    this.contador5 += 10;
  }

  //Reinicio de todos los contadores

  reiniciar(): void {
  this.contador1 = 0;
  this.contador2 = 0;
  this.contador3 = 0;
  this.contador4 = 0;
  this.contador5 = 0;
}

}


