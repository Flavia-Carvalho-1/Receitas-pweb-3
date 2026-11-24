import './globals.css'
import { Menu, Rodape } from './componentes'

export const metadata = {
  title: 'Cinelista',
  description: 'Rotas com Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        <main className="cartao">{children}</main>
        <Rodape />
      </body>
    </html>
  )
}