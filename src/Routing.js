import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import DetailedPost from './pages/DetailedPost';
import SearchResults from './pages/SearchResults';
import Error from './pages/Error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'post/:postId',
        element: <DetailedPost />
      },
      {
        path: 'search/:searchId',
        element: <SearchResults />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
