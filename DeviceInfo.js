import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Device from 'expo-device';

export default function App() {

  const {DeviceEventEmitter, Platform} = require('react-native');
  console.log(DeviceEventEmitter.caller)
  return (
    <View style={styles.container}>
      
      
      <StatusBar style="auto" />
    </View>
  );
} ``

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
