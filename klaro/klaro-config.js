var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  cookieName: 'klaro-consent',
  cookieExpiresAfterDays: 365,
  privacyPolicy: '/about/#privacy-policy', // Link zu deiner Datenschutzerklärung
  default: true,
  mustConsent: false, // Nutzer kann Banner ignorieren
  acceptAll: true,
  hideDeclineAll: false,
  lang: 'en',

  services: [
    {
      name: 'googleAnalytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/, /^_gat/],
      required: false,
      default: true,
      optOut: true,
    },
  ],

  purposes: ['analytics'],

  translations: {
    en: {
      consentModal: {
        title: 'SDN-Warrior use cookies 🍪',
        description:
          'This private blog uses Google Analytics 4 only with your consent. Analytics helps me understand which content is useful and whether keeping this blog alive is worth the effort. You can accept or decline analytics cookies at any time. No analytics cookies are set before you accept.',
        privacyPolicy: {
          text: 'privacy policy',
          name: 'privacy policy',
        },
      },
      acceptAll: 'Accept all',
      acceptSelected: 'Save settings',
      decline: 'Decline',
      service: {
        googleAnalytics: {
          description:
            'Google Analytics 4 helps us understand how visitors use our website by collecting anonymized information.',
        },
      },
      purposes: {
        analytics: 'Analytics and performance',
      },
    },
  },
};