import { View, Text, TextInput, TouchableHighlight, Pressable, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { styles } from '../styles/styles';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { loginValidate } from '../validations/validate';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import userContext from '../userContext.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const app = initializeApp(firebaseConfig);
const auth = getAuth(); 


export default function Login() {
    const navigate = useNavigation()
    const [isNewUser, setIsNewUser] = useState(false)
    const { user, setUser } = useContext(userContext);
    const [initializing, setInitializing] = useState(true)

    const stateChange = (user) => {
        setUser(user)
        if (initializing) setInitializing(false)
    }

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(stateChange)
        return subscriber;
    }, [])

    const handleRegister = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredentials => {
            console.log(userCredentials);
            setUser(prev => ({ ...prev, email: values.email }))
            storeUser(values.email)
        })
        .catch(error => console.log(error))
    }

    const handleLogin = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredentials => {
            console.log(userCredentials);
            setUser(prev => ({ ...prev, email: values.email }))
            storeUser(values.email)
        })
        .catch(error => console.log(error))
    }

    const storeUser = async (user) => {
        try {
            const userEmail = JSON.stringify(user)
            AsyncStorage.setItem('email', userEmail)
        } catch (error) {
            console.log(error);
        }
    }

    

    if (initializing) <ActivityIndicator />

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
                    placeholder='Email'
                    style={styles.inputText}
                    onChangeText={handleChange('email')}
                    name='email'
                    value={values.email}
                    keyboardType={'email-address'}
                />  
                {errors.email && touched.email && (<Text style={styles.error}>{errors.email}</Text>)}   
                <TextInput
                    placeholder='Password'
                    style={styles.inputText}
                    onChangeText={handleChange('password')}
                    name='password'
                    value={values.password}
                    secureTextEntry={true}
                />
                {errors.password && touched.password && (<Text style={styles.error}>{errors.password}</Text>)}                    
                <Pressable onPress={() => navigate.navigate("ForgotPassword")}>
                    <Text style={styles.btnSet}>¿Did you forget your password?</Text>
                </Pressable>
                <TouchableHighlight style={isNewUser?  [styles.button, styles.btnSignUp]: [styles.button, styles.btnLogin]} onPress={handleSubmit} >
                    {isNewUser ?
                        <Text style={styles.textButton}>Register</Text>
                        :
                        <Text style={styles.textButton}>Log In</Text>
                    }                    
                </TouchableHighlight>
                    
                <Pressable onPress={() => setIsNewUser((prev => !prev))}>
                    {isNewUser ?
                        <Text style={styles.btnSet}>¿You have an account??</Text>                        
                        :
                        <Text style={styles.btnSet}>¿Do not you have an account yet?</Text>
                    }    
                </Pressable>  
            </View>
            )}
        </Formik>
    )
}