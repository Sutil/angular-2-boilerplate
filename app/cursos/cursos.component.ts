import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: 'cursos.component.html',
    providers: [CursosService]
    /*template: `
        <h3>Cursos {{ nomePortal }}</h3>
        <ul>
            <li *ngFor="let curso of cursos">
                {{ curso }}
            </li>
        </ul>
    `*/
})
export class CursosComponent {
    nomePortal = 'loiane.training';
    cursos : any;

    constructor(cursoService: CursosService) {
        this.cursos = cursoService.getCursos();
    }
}
