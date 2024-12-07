import { Card, Checkbox, FormControlLabel, FormLabel, Grid, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import Icon from 'src/@core/components/icon'
import InfluenceScoreRange from './InfluenceScoreRange'
import LanguageFilter from './LanguageFilter'

const SourcesFilter = () => {
  const sources = [
    { name: 'Facebook', status: 'Connect', icon: 'brand-facebook' },
    { name: 'Instagram', status: 'Connect', icon: 'brand-instagram' },
    { name: 'X (Twitter)', count: 427, icon: 'brand-x' },
    { name: 'TikTok', count: 4642, icon: 'brand-tiktok' },
    { name: 'Videos', count: 1221, icon: 'brand-youtube' },
    { name: 'News', count: 18686, icon: 'file-rss' },
    { name: 'Podcasts', count: 924, icon: 'brand-google-podcasts' },
    { name: 'Forums', count: 3363, icon: 'message-2-bolt' },
    { name: 'Blogs', count: 1215, icon: 'brand-blogger' },
    { name: 'Web', count: 7945, icon: 'world-bolt' }
  ]

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <Card sx={{ padding: 3 }}>
        <Typography m={3}>Sources</Typography>
        <Grid container>
          {sources.map(source => (
            <Grid item lg={6} key={source.name} sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox name='source' id={source.name} />
              <FormLabel htmlFor={source.name} sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {/* <img src={source.icon} alt={source.name} width={20} height={20} /> */}
                <Icon icon={`tabler:${source.icon}`} fontSize={20} />

                <Box>
                  <Typography>
                    {source.name}{' '}
                    <Typography variant='caption' sx={{ display: 'block' }}>
                      {source.count}
                    </Typography>
                  </Typography>
                </Box>
              </FormLabel>
              {/* <FormControlLabel label={source.name} control={<Checkbox name='source' />} /> */}
            </Grid>
          ))}
        </Grid>
      </Card>
      <Card sx={{ padding: 3 }}>
        <Typography m={3}>Sentiment</Typography>

        <Grid container>
          <FormControlLabel label='Negative' control={<Checkbox defaultChecked name='sentiment' />} />
          <FormControlLabel label='Neutral' control={<Checkbox name='sentiment' />} />
          <FormControlLabel label='Positive' control={<Checkbox name='sentiment' />} />
        </Grid>
      </Card>
      <InfluenceScoreRange />
      <LanguageFilter />
    </Box>
  )
}

export default SourcesFilter
