import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";
import Contato from "../components/Contato";
import useFetch from "../components/useFetch";
import Produto from "../components/Produto";
import '../public/style.css'

function App() {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  }, [request]);

  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home dados={data}/>} />
        <Route path="/produto/:id/*" element={<Produto dados={data}/>} />
        <Route path="contato" element={<Contato dados={data}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
