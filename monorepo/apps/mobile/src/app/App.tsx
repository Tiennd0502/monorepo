import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { TamaguiProvider } from '@monorepo/provider';
import { Button } from 'tamagui';

export const App = () => {
  return (
    <TamaguiProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View>
          <Text>Mobile scree2n</Text>
          <Button color="red">Hello</Button>
        </View>
      </SafeAreaView>
    </TamaguiProvider>
  );
};

export default App;
