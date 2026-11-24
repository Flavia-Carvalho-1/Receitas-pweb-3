export function MariaPrea(){

   return (

      <h2>Morreu Maria Preá...</h2>

   )

}

export function Mensagem({ texto, cor }) {
  return <p style={{ color: cor }}>{texto}</p>
}

export function Cartao({ titulo, texto, cor }) {
  return (
    <div style={{ border: "2px solid " + cor, padding: "10px", margin: "10px 0" }}>
      <h3 style={{ color: cor }}>{titulo}</h3>
      <p>{texto}</p>
    </div>
  )
}