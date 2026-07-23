const COUNTRIES_DATA = {
  countries: [
    // ===== ЕВРОПА =====
    {
      id: "germany",
      name: "Германия",
      flag: "🇩🇪",
      flagImg: "https://flagcdn.com/w160/de.png",
      photo: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1920&q=80",
      region: "europe",
      visaType: "Шенгенская виза",
      price: "от 8 500 ₽",
      duration: "до 90 дней",
      processingTime: "5-10 рабочих дней",
      rating: 4.9,
      reviews: 1240,
      documents: [
        "Загранпаспорт (срок действия от 3 месяцев)",
        "2 цветные фотографии 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля и авиабилетов",
        "Страховой полис на 30 000 €"
      ],
      description: "Германия — одна из самых посещаемых стран Европы. Шенгенская виза позволяет находиться в стране до 90 дней в течение полугода."
    },
    {
      id: "france",
      name: "Франция",
      flag: "🇫🇷",
      flagImg: "https://flagcdn.com/w160/fr.png",
      photo: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80",
      region: "europe",
      visaType: "Шенгенская виза",
      price: "от 8 500 ₽",
      duration: "до 90 дней",
      processingTime: "5-10 рабочих дней",
      rating: 4.9,
      reviews: 1100,
      documents: [
        "Загранпаспорт (срок действия от 3 месяцев)",
        "2 цветные фотографии 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля и авиабилетов",
        "Страховой полис на 30 000 €"
      ],
      description: "Франция привлекает туристов своей культурой, кухней и историей. Шенгенская виза даёт доступ ко всей Шенгенской зоне."
    },
    {
      id: "italy",
      name: "Италия",
      flag: "🇮🇹",
      flagImg: "https://flagcdn.com/w160/it.png",
      photo: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80",
      region: "europe",
      visaType: "Шенгенская виза",
      price: "от 8 500 ₽",
      duration: "до 90 дней",
      processingTime: "5-10 рабочих дней",
      rating: 4.9,
      reviews: 980,
      documents: [
        "Загранпаспорт (срок действия от 3 месяцев)",
        "2 цветные фотографии 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля и авиабилетов",
        "Страховой полис на 30 000 €"
      ],
      description: "Италия — страна с богатой историей и культурой. Рим, Венеция, Флоренция — тысячи достопримечательностей."
    },
    {
      id: "spain",
      name: "Испания",
      flag: "🇪🇸",
      flagImg: "https://flagcdn.com/w160/es.png",
      photo: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920&q=80",
      region: "europe",
      visaType: "Шенгенская виза",
      price: "от 8 500 ₽",
      duration: "до 90 дней",
      processingTime: "5-10 рабочих дней",
      rating: 4.8,
      reviews: 870,
      documents: [
        "Загранпаспорт (срок действия от 3 месяцев)",
        "2 цветные фотографии 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля и авиабилетов",
        "Страховой полис на 30 000 €"
      ],
      description: "Испания славится своими пляжами, архитектурой и культурой. Барселона, Мадрид, Бильбао — города с уникальной атмосферой."
    },
    {
      id: "uk",
      name: "Великобритания",
      flag: "🇬🇧",
      flagImg: "https://flagcdn.com/w160/gb.png",
      photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=80",
      region: "europe",
      visaType: "Standard Visitor Visa",
      price: "от 12 000 ₽",
      duration: "до 6 месяцев",
      processingTime: "15-20 рабочих дней",
      rating: 4.7,
      reviews: 650,
      documents: [
        "Загранпаспорт (срок действия от 6 месяцев)",
        "Анкета онлайн",
        "Фотография 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля"
      ],
      description: "Виза в Великобританию для туризма и краткосрочных визитов. Решение обычно принимается в течение 3 недель."
    },
    {
      id: "portugal",
      name: "Португалия",
      flag: "🇵🇹",
      flagImg: "https://flagcdn.com/w160/pt.png",
      photo: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80",
      region: "europe",
      visaType: "Шенгенская виза",
      price: "от 8 500 ₽",
      duration: "до 90 дней",
      processingTime: "5-10 рабочих дней",
      rating: 4.8,
      reviews: 520,
      documents: [
        "Загранпаспорт (срок действия от 3 месяцев)",
        "2 цветные фотографии 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля и авиабилетов",
        "Страховой полис на 30 000 €"
      ],
      description: "Португалия — Лиссабон, Порту, Алгарве. Теплый климат, доступные цены и потрясающая кухня."
    },
    {
      id: "greece",
      name: "Греция",
      flag: "🇬🇷",
      flagImg: "https://flagcdn.com/w160/gr.png",
      photo: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&q=80",
      region: "europe",
      visaType: "Шенгенская виза",
      price: "от 8 500 ₽",
      duration: "до 90 дней",
      processingTime: "5-10 рабочих дней",
      rating: 4.9,
      reviews: 780,
      documents: [
        "Загранпаспорт (срок действия от 3 месяцев)",
        "2 цветные фотографии 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля и авиабилетов",
        "Страховой полис на 30 000 €"
      ],
      description: "Греция — острова, античные руины и средиземноморская кухня. Санторини, Миконос, Афины — мечта путешественника."
    },
    {
      id: "croatia",
      name: "Хорватия",
      flag: "🇭🇷",
      flagImg: "https://flagcdn.com/w160/hr.png",
      photo: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=1920&q=80",
      region: "europe",
      visaType: "Шенгенская виза",
      price: "от 8 500 ₽",
      duration: "до 90 дней",
      processingTime: "5-10 рабочих дней",
      rating: 4.8,
      reviews: 410,
      documents: [
        "Загранпаспорт (срок действия от 3 месяцев)",
        "2 цветные фотографии 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля и авиабилетов",
        "Страховой полис на 30 000 €"
      ],
      description: "Хорватия — Дубровник, Сплит, Хвар. Адриатическое побережье, средневековые города и национальные парки."
    },
    {
      id: "czech",
      name: "Чехия",
      flag: "🇨🇿",
      flagImg: "https://flagcdn.com/w160/cz.png",
      photo: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1920&q=80",
      region: "europe",
      visaType: "Шенгенская виза",
      price: "от 8 500 ₽",
      duration: "до 90 дней",
      processingTime: "5-10 рабочих дней",
      rating: 4.7,
      reviews: 630,
      documents: [
        "Загранпаспорт (срок действия от 3 месяцев)",
        "2 цветные фотографии 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля и авиабилетов",
        "Страховой полис на 30 000 €"
      ],
      description: "Чехия — Прага, Чески-Крумлов, Карловы Вары. Средневековая архитектура, пиво и термальные источники."
    },
    {
      id: "netherlands",
      name: "Нидерланды",
      flag: "🇳🇱",
      flagImg: "https://flagcdn.com/w160/nl.png",
      photo: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=80",
      region: "europe",
      visaType: "Шенгенская виза",
      price: "от 8 500 ₽",
      duration: "до 90 дней",
      processingTime: "5-10 рабочих дней",
      rating: 4.7,
      reviews: 540,
      documents: [
        "Загранпаспорт (срок действия от 3 месяцев)",
        "2 цветные фотографии 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Бронирование отеля и авиабилетов",
        "Страховой полис на 30 000 €"
      ],
      description: "Нидерланды — Амстердам, ветряные мельницы, тюльпаны. Велосипедная культура и либеральные традиции."
    },

    // ===== АМЕРИКА =====
    {
      id: "usa",
      name: "США",
      flag: "🇺🇸",
      flagImg: "https://flagcdn.com/w160/us.png",
      photo: "https://images.unsplash.com/photo-1485738422979-f5c462d49f04?w=1920&q=80",
      region: "americas",
      visaType: "B1/B2 виза",
      price: "от 15 000 ₽",
      duration: "до 6 месяцев",
      processingTime: "10-15 рабочих дней",
      rating: 4.8,
      reviews: 890,
      documents: [
        "Загранпаспорт (срок действия от 6 месяцев)",
        "Анкета DS-160",
        "Фотография 5x5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Приглашение или бронирование"
      ],
      description: "Виза в США категории B1/B2 предназначена для краткосрочных деловых поездок и туризма. Срок действия визы — до 10 лет."
    },
    {
      id: "canada",
      name: "Канада",
      flag: "🇨🇦",
      flagImg: "https://flagcdn.com/w160/ca.png",
      photo: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&q=80",
      region: "americas",
      visaType: "Temporary Resident Visa",
      price: "от 14 000 ₽",
      duration: "до 6 месяцев",
      processingTime: "15-25 рабочих дней",
      rating: 4.8,
      reviews: 720,
      documents: [
        "Загранпаспорт",
        "Анкета онлайн",
        "Фотография 3.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Письмо о связи с родиной"
      ],
      description: "Виза в Канаду для туризма, посещения родственников или краткосрочных деловых поездок."
    },
    {
      id: "mexico",
      name: "Мексика",
      flag: "🇲🇽",
      flagImg: "https://flagcdn.com/w160/mx.png",
      photo: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1920&q=80",
      region: "americas",
      visaType: "Туристическая виза",
      price: "от 7 000 ₽",
      duration: "до 180 дней",
      processingTime: "5-7 рабочих дней",
      rating: 4.6,
      reviews: 380,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография",
        "Бронирование отеля",
        "Обратный билет",
        "Выписка с банковского счёта"
      ],
      description: "Мексика — Канкун, Плайя-дель-Кармен, Мехико. Пляжи Карибского моря, пирамиды и богатая культура."
    },
    {
      id: "brazil",
      name: "Бразилия",
      flag: "🇧🇷",
      flagImg: "https://flagcdn.com/w160/br.png",
      photo: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&q=80",
      region: "americas",
      visaType: "Туристическая виза",
      price: "от 9 000 ₽",
      duration: "до 90 дней",
      processingTime: "10-15 рабочих дней",
      rating: 4.7,
      reviews: 340,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография",
        "Бронирование отеля",
        "Обратный билет",
        "Выписка с банковского счёта"
      ],
      description: "Бразилия — Рио-де-Жанейро, Сан-Паулу, Амазонка. Сamba, карнавал и потрясающие пляжи."
    },
    {
      id: "argentina",
      name: "Аргентина",
      flag: "🇦🇷",
      flagImg: "https://flagcdn.com/w160/ar.png",
      photo: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1920&q=80",
      region: "americas",
      visaType: "Туристическая виза",
      price: "от 8 000 ₽",
      duration: "до 90 дней",
      processingTime: "7-10 рабочих дней",
      rating: 4.6,
      reviews: 280,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография",
        "Бронирование отеля",
        "Обратный билет",
        "Выписка с банковского счёта"
      ],
      description: "Аргентина — Буэнос-Айрес, Патагония, Игуасу. Танго, стейки и грандиозные пейзажи."
    },

    // ===== АЗИЯ =====
    {
      id: "japan",
      name: "Япония",
      flag: "🇯🇵",
      flagImg: "https://flagcdn.com/w160/jp.png",
      photo: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80",
      region: "asia",
      visaType: "Туристическая виза",
      price: "от 9 000 ₽",
      duration: "до 90 дней",
      processingTime: "5-7 рабочих дней",
      rating: 4.9,
      reviews: 760,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография 4.5x4.5",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Программа пребывания"
      ],
      description: "Япония — уникальное сочетание древних традиций и современных технологий. Токио, Киото, Осака."
    },
    {
      id: "china",
      name: "Китай",
      flag: "🇨🇳",
      flagImg: "https://flagcdn.com/w160/cn.png",
      photo: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80",
      region: "asia",
      visaType: "Туристическая виза",
      price: "от 8 000 ₽",
      duration: "до 30 дней",
      processingTime: "5-7 рабочих дней",
      rating: 4.6,
      reviews: 450,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография",
        "Приглашение или бронирование",
        "Выписка с банковского счёта",
        "Билеты туда-обратно"
      ],
      description: "Китай — Пекин, Шанхай, Великая Китайская стена. Тысячи лет истории и современные мегаполисы."
    },
    {
      id: "south-korea",
      name: "Южная Корея",
      flag: "🇰🇷",
      flagImg: "https://flagcdn.com/w160/kr.png",
      photo: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1920&q=80",
      region: "asia",
      visaType: "Туристическая виза",
      price: "от 7 000 ₽",
      duration: "до 90 дней",
      processingTime: "5-7 рабочих дней",
      rating: 4.7,
      reviews: 540,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Программа пребывания"
      ],
      description: "Южная Корея — Сеул, Пусан, остров Чеджу. K-pop, корейская кухня и технологический бум."
    },
    {
      id: "thailand",
      name: "Таиланд",
      flag: "🇹🇭",
      flagImg: "https://flagcdn.com/w160/th.png",
      photo: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&q=80",
      region: "asia",
      visaType: "Туристическая виза",
      price: "от 4 500 ₽",
      duration: "до 60 дней",
      processingTime: "3-5 рабочих дней",
      rating: 4.6,
      reviews: 1350,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография",
        "Бронирование отеля",
        "Обратный билет",
        "Выписка с банковского счёта"
      ],
      description: "Таиланд — популярное направление для отдыха. Пляжи, храмы, отличная кухня и доступные цены."
    },
    {
      id: "uae",
      name: "ОАЭ",
      flag: "🇦🇪",
      flagImg: "https://flagcdn.com/w160/ae.png",
      photo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
      region: "asia",
      visaType: "Туристическая виза",
      price: "от 6 000 ₽",
      duration: "до 30 дней",
      processingTime: "3-5 рабочих дней",
      rating: 4.8,
      reviews: 920,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография",
        "Бронирование отеля",
        "Обратный билет",
        "Выписка с банковского счёта"
      ],
      description: "ОАЭ — Дубай и Абу-Даби. Роскошные отели, шопинг, пляжи и современная архитектура."
    },
    {
      id: "vietnam",
      name: "Вьетнам",
      flag: "🇻🇳",
      flagImg: "https://flagcdn.com/w160/vn.png",
      photo: "https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80",
      region: "asia",
      visaType: "Туристическая виза",
      price: "от 4 000 ₽",
      duration: "до 30 дней",
      processingTime: "3-5 рабочих дней",
      rating: 4.5,
      reviews: 620,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография",
        "Бронирование отеля",
        "Обратный билет",
        "Выписка с банковского счёта"
      ],
      description: "Вьетнам — Ханой, Хошимин, Халонг Бэй. Уникальная кухня, рисовые террасы и пляжи."
    },
    {
      id: "indonesia",
      name: "Индонезия",
      flag: "🇮🇩",
      flagImg: "https://flagcdn.com/w160/id.png",
      photo: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
      region: "asia",
      visaType: "Туристическая виза",
      price: "от 5 000 ₽",
      duration: "до 30 дней",
      processingTime: "3-5 рабочих дней",
      rating: 4.7,
      reviews: 780,
      documents: [
        "Загранпаспорт",
        "Анкета",
        "Фотография",
        "Бронирование отеля",
        "Обратный билет",
        "Выписка с банковского счёта"
      ],
      description: "Индонезия — Бали, Джакарта, Комодо. Тропические острова, вулканы и древние храмы."
    },
    {
      id: "turkey",
      name: "Турция",
      flag: "🇹🇷",
      flagImg: "https://flagcdn.com/w160/tr.png",
      photo: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1920&q=80",
      region: "asia",
      visaType: "Электронная виза",
      price: "от 3 500 ₽",
      duration: "до 90 дней",
      processingTime: "1-2 рабочих дня",
      rating: 4.7,
      reviews: 1580,
      documents: [
        "Загранпаспорт (срок действия от 6 месяцев)",
        "Анкета онлайн",
        "Фотография",
        "Бронирование отеля",
        "Обратный билет"
      ],
      description: "Турция — Стамбул, Каппадокия, Анталия. Восточная экзотика, пляжи и невероятная кухня."
    },

    // ===== ОКЕАНИЯ =====
    {
      id: "australia",
      name: "Австралия",
      flag: "🇦🇺",
      flagImg: "https://flagcdn.com/w160/au.png",
      photo: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&q=80",
      region: "oceania",
      visaType: "Visitor Visa (subclass 600)",
      price: "от 16 000 ₽",
      duration: "до 12 месяцев",
      processingTime: "20-30 рабочих дней",
      rating: 4.7,
      reviews: 430,
      documents: [
        "Загранпаспорт",
        "Анкета онлайн",
        "Фотография",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Страховой полис"
      ],
      description: "Австралия — уникальная страна с природными достопримечательностями и развитой экономикой."
    },
    {
      id: "new-zealand",
      name: "Новая Зеландия",
      flag: "🇳🇿",
      flagImg: "https://flagcdn.com/w160/nz.png",
      photo: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1920&q=80",
      region: "oceania",
      visaType: "Visitor Visa",
      price: "от 14 000 ₽",
      duration: "до 90 дней",
      processingTime: "15-20 рабочих дней",
      rating: 4.8,
      reviews: 310,
      documents: [
        "Загранпаспорт",
        "Анкета онлайн",
        "Фотография",
        "Справка с места работы",
        "Выписка с банковского счёта",
        "Страховой полис"
      ],
      description: "Новая Зеландия — Средиземье из Властелина колец. Фьорды, горы, озера и виноградники."
    }
  ]
};

function createCountryCard(country) {
  return `
    <a href="country.html?id=${country.id}" class="country-card fade-in">
      <div class="country-card-photo">
        <img src="${country.photo}" alt="${country.name}" loading="lazy">
        <div class="country-card-overlay">
          <div class="country-card-flag-badge">
            <img src="${country.flagImg}" alt="Флаг ${country.name}" loading="lazy">
          </div>
        </div>
      </div>
      <div class="country-card-body">
        <h3>${country.name}</h3>
        <span class="country-card-visa">${country.visaType}</span>
        <div class="country-details">
          <div class="detail-row">
            <span class="label">Стоимость</span>
            <span class="value">${country.price}</span>
          </div>
          <div class="detail-row">
            <span class="label">Срок пребывания</span>
            <span class="value">${country.duration}</span>
          </div>
          <div class="detail-row">
            <span class="label">Оформление</span>
            <span class="value">${country.processingTime}</span>
          </div>
          <div class="detail-row">
            <span class="label">Рейтинг</span>
            <span class="value">⭐ ${country.rating} (${country.reviews})</span>
          </div>
        </div>
      </div>
    </a>
  `;
}

function loadPopularCountries() {
  const container = document.getElementById('popular-countries');
  if (!container) return;
  const popular = COUNTRIES_DATA.countries.slice(0, 6);
  container.innerHTML = popular.map(createCountryCard).join('');
}

function loadAllCountries(region = 'all') {
  const container = document.getElementById('countries-grid');
  if (!container) return;
  let countries = COUNTRIES_DATA.countries;
  if (region !== 'all') {
    countries = countries.filter(c => c.region === region);
  }
  container.innerHTML = countries.map(createCountryCard).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  container.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

function loadCountryPage() {
  const params = new URLSearchParams(window.location.search);
  const countryId = params.get('id');
  if (!countryId) { window.location.href = 'countries.html'; return; }
  const country = COUNTRIES_DATA.countries.find(c => c.id === countryId);
  if (!country) { window.location.href = 'countries.html'; return; }

  document.title = `${country.name} — VisaTourService`;

  document.getElementById('country-hero-content').innerHTML = `
    <img src="${country.photo}" alt="${country.name}" style="width: 100%; max-width: 800px; height: 300px; object-fit: cover; border-radius: 16px; margin-bottom: 24px; box-shadow: 0 12px 40px rgba(0,0,0,0.3);">
    <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 12px;">
      <img src="${country.flagImg}" alt="Флаг ${country.name}" style="width: 56px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
      <h1>Виза в ${country.name}</h1>
    </div>
    <p>${country.visaType} &nbsp;&bull;&nbsp; ⭐ ${country.rating} (${country.reviews} отзывов)</p>
  `;

  document.getElementById('country-description').innerHTML = `
    <p style="color: var(--text-secondary); line-height: 1.8; font-size: 16px;">${country.description}</p>
  `;
  const docsList = document.getElementById('country-documents');
  docsList.innerHTML = country.documents.map(doc => `<li style="margin-bottom: 10px; color: var(--text-secondary); font-size: 15px;">${doc}</li>`).join('');
  document.getElementById('visa-type').textContent = country.visaType;
  document.getElementById('visa-price').textContent = country.price;
  document.getElementById('visa-duration').textContent = country.duration;
  document.getElementById('visa-processing').textContent = country.processingTime;
}
