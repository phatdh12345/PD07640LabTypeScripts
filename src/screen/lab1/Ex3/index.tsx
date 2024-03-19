import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import WrapInput from "../../../components/WrapInput";

const Ex3 = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
   
  };

  const handleSubmit = () => {
    // Xử lý dữ liệu khi người dùng nhấn nút gửi
    if (!inputValue.trim()) {
      setError('Please enter a value');
    } else {
      setError('');
      // Thực hiện xử lý khi dữ liệu hợp lệ
      console.log('Submitted value:', inputValue);
    }
  };

  return (
    <View style={styles.container}>
      <WrapInput
        value={inputValue}
        onChangeText={handleInputChange}
        error={error}
        placeholder="Enter your text"
      />
      {/* Hiển thị lỗi */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {/* Nút gửi */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default Ex3;
