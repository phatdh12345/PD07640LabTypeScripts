import React, { FC, memo } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

type FooterProps = {
  timeUpdate: string;
  backgroundColor: string;
};

const Footer: FC<FooterProps> = memo(({ timeUpdate, backgroundColor }) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>
        Thời gian bạn cập nhật thông tin: {timeUpdate}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Footer;
