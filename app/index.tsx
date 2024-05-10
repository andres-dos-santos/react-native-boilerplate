import { Redirect } from 'expo-router'

import { StatusBar } from '../components/ui/status-bar'

export default function Home() {
  const isAuthenticated = false

  return (
    <>
      <StatusBar isInverted />

      <Redirect href={!isAuthenticated ? '/auth' : '/main'} />
    </>
  )
}
