import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import { Container } from '@mui/material'
import '../../Css/PlanetsDetails.css';

function Ceres() {
    return (
        <div>
            <div className='main2'>
                <Navbar />
                <Container>
                    <div className='header'>
                        <h1>Ceres </h1>
                        <p>
                            Ceres is the only dwarf planet in the inner solar system. It was the first dwarf planet to receive a visit from a spacecraft.
                        </p>
                    </div>
                    <div className='context'>

                        <h1>Introduction </h1>
                        <p>Dwarf planet Ceres is the largest object in the asteroid belt between Mars and Jupiter, and it's the only dwarf planet located in the inner solar system. It was the first member of the asteroid belt to be discovered when Giuseppe Piazzi spotted it in 1801. When NASA's Dawn arrived in 2015, Ceres became the first dwarf planet to receive a visit from a spacecraft.

                            Called an asteroid for many years, Ceres is so much bigger and so different from its rocky neighbors that scientists classified it as a dwarf planet in 2006. Even though Ceres comprises 25% of the asteroid belt's total mass, Pluto is still 14 times more massive.
                        </p>

                        <img src="https://science.nasa.gov/wp-content/uploads/2018/10/pia21906-ceres-full-globe-1280x900-1.jpg?w=1024" alt="" />

                        <h1>Namesake</h1>

                        <p>Ceres is named for the Roman goddess of corn and harvests. The word cereal comes from the same name.
                        </p>

                        <h1>Potential for Life</h1>

                        <p>Ceres is one of the few places in our solar system where scientists would like to search for possible signs of life. Ceres has something a lot of other planets don't: water. Here on Earth, water is essential for life, so it's possible someplace else with that ingredient and a few other conditions could support life, as well. If anything does live on Ceres, it's likely to be very small microbes similar to bacteria. If Ceres does not have living things today, there may be signs it harbored life in the past.</p>

                        <h1>Size and Distance </h1>

                        <p>With a radius of 296 miles (476 kilometers), Ceres is 1/13 the radius of Earth. If Earth were the size of a nickel, Ceres would be about as big as a poppy seed.

                            From an average distance of 257 million miles (413 million kilometers), Ceres is 2.8 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 22 minutes to travel from the Sun to Ceres.
                        </p>

                        <h1>Orbit and Rotation </h1>

                        <p>Ceres takes 1,682 Earth days, or 4.6 Earth years, to make one trip around the Sun. As Ceres orbits the Sun, it completes one rotation every 9 hours, making its day length one of the shortest in the solar system.

                            Ceres' axis of rotation is tilted just 4 degrees with respect to the plane of its orbit around the Sun. That means it spins nearly perfectly upright and doesn't experience seasons like other more tilted planets do.</p>

                        <h1>Moons</h1>

                        <p>Ceres does not have any moons.
                        </p>

                        <h1>Rings</h1>
                        <p>Ceres does not have any moons.</p>

                        <h1>Formation </h1>

                        <p>
                            Ceres formed along with the rest of the solar system about 4.5 billion years ago when gravity pulled swirling gas and dust in to become a small dwarf planet. Scientists describe Ceres as an "embryonic planet," which means it started to form but didn't quite finish. Nearby Jupiter's strong gravity prevented it from becoming a fully formed planet. About 4 billion years ago, Ceres settled into its current location among the leftover pieces of planetary formation in the asteroid belt between Mars and Jupiter.

                        </p>

                        <h1>
                            Structure
                        </h1>

                        <p>Ceres is more similar to the terrestrial planets (Mercury, Venus, Earth, and Mars) than its asteroid neighbors, but it is much less dense. One of the similarities is a layered interior, but Ceres' layers aren’t as clearly defined. Ceres probably has a solid core and a mantle made of water ice. In fact, Ceres could be composed of as much as 25 percent water. If that is correct, Ceres has more water than Earth does. Ceres' crust is rocky and dusty with large salt deposits. The salts on Ceres aren’t like table salt (sodium chloride), but instead are made of different minerals like magnesium sulfate.</p>

                        <h1>
                            Surface
                        </h1>

                        <p>
                            Ceres is covered in countless small, young craters, but none are larger than 175 miles (280 kilometers) in diameter. This is surprising, given that the dwarf planet must have been hit by numerous large asteroids during its 4.5 billion-year lifetime.

                            The lack of craters might be due to layers of ice just below the surface. The surface features could smooth out over time if ice or another lower-density material, such as salt, is just below the surface. It's also possible that past hydrothermal activity, such as ice volcanoes, erased some large craters.

                            Within some of Ceres' craters, there are regions that are always in shadow. It's possible that without direct sunlight, these "cold traps" could have water ice in them for long periods of time.
                        </p>


                        <h1>Atmosphere</h1>
                        <p>
                            Ceres has a very thin atmosphere, and there is evidence it contains water vapor. The vapor may be produced by ice volcanoes or by ice near the surface sublimating (transforming from solid to gas).
                        </p>

                        <h1>Magnetosphere</h1>

                        <p>
                            Scientists don't think Ceres has a magnetosphere.
                        </p>

                    </div>
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Ceres