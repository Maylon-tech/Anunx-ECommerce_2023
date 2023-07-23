import React from 'react'
import TemplateDefault from '@/src/templates/Default'
import { 
    Avatar,
    BoxContainer, 
    ChipCategory, 
    Container, 
    DateContent, 
    GridContainer, 
    GridLeft, 
    GridRight, 
    LabelDesc, 
    LocationBox, 
    ParagDesc, 
    PriceContent, 
    ProductName, 
    ProfileBox,
    ProfileContainer,
    ProfileEmail,
    ProfileInfo,
    ProfileName, 
} from '@/styles/product'


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
                       <DateContent>
                            Publicado 16 de abril de 2020
                       </DateContent>
                       <ProductName>
                            Jaguar XE 2.0 D R-Sport Aut.
                       </ProductName>
                       <PriceContent>$ 45.000.560</PriceContent>
                       <ChipCategory>Category</ChipCategory>
                    </BoxContainer>

                    <BoxContainer>
                        <LabelDesc>Descricao</LabelDesc>
                        <ParagDesc>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in quibusdam,
                             excepturi dicta rem commodi sequi doloremque neque ut repellat numquam praesentium, 
                             repellendus iusto nemo perferendis porro deserunt odit laboriosam explicabo 
                             exercitationem provident? Magnam praesentium velit dicta quibusdam, iste                              repudiandae veritatis 
                            veniam autem temporibus in laboriosam pariatur cum repellat dignissimos?
                        </ParagDesc>
                    </BoxContainer>
                </GridLeft>

                <GridRight>
                    <BoxContainer>
                        <ProfileContainer>
                            <Avatar src="" alt="profileName"/>
                            <ProfileInfo>
                                <ProfileName>Nemoto Mailon</ProfileName>
                                <ProfileEmail>techflow258@gmail.com</ProfileEmail>
                            </ProfileInfo>
                        </ProfileContainer>
                    </BoxContainer>

                    <BoxContainer>
                        Location here
                    </BoxContainer>
                </GridRight>

            </GridContainer>
        </Container>
    </TemplateDefault>
  )
}

export default Product