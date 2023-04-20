import { FrameWorks } from '@/components/pageComponents/Frameworks';
import { MainPageBox } from '@/components/pageComponents/MainPageBox';
import { Showcase } from '@/components/pageComponents/Showcase';

export default function Index(props: any) {
  return (
    <>


      <div className="flex h-screen w-screen items-center flex-col">
        <div className="text-8xl font-extrabold text-logo ">
          <h1 >This is an e-shop.</h1>
          <h1>Buy Something..</h1>
        </div>
        <div className='w-screen h-fit flex flex-row  justify-evenly m-10 '>
          <MainPageBox text1="Spring sale" text2="Up to 60% off!" imgUrl="/images/index/home1.jpg" />
          <MainPageBox text1="" text2="" imgUrl="/images/index/home2.jpg" />
          <MainPageBox text1="" text2="" imgUrl="/images/index/home3.jpg" />
        </div>
      </div>
      <FrameWorks />
    </>
  )
}

/*
export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/getAll-product");
    const products = await res.json();
    return { props: { products } };
  }
  catch (error) {
    console.error(error);
    return { props: { products: [] } }
  }

}
*/