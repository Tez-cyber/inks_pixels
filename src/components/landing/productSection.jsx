import { products } from "../utils/products"


export const ProductSection = () => {
    return (
        <section className="bg-lightBlue">
            <div className="px-10 py-20">
                <div className="pb-10">
                    <h1 className="text-3xl font-bold text-white">Popular Products</h1>
                </div>
                {/* ====== product section ====== */}
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id} className="flex flex-col items-center justify-center bg-veryLightBlue mt-4 overflow-hidden ">
                                    <div className="overflow-hidden">
                                        <img
                                            src={`${product.img}`}
                                            alt={product.title}
                                            className="h-[200px] object-cover transition-transform duration-500 ease-in-out hover:scale-105 w-[300px] md:w-[280px]"
                                        />
                                    </div>
                                    <div className="p-4 w-full md:w-full lg:w-full">
                                        <h2 className="text-darkBlue font-semibold">{product.title}</h2>
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold">Price</span>: &#8358; {product.price}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
