import { Button, Card, Rating, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Icon from 'src/@core/components/icon'

interface Course {
  title: string
  instructor: string
  thumbnail: string
  rating: number
  rantingUserCount: number
}
const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Card sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: '25px' }}>
      <div
        style={{
          backgroundImage: `url(${course.thumbnail})`,
          width: '100%',
          height: '200px',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <Typography variant='h6' sx={{ fontWeight: '900' }}>
          {course.title}
        </Typography>
        <Typography variant='subtitle2' sx={{ fontWeight: '900' }}>
          {course.instructor}
        </Typography>
        <Typography variant='subtitle2' sx={{ fontWeight: '900', display: 'flex', alignItems: 'center' }}>
          <Rating value={course.rating} size='small' /> ({course.rantingUserCount})
        </Typography>
      </div>
      <Link href={'/academy/course'} style={{ textAlign: 'center' }}>
        <Button variant='contained' fullWidth>
          Get Started
          <Icon icon='tabler:chevron-right' fontSize={18} />
        </Button>
      </Link>
    </Card>
  )
}

export default CourseCard
