import React from 'react'
import { DigitalClock } from '../Tools/DigitalClock'
import { GlobalTypes } from '../../globals'
import { BiCurrentLocation } from 'react-icons/bi'

export const Prenav:React.FC<GlobalTypes> = ( { openTime, closeTime } ) => {
  return (
    <div className='justify-center bg-black text-white flex w-full space-x-5 text-[10px] py-[1px] px-[10vw]'>

        <p className='float-left'>We are open from {openTime} to {closeTime}.</p>

        <div className='flex gap-x-10 float-right'>
            <span className='flex'><BiCurrentLocation size={12}/> Lagos State, Nigeria</span>
            <DigitalClock/>
        </div>

    </div>
  )
}
