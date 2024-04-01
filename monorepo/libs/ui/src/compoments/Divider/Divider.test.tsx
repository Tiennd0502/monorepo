import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import Divider from '.';

const baseProps = {};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Divider {...props} />
    </TamaguiProvider>
  );
};

describe('Divider', () => {
  it('should render Avatar component with default props', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render Avatar component with props', () => {
    const container = setup({height: '2', color: 'red'});

    expect(container).toMatchSnapshot();
  });
});
