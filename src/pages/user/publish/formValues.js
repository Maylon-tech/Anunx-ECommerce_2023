import * as yup from 'yup'

const initialValues = {
    title: '',
    category: '',
    description: '',
    price: '',
    name: '',
    email: '',
    phone: '',
    files: [],
}


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
    files: yup.array().min(1, 'Envie uma foto ao menos').required('Campo Obrigatorio.')
})


export {
    initialValues,
    validationSchema
}