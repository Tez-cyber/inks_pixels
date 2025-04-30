import { products } from "../utils/products"


export const ProductSection = () => {
    return (
        <section className="bg-lightBlue">
            <div className="px-10 py-20">
                <div className="pb-10">
                    <h1 className="text-3xl font-semiboldbold text-white">Popular Products</h1>
                </div>
                {/* ====== product section ====== */}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id} className="flex flex-col items-center justify-center mt-4 overflow-hidden ">
                                    <div className="overflow-hidden">
                                        <img
                                            src={`${product.img}`}
                                            alt={product.title}
                                            className="h-[300px] w-[300px] object-cover rounded-2xl transition-transform duration-1000 ease-in-out hover:scale-125 md:w-[280px]"
                                        />
                                    </div>
                                    <div className="p-4 w-full md:w-full lg:w-full">
                                        <h2 className="text-white font-semibold">{product.title}</h2>
                                        <p className="text-sm text-gray-100">
                                            &#8358; {product.price}
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
