import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  dodajSobu(naziv: HTMLInputElement, broj: HTMLInputElement, opis: HTMLInputElement): boolean {
    console.log(`Dodavanje sobe naziv: ${naziv.value} sa brojem soba: ${broj.value} i opisom: ${opis.value}`);
    return false;
  }
}
