export default function Work() {
  const work = [
    {
      name: "Penugasan 2",
      description: "Web Design",
      link: "./assets/TOR_LKMMTH_083.docx.pdf",
    },
    {
      name: "Penugasan 3",
      description: "Inforgrafis informatif",
      link: "https://drive.google.com/file/d/1gF2O_Vprz8f3kQSP8zNAN6KrXng08AuC/view?usp=sharing",
    },
    {
      name: "Penugasan 4",
      description: "Web Design",
      link: " https://drive.google.com/file/d/1_hgvJQwP8t3i-wW9MtKMdDu0QgkF-spK/view?usp=sharing",
    },
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
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold text-gray-600 dark:text-white">
                        {item.name}
                      </h3>
                      {["Penugasan 2", "Penugasan 3", "Penugasan 4"].includes(
                        item.name
                      ) && (
                        <a
                          href={item.link || "#"}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-2 text-sm text-gray-700 hover:bg-lightHover sm:w-auto dark:border-white/30 dark:text-white dark:hover:bg-darkHover"
                        >
                          Open
                          <img
                            src="./assets/arrow-icon.png"
                            alt=""
                            className="w-3 dark:hidden"
                          />
                          <img
                            src="./assets/arrow-icon-dark.png"
                            alt=""
                            className="w-3 hidden dark:block"
                          />
                        </a>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-white">
                      {item.description}
                    </p>
                    {item.name === "Penugasan 3" && (
                      <img
                        src="./assets/083_SUARA_MUDA.webp"
                        alt=""
                        className="mt-6 w-full rounded-lg"
                        loading="lazy"
                      />
                    )}
                    {item.name === "Penugasan 4" && (
                      <video
                        className="mt-6 w-full rounded-lg"
                        controls
                        preload="metadata"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src="/assets/Video_Himakom_1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
