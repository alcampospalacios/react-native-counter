import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Fab from './components/fab';

export default function App() {
  const [count, setcount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <Fab
        label="-1"
        position="left"
        onPress={() => setcount(count - 1)}
        onLongPress={() => setcount(0)}
      />
      <Fab label="+1" onPress={() => setcount(count + 1)} onLongPress={() => setcount(0)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 100,
    fontWeight: '100',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    // shadow properties for ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    // shadows for android
    elevation: 3,
  },

  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'semibold',
  },
});
