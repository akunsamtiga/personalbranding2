'use client';
import { useEffect, useState } from 'react';
import { Twitter, Instagram, Github } from 'lucide-react';
import Image from 'next/image';

export default function GuarapoBiolink() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    
    // Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const isDark = theme === 'dark';
  
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
        {/* Profile Card */}
        <div className={`rounded-xl overflow-hidden shadow-lg mb-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="p-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-black">
                <span className="text-white text-2xl md:text-3xl font-bold">N</span>
              </div>
            </div>
            
            {/* Title */}
            <div className="text-center">
              <h1 className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>@NamaAnda</h1>
              <p className={`text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Agencia de Marketing Digital</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-4 md:space-x-6 mt-4">
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <Twitter size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <Instagram size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <Github size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="#" className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                <svg viewBox="0 0 24 24" width="20" height="20" className="md:w-6 md:h-6" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Agency Button */}
        <div 
          className={`rounded-xl p-4 md:p-5 mb-4 cursor-pointer flex justify-between items-center shadow-md ${
            isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <span className={`text-base md:text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>Guarapo Agency</span>
          <span className="md:text-lg">→</span>
        </div>
        
        {/* Projects Section */}
        <div className={`rounded-xl overflow-hidden shadow-lg mb-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="p-6">
            <h2 className={`text-lg md:text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>Proyectos</h2>
            
            {/* Project Card */}
            <div className={`rounded-lg overflow-hidden mb-4 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-medium md:text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>Guatacanights.com</span>
                  <span className="md:text-lg">→</span>
                </div>
                <p className={`text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  El nuevo sonido de la música venezolana
                </p>
              </div>
              
              {/* Project Image */}
                              <div className="relative w-full h-48 md:h-64 lg:h-72">
                  <Image 
                    src="/images/q1.jpg" 
                    alt="Project Screenshot" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white text-black text-xs md:text-sm py-1 px-2 rounded-md">
                    Build the site you always wanted!
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white text-xs md:text-sm py-1 px-3 rounded-full">
                    HEY! I&apos;M JOH DOE
                  </div>
                </div>
              
              {/* Project Details */}
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <div className="relative w-8 h-8">
                    <Image 
                      src="/images/q2.jpg" 
                      alt="Profile" 
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="flex space-x-1">
                        <span className="w-6 h-2 bg-gray-300 rounded"></span>
                        <span className="w-6 h-2 bg-gray-300 rounded"></span>
                        <span className="w-6 h-2 bg-gray-300 rounded"></span>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex space-x-1">
                      <span className="w-16 h-2 bg-gray-300 rounded"></span>
                      <span className="w-10 h-2 bg-gray-300 rounded"></span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-2 md:gap-4">
                  <div className="relative h-20 md:h-24 lg:h-28 w-full">
                    <Image src="/images/q1.jpg" alt="Project Image 1" fill className="rounded-md object-cover" />
                  </div>
                  <div className="relative h-20 md:h-24 lg:h-28 w-full">
                    <Image src="/images/q2.jpg" alt="Project Image 2" fill className="rounded-md object-cover" />
                  </div>
                  <div className="relative h-20 md:h-24 lg:h-28 w-full">
                    <Image src="/images/q3.jpg" alt="Project Image 3" fill className="rounded-md object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-xs md:text-sm text-gray-500 mt-4">
          © 2025 Sanzystore - All rights reserved
        </div>
      </div>
    </div>
  );
}