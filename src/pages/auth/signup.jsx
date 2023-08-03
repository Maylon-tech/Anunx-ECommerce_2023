import React from 'react'
import TemplateDefault from '../../src/templates/Default'
import { Button, Container, Form, FormControl, FormHelpText, Input, Subtitle, Title, TitleContent, Wrapper, WrapperBtn } from '../../styles/signup'
import { ContainerMain } from '../../src/GlobalStyles'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './formValues'

const signup = () => {
  return (
    <TemplateDefault>
        <ContainerMain>

            <Container>
                <TitleContent>
                    <Title>Crie sua conta</Title>
                    <Subtitle>E anuncie para todo o Mundo</Subtitle>
                </TitleContent>

                <Form>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log('Ok form envidado', values)
                        }}
                    >
                        {
                            ({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleSubmit,
                            }) => {
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <Wrapper>
                                        
                                            <FormControl error={errors.name && touched.name}>
                                                <Input                                                    
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

                                            <FormControl error={errors.password && touched.password}>     
                                                <Input                                                    
                                                    type='password'
                                                    name='password'
                                                    value={values.password}
                                                    onChange={handleChange} 
                                                    placeholder='Senha grande' 
                                                />
                                                <FormHelpText>
                                                    { errors.password && touched.password ? errors.password : null }
                                                </FormHelpText>
                                            </FormControl>

                                            <FormControl error={errors.Conf && touched.Conf}>     
                                                <Input                                                
                                                    type='password'
                                                    name='Conf'
                                                    value={values.Conf}
                                                    onChange={handleChange} 
                                                    placeholder='Confirmar a Senha' 
                                                />
                                                <FormHelpText>
                                                    { errors.Conf && touched.Conf ? errors.Conf : null }
                                                </FormHelpText>
                                            </FormControl>

                                            <WrapperBtn>
                                                <Button type="submit">Publicar Anuncio</Button>
                                            </WrapperBtn>
                                        </Wrapper>
                                    </form>
                                )
                            }
                        }
                    </Formik>
                </Form>
            </Container>

        </ContainerMain>
    </TemplateDefault>
  )
}

export default signup