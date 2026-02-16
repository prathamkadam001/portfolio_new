// // "use client";

// // import { useState, useMemo } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Image from "next/image";

// // const categories = [
// //   "All",
// //   "Educational",
// //   "Others",
// //   "Real Estate",
// //   "Management System",
// //   "E-Commerce",
// //   "Mobile Apps",
// // ];

// // const projects = [
// //   {
// //     id: 1,
// //     title: "Global IT Computer Academy",
// //     category: "Educational",
// //     image: "/images/projects/Globalitians.png",
// //   },
// //   {
// //     id: 2,
// //     title: "Gagan Belt",
// //     category: "Others",
// //     image: "/projects/gagan-belt.png",
// //   },
// //   {
// //     id: 3,
// //     title: "Global IT Infosolution",
// //     category: "IT Company",
// //     image: "/images/projects/globalitinfosolution.png",
// //   },
// //   {
// //     id: 4,
// //     title: "SAMC Azamgarh",
// //     category: "Others",
// //     image: "/projects/samc.png",
// //   },
// //   {
// //     id: 5,
// //     title: "Travel Tour",
// //     category: "Others",
// //     image: "/projects/travel.png",
// //   },
// //   {
// //     id: 6,
// //     title: "Glaxocab Industries Pvt Ltd",
// //     category: "Others",
// //     image: "/projects/glaxocab.png",
// //   },
// //   {
// //     id: 7,
// //     title: "SEOK Pvt Ltd",
// //     category: "Management System",
// //     image: "/projects/seok.png",
// //   },
// //   {
// //     id: 8,
// //     title: "Education Website",
// //     category: "Educational",
// //     image: "/projects/education.png",
// //   },
// // ];

// // const container = {
// //   hidden: { opacity: 0 },
// //   show: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.08 },
// //   },
// // };

// // const item = {
// //   hidden: { opacity: 0, y: 20, scale: 0.95 },
// //   show: { opacity: 1, y: 0, scale: 1 },
// // };

// // export default function ProjectsSection() {
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const [search, setSearch] = useState("");

// //   const filteredProjects = useMemo(() => {
// //     return projects.filter((project) => {
// //       const matchCategory =
// //         activeCategory === "All" || project.category === activeCategory;
// //       const matchSearch = project.title
// //         .toLowerCase()
// //         .includes(search.toLowerCase());
// //       return matchCategory && matchSearch;
// //     });
// //   }, [activeCategory, search]);

// //   return (
// //     <section className="relative max-w-7xl mx-auto px-4 py-24">
// //       {/* Header */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6 }}
// //         className="text-center max-w-3xl mx-auto"
// //       >
// //         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
// //           Explore Our{" "}
// //           <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
// //             Projects
// //           </span>
// //         </h2>
// //         <p className="mt-5 text-gray-600 leading-relaxed">
// //           We craft high-performance, scalable digital products with a strong
// //           focus on design, usability, and long-term business growth.
// //         </p>
// //         <div className="relative w-20 h-1 mx-auto mt-7 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500" />
// //       </motion.div>

// //       {/* Search */}
// //       <div className="mt-12 flex justify-center">
// //         <input
// //           type="text"
// //           placeholder="Search projects by name"
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //           className="w-full max-w-md px-6 py-3 rounded-full border bg-white/70 backdrop-blur shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
// //         />
// //       </div>

// //       {/* Filters */}
// //       <div className="mt-10 flex flex-wrap justify-center gap-3">
// //         {categories.map((cat) => (
// //           <button
// //             key={cat}
// //             onClick={() => setActiveCategory(cat)}
// //             className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all ${
// //               activeCategory === cat
// //                 ? "bg-blue-600 text-white shadow-md"
// //                 : "bg-gray-100 text-gray-700 hover:bg-blue-50"
// //             }`}
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Grid */}
// //       <motion.div
// //         variants={container}
// //         initial="hidden"
// //         animate="show"
// //         layout
// //         className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7"
// //       >
// //         <AnimatePresence>
// //           {filteredProjects.map((project) => (
// //             <motion.div
// //               key={project.id}
// //               variants={item}
// //               layout
// //               exit={{ opacity: 0, scale: 0.9 }}
// //               transition={{ duration: 0.3 }}
// //               className="group relative bg-white/80 backdrop-blur rounded-2xl border shadow-sm hover:shadow-xl transition overflow-hidden"
// //             >
// //               {/* Image */}
// //               <div className="relative overflow-hidden">
// //                 <Image
// //                   src={project.image}
// //                   alt={project.title}
// //                   width={600}
// //                   height={400}
// //                   className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
// //                 />

// //                 {/* Overlay */}
// //                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />

// //                 {/* Badge */}
// //                 <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-gray-800 text-xs px-3 py-1 rounded-full shadow">
// //                   {project.category}
// //                 </span>

// //                 {/* Hover CTA */}
// //                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
// //                   <span className="px-4 py-2 text-sm font-medium bg-white rounded-full shadow">
// //                     View Project
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Content */}
// //               <div className="p-5">
// //                 <h3 className="font-semibold text-gray-900 text-base">
// //                   {project.title}
// //                 </h3>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </AnimatePresence>
// //       </motion.div>
// //     </section>
// //   );
// // }

// "use client";

// import { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { Search, Grid3x3, List, X, ExternalLink, Filter } from "lucide-react";

// const categories = [
//   { id: "all", name: "All" },
//   { id: "educational", name: "Educational" },
//   { id: "it", name: "IT Company" },
//   { id: "management", name: "Management System" },
//   { id: "ecommerce", name: "E-Commerce" },
//   { id: "others", name: "Others" },
// ];

// const projects = [
//   {
//     id: 1,
//     title: "Global IT Computer Academy",
//     category: "educational",
//     image: "/images/projects/Globalitians.png",
//     description:
//       "Comprehensive IT education platform with interactive learning modules",
//     tags: ["LMS", "React", "Node.js"],
//   },
//   {
//     id: 2,
//     title: "Gagan Belt",
//     category: "others",
//     image: "/images/projects/GaganBelt.png",
//     description: "E-commerce platform for industrial belt solutions",
//     tags: ["Next.js", "Stripe", "MongoDB"],
//   },
//   {
//     id: 3,
//     title: "Global IT Infosolution",
//     category: "it",
//     image: "/images/projects/globalitinfosolution.png",
//     description: "Corporate website for IT services company",
//     tags: ["WordPress", "SEO", "Responsive"],
//   },
//   {
//     id: 4,
//     title: "SAMC Azamgarh",
//     category: "others",
//     image: "/projects/samc.png",
//     description: "Hospital management and appointment system",
//     tags: ["PHP", "MySQL", "Bootstrap"],
//   },
//   {
//     id: 5,
//     title: "Travel Tour",
//     category: "others",
//     image: "/projects/travel.png",
//     description: "Booking platform for travel packages and tours",
//     tags: ["React", "Payment Gateway", "Map API"],
//   },
//   {
//     id: 6,
//     title: "Glaxocab Industries Pvt Ltd",
//     category: "others",
//     image: "/projects/glaxocab.png",
//     description: "Industrial manufacturing company website",
//     tags: ["Next.js", "Tailwind", "Animation"],
//   },
//   {
//     id: 7,
//     title: "SEOK Pvt Ltd",
//     category: "management",
//     image: "/projects/seok.png",
//     description: "Enterprise resource planning system",
//     tags: ["ERP", "Python", "Django"],
//   },
//   {
//     id: 8,
//     title: "Education Website",
//     category: "educational",
//     image: "/projects/education.png",
//     description: "Online learning platform with video courses",
//     tags: ["Laravel", "AWS", "Video Streaming"],
//   },
// ];

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30, scale: 0.9 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//     },
//   },
// };

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 12,
//     },
//   },
// };

// const pulseVariants = {
//   pulse: {
//     scale: [1, 1.2, 1],
//     opacity: [0.8, 1, 0.8],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// export default function ProjectsSection() {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [search, setSearch] = useState("");
//   const [viewMode, setViewMode] = useState("grid");
//   const [hoveredProject, setHoveredProject] = useState(null);

//   const filteredProjects = useMemo(() => {
//     return projects.filter((project) => {
//       const matchCategory =
//         activeCategory === "all" || project.category === activeCategory;
//       const matchSearch =
//         project.title.toLowerCase().includes(search.toLowerCase()) ||
//         project.description.toLowerCase().includes(search.toLowerCase()) ||
//         project.tags.some((tag) =>
//           tag.toLowerCase().includes(search.toLowerCase())
//         );
//       return matchCategory && matchSearch;
//     });
//   }, [activeCategory, search]);

//   return (
//     <section className="relative py-24 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       <div className="relative max-w-7xl mx-auto">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           variants={containerVariants}
//           className="relative"
//         >
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               variants={itemVariants}
//               className="text-center mb-16 relative"
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
//                 className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg shadow-blue-500/10 group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
//               >
//                 <div className="relative">
//                   <motion.div
//                     variants={pulseVariants}
//                     animate="pulse"
//                     className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
//                   />
//                   <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 animate-ping" />
//                 </div>
//                 <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//                   Our Portfolio
//                 </span>
//                 <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-70" />
//               </motion.div>

//               <motion.div variants={itemVariants}>
//                 <div className="relative -mt-8">
//                   <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//                     <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
//                       Project
//                     </span>
//                     <span className="block md:inline md:ml-3 text-blue-600 relative">
//                       Showcase
//                     </span>
//                   </h1>
//                 </div>
//                 <motion.div
//                   variants={itemVariants}
//                   className="flex items-center justify-center gap-6 -mt-6"
//                 >
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: 80 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full"
//                   />

//                   <div className="flex items-center gap-3">
//                     {[1, 2, 3, 4, 5].map((dot) => (
//                       <motion.div
//                         key={dot}
//                         initial={{ scale: 0 }}
//                         whileInView={{ scale: 1 }}
//                         viewport={{ once: true }}
//                         transition={{
//                           type: "spring",
//                           stiffness: 200,
//                           damping: 12,
//                           delay: 0.3 + dot * 0.1,
//                         }}
//                         whileHover={{ scale: 1.3 }}
//                         className={`w-3 h-3 rounded-full ${
//                           dot === 3
//                             ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"
//                             : "bg-gradient-to-r from-blue-300 to-cyan-300"
//                         }`}
//                       />
//                     ))}
//                   </div>

//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: 80 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8, delay: 0.4 }}
//                     className="h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full"
//                   />
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//         <div className="sticky top-4 z-10 mb-12 bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-200">
//           <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//             <div className="relative flex-1 max-w-2xl">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search projects by name, description, or technology..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//               />
//               {search && (
//                 <button
//                   onClick={() => setSearch("")}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               )}
//             </div>

//             {/* View Toggle */}
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl">
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`p-2 rounded-lg transition ${
//                     viewMode === "grid"
//                       ? "bg-white shadow"
//                       : "hover:bg-gray-200"
//                   }`}
//                 >
//                   <Grid3x3 className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("list")}
//                   className={`p-2 rounded-lg transition ${
//                     viewMode === "list"
//                       ? "bg-white shadow"
//                       : "hover:bg-gray-200"
//                   }`}
//                 >
//                   <List className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="mt-6 flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category.id
//                     ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
//                     : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
//                 }`}
//               >
//                 <span className="relative z-10">{category.name}</span>
//                 {activeCategory === category.id && (
//                   <motion.div
//                     layoutId="activeCategory"
//                     className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 -z-10"
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Projects Grid/List */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={viewMode}
//             variants={container}
//             initial="hidden"
//             animate="show"
//             layout
//             className={`${
//               viewMode === "grid"
//                 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//                 : "flex flex-col gap-4"
//             }`}
//           >
//             <AnimatePresence>
//               {filteredProjects.map((project) => (
//                 <motion.article
//                   key={project.id}
//                   variants={item}
//                   layout
//                   initial="hidden"
//                   animate="show"
//                   exit={{
//                     opacity: 0,
//                     scale: 0.9,
//                     transition: { duration: 0.2 },
//                   }}
//                   onMouseEnter={() => setHoveredProject(project.id)}
//                   onMouseLeave={() => setHoveredProject(null)}
//                   className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 ${
//                     viewMode === "list" ? "flex flex-col md:flex-row" : ""
//                   }`}
//                 >
//                   {/* Image Container */}
//                   <div
//                     className={`relative overflow-hidden ${
//                       viewMode === "list"
//                         ? "md:w-64 lg:w-80 flex-shrink-0"
//                         : "h-56"
//                     }`}
//                   >
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       width={600}
//                       height={400}
//                       className={`w-full h-full object-cover transition-transform duration-700 ${
//                         hoveredProject === project.id
//                           ? "scale-110"
//                           : "scale-100"
//                       }`}
//                     />

//                     {/* Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                     {/* Hover Action */}
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
//                       <button className="px-6 py-3 bg-white rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold hover:bg-gray-50 transition">
//                         <ExternalLink className="w-4 h-4" />
//                         View Details
//                       </button>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
//                     <div className="flex items-start justify-between mb-3">
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
//                           {project.title}
//                         </h3>
//                         <p className="text-gray-600 mt-2 line-clamp-2">
//                           {project.description}
//                         </p>
//                       </div>
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
//                           <span className="text-sm font-bold text-blue-600">
//                             {project.id.toString().padStart(2, "0")}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mt-4">
//                       {project.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </AnimatePresence>

//         {filteredProjects.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="text-center py-16"
//           >
//             <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
//               <Search className="w-12 h-12 text-gray-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">
//               No projects found
//             </h3>
//             <p className="text-gray-600 max-w-md mx-auto">
//               Try adjusting your search or filter criteria to find what you're
//               looking for.
//             </p>
//             <button
//               onClick={() => {
//                 setSearch("");
//                 setActiveCategory("all");
//               }}
//               className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
//             >
//               Reset Filters
//             </button>
//           </motion.div>
//         )}

//         {/* View More */}
//         {filteredProjects.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="text-center mt-16"
//           >
//             <div className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors cursor-pointer group">
//               <span className="text-sm font-medium">View all case studies</span>
//               <div className="w-0 group-hover:w-20 h-px bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300" />
//               <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Grid3x3, List, X, ExternalLink, Filter } from "lucide-react";
import Link from "next/link";

const categories = [
  { id: "all", name: "All" },
  { id: "educational", name: "Educational" },
  { id: "it", name: "IT Company" },
  { id: "management", name: "Management System" },
  { id: "ecommerce", name: "E-Commerce" },
  { id: "others", name: "Others" },
];

const projects = [
  {
    id: 1,
    title: "Global IT Computer Academy",
    category: "educational",
    image: "/images/projects/Globalitians.png",
    description:
      "Comprehensive IT education platform with interactive learning modules",
    tags: ["LMS", "Next.js", "Node.js"],
    link: "https://globalitians.com/",
  },
  {
    id: 2,
    title: "Gagan Belt",
    category: "others",
    image: "/images/projects/GaganBelt.png",
    description: "E-commerce platform for industrial belt solutions",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "https://gaganbelt.com/",
  },
  {
    id: 3,
    title: "Global IT Infosolution",
    category: "it",
    image: "/images/projects/globalitinfosolution.png",
    description: "Corporate website for IT services company",
    tags: ["Next.js", "SEO", "Responsive"],
    link: "https://globalitinfosolution.com/",
  },
  {
    id: 4,
    title: "Balanced Behavioral Health",
    category: "others",
    image: "/images/projects/bbhsl.png",
    description: "Hospital management",
    tags: ["MERN", "MySQL", "Tailwind"],
    link: "https://bbhsl.globalitinfosolution.com/",
  },
  {
    id: 5,
    title: "Bharat Engineering Works",
    category: "others",
    image: "/images/projects/BEW.png",
    description: "Construction company website",
    tags: ["Next.js", "Node.js", "API"],
    link: "https://bewvalves.com/",
  },
  {
    id: 6,
    title: "Viyan Electronics",
    category: "others",
    image: "/images/projects/ViyanElectronics.png",
    description: "Electronics company website",
    tags: ["Next.js", "Responsive", "Tailwind"],
    link: "https://www.viyanelectronics.com/Users",
  },
  {
    id: 7,
    title: "School Management System",
    category: "management",
    image: "/images/projects/SchoolManagementSystem.png",
    description: "School management system",
    tags: ["Next.js", "Node.js", "Student Management", "Employee Management"],
    link: "https://school.globalitinfosolution.com/en",
  },
  {
    id: 8,
    title: "Online Examination Portal",
    category: "management",
    image: "/images/projects/OnlineExaminationPortal.png",
    description: "Online Examination Portal",
    tags: [
      "Student Management",
      "Online Examination",
      "Next.js",
      "Certificates",
    ],
    link: "https://exam.globalitinfosolution.com/",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory =
        activeCategory === "all" || project.category === activeCategory;
      const matchSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase()),
        );
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={itemVariants}
              className="text-center mb-16 relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg shadow-blue-500/10 dark:shadow-blue-500/5 group hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="relative">
                  <motion.div
                    variants={pulseVariants}
                    animate="pulse"
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400"
                  />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 opacity-50 animate-ping" />
                </div>
                <span className="text-base font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  My Portfolio
                </span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-300 dark:to-cyan-300 opacity-70" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="relative md:-mt-8 mt-8">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-gray-100 dark:via-blue-200 dark:to-gray-100 bg-clip-text text-transparent">
                      Project
                    </span>
                    <span className="inline md:ml-3 ml-3 text-blue-600 dark:text-blue-400 relative">
                      Showcase
                    </span>
                  </h1>
                </div>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center gap-6 md:-mt-6 mt-6"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-1 bg-gradient-to-r from-transparent to-blue-500 dark:to-blue-400 rounded-full"
                  />

                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <motion.div
                        key={dot}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 12,
                          delay: 0.3 + dot * 0.1,
                        }}
                        whileHover={{ scale: 1.3 }}
                        className={`w-3 h-3 rounded-full ${
                          dot === 3
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 shadow-lg shadow-blue-500/50 dark:shadow-blue-400/50"
                            : "bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-blue-200 dark:to-cyan-200"
                        }`}
                      />
                    ))}
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-1 bg-gradient-to-r from-blue-500 dark:from-blue-400 to-transparent rounded-full"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="sticky top-4 z-10 mb-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition ${
                    viewMode === "grid"
                      ? "bg-white dark:bg-gray-700 shadow"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <Grid3x3 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition ${
                    viewMode === "list"
                      ? "bg-white dark:bg-gray-700 shadow"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  <List className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                }`}
              >
                <span className="relative z-10">{category.name}</span>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            variants={container}
            initial="hidden"
            animate="show"
            layout
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-4"
            }`}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={item}
                  layout
                  initial="hidden"
                  animate="show"
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.2 },
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 hover:-translate-y-2 ${
                    viewMode === "list" ? "flex flex-col md:flex-row" : ""
                  }`}
                >
                  {/* Image Container */}
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list"
                        ? "md:w-64 lg:w-80 flex-shrink-0"
                        : "h-56"
                    }`}
                  >
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          hoveredProject === project.id
                            ? "scale-110"
                            : "scale-100"
                        }`}
                      />
                    </Link>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover Action */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Link href={project.link} target="_blank">
                        <button className="px-6 py-3 bg-white dark:bg-gray-800 cursor-pointer rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition text-gray-900 dark:text-gray-100">
                          <ExternalLink className="w-4 h-4" />
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center">
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                            {project.id.toString().padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-100 dark:border-blue-800/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* No Results State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400 dark:text-gray-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're
              looking for.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-500/20 transition-all"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
