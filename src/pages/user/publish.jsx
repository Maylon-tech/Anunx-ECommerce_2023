import React from 'react'
import TemplateDefault from '../../src/templates/Default'
import { 
    Button,
    Container, 
    FormContainer, 
    Input, 
    Label, 
    Select, 
    SubTitle, 
    TextField, 
    Title,
    Wrapper,
    WrapperBtn,
} from '@/src/styles/publish'


const Publish = () => {
  return (
    <TemplateDefault>

        <Container>
            <Title>Publicar Anuncio</Title>
            <SubTitle>Quanto mais detalhado, melhor!</SubTitle>
            
            <FormContainer>
                <Wrapper>
                    <Label>Titulo do Anuncio</Label>
                    <Input
                        type='text'
                        onChange={() => {}} 
                        placeholder='ex: Carro com motor sem garantia.' 
                    />
                </Wrapper>

                <Wrapper>
                    <Label>Categoria</Label>
                    <Select
                        onChange={() => {}}
                    >
                        <option className='active'> Selecione </option>
                        <option value="">Moda</option>
                        <option value="">Carros, Motos, Barcos</option>
                        <option value="">Servicos</option>
                        <option value="">Lazer</option>
                        <option value="">Moveis, casa e Jardim</option>
                        <option value="">Equipamentos e Ferramentas</option>
                        <option value="">Celualres e Tablets</option>
                        <option value="">Esporte</option>
                        <option value="">Tecnologia</option>
                        <option value="">Outros</option>
                    </Select>
                </Wrapper>
    
                <Wrapper>
                    <Label>Imagens</Label>
                    <h4>A Primeira imagens e a foto principal do anuncio.</h4>
                </Wrapper>

                <Wrapper>
                    <Label>Descricao</Label>
                    <h4>Escreva os detalhes do que esta vendendo.</h4>
                    <TextField></TextField>
                </Wrapper>

                <Wrapper>
                    <Label>Dados de Contato</Label>
                    <Input
                        contactInput="bottomInput"
                        type='textl'
                        onChange={() => {}} 
                        placeholder='Nome' 
                    />
                    <Input
                        contactInput="bottomInput"
                        type='email'
                        onChange={() => {}} 
                        placeholder='E-Mail' 
                    />
                    <Input
                        contactInput="bottomInput"
                        type='phone'
                        onChange={() => {}} 
                        placeholder='Telefone' 
                    />
                </Wrapper>
                
                <WrapperBtn>
                    <Button type="button">Publicar Anuncio</Button>
                </WrapperBtn>

            </FormContainer>
        </Container>


    </TemplateDefault>
  )
}

export default Publish