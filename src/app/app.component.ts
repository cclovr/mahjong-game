import { Component, OnInit } from '@angular/core';
import { CardsGeneratorService } from '../services/cards-generator.service';
import { StateCardEnum } from '../enums/state-card.enum';
import { CardModel } from '../enums/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  currentOpenCard: number | null = null;
  cardsNumber: CardModel[] = [];
  stateCard = StateCardEnum.open;

  constructor(
    private cardsGeneratorService: CardsGeneratorService
  ) {}

  ngOnInit() {
    this.generateCards();
  }

  generateCards() {
    const range = 50;
    const countNumbers = 10;
    this.cardsNumber = this.cardsGeneratorService.generateCards(range, countNumbers)
  }

  openCard(card: CardModel) {
    // this.stateCard = StateCardEnum.open
    // if (this.currentOpenCard) {
    //   console.log(this.currentOpenCard === card);
    //   this.stateCard = this.currentOpenCard === card ? StateCardEnum.open : StateCardEnum.close
    //   console.log('this.stateCard', this.stateCard);
    // }
    // this.currentOpenCard = card;
  }
}
