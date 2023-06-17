import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'move-top-icon',
  templateUrl: './move-top-icon.component.html',
  styleUrls: ['./move-top-icon.component.scss'],
})
export class MoveTopIconComponent {
  @ViewChild('IMG') IMG!: ElementRef<HTMLElement>;

  private _scrollSubject = new Subject<void>();

  constructor(private _renderer: Renderer2) {
    this._scrollSubject.pipe(debounceTime(500)).subscribe(() => {
      this._renderer.setStyle(this.IMG.nativeElement, 'opacity', '0');
      this._renderer.setStyle(this.IMG.nativeElement, 'pointer-events', 'none');
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this._scrollSubject.next();

    this._renderer.setStyle(this.IMG.nativeElement, 'opacity', '1');
    this._renderer.setStyle(this.IMG.nativeElement, 'pointer-events', 'auto');
  }

  moveToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
