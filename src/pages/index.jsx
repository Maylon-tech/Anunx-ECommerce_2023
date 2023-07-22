import React from 'react'
import TemplateDefault from '../src/templates/Default'
import { 
  Container, 
  GridContainer, 
  InputSearch,  
  SearchContainer, 
  Title, 
} from '@/styles/home'
import { BiSearch } from 'react-icons/bi'
import Card from '@/src/components/card/Card'

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
          <Card 
            image="https://i.pinimg.com/474x/e3/cc/8d/e3cc8da863b41546012ed6c5495604e5.jpg"
            title="Produto 01"
            subtitle="565.21$"
          />

          <Card 
            image="https://i.pinimg.com/474x/e3/cc/8d/e3cc8da863b41546012ed6c5495604e5.jpg"
            title="Produto 02"
            subtitle="671.21$"
          />


          <Card 
            image="https://i.pinimg.com/474x/e3/cc/8d/e3cc8da863b41546012ed6c5495604e5.jpg"
            title="Produto 03"
            subtitle="235.21$"
          />
          
          <Card 
            image="https://i.pinimg.com/474x/e3/cc/8d/e3cc8da863b41546012ed6c5495604e5.jpg"
            title="Produto 04"
            subtitle="835.21$"
          />

          <Card 
            image="https://i.pinimg.com/474x/e3/cc/8d/e3cc8da863b41546012ed6c5495604e5.jpg"
            title="Produto 05"
            subtitle="135.21$"
          />
        </GridContainer>
        
      </Container>

    </TemplateDefault>
  )
}

export default Home