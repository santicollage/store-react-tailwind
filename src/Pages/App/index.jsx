import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingProvider } from '../../Context';
import './App.css';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { SignIn } from '../SignIn';
import { NotFound } from '../NotFound';
import { Navbar } from '../../Components/Navbar';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/sign-in', element: <SignIn/>},
    {path: '/*', element: <NotFound/>},
  ]);
  return routes;
}

const App = () => {

  return (
    <>
      <ShoppingProvider>
        <BrowserRouter>
          <Navbar/>
          <AppRoutes/>
          <CheckoutSideMenu/>
        </BrowserRouter>
      </ShoppingProvider>
    </>
  )
}

export default App
