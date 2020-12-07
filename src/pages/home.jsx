import React from "react";
import { useLocation } from "react-router-dom";

import Title from "../components/Title";
import Banner from "../components/Banner";
import Form from "../components/FormRecomendados";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div className="body">
      <Title />
      <Banner />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
