import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  col: {
    flex: 1,
    padding: 5
  },
  col1: {
    width: '25%'
  },
  col2: {
    width: '25%'
  },
  col3: {
    width: '25%'
  },
  col4: {
    width: '25%'
  },
  col5: {
    width: '50%'
  },
  inputWrapperNumeric: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%'
  },
  inputWrapper: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%'
  },
  input: {
    flex: 1,
    padding: 0
  },
  error: {
    color: 'red',
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: 100
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  addButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#00BCD4',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10
  },
  addMockButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#00BCD4',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
})
