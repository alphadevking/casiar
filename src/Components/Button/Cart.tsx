import { BiCartAlt } from "react-icons/bi";
import { CartProps } from "./types";
import { Container } from "@chakra-ui/react";
import { useState } from "react";

const Cart: React.FC<CartProps> = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
      setIsHovering(true);
  }

  const handleMouseOut = () => {
      setIsHovering(false);
  }

  const cartStyle = {
    margin: '5px',
    padding: '5px',
    backgroundColor: isHovering? '#006089' : '#004266',
    color: 'white',
    fontSize: '30px',
    borderRadius: '10px',
  }

  
  return (
    <>
        <BiCartAlt style={cartStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
    </>
  )
}

export default Cart