import { FrameWorks } from '@/components/pageComponents/Frameworks';
import { MainPageBox } from '@/components/pageComponents/MainPageBox';
import { Showcase} from '@/components/pageComponents/Showcase';

export default function Index(props: any) {
  return (
    <>

      <main className="flex items-center justify-baseline pt-20 flex-col gap-40  min-h-screen w-screen overflow-hidden">
        <div className="flex  h-screen w-screen items-center  flex-col">

          <div className="text-8xl font-extrabold text-logo ">
          <h1 >This is an e-shop.</h1>
          <h1>Buy Something..</h1>
          </div>

          <div className='w-screen h-screen flex flex-row  justify-evenly p-10 gap-10 '>
          <MainPageBox text1="Spring sale" text2="Up to 60% off!" imgUrl="/images/fashion/pexels-ksenia-chernaya-3965557.jpg" />
          <MainPageBox text1="" text2="" imgUrl="/images/fashion/pexels-leticia-ribeiro-2112651.jpg"/>
          <MainPageBox text1="" text2="" imgUrl="/images/fashion/pexels-polina-tankilevitch-5585858.jpg"/>
          </div>
          
        </div>

        <div className=" flex items-start jusify-center flex-col gap-40 ">
          <h1 className="font-bold text-6xl p-10"> </h1>
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