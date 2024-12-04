import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { NewsDataGet } from '../Redux/News.Reducer';
import { Container, Grid, Box } from '@mui/material';
import { CircularProgress } from '@mui/material';
import '../Css/News.css';

function News() {
    const { data, status } = useSelector((state: any) => state.News);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(NewsDataGet());
    }, [dispatch]);


    return (
        <div>
            <div className="main2">
                <Navbar />
                <div>
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

                        {status === 'succeeded' && data && data.results.length > 0 ? (
                            <Grid container spacing={4}>
                                {data.results.map((item: any, index: number) => (
                                    <Grid item xs={12} sm={6} md={12} lg={6} key={index}>
                                        <div className='news'>
                                            <h3>{item.title}</h3>
                                            <img src={item.image_url} alt={item.title} className="news-image" />
                                            <p onClick={() => window.open(item.url, '_blank')}>{item.summary}</p>
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            status === 'succeeded' && <p>No data available or empty results.</p>
                        )}

                    </Container>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default News;
