import { Flex, Spacer } from "@chakra-ui/react";
import casiarLogo from '../Static/images/casiar-banner.png'
import { ColorModeSwitcher } from "../utils/ColorModeSwitcher";

const imagestyle = {
    width: '5em',
}

const navbarstyle = {
    border: '1px solid white',
}

const Nav = () => {
    return(
        <Flex className='glass' style={navbarstyle}>
            <div className="p-2">
                <span className="d-flex"><img src={casiarLogo} style={imagestyle}/></span>
                
                <Spacer />

                <span><ColorModeSwitcher/></span>
            </div>
        </Flex>
    )
}

export default Nav