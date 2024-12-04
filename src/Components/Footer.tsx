import { Container, Typography, Grid } from '@mui/material';
import React from 'react';
import '../Css/footer.css';
import nasaLogo from '../Css/Images/nasaLogo.png';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Grid container spacing={3} justifyContent="space-between">
                    <Grid item xs={12} md={4} className="footer-column">

                        <Typography variant="h6">
                            <img src={nasaLogo} alt="NASA Logo" width={60} height={50} style={{ marginBottom: "20px" }} />
                        </Typography>
                        <p className='explain'>National Aeronautics and Space Administration</p>
                        <p className='explain2'>
                            NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
                        </p>
                    </Grid>


                    <Grid item xs={12} md={4} className="footer-column ">
                        <div className='navigate'>
                            <a href="/">Home</a>
                            <a href="astronomy">Astronomy</a>
                            <a href="planets">Planets</a>
                            <a href="contact">Contact</a>
                        </div>
                    </Grid>


                    <Grid item xs={12} md={4} className="footer-column">
                        <Typography variant="h6">Follow Us</Typography>
                        <div className="icon-container">
                            <a href="https://twitter.com/nasa"><XIcon className='icon' /></a>
                            <a href="https://www.facebook.com/NASA/"><FacebookIcon className='icon' /></a>
                            <a href="https://www.instagram.com/nasa/"><InstagramIcon className='icon' /></a>
                        </div>
                    </Grid>
                </Grid>

                <div className="footer-bottom">
                    <Typography variant="body2">&copy; {new Date().getFullYear()} NASA</Typography>
                    <Typography variant="body2">All rights reserved.</Typography>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
