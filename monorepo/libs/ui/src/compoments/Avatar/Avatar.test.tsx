import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import { AVATAR_DEFAULT} from '@monorepo/constants';
import { USER } from '@monorepo/mocks';

import Avatar from '.';

const baseProps = {
  name: USER.name,
  email: USER.email,
};

const setup = (moreProps = {}) => {
  const props = {
    ...baseProps,
    ...moreProps,
  };
  
  return render(
    <TamaguiProvider>
      <Avatar {...props} />
    </TamaguiProvider>
  );
};

describe('Avatar', () => {
  it('should render Avatar component with empty image', () => {
    const container = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render Avatar component has src props', () => {
    const container =setup({avatar:AVATAR_DEFAULT});

    expect(container).toMatchSnapshot();
  });
});
