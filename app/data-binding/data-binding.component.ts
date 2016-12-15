import { Component} from '@angular/core';

import { InputPropertyComponent } from './input-property.component';
import { OutputPropertyComponent } from './output-property.component'

@Component({
    moduleId: module.id,
    selector: 'exemplo-data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['data-binding.component.css'],
    directives: [InputPropertyComponent, OutputPropertyComponent]
})
export class DataBindingComponent {
    constructor() { }

    url = 'http://loiane.com';
    urlImg = 'http://lorempixel.com/400/200/nature/'

    conteudoDoInput : string = '';
    conteudoSalvo : string = '';
    isMouseOver : boolean = false;
    nome : string = 'abc';
    pessoa  = {nome: '', idade: 18};
    nomeCurso : string = 'Angular 2';
    valorInicial : number = 10;

    getValor(){
        return 1;
    }

    onClick(){
        alert('Botão clicado!');
    }

    onKeyup(event:KeyboardEvent){
        console.log(event);
        this.conteudoDoInput = (<HTMLInputElement>event.target).value;
    }

    onSave(valor : string){
        this.conteudoSalvo = valor;
    }

    onMouseSpan(){
        this.isMouseOver = !this.isMouseOver;
    }

    onValorMudou(event:any){
        console.log(event);
        console.log(event.novoValor);
    }
}