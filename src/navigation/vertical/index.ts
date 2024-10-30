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
      title: 'Influenceurs',
      path: '/influenceurs',
      icon: 'tabler:users'
    },
    {
      title: 'Manager Mes Projets',
      path: '/manager-mes-projets',
      icon: 'tabler:list'
    },
    {
      title: 'Classement',
      path: '/ranking',
      icon: 'tabler:timeline'
    },
    {
      title: 'Social Listening',
      path: '/social-listening',
      icon: 'tabler:speakerphone'
    },

    {
      title: 'Favoris',
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
      icon: 'tabler:world'
    },
    {
      title: 'Academie',
      path: '/academie',
      icon: 'tabler:clipboard-text'
    },
    {
      title: 'Support',
      path: '/academie',
      icon: 'tabler:headphones'
    },
    {
      title: 'Déconnexion',
      path: '/academie',
      icon: 'tabler:logout'
    }
  ]
}

export default navigation
