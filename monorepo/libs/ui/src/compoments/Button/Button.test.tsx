import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { TamaguiProvider } from '@monorepo/provider';
import Button from '.';

const onPress = jest.fn();

const baseProps = {
  children: 'Click me',
  onPress,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  return render(
    <TamaguiProvider>
      <Button {...props} />
    </TamaguiProvider>
  );
};


describe('Button', () => {

  it('should render button component with default props', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render button component with variant outlined', () => {
    const container = setup({variant: 'outlined'});

    expect(container).toMatchSnapshot();
  });

  it('should render button component with props isLoading', () => {
    const container = setup({isLoading: true});

    expect(container).toMatchSnapshot();
  });

  it('should render button component with disabled', () => {
    const container = setup({disabled: true});

    expect(container).toMatchSnapshot();
  });

  it('calls onClick when being clicked', () => {
    const {getByTestId} = setup();

    waitFor(() => {
      const button = getByTestId('button');
  
      fireEvent.press(button);
  
      expect(onPress).toHaveBeenCalled();

    })
    
  });
});
