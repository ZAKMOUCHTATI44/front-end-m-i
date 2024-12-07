import { useRouter } from 'next/router'
import FormKeyWord from './FormKeyWord'

const AnalyticsDashboard = () => {
  const router = useRouter()
  const handle = (keyword: string) => {
    router.push(`/social-listening/reports/?keyword=${keyword}`)
  }

  return (
    <>
      <FormKeyWord handleChange={handle} />
    </>
  )
}

export default AnalyticsDashboard
