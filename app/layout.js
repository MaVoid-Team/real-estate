import './globals.css'

export const metadata = {
  title: 'My Real Estate MVP',
  description: 'Cozy real estate landing page with 3D models',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}