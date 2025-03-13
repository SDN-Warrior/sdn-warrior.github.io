var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  cookieName: 'klaro-consent',
  cookieExpiresAfterDays: 7,
  privacyPolicy: '/about/#privacy-policy', // Link zu deiner Datenschutzerklärung
  default: false,
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
    },
  ],

  purposes: ['analytics'],

  translations: {
    en: {
      consentModal: {
        title: 'We use cookies 🍪',
        description:
          'We use cookies to enhance your browsing experience and analyze our website traffic with Google Analytics 4 (GA4). You can accept, decline, or customize cookies.',
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