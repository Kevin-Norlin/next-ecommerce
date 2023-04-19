import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { GlobalProvider } from '@/hooks/context/global';
import { Header } from '@/components/layout/Header';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div >
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Eccomerce site built using NextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <GlobalProvider>
        <div className="flex  flex-col flex-wrap justify-baseline items-center min-h-screen max-h-max w-screen bg-main ">

          <Header />
          <NavBar />
          
        
        <Component {...pageProps} />
        <Footer />
        </div>
      </GlobalProvider>
    </div>
  );
}
// GlobalProvider aint right... i think it works though
