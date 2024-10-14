import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import {Inter, Space, Grotesk, Space_Grotesk} from 'next/font/google';
import type { Metadata } from "next";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-inter'
})

export const metadata:Metadata = {
  title: "DevFlow",
  description: 'A community-driven platform for asking and ansering programming quesiton. Gethelp',
  icons: {
    icon: '../assets/images/site-logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
        appearance={{
          elements: {
            formButtonPrimary: 'primary-gradient',
            footerActionLink: 'primary-text-gradien hover:text-primary-500',
          }
        }}
    >
      <html lang="en">
        <body>
          <main className={`${inter.variable} ${spaceGrotesk.variable}`}>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
