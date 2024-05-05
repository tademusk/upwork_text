import React, { useState } from 'react'
import NewSlider from './NewSlider'

const Banner = () => {
  return (
<div className="flex flex-col h-full px-1 justify-between items-center py-4">
    
   <div className="flex h-[67%] flex-1 mt-8 mb-5 justify-center w-full items-center rounded-lg">
      <NewSlider />
   </div>

</div>

  )
}

export default Banner
