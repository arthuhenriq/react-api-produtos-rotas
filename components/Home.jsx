import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Head from "./Head";

const Produto = ({ dados }) => {
  console.log(dados);
  return (
    <div className="produtos animeLeft">
      <Head title="Produtos" />
      {dados &&
        dados.map((item) => (
          <div key={item.id} className="produto">
            <li key={item.id}>
                <Link to={`produto/${item.id}`}>
              <img src={item.fotos[0].src} alt={item.descricao} />
              </Link>
              <ul>
                <h3>{item.nome}</h3>
              </ul>
            </li>
          </div>
        ))}
    </div>
  );
};

export default Produto;
