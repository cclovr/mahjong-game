import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CardModel } from '../../enums/card.model';
import { StateCardEnum } from '../../enums/state-card.enum';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass'],
  animations: [
    trigger('styleCard', [
      state(StateCardEnum.close, style({ color: 'white' })),
      state(StateCardEnum.open, style({ color: 'black' })),
      transition('close <=> open', animate('0.3s')),
    ]),
  ]
})
export class CardItemComponent implements OnInit {
  @Input() cardNumber: CardModel | undefined;
  @Input() stateCard: string | undefined;

  state: string = StateCardEnum.close

  constructor() { }

  ngOnInit(): void {
  }

  expand() {
    this.state = StateCardEnum.open
  }
}
