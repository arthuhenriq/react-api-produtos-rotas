import React from "react";
import { useParams } from "react-router-dom";
import "./Produto.css";
import Head from "./Head";
import useFetch from "./useFetch";

const Produto = () => {
  const params = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`);
  }, [request, params.id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (data === null) return null;
  return (
    <section className="produto-box animeLeft">
      <div className="div-foto">
        {data.fotos.map((foto) => (
          <img src={foto.src} alt={foto.descricao} className="img-produto" />
        ))}
      </div>

      <div className="detalhes-box">
        <p className="nome">{data.nome}</p>
        <div className="preco-box">
          <p className="preco-valor">R$ {data.preco}</p>
        </div>
        <p>{data.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
