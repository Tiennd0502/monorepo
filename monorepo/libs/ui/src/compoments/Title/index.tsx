import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { TextProps, XStack, XStackProps } from 'tamagui';

import Text from '../Text';
import { EditIcon } from '../icons';

interface TitleProps extends XStackProps {
  label: string;
  labelProps?: TextProps;
  disabledIcon?: boolean;
  onEdit?: () => void;
}

const Title = ({
  label,
  onEdit,
  labelProps,
  disabledIcon = false,
  ...props
}: TitleProps) => (
  <XStack
    justifyContent="space-between"
    alignItems="center"
    paddingVertical="$3.75"
    {...props}
  >
    <Text color="$textTertiary" size="large" {...labelProps}>
      {label}
    </Text>
    {onEdit && <EditIcon disabled={disabledIcon} onPress={onEdit} />}
  </XStack>
);

export default memo(Title, isEqual);
