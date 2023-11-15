import { Component } from '@angular/core';
import { Price } from 'reservation/service/booking/booking.service.interface';

@Component({
    selector: 'food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.scss', '../pension-service.scss'],
})
export class FoodComponent {
    Price = Price;
}
