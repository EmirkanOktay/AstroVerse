import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/astronmy">Astronmy</Link>
            <Link to="/news">News</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/astronomypictureoftheday">astronomy-picture-of-the-day</Link>
            <Link to="/images">Images</Link>
            <Link to="/videos">Video</Link>
            <Link to="/Asteroids">Asteroids</Link>
            <Link to="/photoofmars">photoofmars</Link>
            <Link to="/planets-details/mercury">planets-details/mercury</Link>
            <Link to="/planets-details/venus">planets-details/venus</Link>
            <Link to="/planets-details/earth">planets-details/earth</Link>
            <Link to="/planets-details/mars">planets-details/mars</Link>
            <Link to="/planets-details/jupiter">planets-details/jupiter</Link>
            <Link to="/planets-details/saturn">planets-details/saturn</Link>
            <Link to="/planets-details/uranus">planets-details/uranus</Link>
            <Link to="/planets-details/neptune">planets-details/neptune</Link>
            <Link to="/planets-details/ceres">planets-details/ceres</Link>
            <Link to="/planets-details/pluto">planets-details/pluto</Link>
            <Link to="/planets-details/haumea">planets-details/haumea</Link>
            <Link to="/planets-details/eris">planets-details/eris</Link>
            <Link to="/planets-details/makemake">planets-details/makemake</Link>


            <Outlet />
        </div>
    );
}

export default Layout;
