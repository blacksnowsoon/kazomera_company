export const siteStructure = (lang) => {
  return {
    firstNav: {
      logo: {
        logoImg: '/assets/site-logos/logo.png',
        siteName: 'Kazomera'
      },
      searchForm: {
        icon: 'BsSearch',
        placeholder: lang === 'ar' ? 'بحث' : 'Search'
      },
      options: {
        langOptions: {
          en: 'English',
          ar: 'عربي'
        },
        notifications: {
          icon: 'BsBell',
          count: 5
        }
      }
    },
    secondNav: {
      links: [
        {
          name: lang === 'ar' ? 'الأخبار' : 'News',
          route: '/',
          icon: 'BsNewspaper',
        },
        {
          name: lang === 'ar' ? 'استثمارات' : 'Investments',
          route: '/investments',
          icon: 'BsFillBarChartLineFill',
        }
      ]
    }
  }
}
