import { FrameWorks } from '@/components/pageComponents/Frameworks';
import { Showcase} from '@/components/pageComponents/Showcase';

export default function Index(props: any) {
  return (
    <>

      <main className="flex items-center justify-baseline pt-20 flex-col gap-40  min-h-screen w-screen overflow-y-hidden">
        <div className="flex items-center jusitfy-baseline flex-col gap-40 flex-wrap">
          <div className="text-8xl font-extrabold text-logo">
          <h1 >This is an e-shop.</h1>
          <h1>Buy Something..</h1>
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