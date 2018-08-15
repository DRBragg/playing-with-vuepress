module.exports = {
  title: 'Pokemon Go Updates',
  description: 'Quick Reference to Events, Bonuses, Updates, and Rumors',
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
      { text: 'EVENTS', link: '/events/' },
      { text: 'UPDATES', link: '/updates/' },
      { text: 'RUMORS', link: '/rumors/' }
    ],
    sidebar: [
      {
        title: 'Events',
        collapsable: false,
        children: [
          '/events/current',
          '/events/upcoming'
        ]
      },
      {
        title: 'Updates',
        collapsable: true,
        children: [
          '/updates/latest',
          '/updates/08022018'
        ]
      },
      {
        title: 'Rumors',
        collapsable: false
      }
    ]
  }
}
