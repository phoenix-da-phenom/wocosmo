import localFont from 'next/font/local';
import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: './assets/fonts/Satoshi-Variable.woff2',   // ← changed to .woff2
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './assets/fonts/Satoshi-VariableItalic.woff2', // ← changed to .woff2
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
  preload: true,
});

export const metadata ={
  title:{
    default:"Wocosmo",
    template:"%s | Wocosmo"
  },
  description: "All Things, One Place"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>{children}</body>
    </html>
  );
}