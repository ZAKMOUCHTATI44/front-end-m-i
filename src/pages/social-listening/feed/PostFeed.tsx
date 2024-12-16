import React from 'react'
import { Card, Typography, Box, Button } from '@mui/material'
import Icon from 'src/@core/components/icon'

const PostFeed = () => {
  const data = [
    {
      title: "Filorga repousse un peu plus les signes de l'âge avec son nouveau sérum révolutionnaire",
      logo: 'data:image/jpeg;base64,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',
      platform: 'parismatch.be',
      visits: '14M',
      influence_score: '10/10',
      date: '9 oct. 2024',
      sentiment: 'Neutral',
      description:
        'Ce sérum revitalisant est hautement concentré en NCEF, un complexe unique exclusivement développé par FILORGA et inspiré des injections anti-âge'
    },
    {
      title: 'Rencontre avec… Stéphane Chanu, directeur général France de Filorga',
      logo: 'data:image/jpeg;base64,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',
      platform: 'Le Moniteur des pharmacies',
      visits: '120 K',
      influence_score: '10/10',
      date: 'Il y a 1 mois',
      sentiment: 'Neutral',
      description:
        'Stéphane Chanu, directeur général de Filorga France, dévoile la nouvelle stratégie de la marque après son rachat par Colgate-Palmolive.'
    },
    {
      title: 'Filorga lisse les rides, pas les expressions !',
      logo: 'data:image/jpeg;base64,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',
      platform: 'Madame Figaro',
      visits: '114M',
      influence_score: '10/10',
      date: '25 jan. 2024',
      sentiment: 'Neutral',
      description:
        'Premier laboratoire français de médecine esthétique*, Filorga lance time-filler shot 5xp, un sérum concentré inspiré de la toxine botulique,...'
    },
    {
      title:
        'Découvrez TIME-FILLER 5XP des Laboratoires FILORGA, lauréate du Prix Santé Magazine 2023 dans la catégorie Soin visage Anti-âge.',
      logo: 'data:image/jpeg;base64,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',
      platform: 'Santé Magazine',
      visits: '114M',
      influence_score: '10/10',
      date: '25 août 2023',
      sentiment: 'Neutral',
      description:
        "Grâce une combinaison inédite d'actifs et une technologie unique, cette crème anti-âge de jour déploie son efficacité pour lisser cinq types..."
    }
  ]

  return (
    <div>
      {data.map((item, index) => (
        <Card sx={{ margin: '10px', padding: 3 }} key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={item.logo} alt={item.platform} width={75} height={75} style={{ borderRadius: '50%' }} />
            <Box>
              <Typography variant={'h5'}>{item.title}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                <Typography variant='subtitle2'>{item.platform}</Typography>
                <Typography variant='subtitle2'>{item.visits}</Typography>
                <Typography variant='subtitle2'>Influence score {item.influence_score} </Typography>
              </Box>
            </Box>
          </Box>
          <Typography sx={{ padding: 2 }}>{item.description}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
            <Button
              color='success'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:eye' fontSize={20} />
              Visit
            </Button>
            <Button
              color='warning'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:tags' fontSize={20} />
              Tags
            </Button>
            <Button
              color='error'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:trash' fontSize={20} />
              Delete
            </Button>
            <Button
              color='secondary'
              variant='outlined'
              size='small'
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Icon icon='tabler:file-text' fontSize={20} />
              Add to PDF report
            </Button>
          </Box>
        </Card>
      ))}
    </div>
  )
}

export default PostFeed
