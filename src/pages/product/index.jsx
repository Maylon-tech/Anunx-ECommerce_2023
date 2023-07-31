import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

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
import Image from 'next/image'
// import Swiper from 'swiper'
import { EffectCoverflow, Pagination, Navigation } from "swiper"
import teste01 from '@/assets/teste/teste01.png'
import teste02 from '@/assets/teste/teste02.jpg'
import teste03 from '@/assets/teste/teste03.jpg'

const Product = () => {
  return (
    <TemplateDefault>
        <Container>
            <GridContainer>

                <GridLeft>
                    <BoxContainer>
                        <Swiper
                            effect={'coverflow'}
                            className='swiper-container'
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                              }}
                            pagination={{el:'', clickable: true}}
                            grabCursor={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                              }}
                            module={[EffectCoverflow, Pagination, Navigation]}
                        >

                            <SwiperSlide>
                                <Image src={teste01} alt='teste01'  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={teste02} alt='teste02'  />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={teste03} alt='teste03'  />
                            </SwiperSlide>

                        </Swiper>
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