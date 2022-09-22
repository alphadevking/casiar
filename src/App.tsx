import {
  Box, ChakraProvider, SimpleGrid
} from "@chakra-ui/react"
import * as React from "react"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ColorModeSwitcher } from './Components/utils/ColorModeSwitcher';
import { Container } from "react-bootstrap";


export const App = () => (
  <ChakraProvider>

    <Container>

      <ColorModeSwitcher/>

      <SimpleGrid columns={2} spacing={5}>

        <Box>Hey</Box>
        <Box></Box>

      </SimpleGrid>

    </Container>

  </ChakraProvider>
)
