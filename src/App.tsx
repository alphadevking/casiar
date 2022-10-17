import { ChakraProvider } from "@chakra-ui/react"
import { Routes, Route } from "react-router"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NotFound";

export const App = () => (
  <ChakraProvider>

      <Routes>
        <Route path = '/' element={<Home/>} />

        <Route path="*" element={<NoPage/>} />
      </Routes>

  </ChakraProvider>
)
