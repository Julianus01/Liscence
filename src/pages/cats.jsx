import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import CatsHero from './components/cats/catsHero';
import CatsAbout from './components/cats/catsAbout';
import TopCats from './components/cats/topCats';
import CatsGallery from './components/cats/catsGallery';
import CatsBlog from './components/cats/catsBlog';
import CatsContact from './components/cats/catsContact';
import CatsQuality from './components/cats/catsQuality';

class Cats extends Component {

    render() {
        return (
            <div>
                <Navbar isPrimary/>
                <CatsHero />
                <CatsAbout />
                <TopCats />
                <CatsQuality />
                <CatsGallery />
                <CatsBlog />
                <CatsContact />
            </div>
        )
    }
}

export default Cats;