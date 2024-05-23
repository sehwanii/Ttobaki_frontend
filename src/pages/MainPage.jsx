import React, { useState, useEffect } from "react";
import Footer from '../components/footer.jsx'
import ProfileCard from '../components/profileCard.jsx'
import Nav  from '../components/nav.jsx'
import Carousel from '../components/carousel.jsx'
import Welcome from '../components/welcome.jsx'
import {useRecoilValue} from "recoil"
import { accessTokenState } from '../hooks/Auth';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const accessToken = useRecoilValue(accessTokenState);

  React.useEffect(() => {
    console.log('App component: Access token:', accessToken);
    if (accessToken)
      setIsLoggedIn(true);
    console.log(isLoggedIn);
  }, [accessToken]);
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
