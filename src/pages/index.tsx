import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import RegisterForm from '@/components/RegisterForm'
import ValidateForm from "@/components/ValidateForm";
import { GetServerSideProps } from 'next'



export const getServerSideProps: GetServerSideProps = async () => {
  
}


export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
        <h1>Register</h1>
        <RegisterForm />
        <h1>Validate</h1>
        <ValidateForm />
      </main>
    </>
  )
}
