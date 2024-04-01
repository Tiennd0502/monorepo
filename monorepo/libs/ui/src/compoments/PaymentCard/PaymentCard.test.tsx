import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import { PAYMENT_CARDS } from '@monorepo/constants';
import PaymentCard from '.';

const onEdit = jest.fn();

const baseProps = {
  item: PAYMENT_CARDS[0],
  onEdit,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <PaymentCard {...props} />
    </TamaguiProvider>
  );
};

describe('PaymentCard', () => {

  it('should render PaymentCard component', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render PaymentCard component with isMasterCard', () => {
    const container = setup({item: PAYMENT_CARDS[1]});

    expect(container).toMatchSnapshot();
  });

  it('should render PaymentCard component with isVisaCard', () => {
    const container =  setup({item: PAYMENT_CARDS[2]});

    expect(container).toMatchSnapshot();
  });

  it('should render PaymentCard component has special character', () => {
    const container =  setup({ specialCharacter: 'X' });

    expect(container).toMatchSnapshot();
  });

  it('should render PaymentCard component disabled', () => {
    const container = setup({ isDisabled: true});

    expect(container).toMatchSnapshot();
  });
});
