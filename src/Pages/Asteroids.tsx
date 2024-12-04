import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AstreiodDataGet } from '../Redux/AstreiodReducer';
import { Container } from '@mui/material';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Box } from '@mui/joy';
import { CircularProgress } from '@mui/material';

function Asteroids() {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state: any) => state.Astreiod);

    useEffect(() => {
        dispatch(AstreiodDataGet());
    }, [dispatch]);

    console.log(data);
    return (
        <div className='main2'>
            <Navbar />
            <Container>
                {status === 'loading' && (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 9999,
                    }}>
                        <CircularProgress />
                    </Box>
                )}

                {status === 'succeeded' && data && Object.keys(data).length > 0 ? (
                    Object.keys(data).reverse().map((date) => (
                        <div key={date}>
                            {data[date].map((item: any, index: number) => (
                                <div key={index} style={{ marginTop: "30px" }} className='box'>
                                    <p>{item.name}</p>
                                    <p>Close Approach Date : {item.close_approach_data[0].close_approach_date}</p>
                                </div>
                            ))}
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </Container>
            <Footer />
        </div>
    );
}

export default Asteroids;
