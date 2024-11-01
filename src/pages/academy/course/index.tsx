import React from 'react'
import CourseHeader from './CourseHeader'
import { Card, Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'

const index = () => {
  const courseModules = [
    { title: 'Introduction to Content Creation with ChatGPT', lectures: 7, duration: '20min' },
    { title: 'AI in Marketing and Content Creation', lectures: 5, duration: '20min' },
    { title: 'Crafting Compelling Copy with ChatGPT', lectures: 5, duration: '18min' },
    { title: 'Visual Content Creation using DALL-E', lectures: 5, duration: '18min' },
    { title: 'Midjourney and Engaging Visual Content', lectures: 6, duration: '22min' },
    { title: 'Video Content with AI', lectures: 5, duration: '24min' },
    { title: 'Chatbots and Conversational Content', lectures: 5, duration: '24min' },
    { title: 'Other AI Applications in Marketing and Content Generation', lectures: 5, duration: '19min' },
    { title: 'Practical Implementation: Content Ideation', lectures: 5, duration: '29min' },
    { title: 'Advanced Techniques: Combining Text and Visuals', lectures: 6, duration: '18min' }
  ]

  return (
    <div>
      <CourseHeader />
      <Grid mt={6}>
        <Typography variant='h2' sx={{ fontWeight: '900' }}>
          Course content
        </Typography>
        <Typography variant='subtitle1' sx={{ fontWeight: '900' }}>
          21 sections • 124 lectures • 7h 43m total length
        </Typography>
        <Grid spacing={6}>
          <div style={{ width: '75%', display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '20px' }}>
            {courseModules.map(course => (
              <Card
                sx={{ padding: '15px' }}
                key={course.title}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  <Icon icon='tabler:chevron-down' fontSize={20} /> {course.title}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <Typography>{course.lectures} lectures - </Typography>
                  <Typography>{course.duration}</Typography>
                </div>
              </Card>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default index
