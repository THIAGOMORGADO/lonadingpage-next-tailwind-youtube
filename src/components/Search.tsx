import React from 'react'

import IconSearch from '@/assets/icon-search.svg';
import Image from 'next/image';

export default function Search() {
  return (
    <div className='flex items-center gap-4'>
      <Image src={IconSearch} alt='Area den pesquisa'/>
      <input 
        type='text' 
        placeholder='Buscar...' 
        className='bg-transparent outline-none text-white placeholder:text-white pr-5'
      />
    </div>
  )
}
