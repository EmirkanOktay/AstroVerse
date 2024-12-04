import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Container } from '@mui/material'
import '../../Css/PlanetsDetails.css';

function Eris() {
    return (
        <div>
            <div className='main2'>
                <Navbar />
                <Container>
                    <div className='header'>
                        <h1>Eris</h1>
                        <p>
                            Eris is one of largest the dwarf planets in our solar system. It's about the same size as Pluto, but it's three times farther from the Sun.

                            The discovery of Eris help trigger a debate in the scientific community that led to the International Astronomical Union's decision in 2006 to clarify the definition of a planet. Pluto, Eris, and other similar objects are now classified as dwarf planets.

                            Eris was discovered on Jan. 5, 2005, from data obtained on Oct. 21, 2003, during a Palomar Observatory survey of the outer solar system by Mike Brown, a professor of planetary astronomy at the California Institute of Technology; Chad Trujillo of the Gemini Observatory; and David Rabinowitz of Yale University.
                        </p>
                    </div>
                    <div className='context'>

                        <img src="https://images-assets.nasa.gov/image/PIA03034/PIA03034~orig.jpg?w=603&h=200&fit=clip&crop=faces%2Cfocalpoint" alt="" />

                        <h1>Namesake</h1>

                        <p>Originally designated 2003 UB313 – and nicknamed for the television warrior Xena by its discovery team – Eris is named for the ancient Greek goddess of discord and strife. The name fits since Eris remains at the center of a scientific debate about the definition of a planet.
                        </p>

                        <h1>Potential for Life</h1>

                        <p>The surface of Eris is extremely cold, so it seems unlikely that life could exist there.</p>

                        <h1>Size and Distance </h1>

                        <p>With an equatorial diameter of about 1,500 miles (2,400 kilometers), Eris is about 1/5 the width of Earth. Eris, like Pluto, is a little smaller than Earth's Moon. If the Earth were the size of a nickel, Eris would be about as big as a popcorn kernel.

                            From an average distance of 6.3 billion miles (10 billion kilometers), Eris is about 68 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight more than nine hours to travel from the Sun to the surface of Eris.
                        </p>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOR2fKuXIDAWNpe8bl-pz9eFshQXyKbbjFw&s" alt="" />

                        <h1>Orbit and Rotation </h1>

                        <p>Eris takes 557 Earth years to make one trip around the Sun. The plane of Eris' orbit is well out of the plane of the solar system's planets and extends far beyond the Kuiper Belt, a zone of icy debris beyond the orbit of Neptune.

                            As Eris orbits the Sun, it completes one rotation every 25.9 hours, making its day length similar to ours.</p>

                        <h1>Moons</h1>

                        <p>Eris has a very small moon called Dysnomia. Dysnomia has a nearly circular orbit lasting about 16 days. This moon is named after Eris' daughter, the demon goddess of lawlessness.

                            Dysnomia and other small moons around planets and dwarf planets allow astronomers to calculate the mass of the parent body. Dysnomia plays a role in determining how comparable Pluto and Eris are to each other.
                        </p>

                        <h1>Rings</h1>
                        <p>Eris has no known rings.

                        </p>

                        <h1>Formation </h1>

                        <p>
                            Dwarf planet Eris is a member of a group of objects that orbit in a disc-like zone beyond the orbit of Neptune called the Kuiper Belt. This distant realm is populated with thousands of miniature icy worlds, which formed early in the history of our solar system about 4.5 billion years ago. These icy, rocky bodies are called Kuiper Belt objects, transneptunian objects, or plutoids.

                        </p>

                        <h1>
                            Structure
                        </h1>

                        <p>We know very little about Eris' internal structure.

                        </p>

                        <h1>
                            Surface
                        </h1>

                        <p>
                            Eris most likely has a rocky surface similar to Pluto. Scientists think surface temperatures vary from about -359 degrees Fahrenheit (-217 degrees Celsius) to -405 degrees Fahrenheit (-243 degrees Celsius).
                        </p>


                        <h1>Atmosphere</h1>
                        <p>
                            The dwarf planet is often so far from the Sun that its atmosphere collapses and freezes, falling to the surface as snow. As it gets closest to the Sun in its faraway orbit, the atmosphere thaws.
                        </p>

                        <h1>Magnetosphere</h1>

                        <p>
                            Nothing is known about Eris' magnetosphere.
                        </p>

                    </div>
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Eris