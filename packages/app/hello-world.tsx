import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';

export function HelloWorld() {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0
      }}
    >
      <View style={styles.container}>
        <Text>Hello, World!</Text>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
