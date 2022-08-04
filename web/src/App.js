import React from 'react'
import Grid from '@mui/material/Grid'
// import AppBar from './AppBar'

export default function App(){

  const containerStyle = {
    backgroundImage: 'linear-gradient(90deg, #800080 0%, #C71585 100%)',
    height: '100vh',
    display: 'flex', 
    flexDirection:'row', 
    justifyContent: 'center', 
    alignItems:'center'
  }

  const formStyle = {
    backgroundColor: 'white', 
    height: '400px', 
    width: '350px',
    backgroundColor: '#C0C0C0', 
    boxShadow: '0 0 1.5em #4F4F4F', 
    borderRadius: '7px'
  }

  const titleStyle = {
    margin: 0,
    color: '#696969',
    fontSize: '50px',
    textAlign: 'center',
    fontFamily: 'Apple Chancery, cursive'
  }

  return(
    <Grid>
      <Grid>
        
      </Grid>
      <Grid className='container' style={containerStyle}>
        <Grid className='form' style={formStyle}>
          <p className='title' style={titleStyle}>Formulário</p>
          {/* <p>Nome</p>
          <p>E-mail</p>
          <p>Idade</p> */}
        </Grid>
      </Grid>
    </Grid>
  )
}