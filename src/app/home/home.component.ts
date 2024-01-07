import { Component, HostListener } from '@angular/core';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
})
export class HomeComponent {
    color: string = 'white';

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
        const HomeVideoHeight = Math.round(window.innerWidth * 0.5625);
        const scrollPosition = Math.round(window.scrollY);
        this.color = scrollPosition >= HomeVideoHeight ? 'black' : 'white';
    }
}
