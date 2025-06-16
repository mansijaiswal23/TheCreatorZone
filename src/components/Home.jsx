import { Link } from 'react-router-dom';
import AchievementsSection from './AchievementsSection';


function Home() {

  return (
    <div className="text-center bg-cover bg-center bg-gray-100 min-h-screen"
    style={{backgroundImage: "url('/cru.jpg')"}}>
      <div 
  className="bg-orange-600 text-white inline-block rounded-lg animate-fade-in mb-[clamp(0.2rem,2.5vw,1.5rem)]"
  style={{
    padding: 'clamp(0.25rem, 1.5vw, 0.5rem) clamp(1rem, 2vw, 2rem)',
    fontSize: 'clamp(0.55rem, 1.8vw, 1rem)'
  }}
>
  Give me your 3 Hours, and I will guide you to
</div>
       <div className="text-center px-3 sm:px-4">
  {/* Main Heading - Single line enforced via size reduction */}
  <h1 className="text-[clamp(0.65rem,3vw,2.5rem)] font-bold  animate-fade-in leading-tight tracking-tight whitespace-nowrap">
    CRACK YOUR <span className="text-orange-500">NEXT VIRAL VIDEO</span> BY MASTERING CONTENT
  </h1>
  
  {/* Subheading */}
  <h2 className="text-[clamp(0.55rem,2.8vw,2.25rem)] font-bold  animate-fade-in">
    STRATEGY & <span className="text-orange-500">BUILD YOUR SOCIAL BRAND</span>
  </h2>
  
  {/* Paragraphs */}
  <p className="text-[clamp(0.7rem,2.8vw,1.1rem)] sm:text-[0.85rem] md:text-[0.95rem] mt-1 sm:mt-2 font-normal">
    Backed by 1000s of Success Stories | Follow my Formula to create Viral Videos
  </p>
  <p className='text-[clamp(0.7rem,2.8vw,1.1rem)] sm:text-[0.85rem] md:text-[0.95rem] mt-1 sm:mt-2'>
    - I have done this multiple times
  </p>
</div>
   <div className="flex justify-center px-2 py-4">
  <div className="w-[70%] xs:w-[60%] sm:w-[50%] md:w-[45%] lg:w-[35%">
    <div className="overflow-hidden rounded-lg shadow-lg aspect-video bg-gray-900">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/MJyJqjqfQWE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

<div className='text-sm sm:text-base md:text-lg'>
    <p className='font-normal sm:font-medium md:font-semibold'>Meet Aman Kr Chaurasiya aka <span className="text-orange-500">"Create Software Solutions"</span></p>
</div>

      <div className="mt-6">
        <Link to="/register">
          <button className="bg-orange-500 text-white text-3xl px-6 py-3 rounded-2xl font-bold text-md cursor-pointer" 
          >
            I WANT TO REGISTER NOW
          </button>
        </Link>
      </div>
      <div className="mt-4 text-2xl">
            Offer Price: <span className="line-through">₹499</span> <span className="text-orange-500 font-bold">₹21</span>
          </div>
          <AchievementsSection/>

    </div>
  );
}

export default Home;
