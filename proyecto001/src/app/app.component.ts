import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';

a=8;
b=2;

   sum = this.a + this.b;
   res = this.a - this.b;
   mult = this.a * this.b;
   div = this.a / this.b;

contador = + 1;

incrementar(){
this.contador++;
}
decrementar(){
  this.contador --;
}

nombre='';
apellido='';

 }
