import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NotificationProvider from './component/common/notify';
import BaseLayout from './component/layout/base';
import HomePage from './pages/home';
import BlogPage from './pages/blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
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
