import * as yup from 'yup'

const initialValues = {
    name:'',
    email:'',
    password:'',
    passwordConf:'',
}

const validationSchema = yup.object().shape({
    name: yup.string()
        .required('Campo Obrigatorio!'),

    email: yup.string()
        .required('Digite um e-mail valido.'),

    password: yup.string()
        .min(6, 'Minimo de 6 caracteres')
        .required('Campo obrigatorio'),

    passwordConf: yup.string()
        .required('Campo Obrigatorio')
        .oneOf([yup.ref('password'), null], 'As senhas precisa ser iguais.'),
})


export {
    initialValues,
    validationSchema,
}