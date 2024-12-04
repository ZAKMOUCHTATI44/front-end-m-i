import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, CardContent, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import { Box } from '@mui/system'

const Card = styled(MuiCard)<CardProps>(() => ({
  border: 0,
  boxShadow: 'none',
  backgroundSize: 'cover',
  backgroundColor: 'transparent',
  backgroundImage: 'url(/images/pages/header-bg.png)'
}))

const index = () => {
  const questions = [
    {
      title: 'What is InflAuditor?',
      desc: 'InflAuditor is a Moroccan platform that connects local and international brands with local influencers. It allows businesses to find, analyze, and collaborate with content creators to launch effective influencer campaigns.',
      isExpand: true
    },
    {
      title: 'How can I find an influencer on the platform?',
      desc: 'With our advanced search engine, you can filter influencers by niche, audience, engagement rate, and other criteria to find the most relevant profiles for your campaigns.',
      isExpand: false
    },
    {
      title: 'What types of brands can use InflAuditor?',
      desc: 'All brands, whether small or large, can use InflAuditor. The platform is designed to meet the needs of various sectors, from fashion to tech, beauty, and many more.',
      isExpand: false
    },
    {
      title: 'How does campaign management work on the platform?',
      desc: 'You can track and manage all your projects directly on InflAuditor, from creating briefs to analyzing final performance. All tools are centralized for simplified management.',
      isExpand: false
    },
    {
      title: 'What statistics can I access?',
      desc: "You will have access to detailed statistics on influencer engagement, reach, and impact, as well as real-time tracking of your campaign's performance.",
      isExpand: false
    },
    {
      title: 'Is the platform only for Moroccan brands?',
      desc: 'No, InflAuditor is open to international brands looking to collaborate with Moroccan influencers. Our database connects local influencers with businesses of all sizes and sectors.',
      isExpand: false
    }
  ]

  return (
    <div>
      <Card>
        <CardContent sx={{ pt: 24, textAlign: 'center', pb: theme => `${theme.spacing(24)} !important` }}>
          <Typography sx={{ fontWeight: 500, fontSize: '1.225rem', lineHeight: 1.385 }}>
            Frequently asked questions asked
          </Typography>
          <Typography variant='subtitle1'>DO YOU HAVE A QUESTION? WE'RE HERE TO HELP</Typography>
        </CardContent>
      </Card>

      <Box sx={{ width: '75%', marginInline: 'auto', mt: 12 }}>
        {questions.map(item => (
          <Accordion key={item.title}>
            <AccordionSummary
              expandIcon={<Icon icon='tabler:chevron-down' fontSize={20} />}
              aria-controls='panel1-content'
              id='panel1-header'
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails>{item.desc}</AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </div>
  )
}

export default index
