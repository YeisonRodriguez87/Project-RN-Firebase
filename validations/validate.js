import * as yup from 'yup';

export const loginValidate = yup.object().shape({
    email: yup
        .string()
        .email('El formato del email no es válido')
        .required('El email es requerido'),
    password: yup
        .string()
        .trim('La contraseña no debe contener espacios')
        .min(6, ({ min }) => `La contraseña debe contener mínimo ${min} caracteres`)
        .required('La contraseña es requerida')
}) 