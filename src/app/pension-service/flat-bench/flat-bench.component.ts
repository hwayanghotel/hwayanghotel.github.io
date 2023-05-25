import { Component } from '@angular/core';

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
}
