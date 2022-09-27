import { Spacer } from '@chakra-ui/react';
import React from 'react'
import LocationPlugin from '../LocationPlugin/Location';
import DigitalClock from '../utils/DigitalClock';
import Props from './types'

const bgstyle = {
  backgroundColor: '#060920',
}
const style = {
  fontSize: '12px',
  color: 'white',
  width: '100%',
  padding: '0px 10px',
  display: 'flex',
  
}

const Prenav: React.FC<Props> = (
    {
        openTime,
        closeTime,
    }
) => {
    
  return (
    <>
        <div style={bgstyle}>
          <div style={style} className='shadow-sm container'>
              <span><small>We are open from {openTime} to {closeTime}</small></span>
              <Spacer/>
              <span>
                <LocationPlugin/>
                <span style={{padding: '10px'}}></span>
                <small><DigitalClock/></small>
              </span>
          </div>
        </div>
    </>
  )
}

export default Prenav;