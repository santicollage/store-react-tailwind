import { createContext, useState } from 'react';

export const ShoppingContext = createContext();

export const ShoppingProvider = ({children}) => {
  const [count, setCount] = useState(0);
  

  return (
    <ShoppingContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShoppingContext.Provider>
  )
}