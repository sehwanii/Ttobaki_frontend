import React, { useState, useEffect } from "react";
import Footer from '../components/footer.jsx'
import ProfileCard from '../components/profileCard.jsx'
import Nav  from '../components/nav.jsx'
import Carousel from '../components/carousel.jsx'
import Welcome from '../components/welcome.jsx'

const Main = () => {
  const isLoggedIn = true;
  return (
    <div>
      <Nav></Nav>
      <Carousel></Carousel>
      {isLoggedIn ? <ProfileCard /> : <Welcome />}
      <Footer></Footer>
    </div>
  );
};

export default Main;
