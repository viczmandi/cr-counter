import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CARDS } from '../cards.model';
import { Card } from '../card.model';
import { Counters } from '../counters.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: Card[] = CARDS;
  counters1: string[] = ['weakAgainst','strongAgainst','synergies'];
  counters2: string[] = ['hard','soft'];
  cardName: string;
  counterProp1: string;
  counterProp2: string;
  choosenCards: Card[] = [];
  counters: Counters = new Counters();

  addCard(card: Card) {
    this.choosenCards.push(card);
  }

  addCounter() {
    this.counters.card = this.cardName;
    this.counters[this.counterProp1][this.counterProp2] = this.choosenCards;
  }

  change() {
    this.choosenCards = [];
  }

  reset() {
    this.counters = new Counters();
  }

  copy(){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(this.counters);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
