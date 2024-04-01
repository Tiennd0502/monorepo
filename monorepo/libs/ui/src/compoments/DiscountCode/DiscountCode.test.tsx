import {fireEvent, render, waitFor} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import DiscountCode from '.';

const onSubmit = jest.fn();
const baseProps = {onSubmit};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <DiscountCode {...props} />
    </TamaguiProvider>
  );
};

describe('DiscountCode', () => {
  const onSubmit = jest.fn();
  const promoCode = '#123456';

  it('should render DiscountCode component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render DiscountCode component has value', () => {
    const container = setup({value: promoCode});

    expect(container).toMatchSnapshot();
  });

  it('calls onSubmit after entering input and clicked chevron right icon', () => {
    const {getByTestId} = setup();
    waitFor(() => {
      const input = getByTestId('input');
      const ChevronRightIcon = getByTestId('icon');
  
      fireEvent.changeText(input, promoCode);
      fireEvent.press(ChevronRightIcon);
  
      expect(onSubmit).toHaveBeenCalled();
    })
  });

  it('calls onSubmit when delete icon clicked', () => {
    const {getByTestId} = setup({value: promoCode});
    waitFor(() => {
      const deleteIcon = getByTestId('icon');
      fireEvent.press(deleteIcon);

      expect(onSubmit).toHaveBeenCalled();
    })
  });
});
