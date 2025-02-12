function Specials() {
    return (
        <section className="py-12 px-0 bg-white">
                <div className="max-w-[1216px] mx-auto">
                <h2 className="text-3xl text-center font-bold text-[#212061] mb-2">Our Specials</h2>
                <p className="text-center text-sm text-gray-600 mb-6 max-w-[1216px] mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative rounded-[20px] overflow-hidden w-[280px] h-[256px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <img src="/brisbane.jpg" alt="Brisbane" className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 bg-[#FCCB46] px-2 py-2 rounded-full text-sm text-[#212061] font-semibold z-20">Early Bird Sale</div>
                        <div className="absolute inset-0 flex items-center justify-center text-white z-20">
                            <h3 className="text-xl font-bold text-center">Honiara to Brisbane</h3>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white z-20">
                            <p className="text-sm">From</p>
                            <p className="text-2xl font-bold">$650AUD</p>
                        </div>
                    </div>

                    <div className="relative rounded-[20px] overflow-hidden w-[280px] h-[256px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <img src="/auckland.jpg" alt="Auckland" className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 bg-[#FCCB46] px-2 py-2 rounded-full text-sm text-[#212061] font-semibold z-20">Early Bird Sale</div>
                        <div className="absolute inset-0 flex items-center justify-center text-white z-20">
                            <h3 className="text-xl font-bold text-center">Honiara to Auckland</h3>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white z-20">
                            <p className="text-sm">From</p>
                            <p className="text-2xl font-bold">$650AUD</p>
                        </div>
                    </div>

                    <div className="relative rounded-[20px] overflow-hidden w-[280px] h-[256px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <img src="/port-vila.jpg" alt="Port Vila" className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 bg-[#FCCB46] px-2 py-2 rounded-full text-sm text-[#212061] font-semibold z-20">Early Bird Sale</div>
                        <div className="absolute inset-0 flex items-center justify-center text-white z-20">
                            <h3 className="text-xl font-bold text-center">Honiara to Port Vila</h3>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white z-20">
                            <p className="text-sm">From</p>
                            <p className="text-2xl font-bold">$650AUD</p>
                        </div>
                    </div>

                    <div className="relative rounded-[20px] overflow-hidden w-[280px] h-[256px]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <img src="/santo.jpg" alt="Santo" className="w-full h-full object-cover" />
                        <div className="absolute top-4 right-4 bg-[#FCCB46] px-2 py-2 rounded-full text-sm text-[#212061] font-semibold z-20">Early Bird Sale</div>
                        <div className="absolute inset-0 flex items-center justify-center text-white z-20">
                            <h3 className="text-xl font-bold text-center">Honiara to Santo</h3>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white z-20">
                            <p className="text-sm">From</p>
                            <p className="text-2xl font-bold">$650AUD</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Specials;