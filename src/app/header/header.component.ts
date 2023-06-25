import { Component } from '@angular/core';

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
    this.showMore = this.showDetailService = this.showDetailReservation = false;
  }

  private _closeTimeout() {
    clearTimeout(this._timeoutHandle);
    this._timeoutHandle = setTimeout(() => {
      this.closeMenu();
    }, 5000);
  }
}
