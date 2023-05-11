import { FrameWorks } from '@/components/pageComponents/Frameworks';
import { Products } from '@/components/pageComponents/Products';
import { SearchBar } from '@/components/pageComponents/SearchBar';


export default function Index(props: any) {

  return (
    <>

      <main className="flex items-center justify-baseline pt-20 flex-col gap-40  min-h-screen w-screen ">
        <div className="flex items-center jusitfy-baseline flex-col gap-20 flex-wrap ">

          <div className="flex self-start pl-10">
            <SearchBar />
          </div>

          <Products products={props.products} />
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
    return { props: { products: [] } }
  }

}