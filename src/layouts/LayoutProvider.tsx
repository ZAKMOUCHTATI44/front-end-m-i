import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default LayoutProvider
