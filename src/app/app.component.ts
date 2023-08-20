import { Component } from '@angular/core';
import { Soba } from './soba/soba.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sobe!: Soba[];

  constructor(){
    this.sobe=[
      new Soba('Mala slatka tajna', 3, 'https://www.booking.com/hotel/rs/apartman-slatka-tajna.sr.html', 'Apartman na zaltiboru'),
      new Soba('Olimpik', 4, 'http://www.hotelolimp.com/index.html', 'Apartman na kopaoniku'),
      new Soba('Konak', 6, 'https://markovkonakdivcibare.com/', 'Vila na Divcibarama', 7)
    ];
  }

  dodajSobu(naziv: HTMLInputElement, broj: HTMLInputElement,link: HTMLInputElement, opis: HTMLInputElement): boolean {
    console.log(`Dodavanje sobe naziv: ${naziv.value} sa brojem soba: ${broj.value} i opisom: ${opis.value}`);
    this.sobe.push(new Soba(naziv.value, (Number)(broj.value),link.value, opis.value, 0));
    naziv.value = '';
    broj.value = '';
    opis.value = ''
    return false;
  }
}
