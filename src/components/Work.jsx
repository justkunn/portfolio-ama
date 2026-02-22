export default function Work() {
    const work = [
        {
            name: 'Penugasan 2',
            description: 'Web Design',
            link: 'https://docs.google.com/document/d/10BotmWoJu6yOlwrKC_ReMovBZjl9ZHsb/edit?usp=sharing&ouid=106344982225578498713&rtpof=true&sd=true',
        },
        {
            name: 'Penugasan 3',
            description: 'Inforgrafis informatif',
            link: '',
        },
        {
            name: 'Photography site',
            description: 'Web Design',
            link: '', 
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">Penugasan</h2>
            <div className="grid grid-cols-auto my-10 gap-5 dark:text-white">
                <div className="rounded-xl border border-gray-200 shadow-sm p-4">
                    <div className="space-y-4">
                        {work.map((item) => (
                            <div
                                key={item.name}
                                className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-600 dark:text-white">{item.name}</h3>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-white">{item.description}</p>
                                        {item.name === "Penugasan 3" && (
                                            <img src="./assets/083_INFOGRAFIS.png" alt="" className="mt-6 w-full rounded-lg" />
                                        )}
                                    </div>
                                    {item.name === "Penugasan 2" && (
                                        <a
                                            href={item.link || "#"}
                                            className="ml-auto inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-700 hover:bg-lightHover dark:border-white/30 dark:text-white dark:hover:bg-darkHover"
                                        >
                                            Open
                                            <img src="./assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
                                            <img src="./assets/arrow-icon-dark.png" alt="" className="w-3 hidden dark:block" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
