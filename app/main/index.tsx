import { Container } from '../../components/ui/container'
import { P } from '../../components/ui/p'

import { FONTS } from '../../styles/fonts'

export default function Main() {
  return (
    <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
      <P style={{ fontFamily: FONTS['inter-medium'] }}>Main</P>
    </Container>
  )
}
