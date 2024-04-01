import {fireEvent, render, waitFor} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import Switch from '.';

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
      <Switch {...props} />
    </TamaguiProvider>
  );
};

describe('Switch', () => {
  window.setImmediate = window.setTimeout

  it('should render Switch component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render Switch with checked true', () => {
    const container = setup({defaultChecked: true});

    expect(container).toMatchSnapshot();
  });

  it('calls onCheckedChange when being clicked', () => {
    const onCheckedChange = jest.fn();
    const {getByTestId} = setup({onCheckedChange});

    waitFor(() => {
      const label = getByTestId('switch');
      fireEvent.press(label);
  
      expect(onCheckedChange).toHaveBeenCalled();
    })
  });
});
