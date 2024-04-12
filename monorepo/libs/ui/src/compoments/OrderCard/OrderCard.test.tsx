import {fireEvent, render, waitFor} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import { ORDERS } from '@monorepo/mocks';
import OrderCard from '.';

const onViewDetail = jest.fn();

const baseProps = {
  item: ORDERS[0],
  onViewDetail,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <OrderCard {...props} />
    </TamaguiProvider>
  );
};

describe('OrderCard', () => {
 
  it('should render OrderCard component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render OrderCard component with order status processing', () => {
    const container = setup({item: ORDERS[1]});

    expect(container).toMatchSnapshot();
  });

  it('should render OrderCard component with order status canceled', () => {
    const container =  setup({item: ORDERS[2]});

    expect(container).toMatchSnapshot();
  });

  it('calls onViewDetail when detail button clicked', () => {
    const {getByTestId} =  setup();

    waitFor(() => {
      const detailBtn = getByTestId('view-detail');
      fireEvent.press(detailBtn);

      expect(onViewDetail).toHaveBeenCalled();
    });
  });
});
