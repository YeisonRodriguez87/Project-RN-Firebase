import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.9
  },
  container: {
    flex: 1,
    marginTop: 16,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  inputText: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    color: 'black',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 15
  },
  inputTextSearch: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    color: 'black',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 15,
    width: '70%'
  },
  button: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20
  },
  textAbout: {
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20
  },
  textButton: {
    textAlign: 'center',
    fontSize: 17,
    color: '#F0F7F5'
  },
  btnLogin: {
    backgroundColor: '#C0CA27',
    marginBottom: 50
  },
  btnSignUp: {
    backgroundColor: '#EB2D2D',
    marginBottom: 50
  },
  btnLogOut: {
    backgroundColor: '#DE2917',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    borderRadius: 8,
    marginHorizontal: 150,
    marginVertical: 30
  },
  btnSet: {
    textAlign: 'center',
    fontSize: 16,
    color: '#F0F7F5',
    fontWeight: 'bold'
  },
  imgSize: {
    alignSelf: 'center',
    borderRadius: 25,
    width: '80%',
    height: 350
  },
  imgModal: {
    alignSelf: 'center',
    borderRadius: 15,
    width: '80%',
    height: 280
  },
  error: {
    color: 'red'
  },
  tabIcon: {
    alignSelf: 'center',
    width: 40,
    height: 40
  },
  viewRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  modalBack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000a4',
  },
  modalView: {
    width: 340,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    marginTop: 10
  },
  buttonClose: {
    backgroundColor: "#DE2917",
  },
  textButtonClose: {
    textAlign: 'center',
    fontSize: 15,
    color: '#F0F7F5',
    fontWeight: 'bold'
  },
  subheading: {
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 8,
    borderBottomWidth: .5,
    borderBottomColor: 'black'
  },
  subheadingCard: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  separator: {
    marginTop: 5,
    marginBottom: 5
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
});



