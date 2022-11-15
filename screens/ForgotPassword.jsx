import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
//import { forgotValidationSchema } from "../validation/validationSchema";
import { forgotValidate } from "../validations/validate";
import { SafeAreaView, TextInput, Text, TouchableHighlight, Alert } from "react-native";
import { styles } from "../styles/styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
const auth = getAuth()

const ForgotPassword = () => {
  const navigate = useNavigation()
  function handleReset(values) {
    sendPasswordResetEmail(auth, values.email)
        .then(() => {
            Alert.alert(`Enviamos un mensaje a ${values.email}`)
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
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.inputText}
            placeholder='Correo Electrónico'
            placeholderTextColor={'darkslategray'}
            onChangeText={handleChange('email')}
            name="email"
            value={values.email}
            keyboardType={'email-address'}
          />
          {errors.email && (<Text style={styles.error}>{errors.email}</Text>)}
          <TouchableHighlight onPress={handleSubmit} style={[styles.button, styles.bgRebeccaPurple]} >
            {
              <Text style={styles.textButton}>Recuperar Contraseña</Text>
            }
          </TouchableHighlight>
        </SafeAreaView>

      )}
    </Formik>
  )
}
export default ForgotPassword