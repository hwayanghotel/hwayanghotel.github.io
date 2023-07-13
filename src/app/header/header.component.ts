import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchBookingComponent } from 'reservation/search-booking/search-booking.component';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    showMore: boolean = false;
    showDetailService: boolean = false;
    showDetailReservation: boolean = false;
    private _timeoutHandle: any;

    constructor(private dialog: MatDialog) {}

    openMenu() {
        this.showMore = true;
        this._closeTimeout();
    }

    setShowDetails(detail: 'service' | 'reservation') {
        if (detail === 'service') {
            this.showDetailService = !this.showDetailService;
            if (this.showDetailService) {
                this.showDetailReservation = false;
            }
        }
        if (detail === 'reservation') {
            this.showDetailReservation = !this.showDetailReservation;
            if (this.showDetailReservation) {
                this.showDetailService = false;
            }
        }
        this._closeTimeout();
    }

    closeMenu() {
        this.showMore =
            this.showDetailService =
            this.showDetailReservation =
                false;
    }

    private _closeTimeout() {
        clearTimeout(this._timeoutHandle);
        this._timeoutHandle = setTimeout(() => {
            this.closeMenu();
        }, 5000);
    }

    openSerachBookingDialog() {
        this.dialog.open(SearchBookingComponent);
    }
}
