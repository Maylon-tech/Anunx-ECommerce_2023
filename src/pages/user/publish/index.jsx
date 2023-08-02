import React from 'react'
import { Formik } from 'formik'
import TemplateDefault from '../../../src/templates/Default'
import { 
    BoxDropZone,
    BoxDropZoneDinamic,
    Button,
    Container, 
    ErrorMsg, 
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
import { initialValues, validationSchema } from './formValues'
import Image from 'next/image'
import {  useDropzone } from 'react-dropzone'

const Publish = () => {

  return (
    <TemplateDefault>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("OK envior o form", values)
            }}
        >
            {
                ({
                    touched,
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                }) => {
                    
                    const { getRootProps, getInputProps } = useDropzone({
                        accept: 'image/*',
                        onDrop: (acceptedFile) => {
                            
                            const newFiles = acceptedFile.map((file) => {
                                return {
                                    ...file,
                                    preview: URL.createObjectURL(file)
                                }
                            })
                            setFieldValue('files', [
                                ...values.files,
                                newFiles
                            ])
                        }
                    })
                
                    const handleRemoveFile = (fileName) => {
                        const newFileState = values.files.filter(file => file.name !== fileName)
                        setFieldValue('files', newFileState)
                    }

                    return (
                        <Form onSubmit={handleSubmit}>
                            <Container>
                                <Title>Publicar Anuncio</Title>
                                <SubTitle>Quanto mais detalhado, melhor!</SubTitle>
                                
                                <FormContainer>
                                    {/*  CAMPO DO TITULO DO PRODUTO - INPUT  */}
                                    <Wrapper>
                                        <Label>Titulo do Anuncio</Label>
                                        {/* Input de Titulo */}
                                        <FormControl error={errors.title && touched.title}>                                        
                                            <Input
                                                type='text'
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange} 
                                                placeholder='ex: Carro com motor sem garantia.' 
                                            />
                                            <FormHelpText>
                                                { errors.title && touched.title ? errors.title : null }
                                            </FormHelpText>
                                        </FormControl>
                                    </Wrapper>

                                    {/*     CAMPO CATEGORIA - SELECT   */}
                                    <Wrapper>
                                        <Label>Categoria</Label>
                                        <FormControl error={errors.category && touched.category}>
                                            <Select
                                                name="category"
                                                value={values.category}
                                                onChange={handleChange}                                        
                                            >
                                                <MenuItem className='active'> Selecione </MenuItem>
                                                <MenuItem value="Moda">Moda</MenuItem>
                                                <MenuItem value="Carros, Motos, Barcos">Carros, Motos, Barcos</MenuItem>
                                                <MenuItem value="Servicos">Servicos</MenuItem>
                                                <MenuItem value="Lazer">Lazer</MenuItem>
                                                <MenuItem value="Moveis, casa e Jardim">Moveis, casa e Jardim</MenuItem>
                                                <MenuItem value="Equipamentos e Ferramentas">Equipamentos e Ferramentas</MenuItem>
                                                <MenuItem value="Celualres e Tablets">Celualres e Tablets</MenuItem>
                                                <MenuItem value="Esportes">Esporte</MenuItem>
                                                <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                                                <MenuItem value="Outros">Outros</MenuItem>
                                            </Select>
                                            <FormHelpText>
                                                { errors.category && touched.category ? errors.category : null }
                                            </FormHelpText>
                                        </FormControl>
                                    </Wrapper>
                        
                                    {/*  CAMPO UPLOAD DE IMAGENS  */}
                                    <Wrapper>
                                        <Label>Imagens</Label>
                                        <h4>A Primeira imagens e a foto principal do anuncio.</h4>
                                        { 
                                            errors.files && touched.files
                                                ? <ErrorMsg>{errors.files}</ErrorMsg>
                                                : null
                                        }
                                        <WrapperUpload>
                                            <BoxDropZone {...getRootProps()}>  
                                                <input name='files' {...getInputProps()} onChange={handleChange} />                      
                                                <h4>Clique para adicionar ou arraste a imagem aqui.</h4>
                                            </BoxDropZone>

                                            {
                                                values.files.map((file, index) => (
                                                    <BoxDropZoneDinamic key={file.index}>  
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

                                    {/*  CAMPO DE DESCRICAO DO PRODUTO - TEXTAREA  */}
                                    <Wrapper>
                                        <Label>Descricao</Label>
                                        <h4>Escreva os detalhes do que esta vendendo.</h4>
                                        <FormControl error={errors.description && touched.description}>                                        
                                            <TextField
                                                onChange={handleChange}
                                                name="description"                                                
                                            ></TextField>
                                            <FormHelpText>
                                                { errors.description && touched.description ? errors.description : null }
                                            </FormHelpText>
                                        </FormControl>
                                    </Wrapper>

                                    {/*  CAMPO DO PRECO - INPUT  */}
                                    <Wrapper>
                                        <Label>Preco</Label>
                                        <FormControlPrice>
                                            <FormControl error={errors.price && touched.price}>                                            
                                                <PriceInput
                                                    name='price'
                                                    value={values.price}
                                                    type='text' 
                                                    onChange={handleChange}
                                                    placeholder='Qual o valor do Produto?' 
                                                />
                                                <LabelInside>R$</LabelInside>
                                                {/*<FormHelpText>
                                                    { errors.price && touched.price ? errors.price : null }
                                                 </*FormHelpText>
                                                
                                            </FormControl>
                                        </FormControlPrice>                    
                                        
                                    </Wrapper>

                                    {/*  CAMPO DE DADOS PESSOAIS - INPUT  */}
                                    <Wrapper>
                                        <Label>Dados de Contato</Label>
                                        <FormControl error={errors.name && touched.name}>                                        
                                            <Input
                                                contactInput="bottomInput"
                                                type='text'
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange} 
                                                placeholder='Nome Completo.' 
                                            />
                                            <FormHelpText>
                                                { errors.name && touched.name ? errors.name : null }
                                            </FormHelpText>
                                        </FormControl>

                                        <FormControl error={errors.email && touched.email}>     
                                            <Input
                                                contactInput="bottomInput"
                                                type='email'
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange} 
                                                placeholder='E-Mail Valido.' 
                                            />
                                            <FormHelpText>
                                                { errors.email && touched.email ? errors.email : null }
                                            </FormHelpText>
                                        </FormControl>

                                        <FormControl error={errors.phone && touched.phone}> 
                                            <Input
                                                contactInput="bottomInput"
                                                type='number'
                                                name='phone'
                                                value={values.phone}
                                                onChange={handleChange} 
                                                placeholder='Telefone' 
                                            />
                                            <FormHelpText>
                                                { errors.phone && touched.phone ? errors.phone : null }
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