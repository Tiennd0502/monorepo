import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import Rating from '.';

const baseProps = {
  value: 5
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Rating {...props} />
    </TamaguiProvider>
  );
};

describe('Rating', () => {
  it('should render Rating component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render Rating component with value is a decimal number', () => {
    const container = setup({value: 2.5, size: 20});

    expect(container).toMatchSnapshot();
  });
});
