import React from 'react';
import { Sparkles } from 'lucide-react';

const logos = [
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542556_Frame%2018608.svg",
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542559_deloitte.svg",
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542554_Amazon%20logo.svg",
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542555_Frame%2018610.svg",
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542558_Frame%2018611.svg",
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542557_Frame%2018612.svg",
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255a_EY.svg",
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255d_toyota.svg",
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255c_Frame%2018608.svg",
  "https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255b_airbus.svg"
];

const LogoBlock = ({ className }: { className: string }) => (
  <div className={`clients-grid ${className}`}>
    {logos.map((src, i) => (
      <img key={i} src={src} loading="eager" alt="Client Logo" className="client-logo invert" />
    ))}
  </div>
);

export default function LogoMarquee() {
  return (
    <div className="logos-marquee pt-16 pb-24 flex flex-col items-center bg-black text-white">
      {/* Narrative Section */}
      <div className="flex flex-col gap-4 items-center text-center mb-16 px-6">
        {/* Tag */}
        <div className="flex items-center gap-2 text-blue-400 font-display font-extrabold tracking-widest text-xs uppercase">
          <Sparkles size={14} className="fill-blue-400" />
          <span>EXPERIENCE</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-white leading-none">
          companies that trust my skills
        </h2>
      </div>

      <div className="home-logo-wrapper w-full">
        <LogoBlock className="logo-animate" />
        <LogoBlock className="logo-animate" />
        <LogoBlock className="logo-animate" />
        <div className="home-logo-left-gradient !bg-linear-to-r from-black to-transparent"></div>
        <div className="home-logo-left-gradient right !bg-linear-to-l from-black to-transparent"></div>
      </div>
      <div className="home-logo-wrapper reverse w-full">
        <LogoBlock className="logo-animate-alt" />
        <LogoBlock className="logo-animate-alt" />
        <LogoBlock className="logo-animate-alt" />
        <div className="home-logo-left-gradient !bg-linear-to-r from-black to-transparent"></div>
        <div className="home-logo-left-gradient right !bg-linear-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
}