import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import { CartIcon, ChevronLeftIcon } from '../icons';
import Header from '.';

const baseProps = {
  title: 'BEAUTIFUL',
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Header {...props} />
    </TamaguiProvider>
  );
};


describe('Header', () => {
  it('should render Header component', () => {
    const container = setup({
      subTitle: 'Make home',
      endIcon: <CartIcon />,
    });

    expect(container).toMatchSnapshot();
  });

  it('should render Header component with only title prop', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render Header component with not end icon', () => {
    const container = setup({
      startIcon: <ChevronLeftIcon />,
      endIcon: <CartIcon />,
    });

    expect(container).toMatchSnapshot();
  });
});
