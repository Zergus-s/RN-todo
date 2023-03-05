import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {icon: React.ReactNode; onPress: any};

const IconButton = ({icon, onPress}: Props) => {
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={onPress}>
      <View style={styles.buttonContainer}>{icon}</View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
