import Image from "next/image";

type ButtonProps = {
  nameSpan: string;
  nameImgIcon: string;
  nameALtImg: string;
}

export function ItemMenu({nameSpan, nameImgIcon, nameALtImg,} : ButtonProps) {
  return(
    <button className='flex items-center gap-3 '>
        <span className='text-white font-bold'>{nameSpan}</span>
        <Image src={nameImgIcon} alt={nameALtImg} />
    </button>
  )
}