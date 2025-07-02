import { Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

interface FabProps {
  label: string;
  position?: 'left' | 'right'; // Optional, default is 'right'

  // Actions
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function Fab({ label, position = 'right', onPress, onLongPress }: FabProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButtonBase,
        position == 'left' ? styles.fbLeft : styles.fbRight,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.textButton}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButtonBase: {
    position: 'absolute',
    bottom: 20,

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

  fbLeft: { left: 20 },
  fbRight: { right: 20 },
});
