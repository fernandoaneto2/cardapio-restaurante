import Image from "next/image";
import styles from "./categorias.module.css";

import icone1 from "../../../arquivos_projeto_cardapio/Imagens do projeto/entrada.png";
import icone2 from "../../../arquivos_projeto_cardapio/Imagens do projeto/massa.png";
import icone3 from "../../../arquivos_projeto_cardapio/Imagens do projeto/carne.png";
import icone4 from "../../../arquivos_projeto_cardapio/Imagens do projeto/bebidas.png";
import icone5 from "../../../arquivos_projeto_cardapio/Imagens do projeto/salada.png";
import icone6 from "../../../arquivos_projeto_cardapio/Imagens do projeto/sobremesa.png";

export default function Categorias({ handleFiltro, botaoClicado }) {
  return (
    <section className={styles.secao_categorias}>
      <div className={styles.container_botoes}>
        <button
          className={
            botaoClicado === "Entradas" ? styles.acenderBtn : styles.apagarBtn
          }
          onClick={() => handleFiltro("Entradas")}
        >
          <Image className={styles.icone} src={icone1} alt="ícone" />
          <span>Entradas</span>
        </button>

        <button
          className={
            botaoClicado === "Massas" ? styles.acenderBtn : styles.apagarBtn
          }
          onClick={() => handleFiltro("Massas")}
        >
          <Image className={styles.icone} src={icone2} alt="ícone" />
          <span>Massas</span>
        </button>

        <button
          className={
            botaoClicado === "Carnes" ? styles.acenderBtn : styles.apagarBtn
          }
          onClick={() => handleFiltro("Carnes")}
        >
          <Image className={styles.icone} src={icone3} alt="ícone" />
          <span>Carnes</span>
        </button>
        <button
          className={
            botaoClicado === "Bebidas" ? styles.acenderBtn : styles.apagarBtn
          }
          onClick={() => handleFiltro("Bebidas")}
        >
          <Image className={styles.icone} src={icone4} alt="ícone" />
          <span>Bebidas</span>
        </button>
        <button
          className={
            botaoClicado === "Saladas" ? styles.acenderBtn : styles.apagarBtn
          }
          onClick={() => handleFiltro("Saladas")}
        >
          <Image className={styles.icone} src={icone5} alt="ícone" />
          <span>Saladas</span>
        </button>
        <button
          className={
            botaoClicado === "Sobremesas" ? styles.acenderBtn : styles.apagarBtn
          }
          onClick={() => handleFiltro("Sobremesas")}
        >
          <Image className={styles.icone} src={icone6} alt="ícone" />
          <span>Sobremesas</span>
        </button>
      </div>
    </section>
  );
}
