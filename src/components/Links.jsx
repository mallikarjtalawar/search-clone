import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  {
    url: "/search",
    text: "Search",
  },
  {
    url: "/images",
    text: "Images",
  },
  {
    url: "/news",
    text: "News",
  },
  {
    url: "/videos",
    text: "Videos",
  },
];
function Links() {
  return (
    <div className='flex sm:justify-around justify-between mt-4'>     
     {links.map((link, index)=>{
         return(
            <NavLink to={link.url} key={index}  className='px-3 py-1 rounded dark:text-gray-200 dark:bg-gray-900'>{link.text}</NavLink>
         )
     })}
    </div>
  )
}

export default Links
