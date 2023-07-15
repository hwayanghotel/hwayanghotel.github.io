import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'flat-bench',
    templateUrl: './flat-bench.component.html',
    styleUrls: ['./flat-bench.component.scss', '../pension-service.scss'],
})
export class FlatBenchComponent {
    currentIndex: number = 0;
    images: string[] = [
        'assets/flat-bench/flat-bench1.jpg',
        'assets/flat-bench/flat-bench2.jpg',
        'assets/flat-bench/flat-bench3.jpg',
        'assets/flat-bench/flat-bench4.jpg',
    ];

    private touchStartX: number;
    private touchEndX: number;

    @HostListener('touchstart', ['$event'])
    onTouchStart(event: TouchEvent) {
        this.touchStartX = event.touches[0].clientX;
    }

    @HostListener('touchmove', ['$event'])
    onTouchMove(event: TouchEvent) {
        this.touchEndX = event.touches[0].clientX;
    }

    @HostListener('touchend', ['$event'])
    onTouchEnd(event: TouchEvent) {
        clearTimeout(this._timeoutHandle);
        this._timeoutHandle = setTimeout(() => {
            this.detectTouchDirection();
        }, 200);
    }
    private _timeoutHandle: any;

    private detectTouchDirection() {
        if (this.touchStartX + 30 < this.touchEndX) {
            this.currentIndex =
                this.currentIndex === 0
                    ? this.images.length - 1
                    : this.currentIndex - 1;
        } else if (this.touchStartX > this.touchEndX + 30) {
            this.currentIndex++;
            this.currentIndex %= this.images.length;
        }
    }
}
