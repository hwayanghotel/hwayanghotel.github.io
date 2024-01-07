import { Component, ElementRef, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
} from '@angular/animations';

@Component({
    selector: 'mobile-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [
        trigger('textAnimation', [
            state('in', style({ opacity: 1 })),
            state('out', style({ opacity: 0 })),
            transition('in => out', animate('500ms ease-out')),
            transition('out => in', animate('500ms ease-in')),
        ]),
    ],
})
export class LandingComponent implements OnInit {
    selectedIndex = 0;
    textAnimationState = 'in';
    openQuickLink: boolean;

    list: { text: string; person: string }[] = [
        { text: '어서오세유', person: '능운대지기' },
        { text: '주인이 착해유', person: '능운대펜션 딸' },
        { text: '계곡, 10초 컷', person: '능운대펜션 아들' },
        { text: '단골은 서비스유', person: '능운대펜션 사위' },
        { text: '백숙에 반했슈', person: '능운대펜션 며느리' },
    ];

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        setInterval(() => {
            this.textAnimationState = 'out';
            setTimeout(() => {
                this.selectedIndex =
                    (this.selectedIndex + 1) % this.list.length;
                this.textAnimationState = 'in';
            }, 500);
        }, 4000);
    }

    scrollTo(sectionID: string) {
        this.openQuickLink = true;

        setTimeout(() => {
            const section = this.elementRef.nativeElement.querySelector(
                `#${sectionID}`
            );
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        }, 500);
    }

    openBookingPension() {
        window.open(
            'https://booking.ddnayo.com/booking-calendar-status?accommodationId=12342'
        );
    }
}
