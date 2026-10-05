export const site = {
  name: '화양계곡 능운대펜션',
  shortName: '능운대',
  url: 'https://hwayanghotel.github.io',
  phone: '043-832-4281',
  phoneHref: 'tel:0438324281',
  address: '충청북도 괴산군 청천면 화양동길 247',
  bookingUrl: 'https://booking.ddnayo.com/booking-calendar-status?accommodationId=12342',
  naverMap: 'https://map.naver.com/p/search/' + encodeURIComponent('화양계곡 능운대펜션'),
  kakaoMap: 'https://map.kakao.com/link/search/' + encodeURIComponent('화양계곡 능운대펜션'),
  checkIn: '15:00',
  checkOut: '11:00',
  representative: '정경미',
  businessNumber: '317-04-07646',
};

export const navigation = [
  { href: '/rooms/', label: '객실' },
  { href: '/valley/', label: '계곡과 산책' },
  { href: '/dining/', label: '식당' },
  { href: '/visit/', label: '오시는 길' },
];

export interface Room {
  slug: string;
  name: string;
  number: string;
  standard: number;
  maximum: number;
  pyeong: number;
  structure: string;
  introduction: string;
  description: string;
  story: string;
  cover: string;
  gallery: string[];
}

// Source: research/data/rooms.json, observed booking data 2026-10-02.
// Rates are intentionally not stored here. The booking provider owns live availability and prices.
export const rooms: Room[] = [
  {
    slug: 'neungundae',
    name: '능운대',
    number: '01',
    standard: 4,
    maximum: 6,
    pyeong: 18,
    structure: '거실 + 온돌방',
    introduction: '함께 둘러앉는, 넉넉한 하루.',
    description:
      '거실과 온돌방이 나뉜 능운대의 가장 큰 객실입니다. 함께 이야기하는 시간과 각자의 쉬는 시간을 편하게 나눠보세요.',
    story: '화양구곡의 여섯 번째 풍경, 능운대의 이름을 담았습니다.',
    cover: 'room1-1',
    gallery: ['room1-1', 'room1-2', 'room1-4', 'room1-5'],
  },
  {
    slug: 'haksodae',
    name: '학소대',
    number: '02',
    standard: 4,
    maximum: 5,
    pyeong: 16,
    structure: '거실 + 온돌방',
    introduction: '익숙한 편안함으로 쉬어가는 방.',
    description:
      '환한 색감의 거실과 온돌방, 식사를 준비할 작은 주방이 있는 공간입니다. 가족과 친구들이 한자리에 모이는 하루를 보내세요.',
    story: '화양구곡의 여덟 번째 풍경, 학소대에서 이름을 가져왔습니다.',
    cover: 'room2-1',
    gallery: ['room2-1', 'room2-2', 'room2-3', 'room2-4'],
  },
  {
    slug: 'waryongam',
    name: '와룡암',
    number: '03',
    standard: 3,
    maximum: 4,
    pyeong: 12,
    structure: '거실 + 온돌방',
    introduction: '가벼운 여행에 어울리는 쉼.',
    description:
      '거실과 온돌방이 나뉜 아담한 객실입니다. 계곡에서 시간을 보내고 돌아와 편히 앉아 쉬어가기에 좋습니다.',
    story: '화양구곡의 일곱 번째 풍경, 와룡암의 이름을 담았습니다.',
    cover: 'room3-3',
    gallery: ['room3-3', 'room3-1', 'room3-2', 'room3-4', 'room3-5'],
  },
  {
    slug: 'cheomseongdae',
    name: '첨성대',
    number: '04',
    standard: 2,
    maximum: 3,
    pyeong: 8,
    structure: '원룸형 온돌방',
    introduction: '둘이 머물기 좋은, 아담한 공간.',
    description:
      '온돌방과 주방이 한 공간에 있는 작은 객실입니다. 짐을 가볍게 풀고, 계곡 곁에서 느긋한 하루를 시작해 보세요.',
    story: '화양구곡의 다섯 번째 풍경, 첨성대에서 이름을 가져왔습니다.',
    cover: 'room4-3',
    gallery: ['room4-3', 'room4-4', 'room4-5'],
  },
];

export const faqs = [
  {
    question: '숙박 예약은 어떻게 하나요?',
    answer:
      '떠나요 예약 페이지에서 날짜별 요금과 예약 가능 여부를 확인하고 예약하실 수 있습니다. 예약 변경과 취소도 예약하신 페이지에서 안내받으실 수 있어요.',
    link: site.bookingUrl,
    label: '숙박 예약하기',
    external: true,
  },
  {
    question: '식사는 어떻게 예약하나요?',
    answer:
      '043-832-4281로 전화해 주세요. 방문 날짜와 시간, 인원, 드실 메뉴를 말씀해 주시면 준비 가능 여부를 안내해 드립니다.',
    link: site.phoneHref,
    label: '식사 전화 예약',
    external: false,
  },
  {
    question: '입실과 퇴실 시간은 언제인가요?',
    answer:
      '입실은 오후 3시, 퇴실은 오전 11시입니다. 늦게 도착하시는 경우에는 미리 전화로 알려주세요.',
  },
  {
    question: '차량으로 방문할 때 알아둘 점이 있나요?',
    answer:
      '국립공원 안에 위치해 차량 진입 안내가 필요합니다. 출발 전 펜션으로 전화해 차량 진입과 주차 안내를 확인해 주세요.',
    link: '/visit/',
    label: '오시는 길 확인',
    external: false,
  },
  {
    question: '인원 추가와 바비큐는 어떻게 이용하나요?',
    answer:
      '인원 추가의 연령 기준과 요금은 날짜별 예약 조건을 확인해 주세요. 바비큐 이용 가능 여부와 준비 비용은 방문 전에 전화로 문의해 주세요.',
  },
];
