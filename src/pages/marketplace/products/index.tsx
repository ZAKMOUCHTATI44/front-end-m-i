import { Button, Card, Grid } from '@mui/material'
import React from 'react'
import SelectBox from 'src/components/ui/SelectBox'

const index = () => {
  const contentTypes = [
    { label: 'YouTube Video', value: 'youtube-video' },
    { label: 'Instagram Post', value: 'instagram-post' },
    { label: 'Facebook Post', value: 'facebook-post' },
    { label: 'Sponsored Tweet', value: 'sponsored-tweet' },
    { label: 'Sponsored Blog Post', value: 'sponsored-blog-post' },
    { label: 'Affiliation Links', value: 'affiliation-links' },
    { label: 'Instagram Stories', value: 'instagram-stories' },
    { label: 'Snapchat Stories', value: 'snapchat-stories' },
    { label: 'Pinterest Post', value: 'pinterest-post' },
    { label: 'TikTok', value: 'tiktok' },
    { label: 'LinkedIn Campaign', value: 'linkedin-campaign' },
    { label: 'Consumer Review', value: 'consumer-review' },
    { label: 'UGC Video', value: 'ugc-video' }
  ]

  const categories = [
    { label: 'Activity & Events', value: 'activity-events' },
    { label: 'Food & Spirits', value: 'food-spirits' },
    { label: 'Animals', value: 'animals' },
    { label: 'Apps & Online Services', value: 'apps-online-services' },
    { label: 'Associations', value: 'associations' },
    { label: 'Banking & Insurance', value: 'banking-insurance' },
    { label: 'Beauty & Wellness', value: 'beauty-wellness' },
    { label: 'B2B', value: 'b2b' },
    { label: 'Entertainment & Leisure', value: 'entertainment-leisure' },
    { label: 'Publishing & Stationery', value: 'publishing-stationery' },
    { label: 'High-Tech & Appliances', value: 'high-tech-appliances' },
    { label: 'Real Estate', value: 'real-estate' },
    { label: 'Video Games', value: 'video-games' },
    { label: 'Government & Industry', value: 'government-industry' },
    { label: 'Luxury', value: 'luxury' },
    { label: 'Home & Garden', value: 'home-garden' },
    { label: 'Fashion & Accessories', value: 'fashion-accessories' },
    { label: 'Parents & Children', value: 'parents-children' },
    { label: 'Commerce & E-commerce', value: 'commerce-e-commerce' },
    { label: 'Recruitment & Training', value: 'recruitment-training' },
    { label: 'Health', value: 'health' },
    { label: 'Sport', value: 'sport' },
    { label: 'Transportation & Automotive', value: 'transportation-automotive' },
    { label: 'Tourism', value: 'tourism' }
  ]

  return (
    <div>
      <Card sx={{ padding: '40px 20px' }}>
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <SelectBox
              items={contentTypes}
              label='Social networks'
              id={'content-types'}
              defaultValue='0'
              handleChange={e => console.log(e)}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectBox
              items={categories}
              label='Categories'
              id={'categories'}
              defaultValue='0'
              handleChange={e => console.log(e)}
            />
          </Grid>
        </Grid>
      </Card>

      <Button variant='contained'>Search</Button>
    </div>
  )
}

export default index
