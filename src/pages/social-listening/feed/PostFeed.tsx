import React from 'react'
import { Card, Typography, Box, Button } from '@mui/material'
import Icon from 'src/@core/components/icon'

const PostFeed = () => {
  const data = [
    {
      title: "AUDIO iLLS 'TSH' [Perky Recordings]",
      logo: 'https://cdn.app.brand24.com/fav_soundcloud.com.ico',
      platform: 'soundcloud.com',
      visits: '114M',
      influence_score: '10/10',
      date: '2024-12-05 04:00 PM',
      sentiment: 'Neutral',
      description:
        '[...] that mirrors its challenges. ⚡Like the Track? Click the [Repost] ↻ button so more people can hear it and download it here: https://www.beatport.com/label/perky-recordings/124070 ⚡Subscribe to our Youtube Channel - goo.gl/8QosjS ⚡Follow our Drum & Bass Spotify Playlist: goo.gl/Dyo4hY 👉 Data Transmission Spotify: bit.ly/3TexYS8 YouTube:'
    },
    {
      title: 'Apple Watch Series 10 - recenzja. Jak wypada nowy smartwatch Apple?',
      logo: 'https://cdn.app.brand24.com/fav_benchmark.pl.png',
      platform: 'soundcloud.com',
      visits: '114M',
      influence_score: '10/10',
      date: '2024-12-05 04:00 PM',
      sentiment: 'Neutral',
      description:
        '[...] that mirrors its challenges. ⚡Like the Track? Click the [Repost] ↻ button so more people can hear it and download it here: https://www.beatport.com/label/perky-recordings/124070 ⚡Subscribe to our Youtube Channel - goo.gl/8QosjS ⚡Follow our Drum & Bass Spotify Playlist: goo.gl/Dyo4hY 👉 Data Transmission Spotify: bit.ly/3TexYS8 YouTube:'
    },
    {
      title: "AUDIO iLLS 'TSH' [Perky Recordings]",
      logo: 'https://cdn.app.brand24.com/fav_komputerswiat.pl.ico',
      platform: 'soundcloud.com',
      visits: '114M',
      influence_score: '10/10',
      date: '2024-12-05 04:00 PM',
      sentiment: 'Neutral',
      description:
        '[...] that mirrors its challenges. ⚡Like the Track? Click the [Repost] ↻ button so more people can hear it and download it here: https://www.beatport.com/label/perky-recordings/124070 ⚡Subscribe to our Youtube Channel - goo.gl/8QosjS ⚡Follow our Drum & Bass Spotify Playlist: goo.gl/Dyo4hY 👉 Data Transmission Spotify: bit.ly/3TexYS8 YouTube:'
    },
    {
      title: 'icentrumsklep',
      logo: 'https://app.brand24.com/static/img/icons/favs/tiktok.com.ico.png',
      platform: 'soundcloud.com',
      visits: '114M',
      influence_score: '10/10',
      date: '2024-12-05 04:00 PM',
      sentiment: 'Neutral',
      description:
        '[...] that mirrors its challenges. ⚡Like the Track? Click the [Repost] ↻ button so more people can hear it and download it here: https://www.beatport.com/label/perky-recordings/124070 ⚡Subscribe to our Youtube Channel - goo.gl/8QosjS ⚡Follow our Drum & Bass Spotify Playlist: goo.gl/Dyo4hY 👉 Data Transmission Spotify: bit.ly/3TexYS8 YouTube:'
    }
  ]

  return (
    <div>
      {data.map((item, index) => (
        <Card sx={{ margin: '10px', padding: 3 }} key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={item.logo} alt={item.platform} width={35} height={35} style={{ borderRadius: '50%' }} />
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
