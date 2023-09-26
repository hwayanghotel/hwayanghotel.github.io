import { Component, Input } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    @Input() color: string;
    showMenu: boolean;

    openBookingPension() {
        window.open(
            'https://booking.ddnayo.com/booking-calendar-status?accommodationId=12342'
        );
    }
}
