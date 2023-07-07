import TemplateDefault from '../../src/templates/Default'
import GlobalStyle, { Container, PublicarBtn, Title } from '../../src/GlobalStyles'



export default function Home() {
  return (
    <TemplateDefault>
      <GlobalStyle />
      <Container>
        <Title>Meus Anuncios</Title>
        <PublicarBtn>Publicar Novos Anuncios</PublicarBtn>

        
      </Container>
    </TemplateDefault>
  )
}
