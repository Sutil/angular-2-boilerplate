import { 
    Component, 
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild
 } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'lifecycle',
    template: `
        <p #variavelLocalP >{{valorInicial}}</p>
        <p>{{variavelLocalP.textContent}}</p>
    `
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() valorInicial = 10;

    @ViewChild('variavelLocalP') variavelLocalP: HTMLElement;

    constructor() { }

    ngOnInit() {
        console.log('ngOnInit');
        console.log(this.variavelLocalP);
     }

     ngOnChanges(){
         console.log('ngOnChanges');
     }

     ngDoCheck(){
         console.log('ngDoCheck');
     }

     ngAfterContentInit(){
         console.log('ngAfterContentInit');
     }

     ngAfterContentChecked(){
         console.log('ngAfterContentChecked');
     }

     ngAfterViewInit(){
         console.log('ngAfterViewInit');
     }

     ngAfterViewChecked(){
         console.log('ngAfterViewChecked');
     }

     ngOnDestroy(){
         console.log('ngOnDestroy');
     }
}