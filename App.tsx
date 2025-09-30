import { Text, View } from 'react-native';
import React from 'react';

const App = () => {
  let text = '{{APP_GREETING}}';
  return (
    <View
      style={{
        margin: 50,
        backgroundColor: '{{PRIMARY_COLOR}}',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 15 }}>{text}</Text>
    </View>
  );
};

export default App;
