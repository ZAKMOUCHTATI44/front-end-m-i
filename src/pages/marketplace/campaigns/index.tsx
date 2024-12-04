import { Box, Button, Card, Grid, Pagination, Typography } from '@mui/material'
import React from 'react'
import SelectBox from 'src/components/ui/SelectBox'
import Icon from 'src/@core/components/icon'
import campaigns from '../../../data/campaigns.json'
import CampaignCard from './CampaignCard'

const index = () => {
  const socialMediaList = [
    {
      label: 'Twitter',
      value: 'twitter',
      image: '/images/social-media/twitter.png'
    },
    {
      label: 'Instagram',
      value: 'instagram',
      image: '/images/social-media/instagram.png'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin',
      image: '/images/social-media/linkedin.png'
    },
    {
      label: 'YouTube',
      value: 'youtube',
      image: '/images/social-media/youtube.png'
    },
    {
      label: 'TikTok',
      value: 'tiktok',
      image: '/images/social-media/tiktok.png'
    },
    {
      label: 'Snapchat',
      value: 'snapchat',
      image: '/images/social-media/snapchat.png'
    }
  ]
  const objectives = [
    { label: 'Increase Brand Awareness', value: 'increase_brand_awareness' },
    { label: 'Boost Engagement', value: 'boost_engagement' },
    { label: 'Drive Sales', value: 'drive_sales' },
    { label: 'Generate Leads', value: 'generate_leads' },
    { label: 'Promote Events', value: 'promote_events' }
  ]
  const sortingOptions = [
    { label: 'Most Recent Campaigns', value: 'most_recent' },
    { label: 'Oldest Campaigns', value: 'oldest' },
    { label: 'Highest Budget', value: 'highest_budget' },
    { label: 'Most Popular Campaigns', value: 'most_popular' },
    { label: 'Closest Deadline', value: 'closest_deadline' }
  ]

  return (
    <div>
      <Card sx={{ padding: '40px 20px' }}>
        <Grid container spacing={6} sx={{ alignItems: 'end' }}>
          <Grid item xs={3}>
            <SelectBox
              items={socialMediaList}
              label='Social Media'
              id={'socialMedia'}
              defaultValue='0'
              handleChange={e => console.log(e)}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectBox
              items={objectives}
              label='Objectives'
              id={'objectives'}
              defaultValue='0'
              handleChange={e => console.log(e)}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectBox
              items={sortingOptions}
              label='Sort By'
              id={'sortBy'}
              defaultValue='0'
              handleChange={e => console.log(e)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant='contained' fullWidth sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Icon icon='tabler:search' fontSize={20} />
              Search
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={6} mt={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant='h5'>Campaign available ({campaigns.length})</Typography>
        </Grid>
        {campaigns.map(campaign => (
          <Grid item xs={12} sm={6} md={3} key={campaign.title}>
            <CampaignCard campaign={campaign} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: theme => theme.spacing(6) }}>
        <Pagination count={5} color='primary' onChange={(e, value) => console.log(value)} />
      </Box>
    </div>
  )
}

export default index
