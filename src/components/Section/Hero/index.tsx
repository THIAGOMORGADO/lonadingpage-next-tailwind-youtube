import { Grid } from '@/components/Grid'
import Image from 'next/image'
import React from 'react'

import Apple from "@/assets/btn-apple-store.svg"
import Google from "@/assets/btn-google-play.svg"
import Arrow from "@/assets/arrow-explorer.svg"
import WomanImg from "@/assets/woman.png"
export default function SectionHero() {
  return (
    <section className='w-full h-[704px] bg-img_bg_hero b-no-repeat bg-center bg-cover'>
      <Grid>
        <div className="flex-1 max-w-[500px]">
          <h1 className='text-white text-7xl font-bold mb-4'>Tenha seu banco na palma da sua mao.</h1>
          <p className='text-white text-xl max-w-[408px] mb-8'>Todas as operacoes que voce precisa em um so lugar.Simples completo e feito para voce</p>
        
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={Apple} alt='appleStore'/>
            </button>
            <button>
              <Image src={Google} alt='googlePlay'/>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <Image src={Arrow} alt='Arrow explore'/>
            <span className='text-white text-sm font-bold'>Continue a navegar</span>
          </div>
        </div>


        <Image src={WomanImg} alt='womanImg' className='mr-[-41px]'/>
      </Grid>
    </section>
  )
}
