import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contador',
    template: `
        <button type="button" class="btn btn-primary" (click)="decrementa()">-</button>
        <input type="text" [value]="valor" readonly>
        <button type="button" class="btn btn-primary" (click)="incrementa()">+</button>
    `
})
export class OutputPropertyComponent {

    @Input()
    valor : number = 0;

    @Output('eventoMudouValor')
    mudouValor = new EventEmitter();

    constructor() { }

    decrementa(){
        this.valor--;
        this.mudouValor.emit({novoValor: this.valor});
    }

    incrementa(){
        this.valor++;
        this.mudouValor.emit({novoValor: this.valor});
    }

}