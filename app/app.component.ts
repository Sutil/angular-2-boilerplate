import { Component } from '@angular/core';

import {MeuPrimeiroComponent} from './primeiro/meu-primeiro.component'
import {CursosComponent} from './cursos/cursos.component'
import {DataBindingComponent} from './data-binding/data-binding.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Olá Mundo!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
        <exemplo-data-binding></exemplo-data-binding>
    `,
    directives: [MeuPrimeiroComponent, CursosComponent, DataBindingComponent]
})
export class AppComponent { }
