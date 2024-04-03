import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import {CATEGORIES} from '@monorepo/mocks';
import CategoryList from '.';

const onChange = jest.fn();

const baseProps = {
  list: CATEGORIES,
  onChange,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <CategoryList {...props} />
    </TamaguiProvider>
  );
};

describe('CategoryList', () => {
  it('should render CategoryList component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });
});
