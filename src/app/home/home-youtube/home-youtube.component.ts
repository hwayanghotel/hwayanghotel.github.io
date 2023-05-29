import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-youtube',
  templateUrl: './home-youtube.component.html',
  styleUrls: ['./home-youtube.component.scss'],
})
export class HomeYoutubeComponent {
  @Input() code: string = 'rBiuJ_Usg10';

  get width(): number {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1000) {
      return windowWidth * 0.4;
    } else if (windowWidth > 640) {
      return windowWidth * 0.6;
    } else {
      return windowWidth * 0.8;
    }
  }

  get height(): number {
    return (this.width / 16) * 9;
  }
}
