export default {
  faqs: [
    {
      id: 1,
      question: 'What do I get with The Bland SaaS?',
      answer: 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum',
      isOpen: false,
    },
    {
      id: 2,
      question: 'What technologies do you use?',
      answer: 'Lorum Ipsum',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Which router does the Nextjs version use?',
      answer: 'Lorum Ipsum',
      isOpen: false,
    },
    {
      id: 4,
      question: 'What is the difference between the single purchase and lifetime updates version?',
      answer: 'Lorum Ipsum',
      isOpen: false,
    },
    {
      id: 5,
      question: 'Do you use TypeScript?',
      answer: 'Lorum Ipsum',
      isOpen: false,
    },
  ],
  pricing: [
    {
      priceId: 'price_1JGZ2tG8g5ZQX9Z0Z1Z0Z1Z0',
      name: 'One Time Purchase',
      description: 'for one developer',
      price: 99,
      currencySymbol: '$',
      currencyUnit: 'USD',
      buttonText: 'Get The Bland SaaS',
      features: [
        {
          id: 1,
          i18n: 'Nextjs SaaS Starter',
          allowed: true,
        },
        {
          id: 2,
          i18n: 'App Router',
          allowed: true,
        },
        {
          id: 3,
          i18n: 'Pages Router',
          allowed: true,
        },
        {
          id: 4,
          i18n: 'Discord community',
          allowed: false,
        },
        {
          id: 4,
          i18n: 'Lifetime updates',
          allowed: false,
        },
      ],
    },
    {
      priceId: 'price_1JGZ2tG8g5ZQX9Z0Z1Z0Z1Z1',
      name: 'Lifetime Updates',
      description: 'for one developer',
      price: 129,
      currencySymbol: '$',
      currencyUnit: 'USD',
      isFeatured: true,
      buttonText: 'Get The Bland SaaS',
      features: [
        {
          id: 1,
          i18n: 'Nextjs SaaS Starter',
          allowed: true,
        },
        {
          id: 2,
          i18n: 'App Router',
          allowed: true,
        },
        {
          id: 3,
          i18n: 'Pages Router',
          allowed: true,
        },
        {
          id: 4,
          i18n: 'Discord community',
          allowed: true,
        },
        {
          id: 4,
          i18n: 'Lifetime updates',
          allowed: true,
        },
      ],
    },
  ],
}
