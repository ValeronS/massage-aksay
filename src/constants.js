export const images = [
  {
    src: new URL('/src/assets/img/portrait.jpg', import.meta.url),
    alt: 'portrait',
  },
  {
    src: new URL('/src/assets/img/massage-hands.jpg', import.meta.url),
    alt: 'massage-hands',
  },
];

export const textsAbout = [
  [
    'Появилась боль в спине, шее, руках или ногах? Не важно в какой именно области - на ранних стадиях лёгкая боль игнорируется терпением, затем легкими обезболивающими препаратами, а когда и они бессильны - начинаются поиски.',
    'На раннем этапе мы можем помочь максимально эффективно, и главное в короткие сроки убрать напряжение в мышцах, восстановив кровообращение.',
    'Когда боли усиливаются, с этой сложностью тоже можно совладать, только количество сеансов увеличивается - соответственно восстановление займёт большет времени и денег.',
    'Именно поэтому рекомендуется идти на массаж вовремя, в удовольствие и с наименьшими затратами.',
  ],
];

export const prices = [
  {
    name: 'Массаж спины',
    duration: 30,
    price: 800,
    id: 1,
  },
  {
    name: 'Массаж спины',
    duration: 60,
    price: 1300,
    id: 2,
  },
  {
    name: 'Общий массаж всего тела (релакс)',
    duration: 90,
    price: 1500,
    id: 3,
  },
  {
    name: 'Лимфодренажный массаж',
    duration: 90,
    price: 1500,
    id: 4,
  },
  {
    name: 'Антицеллюлитный массаж',
    duration: 60,
    price: 1500,
    id: 5,
  },
  {
    name: 'Скульптурный массаж',
    duration: 120,
    price: 2500,
    id: 6,
  },
  {
    name: 'Тайский массаж',
    duration: 120,
    price: 2000,
    id: 7,
  },
  {
    name: 'Массаж в 4 руки',
    duration: 60,
    price: 3000,
    id: 8,
  },
  {
    name: 'Баночный массаж',
    duration: 60,
    price: 1500,
    id: 9,
  },
  {
    name: 'Медовый массаж',
    duration: 60,
    price: 1300,
    id: 10,
  },
  {
    name: 'Массаж ног',
    duration: 30,
    price: 800,
    id: 11,
  },
  {
    name: 'Массаж рук',
    duration: 20,
    price: 500,
    id: 12,
  },
  {
    name: 'Массаж головы',
    duration: 20,
    price: 500,
    id: 13,
  },
  {
    name: 'Массаж шейно-воротниковой зоны',
    duration: 20,
    price: 500,
    id: 14,
  },
];
export const massageCards = [
  {
    title: 'Релакс массаж',
    duration: 90,
    price: 1500,
    text: [
      'По авторской методике, вбирающий в себя техники различных традиций:',
      'Испанские, Китайские, Тайские, Турецкие',
      'Освободиться от мыслей и отключить себя от внешнего мира...',
    ],
    img: {
      src: new URL('/src/assets/img/relax-massage.jpg', import.meta.url),
      alt: 'Релакс массаж',
    },
  },
  {
    title: 'Антицеллюлитный + массаж бамбуковыми вениками',
    duration: 90,
    price: 2000,
    text: [
      'Влияет на всю нервную систему, с мощным расслабляющим эффектом, если применять   пожёстче, то эффект тонизирующий, т.е. можно хорошенько взбодрить',
    ],
    img: {
      src: new URL('/src/assets/img/bamboo-broom.jpg', import.meta.url),
      alt: 'Антицеллюлитный + массаж бамбуковыми вениками',
    },
  },
  {
    title: 'Антицеллюлитный + баночный массаж',
    duration: 90,
    price: 1500,
    text: [
      'Усилить эффект антицеллюлитного массажа, очень хорошо помогают вакуумные банки',
      'Они местно увеличивают приток крови, тем самым ускоряя обменные процессы, и процессы регенерации тканей (восстанавливают, подтягивают дряблую кожу, усиливают иммунитет благодаря обновлению крови, помогают разогнать  метаболизм',
      'Положительно влияют на организм',
      'Перед применением обязательна консультация, имеются противопоказания',
    ],
    img: {
      src: new URL('/src/assets/img/vacuum-jar.jpg', import.meta.url),
      alt: 'Антицеллюлитный + Баночный массаж',
    },
    last: 'true',
  },
];

export const certificates = [
  [
    {
      src: new URL('/src/assets/img/diplomas/diploma_1.jpg', import.meta.url),
      alt: 'diploma_1',
    },
    {
      src: new URL('/src/assets/img/diplomas/diploma_2.jpg', import.meta.url),
      alt: 'diploma_2',
    },
  ],
  [
    {
      src: new URL('/src/assets/img/diplomas/diploma_3.jpg', import.meta.url),
      alt: 'diploma_3',
    },
    {
      src: new URL('/src/assets/img/diplomas/diploma_4.jpg', import.meta.url),
      alt: 'diploma_4',
    },
  ],
  [
    {
      src: new URL('/src/assets/img/diplomas/diploma_5.jpg', import.meta.url),
      alt: 'diploma_5',
    },
    {
      src: new URL('/src/assets/img/diplomas/diploma_6.jpg', import.meta.url),
      alt: 'diploma_6',
    },
  ],
  [
    {
      src: new URL('/src/assets/img/diplomas/diploma_7.jpg', import.meta.url),
      alt: 'diploma_7',
    },
    {
      src: new URL('/src/assets/img/diplomas/diploma_8.jpg', import.meta.url),
      alt: 'diploma_8',
    },
  ],
];

export const messengerIcons = [
  {
    src: new URL('/src/assets/img/whats-app.png', import.meta.url),
    alt: 'whats-app',
    href: 'https://wa.me/+79381637099?text=Здравствуйте%2C+запишите+меня+пожалуйста+на+сеанс',
    text: 'Написать в WhatsApp',
  },
  {
    src: new URL('/src/assets/img/vkIcon.png', import.meta.url),
    alt: 'vk-icon',
    href: 'https://vk.com/massageaksay',
    text: 'Страница ВКонтакте',
  },
  {
    src: new URL('/src/assets/img/telegramIcon.png', import.meta.url),
    alt: 'telegram-icon',
    href: 'https://t.me/+79381637099',
    text: 'Написать в Telegram',
  },
];
