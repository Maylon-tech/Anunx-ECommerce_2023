import React from 'react'
import TemplateDefault from '@/src/templates/Default'
import { SearchContainer, InputSearch, GridContainer, Container } from '@/styles/product-list'
import { BiSearch } from 'react-icons/bi'

import Card from '@/src/components/card/Card'


const List = () => {
  return (
    <TemplateDefault>
      <Container>
        <SearchContainer>
          <InputSearch type='text' placeholder='Ex: iPhone XS Max com garantia' />
          <BiSearch />
        </SearchContainer>

        <GridContainer>
          <Card 
            image="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Produto 01"
            subtitle="565.21$"
          />

          <Card 
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Produto 02"
            subtitle="671.21$"
          />


          <Card 
            image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Produto 03"
            subtitle="235.21$"
          />

          <Card 
            image="https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Produto 03"
            subtitle="235.21$"
          />

          <Card 
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            title="Produto 03"
            subtitle="235.21$"
          />
          
        </GridContainer>
      </Container>
    </TemplateDefault>
  )
}

export default List