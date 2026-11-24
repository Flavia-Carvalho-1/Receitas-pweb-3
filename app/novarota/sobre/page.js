import Link from "next/link";
import { Mensagem } from "../componentes";
import { Equipe } from "./componentes";

export default function SobreHome(){

  return (

    <>

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
        <Link href="/novarota" className="botao voltar">← Voltar</Link>
      </p>

    </>

  )

}