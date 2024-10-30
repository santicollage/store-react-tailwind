import './styles.css'
import { useContext } from "react";
import { ShoppingContext } from "../../Context";
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id);
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  }

  return (
    <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' :'hidden'} checkout-side-menu overflow-y-auto flex-col fixed right-0 rounded-lg bg-white border border-black`}>
      <div className='flex justify-between items-center px-6 pt-6 pb-3'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <svg onClick={() => context.closeCheckoutSideMenu()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 transform hover:scale-110 transition duration-300 cursor-pointer">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
        </svg>
      </div>
      
      {
        context.cartProducts.map((product) => 
          <OrderCard 
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        )
      }

      <div className='px-6 py-2'>
        <p className='flex justify-between items-center'>
          <span className='font-medium'>Total:</span>
          <span className='font-bold text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
      </div>

    </aside>
  )
}

export {CheckoutSideMenu}