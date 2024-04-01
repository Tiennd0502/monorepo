import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import Checkbox from '.';

const onCheckedChange = jest.fn();

const baseProps = {
  label: 'Label',
  onCheckedChange
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Checkbox {...props} />
    </TamaguiProvider>
  );
};

describe('Checkbox', () => {
  it('should render Checkbox component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render Checkbox with checked true', () => {
    const container = setup({checked: true});

    expect(container).toMatchSnapshot();
  });
});
