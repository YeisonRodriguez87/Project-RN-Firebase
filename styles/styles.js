import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
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
  textButton: {
    textAlign: 'center',
    fontSize: 15
  },
  btnLogin: {
    backgroundColor: '#2394D9',
    marginBottom: 50
  },
  btnSignUp: {
    backgroundColor: '#EB2D2D',
    marginBottom: 50
  },
  btnLogOut: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    borderRadius: 8,
    marginHorizontal: 125
  },
  btnSet: {
    textAlign: 'center',
    fontSize: 15
  },
  textButton: {
    textAlign: 'center',
    fontSize: 15
  },
  imgSize: {
    alignSelf: 'center',
    borderRadius: 25,
    width: '80%',
    height: 350
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
    backgroundColor: "#F5140D",
  },
  textButtonClose: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  },
});



