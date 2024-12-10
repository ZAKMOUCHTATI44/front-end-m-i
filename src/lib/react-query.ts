import { QueryFunction, QueryKey, useQuery, UseQueryOptions } from 'react-query'

type UseCustomQueryOptions<TData> = UseQueryOptions<TData, Error, TData, QueryKey>

const UseQueryHooks = <TData>(
  queryKey: string | [string, ...any[]],
  fetchDataFunction: QueryFunction<TData>,
  options?: UseCustomQueryOptions<TData>
) => {
  const accessToken = window.localStorage.getItem('accessToken') || ''

  const defaultOptions: UseCustomQueryOptions<TData> = {
    // Your default options here
    enabled: !!accessToken,
    ...options
  }
  const { data, error, isLoading } = useQuery<TData, Error>(queryKey, fetchDataFunction, defaultOptions)

  return {
    data,
    isLoading,
    error
  } as const
}

export default UseQueryHooks
