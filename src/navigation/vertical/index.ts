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
      path: '/dashboard',
      icon: 'tabler:home'
    },
    {
      sectionTitle: ''
    },
    {
      title: 'Influencers',
      path: '/influenceurs',
      icon: 'wpf:search'
    },
    {
      title: 'Manage My Projects',
      path: '/manager-mes-projets',
      icon: 'tabler:layout-kanban'
    },
    {
      title: 'Ranking',
      path: '/ranking',
      icon: 'tabler:timeline'
    },
    {
      title: 'Social Listening',
      path: '/social-listening',
      icon: 'grommet-icons:assist-listening'
    },

    {
      title: 'Favorites',
      path: '/favoris',
      icon: 'tabler:heart'
    },
    {
      title: 'Niches',
      path: '/niches',
      icon: 'octicon:goal-24'
    },
    {
      title: 'Marketplace',
      path: '/marketplace',
      icon: 'mdi:marketplace-outline',
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
      sectionTitle: ''
    },
    {
      title: 'Academy',
      path: '/academy',
      icon: 'carbon:ibm-watson-machine-learning'
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
