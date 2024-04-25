import { Grid } from '@/components/Grid'
import Image from 'next/image'
import React from 'react'

import PhoneIcon from "@/assets/icon-phone.svg"
import SolucionIcon from "@/assets/icon-solutions.svg"
import optionIcon from "@/assets/icon-options.svg"
import cardIcon from "@/assets/icon-card.svg"

import imgPhone from "@/assets/phone.png"

export default function SectionServices() {
  return (
    <section className='w-full h-[965px] relative '>
      <Grid>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className='block text-primary-orange text-sm font-bold uppercase mb-9 '>servicos exclusivos</span>
          <h2 className='text-primary-gray text-[56px] font-bold leading-tight mb-6'>Gerencie suas financas sem sair de casa</h2>
          <p className='text-lg max-w-[554px] mb-16 text-secondy-gray'>Veja como voce pode cuidar das suas financas pelo app Itau de forma segura, rapida eo mellhor, no corforto da sua casa.</p>

          <div data-aos="fade-up">
          <ul className='flex flex-col items-start gap-9'>
            <li className='flex gap-9 item-center pb-9 border-b-[1px] border-opacity-gray'>
             <div className="w-7 h-7 flex items-center justify-center">
              <Image src={PhoneIcon} alt='phoneIcone'/>
             </div>
              <p className='flex-1 text-txt-gray pr-2'>Acompanhar sua conta, fazer trasferencias e pagamento de onde estive</p>
            </li>

            <li className='flex gap-9 item-center pb-9 border-b-[1px] border-opacity-gray'>
             <div className="w-7 h-7 flex items-center justify-center">
              <Image src={SolucionIcon} alt='SolucionIcon'/>
             </div>
              <p className='flex-1 text-txt-gray pr-2'>Acompanhar sua conta, fazer trasferencias e pagamento de onde estive</p>
            </li>

            <li className='flex gap-9 item-center pb-9 border-b-[1px] border-opacity-gray'>
             <div className="w-7 h-7 flex items-center justify-center">
              <Image src={optionIcon} alt='phoneIcone'/>
             </div>
              <p className='flex-1 text-txt-gray pr-2'>Acompanhar sua conta, fazer trasferencias e pagamento de onde estive</p>
            </li>

            <li className='flex gap-9 item-center pb-9 border-b-[1px] border-opacity-gray'>
             <div className="w-7 h-7 flex items-center justify-center">
              <Image src={cardIcon} alt='cardIcon'/>
             </div>
              <p className='flex-1 text-txt-gray pr-2'>Acompanhar sua conta, fazer trasferencias e pagamento de onde estive</p>
            </li>
          </ul>
          </div>
         

        </div>
      </Grid>


        <div className="absolute top-0 right-0 h-full w-[32%] bg-gray-phone flex items-center">
          <Image src={imgPhone} alt='imgPhone' className='translate-x-[-50%]'/>
        </div>
    </section>
  )
}
