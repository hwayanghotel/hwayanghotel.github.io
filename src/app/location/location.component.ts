import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

const url =
    'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=lpn83plf5a';
declare var naver: any;

@Component({
    selector: 'location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements AfterViewInit {
    @ViewChild('script', { static: false }) script: ElementRef;
    marker: any;

    ngAfterViewInit() {
        let script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.async = true;
        this.script.nativeElement.appendChild(script);
        script.onload = () => {
            this.marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(36.6660371, 127.8160245),
                map: new naver.maps.Map('map', {
                    useStyleMap: true,
                    center: new naver.maps.LatLng(36.6660371, 127.8160245),
                    zoom: 15,
                }),
            });
        };
    }
}
