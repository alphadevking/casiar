import * as React from 'react'
import { Link } from 'gatsby'
import { LogoImage } from '../common/styled';
import { topNavItems } from '.';

export const Navbar = () => {

  return (

    <div className='px-[10vw] py-2 shadow-md'>

      <LogoImage />

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
