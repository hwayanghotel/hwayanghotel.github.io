import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
    selector: 'flat-table',
    templateUrl: './flat-table.component.html',
    styleUrls: ['./flat-table.component.scss', '../pension-service.scss'],
})
export class FlatTableComponent {
    @ViewChild('MainImageArea') MainImageArea!: ElementRef<HTMLElement>;

    color: string = 'white';
    currentIndex: number = 0;
    images: string[] = [
        'assets/flat-table/flat-table1.jpg',
        'assets/flat-table/flat-table2.jpg',
        'assets/flat-table/flat-table3.jpg',
        'assets/flat-table/flat-table4.jpg',
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
