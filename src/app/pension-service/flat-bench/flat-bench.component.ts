import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'flat-bench',
    templateUrl: './flat-bench.component.html',
    styleUrls: ['./flat-bench.component.scss', '../pension-service.scss'],
})
export class FlatBenchComponent {
    @ViewChild('MainImageArea') MainImageArea!: ElementRef<HTMLElement>;

    color: string = 'white';
    currentIndex: number = 0;
    images: string[] = [
        'assets/flat-bench/flat-bench1.jpg',
        'assets/flat-bench/flat-bench2.jpg',
        'assets/flat-bench/flat-bench3.jpg',
        'assets/flat-bench/flat-bench4.jpg',
    ];

    showSelectedImage(index: number) {
        this.MainImageArea.nativeElement.children[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
        this.currentIndex = index;
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event): void {
        this.color = window.scrollY > window.innerHeight ? 'black' : 'white';
    }

    onScrollMainImageArea() {
        if (!this._alreadyScrolled) {
            this._alreadyScrolled = true;
            clearTimeout(this._timeoutHandle);
            this._timeoutHandle = setTimeout(() => {
                const width =
                    this.MainImageArea.nativeElement.scrollWidth /
                    this.images.length;
                const currentPosition =
                    this.MainImageArea.nativeElement.scrollLeft;
                const currentIndex = Math.round(currentPosition / width);
                this.currentIndex = currentIndex;
            }, 50);
        } else {
            this._alreadyScrolled = false;
        }
    }
    private _timeoutHandle: any;
    private _alreadyScrolled: boolean = false;
}
