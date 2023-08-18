import { Component, HostBinding, OnInit } from '@angular/core';
import { Soba } from './soba.model';

@Component({
  selector: 'app-soba',
  templateUrl: './soba.component.html',
  styleUrls: ['./soba.component.css']
})
export class SobaComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  soba: Soba;

  constructor(){
    this.soba = new Soba('Mala Slatka Tajna', 2, 'Apartman na zlatiboru', 5);
  }

  voteUp() {
    this.soba.glasovi += 1;
    return false;
    }
    voteDown() {
    this.soba.glasovi -= 1;
    return false;
    }

  ngOnInit(): void {
      
  }
}
