import { Component } from '@angular/core';
import { Price } from 'src/assets/price';

@Component({
  selector: 'food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss', '../pension-service.scss'],
})
export class FoodComponent {
  Price = Price;
}
