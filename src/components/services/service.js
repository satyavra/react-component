import React from 'react'

const card = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition:'0.3s'
};

const container = {
  padding: '2px 16px'
};
const Service = (props) =>{
  return(
    <>
    <h1>OUR SERVICES</h1>
    <div style= {card}>
    <div style ={container}>
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
    </div>
    </div>
    </>
    )
  };
  export default Service