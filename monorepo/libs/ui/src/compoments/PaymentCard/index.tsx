import { memo } from 'react';
import { Image, Stack, XStack } from 'tamagui';

import { Card } from '@monorepo/types';
import { VISA_IMAGE, MASTER_IMAGE, BG_CARD } from '@monorepo/constants';

import Text from '../Text';

interface PaymentCardProps {
  item: Card;
  specialCharacter?: string;
  isDisabled?: boolean;
}

const PaymentCard = ({
  item: { id, name, expiryDate, isVisa = false, isMasterCard = false },
  specialCharacter = '',
  isDisabled = false,
}: PaymentCardProps) => {
  return (
    <Stack
      position="relative"
      minHeight="$45"
      width="100%"
      padding="$6"
      zIndex="$1"
      borderRadius="$2"
      overflow="hidden"
    >
      <Image
        resizeMode="stretch"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex="$2"
        minWidth="100%"
        minHeight="100%"
        source={{ uri: BG_CARD }}
      />
      <Stack zIndex="$3">
        <XStack gap="$2.5" paddingBottom="$6.5">
          {isMasterCard && (
            <Image width="$8" height="$6" source={{ uri: MASTER_IMAGE }} />
          )}
          {isVisa && (
            <Image width="$12.5" height="$4" source={{ uri: VISA_IMAGE }} />
          )}
        </XStack>
        <Text color="$secondary" fontSize="$5">
          {id}
        </Text>
        <XStack paddingTop="$8.5" justifyContent="space-between">
          <Stack>
            <Text fontSize="$3">Card Holder Name</Text>
            <Text color="$secondary">
              {specialCharacter ? specialCharacter.repeat(6) : name}
            </Text>
          </Stack>
          <Stack>
            <Text fontSize="$3">Expiry Date</Text>
            <Text color="$secondary">
              {specialCharacter
                ? `${specialCharacter.repeat(2)}/${specialCharacter.repeat(2)}`
                : expiryDate}
            </Text>
          </Stack>
        </XStack>
      </Stack>
      {isDisabled && (
        <Stack
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex="$4"
          backgroundColor="$backgroundLayer"
        />
      )}
    </Stack>
  );
};

export default memo(PaymentCard);
