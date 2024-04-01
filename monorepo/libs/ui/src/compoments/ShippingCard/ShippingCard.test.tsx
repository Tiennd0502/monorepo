import { fireEvent, render, waitFor } from '@testing-library/react-native';

import { SHIPPING_ADDRESS } from '@monorepo/constants';
import { TamaguiProvider } from '@monorepo/provider';
import ShippingCard from '.';

const onEdit = jest.fn();

const baseProps = {
  item: SHIPPING_ADDRESS[0],
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <ShippingCard {...props} />
    </TamaguiProvider>
  );
};


describe('ShippingCard', () => {

  it('should render ShippingCard component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render ShippingCard component with onEdit props', () => {
    const container = setup({ onEdit });

    expect(container).toMatchSnapshot();
  });

  it('calls onEdit when icon edit clicked', () => {
    const {getByTestId} = setup({ onEdit });
    waitFor(() => {
      const editIcon = getByTestId('edit-icon');
      fireEvent.press(editIcon);

      expect(onEdit).toHaveBeenCalled();
    });
  });
});
