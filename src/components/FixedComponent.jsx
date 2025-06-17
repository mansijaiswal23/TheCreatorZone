import React from 'react';
import { Link } from 'react-router-dom';
import { useLayout } from '../context/LayoutContext';

const FixedComponent = () => {
  const { showFixedComponent } = useLayout();
  
  if (!showFixedComponent) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white p-3 shadow-lg z-50">
  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
    {/* Animated Text - Now properly centered */}
    <p className="text-sm sm:text-base font-semibold text-center animate-pulse hover:animate-none">
      <span className="inline-flex items-center motion-safe:animate-bounce">
        🎓 Zoom Workshop is on {" "}
        <span className="font-medium ml-1">
          15 June - 3pm onwards
        </span>
      </span>
    </p>
    
    {/* Register Button - Centered with proper spacing */}
    <Link 
      to="/register" 
      className="shrink-0 bg-white text-blue-900 hover:bg-orange-50 font-bold py-2 px-5 rounded-md transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
    >
      Register Now
    </Link>
  </div>
</div>
  );
};

export default FixedComponent;