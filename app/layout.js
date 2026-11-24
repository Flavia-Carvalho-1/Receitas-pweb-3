import './globals.css'

export const metadata = {
  title: 'Cinelista',
  description: 'Rotas com Next JS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}