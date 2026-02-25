import { motion } from "framer-motion";
import { CiGlobe } from "react-icons/ci";
import { FaMobileAlt, FaPaintBrush, FaPalette } from "react-icons/fa";
import { FcBusinesswoman, FcConferenceCall, FcEditImage, FcEnteringHeavenAlive, FcSelfServiceKiosk, FcSurvey } from "react-icons/fc";

export default function Services() {
    const services = [
        {
            name: 'Web development',
            Icon: FcEnteringHeavenAlive,
            description: 'Build responsive and functional websites while continuing to learn programming.',
            link: '#',
        },{
            name: 'UI/ UX design',
            Icon: FcSelfServiceKiosk,
            description: 'Designing simple, user-friendly interfaces by applying basic design principles and focusing on clear user experience.',
            link: '#',
        },{
            name: 'Graphics design',
            Icon: FcEditImage,
            description: 'Creating clean and visually appealing digital designs for presentations, social media, and organizational needs.',
            link: '#',
        },
        {
            name: 'Leadership Development',
            Icon: FcBusinesswoman,
            description: 'Interested in developing leadership skills through active participation in student organizations.',
            link: '#',
        },
        {
            name: 'Event & Project Management ',
            Icon: FcSurvey,
            description: 'Enthusiastic about being involved in organizing events and managing collaborative projects.',
            link: '#',
        },
        {
            name: 'Team Collaboration',
            Icon: FcConferenceCall,
            description: 'Interested in working with diverse teams to build communication and teamwork experience.',
            link: '#',
        }
    ];
    return (
        <motion.div initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4 }}>
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center text-5xl font-Ovo">Skill & Minat</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am interested in web development, user experience design, and actively participating in student organizations to develop leadership and teamwork skills.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <service.Icon className="h-10 w-10 text-gray-700 dark:text-white" aria-hidden="true" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </motion.div>
    )
}
