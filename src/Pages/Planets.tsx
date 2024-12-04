import Navbar from '../Components/Navbar'
import { Container } from '@mui/material'
import Footer from '../Components/Footer'
import '../Css/Planets.css'
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom'

function Planets() {
    const navigate = useNavigate();
    return (
        <div className='main2'>
            <Navbar />
            <Container>
                <div className='intro'>
                    <h1>About the Planets</h1>
                    <p>The solar system has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. There are five officially recognized dwarf planets in our solar system: Ceres, Pluto, Haumea, Makemake, and Eris.</p>
                    <div className='explain-intro'>
                        <div className='left-intro'>
                            <span>8</span> <p>Planets</p>
                        </div>
                        <div className='rigth-intro'>
                            <span>5</span> <p>Dwarf Planets</p>
                        </div>
                    </div>
                </div>

                <div className='Planets-info'>
                    <h1>Inner Planets</h1>
                    <p>The first four planets from the Sun are Mercury, Venus, Earth, and Mars. These inner planets also are known as terrestrial planets because they have solid surfaces.</p>
                    <div className='planet-boxes'>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/pia15162-mercury-basins-messenger-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Mercury</h4>
                            <p>Mercury is the smallest planet in our solar system, and the nearest to the Sun.</p>
                            <p className='explore'>Explore Mercury</p> <span onClick={() => navigate("/planets-details/mercury")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/venus-mariner-10-pia23791-fig2-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Venus</h4>
                            <p>Venus is the second planet from the Sun, and Earth's closest planetary neighbor.</p>
                            <p className='explore'>Explore Venus</p> <span onClick={() => navigate("/planets-details/venus")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/blue-marble-apollo-17-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Earth </h4>
                            <p>Earth is our home planet is the third planet from the Sun, and the fifth largest planet</p>
                            <p className='explore'>Explore Earth</p> <span onClick={() => navigate("/planets-details/earth")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/mars-full-globe-16x9-1.jpg?w=1536&format=webps" alt="" />
                            <h4>Mars </h4>
                            <p>Mars is the fourth planet from the Sun  is a dusty, cold, desert world with a very thin atmosphere.</p>
                            <p className='explore'>Explore Mars</p><span onClick={() => navigate("/planets-details/mars")}>
                                <EastIcon /></span>
                        </div>
                    </div>
                </div>

                <div className='Planets-info'>
                    <h1>Outer Planets</h1>
                    <p>The giant planets in our outer solar system don't have hard surfaces and instead have swirling gases above a core. Jupiter and Saturn are gas giants. Uranus and Neptune are ice giants.</p>
                    <div className='planet-boxes'>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/jupiter-marble-pia22946-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Jupiter </h4>
                            <p>Jupiter is the largest planet in our solar system if it were a hollow shell, 1,000 Earths could fit inside</p>
                            <p className='explore'>Explore Jupiter</p><span onClick={() => navigate("/planets-details/jupiter")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2023/05/saturn-farewell-pia21345-sse-banner-1920x640-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Saturn </h4>
                            <p>Saturn is the sixth planet from the Sun, the second-largest planet in our solar system.</p>
                            <p className='explore'>Explore Saturn</p> <span onClick={() => navigate("/planets-details/saturn")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/uranus-pia18182-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Uranus </h4>
                            <p>The seventh planet from the Sun, Uranus has the third largest diameter of planets in our solar system.</p>
                            <p className='explore'>Explore Uranus</p> <span onClick={() => navigate("/planets-details/uranus")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/pia01492-neptune-full-disk-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Neptune  </h4>
                            <p>Neptune is the eighth and most distant planet in our solar system.</p>
                            <p className='explore'>Explore Neptune</p> <span onClick={() => navigate("/planets-details/neptune")}>
                                <EastIcon /></span>
                        </div>
                    </div>
                </div>

                <div className='Planets-info'>
                    <h1>Dwarf Planets</h1>
                    <p>Beyond Neptune, a newer class of smaller worlds called dwarf planets reign, including longtime favorite Pluto. The other dwarf planets are Ceres, Makemake, Haumea, and Eris. Ceres is the only dwarf planet in the inner solar system. It's located in the main asteroid belt between Mars and Jupiter.</p>
                    <div className='planet-boxes'>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/ceres-dawn-pia19562-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Ceres </h4>
                            <p>Dwarf planet Ceres is the largest object in the asteroid belt between Mars and Jupiter, and it's the only dwarf planet located in the inner solar system.</p>
                            <p className='explore'>Explore Ceres</p>  <span onClick={() => navigate("/planets-details/ceres")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/pluto-new-horizons-pia20291-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Pluto  </h4>
                            <p>Pluto was long considered our solar system's ninth planet. But it was reclassified as a dwarf planet in 2006 by the International Astronomical Union.</p>
                            <p className='explore'>Explore Pluto </p>  <span onClick={() => navigate("/planets-details/pluto")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/haumea-30jun2015-22-28ok2-final-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Haumea   </h4>
                            <p>Haumea was nicknamed Santa by one discovery team. It is oval-shaped, and is one of the fastest rotating large objects in our solar system.</p>
                            <p className='explore'>Explore Haumea </p>  <span onClick={() => navigate("/planets-details/haumea")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/e/ErisArtistConcept1200w.jpg?w=1536&format=webp&fit=clip&crop=faces%2Cfocalpoint" alt="" />
                            <h4>Eris</h4>
                            <p>The discovery of Eris helped trigger a debate in the scientific community that led to the decision to clarify the definition of a planet.</p>
                            <p className='explore'>Explore Eris </p> <span onClick={() => navigate("/planets-details/eris")}>
                                <EastIcon /></span>
                        </div>
                        <div className="planet">
                            <img src="https://science.nasa.gov/wp-content/uploads/2024/03/dwarf-planet-makemake-16x9-1.jpg?w=1536&format=webp" alt="" />
                            <h4>Makemake</h4>
                            <p>Makemake is slightly smaller than Pluto, and is the second-brightest object in the Kuiper Belt, while Pluto is the brightest. </p>
                            <p className='explore'>Explore Makemake </p>  <span onClick={() => navigate("/planets-details/makemake")}>
                                <EastIcon /></span>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Planets