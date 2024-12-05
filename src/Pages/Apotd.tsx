import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApotdDataGet } from '../Redux/ApotdReducer';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Container from '@mui/material/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Css/Apotd.css';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';
import type { AppDispatch } from '../Redux/Store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

function Apotd() {

    const dispatch = useAppDispatch();
    const { data, status } = useSelector((state: any) => state.Apotd);

    useEffect(() => {
        dispatch(ApotdDataGet());
    }, [dispatch]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    arrows: false,
                },
            },
        ],
    };
    return (
        <div className='main2'>
            <Navbar />
            <Container>
                <h1 style={{ textAlign: "center", color: "white", marginBottom: "30px" }}>Astronomy Picture Of The Day</h1>

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


                {status === 'succeeded' && data && data.length > 0 ? (
                    <Slider {...settings}>
                        {data.slice().reverse().map((item: any, index: number) => (
                            <div key={index}>
                                <p style={{ textAlign: "center", color: "white", fontSize: "20px" }}>
                                    Today's Date {item.date}
                                </p>
                                <h2 style={{ textAlign: "center", color: "white", marginBottom: "40px" }}>{item.title}</h2>
                                <img className='img'
                                    src={item.url}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: "70vh",
                                        marginBottom: "100px",

                                    }}
                                />
                                <p className='explain' style={{ textAlign: "center", color: "white", fontSize: "17px" }}>
                                    {item.explanation}
                                </p>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    status === 'failed' && <p style={{ color: "white" }}>Error loading data</p>
                )}

            </Container>
            <Footer />
        </div>
    );
}

export default Apotd;
