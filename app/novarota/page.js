import Link from "next/link";
import { MariaPrea, Mensagem, Cartao } from "./componentes";

export default function NovaRotaHome(){

    return (

        <>

            <div className="subtitulo">Receita 14</div>

            <h1>Nova Rota, Nova Página</h1>

            <MariaPrea />

            <Mensagem texto="Morreu Maria Preá, de tanto chorar..." />
            <Mensagem texto="A mesma função, com outro texto e outra cor." cor="red" />

            <Cartao titulo="Aviso" texto="Prova na sexta-feira." cor="red" />
            <Cartao titulo="Dica" texto="Estude os componentes." cor="green" />

            <Link href="/novarota/sobre" className="link-cartao">
                <strong>Sobre →</strong>
                <span>Veja a equipe e a página do subdiretório</span>
            </Link>

        </>

    )

}