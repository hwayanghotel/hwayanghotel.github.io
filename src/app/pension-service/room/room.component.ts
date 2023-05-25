import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  roomInfo = roomInfo;

  constructor(private elementRef: ElementRef) {}

  getImageWidth(room: any): number {
    return 100 / room.rooms.length - 1;
  }

  scrollTo(sectionID: string) {
    const section = this.elementRef.nativeElement.querySelector(
      `#${sectionID}`
    );
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}

const roomInfo = [
  {
    id: 'room1',
    title: '능운대 객실.',
    mainText:
      '구름과 바위가 어우러져 조화를 이루듯<br />친한 지인들이 모이는 공간입니다.<br /><br />',
    text1: '- 침실 + 거실형<br />- 적정 4인, 최대 6인',
    text2:
      '화장실, 냉장고, 에어컨, 테라스,<br />HDTV, 헤어드라이기, 주방, 커피포트,<br />인덕션, 주방기구 세트, 전기밥솥,<br />좌탁, 전자렌지(공용), 샴푸&린스',
    activeRoom: 'assets/room/room1-1.jpg',
    rooms: [
      'assets/room/room1-1.jpg',
      'assets/room/room1-2.jpg',
      'assets/room/room1-3.jpg',
      'assets/room/room1-4.jpg',
      'assets/room/room1-5.jpg',
      'assets/room/bathroom1.jpg',
      'assets/room/bathroom2.jpg',
      'assets/room/bathroom3.jpg',
    ],
  },
  {
    id: 'room2',
    title: '학소대 객실.',
    mainText:
      '낙락장송 아래 백학과 청학이 모이듯<br /> 아늑하고 편안한 쉼터입니다.<br /><br />',
    text1: '- 침실 + 거실형<br />- 적정 4인, 최대 5인',
    text2:
      '화장실, 냉장고, 에어컨, 테라스,<br />HDTV, 헤어드라이기, 주방, 커피포트,<br />인덕션, 주방기구 세트, 전기밥솥,<br />좌탁, 전자렌지(공용), 샴푸&린스',
    activeRoom: 'assets/room/room2-1.jpg',
    rooms: [
      'assets/room/room2-1.jpg',
      'assets/room/room2-2.jpg',
      'assets/room/room2-3.jpg',
      'assets/room/room2-4.jpg',
      'assets/room/bathroom1.jpg',
      'assets/room/bathroom2.jpg',
      'assets/room/bathroom3.jpg',
    ],
  },
  {
    id: 'room3',
    title: '와룡암 객실.',
    mainText:
      '누워있는 용과 자연이 어루어짐을<br />품 속에서 느낄 수 있는 공간입니다.<br /><br />',
    text1: '- 침실 + 거실형<br />- 적정 3인, 최대 4인',
    text2:
      '화장실, 냉장고, 에어컨, 테라스,<br />HDTV, 헤어드라이기, 주방, 커피포트,<br />인덕션, 주방기구 세트, 전기밥솥,<br />좌탁, 전자렌지(공용), 샴푸&린스',
    activeRoom: 'assets/room/room3-1.jpg',
    rooms: [
      'assets/room/room3-1.jpg',
      'assets/room/room3-2.jpg',
      'assets/room/room3-3.jpg',
      'assets/room/room3-4.jpg',
      'assets/room/room3-5.jpg',
      'assets/room/bathroom1.jpg',
      'assets/room/bathroom2.jpg',
      'assets/room/bathroom3.jpg',
    ],
  },
  {
    id: 'room4',
    title: '첨성대 객실.',
    mainText:
      '쏟아지는 별을 마주하며 도란도란<br />이야기 나눌 수 있는 휴식처입니다.<br /><br />',
    text1: '- 원룸형<br />- 적정 2인, 최대 4인',
    text2:
      '화장실, 냉장고, 에어컨, 테라스,<br />HDTV, 헤어드라이기, 주방, 커피포트,<br />인덕션, 주방기구 세트, 전기밥솥,<br />좌탁, 전자렌지(공용), 샴푸&린스',
    activeRoom: 'assets/room/room4-1.jpg',
    rooms: [
      'assets/room/room4-1.jpg',
      'assets/room/room4-2.jpg',
      'assets/room/room4-3.jpg',
      'assets/room/room4-4.jpg',
      'assets/room/room4-5.jpg',
      'assets/room/bathroom1.jpg',
      'assets/room/bathroom2.jpg',
      'assets/room/bathroom3.jpg',
    ],
  },
];
