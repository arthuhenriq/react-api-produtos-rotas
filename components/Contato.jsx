import React from "react";
import "./Contato.css";
import Head from "./Head";
import foto from "../assets/images/foto-arthur.jpeg"

const Contato = () => {
  return (
    <div className="contato animeLeft">
      <Head title="Contato" description="Entre em contato" />
      <img src={foto} alt="Arthur Henrique" className="img-contato"/>
      <div className="dados">
        <h3>Entre em contato.</h3>
        <p>Arthur Henrique</p>
        <p>(31) 97342-2571</p>
        <p>Rua Dom Joaquin, Fernão Dias</p>
      </div>
    </div>
  );
};

export default Contato;
