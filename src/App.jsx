import AppRoute from "./AppRoute"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import {HelmetProvider } from 'react-helmet-async';


const App = () => {
  return (
    <HelmetProvider>

    <div>
      <Navbar/>
      <AppRoute/>
      <Footer/>
    </div>
    </HelmetProvider>
  )
}

export default App

