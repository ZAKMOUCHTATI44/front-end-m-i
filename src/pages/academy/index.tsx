import { Grid } from '@mui/material'
import React from 'react'
import courses from '../../data/course.json'
import CourseCard from './CourseCard'
import FormSearch from './FormSearch'

const Page = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <FormSearch />
          <Grid container spacing={6} mt={6}>
            {courses.map(course => (
              <Grid item xs={12} sm={6} md={4} key={course.title}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Page
