import { products } from "../utils/products"


export const ProductSection = () => {
    return (
        <section className="bg-lightBlue">
            <div className="px-10 py-20">
                <div className="pb-10">
                    <h1 className="text-3xl font-bold text-white">Popular Products</h1>
                </div>
                {/* ====== product section ====== */}
                <div className="grid gap-4 md:grid-cols-4">
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id} className="flex flex-col items-center justify-center pt-4 overflow-hidden ">
                                    <img 
                                        src={`${product.img}`} 
                                        alt={product.title} 
                                        className="h-[200px] object-cover transition-transform duration-500 ease-in-out hover:scale-105 md:w-[280px]"
                                    />
                                    <div className="bg-veryLightBlue p-4 md:w-[280px]">
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
