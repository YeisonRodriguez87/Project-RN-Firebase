import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { forgotValidate } from "../validations/validate";
import { SafeAreaView, TextInput, Text, TouchableHighlight, Alert, ImageBackground } from "react-native";
import { styles } from "../styles/styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const auth = getAuth()

const ForgotPassword = () => {
  const navigate = useNavigation()
  function handleReset(values) {
    sendPasswordResetEmail(auth, values.email)
        .then(() => {
            Alert.alert(`We send a message to recover your password to the mailbox ${values.email}`)
            navigate.navigate("Login")
        })
      .catch((err) => console.log(err))
  }

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={forgotValidate}
      onSubmit={values => handleReset(values)}
    >
      {({
        handleChange, handleSubmit, values, errors
      }) => (
        <>
          <ImageBackground source={require('../assets/BreakindBadForgot.png')} resizeMode='cover' style={styles.imageBackground}>
            <SafeAreaView style={styles.container}>
              <TextInput
                style={styles.inputText}
                placeholder='Email'
                placeholderTextColor={'darkslategray'}
                onChangeText={handleChange('email')}
                name="email"
                value={values.email}
                keyboardType={'email-address'}
              />
              {errors.email && (<Text style={styles.error}>{errors.email}</Text>)}
              <TouchableHighlight onPress={handleSubmit} style={[styles.button, styles.btnRecPass]} >
                {
                  <Text style={styles.textButton}>Recover password</Text>
                }
              </TouchableHighlight>
            </SafeAreaView>
          </ImageBackground>
        </>
      )}
    </Formik>
  )
}
export default ForgotPassword