"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import {
  filtrarProdutos,
  buscarProduto,
  produtosEntradas,
} from "../service/index.js";
import Card from "./componentes/card/card.js";
import Categorias from "./componentes/categorias/categorias.js";
import CampoDeBusca from "./componentes/campoBusca/campoBusca";

export default function Home() {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 &&
      setDadosFiltrados(buscarProduto(textoDigitado));
    setBotaoClicado("");
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  return (
    <>
      <header className={styles.topo}>
        <div>
          <h1>RESTAURANT</h1>
          <p>
            De pratos clássicos a criações surpreendentes, nosso cardápio é um
            requinte de sabores refinados.
          </p>
        </div>
      </header>
      <main className={styles.container_principal}>
        <Categorias handleFiltro={handleFiltro} botaoClicado={botaoClicado} />

        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado}
          handleBusca={handleBusca}
        />

        <section className={styles.secao_cards}>
          <h2>Cardápio</h2>
          <div className={styles.container_cards}>
            {dadosFiltrados.map((produto) => (
              <Card key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
