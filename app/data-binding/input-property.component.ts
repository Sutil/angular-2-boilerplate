import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'curso',
    template: '{{nomeCurso}}'
})
export class InputPropertyComponent {

    @Input('nome') nomeCurso : string = '';
    
    constructor() { }

}