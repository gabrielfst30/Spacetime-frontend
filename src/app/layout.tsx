import './globals.css'

//serve para evitar o layout shift (qnd a página abre com fonte diferente e dps carrega)
import { Roboto_Flex as Roboto, 
  Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

//definindo peso e variável das fontes
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'Spacetime',
  description: 'Uma cápsula do tempo comnstruída com React, Next.js, Tailwind e Typescript',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">      
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        {children}
      </body>
    </html>
  )
}
