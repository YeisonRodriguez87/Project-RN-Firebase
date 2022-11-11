import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../styles/styles';
import { Formik } from 'formik';


export default function Login({ navigation }) {
    const [user, setUser] = useState({});

    const handleRegister = (values) => {
        console.log(JSON.stringify(values, null, 2));
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => handleRegister(values)}
        >
            {({
                handleChange, handleBlur, handleSubmit, values
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
                <TextInput
                    placeholder='Contraseña'
                    style={styles.inputText}
                    onChangeText={handleChange('password')}
                    name='password'
                    value={values.password}
                    secureTextEntry={true}
                />
                
                <TouchableHighlight style={[styles.button, styles.btnLogin]} onPress={handleSubmit} >
                    <Text style={styles.textButton}>Ingresar</Text>
                </TouchableHighlight>
                    


                <Text>¿No estás registrado?</Text>
                <TouchableHighlight style={[styles.button, styles.btnSignUp]} onPress={() => navigation.navigate('SignUp')} >
                    <Text style={styles.textButton}>Registrate</Text>
                </TouchableHighlight>
            </View>
            )}            
        </Formik>
    )
}