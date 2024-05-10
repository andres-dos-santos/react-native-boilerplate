import { useFonts as useExpoFonts } from 'expo-font'

export function useFonts() {
  const [fontsLoaded] = useExpoFonts({
    // inter
    'inter-regular': require('../assets/fonts/inter/Inter-Regular.ttf'),
    'inter-medium': require('../assets/fonts/inter/Inter-Medium.ttf'),
    'inter-semibold': require('../assets/fonts/inter/Inter-SemiBold.ttf'),
    // urbanist
    'urbanist-regular': require('../assets/fonts/urbanist/Urbanist-Regular.ttf'),
    'urbanist-medium': require('../assets/fonts/urbanist/Urbanist-Medium.ttf'),
    'urbanist-semibold': require('../assets/fonts/urbanist/Urbanist-SemiBold.ttf'),
  })

  return fontsLoaded
}
