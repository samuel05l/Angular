import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
  segundo=0;
  @Input() inicio1: number=0;
  @Output() multiplo10 = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.segundo = this.inicio1;
    setInterval(()=>{
      this.segundo++;
      if(this.segundo % 10 == 0)
        this.multiplo10.emit(this.segundo);
  },1000);
  }
}
