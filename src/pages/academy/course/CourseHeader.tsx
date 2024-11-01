import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Grid, Rating } from '@mui/material'

// ** Third Party Imports

// ** Types

const CourseHeader = () => {
  // ** State

  return (
    <Card
      sx={{
        backgroundColor: '#2d2f31',
        p: '80px 10px'
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7} md={7}>
          <CardContent
            sx={{
              pt: 0,
              display: 'flex',
              alignItems: 'flex-end',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                ml: { xs: 0, md: 6 },
                alignItems: 'center',
                flexWrap: ['wrap', 'nowrap'],
                justifyContent: ['center', 'space-between']
              }}
            >
              <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start'] }}>
                <Typography variant='h2' sx={{ mb: 2.5, color: '#FFF' }}>
                  AI & Digital Marketing: Mastering Content Creation & ChatGPT
                </Typography>
                <Typography variant='subtitle1' sx={{ mb: 2.5, color: '#FFF' }}>
                  Power Up Your Content Impact with AI: ChatGPT, SEO, Marketing Automation, Visuals, Ethical Practices
                  &amp; AI Strategy
                </Typography>
                <Typography
                  variant='subtitle2'
                  sx={{ fontWeight: '900', display: 'flex', alignItems: 'center', color: '#FFF' }}
                >
                  <Rating value={5} size='small' /> (219)
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: ['center', 'flex-start']
                  }}
                ></Box>
              </Box>
            </Box>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <img src='https://img-c.udemycdn.com/course/480x270/3986354_f5ef_8.jpg' width={350} alt='DADAD' />
          </Card>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CourseHeader
