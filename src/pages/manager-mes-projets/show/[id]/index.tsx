import React from 'react'
import KanbanBoard from '../KanbanBoard'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()

  const { id } = router.query as { id: string }

  return <div>{id && <KanbanBoard id={id} />}</div>
}

export default Page
