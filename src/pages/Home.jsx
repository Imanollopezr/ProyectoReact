import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import Products from "../components/ApiYoimer";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="welcome-section">
          <h1 className="titulo">CAPS IMPERIAL</h1>
          <p className="subtitulo">La mejor tienda de gorras personalizadas.</p>
        </div>

        <div className="content-container">
          <div className="section">
            <h2 className="container-h2">Nuestras Colecciones</h2>
            <p className="parrafo">Descubre diseños exclusivos que se adaptan a tu estilo.</p>
          </div>
          <div className="section">
            <h2 className="container-h2">Promociones</h2>
            <p className="parrafo">¡Aprovecha descuentos y ofertas especiales todo el año!</p>
          </div>
          <div className="section">
            <h2 className="container-h2">Contáctanos</h2>
            <p className="parrafo">¿Dudas? Estamos aquí para ayudarte. Escríbenos o llámanos.</p>
          </div>
        </div>
        <div className="content-container vertical">
          <div className="section additional">
            <h2>¡Nuevas Ofertas!</h2>
            <p>Tenemos ofertas especiales para ti. ¡No te las pierdas!</p>
          </div>
          <div className="section additional">
            <h2>Productos Destacados</h2>
            <p>Estos productos están arrasando. ¡Los más vendidos de la tienda!</p>
          </div>
          <div className="section additional">
            <h2>Gorras Personalizadas</h2>
            <p>Si tienes un diseño en mente, ¡nosotros lo hacemos realidad!</p>
          </div>
        </div>
      </div>

      <Products />
      <Footer />
    </>
  );
};

export default Home;
