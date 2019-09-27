import React from 'react'
import Nav from './components/navigation/navigation'
// import Cards from  './components/cards/card';
import Carousel from './components/carousel/carousel'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import  Service from './components/services/service';
import Work from './components/work/work';

const App = () =>{
  return(
    <>
    <Nav/>
    <Carousel/>
    <CssBaseline />
    <Container maxWidth="sm">
    </Container>
    <Work />
    <Service />
    
    </>
    )
  }
  export default App