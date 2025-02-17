function Information() {
    const cards = [
        {
            icon: "⚠️", // We can replace these with proper icons later
            title: "Travel Alerts",
            description: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor,",
        },
        {
            icon: "👤",
            title: "Check-In Information",
            description: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor,",
        },
        {
            icon: "✈️",
            title: "Travel Advice",
            description: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor,",
        },
        {
            icon: "⚠️", // We can replace these with proper icons later
            title: "Travel Alerts",
            description: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor,",
        },
        {
            icon: "👤",
            title: "Check-In Information",
            description: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor,",
        },
        {
            icon: "✈️",
            title: "Travel Advice",
            description: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor,",
        },
    ];

    return (
        <section className="py-12 px-0 bg-[#F2F2FF]">
        <div className="max-w-[1216px] mx-auto">
        <h2 className="text-3xl text-center font-bold text-[#212061] mb-2">All You Need</h2>
        <p className="text-center text-sm text-gray-600 mb-6 max-w-[1216px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
                <div key={index} className="bg-white rounded-3xl p-4 shadow-md">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">{card.icon}</span>
                        <h2 className="text-xl font-bold text-[#1a1a4b]">{card.title}</h2>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">{card.description}</p>
                    <a href="#" className="text-[#5452C6] text-sm hover:text-purple-800">
                        Find out more
                    </a>
                </div>
            ))}
        </div>
        </div>
        </section>
    );
}

export default Information;