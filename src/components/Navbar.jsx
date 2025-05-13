import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Navbar = ({darktheme , setDarktheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to='/' className='text-2xl bg-blue-500  font-bold text-white py-1 px-3 rounded dark:text-gray-200 dark:bg-gray500
            dark:text-gray-900'>Google</Link>
            <button type='button' onClick={() => setDarktheme(!darktheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg'>
                {darktheme ? 'Light' : 'Dark'} Mode
            </button>

        </div>
        <Search />
    </div>
  )
}

export default Navbar
