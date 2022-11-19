import { View, Text, TouchableNativeFeedback, Image, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';

export default function About({ navigation }) {
  return (
    <ImageBackground source={require('../assets/BreakingBadAbout.png')} resizeMode='cover' style={styles.imageBackgroundHome}>
      <View style={styles.container}>
        <Text style={styles.textAbout}>Breaking Bad es una serie de televisión dramática estadounidense creada y producida por Vince Gilligan. Narra la historia de Walter White (Bryan Cranston), un profesor de química con problemas económicos a quien le diagnostican un cáncer de pulmón inoperable. Para pagar su tratamiento y asegurar el futuro económico de su familia, comienza a cocinar y vender metanfetamina, junto con Jesse Pinkman (Aaron Paul), un antiguo alumno suyo. La serie, ambientada y producida en Albuquerque (Nuevo México), se caracteriza por sus escenarios desérticos y por la tendencia en la historia de poner a sus personajes en situaciones que aparentemente no tienen salida, lo que llevó a que su creador la describa como un wéstern contemporáneo.
        {"\n"}{"\n"}
        La serie se estrenó el 20 de enero de 2008 y es una producción de Sony Pictures Television. En Estados Unidos y Canadá se emitió por la cadena AMC. La temporada final se dividió en dos partes de ocho episodios cada una y se emitió en el transcurso de dos años: la primera mitad se estrenó el 15 de julio de 2012 y concluyó el 2 de septiembre de 2012, mientras que la segunda mitad se estrenó el 11 de agosto de 2013 y concluyó el 29 de septiembre del mismo año.
        {"\n"}{"\n"}
        Breaking Bad ha sido aclamada con entusiasmo por buena parte de la crítica y del público, y está considerada como una de las mejores series televisivas de todos los tiempos. En 2013, Breaking Bad fue uno de los programas de televisión por cable más vistos en los Estados Unidos: la audiencia de la segunda mitad de la quinta temporada duplicó a la de la primera.</Text>
        <View style={styles.viewRow}>
            <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>  
              <Image 
                style={styles.tabIcon}
                source={require('../assets/home.png')}
              />
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => navigation.navigate('About')}>  
              <Image 
                style={styles.tabIcon}
                source={require('../assets/about.png')}
              />
            </TouchableNativeFeedback>
          </View>
      </View>
    </ImageBackground>
  )
}