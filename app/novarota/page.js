import { MariaPrea, Mensagem, Cartao } from "./componentes";

export default function NovaRotaHome(){

    return (

       <div>

          <h1>Nova Rota, Nova Página</h1>

          <MariaPrea/>

          <Mensagem texto="Morreu Maria Preá, de tanto chorar..." />
          <Mensagem texto="A mesma função, com outro texto e outra cor." cor="red" />

          <Cartao titulo="Aviso" texto="Prova na sexta-feira." cor="red" />
          <Cartao titulo="Dica" texto="Estude os componentes." cor="green" />

       </div>

    )

}