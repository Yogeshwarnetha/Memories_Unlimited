import React from 'react';
import '../index.css';
import Navbar from '../Navbar';
import carousel from './carousel';
import Experiences from './popular Experiences';
import Recommended from './Recommended gifts';
import Decoration from './popular decoration';
import Surprises from './popular Surprises';
import Celebration from './Celebration';
import Offer from './offers';
import Works from './works';
import Popularcatogeries from './Popularcatogeries';
import Footer from '../Footer';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
          <><Navbar/>
          <Carousel/>
          <Popularcatogeries />
          <Experiences />
          <Recommended />
          <Decoration />
          <Surprises />
          <Celebration />
          <Offer />
          <Works />
          <Footer/>
          </>

    );
  }
  export default Home;
