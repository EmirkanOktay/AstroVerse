import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Index from '../Pages/Index';
import Astronmy from '../Pages/Astronmy';
import Planets from '../Pages/Planets';
import Contact from '../Pages/Contact';
import Apotd from '../Pages/Apotd';
import News from '../Pages/News';
import Images from '../Pages/Images';
import Videos from '../Pages/Videos';
import Asteroids from '../Pages/Asteroids';
import Pom from '../Pages/Pom';
import Mercury from '../Pages/Planet Pages/Mercury';
import Venus from '../Pages/Planet Pages/Venus';
import Earth from '../Pages/Planet Pages/Earth';
import Mars from '../Pages/Planet Pages/Mars';
import Jupiter from '../Pages/Planet Pages/Jupiter';
import Saturn from '../Pages/Planet Pages/Saturn';
import Uranus from '../Pages/Planet Pages/Uranus';
import Neptune from '../Pages/Planet Pages/Neptune';
import Ceres from '../Pages/Planet Pages/Ceres';
import Pluto from '../Pages/Planet Pages/Pluto';
import Haumea from '../Pages/Planet Pages/Haumea';
import Eris from '../Pages/Planet Pages/Eris';
import Makemake from '../Pages/Planet Pages/Makemake';
import NotFound from '../Pages/NotFound';

function Router() {
    return (
        <Routes>

            <Route path="/" element={<Index />} />
            <Route path="Astronomy" element={<Astronmy />} />
            <Route path="Planets" element={<Planets />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="astronomypictureoftheday" element={<Apotd />} />
            <Route path="images" element={<Images />} />
            <Route path="videos" element={<Videos />} />
            <Route path="asteroids" element={<Asteroids />} />
            <Route path="photoofmars" element={<Pom />} />
            <Route path="planets-details/mercury" element={<Mercury />} />
            <Route path="planets-details/venus" element={<Venus />} />
            <Route path="planets-details/earth" element={<Earth />} />
            <Route path="planets-details/mars" element={<Mars />} />
            <Route path="planets-details/jupiter" element={<Jupiter />} />
            <Route path="planets-details/saturn" element={<Saturn />} />
            <Route path="planets-details/uranus" element={<Uranus />} />
            <Route path="planets-details/neptune" element={<Neptune />} />
            <Route path="planets-details/ceres" element={<Ceres />} />
            <Route path="planets-details/pluto" element={<Pluto />} />
            <Route path="planets-details/haumea" element={<Haumea />} />
            <Route path="planets-details/eris" element={<Eris />} />
            <Route path="planets-details/makemake" element={<Makemake />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}


export default Router;
