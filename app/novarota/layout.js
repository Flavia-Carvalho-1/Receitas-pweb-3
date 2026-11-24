import Link from 'next/link'

export default function NovaRotaLayout({ children }) {
  return (
    <div>
      <nav className="submenu">
        <Link href="/novarota">Visão geral</Link>
        <Link href="/novarota/sobre">Sobre</Link>
      </nav>
      {children}
    </div>
  )
}