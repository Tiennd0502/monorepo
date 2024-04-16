import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { SHIPPING_ADDRESS } from '@monorepo/mocks';
import { TamaguiProvider } from '@monorepo/provider';
import ShippingOption from '.';

const onEditItem = jest.fn();
const onCheckedChange = jest.fn();

const baseProps = {
  label: 'Use as the shipping address',
  isActive: false,
  onCheckedChange,
  item: SHIPPING_ADDRESS[0],
  onEditItem,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <ShippingOption {...props} />
    </TamaguiProvider>
  );
};

describe('ShippingOption', () => {

  it('should render ShippingOption component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render ShippingOption component with onEdit props', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('calls onEdit when icon edit clicked', () => {
    const {getByTestId} = setup();
    waitFor(() => {
      const editIcon = getByTestId('edit-icon');
      fireEvent.press(editIcon);

      expect(onEditItem).toHaveBeenCalled();
    });
  });
});
