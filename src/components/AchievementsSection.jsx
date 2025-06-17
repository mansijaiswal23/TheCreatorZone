import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
//import FAQSection from './FAQSection'; // Importing FAQSection component
// import Page3 from './Page3';
import KeyHighlights from './KeyHighlights';

const imageData = [
  {
    id: 1,
    img: '/images/chota bheem.jpeg',
    alt: 'Chhota Bheem',
  },
  {
    id: 2,
    img: '/images/dora.jpeg',
    alt: 'Dora: The Explorer',
  },
  {
    id: 3,
    img: '/images/jungle book.jpeg',
    alt: 'The Jungle Book',
  },
  {
    id: 4,
    img: '/images/mighty raju.jpeg',
    alt: 'Mighty Raju',
  },
  {
    id: 5,
    img: '/images/motu.jpeg',
    alt: 'Motu Patlu',
  },
  {
    id: 6,
    img: '/images/oggy.jpeg',
    alt: 'Oggy and the Cockroaches',
  },
  
  
 
  {
    id: 10,
    img: '/images/tom.jpeg',
    alt: 'Tom and Jerry',
  },
  {
    id: 11,
    img: '/images/ben.jpeg',
    alt: 'Ben 10',
  },
  {
    id: 12,
    img: '/images/pokemon.jpeg',
    alt: 'Pokemon',
  },
  {
    id: 13,
    img: '/images/ninja.jpeg',
    alt: 'Ninja Hattori',
  },
  // Add more image data...
];
const AchievementsSection = () => {
      const [selectedImage, setSelectedImage] = useState(null);


    return(
          <div>
    <div className="bg-gradient-to-bl from-sky-50 via-blue-100 to-blue-200 min-h-screen p-6 text-center">
      <h1 className="text-base sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-6 whitespace-nowrap text-center px-4 py-5">THIS FORMULA HAS CREATED NUMBER OF SUCCESS STORIES</h1>

    <div className='relative'>
      <div className={`max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 transition duration-300 ease-in-out ${selectedImage ? ' brightness-50' : ''}`}>
    {imageData.map((item,index) => (
      <motion.div
        key={item.id}
        className="w-full h-48 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => setSelectedImage({...item,index})}
        whileHover={{ scale: 1.03 }}
      >
        <img
          src={item.img}
          alt={item.alt}
          className="object-cover w-full h-full"
        />
      </motion.div>
    ))}
  </div>
<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  className="text-red-600 text-base sm:text-lg md:text-xl font-medium mt-6 px-4 max-w-3xl mx-auto leading-relaxed tracking-wide text-center"
>
  These are just a few results. We literally have 1000s of Case Studies and success stories of people building Social Media Brands.
</motion.p>
      <div className="mt-6">
        <Link to="/register">
          <button className="bg-blue-900 text-white text-3xl px-6 py-3 rounded-2xl font-bold text-md cursor-pointer">
            I WANT TO REGISTER NOW
          </button>
        </Link>
      </div>
      <div className="mt-4 text-2xl">
            Offer Price: <span className="line-through">₹499</span> <span className="text-orange-500 font-bold">₹21</span>
          </div>

  {/* Modal Popout */}
  {selectedImage && (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={() => setSelectedImage(null)}
    >
<div className="relative">
        {/* Image counter in top-left */}
        <div className="absolute top-2 left-2 bg-white/80 text-sm text-gray-800 px-3 py-1 rounded-full shadow">
           {selectedImage.index + 1}/{imageData.length}
        </div>

        {/* Action buttons in top-right */}
        <div className="absolute top-2 right-2 flex gap-2">
          {/* Zoom Icon */}
          <button title="Zoom" className="p-2 bg-white/80 rounded-full shadow hover:scale-110 transition">
            🔍
          </button>
          {/* Maximize Icon */}
          <button title="Maximize" className="p-2 bg-white/80 rounded-full shadow hover:scale-110 transition">
            ⛶
          </button>
          {/* Close Icon */}
          <button
            title="Close"
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing from parent click
              setSelectedImage(null);
            }}
            className="p-2 bg-white/80 rounded-full shadow hover:bg-red-200 hover:scale-110 transition"
          >
            ❌
          </button>
        </div>
              <motion.img
        src={selectedImage.img}
        alt={selectedImage.alt}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="w-[80vw] max-w-5xl max-h-[90vh] object-contain rounded-xl shadow-2xl border-4 border-white"
      />
    </div>
    </div>
      )}
      
    </div>
    {/* <Page3 /> */}
    </div>
    <KeyHighlights/>
    </div>

    
  );
  
    


};
export default AchievementsSection;