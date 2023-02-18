import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  row2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  col1: {
    width: '25%',
  },
  col2: {
    width: '50%',
    margin: 0,
    padding: 0,
  },
  col3: {
    width: '25%',
  },
  col4: {
    width: '25%',
  },
  col10: {
    width: '50%',
    paddingTop: 60,
  },
  col12: {
    paddingTop: 60,
  },
  inputWrapperNumeric: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  inputWrapper: {
    height: 40,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    borderWidth: 2,
    color: '#333333',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    borderWidth: 2,
    marginTop: '-30%',
    width: '100%', // add fixed width
  },
  addButton: {
    backgroundColor: '#0000FF',
    color: '#FFFFFF',
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addMockButton: {
    backgroundColor: '#0000FF',
    color: '#FFFFFF',
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  label: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // add fixed width
  },
  gradeContainer: {
    width: '100%', // add fixed width
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10, // add margin bottom to create some space between the last row and the content container
  },
});
