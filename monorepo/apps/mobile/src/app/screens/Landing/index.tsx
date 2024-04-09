import { useCallback } from 'react';
import FastImage from 'react-native-fast-image';
import { Stack } from 'tamagui';

import { SCREENS } from '../../types';

import { Button, Text, Heading } from '@monorepo/ui';

const BG_LANDING = 'https://i.ibb.co/f17BcDr/bg-landing.png';

const Landing = ({ navigation }) => {
  const handleGetStarted = useCallback(
    () => navigation.navigate(SCREENS.LOGIN),
    [navigation]
  );

  return (
    <Stack position="relative" flex={1} padding={0} margin={0}>
      <FastImage
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        source={{
          uri: BG_LANDING,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <Stack position="absolute" top="27%" left="$6" paddingHorizontal="$6">
        <Heading fontSize="$7.5" color="$textPlaceholder" lineHeight={32}>
          MAKE YOUR
        </Heading>
        <Heading marginTop="$7.5" size="huge" color="$primary">
          HOME BEAUTIFUL
        </Heading>
        <Text
          paddingTop="$9"
          paddingLeft="$8.5"
          paddingRight="$6"
          fontSize="$4.5"
          lineHeight="$extraLarge"
        >
          The best simple place where you discover most wonderful furnitures and
          make your home beautiful
        </Text>
      </Stack>
      <Stack
        position="absolute"
        bottom="23%"
        alignContent="center"
        alignItems="center"
        width="$full"
      >
        <Button size="xl" width={160} onPress={handleGetStarted}>
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};

export default Landing;
