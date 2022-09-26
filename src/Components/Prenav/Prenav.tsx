import { Spacer } from '@chakra-ui/react';
import React from 'react'
import LocationPlugin from '../LocationPlugin/Location';
import DigitalClock from '../utils/DigitalClock';
import Props from './types'

const style = {
  fontSize: '12px',
  backgroundColor: 'dark',
  width: '100%',
  padding: '0px 10px',
  display: 'flex',
  borderRadius: '5px'
}

const Prenav: React.FC<Props> = (
    {
        openTime,
        closeTime,
    }
) => {
    
  return (
    <>
        <div style={style} className='shadow-sm'>
            <span><small>We are open from {openTime} to {closeTime}</small></span>
            <Spacer/>
            <span>
              <LocationPlugin/>
              <span className='p-1'></span>
              <small><DigitalClock/></small>
            </span>
        </div>
    </>
  )
}

export default Prenav;