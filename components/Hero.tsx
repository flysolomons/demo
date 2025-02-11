
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

                <header className="w-full bg-white shadow-sm sticky top-0 z-50 rounded-b-lg">
                <div className="max-w-[1216px] mx-auto flex items-center justify-between py-4">
                    <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Solomon Airlines Logo"
                        width={150}
                        height={40}
                        className="h-[24px] w-auto"
                    />
                    </div>
                    <nav className="flex items-center space-x-8 justify-between">
                    {["Explore", "Experience", "Belama"].map((item) => (
                        <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-[#212061] text-sm font-bold transition-colors"
                        >
                        {item}
                        </Link>
                    ))}
                    </nav>
                    <div className="flex items-center justify-end gap-3 w-[152px]">
                    <button
                        className="text-[#212061] hover:text-blue-700 transition-colors"
                        aria-label="Information"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </button>
                    <button
                        className="text-[#212061] hover:text-blue-700 transition-colors"
                        aria-label="Language"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#212061" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"></path></svg>
                    </button>
                    </div>
                </div>
                </header>

                <div className="relative h-[calc(100vh-56px)]">
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