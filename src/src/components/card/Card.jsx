import React from 'react'
import { 
  ButtonEdit, 
  ButtonRemove, 
  
  CardActions, 
  CardContent, 
  CardStyled, 
  CardTopImage,  
  GridItem, 
  Price, 
  ProductTitle 
} from '.'

const Card = ({ image, title, subtitle, actions }) => {
  return (
        <GridItem>
          <CardStyled>
            <CardTopImage 
              src={image} 
              alt={title}
            />

              <CardContent>
                <ProductTitle>{title}</ProductTitle>
                <Price>{subtitle}</Price>
              </CardContent>

              {
                actions 
                ? (                  
                  <CardActions>
                    { actions }
                  </CardActions>
                ) : null
              }
          </CardStyled>
        </GridItem>
  )
}

export default Card