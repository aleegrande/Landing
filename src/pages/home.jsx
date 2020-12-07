import React from "react";
import Title from "../components/Title";
import Banner from "../components/Banner";
import Form from "../components/FormRecomendados";
import Footer from "../components/Footer";

const Home = () => {
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
