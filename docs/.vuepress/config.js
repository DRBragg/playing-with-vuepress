module.exports = {
  title: 'Pokemon Go Updates',
  description: 'Quick Reference to Events, Bonuses, Updates, and APK Teardowns',
  head: [
    ['link', { rel: 'icon', href: `/img/ball.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#f57d7e' }]
  ],
  serviceWorker: true,
  themeConfig:{
    logo: '/img/ball.png',
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      { text: 'The Important Stuff', link: '/events/' }
    ],
    sidebar: [
      {
        title: 'Events',
        collapsable: false,
        children: [
          '/events/',
          '/events/current',
          '/events/upcoming'
        ]
      },
      {
        title: 'Updates',
        collapsable: true,
        children: [
          '/updates/latest',
          '/updates/08162018',
          '/updates/08152018',
          '/updates/08142018',
          '/updates/08022018'
        ]
      },
      {
        title: 'APK Teardowns',
        collapsable: true,
        children: [
          '/teardowns/0.115.2',
          '/teardowns/0.115.3'
        ]
      }
    ]
  }
}
