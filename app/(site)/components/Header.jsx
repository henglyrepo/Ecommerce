"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import Image from 'next/image'
import HeaderBtn from './HeaderBtn'

const Header = () => {
    const pathname = usePathname()
    const navItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Contact',
            href: '/contact'
        },
        {
            label: 'FAQ',
            href: '/faq'
        },
    ]


    

    return (
        <div className='text-center '>
            <ul className=''>
                <div className='w-full grid grid-cols-3 items-center'>
                    <div className='flex gap-20 m-5 py-5 '>
                        <h1 className='text-3xl text-blue-500 font-bold mx-auto text'>LOGO</h1>
                    </div>
                    <div className='flex gap-5 mx-5 py-5 '>
                        {navItems.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className={pathname === link.href ? 'text-blue-600 font-bold' : ''}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div className='flex gap-1 mx-auto py-5'>
                        <HeaderBtn/>
                    </div>
                </div>
            </ul>
        </div>
    );
}

export default Header