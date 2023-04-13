import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import RegisterForm from '@/components/form/RegisterForm'
import ValidateForm from "@/components/form/ValidateForm";
import AnimationTest from '@/components/AnimationTest';

import { GetServerSideProps } from 'next'
import { GlobalContext, GlobalProvider } from '@/hooks/context/global';
import { useCallback, useContext, useState } from 'react';
import { NavBar } from '@/components/layout/NavBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FrameWorks } from '@/components/pageComponents/Frameworks';
import { Showcase} from '@/components/pageComponents/Showcase';








export default function Index(props: any) {
  const { toggleNavBar } = useContext(GlobalContext);
  return (
    <>

      <main className="flex items-center justify-baseline pt-20 flex-col gap-40  min-h-screen w-screen ">
        <div className="flex items-center jusitfy-baseline flex-col gap-40 flex-wrap ">
          <div className="text-8xl font-extrabold text-logo">
          <h1 >Buy, buy, buy</h1>
          
          </div>
          <Showcase products={props.products}/>
        </div>

        <div className=" flex items-start jusify-center flex-col gap-40 ">
          <h1 className="font-bold text-6xl"> </h1>
          <FrameWorks />
        </div>
        
      </main>
    </>
  )
}

export async function getServerSideProps() {
    try {
      const res = await fetch("http://localhost:3000/api/getAll-product");
        const products = await res.json();
        return { props: { products } };
    }
    catch (error) {
        console.error(error);
        return { props: {products: []}}
    }
  
  }