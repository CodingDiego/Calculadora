import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  number1:number = 0;
  number2:number = 0;
  result:number = 0;

  sumar():void{
    console.log("Se sumo");
    this.result = this.number1 + this.number2;
    
  }
  restar():void{
    this.result = this.number1 - this.number2;
    console.log(`se resto ${this.number1} y ${this.number2} y dio ${this.result}`);
  }
}
