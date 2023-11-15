
import './globals.css'



export const metadata = {
  title: 'Js Shop',
  description: 'Get the JEWERLY they will like ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
