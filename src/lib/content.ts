export type Language = 'en' | 'ru' | 'pl';

const content = {
  header: {
    en: {
      logo: "Planner for life",
      links: ["Catalog", "Reviews", "FAQ", "Contact"],
      cta: "Get the Templates",
    },
    ru: {
      logo: "Planner for life",
      links: ["Каталог", "Отзывы", "FAQ", "Контакты"],
      cta: "Получить шаблоны",
    },
    pl: {
      logo: "Planner for life",
      links: ["Katalog", "Opinie", "FAQ", "Kontakt"],
      cta: "Pobierz szablony",
    },
  },
  hero: {
    en: {
      headline: "Optimize Your Life & Finances with Google Sheets",
      subheadline: "Download once, use forever. No subscriptions. Instant access via email with step-by-step instructions.",
      benefits: ["Instant Access", "No Hidden Fees", "Support & Guidance"],
    },
    ru: {
      headline: "Оптимизируйте свою жизнь и финансы с помощью Google Таблиц",
      subheadline: "Скачайте один раз, используйте всегда. Без подписок. Мгновенный доступ по электронной почте с пошаговыми инструкциями.",
      benefits: ["Мгновенный доступ", "Без скрытых платежей", "Поддержка и руководство"],
    },
    pl: {
      headline: "Zoptymalizuj swoje życie i finanse dzięki Arkuszom Google",
      subheadline: "Pobierz raz, używaj na zawsze. Bez subskrypcji. Natychmiastowy dostęp przez e-mail z instrukcjami krok po kroku.",
      benefits: ["Natychmiastowy dostęp", "Bez ukrytych opłat", "Wsparcie i wskazówki"],
    },
  },
  problemSolution: {
    en: {
      title: "Feeling Overwhelmed?",
      painPoints: "Drowning in tasks? Financial chaos? Confused about exams?",
      aiPrompt: {
        title: "Get Personalized Recommendations",
        description: "Tell us who you are and what you want to achieve. Our AI will suggest the best templates for you.",
        profileLabel: "I am a...",
        profiles: {
          student: "Student / Freelancer",
          entrepreneur: "Entrepreneur",
          ambitious: "Ambitious Individual",
        },
        goalsLabel: "My goals are...",
        goalsPlaceholder: "e.g., 'to manage my study schedule better', 'grow my business revenue', 'get my finances in order'",
        button: "Get Recommendations",
        resultTitle: "Our recommendations for you:",
        error: "An error occurred. Please try again.",
        noResult: "No specific recommendations found, but our 'Productivity Set' is a great start for anyone!",
      }
    },
    ru: {
      title: "Чувствуете себя подавленным?",
      painPoints: "Тонете в задачах? Финансовый хаос? Неразбериха с экзаменами?",
      aiPrompt: {
        title: "Получите персональные рекомендации",
        description: "Расскажите, кто вы и чего хотите достичь. Наш ИИ предложит лучшие шаблоны для вас.",
        profileLabel: "Я...",
        profiles: {
          student: "Студент / Фрилансер",
          entrepreneur: "Предприниматель",
          ambitious: "Амбициозная личность",
        },
        goalsLabel: "Мои цели...",
        goalsPlaceholder: "например, 'лучше управлять учебным расписанием', 'увеличить доход бизнеса', 'привести финансы в порядок'",
        button: "Получить рекомендации",
        resultTitle: "Наши рекомендации для вас:",
        error: "Произошла ошибка. Пожалуйста, попробуйте еще раз.",
        noResult: "Конкретных рекомендаций не найдено, но наш 'Набор продуктивности' - отличное начало для всех!",
      }
    },
    pl: {
      title: "Czujesz się przytłoczony?",
      painPoints: "Toniesz w zadaniach? Chaos finansowy? Zagubiony przed egzaminami?",
      aiPrompt: {
        title: "Otrzymaj spersonalizowane rekomendacje",
        description: "Powiedz nam, kim jesteś i co chcesz osiągnąć. Nasza SI zasugeruje najlepsze szablony dla Ciebie.",
        profileLabel: "Jestem...",
        profiles: {
          student: "Student / Freelancer",
          entrepreneur: "Przedsiębiorca",
          ambitious: "Ambitna osoba",
        },
        goalsLabel: "Moje cele to...",
        goalsPlaceholder: "np. 'lepiej zarządzać planem nauki', 'zwiększyć przychody firmy', 'uporządkować finanse'",
        button: "Otrzymaj rekomendacje",
        resultTitle: "Nasze rekomendacje dla Ciebie:",
        error: "Wystąpił błąd. Spróbuj ponownie.",
        noResult: "Nie znaleziono konkretnych rekomendacji, ale nasz 'Zestaw produktywności' to świetny początek dla każdego!",
      }
    }
  },
  usp: {
    en: {
      title: "Why Planner for life?",
      features: [
        { name: "Cloud-Based", description: "Works seamlessly on your Phone, Tablet, or Laptop." },
        { name: "Fast Start", description: "Get set up and running in just a few minutes." },
        { name: "Collaborative", description: "Easily share with your partner, team, or colleagues." },
        { name: "Secure", description: "Your data lives safely in your personal Google Account." },
        { name: "Flexible", description: "Fully adaptable and customizable to your unique lifestyle." },
        { name: "One-Time Purchase", description: "Pay once, own it forever. No recurring fees." },
      ]
    },
    ru: {
      title: "Почему Planner for life?",
      features: [
        { name: "Облачный доступ", description: "Работает на телефоне, планшете и ноутбуке." },
        { name: "Быстрый старт", description: "Настройка занимает всего несколько минут." },
        { name: "Совместная работа", description: "Легко делитесь с партнером, командой или коллегами." },
        { name: "Безопасно", description: "Ваши данные надежно хранятся в вашем личном аккаунте Google." },
        { name: "Гибкость", description: "Полностью адаптируется под ваш уникальный образ жизни." },
        { name: "Разовая покупка", description: "Платите один раз, владейте вечно. Никаких абонентских плат." },
      ]
    },
    pl: {
      title: "Dlaczego Planner for life?",
      features: [
        { name: "Oparty na chmurze", description: "Działa płynnie na telefonie, tablecie i laptopie." },
        { name: "Szybki start", description: "Konfiguracja i uruchomienie w zaledwie kilka minut." },
        { name: "Współpraca", description: "Łatwo udostępniaj partnerowi, zespołowi lub kolegom." },
        { name: "Bezpieczny", description: "Twoje dane są bezpieczne na Twoim osobistym koncie Google." },
        { name: "Elastyczny", description: "W pełni adaptowalny i dostosowywalny do Twojego stylu życia." },
        { name: "Jednorazowy zakup", description: "Zapłać raz, posiadaj na zawsze. Bez powtarzających się opłat." },
      ]
    }
  },
  transformation: {
    en: {
      title: "From Chaos to Clarity",
      tagline: "Change your life, not just your productivity.",
      before: {
        title: "Point A: Before Planner for life",
        points: ["Constant stress & anxiety", "600k in debt", "No clear goals", "Procrastination & distractions", "Feeling stuck and overwhelmed"],
      },
      after: {
        title: "Point B: After Planner for life",
        points: ["Clear 12-month action plan", "Income increased 4x", "Achieved dream goal", "Reinvesting income with confidence", "Confident and in control"],
      },
    },
    ru: {
      title: "От хаоса к ясности",
      tagline: "Измените свою жизнь, а не только продуктивность.",
      before: {
        title: "Точка А: До Planner for life",
        points: ["Постоянный стресс и тревога", "Долг 600 тыс.", "Нет четких целей", "Прокрастинация и отвлечения", "Ощущение застоя и перегруженности"],
      },
      after: {
        title: "Точка Б: После Planner for life",
        points: ["Четкий план действий на 12 месяцев", "Доход вырос в 4 раза", "Достиг мечты", "Уверенно реинвестирую доход", "Уверенность и контроль"],
      },
    },
    pl: {
      title: "Od chaosu do przejrzystości",
      tagline: "Zmień swoje życie, nie tylko swoją produktywność.",
      before: {
        title: "Punkt A: Przed Planner for life",
        points: ["Ciągły stres i niepokój", "Dług w wysokości 600 tys.", "Brak jasnych celów", "Prokrastynacja i rozproszenia", "Uczucie utknięcia i przytłoczenia"],
      },
      after: {
        title: "Punkt B: Po Planner for life",
        points: ["Jasny 12-miesięczny plan działania", "Dochód wzrósł 4-krotnie", "Osiągnięty wymarzony cel", "Pewne reinwestowanie dochodów", "Pewność siebie i kontrola"],
      },
    },
  },
  products: {
    en: {
      title: "Our Template Catalog",
      comingSoon: "Coming Soon",
      bundle: {
        name: "Productivity Set",
        tag: "Best Value",
        description: "Includes Financial Planner, Weekly Planner, and 3 more essential templates.",
        price: "27",
        oldPrice: "59,50",
        currency: "€",
        comingSoon: true,
      },
      items: [
        { name: "Budget Tracker", price: "9,90", currency: "€", comingSoon: true },
        { name: "Habit Tracker", price: "9,90", currency: "€", comingSoon: true },
        { name: "Financial Tracker", price: "14,90", currency: "€", comingSoon: true },
        { name: "Weekly Planner", price: "14,90", currency: "€", comingSoon: false },
      ],
      cta: "Add to Cart",
    },
    ru: {
      title: "Каталог наших шаблонов",
      comingSoon: "Скоро",
      bundle: {
        name: "Набор продуктивности",
        tag: "ВЫГОДНО",
        description: "Включает Финансовый планер, Еженедельный планер и еще 3 незаменимых шаблона.",
        price: "27",
        oldPrice: "59,50",
        currency: "€",
        comingSoon: true,
      },
      items: [
        { name: "Бюджетный трекер", price: "9,90", currency: "€", comingSoon: true },
        { name: "Трекер привычек", price: "9,90", currency: "€", comingSoon: true },
        { name: "Финансовый трекер", price: "14,90", currency: "€", comingSoon: true },
        { name: "Еженедельный планер", price: "14,90", currency: "€", comingSoon: false },
      ],
      cta: "Добавить в корзину",
    },
    pl: {
      title: "Nasz katalog szablonów",
      comingSoon: "Wkrótce",
      bundle: {
        name: "Zestaw Produktywności",
        tag: "Najlepsza oferta",
        description: "Zawiera Planer Finansowy, Planer Tygodniowy i 3 dodatkowe niezbędne szablony.",
        price: "27",
        oldPrice: "59,50",
        currency: "€",
        comingSoon: true,
      },
      items: [
        { name: "Tracker Budżetu", price: "9,90", currency: "€", comingSoon: true },
        { name: "Tracker Nawyków", price: "9,90", currency: "€", comingSoon: true },
        { name: "Tracker Finansowy", price: "14,90", currency: "€", comingSoon: true },
        { name: "Planer Tygodniowy", price: "14,90", currency: "€", comingSoon: false },
      ],
      cta: "Dodaj do koszyka",
    }
  },
  methodology: {
    en: {
      title: "A Method that Works",
      quote: "Nothing warms you better before sleep than the realization of a fully productive day and a financial safety net under your pillow.",
      author: "Planner for life Founder",
      process: [
        { name: "Set a Goal", description: "Define what you want to achieve clearly." },
        { name: "Track Progress", description: "Monitor your daily actions and inputs." },
        { name: "Get Analytics", description: "Understand your patterns with visual data." },
        { name: "Achieve Results", description: "Turn consistent effort into tangible success." },
      ],
      hook: "Combat the feeling of 'I didn't do enough today' caused by distractions from messengers and news feeds."
    },
    ru: {
      title: "Метод, который работает",
      quote: "Ничто так не согревает перед сном, как осознание полностью продуктивного дня и финансовой подушки безопасности под подушкой.",
      author: "Основатель Planner for life",
      process: [
        { name: "Поставьте цель", description: "Четко определите, чего вы хотите достичь." },
        { name: "Отслеживайте прогресс", description: "Контролируйте свои ежедневные действия." },
        { name: "Получайте аналитику", description: "Понимайте свои привычки с помощью наглядных данных." },
        { name: "Достигайте результатов", description: "Превратите постоянные усилия в ощутимый успех." },
      ],
      hook: "Боритесь с чувством 'я сегодня ничего не сделал', вызванным отвлечениями на мессенджеры и новостные ленты."
    },
    pl: {
      title: "Metoda, która działa",
      quote: "Nic nie rozgrzewa lepiej przed snem niż świadomość w pełni produktywnego dnia i finansowej siatki bezpieczeństwa pod poduszką.",
      author: "Założyciel Planner for life",
      process: [
        { name: "Ustal cel", description: "Zdefiniuj jasno, co chcesz osiągnąć." },
        { name: "Śledź postępy", description: "Monitoruj swoje codzienne działania i wkład." },
        { name: "Otrzymuj analitykę", description: "Zrozum swoje wzorce dzięki wizualnym danym." },
        { name: "Osiągaj wyniki", description: "Przekształć regularny wysiłek w namacalny sukces." },
      ],
      hook: "Zwalcz uczucie 'dzisiaj nic nie zrobiłem' spowodowane rozpraszaniem przez komunikatory i wiadomości."
    }
  },
  socialProof: {
    en: {
      title: "3,000+ People Have Transformed Their Lives",
      testimonials: [
        { name: "Sergey", avatarId: "sergey", quote: "Life literally changed to 'before' and 'after'. I finally started going to the gym regularly and see real progress." },
        { name: "Maria", avatarId: "maria", quote: "With the help of the tracker, I learned Chinese and am now going to university in China! This is a dream come true." },
        { name: "Anna", avatarId: "anna", quote: "I just love checking the boxes. It gives me an incredible feeling of productivity at the end of the day." },
        { name: "Dmitry", avatarId: "dmitry", quote: "My head is finally clear. Everything is on the shelves, both in tasks and in finances. The feeling is priceless." },
        { name: "Mikhail", avatarId: "mikhail", quote: "I used to drop important tasks all the time. The system forced me to act and follow through. Thank you!" },
        { name: "Sofia", avatarId: "sofia", quote: "Studying at university has become much easier. I feel less tired and get more done." },
      ]
    },
    ru: {
      title: "Более 3000 человек изменили свою жизнь",
      testimonials: [
        { name: "Сергей", avatarId: "sergey", quote: "Жизнь буквально разделилась на 'до' и 'после'. Наконец-то начал регулярно ходить в зал и вижу реальный прогресс." },
        { name: "Мария", avatarId: "maria", quote: "С помощью трекера я выучила китайский и теперь поступаю в университет в Китае! Это мечта." },
        { name: "Анна", avatarId: "anna", quote: "Обожаю ставить галочки. Это дает невероятное ощущение продуктивности в конце дня." },
        { name: "Дмитрий", avatarId: "dmitry", quote: "В голове наконец-то порядок. Все по полочкам, и в задачах, и в финансах. Ощущения бесценны." },
        { name: "Михаил", avatarId: "mikhail", quote: "Раньше постоянно бросал важные дела. Система заставила меня действовать и доводить до конца. Спасибо!" },
        { name: "София", avatarId: "sofia", quote: "Учеба в университете стала намного проще. Я меньше устаю и больше успеваю." },
      ]
    },
    pl: {
      title: "Ponad 3000 osób odmieniło swoje życie",
      testimonials: [
        { name: "Sergey", avatarId: "sergey", quote: "Życie dosłownie zmieniło się na 'przed' i 'po'. Wreszcie zacząłem regularnie chodzić na siłownię i widzę prawdziwe postępy." },
        { name: "Maria", avatarId: "maria", quote: "Z pomocą trackera nauczyłam się chińskiego i teraz idę na uniwersytet w Chinach! To spełnienie marzeń." },
        { name: "Anna", avatarId: "anna", quote: "Po prostu uwielbiam zaznaczać pola wyboru. Daje mi to niesamowite poczucie produktywności na koniec dnia." },
        { name: "Dmitry", avatarId: "dmitry", quote: "Moja głowa jest wreszcie czysta. Wszystko jest na swoich miejscach, zarówno w zadaniach, jak i w finansach. To uczucie jest bezcenne." },
        { name: "Mikhail", avatarId: "mikhail", quote: "Ciągle porzucałem ważne zadania. System zmusił mnie do działania i doprowadzania spraw do końca. Dziękuję!" },
        { name: "Sofia", avatarId: "sofia", quote: "Nauka na uniwersytecie stała się o wiele łatwiejsza. Czuję się mniej zmęczona i więcej robię." },
      ]
    }
  },
  upsell: {
    en: {
      title: "Need a Custom Solution?",
      description: "We build powerful, custom Google Sheets solutions for business analytics and private finance management.",
      cta: "Contact us on Telegram",
    },
    ru: {
      title: "Нужно индивидуальное решение?",
      description: "Мы создаем мощные, индивидуальные решения на базе Google Таблиц для бизнес-аналитики и управления личными финансами.",
      cta: "Напишите нам в Telegram",
    },
    pl: {
      title: "Potrzebujesz niestandardowego rozwiązania?",
      description: "Tworzymy potężne, niestandardowe rozwiązania w Arkuszach Google do analityki biznesowej i zarządzania finansami osobistymi.",
      cta: "Skontaktuj się z nami na Telegramie",
    }
  },
  faq: {
    en: {
      title: "Frequently Asked Questions",
      questions: [
        { q: "What if I've never used Google Sheets?", a: "No problem! Our templates come with simple, step-by-step instructions. If you can use a web browser, you can use Planner for life." },
        { q: "How do I receive the template after purchase?", a: "You'll receive an email immediately with a link to copy the template directly into your own Google account." },
        { q: "Are the templates mobile-friendly?", a: "Yes! They work perfectly on any device. Just download the free Google Sheets app for your phone or tablet." },
        { q: "Do I need to install any software?", a: "No. Everything is cloud-based and runs in your browser or the Google Sheets app. No installation required." },
        { q: "What is your refund and support policy?", a: "Due to the digital nature of our products, we don't offer refunds. However, we provide dedicated support to help you with any questions or issues." },
        { q: "Can I share the template with my partner or team?", a: "Absolutely. You can use Google Sheets' built-in sharing features to collaborate with anyone you wish." },
      ]
    },
    ru: {
      title: "Часто задаваемые вопросы",
      questions: [
        { q: "Что делать, если я никогда не пользовался Google Таблицами?", a: "Нет проблем! Наши шаблоны поставляются с простыми, пошаговыми инструкциями. Если вы умеете пользоваться браузером, вы справитесь и с Planner for life." },
        { q: "Как я получу шаблон после покупки?", a: "Вы сразу же получите электронное письмо со ссылкой для копирования шаблона прямо в ваш аккаунт Google." },
        { q: "Адаптированы ли шаблоны для мобильных устройств?", a: "Да! Они отлично работают на любом устройстве. Просто скачайте бесплатное приложение Google Таблицы для вашего телефона или планшета." },
        { q: "Нужно ли устанавливать какое-либо программное обеспечение?", a: "Нет. Все работает в облаке, в вашем браузере или в приложении Google Таблицы. Установка не требуется." },
        { q: "Какова ваша политика возврата и поддержки?", a: "Из-за цифровой природы наших продуктов мы не предлагаем возврат средств. Однако мы предоставляем специальную поддержку, чтобы помочь вам с любыми вопросами или проблемами." },
        { q: "Могу ли я поделиться шаблоном с партнером или командой?", a: "Конечно. Вы можете использовать встроенные функции общего доступа Google Таблиц для совместной работы с кем угодно." },
      ]
    },
    pl: {
      title: "Często zadawane pytania",
      questions: [
        { q: "Co jeśli nigdy nie korzystałem/am z Arkuszy Google?", a: "Żaden problem! Nasze szablony zawierają proste instrukcje krok po kroku. Jeśli potrafisz korzystać z przeglądarki internetowej, poradzisz sobie z Planner for life." },
        { q: "Jak otrzymam szablon po zakupie?", a: "Natychmiast otrzymasz wiadomość e-mail z linkiem do skopiowania szablonu bezpośrednio na Twoje konto Google." },
        { q: "Czy szablony są przyjazne dla urządzeń mobilnych?", a: "Tak! Działają idealnie na każdym urządzeniu. Wystarczy pobrać darmową aplikację Arkusze Google на swój telefon lub tablet." },
        { q: "Czy muszę instalować jakieś oprogramowanie?", a: "Nie. Wszystko działa w chmurze, w przeglądarce lub aplikacji Arkusze Google. Instalacja nie jest wymagana." },
        { q: "Jaka jest wasza polityka zwrotów i wsparcia?", a: "Ze względu na cyfrowy charakter naszych produktów nie oferujemy zwrotów. Zapewniamy jednak dedykowane wsparcie, aby pomóc w razie jakichkolwiek pytań lub problemów." },
        { q: "Czy mogę udostępnić szablon partnerowi lub zespołowi?", a: "Oczywiście. Możesz użyć wbudowanych funkcji udostępniania Arkuszy Google, aby współpracować z kimkolwiek zechcesz." },
      ]
    }
  },
  footer: {
    en: {
      policy: "Privacy Policy",
      offer: "Public Offer",
      copyright: "© 2024 Planner for life. All rights reserved.",
    },
    ru: {
      policy: "Политика конфиденциальности",
      offer: "Публичная оферта",
      copyright: "© 2024 Planner for life. Все права защищены.",
    },
    pl: {
      policy: "Polityka prywatności",
      offer: "Oferta publiczna",
      copyright: "© 2024 Planner for life. Wszelkie prawa zastrzeżone.",
    }
  }
};

export default content;
