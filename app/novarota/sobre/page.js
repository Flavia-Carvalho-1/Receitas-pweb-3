import { Menu, Rodape } from "../../page";
import { Mensagem } from "../componentes";
import { Equipe } from "./componentes";

export default function SobreHome(){

  return (

    <div>

      <Menu />

      <main className="cartao">

        <div className="subtitulo">Subdiretório de novarota</div>

        <h1>Página Sobre</h1>

        <p>
          Esta página está em <code>app/novarota/sobre/page.js</code>, por isso
          o endereço é <code>/novarota/sobre</code>.
        </p>

        <h2>Equipe</h2>

        <Equipe />

        <Mensagem texto="Componente reaproveitado de novarota/componentes.js" cor="green" />

        <p>
          <a href="/novarota" className="botao voltar">← Voltar</a>
        </p>

      </main>

      <Rodape />

    </div>

  )

}