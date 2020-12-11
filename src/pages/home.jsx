import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Title from "../components/Title";
import Banner from "../components/Banner";
import Form from "../components/FormRecomendados";
import Video from "../components/Video";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();
  const [hidden] = useState(localStorage.getItem("hidden"));

  return (
    <>
      <div className="body">
        <Title />
        <Banner />
        <Video/>
        <Form phoneNumber={location.search.split("=")[1]} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
