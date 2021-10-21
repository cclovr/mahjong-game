import { Injectable } from '@angular/core';
import { CardModel } from '../enums/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsGeneratorService {

  constructor() { }

  generateCards(range: number, countNumber: number): CardModel[] {
    const randomNumbers = this.randomUniqueNumbers(range, countNumber)
    const numbersPairs = [...randomNumbers, ...randomNumbers]
    return numbersPairs.sort(function(){ return 0.5-Math.random() })
  }

  randomUniqueNumbers(range: number, countNumbers: number): CardModel[] {
    let arrNumbers = Array.from(Array(range),(x,i)=> i )
    let result = [];
    for (let i = 1; i <= countNumbers; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push({
        number: arrNumbers[random],
        state: 'close'
      });
      arrNumbers[random] = arrNumbers[range - i];
    }
    return result;
  }
}
