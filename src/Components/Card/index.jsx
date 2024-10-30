import { useContext } from "react";
import { ShoppingContext } from "../../Context";

const Card = ({item}) => {
  const context = useContext(ShoppingContext);

  const showProduct = (productDetail) => {
    context.closeCheckoutSideMenu();
    context.openProductDetail();
    context.setProductToShow(productDetail);
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.closeProductDetail();
    context.openCheckoutSideMenu();
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
    
    if (isInCart){
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#297c3b" className="size-6">
            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
        </div>
      )
    } else {
      return (
        <div 
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 transform hover:scale-110 transition duration-300'
            onClick={(event) => addProductsToCart(event, item)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
            </svg>
          </div>
      )
    }
  }

  return (
    <div 
    className='bg-white cursor-pointer w-56 h-60 shadow rounded-lg overflow-hidden'
    onClick={() => showProduct(item)}>
      <figure className='relative mb-2 w-full h-3/4'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0'>{item.category.name}</span>
        <img className='w-full h-full object-cover' src={item.images[1]} alt={item.title} />
        {renderIcon(item.id)}
      </figure>
      <p className='flex justify-between items-center p-2'>
        <span className='text-sm font-light'>{item.title}</span>
        <span className='text-lg font-medium'>{`$${item.price}`}</span>
      </p>
    </div>
  )
}

export { Card }