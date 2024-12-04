import { Container } from '@mui/material'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function NotFound() {
    return (
        <div className='main2'>
            <Navbar />

            <Container>
                <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>Page Not Found</h1>
            </Container>
            <Footer />
        </div>
    )
}

export default NotFound