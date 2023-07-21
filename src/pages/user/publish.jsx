import React, { useState } from 'react'
import TemplateDefault from '../../src/templates/Default'
import { 
    BoxDropZone,
    BoxDropZoneDinamic,
    Button,
    Container, 
    FormContainer, 
    FormControl, 
    IconButton, 
    Input, 
    Label, 
    LabelInside, 
    PriceInput, 
    PrincipalLabel, 
    Select, 
    SubTitle, 
    TextField, 
    Title,
    Wrapper,
    WrapperBtn,
    WrapperUpload,
} from '@/styles/publish'

import { AiOutlineDelete } from 'react-icons/ai'
import Produto from '../../assets/react-logo.png'
import Image from 'next/image'
import {  useDropzone } from 'react-dropzone'


const Publish = () => {
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            
            const newFiles = acceptedFile.map((file) => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })
            setFiles([
                ...files,
                newFiles
            ])
        }
    })

    const handleRemoveFile = (fileName) => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
    }


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
                    <WrapperUpload>

                        <BoxDropZone {...getRootProps()}>  
                            <input {...getInputProps()} />                      
                            <h4>Clique para adicionar ou arraste a imagem aqui.</h4>
                        </BoxDropZone>

                        {
                            files.map((file, index) => (
                                <BoxDropZoneDinamic key={file.name}>  
                                    <Image src={file.preview} alt='boxImg' width={140} height={140} />  
                                    
                                    {
                                        index === 0 
                                        ? <PrincipalLabel>Principal</PrincipalLabel> 
                                        : null
                                    }

                                    <IconButton onClick={() => handleRemoveFile(file.name)}>
                                        <AiOutlineDelete />
                                    </IconButton>

                                </BoxDropZoneDinamic>
                            ))
                        }

                    </WrapperUpload>
                </Wrapper>

                <Wrapper>
                    <Label>Descricao</Label>
                    <h4>Escreva os detalhes do que esta vendendo.</h4>
                    <TextField></TextField>
                </Wrapper>

                <Wrapper>

                    <Label>Preco</Label>
                    <FormControl>
                        <PriceInput />
                        <LabelInside>R$</LabelInside>
                    </FormControl>                    
                    
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