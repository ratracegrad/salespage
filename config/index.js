export default {
  appName: 'app.name',
  appDescription: 'app.description',
  appDomain: 'http://localhost:3000',
  auth: {
    google: {
      login: true,
    },
    github: {
      login: true,
    },
  },
  banner: {
    message: 'banner.message',
    url: 'https://theblandsaas.com',
  },
  navbar: {
    showDarkToggle: true,
    showLanguageToggle: true,
    menu: [
      {
        id: 1,
        name: 'Home',
        url: '/',
        i18n: 'navbar.home',
      },
      {
        id: 2,
        name: 'About',
        url: '/about',
        i18n: 'navbar.about',
      },
      {
        id: 3,
        name: 'Contact',
        url: '/contact',
        i18n: 'navbar.contact',
      },
    ],
  },
  hero: {
    buttons: [
      {
        id: 1,
        name: 'Get Started',
        url: '/get-started',
        i18n: 'hero.getStarted',
      },
      {
        id: 2,
        name: 'Learn More',
        url: '/learn-more',
        i18n: 'hero.learnMore',
      },
    ],
  },
  faqs: [
    {
      id: 1,
      question: 'faq.question1',
      answer: 'faq.answer1',
      isOpen: false,
    },
    {
      id: 2,
      question: 'faq.question2',
      answer: 'faq.answer2',
      isOpen: false,
    },
    {
      id: 3,
      question: 'faq.question3',
      answer: 'faq.answer3',
      isOpen: false,
    },
    {
      id: 4,
      question: 'faq.question4',
      answer: 'faq.answer4',
      isOpen: false,
    },
    {
      id: 5,
      question: 'faq.question5',
      answer: 'faq.answer5',
      isOpen: false,
    },
  ],
  social: [
    {
      name: 'Google',
      login: true,
      show: true,
      icon: 'i-fa6-brands-google',
      ariaLabel: 'Button to link to Google',
      url: 'https://google.com',
    },
    {
      name: 'GitHub',
      login: true,
      show: true,
      icon: 'i-fa6-brands-github',
      ariaLabel: 'Button to link to GitHub',
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      login: false,
      show: true,
      icon: 'i-fa6-brands-linkedin',
      ariaLabel: 'Button to link to LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      name: 'Instagram',
      login: false,
      show: true,
      icon: 'i-fa6-brands-instagram',
      ariaLabel: 'Button to link to Instagram',
      url: 'https://instagram.com',
    },
    {
      name: 'Facebook',
      login: false,
      show: true,
      icon: 'i-fa6-brands-facebook',
      ariaLabel: 'Button to link to Facebook',
      url: 'https://facebook.com',
    },
    {
      name: 'Twitter',
      login: false,
      show: true,
      icon: 'i-fa6-brands-twitter',
      ariaLabel: 'Button to link to Twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'Pinterest',
      login: false,
      show: true,
      icon: 'i-fa6-brands-pinterest',
      ariaLabel: 'Button to link to Pinterest',
      url: 'https://pinterest.com',
    },
  ],
  pricing: [
    {
      priceId: 'price_1JGZ2tG8g5ZQX9Z0Z1Z0Z1Z0',
      name: 'pricing.plans[0].name',
      description: 'pricing.plans[0].description',
      price: 9,
      currencySymbol: '$',
      currencyUnit: 'USD',
      priceAnchor: 12,
      buttonText: 'pricing.plans[0].buttonText',
      features: [
        {
          id: 1,
          i18n: 'pricing.plans[0].feature1',
          allowed: true,
        },
        {
          id: 2,
          i18n: 'pricing.plans[0].feature2',
          allowed: true,
        },
        {
          id: 3,
          i18n: 'pricing.plans[0].feature3',
          allowed: false,
        },
        {
          id: 4,
          i18n: 'pricing.plans[0].feature4',
          allowed: false,
        },
      ],
    },
    {
      priceId: 'price_1JGZ2tG8g5ZQX9Z0Z1Z0Z1Z1',
      name: 'pricing.plans[1].name',
      description: 'pricing.plans[1].description',
      price: 29,
      currencySymbol: '$',
      currencyUnit: 'USD',
      priceAnchor: 49,
      isFeatured: true,
      buttonText: 'pricing.plans[1].buttonText',
      features: [
        {
          i18n: 'pricing.plans[1].feature1',
          allowed: true,
        },
        {
          i18n: 'pricing.plans[1].feature1',
          allowed: true,
        },
        {
          i18n: 'pricing.plans[1].feature1',
          allowed: true,
        },
        {
          i18n: 'pricing.plans[1].feature1',
          allowed: false,
        },
      ],
    },
    {
      priceId: 'price_1JGZ2tG8g5ZQX9Z0Z1Z0Z1Z2',
      name: 'pricing.plans[2].name',
      description: 'pricing.plans[2].description',
      price: 79,
      currencySymbol: '$',
      currencyUnit: 'USD',
      priceAnchor: 99,
      buttonText: 'pricing.plans[2].buttonText',
      features: [
        {
          i18n: 'pricing.plans[2].feature1',
          allowed: true,
        },
        {
          i18n: 'pricing.plans[2].feature2',
          allowed: true,
        },
        {
          i18n: 'pricing.plans[2].feature3',
          allowed: true,
        },
        {
          i18n: 'pricing.plans[2].feature4',
          allowed: true,
        },
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      name: 'George Washington',
      title: 'President at USA',
      testimony: 'testimonials.entry1',
      stars: 5,
      img: 'https://res.cloudinary.com/ratracegrad/image/upload/v1720126353/testimonial1_hixpek.webp',
    },
    {
      id: 2,
      name: 'Abraham Lincoln',
      title: 'Senator from Illinois',
      testimony: 'testimonials.entry2',
      stars: 4,
      img: 'https://res.cloudinary.com/ratracegrad/image/upload/v1720126352/testimonial2_oyi66h.webp',
    },
    {
      id: 3,
      name: 'George Westinghouse',
      title: 'Entrepreneur',
      testimony: 'testimonials.entry3',
      stars: 5,
      img: 'https://res.cloudinary.com/ratracegrad/image/upload/v1720126352/testimonial3_biy4ah.webp',
    },
    {
      id: 4,
      name: 'Nikola Tesla',
      title: 'Electrician Extraordinaire',
      testimony: 'testimonials.entry4',
      stars: 5,
      img: 'https://res.cloudinary.com/ratracegrad/image/upload/v1720126353/testimonial4_njnzme.webp',
    },
    {
      id: 5,
      name: 'Albert Einstein',
      title: 'Scientist',
      testimony: 'testimonials.entry5',
      stars: 5,
      img: 'https://res.cloudinary.com/ratracegrad/image/upload/v1720126354/testimonial5_ui1z71.webp',
    },
    {
      id: 6,
      name: 'Mother Theresa',
      title: 'Nun',
      testimony: 'testimonials.entry6',
      stars: 4,
      img: 'https://res.cloudinary.com/ratracegrad/image/upload/v1720126355/testimonial6_aopdsp.webp',
    },
    {
      id: 7,
      name: 'Thomas Edison',
      title: 'Inventor',
      testimony: 'testimonials.entry7',
      stars: 5,
      img: 'https://res.cloudinary.com/ratracegrad/image/upload/v1720126355/testimonial7_dtpngu.webp',
    },
  ],
  features: [
    {
      id: 1,
      title: 'features.title1',
      description: 'features.description1',
      icon: 'i-fa6-solid-bullseye',
    },
    {
      id: 2,
      title: 'features.title2',
      description: 'features.description2',
      icon: 'i-fa6-solid-database',
    },
    {
      id: 3,
      title: 'features.title3',
      description: 'features.description3',
      icon: 'i-fa6-solid-bell',
    },
    {
      id: 4,
      title: 'features.title4',
      description: 'features.description4',
      icon: 'i-fa6-solid-pen',
    },
  ],
  stats: [
    {
      id: 1,
      title: 'stats.title1',
      value: '1000+',
      description: 'stats.description1',
    },
    {
      id: 2,
      title: 'stats.title2',
      value: '100+',
      description: 'stats.description2',
    },
    {
      id: 3,
      title: 'stats.title3',
      value: '10+',
      description: 'stats.description3',
    },
  ],
  asSeenOn: [
    {
      id: 1,
      icon: 'i-logos-cpanel',
    },
    {
      id: 2,
      icon: 'i-logos-airbnb',
    },
    {
      id: 3,
      icon: 'i-logos-cloudacademy',
    },
    {
      id: 4,
      icon: 'i-logos-coursera',
    },
  ],
  footer: {
    copyright: 'footer.copyright',
    links: [
      { name: 'footer.links1', href: '#features' },
      { name: 'footer.links2', href: '#pricing' },
      { name: 'footer.links3', href: '/blog' },
    ],
    legal: [
      { name: 'footer.legal1', href: '/tos' },
      { name: 'footer.legal2', href: '/privacy' },
    ],
  },
  blog: {
    showBlog: true,
    blogTitle: 'From the blog', // title displayed in the blog section
    blogDescription: 'Honi soit qui mal y pense', // description displayed below blog title
    blogPostsPerPage: 10, // make it 0 to disable pagination
    blogShowImages: true,
  },
}
