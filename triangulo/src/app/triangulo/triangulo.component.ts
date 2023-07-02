import { Component, OnInit,Renderer2,ElementRef } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.css']
})
export class TrianguloComponent implements OnInit {
  private colors: string[] = ['red', 'blue', 'green', 'yellow','orange','black','purple','gray','pink'];
  private currentIndex1!: number;
  private currentIndex2!: number;
  private currentIndex3!: number;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    this.currentIndex1 = this.getRandomIndex();
    this.currentIndex2 = this.getRandomIndex();
    this.currentIndex3 = this.getRandomIndex();

    this.startColorChange();
  }

  startColorChange() {
    setInterval(() => {
      const currentColor1 = this.colors[this.currentIndex1];
      const currentColor2 = this.colors[this.currentIndex2];
      const currentColor3 = this.colors[this.currentIndex3];

      this.currentIndex1 = this.getRandomIndex();
      this.currentIndex2 = this.getRandomIndex();
      this.currentIndex3 = this.getRandomIndex();

      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.triangulo1'), 'border-bottom-color', currentColor1);
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.triangulo2'), 'border-bottom-color', currentColor2);
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.triangulo3'), 'border-bottom-color', currentColor3);

      const colorTextElement1 = this.elementRef.nativeElement.querySelector('#color-text1');
      const colorTextElement2 = this.elementRef.nativeElement.querySelector('#color-text2');
      const colorTextElement3 = this.elementRef.nativeElement.querySelector('#color-text3');

      colorTextElement1.textContent = 'Color actual: ' + currentColor1;
      colorTextElement2.textContent = 'Color actual: ' + currentColor2;
      colorTextElement3.textContent = 'Color actual: ' + currentColor3;
    }, 1000); 
  }

  getRandomIndex(): number {
    return Math.floor(Math.random() * this.colors.length);
  }
}
