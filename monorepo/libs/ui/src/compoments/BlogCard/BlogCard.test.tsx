import { render } from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import { BLOGS } from '@monorepo/constants';

import BlogCard from '.';

const onPress = jest.fn();

const baseProps = {
  item: BLOGS[0],
  onPress
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <BlogCard {...props} />
    </TamaguiProvider>
  );
};

describe('BlogCard', () => {
  it('should render BlogCard component with default props', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render CartItem component with isReview true', () => {
    const container = setup({isReview: true});

    expect(container).toMatchSnapshot();
  });
});
