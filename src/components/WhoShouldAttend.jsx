// import React from 'react';
// import { motion } from 'framer-motion';
// import Bonuses from '@/components/Bonuses';
// //import audienceImage from '@/assets/audience.png'; // Add your image path here

// const audienceList = [
//   {
//     emoji: '🧑‍🎓',
//     label: 'A Student Looking for a Side Income',
//   },
//   {
//     emoji: '👩‍👧‍👦',
//     label: 'A Homemaker Wanting to Work from Home',
//   },
//   {
//     emoji: '👨‍💼',
//     label: 'A Working Professional Seeking Passive Income',
//   },
//   {
//     emoji: '🚀',
//     label: 'An Aspiring Content Creator or Writer',
//   },
// ];

// const WhoShouldAttend = () => {
//   return (
//     <div>
//       <section className="relative py-20 px-6 bg-gradient-to-bl from-sky-50 via-blue-100 to-blue-150 text-gray-900 overflow-hidden">
//         {/* Floating Glow Elements */}
//         <div className="absolute top-12 left-10 w-20 h-20 bg-sky-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-16 right-12 w-12 h-12 bg-sky-600 rounded-full blur-xl opacity-30 animate-bounce"></div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* LEFT SIDE - IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full flex justify-center"
//           >
//             {/* <img
//               src={audienceImage}
//               alt="Audience"
//               className="w-full max-w-md rounded-2xl shadow-lg"
//             /> */}
//           </motion.div>

//           {/* RIGHT SIDE - TEXT AND LIST */}
//           <div className="w-full">
//             {/* Heading */}
//             <motion.h2
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 md:text-left"
//             >
//               Who Should Attend?
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-gray-700 text-lg font-medium text-center md:text-left"
//             >
//               This webinar is designed for YOU if you relate to any of these 👇
//             </motion.p>

//             {/* List */}
//             <div className="mt-8 space-y-4">
//               {audienceList.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className="bg-white border border-blue-200 rounded-xl px-4 py-3 shadow-md hover:shadow-blue-300 transition duration-300 hover:-translate-y-1"
//                 >
//                   <div className="flex items-center gap-3 text-lg font-semibold text-gray-900">
//                     <span className="text-2xl">{item.emoji}</span> {item.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Bottom Note */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="mt-6"
//             >
//               <p className="text-sm text-blue-600 font-medium">
//                 ✅ No Age Limit. No Technical Skills Required.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <Bonuses />
//     </div>
//   );
// };

// export default WhoShouldAttend;




import React from 'react';
import { motion } from 'framer-motion';
import Bonuses from '@/components/Bonuses';

const audienceList = [
  {
    emoji: '🧑‍🎓',
    label: 'A Student Looking for a Side Income',
  },
  {
    emoji: '👩‍👧‍👦',
    label: 'A Homemaker Wanting to Work from Home',
  },
  {
    emoji: '👨‍💼',
    label: 'A Working Professional Seeking Passive Income',
  },
  {
    emoji: '🚀',
    label: 'An Aspiring Content Creator or Writer',
  },
];

const WhoShouldAttend = () => {
  return (
    <div className="relative">
      {/* Main Page Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-900 py-12 px-6 bg-gradient-to-r from-blue-50 to-sky-100"
      >
        Who Should Attend?
      </motion.h1>

      <section className="relative py-12 px-6 bg-gradient-to-r from-blue-50 to-sky-100  text-gray-900">
        {/* Floating Glow Elements */}
        <div className="absolute top-12 left-10 w-20 h-20 bg-sky-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 right-12 w-12 h-12 bg-sky-600 rounded-full blur-xl opacity-30 animate-bounce"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center"
          >
            {/* Image placeholder */}
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 text-xl font-medium mb-8 text-center md:text-left"
            >
              This webinar is designed for YOU if you relate to any of these:
            </motion.p>

            {/* List */}
            <div className="space-y-4">
              {audienceList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white border border-blue-200 rounded-xl px-4 py-3 shadow-md hover:shadow-blue-300 transition duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 text-lg font-semibold text-gray-900">
                    <span className="text-2xl">{item.emoji}</span> {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center md:text-left"
            >
              <p className="text-sm text-blue-600 font-medium">
                ✅ No Age Limit. No Technical Skills Required.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Bonuses />
    </div>
  );
};

export default WhoShouldAttend;