import React from 'react'
import TemplateDefault from '../src/templates/Default'
import { 
  Card,
  CardContent,
  CardTopImage,
  Container, 
  GridContainer, 
  GridItem, 
  InputSearch, 
  Price, 
  ProductTitle, 
  SearchContainer, 
  Title, 
} from '@/styles/home'
import { BiSearch } from 'react-icons/bi'

const Home = () => {

  return (
    <TemplateDefault>
      <Container>
        <Title>O que deseja encontrar?</Title>
        
        <SearchContainer>
          <InputSearch type='text' placeholder='Ex: iPhone XS Max com garantia' />
          <BiSearch />
        </SearchContainer>

      </Container> 
      
      <Container>
        <Title>Destaques</Title>
        <GridContainer>
          <GridItem>
            <Card>
              <CardTopImage 
                src="https://i.pinimg.com/474x/e3/cc/8d/e3cc8da863b41546012ed6c5495604e5.jpg" 
                title="Titulo"
              />
              <CardContent>
                <ProductTitle>Produtos</ProductTitle>
                <Price>$ 160.00</Price>
              </CardContent>              
            </Card>
          </GridItem>

          <GridItem>
            <Card>
              <CardTopImage 
              src="https://i.pinimg.com/474x/e3/cc/8d/e3cc8da863b41546012ed6c5495604e5.jpg" 
                title="Titulo"
              />
              <CardContent>
                <ProductTitle>Produtos 2</ProductTitle>
                <Price>$ 6450.00</Price>
              </CardContent>              
            </Card>
          </GridItem>

          <GridItem>
            <Card>
              <CardTopImage 
              src="https://i.pinimg.com/474x/e3/cc/8d/e3cc8da863b41546012ed6c5495604e5.jpg" 
                title="Titulo"
              />
              <CardContent>
                <ProductTitle>Produtos 3</ProductTitle>
                <Price>$ 710.00</Price>
              </CardContent>              
            </Card>
          </GridItem>
        </GridContainer>
        
      </Container>

    </TemplateDefault>
  )
}

export default Home