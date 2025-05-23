import { Button } from "../components/button";

const ProductsPage = () => {
  return (
    <section className="h-screen bg-veryLightBlue md:pt-[20%] lg:pt-[5%]">
      {/* Products top section */}
      <div className="bg-lightBlue/20 py-10 flex items-center justify-between sticky top-0 px-20">
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
      </div>
    </section>
  );
};

export default ProductsPage;
