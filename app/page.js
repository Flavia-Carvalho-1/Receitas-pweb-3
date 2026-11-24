import Link from 'next/link'

export default function Home(){
    return (
        <>
            <div className="subtitulo">Menu principal</div>
            <h1>Viva Santana!</h1>
            <p><Link href="/novarota">Ir para Nova Rota</Link></p>

            <h2>Cinelista: jeitos de buscar filmes</h2>
            <p>As páginas abaixo fazem a mesma busca de maneiras diferentes (receitas 16 a 20):</p>
            <ul>
                <li><Link href="/filmes">Filmes</Link>: consulta no servidor, com formulário</li>
                <li><Link href="/filmes-cliente">Filmes (cliente)</Link>: consulta no navegador</li>
                <li><Link href="/filmes-api">Filmes (API)</Link>: consulta via API própria</li>
                <li><Link href="/filmes-actions">Filmes (action)</Link>: consulta via server action</li>
            </ul>
        </>
    )
}