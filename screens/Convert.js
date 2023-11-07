import { StyleSheet, Text, TextInput, View } from "react-native"

const Convert = () => (
 <View style={styles.container}>
    <View style={styles.containerInput}>
      <View>
        <Text>De:</Text>
        <TextInput style={styles.inputConvert} placeholder="Quantidade"/>
      </View>
      <View>
        <Text>Para:</Text>
        <TextInput style={styles.inputConvert} placeholder="Quantidade"/>
      </View>    
    </View>
  </View>
 )


export default Convert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:16
  },
  containerInput: {
    flex:1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputConvert: {
    border: 1,
    borderColor: '#000',
    borderWidth:1,
    paddingHorizontal:8
  }
});
