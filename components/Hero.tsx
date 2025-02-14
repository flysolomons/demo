import Image from "next/image";
import Link from "next/link";

function Hero() {

    return (
        <main>
            <div className="relative">
                <div className="absolute inset-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/hero3.jpg"
                >
                    {/* <source src="/hero.mp4" type="video/mp4" /> */}
                    {/* Fallback for browsers that don't support video */}
                    <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/hero3.jpg')"
                    }}
                    />
                </video>
                <div className="absolute inset-0 bg-black/15"></div>
                </div>

                <div className="relative h-[calc(100vh)]">
                    <div className="relative flex flex-col items-center justify-center h-1/2 text-white text-center">
                        <h1 className="text-5xl font-bold mb-4">Connecting the Hapi Isles</h1>
                    </div>
                    <div className="relative flex flex-col items-center pt-8 h-1/2 text-white">
                        <div className="w-[1216px] bg-white rounded-[32px] p-6 shadow-lg h-[200px]">
                        {/* <div className="flex border-b mb-6">
                            <button className="text-blue-900 font-semibold border-b-2 border-blue-900 pb-2 px-4">
                            Book a Trip
                            </button>
                            <button className="text-gray-500 hover:text-gray-700 pb-2 px-4">
                            Manage Booking
                            </button>
                        </div>
                        <div className="flex justify-center space-x-4 mb-6">
                            <button className="bg-blue-900 text-white px-6 py-2 rounded-full">
                            Round Trip
                            </button>
                            <button className="bg-gray-100 text-gray-600 px-6 py-2 rounded-full">
                            One Way
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex-1">
                            <label className="block text-sm text-gray-600 mb-1">Flying from?</label>
                            <input
                                type="text"
                                placeholder="Search destination"
                                className="w-full p-2 border rounded-lg"
                            />
                            </div>
                            <div className="flex-1">
                            <label className="block text-sm text-gray-600 mb-1">Flying to?</label>
                            <input
                                type="text"
                                placeholder="Search destination"
                                className="w-full p-2 border rounded-lg"
                            />
                            </div>
                            <div className="flex-1">
                            <label className="block text-sm text-gray-600 mb-1">Departure</label>
                            <input
                                type="text"
                                placeholder="Add date"
                                className="w-full p-2 border rounded-lg"
                            />
                            </div>
                            <div className="flex-1">
                            <label className="block text-sm text-gray-600 mb-1">Return</label>
                            <input
                                type="text"
                                placeholder="11 Dec '25"
                                className="w-full p-2 border rounded-lg"
                            />
                            </div>
                            <div className="flex-1">
                            <label className="block text-sm text-gray-600 mb-1">Travelling with?</label>
                            <input
                                type="text"
                                placeholder="1 Adult, 1 Child, 1 Infant"
                                className="w-full p-2 border rounded-lg"
                            />
                            </div>
                            <button className="bg-blue-900 text-white p-4 rounded-lg mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;