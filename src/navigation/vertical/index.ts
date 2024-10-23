// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Répertoire',
      icon: 'tabler:search',
      children: [
        {
          title: "Influenceurs",
          path: '/influenceurs'
        },
        {
          title: 'Top List',
          path: '/top-list'
        },
        {
          title: 'Collaborations',
          path: '/collaborations'
        }
      ]
    },
    {
      title: "Calculateurs",
      icon: 'tabler:chart-donut',
      children: [
        {
          title: "TikTok",
          path: '/calculateurs/tiktok'
        },
        {
          title: "Instagram",
          path: '/calculateurs/instagram'
        },
        {
          title: "YouTube",
          path: '/calculateurs/youtube'
        }
      ]
    },
    {
      title: 'Suivi Concurrentiel',
      path: '/second-page',
      icon: 'tabler:mail',
    },
    {
      title: 'Favoris',
      path: '/favoris',
      icon: 'tabler:heart',
    },
    {
      title: 'Classement',
      path: '/ranking',
      icon: 'tabler:timeline',
    },
    {
      title: 'Niches',
      path: '/niches',
      icon: 'tabler:clipboard-text',
    },

  ]
}

export default navigation
