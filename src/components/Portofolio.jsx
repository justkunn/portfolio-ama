export default function Portofolio() {
  const items = [
    {
      title: "OSIS",
      description:
        "ketua seksi kepribadian unggul, wawasan kebangsaan, bela negara",
      image: "./assets/logo-osis-smp.png",
      year: "2019",
    },
    {
      title: "Pramuka (penggalang)",
      description: "Kerani (Sekertaris)",
      image: "./assets/logo-pramuka.jpg",
      year: "2020",
    },
    {
      title: "OSIS",
      description: "Wakil sekertaris",
      image: "./assets/logo-osis-smk.jpg",
      year: "2021",
    },
    {
      title: "Pramuka (Penegak)",
      description: "Anggota",
      image: "./assets/logo-pramuka.jpg",
      year: "2021",
    },
    {
      title: "OSIS",
      description: "Sekertaris",
      image: "./assets/logo-osis-smk.jpg",
      year: "2022",
    },{
      title: "Karang Taruna",
      description: "Anggota",
      image: "./assets/logo-karang-taruna.png",
      year: "2025",
    }
  ];

  return (
    <section id="portofolio" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-Ovo">Portofolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {items.map((item) => (
          <div
            key={item.title}
            className="border border-gray-300 dark:border-white/30 rounded-xl overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 dark:hover:shadow-white"
          >
            <div className="flex h-48 items-center justify-center bg-white/70 p-4">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-white">
                {item.description}
              </p>
              <p className="mt-4 text-sm text-gray-700 dark:text-white">
                {item.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
