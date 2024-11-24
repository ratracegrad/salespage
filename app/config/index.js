export default {
  navbar: {
    menu: [
      {
        id: 1,
        name: 'Home',
        url: '/',
      },
      {
        id: 2,
        name: 'Docs',
        url: '/docs',
      },
      {
        id: 3,
        name: 'Pricing',
        url: '/pricing',
      },
      {
        id: 4,
        name: 'Demo',
        url: '/demo',
      },
    ],
  },
  faqs: [
    {
      id: 1,
      question: 'What is The Bland SaaS?',
      answer: 'The Bland SaaS is a SaaS starter template. It is designed to help you kickstart your next project with a modern and customizable user interface. The Bland SaaS is perfect for SaaS, web apps, and other digital products.',
      isOpen: false,
    },
    {
      id: 2,
      question: 'What Tech Stack do you use?',
      answer: 'There are two versions of The Bland SaaS. The first version is built with Nextjs and the second version is built with Nuxtjs. Both version using TailwindCSS for styling, supabase for database and authentication and Prisma as an ORM.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Does Nextjs version use App Router or Pages Router?',
      answer: 'The Bland SaaS provides both an App Router and a Pages Router version. You can purchase the version you want to use or we offer a bundle that includes both versions.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'Do you provide TypeScript support?',
      answer: 'Yes, The Bland SaaS provides TypeScript support. You can use TypeScript with both the Nextjs and Nuxtjs versions.',
      isOpen: false,
    },
    {
      id: 5,
      question: 'Can I see a demo of The Bland SaaS?',
      answer: 'Yes, you can see a demo of The Bland SaaS by visiting the demo page. The demo page will show you the features and functionality of The Bland SaaS. Plus this page was built using The Bland SaaS.',
      isOpen: false,
    },
    {
      id: 6,
      question: 'Can I use The Bland SaaS for multiple projects?',
      answer: 'Yes, you can use The Bland SaaS for unlimited projects.',
      isOpen: false,
    },
    {
      id: 7,
      question: 'Can I use this in a commercial project or an Open Source project?',
      answer: 'Yes, you can use The Bland SaaS in a commercial project or an Open Source project.',
      isOpen: false,
    },
    
    {
      id: 8,
      question: 'Can I get a refund?',
      answer: 'No, we do not provide refunds. Once you purchase The Bland SaaS, you will have access to the source code so it cannot be refunded.',
      isOpen: false,
    },
    {
      id: 9,
      question: 'Can I resell this product?',
      answer: 'No you may not as this would be a violation of the license agreement. You are not allowed to resell the code or parts of it. You are also not allowed to publish the code or parts of it as a template or boilerplate. See the license page for more details.',
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
