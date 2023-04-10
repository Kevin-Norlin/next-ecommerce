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
import { Footer } from '@/components/Footer';
import { FrameWorks } from '@/components/Frameworks';








export default function Index() {
  const { toggleNavBar } = useContext(GlobalContext);
  return (
    <>

      <main className="flex items-center justify-baseline pt-20 flex-col gap-40 min-h-screen w-screen ">
        <div className="">
          <div className="text-8xl font-extrabold text-logo">
          <h1 >This is an e-shop.</h1>
          <h1>Buy Something..</h1>
          </div>
        </div>

        <div className=" flex items-start jusify-center flex-col gap-40 ">
          <h1 className="font-bold text-6xl"> </h1>
          <FrameWorks />
        </div>
        
      </main>
    </>
  )
}
