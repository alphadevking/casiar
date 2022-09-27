import { Flex, Spacer } from "@chakra-ui/react";
import casiarLogo from '../Static/images/casiar-solid.png'


const imagestyle = {
    width: '4rem',
    padding: '.4rem'
}

const navbarstyle = {
    border: '1px solid black',
    padding: '0vw 5vw',
    width: '100%',
    display: 'flex',
}

const Nav = () => {
    return(
        <Flex className='glass'>
            <div style={navbarstyle}>
                <span ><img src={casiarLogo} style={imagestyle}/>asiar</span>
            </div>
        </Flex>
    )
}

export default Nav