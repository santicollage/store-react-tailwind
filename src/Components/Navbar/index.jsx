import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { ShoppingContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingContext);
  const activeStyle = 'underline underline-offset-4';

  return ( 
    <nav className='bg-white flex justify-between items-center sticky top-0 left-0 z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className={({isActive}) => isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' className={({isActive}) => isActive ? activeStyle : undefined}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className={({isActive}) => isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures' className={({isActive}) => isActive ? activeStyle : undefined}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' className={({isActive}) => isActive ? activeStyle : undefined}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' className={({isActive}) => isActive ? activeStyle : undefined}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          santi@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders' className={({isActive}) => isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={({isActive}) => isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' className={({isActive}) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>  
          {context.count}
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }