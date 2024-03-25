import { memo, useState } from 'react';

// Types
import { Category } from '@monorepo/types';

// Components
import { ScrollView } from 'tamagui';
import CategoryItem from '../CategoryItem';

interface CategoryListProps {
  list: Category[];
  onChange: (value: string) => void;
}

const CategoryList = ({ list, onChange }: CategoryListProps) => {
  const [activeId, setActiveId] = useState(list[0].id);

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        columnGap: 20,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {list.map((item, index) => {
        const handlePress = () => {
          setActiveId(item.id);
          item.id !== activeId && onChange(item.id);
        };
        return (
          <CategoryItem
            key={item.label + index}
            isActive={activeId === item.id}
            item={item}
            onPress={handlePress}
          />
        );
      })}
    </ScrollView>
  );
};

export default memo(CategoryList);
