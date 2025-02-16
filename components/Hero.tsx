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
                    poster="/hero.jpg"
                >
                    {/* <source src="/hero.mp4" type="video/mp4" /> */}
                    {/* Fallback for browsers that don't support video */}
                    <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/hero.jpg')"
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
                        <div className="w-[1216px] bg-white rounded-[32px] shadow-lg">
                            <div className="flex border-b">
                                <div className="flex border-b-2 border-b-[#212061] px-4 py-3 h-[48px] w-[165px]">
                                    <button className="text-[#212061] text-sm font-semibold w-[165px] text-center">
                                        Book a Trip
                                    </button>
                                </div>
                                <div className="flex px-4 py-3 h-[48px] w-[165px]">
                                    <button className="text-gray-500 font-semibold text-sm hover:text-gray-700 w-[165px] text-center">
                                        Manage Booking
                                    </button>
                                </div>
                            </div>
                            
                            <div className="px-4 py-3 flex flex-col items-center space-y-4">

                                {/* radio button  */}
                                <div className="flex bg-white justify-center border-[#E5E7EB] border w-[312px] rounded-full shadow-md">
                                    <button className="bg-[#212061] text-white text-sm px-6 font-semibold py-2 w-[156px] h-[40px] rounded-full">
                                        Round Trip
                                    </button>
                                    <button className="bg-white text-black text-sm 600 px-6 font-semibold py-2 w-[156px] h-[40px] rounded-full">
                                        One Way
                                    </button>
                                </div>



                                {/* search form */}

                                <div className="flex items-center border border-[#E5E7EB] rounded-full px-2 shadow-md">
                                    <div className="flex-1 px-6 py-3">
                                    <label className="block text-xs text-[#222222] font-semibold">Flying from?</label>
                                    <input
                                        type="text"
                                        placeholder="Search destination"
                                        className="w-full text-sm outline-none text-black"
                                    />
                                    </div>
                                    <div className="w-[1px] h-10 bg-gray-200"></div>
                                    <div className="flex-1 px-6 py-3">
                                    <label className="block text-xs text-[#222222] font-semibold">Flying to?</label>
                                    <input
                                        type="text"
                                        placeholder="Search destination"
                                        className="w-full text-sm outline-none text-black"
                                    />
                                    </div>
                                    <div className="w-[1px] h-10 bg-gray-200"></div>
                                    <div className="flex-1 px-6 py-3">
                                        <div className="flex gap-4">
                                            <div className="flex-1">
                                                <label className="block text-xs text-[#222222] font-semibold">Departure</label>
                                                <input
                                                    type="text"
                                                    placeholder="Add date"
                                                    className="w-full text-sm outline-none text-black"
                                                />
                                            </div>
                                            <div className="w-[1px] h-10 bg-gray-200"></div>
                                            <div className="flex-1">
                                                <label className="block text-xs text-[#222222] font-semibold">Return</label>
                                                <input
                                                    type="text"
                                                    placeholder="11 Dec '25"
                                                    className="w-full text-sm outline-none text-black"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[1px] h-10 bg-gray-200"></div>
                                    <div className="flex-1 flex">
                                        <div className="px-6 py-3">
                                            <label className="block text-xs text-[#222222] font-semibold">Travelling with?</label>
                                            <input
                                                type="text"
                                                placeholder="1 Adult, 1 Child, 1 Infant"
                                                className="w-full text-sm outline-none text-black"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <button className="bg-[#212061] text-white p-4 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;