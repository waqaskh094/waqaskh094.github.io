import React from 'react'

const Logo = () => {
  return (
    <>
    <div class="flex items-center space-x-2 p-4">
  <div class="flex space-x-1">
    <div class="w-5 h-8 bg-blue-600 skew-x-[-20deg] rounded-sm"></div>
    <div class="w-5 h-8 bg-purple-600 skew-x-[-20deg] rounded-sm"></div>
  </div>

  <h1 class="text-2xl font-bold">
    <span className='dark:text-white'>Shad</span>
    <span class="text-blue-600">Consultants</span>
    <span class="text-purple-600">Inc</span>
    <span class="text-purple-600 text-4xl leading-none">.</span>
  </h1>
</div>
    </>
  )
}

export default Logo
