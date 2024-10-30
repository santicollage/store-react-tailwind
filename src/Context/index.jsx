import { createContext, useState } from 'react';

export const ShoppingContext = createContext();

export const ShoppingProvider = ({children}) => {
  //Shopping cart - Increment quantity
  const [count, setCount] = useState(0);

  //Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Product Detail - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  //Shopping Cart - Add products
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu
    }}>
      {children}
    </ShoppingContext.Provider>
  )
}