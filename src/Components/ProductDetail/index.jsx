import './styles.css'
import { useContext } from "react";
import { ShoppingContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingContext);

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' :'hidden'} product-detail overflow-y-auto flex-col fixed right-0 rounded-lg bg-white border border-black`}>
      <div className='flex justify-between items-center px-6 pt-6 pb-3'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <svg onClick={() => context.closeProductDetail()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 transform hover:scale-110 transition duration-300 cursor-pointer">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
        </svg>
      </div>
      <figure className='px-6'>
        <img className='w-full rounded-lg' src={context.productToShow.images?.[0]} alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col items-end p-6 pt-3 text-right'>
        <span className='font-medium text-2xl'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export {ProductDetail}