import { useContext } from "react";
import { ShoppingContext } from "../../Context";

const Card = ({item}) => {
  const context = useContext(ShoppingContext);

  return (
    <div className='bg-white cursor-pointer w-56 h-60 shadow rounded-lg overflow-hidden'>
      <figure className='relative mb-2 w-full h-3/4'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0'>{item.category.name}</span>
        <img className='w-full h-full object-cover' src={item.images[1]} alt={item.title} />
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={() => context.setCount(context.count + 1)}
        >
          +
        </div>
      </figure>
      <p className='flex justify-between items-center p-2'>
        <span className='text-sm font-light'>{item.title}</span>
        <span className='text-lg font-medium'>{`$${item.price}`}</span>
      </p>
    </div>
  )
}

export { Card }