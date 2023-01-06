import React from 'react'
import { Navbar } from './Navigation/Navbar'
import { Footer } from './Footer'
import { GlobalTypes } from '../globals/index';
import { AppWrapper } from './AppWrapper';
import { Prenav } from './Navigation/Prenav';

const Layout:React.FC<GlobalTypes> = ({ prenav, navbar, children, footer}) => (

    <AppWrapper>

        {
            prenav?
                <Prenav openTime='8am' closeTime='5pm'/>
                :
                <></>
        }

        {
            navbar ?
                <Navbar />
                :
                <></>
        }

        {children}

        {
            footer ?
                <Footer />
                :
                <></>
        }

    </AppWrapper>

)

export default Layout