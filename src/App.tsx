import {
  ChakraProvider
} from "@chakra-ui/react"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Prenav from "./Components/Prenav/Prenav";
import Nav from "./Components/NavigationBar/Nav";

export const App = () => (
  <ChakraProvider>

    <Prenav openTime="10 AM" closeTime="5 PM"/>

    <section>
      <Nav/>
    </section>

    <section></section>

    <section></section>

  </ChakraProvider>
)
