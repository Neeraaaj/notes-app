import { getUser } from '@/lib/auth'
import React from 'react'
import { Lilita_One } from 'next/font/google';
import UserButton from './UserButton';
import NewNoteButton from './NewNoteButton';

const lilita = Lilita_One({weight: '400', subsets: ["latin"]})

const Header = async() => {
    const user = await getUser();
    
  return (
    <div className='relative mt-2 flex h-20 w-full max-w-5xl items-center justify-between rounded-lg px-4'>
        <UserButton user={user} />

        <h1 className={`text-4xl sm:text-5xl text-secondary ${lilita.className}`}>
            FIRE NOTES
        </h1>

        <NewNoteButton />
    </div>
  )
}

export default Header