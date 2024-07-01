import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: 'Game Center',
  description: 'Daniel&apos;s game center'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body>
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/connect4">Connect 4</Link>
          <Link href="/tictactoe">Tic Tac Toe</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="page-content">{children}</div>
      </body>
    </html>
  );
}

