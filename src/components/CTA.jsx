import React from "react";

const CTA = () => {
    return (<section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/70 py-12 px-4 sm:px-6 lg:px-8">

            {/* Title */}
            <div className="text-center text-white">
                <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                    Latest Tech Gadgets
                </h2>
                <p className="mt-4 text-white/80 max-w-xl mx-auto">
                    Upgrade your setup with cutting-edge technology products.
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">

                {/* Item 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                    <img
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800"
                        className="w-full h-60 object-cover hover:scale-110 transition"
                        alt="Smartphone"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900">Smartphone Pro</h3>
                        <p className="text-blue-600 font-bold mt-1">$899</p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                    <img
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
                        className="w-full h-60 object-cover hover:scale-110 transition"
                        alt="Laptop"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900">Ultra Laptop</h3>
                        <p className="text-blue-600 font-bold mt-1">$1299</p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                    <img
                        src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800"
                        className="w-full h-60 object-cover hover:scale-110 transition"
                        alt="Camera"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900">4K Camera</h3>
                        <p className="text-blue-600 font-bold mt-1">$699</p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                    <img
                        src="https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=800"
                        className="w-full h-60 object-cover hover:scale-110 transition"
                        alt="Speaker"
                    />
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900">Bluetooth Speaker</h3>
                        <p className="text-blue-600 font-bold mt-1">$120</p>
                    </div>
                </div>

            </div>

            {/* CTA */}
            <div className="text-center mt-10">
                <a
                    href="#"
                    className="inline-block rounded-full bg-blue-600 px-10 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                    Explore More
                </a>
            </div>

        </div>
    </section>)
};

export default CTA;