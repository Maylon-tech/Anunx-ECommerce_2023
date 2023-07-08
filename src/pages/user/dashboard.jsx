import TemplateDefault from '../../src/templates/Default'
import GlobalStyle, { 
  Container, 
  PublicarBtn, 
  Title, 
  ButtonEdit,
  ButtonRemove,
  Card, 
  CardActions, 
  CardContent, 
  CardTopImage, 
  ContainerBottom, 
  GridContainer, 
  GridItem,
  Price,
  ProductTitle,
} from '../../src/GlobalStyles'




const Home = () => {
  return (
    <TemplateDefault>
      <GlobalStyle />
      <Container>

        <Title>Meus Anuncios</Title>
        <PublicarBtn>Publicar Novos Anuncios</PublicarBtn>
        
      </Container>

      {/* <ContainerBottom>

        <GridContainer>
          <GridItem>
            <Card>
              <CardTopImage 
                image={'https://source.unplash.com/random'} 
                title="Titulo"
              />
              <CardContent>
                <ProductTitle>Produtos</ProductTitle>
                <Price>$ 60.00</Price>
              </CardContent>
              <CardActions>
                <ButtonEdit>Editar</ButtonEdit>
                <ButtonRemove>Remover</ButtonRemove>
              </CardActions>
            </Card>
          </GridItem>

        </GridContainer>

      </ContainerBottom>  */}
    </TemplateDefault>
  )
}

export default Home