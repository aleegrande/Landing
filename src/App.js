import React from 'react';
import Title from "./components/Title";
import Banner from "./components/Banner";
import Form from "./components/FormRecomendados";
import Footer from "./components/Footer";
import './App.css';

export default function App() {
  return (
    <div className="body">
      <Title />
      <Banner />
      <Form />
      <Footer />
    </div> 
  )
}