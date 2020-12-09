import React from "react";
import { useLocation } from "react-router-dom";

import Title from "../components/Title";
import Banner from "../components/Banner";
import Form from "../components/FormRecomendados";
import Video from '../components/Video';
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  return (
    <div className="body">
      <Video/>
      <Title />
      <Banner />
      <div className="divNota">
      <label className="labelNota">Recuerda:   Para participar en los premios, al menos debes de contar </label>
      <label className="labelNota">con 5 registros de referenciados.</label>
      </div>
      <Form phoneNumber={location.search.split("=")[1]} />
      <Footer />
    </div>
  );
};

export default Home;
