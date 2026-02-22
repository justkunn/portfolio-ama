import { motion } from "framer-motion";

export default function Contact() {
    const profiles = [
        {
            name: "Instagram",
            username: "@nsxama",
            link: "https://www.instagram.com/nsxama?igsh=c2Nhb3VjN2lmZnpo",
            iconLight: "./assets/Instagram_Glyph_Black.png",
            iconDark: "./assets/Instagram_Glyph_White.png"
        },
        {
            name: "Github",
            username: "@kumawn",
            link: "https://github.com/kumawn/",
            iconLight: "./assets/GitHub_Invertocat_Black.png",
            iconDark: "./assets/GitHub_Invertocat_White.png"
        }
    ];
    return (
        <motion.div initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4 }}>
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <div className="max-w-2xl mx-auto rounded-2xl border border-gray-300 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/30 dark:bg-darkHover/30">
                <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
                <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
                <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

                <div className="grid grid-cols-1 gap-4">
                    {profiles.map((profile) => (
                        <div
                            key={profile.username}
                            className="flex items-center gap-4 rounded-xl border border-gray-300 dark:border-white/30 bg-white/70 dark:bg-darkHover/40 px-6 py-5 overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 dark:hover:shadow-white"
                        >
                            {profile.icon ? (
                                <img src={profile.icon} alt="" className="w-12 h-12 object-cover" />
                            ) : (
                                <>
                                    <img src={profile.iconLight} alt="" className="w-12 h-12 object-cover dark:hidden" />
                                    <img src={profile.iconDark} alt="" className="w-12 h-12 object-cover hidden dark:block" />
                                </>
                            )}
                            <div>
                                <p className="text-lg font-semibold text-gray-700 dark:text-white">{profile.name}</p>
                                <p className="text-sm text-gray-600 dark:text-white/80">{profile.username}</p>
                            </div>
                            <a
                                href={profile.link}
                                className="ml-auto border rounded-full border-black w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-lime-300 transition dark:border-white dark:shadow-[2px_2px_0_#fff] dark:hover:bg-darkHover"
                                aria-label={`Visit ${profile.name}`}
                            >
                                <img src="./assets/arrow-icon.png" alt="" className="w-5 dark:hidden" />
                                <img src="./assets/arrow-icon-dark.png" alt="" className="w-5 hidden dark:block" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </motion.div>
    )
}
