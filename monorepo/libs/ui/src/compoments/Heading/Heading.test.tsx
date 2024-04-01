import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import Heading from '.';

const baseProps = {
  children: 'Heading text'
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Heading {...props} />
    </TamaguiProvider>
  );
};

describe('Heading', () => {
  it('should render Heading component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render Heading component with size large', () => {
    const container = setup({size: 'large'});

    expect(container).toMatchSnapshot();
  });
});
