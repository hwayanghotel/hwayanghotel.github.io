import { Component } from '@angular/core';

@Component({
    selector: 'link-tree',
    templateUrl: './link-tree.component.html',
    styleUrls: ['./link-tree.component.scss'],
})
export class LinkTreeComponent {
    constructor() {}

    openBookingPension() {
        window.open(
            'https://booking.ddnayo.com/booking-calendar-status?accommodationId=12342'
        );
    }
}
