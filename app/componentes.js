import Link from 'next/link'

export function Menu() {
    return (
        <nav className="menu">
            <Link href="/">Início</Link>
            <Link href="/rota1">Rota 1</Link>
            <Link href="/rota2">Rota 2</Link>
            <Link href="/novarota">Nova Rota</Link>
        </nav>
    )
}

export function Rodape() {
    return (
        <footer className="rodape">
            <hr />
            <small>Cinelista · Programação Web com Next JS</small>
        </footer>
    )
}