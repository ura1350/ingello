export const dict = {
  ua: {
    langLabel: 'Укр',
    nav: { about: 'Про нас', portfolio: 'Портфоліо', services: 'Архітектурний дизайн', materials: 'Оздоблювальні матеріали' },
    hero: { title: 'Ми продаємо дизайн, камінь, скло та дерево', kicker: 'Унікальні європейські матеріали та проєкти', cta: 'Безкоштовна консультація', sub: 'Прості категорії, щоб було ясно, чим ми займаємось.' },
    materials: { title: 'Оздоблювальні матеріали', stone: 'Камінь', wood: 'Дерево', glass: 'Скло', lead: 'Підібрати матеріал' },
    services: { heroTitle: "Архітектурні та інтер'єрні послуги", points: ['Концепт та планування','Підбір матеріалів і колекцій','3D візуалізації та робочі креслення','Авторський нагляд'] },
    about: { title: 'Про студію Roksolana', body: 'Дизайн + постачання матеріалів: sintered stone, натуральний камінь, дерево, інноваційні скляні системи.' },
    portfolio: { title: 'Портфоліо', note: "Візуалізації та реалізовані об'єкти." },
    lead: { title: 'Підібрати матеріали / кошторис', subtitle: '5 питань — і повернемось з варіантами.', start: 'Почати', next: 'Далі', done: 'Надіслати' },
    notfound: { title: 'Сторінку не знайдено', back: 'На головну' },
  },
  en: {
    langLabel: 'EN',
    nav: { about: 'About', portfolio: 'Portfolio', services: 'Architectural Design', materials: 'Finishing Materials' },
    hero: { title: 'We sell design, stone, glass & wood', kicker: 'Unique European materials & projects', cta: 'Free consultation', sub: "Clear categories so it's obvious what we do." },
    materials: { title: 'Finishing materials', stone: 'Stone', wood: 'Wood', glass: 'Glass', lead: 'Get a material match' },
    services: { heroTitle: 'Architectural & interior services', points: ['Concept & planning','Material curation & collections','3D visualization & construction docs','Author supervision'] },
    about: { title: 'About Roksolana Studio', body: 'We combine design and material sourcing: sintered stone, natural stone, wood, glass systems.' },
    portfolio: { title: 'Portfolio', note: 'Visualizations and built work.' },
    lead: { title: 'Get material options / quote', subtitle: "Answer 5 questions — we'll return with options.", start: 'Start', next: 'Next', done: 'Submit' },
    notfound: { title: 'Page not found', back: 'Back home' },
  },
} as const
export type Lang = keyof typeof dict
