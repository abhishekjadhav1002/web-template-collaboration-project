
import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1350px] mx-auto w-full px-[10px] md:px-[8px] lg:px-[8px] xl:px-0'>
        {children}
    </div>
  )
}

export default Container