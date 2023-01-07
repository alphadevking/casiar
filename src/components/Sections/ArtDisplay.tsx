import React from 'react'
import { ArtCard } from '../Cards/ArtCard'

export const ArtDisplay = () => {
  return (
    <div className='px-10 py-20 carousel gap-x-10 mx-20'>
        
        <div className='carousel-item'>
              <ArtCard src='cover-image.jpg' artPrice='5 ETH' title='Avalanche Birdie' subTitle='A very perculiar niche of birds set out to conquer the northern region of every pole.'/>
        </div>

        <div className='carousel-item'>
              <ArtCard src='cover-image.jpg' artPrice='5 ETH' title='Avalanche Birdie' subTitle='A very perculiar niche of birds set out to conquer the northern region of every pole.'/>
        </div>

        <div className='carousel-item'>
              <ArtCard src='cover-image.jpg' artPrice='5 ETH' title='Avalanche Birdie' subTitle='A very perculiar niche of birds set out to conquer the northern region of every pole.'/>
        </div>
        
        <div className='carousel-item'>
              <ArtCard src='cover-image.jpg' artPrice='5 ETH' title='Avalanche Birdie' subTitle='A very perculiar niche of birds set out to conquer the northern region of every pole.'/>
        </div>

    </div>
  )
}
