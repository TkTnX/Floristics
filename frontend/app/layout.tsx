import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Footer, Header } from '@/widgets'
import { cn, Provider } from '@/shared'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const fontMuseo = localFont({
	src: [
		{
			path: '../public/fonts/MuseoSansCyrl/MuseoSansCyrl_300.otf',
			weight: '300'
		},
		{
			path: '../public/fonts/MuseoSansCyrl/MuseoSansCyrl_700.otf',
			weight: '700'
		},
		{
			path: '../public/fonts/MuseoSansCyrl/MuseoSansCyrl_500.otf',
			weight: '500'
		},
		{
			path: '../public/fonts/MuseoSansCyrl/MuseoSansCyrl_900.otf',
			weight: '900'
		},
		{
			path: '../public/fonts/MuseoSansCyrl/MuseoSansCyrl_100.otf',
			weight: '100'
		}
	]
})

export const metadata: Metadata = {
	title: 'DICENTRA | Выбирай сердцем',
	description: 'DICENTRA - Интернет-магазин цветов'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			suppressHydrationWarning
			lang='ru'
			className={cn('h-full', 'antialiased', fontMuseo.className)}
		>
			<Provider>
				<body className='flex min-h-full flex-col overflow-x-hidden'>
					<Header />
					{children}
					<Footer />
				</body>
			</Provider>
		</html>
	)
}
