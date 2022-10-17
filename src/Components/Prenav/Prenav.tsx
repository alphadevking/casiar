import { Spacer, Box, HStack } from '@chakra-ui/react';
import React from 'react'
import LocationPlugin from '../LocationPlugin/Location';
import DigitalClock from '../../utils/DigitalClock';
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
        <Box style={bgstyle}>
          <Box style={style} className='shadow-sm container'>
              <small>We are open from {openTime} to {closeTime}</small>
              <Spacer/>
              <Box>
                <HStack>
                  <LocationPlugin/>
                  <small><DigitalClock/></small>
                </HStack>
              </Box>
          </Box>
        </Box>
    </>
  )
}

export default Prenav;