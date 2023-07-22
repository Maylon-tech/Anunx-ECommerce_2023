import React from 'react'
import TemplateDefault from '@/src/templates/Default'
import { BoxContainer, Container, GridContainer, GridLeft, GridRight } from '@/styles/product'


const Product = () => {
  return (
    <TemplateDefault>
        <Container>
            <GridContainer>

                <GridLeft>
                    <BoxContainer>
                        CAROUSEL
                    </BoxContainer>

                    <BoxContainer>
                        title - preco - button
                    </BoxContainer>

                    <BoxContainer>
                        Descrcao
                    </BoxContainer>
                </GridLeft>

                <GridRight>right</GridRight>

            </GridContainer>
        </Container>
    </TemplateDefault>
  )
}

export default Product