import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showMore: boolean = false;
  showMoreService: boolean = false;

  openMenu() {
    this.showMore = true;
  }

  closeMenu() {
    this.showMore = this.showMoreService = false;
  }
}
