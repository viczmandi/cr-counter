import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CARDS } from '../cards.model';
import { Card } from '../card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: Card[] = CARDS;
  // cardName = NgForm.controls['name'].value;
}
