import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Container } from '@mui/material'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getVideo } from '../Redux/PhotoAndVideoReducer'
import { paginateData } from './Images'
import '../Css/Images.css'
import { Grid } from '@mui/joy'
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

function Videos() {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.Video)

    useEffect(() => {
        dispatch(getVideo())
    }, [dispatch])


    const itemsPerPage = 9;
    const pageValue = [1, 2, 3, 4, 5];
    let pages: any[][] = [];

    const [currentPage, setcurrentPage] = useState(1);


    if (status === 'succeeded' && data) {
        pages = paginateData(data.collection.items, itemsPerPage);
    }

    const handlePageClick = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= pageValue.length) {
            setcurrentPage(pageNumber);
        }
    };

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
                {status === 'succeeded' && data && data.collection.items.length > 0 && (
                    <Grid container spacing={2}>
                        {pages[currentPage - 1]?.map((index: number) => (
                            <Grid item xs={12} sm={6} md={4} key={index} sx={{ cursor: "pointer" }}>
                                <div className='boxImage'>

                                    <img onClick={() => window.open(data.collection.item[index].url, '_blank')}
                                        src={data.collection.items[index]?.links[0]?.href} style={{ width: '100%' }} />
                                    <p>{data.collection.items[index]?.data?.[0]?.description?.substring(0, 340) || ""}</p>
                                </div>
                            </Grid>
                        ))}

                        <div className='pages-section'>
                            {pageValue.map((item) => (
                                <span
                                    key={item}
                                    className={`page-choose ${currentPage === item ? 'active' : ''}`}
                                    onClick={() => handlePageClick(item)}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                    </Grid>
                )}


            </Container>
            <Footer />
        </div>)
}

export default Videos