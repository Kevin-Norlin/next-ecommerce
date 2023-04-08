import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import RegisterForm from '@/components/RegisterForm'
import ValidateForm from "@/components/ValidateForm";
import AnimationTest from '@/components/AnimationTest';

import { GetServerSideProps } from 'next'
import { GlobalContext, GlobalProvider } from '@/hooks/context/global';
import { useCallback, useContext, useState } from 'react';
import { NavBar } from '@/components/NavBar';
import { Header } from '@/components/Header';







export default function Home() {
  const {toggleNavBar} = useContext(GlobalContext);
  return (
    <>
      
      <main>
        <div className='Index'>
       
          <Header />
         <NavBar />
         <button onClick={toggleNavBar}></button>
         </div>
      </main>
    </>
  )
}
