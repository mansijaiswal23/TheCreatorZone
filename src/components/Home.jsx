import { Link } from 'react-router-dom';
import AchievementsSection from './AchievementsSection';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-90 to-blue-100 text-center bg-cover bg-center">
      {/* Responsive Content Wrapper */}
      <div className="w-full max-w-5xl mx-auto px-4 py-8 flex flex-col items-center justify-center">

        {/* Tagline Box */}
        <div
          className="bg-blue-900 text-white rounded-lg animate-fade-in mb-4 -mt-8 "
          style={{
            padding: 'clamp(0.25rem, 1.5vw, 0.5rem) clamp(1rem, 2vw, 2rem)',
            fontSize: 'clamp(0.55rem, 1.8vw, 1rem)'
          }}
        >
          Give me your 3 Hours, and I will guide you to
        </div>

        {/* Main Heading */}
        <h1 className="text-[clamp(1.2rem,5vw,2.5rem)] font-bold animate-fade-in leading-tight tracking-tight mb-2">
          Learn How to Make <span className="text-blue-900"> ₹30,000/Month</span> Part-Time Through Blogging!
        </h1>

        {/* Subheading */}
        <h2 className="text-[clamp(1rem,4vw,2rem)] font-semibold animate-fade-in mb-2">
          Attend This Live Blogging Webinar & <span className="text-blue-900"> Discover the Exact Blueprint to Build a Profitable Blog — Even if You're Just Starting Out.</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-[clamp(0.9rem,2.5vw,1.2rem)] mt-1">
          Backed by 1000s of Success Stories | Follow my Formula to create Viral Videos
        </p>
        <p className="text-[clamp(0.85rem,2.5vw,1.1rem)] mt-1 mb-6">
          - I have done this multiple times
        </p>

        {/* Video Section */}
        <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/MJyJqjqfQWE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Name Line */}
        <p className="text-[clamp(0.9rem,2.5vw,1.2rem)] font-medium mb-4">
          Meet Aman Kr Chaurasiya aka <span className="text-blue-900 font-semibold">"Create Software Solutions"</span>
        </p>

        {/* CTA Button */}
        <div className="mb-4">
          <Link to="/register">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-2xl text-[clamp(1rem,2.5vw,1.5rem)] font-bold hover:bg-blue-800 transition-all">
              I WANT TO REGISTER NOW
            </button>
          </Link>
        </div>

        {/* Pricing Info */}
        <div className="text-[clamp(1rem,2.5vw,1.4rem)] font-semibold mb-1">
          Offer Price: <span className="line-through text-gray-600">₹499</span> <span className="text-blue-900 font-bold">₹21</span>
        </div>
        <div className="text-[clamp(0.85rem,2vw,1.1rem)]">
          Limited Seats | Get ₹2,100 Worth Bonuses Free
        </div>
      </div>

      {/* Achievements Section */}
      <AchievementsSection />
    </div>
  );
}

export default Home;
