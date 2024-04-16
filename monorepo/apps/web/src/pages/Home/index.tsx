import { useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { userStore } from '@monorepo/stores';
import { Button, Heading } from '@monorepo/ui';
import { MainLayout } from '../../layouts';
import { ROUTES } from '../../constants';

const Home = () => {
  const navigate = useNavigate();
  const [user, removeUser] = userStore((state) => [
    state.user,
    state.removeUser,
  ]);

  const handleLogout = useCallback(() => {
    removeUser();
    navigate(ROUTES.LOGIN);
  }, [navigate, removeUser]);

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return (
    <MainLayout>
      <Heading>Home page</Heading>
      <Button onPress={handleLogout} width="$25">
        Logout
      </Button>
    </MainLayout>
  );
};

export default Home;
