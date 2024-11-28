import { Card, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import Loading from 'src/components/Loading'
import api from 'src/lib/api'
import UseQueryHooks from 'src/lib/react-query'
import Error500 from 'src/pages/500'
import CustomAvatar from 'src/@core/components/mui/avatar'
import { Box } from '@mui/system'
import Link from 'next/link'
import SocialMediaChart from 'src/components/influencers/SocialMediaChart'

// import { formatNumber } from 'src/lib/numbers'
import FollowersCredibility from 'src/components/influencers/FollowersCredibility'
import SplitGender from 'src/components/influencers/SplitGender'
import fakedata from '../../../data/audience.json'
import SocialCoverage from 'src/components/influencers/SocialCoverage'

// import LocationByCountries from 'src/components/influencers/LocationByCountries'
import PostingFreaquency from 'src/pages/influenceurs/show/PostingFrequency'
import PostMedia from 'src/components/influencers/PostMedia'
import ProfilesSimilar from 'src/pages/influenceurs/show/ProfilesSimilar'
import WordCloud from 'src/pages/influenceurs/show/[id]/WordCloud'

// import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'

const Page = () => {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  // const downloadPDF = async () => {
  //   if (containerRef.current) {
  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //       unit: 'mm',
  //       format: 'a4' // A4 size in mm
  //     })

  //     const pageWidth = pdf.internal.pageSize.getWidth()
  //     const pageHeight = pdf.internal.pageSize.getHeight()

  //     const divs = containerRef.current.querySelectorAll('div.page') // Select all divs with class 'page'

  //     for (let i = 0; i < divs.length; i++) {
  //       const div = divs[i] as HTMLElement

  //       // Capture each div as an image
  //       const canvas = await html2canvas(div)
  //       const imgData = canvas.toDataURL('image/png')

  //       const imgWidth = pageWidth
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width

  //       // Add the image to the PDF
  //       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

  //       // Add a new page if it's not the last div
  //       if (i < divs.length - 1) {
  //         pdf.addPage()
  //       }
  //     }

  //     // Save the PDF
  //     pdf.save('captured-divs.pdf')
  //   }
  // }

  const { id } = router.query

  const { error, isLoading, data } = UseQueryHooks<Data>(
    [`/reports/${id}`],
    async () => {
      const response = await api.get<Data>(`/reports/${id}`)

      return response.data
    },
    { enabled: !!id }
  )
  if (error) return <Error500 />

  if (isLoading) return <Loading />

  return (
    <>
      {data && (
        <Grid container spacing={6} ref={containerRef}>
          <Grid item xs={4} lg={4}>
            <Card
              sx={{
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div>
                <Box
                  sx={{
                    display: 'inline-block',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #e269e7, #48abef)',
                    padding: '3px',
                    marginRight: '10px',
                    mb: 2
                  }}
                >
                  <CustomAvatar
                    src={data.creator.pictureUrl}
                    variant='rounded'
                    alt={data.creator.fullName}
                    sx={{ width: 100, height: 100, backgroundColor: '#fff', borderRadius: '50%' }}
                  />
                </Box>
                <Typography>{data.creator.fullName}</Typography>
                <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'center' }}>
                  {data.creator.networksStats.map(item => (
                    <Link href={item.profileUrl} target='_blank' key={item.network}>
                      <img src={`/images/social-media/${item.network}.png`} alt={item.network} width={20} height={20} />
                    </Link>
                  ))}
                </Box>
              </div>
              <Box
                sx={{
                  marginTop: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <Typography variant='h6' mb={4}>
                  Biography :
                </Typography>
                <Typography variant='body2' mb={4}>
                  {data.creator.biography}
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={8} lg={8}>
            <Box
              sx={{
                // padding: '30px 10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  border: '1px solid #e2e8f0',
                  padding: '25px 10px'
                }}
              >
                <Grid
                  xs={12}
                  lg={6}
                  sx={{
                    my: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px 10px',
                    gap: '10px',
                    borderRight: '1px solid #e2e8f0'
                  }}
                >
                  <Typography variant='h6' style={{ display: 'block', color: '#000', fontWeight: 'bold' }}>
                    Industries & Niches
                  </Typography>
                  <Typography variant='subtitle2' style={{ display: 'block', fontWeight: 'bold', color: '#5045bc' }}>
                    {data.creator.industries?.name}
                  </Typography>
                </Grid>
                <Grid xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <SocialMediaChart data={data} />
                </Grid>
              </Card>
              <Grid sx={{ display: 'flex', gap: '10px' }}>
                <Grid xs={12} lg={8}>
                  <FollowersCredibility props={fakedata.audience_type} />
                </Grid>
                <Grid xs={12} lg={4}>
                  <SplitGender props={fakedata.audience_type} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            mt={5}
            spacing={6}
            sx={{
              padding: '30px 10px'
            }}
          >
            <SocialCoverage />
          </Grid>

          {/* <LocationByCountries demography={fakedata.demography} /> */}
          <PostingFreaquency />

          <Box
            sx={{
              padding: '30px 10px',
              width: '100%'
            }}
          >
            <ProfilesSimilar influencers={data.similarProfiles} />
          </Box>
          <Box
            mt={5}
            sx={{
              padding: '30px 10px'
            }}
          >
            <PostMedia data={data} />
          </Box>
          <Box
            sx={{
              marginTop: '20px'
            }}
          >
            <WordCloud hashtags={fakedata.hashtags} title='Hash Tags' />
          </Box>
          <Box
            sx={{
              marginTop: '20px'
            }}
          >
            <WordCloud hashtags={fakedata.captions} title='Captions most used' />
          </Box>
          <div
            style={{
              padding: '160px 10px',
              marginTop: '10px',
              width: '100%',
              background:
                'linear-gradient(94deg, #ff56e3 10.66%, #3dd1fe 53.03%, #410093 96.34%, rgba(255,0,238,0.26) 191.41%, rgba(255,59,212,0) 191.43%)'
            }}
          >
            <Typography
              variant='h3'
              sx={{
                color: '#FFF',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              This report has been delivered by
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <img src='/images/logo.png' width={150} alt='' />
            </div>
          </div>
        </Grid>
      )}
    </>
  )
}

export default Page
