'use client'

import React from 'react'
import Image from "next/image";

import Logo from "@/assets/logo.svg"
import ArrowDowm from "@/assets/arrow-down.svg"
import IconUser from '@/assets/icon-user.svg'
import { ItemMenu } from './itemMenu';
import Search from './Search';
import { Grid } from './Grid';

export function Header() {
  return(
    <header className='relative flex items-center w-full h-20 bg-primary-orange'>
      <div className="absolute top-0 right-0 bg-primary-color w-[19%] h-full z-0"></div>
        <Grid>
          <div className="flex flex-1 items-center justify-between">

              <div className="flex items-center gap-14">
                <Image src={Logo} alt='Logo do Header'/>

                {/* Menu De item  */}
                <ul className='flex items-center gap-12'>
                  <li>
                    <ItemMenu 
                      nameSpan='Para Voce' 
                      nameImgIcon={ArrowDowm} 
                      nameALtImg='Arrow dowm menu dropDowm'
                      
                    />
                  </li>
                  <li>
                    <ItemMenu 
                      nameSpan='Para empresas' 
                      nameImgIcon={ArrowDowm} 
                      nameALtImg='Arrow dowm menu dropDowm'
                    />
                  </li>
                  <li>
                    <ItemMenu 
                      nameSpan='Servicos' 
                      nameImgIcon={ArrowDowm} 
                      nameALtImg='Arrow dowm menu dropDowm'
                    />
                  </li>

                  <li>
                    <ItemMenu 
                      nameSpan='Ajuda' 
                      nameImgIcon={ArrowDowm} 
                      nameALtImg='Arrow dowm menu dropDowm'
                    />
                  </li>
                  
                </ul>
              </div>
                <Search />
          </div>
          <button className='flex items-center gap-4 bg-primary-color text-white  h-20 pl-10 z-10'>
            <Image src={IconUser} alt='icon user'/>
            <span className=''>Acessar conta</span>
          </button>
        </Grid>
      
    </header>
  )
}