"use client"
import { Clock, FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'


function SideNav() {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
         {
            name: 'History',
            icon: Clock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/settings'
        },

    ]

    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [])

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
        <div className='flex justify-center text-2xl font-extrabold text-purple-600'>
            KontentAI
        {/* <Image src={'/logo.svg'} alt='logo' width={120} height={100} /> */}
        </div>
        <hr className='my-6 border' />
        <div className='mt-3'>
            {MenuList.map((menu, index) => (
                <Link href={menu.path} key={index}> {/* Added key prop for React */}
                    <div className={`flex gap-2 mb-2 p-3
                    hover:bg-primary hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${path === menu.path && 'bg-primary text-white'}
                    `}>
                        <menu.icon size={20}/> {/* Changed to menu.icon() */}
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                </Link>
            ))}
        </div>
        <div className='absolute bottom-10 left-0 w-full'>
            
        </div>
    </div>
  )
}

export default SideNav