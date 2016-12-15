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
    Input
 } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'lifecycle',
    template: `
        <p>{{valorInicial}}</p>
    `
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() valorInicial = 10;

    constructor() { }

    ngOnInit() {
        console.log('ngOnInit');
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