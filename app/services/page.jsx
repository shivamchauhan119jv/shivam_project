import React from 'react';

const Services = () => {
    return (
        <div className='py-24 max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 px-4'>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg
                        viewBox="0 0 52 24"
                        fill='white'
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                        <defs>
                            <pattern
                                id="b039bae0-fdd5-4311-b198-8557b064fce0"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                            >
                                <circle cx="1" cy="1" r=".7" />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                            width="52"
                            height="24"
                        />
                    </svg>
                    <span className="relative ">🛠️ Our Services</span>
                </span>{' '}
                Experience the Convenience
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
                {/* Service 1 */}
                <div className="p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <h3 className="text-xl font-semibold mb-2">Nearest Outlet Identifier</h3>
                    <p className="text-gray-700">
                        Discover and connect with the closest food outlets effortlessly using our advanced Nearest Outlet Identifier powered by AI technology.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer">
                    <h3 className="text-xl font-semibold mb-2">Efficient Order Routing</h3>
                    <p className="text-gray-700">
                        Our platform ensures that your orders are efficiently routed to the correct restaurants based on predefined delivery area polygons and your shipping address.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="p-6 bg-white rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl cursor-pointer">
                    <h3 className="text-xl font-semibold mb-2">Seamless Dining Experience</h3>
                    <p className="text-gray-700">
                        Enjoy a seamless and delightful dining experience with FoodDoneRight. We prioritize efficiency and customer satisfaction in every order.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
