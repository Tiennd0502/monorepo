import React, { useCallback } from 'react';
import { Stack, XStack } from 'tamagui';
import FastImage from 'react-native-fast-image';

import { SCREENS } from '../../types';
import { CONGRATS_IMAGE } from '../../constants';
import { Heading, Text, Button, CheckIcon } from '@monorepo/ui';
import { MainLayout } from '../../components';

const Congrats = ({ navigation }) => {
  const handleTrackOrder = useCallback(() => null, []);

  const handleGoToHome = useCallback(
    () => navigation.navigate(SCREENS.HOME),
    [navigation]
  );

  return (
    <MainLayout>
      <Stack justifyContent="center" alignItems="center" gap="$5">
        <Heading size="extraLarge" textAlign="center">
          SUCCESS!
        </Heading>
        <Stack position="relative">
          <FastImage
            style={{
              width: 270,
              height: 230,
            }}
            source={{
              uri: CONGRATS_IMAGE,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <XStack
            backgroundColor="$successPrimary"
            width="$12.5"
            height="$12.5"
            justifyContent="center"
            alignItems="center"
            borderRadius="$full"
            alignContent="center"
            marginTop={-24}
            marginHorizontal="auto"
          >
            <CheckIcon />
          </XStack>
        </Stack>
        <Stack marginTop="$8">
          <Text size="large">Your order will be delivered soon.</Text>
          <Text size="large">Thank you for choosing our app!</Text>
        </Stack>

        <Button
          size="lg"
          marginTop="$9"
          onPress={handleTrackOrder}
          width="100%"
        >
          Track your orders
        </Button>
        <Button
          size="lg"
          variant="outlined"
          width="100%"
          onPress={handleGoToHome}
        >
          BACK TO HOME
        </Button>
      </Stack>
    </MainLayout>
  );
};

export default Congrats;
