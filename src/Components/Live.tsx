import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import '../Css/video.css';

function Live() {
    return (
        <Container sx={{ mt: 5, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography variant="h6" gutterBottom color='white' fontSize={35} mb={5} fontWeight={600}>
                Live NASA Videos
            </Typography>
            <Grid container spacing={5} justifyContent="center">
                <Grid item xs={12} sm={6} md={6}>
                    <div className='video'>
                        <iframe
                            src="https://www.youtube.com/embed/Jm8wRjD3xVA"
                            title="NASA Live Stream 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <div className='video'>
                        <iframe
                            src="https://www.youtube.com/embed/wG4YaEcNlb0?"
                            title="NASA Live Stream 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Live;
