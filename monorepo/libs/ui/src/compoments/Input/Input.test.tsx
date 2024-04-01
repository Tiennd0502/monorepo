import {fireEvent, render, waitFor} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import { ERROR_MESSAGES } from '@monorepo/constants';
import Input from '.';

const baseProps = {
  label: 'Name',
  placeholder: 'Enter value',
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Input {...props} />
    </TamaguiProvider>
  );
};

describe('Input', () => {

  it('should render Input component with default props', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render Input component with variant outlined', () => {
    const container = setup({variant: "outlined"});

    expect(container).toMatchSnapshot();
  });

  it('should render Input component with variant flushed', () => {
    const container = setup({variant: "flushed"});

    expect(container).toMatchSnapshot();
  });

  it('should render Input component with variant disabled', () => {
    const container = setup({variant: 'disabled'});

    expect(container).toMatchSnapshot();
  });

  it('should render Input component with error message', () => {
    const container =  setup({ errorMessage: ERROR_MESSAGES.FIELD_REQUIRED('Name')});

    expect(container).toMatchSnapshot();
  });

  it('should render Input component when entering input', () => {
    const onChangeText = jest.fn()
    const {getByTestId} = setup({onChangeText});
    
    waitFor(() => {
      const result = '123';
      const input = getByTestId('input');
      fireEvent.changeText(input, result);
  
      expect(onChangeText).toHaveBeenCalledWith(result);
    })
  });
});
