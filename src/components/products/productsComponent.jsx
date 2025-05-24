import { Button } from "../button";
import { productsCategories, products } from "../utils/products";

export const ProductsComponent = () => {
  return (
    <div className="bg-veryLightBlue pt-[60px] flex flex-col min-h-screen">
      {/* Products top section - sticky header */}
      <header className="bg-[#b2b2bf] py-10 flex flex-col justify-between sticky top-0 z-20 px-5 md:items-center md:px-20 md:flex-row">
        <div>
          <p>
            <a href="/">Home</a>
            <span className="text-darkBlue font-bold"> | Products</span>
          </p>
          <p className="text-4xl font-semibold leading-[1.3]">
            Explore All Products
          </p>
        </div>
        <div className="flex flex-col w-full md:w-auto md:flex-row md:items-center">
          <input
            className="h-[20px] py-5 px-4 rounded-lg outline-0 bg-veryLightBlue md:w-[350px] md:ml-10"
            type="search"
            placeholder="Search for products..."
          />
          <Button
            size="sm"
            variant="darkPrimary"
            className="w-fit mt-3 md:mt-0 md:mx-2"
          >
            Search
          </Button>
        </div>
      </header>

      {/* Main content area */}
      <main>
        <ProductsDisplay />
      </main>
    </div>
  );
};

const ProductsDisplay = () => {
  return (
    <div className="flex flex-1 relative">
      {/* Sidebar  */}
      <div className="w-[300px] flex-shrink-0 sticky top-[130px] self-start h-[calc(100vh-120px)] overflow-clip bg-veryLightBlue shadow-lg rounded-lg border border-gray-100">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <span className="uppercase text-lg font-bold text-gray-800 tracking-wider">
              Categories
            </span>
            <span className="bg-darkBlue w-10 h-1 rounded-2xl"></span>
          </div>
          <div className="space-y-2">
            {productsCategories.map((category, i) => (
              <div key={i} className="group transition-all duration-200">
                <p
                  className="
            cursor-pointer px-4 py-3 rounded-lg
            text-gray-700 font-medium
            group-hover:bg-lightBlue/50 group-hover:text-white
            transition-all duration-200
            flex items-center
          "
                >
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-darkBlue transition-all duration-200"></span>
                  {category.category}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-darkBlue transition-all duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <ProductsGrid />
    </div>
  );
};

const ProductsGrid = () => {
  return (
    <div className="flex-1 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <div key={product.id} className="">
            <img
              src={product.img}
              alt={product.title}
              className="h-[200px] rounded-2xl w-full object-cover transition-transform duration-500"
            />
            <div className="p-4">
              <h2 className="text-darkBlue font-semibold">{product.title}</h2>
              <p className="text-sm">&#8358; {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
