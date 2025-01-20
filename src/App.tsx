import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NotificationProvider from './component/common/notify';
import BaseLayout from './component/layout/base';
import HomePage from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

function App() {
  return (
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  );
}

export default App;
