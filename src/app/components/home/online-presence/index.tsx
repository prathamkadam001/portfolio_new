// 'use client'
// import { Icon } from '@iconify/react/dist/iconify.js'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'

// function OnlinePresence() {
//   const [onlinePresenceList, setonlinePresenceList] = useState<any>(null);

//   useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const res = await fetch('/api/page-data')
//           if (!res.ok) throw new Error('Failed to fetch')

//           const data = await res.json()
//           setonlinePresenceList(data?.onlinePresenceList)
//         } catch (error) {
//           console.error('Error fetching services:', error)
//         }
//       }

//       fetchData()
//     }, [])
//   return (
//     <section id='work'>
//       <div className='2xl:py-20 py-11'>
//         <div className='container'>
//           <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
//             <div className='max-w-2xl text-center'>
//               <h2>
//                 How we transformed a small business’s
//                 <span className='instrument-font italic font-normal dark:text-white/70'>
//                   {' '}
//                   online presence
//                 </span>
//               </h2>
//             </div>
//             <div className='grid md:grid-cols-2 gap-x-6 gap-y-8'>
//               {onlinePresenceList?.map((items:any, index:any) => {
//                 return (
//                   <div
//                     key={index}
//                     className='group flex flex-col gap-6 cursor-pointer'>
//                     <div className='relative '>
//                       <Image
//                         src={items.image}
//                         alt={items.title}
//                         width={625}
//                         height={410}
//                         className='rounded-2xl'
//                         unoptimized={true}
//                       />

//                       {/* Overlay div */}
//                       <Link
//                         href={items.link}
//                         target='blank'
//                         className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex'>
//                         <span className='flex justify-end p-5 w-full'>
//                           <Icon
//                             icon='icon-park-solid:circle-right-up'
//                             width='50'
//                             height='50'
//                             style={{ color: '#fbfbfb' }}
//                           />
//                         </span>
//                       </Link>
//                     </div>

//                     <div className='flex flex-col items-start gap-4'>
//                       <h5 className='group-hover:text-purple_blue'>
//                         {items.title}
//                       </h5>
//                       <div className='flex gap-3'>
//                         {items.tag?.map((tag:any, index:number) => (
//                           <p
//                             key={index}
//                             className='text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white'>
//                             {tag}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default OnlinePresence

"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function OnlinePresence() {
  const [onlinePresenceList, setOnlinePresenceList] = useState<any>(null);
  const [displayCount, setDisplayCount] = useState(4); // Initially show 4 projects

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setOnlinePresenceList(data?.onlinePresenceList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  // Function to show all projects
  const showAllProjects = () => {
    if (onlinePresenceList) {
      setDisplayCount(onlinePresenceList.length);
    }
  };

  // Slice the array to show only the number of projects based on displayCount
  const displayedProjects = onlinePresenceList?.slice(0, displayCount) || [];

  return (
    <section id="work">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
            <div className="max-w-2xl text-center">
              <h2>
                How we transformed a small business&apos;s
                <span className="instrument-font italic font-normal dark:text-white/70">
                  {" "}
                  online presence
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              {displayedProjects?.map((items: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-6 cursor-pointer"
                  >
                    <div className="relative">
                      <Image
                        src={items.image}
                        alt={items.title}
                        width={625}
                        height={410}
                        className="rounded-2xl object-cover w-full h-auto"
                        unoptimized={true}
                      />

                      {/* Overlay div */}
                      <Link
                        href={items.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex transition-opacity duration-300"
                      >
                        <span className="flex justify-end p-5 w-full">
                          <Icon
                            icon="icon-park-solid:circle-right-up"
                            width="50"
                            height="50"
                            style={{ color: "#fbfbfb" }}
                          />
                        </span>
                      </Link>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                      <h5 className="group-hover:text-purple_blue transition-colors duration-300">
                        {items.title}
                      </h5>
                      <div className="flex gap-3 flex-wrap">
                        {items.tag?.map((tag: any, index: number) => (
                          <p
                            key={index}
                            className="text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white transition-colors duration-300"
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View More Button Section */}
            <div className="flex flex-col items-center gap-6 mt-8">
              {/* If there are more projects to show and we're not showing all yet */}
              {onlinePresenceList &&
                displayCount < onlinePresenceList.length && (
                  <button
                    onClick={showAllProjects}
                    className="px-8 py-3 bg-purple_blue text-white rounded-full hover:bg-purple_blue/90 transition-colors duration-300 font-medium text-lg"
                  >
                    View More Projects
                  </button>
                )}

              {/* Or Link to dedicated work page */}
              {/* <div className='text-center -mt-20'>
                <p className='text-gray-600 dark:text-gray-400 mb-3'>
                  Want to see all our work?
                </p>
                <Link
                  href='/my-work'
                  className='inline-flex items-center gap-2 px-6 py-3 border-2 border-purple_blue text-purple_blue rounded-full hover:bg-purple_blue hover:text-white transition-all duration-300 font-medium group'
                >
                  View All Projects
                  <Icon
                    icon='icon-park-solid:right'
                    className='group-hover:translate-x-1 transition-transform duration-300'
                    width='20'
                    height='20'
                  />
                </Link>
              </div> */}

              {/* Alternative: Only show link to work page */}
              <div className="text-center -mt-20">
                <Link
                  href="/my-work"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-600/90 transition-colors duration-300 font-medium text-lg flex items-center gap-2"
                >
                  View All Projects
                  <Icon icon="icon-park-solid:right" width="24" height="24" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlinePresence;
