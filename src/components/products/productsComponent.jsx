import { Button } from "../button";

export const ProductsComponent = () => {
  return (
    <section className="bg-veryLightBlue md:pt-[20%] lg:pt-[5%]">
      {/* Products top section */}
      <header className="bg-[#b2b2bf] py-10 flex items-center justify-between sticky top-0 z-2 px-20">
        {/* First section */}
        <div>
          <p>
            Home
            <span className="text-darkBlue font-bold"> | Products</span>
          </p>
          <p className="text-4xl font-semibold leading-[1.3]">
            Explore All Products
          </p>
        </div>
        {/* Second section */}
        <div className="flex items-center">
          <input
            className="w-[350px] h-[20px] py-5 px-4 rounded-lg ml-10 outline-0 bg-veryLightBlue"
            type="search"
            placeholder="Search for products..."
          />
          <Button size="sm" variant="darkPrimary" className="mx-2 w-fit">
            Search
          </Button>
        </div>
      </header>
      {/* Products display */}
      <main>
        <ProductsMain />
      </main>
    </section>
  );
};


const ProductsMain = () => {

    return (
        <section className="px-20 py-5 flex gap-3 ">
            <div className="w-[300px]">
                <span className="uppercase text-lg font-semibold">categories</span>
                <span className="bg-darkBlue w-full h-1 rounded-2xl block"></span>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <span className="w-[250px] h-[200px] block bg-lightBlue"></span>
                <span className="w-[250px] h-[200px] block bg-lightBlue"></span>
                <span className="w-[250px] h-[200px] block bg-lightBlue"></span>
                <span className="w-[250px] h-[200px] block bg-lightBlue"></span>
                <span className="w-[250px] h-[200px] block bg-lightBlue"></span>
                <span className="w-[250px] h-[200px] block bg-lightBlue"></span>
            </div>
        </section>
    )
}