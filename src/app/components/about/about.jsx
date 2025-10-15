"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const aboutData = {
  name: "Pratham Kadam",
  age: 18,
  title: "Full Stack Developer",
  description1:
    "I’m a passionate web developer focused on building efficient, scalable, and user-friendly applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.",
  description2:
    "With experience across both frontend and backend, I craft seamless digital experiences that merge functionality with thoughtful design.",
  description3:
    "When I’m not coding, I like exploring design trends, reading tech blogs, and spending time with friends.",
  image: "/images/owner/my_image.png", // Replace with your image path
};

export default function AboutSection() {
  return (
    <section className="bg-gray-100 dark:bg-[#0d0d0d]  text-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex-shrink-0"
        >
          <div className="rounded-xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.2)] w-[300px] sm:w-[350px] md:w-[480px] lg:w-[430px] lg:h-[400px]">
            <Image
              src={aboutData.image}
              alt={aboutData.name}
              width={520}
              height={520}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-blue-500 pl-4">
            About Me
          </h2>

          <p className="dark:text-gray-300 text-gray-500 mb-4 leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold dark:text-white text-black">{aboutData.name}</span>,
            a {aboutData.age}-year-old {aboutData.title}.
          </p>

          <p className="dark:text-gray-400 text-gray-500 mb-4 leading-relaxed">
            {aboutData.description1}
          </p>

          <p className="dark:text-gray-400 text-gray-500 mb-4 leading-relaxed">
            {aboutData.description2}
          </p>

          <p className="dark:text-gray-400 text-gray-500 leading-relaxed">
            {aboutData.description3}
          </p>

          {/* Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
