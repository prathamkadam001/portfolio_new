// "use client";
// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaHtml5,
//   FaCss3Alt,
//   FaGithub,
//   FaNodeJs,
//   FaPython,
//   FaBootstrap,
//   FaFigma,
//   FaGitAlt,
// } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiJavascript,
//   SiTypescript,
//   SiMongodb,
//   SiMysql,
//   SiExpress,
//   SiC,
//   SiCplusplus,
//   SiTailwindcss,
//   SiVuedotjs,
//   SiFirebase,
//   SiJquery,
//   SiPostman,
// } from "react-icons/si";

// const techData = {
//   frontend: [
//     { name: "React JS", icon: <FaReact className="text-sky-400" /> },
//     { name: "Next Js", icon: <SiNextdotjs className="text-white" /> },
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//     { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
//     { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//     { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
//     { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
//     { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
//     { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
//     { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
//   ],
//   others: [
//     { name: "C", icon: <SiC className="text-gray-300" /> },
//     { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
//     { name: "Python", icon: <FaPython className="text-yellow-400" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//     { name: "MySQL", icon: <SiMysql className="text-sky-400" /> },
//     { name: "Express", icon: <SiExpress className="text-gray-300" /> },
//     { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
//     { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
//     { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
//     { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
//     { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
//     { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
//   ],
// };

// const fadeIn = (delay = 0) => ({
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, delay, ease: "easeOut" },
//   },
// });

// export default function TechTools() {
//   return (
//     <section>
//       {/* className="bg-[#1e1e1e] text-white py-16 px-4 md:px-8" */}
//       <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
//         <div className="max-w-7xl mx-auto text-center">
//           {/* Title */}
//           {/* <motion.h2
//           className="text-4xl md:text-5xl font-bold mb-2"
//           variants={fadeIn(0)}
//           initial="hidden"
//           animate="visible"
//         >
//           Tools that turn ideas into functional web experiences
//         </motion.h2> */}
//           <div className="flex flex-col justify-center items-center mb-15">
//             <motion.div className="max-w-3xl text-center">
//               <h2>
//                 Tools that turn ideas into functional
//                 <span className="instrument-font italic font-normal dark:text-white/70">
//                   {" "}web experiences
//                 </span>
//               </h2>
//             </motion.div>
//           </div>
//           <motion.p
//           className="text-gray-400 mb-10"
//           variants={fadeIn(0.2)}
//           initial="hidden"
//           animate="visible"
//         >
//           Frontend technologies I prefer using
//         </motion.p>

//           {/* Frontend Tools */}
//           <motion.div
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center mb-12"
//             variants={fadeIn(0.3)}
//             initial="hidden"
//             animate="visible"
//           >
//             {techData.frontend.map((tool, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center gap-3 group"
//                 whileHover={{ scale: 1.15 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//               >
//                 <div className="text-4xl md:text-5xl transition-transform duration-300 group-hover:rotate-6">
//                   {tool.icon}
//                 </div>
//                 <p className="text-sm md:text-base text-gray-300">
//                   {tool.name}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Other Technologies */}
//           <motion.p
//             className="text-gray-400 mb-8"
//             variants={fadeIn(0.4)}
//             initial="hidden"
//             animate="visible"
//           >
//             Backend and other technologies I prefer using
//           </motion.p>
//           <motion.div
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center"
//             variants={fadeIn(0.5)}
//             initial="hidden"
//             animate="visible"
//           >
//             {techData.others.map((tool, index) => (
//               <motion.div
//                 key={index}
//                 className="flex flex-col items-center gap-3 group"
//                 whileHover={{ scale: 1.15 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//               >
//                 <div className="text-4xl md:text-5xl transition-transform duration-300 group-hover:-rotate-6">
//                   {tool.icon}
//                 </div>
//                 <p className="text-sm md:text-base text-gray-300">
//                   {tool.name}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiVuedotjs,
  SiFirebase,
  SiJquery,
  SiPostman,
} from "react-icons/si";

const techData = {
  frontend: [
    { name: "React JS", icon: <FaReact className="text-sky-400" /> },
    { name: "Next Js", icon: <SiNextdotjs className="dark:text-white text-black" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
  ],
  others: [
    { name: "C", icon: <SiC className="dark:text-gray-300 text-gray-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-sky-400" /> },
    { name: "Express", icon: <SiExpress className="dark:text-gray-300 text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="dark:text-gray-300 text-gray-500" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-400" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  ],
};

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function TechTools() {
  return (
    <section className="relative w-full pt-44 2xl:pb-20 pb-10">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Title */}
        <div className="flex justify-center items-center mb-5">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-2 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Tools that turn ideas into functional{" "}
            <span className="instrument-font italic font-normal dark:text-white/70">
              web experiences
            </span>
          </motion.h2>
        </div>

        {/* Frontend Subtitle */}
        <motion.p
          className="dark:text-gray-400 text-gray-600 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          variants={fadeInUp}
        >
          Frontend technologies I prefer using
        </motion.p>

        {/* Frontend Tools */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {techData.frontend.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 group"
              variants={fadeInUp}
              custom={index * 0.05}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="text-4xl md:text-5xl transition-transform duration-300 group-hover:rotate-6">
                {tool.icon}
              </div>
              <p className="text-sm md:text-base dark:text-gray-300 text-gray-500">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Backend Subtitle */}
        <motion.p
          className="dark:text-gray-400 text-gray-600 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.4}
          variants={fadeInUp}
        >
          Backend and other technologies I prefer using
        </motion.p>

        {/* Other Tools */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {techData.others.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 group"
              variants={fadeInUp}
              custom={index * 0.05}
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="text-4xl md:text-5xl transition-transform duration-300 group-hover:-rotate-6">
                {tool.icon}
              </div>
              <p className="text-sm md:text-base dark:text-gray-300 text-gray-500">{tool.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute w-full h-full top-0 left-0 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"></div>
    </section>
  );
}
