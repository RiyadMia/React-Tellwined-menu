import React, { useState } from 'react';
import Link from '../link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const menu =[
    {id:1, name: 'Home', link: '/home'},
    {id:2, name: 'Shop', link: '/ shop'},
    {id:3, name: 'Deals', link: '/deals'},
    {id:4, name: 'About', link: '/about'}
]
const Nevber = () => {
    const [open,setOpen]= useState(false)
    return (
        <nav className='w-full bg-indigo-200'>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
               { open ? <XIcon></XIcon>: <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-indigo-200 w-full duration-500 ease-in absolute md:static  ${open ? 'top-6' : 'top-[-120px]' }`}>    
                {
                    menu.map(menu => <Link
                         key={menu.id}
                    menu={menu}
                    ></Link>)
                }           
            </ul>
        </nav>
    );
};

export default Nevber;