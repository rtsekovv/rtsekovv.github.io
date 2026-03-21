const translations = {
    en: {
        nav: { about: 'About', services: 'Services', testimonials: 'Reviews', contact: 'Contact', cta: 'Consultation', mobileCta: 'Book consultation' },
        hero: { badge: 'Accepting new clients', title1: 'Investments that', title2: 'work for you', subtitle: 'Personal wealth management strategies with above-market returns. No chaos, full control.', cta: 'Free consultation', ctaSecondary: 'View services', stat1: 'under management', stat2: 'happy clients', stat3: 'avg return' },
        about: { tag: 'About me', title: '7 years helping people build financial systems', p1: 'I don\'t sell "magic" investments. I help you understand finances, build a clear system, and make conscious decisions.', p2: 'My approach balances capital protection with reasonable growth. No aggressive schemes, no "10x in a month" promises.', cert1: 'CFA Level II', cert2: '150+ clients', cert3: '7 years exp' },
        services: { tag: 'Services', title: 'What I offer', subtitle: 'Comprehensive approach to personal finance management', item1: { title: 'Financial Audit', desc: 'Complete analysis of your situation: income, expenses, assets, liabilities. Finding growth points.' }, item2: { title: 'Financial Plan', desc: 'Personal strategy for 1-5 years with specific steps and tools.' }, item3: { title: 'Investment Portfolio', desc: 'Selecting instruments for your goals and risk profile. ETFs, bonds, stocks.' }, item4: { title: 'Insurance Protection', desc: 'Risk analysis and insurance product selection to protect capital and family.' }, item5: { title: 'Tax Optimization', desc: 'Legal ways to reduce tax burden. Tax-advantaged accounts, deductions, structuring.' }, item6: { title: 'Mentorship', desc: 'Regular support: monthly calls, Q&A, plan adjustments.' } },
        testimonials: { tag: 'Reviews', title: 'What clients say', item1: { text: '"Finally I understand where money goes and how to grow it. Saved my first emergency fund in 6 months."', name: 'Alexander M.', role: 'IT Specialist' }, item2: { text: '"Was afraid to invest — seemed complex and risky. Now I have a diversified portfolio and peace of mind."', name: 'Victoria S.', role: 'Entrepreneur' }, item3: { text: '"Optimized taxes — saved more than the consultation cost. Recommend to everyone who values their money."', name: 'Michael K.', role: 'Doctor' } },
        faq: { title: 'FAQ', q1: { q: 'What\'s the minimum amount to start?', a: 'You can start with any amount — even $100. Consistency and strategy matter more than the first deposit size.' }, q2: { q: 'Do I need special knowledge?', a: 'No. I explain everything in simple terms and give step-by-step instructions anyone can follow.' }, q3: { q: 'How long does it take?', a: 'Consultation — 1-2 hours. Financial plan — 2-3 weeks. Mentorship — from 3 months.' }, q4: { q: 'Do you guarantee returns?', a: 'No — and no one can honestly guarantee. I guarantee a systematic approach and transparency.' }, q5: { q: 'Do you work remotely?', a: 'Yes, 100% online — Zoom, Telegram, Google Docs. Geography doesn\'t matter.' } },
        video: { tag: 'Education', title: 'How the stock market works', subtitle: 'A short video about the basics of investing that will help you make informed decisions', playText: 'Watch video', duration: '3:45', feature1Title: 'No jargon', feature1Desc: 'Explained in simple terms', feature2Title: 'Real examples', feature2Desc: 'Practice, not theory', feature3Title: 'Quick start', feature3Desc: 'Start in 5 minutes' },
        certs: { tag: 'Qualifications', title: 'Certificates & Licenses', subtitle: 'Verified expertise in finance and investments', cert1: 'CFA Level II', cert2: 'Financial Planning', cert3: 'Risk Management', cert4: 'Investment Analysis', cert5: 'Portfolio Management' },
        contact: { tag: 'Contact', title: 'Ready to start?', subtitle: 'Book a free 15-minute consultation. We\'ll discuss your situation and determine how I can help.', cta: 'Telegram', email: 'hello@example.com', location: 'Remote, worldwide', hours: 'Response within 24 hours', formTitle: 'Leave a request', nameLabel: 'Name', namePlaceholder: 'What\'s your name?', nameError: 'Please enter your name', contactHint: 'Please provide at least one contact method: Email, Telegram or Instagram', emailLabel: 'Email', emailPlaceholder: 'your@email.com', emailError: 'Enter a valid email', telegramLabel: 'Telegram', instagramLabel: 'Instagram', usernamePlaceholder: 'username', messageLabel: 'Message', messagePlaceholder: 'Tell me about your goals or ask a question...', contactError: 'Please provide at least one contact method', successMessage: 'Request sent! I\'ll contact you soon.', submitBtn: 'Send request', privacyText: 'By clicking the button, you agree to the', privacyLink: 'privacy policy' },
        footer: { copyright: '© 2024 Financial Consultant. All rights reserved.', privacy: 'Privacy', terms: 'Terms' }
    },
    uk: {
        nav: { about: 'Про мене', services: 'Послуги', testimonials: 'Відгуки', contact: 'Контакти', cta: 'Консультація', mobileCta: 'Записатись' },
        hero: { badge: 'Приймаю нових клієнтів', title1: 'Інвестиції, які', title2: 'працюють на вас', subtitle: 'Персональні стратегії управління капіталом з дохідністю вище ринку. Без хаосу, з повним контролем.', cta: 'Безкоштовна консультація', ctaSecondary: 'Дивитись послуги', stat1: 'під управлінням', stat2: 'задоволених клієнтів', stat3: 'середня дохідність' },
        about: { tag: 'Про мене', title: '7 років допомагаю людям будувати фінансову систему', p1: 'Я не продаю «чарівні» інвестиції. Я допомагаю розібратися у фінансах, побудувати зрозумілу систему та приймати рішення усвідомлено.', p2: 'Мій підхід — баланс між захистом капіталу та розумним зростанням. Без агресивних схем, без обіцянок «х10 за місяць».', cert1: 'CFA Level II', cert2: '150+ клієнтів', cert3: '7 років досвіду' },
        services: { tag: 'Послуги', title: 'Що я пропоную', subtitle: 'Комплексний підхід до управління особистими фінансами', item1: { title: 'Фінансовий аудит', desc: 'Повний аналіз поточної ситуації: доходи, витрати, активи, зобов\'язання.' }, item2: { title: 'Фінансовий план', desc: 'Персональна стратегія на 1-5 років з конкретними кроками.' }, item3: { title: 'Інвестиційний портфель', desc: 'Підбір інструментів під ваші цілі та ризик-профіль.' }, item4: { title: 'Страховий захист', desc: 'Аналіз ризиків та підбір страхових продуктів.' }, item5: { title: 'Податкова оптимізація', desc: 'Легальні способи знизити податкове навантаження.' }, item6: { title: 'Менторство', desc: 'Регулярний супровід: щомісячні дзвінки, відповіді на питання.' } },
        testimonials: { tag: 'Відгуки', title: 'Що кажуть клієнти', item1: { text: '"Нарешті я розумію, куди йдуть гроші і як їх примножити."', name: 'Олександр М.', role: 'IT-спеціаліст' }, item2: { text: '"Боялася інвестувати — здавалося складним. Тепер маю диверсифікований портфель."', name: 'Вікторія С.', role: 'Підприємець' }, item3: { text: '"Оптимізували податки — зекономив більше, ніж коштувала консультація."', name: 'Михайло К.', role: 'Лікар' } },
        faq: { title: 'Часті питання', q1: { q: 'З якої суми можна почати?', a: 'Почати можна з будь-якої суми. Важливіше регулярність та стратегія.' }, q2: { q: 'Чи потрібні спеціальні знання?', a: 'Ні. Я пояснюю все простою мовою.' }, q3: { q: 'Як довго триває робота?', a: 'Консультація — 1-2 години. Фінансовий план — 2-3 тижні.' }, q4: { q: 'Чи гарантуєте ви дохідність?', a: 'Ні — і ніхто не може чесно гарантувати.' }, q5: { q: 'Чи працюєте ви віддалено?', a: 'Так, 100% онлайн.' } },
        video: { tag: 'Освіта', title: 'Як працює фондовий ринок', subtitle: 'Коротке відео про базові принципи інвестування, які допоможуть вам приймати усвідомлені рішення', playText: 'Дивитись відео', duration: '3:45', feature1Title: 'Без складних термінів', feature1Desc: 'Пояснюю простою мовою', feature2Title: 'Реальні приклади', feature2Desc: 'Практика, а не теорія', feature3Title: 'Швидкий старт', feature3Desc: 'Почніть за 5 хвилин' },
        certs: { tag: 'Кваліфікація', title: 'Сертифікати та ліцензії', subtitle: 'Підтверджена експертиза у сфері фінансів та інвестицій', cert1: 'CFA Level II', cert2: 'Фінансове планування', cert3: 'Ризик-менеджмент', cert4: 'Інвестиційний аналіз', cert5: 'Управління портфелем' },
        contact: { tag: 'Контакти', title: 'Готові почати?', subtitle: 'Запишіться на безкоштовну 15-хвилинну консультацію.', cta: 'Telegram', email: 'hello@example.com', location: 'Віддалено, весь світ', hours: 'Відповідаю протягом 24 годин', formTitle: 'Залишити заявку', nameLabel: 'Ім\'я', namePlaceholder: 'Як вас звати?', nameError: 'Будь ласка, введіть ваше ім\'я', contactHint: 'Вкажіть хоча б один спосіб зв\'язку: Email, Telegram або Instagram', emailLabel: 'Email', emailPlaceholder: 'your@email.com', emailError: 'Введіть коректний email', telegramLabel: 'Telegram', instagramLabel: 'Instagram', usernamePlaceholder: 'username', messageLabel: 'Повідомлення', messagePlaceholder: 'Розкажіть про ваші цілі або задайте питання...', contactError: 'Вкажіть хоча б один спосіб зв\'язку', successMessage: 'Заявку надіслано! Я зв\'яжусь з вами найближчим часом.', submitBtn: 'Надіслати заявку', privacyText: 'Натискаючи кнопку, ви погоджуєтесь з', privacyLink: 'політикою конфіденційності' },
        footer: { copyright: '© 2024 Фінансовий консультант. Усі права захищено.', privacy: 'Конфіденційність', terms: 'Умови' }
    },
    ru: {
        nav: { about: 'Обо мне', services: 'Услуги', testimonials: 'Отзывы', contact: 'Контакты', cta: 'Консультация', mobileCta: 'Записаться' },
        hero: { badge: 'Принимаю новых клиентов', title1: 'Инвестиции, которые', title2: 'работают на вас', subtitle: 'Персональные стратегии управления капиталом с доходностью выше рынка. Без хаоса, с полным контролем.', cta: 'Бесплатная консультация', ctaSecondary: 'Смотреть услуги', stat1: 'под управлением', stat2: 'довольных клиентов', stat3: 'средняя доходность' },
        about: { tag: 'Обо мне', title: '7 лет помогаю людям строить финансовую систему', p1: 'Я не продаю «волшебные» инвестиции. Я помогаю разобраться в финансах, построить понятную систему и принимать решения осознанно.', p2: 'Мой подход — это баланс между защитой капитала и разумным ростом. Без агрессивных схем, без обещаний «х10 за месяц».', cert1: 'CFA Level II', cert2: '150+ клиентов', cert3: '7 лет опыта' },
        services: { tag: 'Услуги', title: 'Что я предлагаю', subtitle: 'Комплексный подход к управлению личными финансами', item1: { title: 'Финансовый аудит', desc: 'Полный анализ текущей ситуации: доходы, расходы, активы, обязательства. Находим точки роста.' }, item2: { title: 'Финансовый план', desc: 'Персональная стратегия на 1-5 лет с конкретными шагами и инструментами.' }, item3: { title: 'Инвестиционный портфель', desc: 'Подбор инструментов под ваши цели и риск-профиль. ETF, облигации, акции.' }, item4: { title: 'Страховая защита', desc: 'Анализ рисков и подбор страховых продуктов для защиты капитала и семьи.' }, item5: { title: 'Налоговая оптимизация', desc: 'Легальные способы снизить налоговую нагрузку. ИИС, вычеты, структурирование.' }, item6: { title: 'Менторство', desc: 'Регулярное сопровождение: ежемесячные созвоны, ответы на вопросы, корректировка плана.' } },
        testimonials: { tag: 'Отзывы', title: 'Что говорят клиенты', item1: { text: '"Наконец-то я понимаю, куда уходят деньги и как их приумножить. За полгода накопил первую подушку безопасности."', name: 'Александр М.', role: 'IT-специалист' }, item2: { text: '"Боялась инвестировать — казалось сложным и рискованным. Теперь у меня диверсифицированный портфель и спокойствие."', name: 'Виктория С.', role: 'Предприниматель' }, item3: { text: '"Оптимизировали налоги — сэкономил больше, чем стоила консультация. Рекомендую всем, кто ценит свои деньги."', name: 'Михаил К.', role: 'Врач' } },
        faq: { title: 'Частые вопросы', q1: { q: 'С какой суммы можно начать?', a: 'Начать можно с любой суммы — даже 10 000 рублей. Важнее регулярность и стратегия, а не размер первого взноса.' }, q2: { q: 'Нужны ли специальные знания?', a: 'Нет. Я объясняю всё простым языком и даю пошаговые инструкции, которые сможет выполнить любой.' }, q3: { q: 'Как долго длится работа?', a: 'Консультация — 1-2 часа. Финансовый план — 2-3 недели. Менторство — от 3 месяцев.' }, q4: { q: 'Гарантируете ли вы доходность?', a: 'Нет — и никто не может честно гарантировать. Я гарантирую системный подход и прозрачность.' }, q5: { q: 'Работаете ли вы удалённо?', a: 'Да, 100% работы онлайн — Zoom, Telegram, Google Docs. География не имеет значения.' } },
        video: { tag: 'Образование', title: 'Как работает фондовый рынок', subtitle: 'Короткое видео о базовых принципах инвестирования, которые помогут вам принимать осознанные решения', playText: 'Смотреть видео', duration: '3:45', feature1Title: 'Без сложных терминов', feature1Desc: 'Объясняю простым языком', feature2Title: 'Реальные примеры', feature2Desc: 'Практика, а не теория', feature3Title: 'Быстрый старт', feature3Desc: 'Начните за 5 минут' },
        certs: { tag: 'Квалификация', title: 'Сертификаты и лицензии', subtitle: 'Подтверждённая экспертиза в области финансов и инвестиций', cert1: 'CFA Level II', cert2: 'Финансовое планирование', cert3: 'Риск-менеджмент', cert4: 'Инвестиционный анализ', cert5: 'Управление портфелем' },
        contact: { tag: 'Контакты', title: 'Готовы начать?', subtitle: 'Запишитесь на бесплатную 15-минутную консультацию. Обсудим вашу ситуацию и определим, чем я могу помочь.', cta: 'Telegram', email: 'hello@example.com', location: 'Удалённо, весь мир', hours: 'Отвечаю в течение 24 часов', formTitle: 'Оставить заявку', nameLabel: 'Имя', namePlaceholder: 'Как вас зовут?', nameError: 'Пожалуйста, введите ваше имя', contactHint: 'Укажите хотя бы один способ связи: Email, Telegram или Instagram', emailLabel: 'Email', emailPlaceholder: 'your@email.com', emailError: 'Введите корректный email', telegramLabel: 'Telegram', instagramLabel: 'Instagram', usernamePlaceholder: 'username', messageLabel: 'Сообщение', messagePlaceholder: 'Расскажите о ваших целях или задайте вопрос...', contactError: 'Укажите хотя бы один способ связи', successMessage: 'Заявка отправлена! Я свяжусь с вами в ближайшее время.', submitBtn: 'Отправить заявку', privacyText: 'Нажимая кнопку, вы соглашаетесь с', privacyLink: 'политикой конфиденциальности' },
        footer: { copyright: '© 2024 Финансовый консультант. Все права защищены.', privacy: 'Конфиденциальность', terms: 'Условия' }
    },
    es: {
        nav: { about: 'Sobre mí', services: 'Servicios', testimonials: 'Testimonios', contact: 'Contacto', cta: 'Consulta', mobileCta: 'Reservar' },
        hero: { badge: 'Aceptando nuevos clientes', title1: 'Inversiones que', title2: 'trabajan para ti', subtitle: 'Estrategias personales de gestión patrimonial con rendimientos superiores al mercado. Sin caos, con control total.', cta: 'Consulta gratuita', ctaSecondary: 'Ver servicios', stat1: 'bajo gestión', stat2: 'clientes satisfechos', stat3: 'rendimiento promedio' },
        about: { tag: 'Sobre mí', title: '7 años ayudando a construir sistemas financieros', p1: 'No vendo inversiones "mágicas". Ayudo a entender las finanzas, construir un sistema claro y tomar decisiones conscientes.', p2: 'Mi enfoque equilibra la protección del capital con un crecimiento razonable. Sin esquemas agresivos.', cert1: 'CFA Level II', cert2: '150+ clientes', cert3: '7 años exp' },
        services: { tag: 'Servicios', title: 'Lo que ofrezco', subtitle: 'Enfoque integral para la gestión de finanzas personales', item1: { title: 'Auditoría Financiera', desc: 'Análisis completo de tu situación: ingresos, gastos, activos, pasivos.' }, item2: { title: 'Plan Financiero', desc: 'Estrategia personal para 1-5 años con pasos concretos.' }, item3: { title: 'Cartera de Inversión', desc: 'Selección de instrumentos según tus objetivos y perfil de riesgo.' }, item4: { title: 'Protección de Seguros', desc: 'Análisis de riesgos y selección de productos de seguros.' }, item5: { title: 'Optimización Fiscal', desc: 'Formas legales de reducir la carga fiscal.' }, item6: { title: 'Mentoría', desc: 'Acompañamiento regular: llamadas mensuales, respuestas a preguntas.' } },
        testimonials: { tag: 'Testimonios', title: 'Lo que dicen los clientes', item1: { text: '"Por fin entiendo a dónde va el dinero y cómo hacerlo crecer."', name: 'Alejandro M.', role: 'Especialista IT' }, item2: { text: '"Tenía miedo de invertir. Ahora tengo una cartera diversificada."', name: 'Victoria S.', role: 'Empresaria' }, item3: { text: '"Optimizamos impuestos — ahorré más de lo que costó la consulta."', name: 'Miguel K.', role: 'Médico' } },
        faq: { title: 'Preguntas frecuentes', q1: { q: '¿Cuál es la cantidad mínima para empezar?', a: 'Puedes empezar con cualquier cantidad. La consistencia y estrategia importan más.' }, q2: { q: '¿Necesito conocimientos especiales?', a: 'No. Explico todo en términos simples.' }, q3: { q: '¿Cuánto tiempo lleva?', a: 'Consulta — 1-2 horas. Plan financiero — 2-3 semanas.' }, q4: { q: '¿Garantiza rendimientos?', a: 'No — y nadie puede garantizarlo honestamente.' }, q5: { q: '¿Trabaja de forma remota?', a: 'Sí, 100% online.' } },
        video: { tag: 'Educación', title: 'Cómo funciona el mercado de valores', subtitle: 'Un video corto sobre los conceptos básicos de inversión que te ayudarán a tomar decisiones informadas', playText: 'Ver video', duration: '3:45', feature1Title: 'Sin jerga', feature1Desc: 'Explicado en términos simples', feature2Title: 'Ejemplos reales', feature2Desc: 'Práctica, no teoría', feature3Title: 'Inicio rápido', feature3Desc: 'Comienza en 5 minutos' },
        certs: { tag: 'Calificaciones', title: 'Certificados y licencias', subtitle: 'Experiencia verificada en finanzas e inversiones', cert1: 'CFA Level II', cert2: 'Planificación financiera', cert3: 'Gestión de riesgos', cert4: 'Análisis de inversiones', cert5: 'Gestión de cartera' },
        contact: { tag: 'Contacto', title: '¿Listo para empezar?', subtitle: 'Reserva una consulta gratuita de 15 minutos.', cta: 'Telegram', email: 'hello@example.com', location: 'Remoto, mundial', hours: 'Respondo en 24 horas', formTitle: 'Dejar solicitud', nameLabel: 'Nombre', namePlaceholder: '¿Cómo te llamas?', nameError: 'Por favor, introduce tu nombre', contactHint: 'Indica al menos un método de contacto: Email, Telegram o Instagram', emailLabel: 'Email', emailPlaceholder: 'tu@email.com', emailError: 'Introduce un email válido', telegramLabel: 'Telegram', instagramLabel: 'Instagram', usernamePlaceholder: 'usuario', messageLabel: 'Mensaje', messagePlaceholder: 'Cuéntame sobre tus objetivos o haz una pregunta...', contactError: 'Indica al menos un método de contacto', successMessage: '¡Solicitud enviada! Me pondré en contacto pronto.', submitBtn: 'Enviar solicitud', privacyText: 'Al hacer clic, aceptas la', privacyLink: 'política de privacidad' },
        footer: { copyright: '© 2024 Consultor Financiero. Todos los derechos reservados.', privacy: 'Privacidad', terms: 'Términos' }
    }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function updateContent() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.dataset.i18n.split('.');
        let value = t;
        keys.forEach(k => value = value?.[k]);
        if (value) el.textContent = value;
    });
    // Handle placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const keys = el.dataset.i18nPlaceholder.split('.');
        let value = t;
        keys.forEach(k => value = value?.[k]);
        if (value) el.placeholder = value;
    });
    document.getElementById('currentLang').textContent = currentLang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
        btn.classList.toggle('text-accent', btn.dataset.lang === currentLang);
        btn.classList.toggle('bg-accent/10', btn.dataset.lang === currentLang);
        btn.classList.toggle('text-text-secondary', btn.dataset.lang !== currentLang);
        btn.classList.toggle('bg-white/5', btn.dataset.lang !== currentLang);
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateContent();
    document.getElementById('langDropdown').classList.remove('show');
}

// Language dropdown
document.getElementById('langBtn').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('langDropdown').classList.toggle('show');
});
document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});
document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});
document.addEventListener('click', () => {
    document.getElementById('langDropdown').classList.remove('show');
});

// Header scroll
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.pageYOffset > 50);
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenuBtn.innerHTML = isOpen
        ? '<svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
        : '<svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
            mobileMenu.classList.remove('open');
            mobileMenuBtn.innerHTML = '<svg class="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
        }
    });
});

// FAQ accordion (new style)
document.querySelectorAll('.faq-question-new').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item-new');
        const answer = item.querySelector('.faq-answer-new');
        const wasOpen = item.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-item-new').forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-answer-new').classList.add('hidden');
        });

        // Open clicked if wasn't open
        if (!wasOpen) {
            item.classList.add('open');
            answer.classList.remove('hidden');
        }
    });
});

// Fade in
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telegramInput = document.getElementById('telegram');
    const instagramInput = document.getElementById('instagram');
    const contactMethodError = document.getElementById('contactMethodError');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear error state on input
    [nameInput, emailInput, telegramInput, instagramInput].forEach(input => {
        if (input) {
            input.addEventListener('input', () => {
                input.classList.remove('error');
                const errorEl = input.closest('.form-group')?.querySelector('.form-error');
                if (errorEl) errorEl.classList.add('hidden');
                contactMethodError.classList.add('hidden');
            });
        }
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset states
        formSuccess.classList.add('hidden');
        contactMethodError.classList.add('hidden');
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');

        // Validate name (required)
        if (!nameInput.value.trim()) {
            nameInput.classList.add('error', 'shake');
            const nameError = nameInput.closest('.form-group')?.querySelector('.form-error');
            if (nameError) nameError.classList.remove('hidden');
            isValid = false;
            setTimeout(() => nameInput.classList.remove('shake'), 500);
        } else {
            nameInput.classList.remove('error');
            nameInput.classList.add('success');
        }

        // Validate email format (if provided)
        const emailValue = emailInput.value.trim();
        if (emailValue && !emailRegex.test(emailValue)) {
            emailInput.classList.add('error', 'shake');
            const emailError = emailInput.closest('.form-group')?.querySelector('.form-error');
            if (emailError) emailError.classList.remove('hidden');
            isValid = false;
            setTimeout(() => emailInput.classList.remove('shake'), 500);
        } else if (emailValue) {
            emailInput.classList.remove('error');
            emailInput.classList.add('success');
        }

        // Validate at least one contact method
        const hasContact = emailValue || telegramInput.value.trim() || instagramInput.value.trim();
        if (!hasContact) {
            contactMethodError.classList.remove('hidden');
            [emailInput, telegramInput, instagramInput].forEach(input => {
                input.classList.add('error', 'shake');
                setTimeout(() => input.classList.remove('shake'), 500);
            });
            isValid = false;
        } else {
            if (telegramInput.value.trim()) telegramInput.classList.add('success');
            if (instagramInput.value.trim()) instagramInput.classList.add('success');
        }

        // If not valid, stop
        if (!isValid) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            return;
        }

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            formSuccess.classList.remove('hidden');
            contactForm.reset();
            [nameInput, emailInput, telegramInput, instagramInput].forEach(input => {
                input.classList.remove('success', 'error');
            });

            // Hide success after 5 seconds
            setTimeout(() => formSuccess.classList.add('hidden'), 5000);
        }, 1500);
    });
}

// Video autoplay on scroll
const stockVideo = document.getElementById('stockVideo');
const videoSection = stockVideo?.closest('.video-section');

if (stockVideo) {
    // Ensure video is muted (required for autoplay)
    stockVideo.muted = true;

    // Try to play immediately
    stockVideo.play().catch(() => {});

    // Also play on scroll into view
    if (videoSection) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    stockVideo.play().catch(() => {});
                } else {
                    stockVideo.pause();
                }
            });
        }, { threshold: 0 });

        videoObserver.observe(videoSection);
    }

    // Fallback: play on any user interaction
    document.addEventListener('click', () => {
        if (stockVideo.paused) {
            stockVideo.play().catch(() => {});
        }
    }, { once: true });

    document.addEventListener('scroll', () => {
        if (stockVideo.paused) {
            stockVideo.play().catch(() => {});
        }
    }, { once: true });
}

// Review media gallery
const reviewMedia = {
    review1: [
        { type: 'video', src: 'images/reviews/review1-1.mov' },
        { type: 'video', src: 'images/reviews/review1-2.mov' }
    ],
    review2: [
        { type: 'video', src: 'images/reviews/review2-1.mov' }
    ],
    review3: [
        { type: 'video', src: 'images/reviews/review3-1.mov' }
    ],
    review5: [
        { type: 'image', src: 'images/reviews/review5-1.png' }
    ],
    review6: [
        { type: 'image', src: 'images/reviews/review6-1.png' }
    ],
    review7: [
        { type: 'image', src: 'images/reviews/review7-1.png' }
    ],
    review8: [
        { type: 'image', src: 'images/reviews/review8-1.png' }
    ],
    review9: [
        { type: 'image', src: 'images/reviews/review9-1.png' }
    ]
};

let currentReview = null;
let currentMediaIndex = 0;

function openReviewModal(reviewId, startIndex = 0) {
    const media = reviewMedia[reviewId];
    if (!media || media.length === 0) return;

    currentReview = reviewId;
    currentMediaIndex = Math.min(startIndex, media.length - 1);

    const modal = document.getElementById('reviewModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    showReviewMedia();
}

function showReviewMedia() {
    const media = reviewMedia[currentReview];
    if (!media) return;

    const item = media[currentMediaIndex];
    const content = document.getElementById('reviewContent');
    const counter = document.getElementById('reviewCounter');

    if (item.type === 'video') {
        content.innerHTML = `<video src="${item.src}" class="max-w-full max-h-[85vh] rounded-2xl shadow-2xl" controls autoplay></video>`;
    } else {
        content.innerHTML = `<img src="${item.src}" class="max-w-full max-h-[85vh] rounded-2xl shadow-2xl" alt="Review">`;
    }

    counter.textContent = `${currentMediaIndex + 1} / ${media.length}`;

    // Hide/show arrows
    document.getElementById('reviewPrev').style.display = currentMediaIndex > 0 ? 'flex' : 'none';
    document.getElementById('reviewNext').style.display = currentMediaIndex < media.length - 1 ? 'flex' : 'none';
}

function closeReviewModal() {
    const modal = document.getElementById('reviewModal');
    const content = document.getElementById('reviewContent');

    // Stop video if playing
    const video = content.querySelector('video');
    if (video) video.pause();

    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
    content.innerHTML = '';
}

document.getElementById('reviewPrev')?.addEventListener('click', () => {
    if (currentMediaIndex > 0) {
        currentMediaIndex--;
        showReviewMedia();
    }
});

document.getElementById('reviewNext')?.addEventListener('click', () => {
    const media = reviewMedia[currentReview];
    if (media && currentMediaIndex < media.length - 1) {
        currentMediaIndex++;
        showReviewMedia();
    }
});

document.getElementById('reviewModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'reviewModal') closeReviewModal();
});

// Certificate modal
function openCertModal(src) {
    const modal = document.getElementById('certModal');
    const img = document.getElementById('certModalImg');
    img.src = src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertModal();
});

// Init
updateContent();
