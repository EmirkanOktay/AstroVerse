import { Container, Grid, Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import astronomyImage from '../Css/Images/astronomy.jpg';
import newsImage from '../Css/Images/news.jpg';
import photosImage from '../Css/Images/photos.jpg';
import videosImage from '../Css/Images/videos.jpg';
import asteroidImage from '../Css/Images/astreiod.jpg';
import marsImage from '../Css/Images/mars.jpg';
import { useNavigate } from 'react-router-dom';

interface Box {
    id: number;
    Name: string;
    Description: string;
    BackgroundImage: number;
    path: string;
}

function ContentBoxes() {
    const navigate = useNavigate();
    const [boxes, setBoxes] = useState<Box[]>([]);

    const images: { [key: number]: string } = {
        1: astronomyImage,
        2: newsImage,
        3: photosImage,
        4: videosImage,
        5: asteroidImage,
        6: marsImage
    };

    useEffect(() => {
        const storedData = localStorage.getItem('boxesData');
        if (storedData) {
            setBoxes(JSON.parse(storedData));
        }
    }, []);

    return (
        <Container sx={{ padding: '20px', color: 'white' }}>
            <Grid container spacing={4}>
                {boxes.map((box) => (
                    <Grid item xs={12} sm={6} md={4} key={box.id}>
                        <Box
                            sx={{
                                padding: 4,
                                height: "20vh",
                                borderRadius: '12px',
                                backgroundImage: `url(${images[box.BackgroundImage]})`,
                                backgroundSize: 'cover',
                                textAlign: 'center',
                                backgroundPosition: 'center',
                                boxShadow: '0px 4px 12px rgba(0,0,0,0.5)',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    transition: 'all 0.3s ease-in-out'
                                }
                            }}
                        >
                            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                {box.Name}
                            </Typography>
                            <Typography variant="body2" sx={{ marginBottom: 2 }}>
                                {box.Description}
                            </Typography>
                            <Button
                                onClick={() => navigate(box.path)}
                                sx={{
                                    backgroundColor: '#802121',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#802135',
                                    }
                                }}
                            >
                                Explore
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ContentBoxes;
