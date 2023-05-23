import {Component,
        OnInit,
        DoCheck,
        AfterContentChecked,
        AfterContentInit,
        AfterViewChecked,
        AfterViewInit    
} from '@angular/core';

@Component({
  selector: 'app-exemplo-check',
  templateUrl: './exemplo-check.component.html',
  styleUrls: ['./exemplo-check.component.css']
})
export class ExemploCheckComponent 
implements OnInit,
           DoCheck,
           AfterContentChecked,
           AfterContentInit,
           AfterViewChecked,
           AfterViewInit
{
  constructor(){  }

  quantidade:number = 0;

  adicionar(){
    this.quantidade ++;
  }

  decrementar(){
    this.quantidade --;
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  
}
