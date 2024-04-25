import React, { Children, ReactNode } from 'react'

type gridProps = {
  children: ReactNode;
 
}

export function Grid({children} :  gridProps) {
  return (
    <div className="flex items-center justify-between  w-full max-w-[1246px] px-[15px] mx-auto"> 
      {children}
    </div>
  )
}
