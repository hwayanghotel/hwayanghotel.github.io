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
        if (windowWidth > 800) {
            return windowWidth * 0.4;
        } else {
            return windowWidth;
        }
    }
}
