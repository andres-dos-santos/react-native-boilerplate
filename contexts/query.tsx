import {
  QueryClient,
  QueryClientProvider,
  useQuery as useReactQuery,
  type DefaultError,
  type UndefinedInitialDataOptions,
  type QueryKey,
} from '@tanstack/react-query'
import { ComponentProps } from 'react'

export const client = new QueryClient()

export function QueryProvider(
  props: Omit<ComponentProps<typeof QueryClientProvider>, 'client'>,
) {
  return (
    <QueryClientProvider {...props} client={client}>
      {props.children}
    </QueryClientProvider>
  )
}

export function useQuery<D>(
  queryKey: QueryKey[],
  queryFn: () => Promise<D>,
  options?: UndefinedInitialDataOptions<unknown, Error, D, QueryKey>,
) {
  const { data, isLoading } = useReactQuery<unknown, DefaultError, D>({
    queryKey,
    queryFn,
    ...options,
  })

  return { isLoading, data } as const
}
