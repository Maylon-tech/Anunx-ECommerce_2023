import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import TemplateDefault from '../../src/templates/Default'
import { 
    BoxDropZone,
    BoxDropZoneDinamic,
    Button,
    Container, 
    Form, 
    FormContainer, 
    FormControl, 
    FormControlPrice, 
    FormHelpText, 
    IconButton, 
    Input, 
    Label, 
    LabelInside, 
    MenuItem, 
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


const validationSchema = yup.object().shape({
    title: yup.string()
        .min(3, 'Escreva um titulo maior')
        .max(30, 'Titulo muito longo')
        .required('Campo Obrigatorio!'),

    category: yup.string().required('Campo Obrigratorio!'),

    description: yup.string()
        .min(60, 'Escreva acima de 20 caracteres.')
        .required('Campo Obrigatorio!'),

    price: yup.string().required('Campo Obrigratorio!'),
    email: yup.string().required('Digite um e-mail valido.'),
    name: yup.string().required('Campo Obrigratorio!'),
    phone: yup.number().required('Campo Obrigratorio!'),
})

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
        <Formik
            initialValues={{
                title: '',
                category: '',
                description: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                conosle.log("OK envior o form now@", values)
            }}
        >
            {
                ({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                }) => {
                    console.log(errors)
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Container>
                                <Title>Publicar Anuncio</Title>
                                <SubTitle>Quanto mais detalhado, melhor!</SubTitle>
                                
                                <FormContainer>
                                    <Wrapper>
                                        <Label>Titulo do Anuncio</Label>
                                        {/* Input de Titulo */}
                                        <FormControl error={errors.title}>                                        
                                            <Input
                                                type='text'
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange} 
                                                placeholder='ex: Carro com motor sem garantia.' 
                                            />
                                            <FormHelpText>
                                                { errors.title }
                                            </FormHelpText>
                                        </FormControl>
                                    </Wrapper>

                                    <Wrapper>
                                        <Label>Categoria</Label>
                                        <FormControl error={errors.category}>
                                            <Select
                                                name="category"
                                                value={values.category}
                                                onChange={handleSubmit}                                        
                                            >
                                                <MenuItem className='active'> Selecione </MenuItem>
                                                <MenuItem value="">Moda</MenuItem>
                                                <MenuItem value="">Carros, Motos, Barcos</MenuItem>
                                                <MenuItem value="">Servicos</MenuItem>
                                                <MenuItem value="">Lazer</MenuItem>
                                                <MenuItem value="">Moveis, casa e Jardim</MenuItem>
                                                <MenuItem value="">Equipamentos e Ferramentas</MenuItem>
                                                <MenuItem value="">Celualres e Tablets</MenuItem>
                                                <MenuItem value="">Esporte</MenuItem>
                                                <MenuItem value="">Tecnologia</MenuItem>
                                                <MenuItem value="">Outros</MenuItem>
                                            </Select>
                                            <FormHelpText>
                                                { errors.category }
                                            </FormHelpText>
                                        </FormControl>
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
                                        <FormControl error={errors.description}>                                        
                                            <TextField
                                                onChange={handleChange}
                                                name="description"                                                
                                            ></TextField>
                                            <FormHelpText>
                                                { errors.description }
                                            </FormHelpText>
                                        </FormControl>
                                    </Wrapper>

                                    <Wrapper>

                                        <Label>Preco</Label>
                                        <FormControlPrice>
                                            <FormControl error={errors.price}>                                            
                                                <PriceInput onChange={handleChange} />
                                                <FormHelpText>
                                                    { errors.price }
                                                </FormHelpText>
                                                
                                            </FormControl>
                                            <LabelInside>R$</LabelInside>
                                        </FormControlPrice>                    
                                        
                                    </Wrapper>


                                    <Wrapper>
                                        <Label>Dados de Contato</Label>
                                        <FormControl error={errors.category}>                                        
                                            <Input
                                                contactInput="bottomInput"
                                                type='text'
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange} 
                                                placeholder='Nome Completo.' 
                                            />
                                            <FormHelpText>
                                                { errors.name }
                                            </FormHelpText>
                                            <Input
                                                contactInput="bottomInput"
                                                type='email'
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange} 
                                                placeholder='E-Mail Valido.' 
                                            />
                                            <FormHelpText>
                                                { errors.email }
                                            </FormHelpText>
                                            <Input
                                                contactInput="bottomInput"
                                                type='phone'
                                                value={values.phone}
                                                onChange={handleChange} 
                                                placeholder='Telefone' 
                                            />
                                            <FormHelpText>
                                                { errors.phone }
                                            </FormHelpText>
                                        </FormControl>
                                    </Wrapper>
                                    
                                    <WrapperBtn>
                                        <Button type="submit">Publicar Anuncio</Button>
                                    </WrapperBtn>

                                </FormContainer>
                            </Container>
                        </Form>
                    )
                }
            }
        </Formik>


    
        


    </TemplateDefault>
  )
}

export default Publish