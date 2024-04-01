import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import Text from '.';

const baseProps = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Text {...props} />
    </TamaguiProvider>
  );
};

describe('Text', () => {
  it('should render Text component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render Text component with prop error true', () => {
    const container = setup({error: true});

    expect(container).toMatchSnapshot();
  });

  it('should render Text component with size large', () => {
    const container = setup({size: 'large'});

    expect(container).toMatchSnapshot();
  });
});
