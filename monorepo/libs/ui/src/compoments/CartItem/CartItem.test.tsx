import {fireEvent, render, waitFor} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import {PRODUCTS} from '@monorepo/constants';

import CartItem from '.';

const onDelete = jest.fn();

const baseProps = {
  item: PRODUCTS[0],
  onDelete,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <CartItem {...props} />
    </TamaguiProvider>
  );
};

describe('CartItem', () => {

  it('should render CartItem component with default props', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render CartItem component with isFavorites true', () => {
    const container = setup({isFavorites: true});

    expect(container).toMatchSnapshot();
  });

  it('should render CartItem component has quantity prop', () => {
    const onChangeQuantity = jest.fn();

    const container = setup({
      quantity: 2,
      onChangeQuantity,
    });

    expect(container).toMatchSnapshot();
  });

  it('calls onDelete when close icon clicked', () => {
    const {getByTestId} = setup();
    waitFor(() => {
      const deleteIcon = getByTestId('close-icon');
      fireEvent.press(deleteIcon);

      expect(onDelete).toHaveBeenCalled();
    })
  });

  it('calls onChangeQuantity when increment icon value clicked', () => {
    const onChangeQuantity = jest.fn();

    const {getByTestId} = setup({
      quantity: 2,
      onChangeQuantity,
    });

    waitFor(() => {
      const incrementIcon = getByTestId('add-icon');
      fireEvent.press(incrementIcon);

      expect(onChangeQuantity).toHaveBeenCalled();
    });
  });

  it('calls onChangeQuantity when decrement icon value clicked', () => {
    const onChangeQuantity = jest.fn();

    const {getByTestId} = setup({
      quantity: 2,
      onChangeQuantity,
    });

    waitFor(() => {
      const decrementIcon = getByTestId('minus-icon');
      fireEvent.press(decrementIcon);

      expect(onChangeQuantity).toHaveBeenCalled();
    });
  });
});
