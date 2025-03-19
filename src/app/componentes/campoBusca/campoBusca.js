import Image from "next/image";
import styles from "./campoBusca.module.css";
import Lupa from "../../../arquivos_projeto_cardapio/Imagens do projeto/lupa.png";

export default function CampoDeBusca({ textoBuscaDigitado, handleBusca }) {
  return (
    <div className={styles.container}>
      <Image className={styles.icone} src={Lupa} alt="icone" />
      <input
        type="text"
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder="Pesquise aqui um dos pratos do nosso cardápio"
      />
    </div>
  );
}
