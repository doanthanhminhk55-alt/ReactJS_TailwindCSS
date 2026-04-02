import React from "react";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: "$99",
        image:
            "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=800",
    },
    {
        id: 2,
        name: "Smart Watch",
        price: "$149",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    },
    {
        id: 3,
        name: "Gaming Mouse",
        price: "$59",
        image:
            "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=800",
    },
    {
        id: 4,
        name: "Mechanical Keyboard",
        price: "$129",
        image:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
    },
];

const Product = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                {/* Title */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Featured Products
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Discover our most popular items
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="overflow-hidden transition-all duration-300 bg-white border rounded-xl hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover w-full h-60 transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {product.name}
                                </h3>
                                <p className="mt-2 text-teal-600 font-bold">
                                    {product.price}
                                </p>

                                {/* Button */}
                                <button className="w-full px-4 py-2 mt-4 text-white transition bg-teal-600 rounded-lg hover:bg-teal-700">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Product;