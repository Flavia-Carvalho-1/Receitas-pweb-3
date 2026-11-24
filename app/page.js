import Link from 'next/link'
export function Menu() {
    return (
        <nav className="menu">
            <a href="/">Início</a>
            <a href="/rota1">Rota 1</a>
            <a href="/rota2">Rota 2</a>
            <a href="/novarota">Nova Rota</a>
        </nav>
    )
}

export function Rodape() {
    return (
        <footer className="rodape">
            <hr />
            <small>Receita 13 - Next JS</small>
        </footer>
    )
}

export default function Home(){
    return (
        <div>
            <Menu />
            <main className="cartao">
                <div className="subtitulo">Menu principal</div>
                <h1>Viva Santana!</h1>
                <p><Link href="/novarota">Nova Rota (marca Link)</Link></p>
                <p><a href="/novarota">Nova Rota, jeito antigo (marca a)</a></p>
            </main>
            <Rodape />
        </div>
    )
}