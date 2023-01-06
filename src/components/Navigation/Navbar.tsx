import * as React from 'react'
import { Link } from 'gatsby'
import { LogoImage } from '../common/styled';
import { topNavItems } from '.';

export const Navbar = () => {

  return (

    <div className='px-[10vw] py-2 shadow-md sticky top-0 z-50 bg-inherit/30 backdrop-blur'>

      <LogoImage logoName='Casiar'/>

      <nav className='flex float-right gap-5'>
        {topNavItems.map((val, key) => {
          return (
            <div key={key} className='p-3 md:block hidden'>
              <Link to={`${val.to}`}>{val.title}</Link>
            </div>
          );
        })}
        
      </nav>

    </div>
  )
}
