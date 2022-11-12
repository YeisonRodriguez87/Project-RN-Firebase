import { View, Text, TextInput, TouchableHighlight, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../styles/styles';
import { ErrorMessage, Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { loginValidate } from '../validations/validate';


export default function Login({ navigation }) {
    const navigate = useNavigation()
    const [user, setUser] = useState({});
    const [isNewUser, setIsNewUser] = useState(false)

    const handleRegister = (values) => {
        console.log('Register')
        console.log(JSON.stringify(values, null, 2));
    }

    const handleLogin = (values) => {
        console.log('Login')
        console.log(JSON.stringify(values, null, 2));
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={loginValidate}
            onSubmit={values => {isNewUser ? handleRegister(values) : handleLogin(values)}}
        >
            {({
                handleChange, handleBlur, handleSubmit, values, errors, touched
            }) => (
                <View style={styles.container}>            
                <TextInput
                    placeholder='Correo Electrónico'
                    style={styles.inputText}
                    onChangeText={handleChange('email')}
                    name='email'
                    value={values.email}
                    keyboardType={'email-address'}
                />  
                {errors.email && touched.email && (<Text style={styles.error}>{errors.email}</Text>)}   
                <TextInput
                    placeholder='Contraseña'
                    style={styles.inputText}
                    onChangeText={handleChange('password')}
                    name='password'
                    value={values.password}
                    secureTextEntry={true}
                />
                {errors.password && touched.password && (<Text style={styles.error}>{errors.password}</Text>)}
                <TouchableHighlight style={isNewUser?  [styles.button, styles.btnSignUp]: [styles.button, styles.btnLogin]} onPress={handleSubmit} >
                    {isNewUser ?
                        <Text style={styles.textButton}>Registrarse</Text>
                        :
                        <Text style={styles.textButton}>Ingresar</Text>
                    }                    
                </TouchableHighlight>
                    
                <Pressable onPress={() => setIsNewUser((prev => !prev))}>
                    {isNewUser ?
                        <Text style={styles.btnSet}>¿Ya tienes una cuenta?</Text>                        
                        :
                        <Text style={styles.btnSet}>¿Aún no tienes una cuenta?</Text>
                    }    
                </Pressable>
            </View>
            )}            
        </Formik>
    )
}