module.exports = {
  title: 'Pokemon Go Updates',
  description: 'Quick Reference to Events, Bonuses, Updates, and Rumors',
  serviceWorker: true,
  themeConfig:{
    logo: '/img/ball.png',
    lastUpdated: 'Last Updated',
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
