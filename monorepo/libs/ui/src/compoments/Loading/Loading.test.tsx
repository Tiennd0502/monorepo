import {render} from '@testing-library/react-native';

import { TamaguiProvider } from '@monorepo/provider';
import Loading from '.';

describe('Loading', () => {
  it('should render loading indicator component', () => {
    const container = render(
      <TamaguiProvider>
        <Loading />
      </TamaguiProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
