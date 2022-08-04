import React from 'react'
import Grid from '@mui/material/Grid'
import Astronalta from './img/astronalta.png'

export default function Principal(){

    const containerStyle = {
        backgroundImage: 'linear-gradient(90deg, #800080 0%, #C71585 100%)',
        height: '100vh',
        display: 'flex', 
        flexDirection:'row',
        justifyContent: 'space-around', 
        alignItems:'center'
      }

    const imgStyle = {
        maxWidth: '100%',
        maxHeight: '95%',
        textAlign: 'center'
    }

    const titleStyle = {
        width: '25%',
        textAlign: 'center',
    }

    const beginStyle = {
        fontSize: '40px',
        color: 'gray'
    }

    const nameStyle = {
        fontSize: '70px',
        color: 'white'
    }

    const infoStyle = {
        width: '25%',
        textAlign: 'center',
        fontSize: '25px',
        color: 'gray'
    }

    return(
        <div>
            <Grid className='container' style={containerStyle}>
                <Grid className='title' style={titleStyle}>
                    <p style={beginStyle}>seja Bem-vindo ao</p>
                    <p style={nameStyle}>BÓSON</p>
                </Grid>
                <Grid >
                    <img src={Astronalta} style={imgStyle}></img>
                </Grid>
                <Grid className='info' style={infoStyle}>
                    <p>Caso tenha interesse</p> 
                    <p>em se cadastrar no nosso site,</p>
                    <p>basta clicar no botão abaixo.</p>
                </Grid>
            </Grid>
        </div>
    )
}