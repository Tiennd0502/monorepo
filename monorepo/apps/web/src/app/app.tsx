import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Login, SignUp, VerifyOTP, Home } from '../pages';
import { ROUTES } from '../constants';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: ROUTES.VERIFY_OTP,
    element: <VerifyOTP />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
