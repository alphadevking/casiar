import { Box, Img, HStack } from '@chakra-ui/react';
import Prenav from "../Prenav/Prenav";
import casiarLogo from '../Static/images/casiar-solid.png'


const imagestyle = {
    width: '4rem',
    padding: '.4rem',
}

const navbarstyle = {
    background: 'transparent',
    // outline: '1px solid #D4DBE1',
    padding: '.4rem 3vw',
    width: '100%',
    boxShadow: '.5px .5px 1px #D4DBE1',
    backdropFilter: 'blur(10px)',
    transition: 'all .5s',
}

const Nav = () => {
    return(
        <Box>
            <Prenav openTime="10 AM" closeTime="5 PM"/>

            <Box alignItems="center" justifyContent="space-between" style={navbarstyle}>
                <HStack>
                    <Img src={casiarLogo} style={imagestyle}/>
                    <>Casiar</>
                </HStack>
            </Box>
        </Box>
    )
}

export default Nav