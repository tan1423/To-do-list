import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between bg-violet-700 text-white py-2 '>
            <div className="logo">
                <span className='font-bold text-xl mx-8'>Itask</span>
            </div>
            <ul className='flex  mx-9'>
                <li className='cursor-pointer hover:font-bold transition-all w-20'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all w-20'>Your task</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar