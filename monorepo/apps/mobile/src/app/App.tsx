import { SafeAreaView, View, Text, StatusBar } from 'react-native';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View>
          <Text>Mobile screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
