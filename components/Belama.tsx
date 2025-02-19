import Image from 'next/image';

function Belama() {
    return (
        <section className="py-12 px-0 bg-white">
            <div className="mx-auto">
                <h2 className="text-3xl text-center font-bold text-[#212061] mb-2">Join Belama</h2>
                <p className="text-center text-sm text-gray-600 mb-6 max-w-[1216px] mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                
                <div className="relative w-full h-[480px] mb-6">
                    <Image 
                        src={`${process.env.basePath}/belama.jpg`}
                        alt="Belama welcome area with tropical scene and refreshments" 
                        width={500}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className="text-center">
                    <button className="bg-[#212061] text-white px-6 py-2 w-[192px] h-[48px] rounded-full font-medium hover:bg-opacity-90 transition-colors">
                        Join Now 
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Belama;