import { StyleSheet } from 'react-native';
import { themeBlue } from './brandColors';

module.exports = StyleSheet.create({
  container: {
    marginTop: 65,
  },
  textInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 3,
    fontSize: 18,
    borderWidth: 1,
    borderColor: themeBlue,
    borderRadius: 8,
  },
});
