import { memo, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';
import { StackProps, XStack } from 'tamagui';

import TabItem from './TabItem';

interface Tabs {
  [key: string]: string;
}

interface TabHeaderProps extends StackProps {
  onChange: (id: string) => void;
  value: string;
  tab: Tabs;
}

const TabHeader = ({ tab, value, onChange, ...props }: TabHeaderProps) => {
  const [tabActive, setTabActive] = useState(value);

  const handleChangeTab = useCallback(
    (key: string) => {
      setTabActive(key);
      onChange(key);
    },
    [onChange]
  );

  return (
    <XStack paddingTop="$3" justifyContent="space-around" {...props}>
      {Object.entries(tab).map(([key, label]) => {
        const handleChange = () => handleChangeTab(key);
        return (
          <TabItem
            label={label}
            isActive={tabActive === key}
            onChange={handleChange}
          />
        );
      })}
    </XStack>
  );
};

export default memo(TabHeader, isEqual);
