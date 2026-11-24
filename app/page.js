import Link from 'next/link'

export default function Home(){
    return (
        <>
            <div className="subtitulo">Menu principal</div>
            <h1>Viva Santana!</h1>
            <p><Link href="/novarota">Ir para Nova Rota</Link></p>
        </>
    )
}