import {fireEvent, render, waitFor} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import Quantity from '.';

const onChangeValue = jest.fn();

const baseProps = { onChangeValue };

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Quantity {...props} />
    </TamaguiProvider>
  );
};

describe('Quantity', () => {

  it('should render quantity component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render quantity component with quantity greater than 9', () => {
    const container = setup({defaultValue: 10});

    expect(container).toMatchSnapshot();
  });

  it('should render quantity component with full screen', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('calls onChangeValue when increment icon value clicked', () => {
    const {getByTestId} = setup();

    waitFor(() => {
      const incrementIcon = getByTestId('increment');
      fireEvent.press(incrementIcon);

      expect(onChangeValue).toHaveBeenCalled();
    });
  });

  it('calls onChangeValue when decrement icon value clicked', () => {
    const {getByTestId} = setup({defaultValue: 3});

    waitFor(() => {
      const decrementIcon = getByTestId('decrement');
      fireEvent.press(decrementIcon);

      expect(onChangeValue).toHaveBeenCalled();
    });
  });

  it('calls onChangeValue when decrement icon value clicked', () => {
    const {getByTestId} = setup({defaultValue: 2});

    waitFor(() => {
      const decrementIcon = getByTestId('decrement');
      fireEvent.press(decrementIcon);

      expect(onChangeValue).toHaveBeenCalled();
    });
  });

  it('No action when decrement icon clicked with default value zero', () => {
    const {getByTestId} = setup({defaultValue: 1});
    waitFor(() => {
      const decrementIcon = getByTestId('decrement');

      expect(decrementIcon.props.disabled).toEqual(true);
    });
  });
});
