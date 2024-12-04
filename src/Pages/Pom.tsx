import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MarsDataGet } from '../Redux/MarsReducer';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Container, CircularProgress, Box } from '@mui/material';
import '../Css/Pom.css';

function Pom() {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state: any) => state.Mars);

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    let pageValue = [1, 2, 3, 4, 5]

    useEffect(() => {
        dispatch(MarsDataGet());
    }, [dispatch]);

    const handlePageClick = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= Math.ceil(data?.length / itemsPerPage)) {
            setCurrentPage(pageNumber);
        }
    };

    const paginatedData = data?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="main2">
            <Navbar />
            {status === 'loading' && (
                <Box
                    sx={{
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
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
            {status === 'succeeded' && (
                <Container>
                    <h1 style={{ textAlign: 'center', color: 'white', marginBottom: '30px' }}>Photo Of Mars</h1>
                    <div className="container">
                        {paginatedData?.map((item: any, index: number) => (
                            <div key={index} className="box-wrapper">
                                <div className="box">
                                    <img
                                        src={item?.img_src}
                                        alt="Mars Photo"
                                        style={{ width: '100%', height: '30vh', marginBottom: '20px', marginTop: '30px' }}
                                    />
                                    <p style={{ color: 'white', fontSize: '20px' }}>Photographed by: {item?.rover?.name}</p>
                                    <p style={{ color: 'white', fontSize: '20px' }}>Date: {item.earth_date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
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
                </Container>
            )}
            <Footer />
        </div>
    );
}

export default Pom;
