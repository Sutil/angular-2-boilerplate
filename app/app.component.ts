import { Component } from '@angular/core';

import {MeuPrimeiroComponent} from './primeiro/meu-primeiro.component'
import {CursosComponent} from './cursos/cursos.component'
import {DataBindingComponent} from './data-binding/data-binding.component'
import {LifeCycleComponent} from './data-binding/ciclo/life-cycle.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Olá Mundo!</p>
        <h2>Life Cycle</h2>
        <lifecycle [valorInicial]="valorInicial" *ngIf="deletarConteudo != true"></lifecycle>
        <button (click)="valorInicial=20">Muda valor</button>
        <button (click)="deletarConteudo=true">Deletar Conteudo</button>
        <h2>Segue exemplos de data binding</h2>
        <exemplo-data-binding></exemplo-data-binding>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
    `,
    directives: [MeuPrimeiroComponent, CursosComponent, DataBindingComponent, LifeCycleComponent]
})
export class AppComponent { 

    deletarConteudo : boolean = false;
    valorInicial = 15;
}
