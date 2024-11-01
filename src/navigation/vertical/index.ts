// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    // {
    //   title: 'Calculateurs',
    //   icon: 'tabler:chart-donut',
    //   children: [
    //     {
    //       title: 'TikTok',
    //       path: '/calculateurs/tiktok'
    //     },
    //     {
    //       title: 'Instagram',
    //       path: '/calculateurs/instagram'
    //     },
    //     {
    //       title: 'YouTube',
    //       path: '/calculateurs/youtube'
    //     }
    //   ]
    // },
    {
      title: 'Dashbaord',
      path: '/second-page',
      icon: 'tabler:mail'
    },
    {
      title: 'Influencers',
      path: '/influenceurs',
      icon: 'tabler:users'
    },
    {
      title: 'Manage My Projects',
      path: '/manager-mes-projets',
      icon: 'tabler:list'
    },
    {
      title: 'Ranking',
      path: '/ranking',
      icon: 'tabler:timeline'
    },
    {
      title: 'Social Listening',
      path: '/social-listening',
      icon: 'tabler:speakerphone'
    },

    {
      title: 'Favorites',
      path: '/favoris',
      icon: 'tabler:heart'
    },
    {
      title: 'Niches',
      path: '/niches',
      icon: 'tabler:list'
    },
    {
      title: 'Marketplace',
      path: '/marketplace',
      icon: 'tabler:world',
      children: [
        {
          title: 'Products',
          path: '/marketplace/products'
        },
        {
          title: 'Campaigns',
          path: '/marketplace/campaigns'
        }
      ]
    },
    {
      title: 'Academy',
      path: '/academy',
      icon: 'tabler:clipboard-text'
    },
    {
      title: 'Support',
      path: '/support',
      icon: 'tabler:headphones'
    },
    {
      title: 'Sign Out',
      path: '/logout',
      icon: 'tabler:logout'
    }
  ]
}

export default navigation
