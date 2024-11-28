import { Card, Typography } from '@mui/material'
import React from 'react'

interface WordCloudProps {
  hashtags: string[]
  title: string // Define the type of hashtags
}

const WordCloud: React.FC<WordCloudProps> = ({ hashtags, title }) => {
  // Utility function to get random font size and color
  const getRandomStyles = (): React.CSSProperties => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFC300']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    return { color: randomColor }
  }

  // Utility function to filter out duplicate hashtags
  const uniqueHashtags = Array.from(new Set(hashtags))

  return (
    <Card
      sx={{
        padding: '40px'
      }}
    >
      <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {title}
      </Typography>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0px',

          marginTop: '30px',
          textAlign: 'center'
        }}
      >
        {uniqueHashtags.map((hashtag, index) => (
          <span
            key={index}
            style={{
              ...getRandomStyles(),
              margin: '2px',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => ((e.target as HTMLSpanElement).style.transform = 'scale(1.2)')}
            onMouseLeave={e => ((e.target as HTMLSpanElement).style.transform = 'scale(1)')}
            dangerouslySetInnerHTML={{ __html: hashtag }}
          ></span>
        ))}
      </div>
    </Card>
  )
}

export default WordCloud
