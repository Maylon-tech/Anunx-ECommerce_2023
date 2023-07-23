import React from 'react'
import TemplateDefault from '@/src/templates/Default'
import { SearchContainer, InputSearch, GridContainer } from '@/styles/product-list'
import { BiSearch } from 'react-icons/bi'

import Card from '@/src/components/card/Card'


const List = () => {
  return (
    <TemplateDefault>
        <h1>Listagem</h1>


        <SearchContainer>
          <InputSearch type='text' placeholder='Ex: iPhone XS Max com garantia' />
          <BiSearch />
        </SearchContainer>


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
          
        </GridContainer>


    </TemplateDefault>
  )
}

export default List