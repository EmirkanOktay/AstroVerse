import { Container, Typography } from '@mui/material'
import React from 'react'
import nasaLogo from '../Css/Images/nasaLogo.png'
import earth from '../Css/Images/earth.png'
import '../Css/header.css'

function Header() {
    return (
        <Container className='header'>
            <Container
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexDirection: { xs: "column", md: "row" },
                    textAlign: "center",
                    gap: 2,
                    marginBottom: 2
                }}
            >
                <div className='left-photo'>
                    <img src={nasaLogo} alt="NASA Logo" />
                </div>

                <Typography
                    className='center-text'
                    sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, ml: 4 }}
                >
                    Welcome to the Secrets of the Universe
                </Typography>

                <div className='right-photo'>
                    <img src={earth} alt="Earth" />
                </div>
            </Container>

            <Typography
                className='center-text'
                sx={{
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                    textAlign: "center",
                    marginTop: 2
                }}
            >
                Discover stunning space images and upcoming astronomical events.


            </Typography>
        </Container>
    )
}

export default Header
