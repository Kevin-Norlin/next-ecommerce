import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { GlobalProvider } from '@/hooks/context/global';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div >
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Eccomerce site built using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
<<<<<<< HEAD
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <SessionProvider session={pageProps.session}>
      <GlobalProvider>
        <div className="flex  flex-col flex-wrap justify-baseline items-center min-h-screen max-h-max w-screen bg-main ">
=======
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
>>>>>>> 22871e7521b627ac67d9a0461d7839aee8d94986

          <GlobalProvider>
            <div className="flex  flex-col flex-wrap justify-baseline items-center  w-screen bg-main ">

              <Header />
              <NavBar />


              <Component {...pageProps} />
              <Footer />
            </div>
          </GlobalProvider>
        </div>
<<<<<<< HEAD
      </GlobalProvider>
      </SessionProvider>
    </div>
  );
=======
        );
>>>>>>> 22871e7521b627ac67d9a0461d7839aee8d94986
}
// GlobalProvider aint right... i think it works though                                                                                                                        
