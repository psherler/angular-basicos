import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>Hola mundo</h1>
    <h2>{{title2}}</h2>
    <h3>La base es:<strong>{{base}}</strong></h3>

    <button (click)="acumular(base)"> {{base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(-base)"> -{{base}} </button>
  `
})
export class ContadorComponent {
    title2 = 'Contador app';
    numero: number = 10;
    base: number = 5;
    acumular(valor: number) {
        this.numero += valor;
    }
}
