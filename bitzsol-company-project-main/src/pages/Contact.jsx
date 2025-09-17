import { ArrowDownLeftIcon ,ChevronDownIcon, } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
    <div className="md:px-80 py-19  lg:px-120 overflow-hidden">
  <div className='flex justify-center  gap-0.5 bg-black rounded-full border-solid border-2 border-[#141414] '>
    <img src="availible.JPG" alt="logo" className="w-5 h-5  md:w-5 md:h-5 pt-1" />
    <span className="text-white whitespace-nowrap">Availible now.Only 3 spots left</span>
    
    </div>
    </div>
<div className="absolute top-[90px] left-1/2 -translate-x-1/2 z-0 
                w-[100%] max-w-[800px] h-[300px] md:h-[400px] lg:h-[500px] 
                bg-dots rounded-[340px]">
</div>

<div className="flex items-center justify-center bg-black relative z-10 px-4">
  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold lg:font-extrabold shine-text text-center">
    <div className="my-2">Automation Agency</div>
    <div className="my-2">Beyond ✦ Limits.</div>
    <div className="my-2">Amplified With AI.</div>
  </div>
</div>

<div className="text-white text-2xl font-light my-12">Design services at your fingertips,Pause or cancel at anytime.</div>
<div className="flex justify-center items-center bg-black my-6.5">
  <button className="flex justify-center items-center relative px-7 py-4 font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-r from-[#FC66BD] via-[#0064DA] to-[#03D9AF] hover:bg-[linear-gradient(90deg,#FC66BD_21.42%,#0064DA_60.71%,#03D9AF_100%)] hover:bg-[length:100%_100%] hover:animate-[]">
    {/* animated gradient background */}
    <span className="absolute inset-0 shines-text"></span>

    {/* button content */}
    <span className="relative z-10 flex items-center gap-2">
      Learn More
      <ArrowDownLeftIcon className="h-4 w-4 rotate-270" aria-hidden="true" />
    </span>
  </button>
</div>
<div className="w-full max-w-[700px] h-[200px] mx-auto flex flex-col items-center justify-center relative overflow-hidden bg-[#010101]">
  {/* Heading */}
  <p className="text-white text-[14px] font-[400] leading-[14px] font-['Plus Jakarta Sans'] mb-6 text-center">
    Our services are featured on
  </p>

  {/* Logos Row with Scroll Effect */}
  <div className="logo-slider relative top-[30px] w-full overflow-hidden">
    <div className="logo-track flex items-center gap-10 sm:gap-16 animate-scroll">
      <img src="Container.png" alt="Grapho" className="h-[30px] sm:h-[45px]" />
      <img src="Container (1).svg" alt="Signum" className="h-[30px] sm:h-[45px]" />
      <img src="Container (1).png" alt="Vectra" className="h-[30px] sm:h-[45px]" />
      <img src="Container (2).png" alt="Optimal" className="h-[30px] sm:h-[45px]" />
      {/* repeat again for infinite loop */}
      <img src="Container.png" alt="Grapho" className="h-[30px] sm:h-[45px]" />
      <img src="Container (1).svg" alt="Signum" className="h-[30px] sm:h-[45px]" />
      <img src="Container (1).png" alt="Vectra" className="h-[30px] sm:h-[45px]" />
      <img src="Container (2).png" alt="Optimal" className="h-[30px] sm:h-[45px]" />
    </div>
  </div>

  {/* Blur effect left/right */}
  <div className="absolute left-0 top-0 h-full w-[50px] sm:w-[100px] bg-gradient-to-r from-[#010101] to-transparent z-10"></div>
  <div className="absolute right-0 top-0 h-full w-[50px] sm:w-[100px] bg-gradient-to-l from-[#010101] to-transparent z-10"></div>
</div>

     <div className="bg-black text-white py-16 md:py-24">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12 px-6 md:px-12 lg:px-20">
    
    {/* Left Content */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
        Flexible AI
        <span className="text-pink-500"> workflow automation</span>
        <span> for technical teams</span>
        <span className="text-black"> hello world of the</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl leading-relaxed mt-6">
        Build with the precision of code or the speed of drag-n-drop. 
        Host with on-prem control or in-the-cloud convenience.  
        R!n gives you more freedom to implement multi-step AI agents 
        and integrate apps than any other tool.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end">
      <div className="rounded-2xl bg-[#111] p-4 shadow-lg max-w-[350px] md:max-w-[400px] w-full">
        <img
          src="Image Tab 1.png"
          alt="Lightning"
          className="rounded-lg w-full object-contain"
        />
      </div>
    </div>

  </div>
</div>

    <div className="bg-black text-white py-12">
      <div className="  px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Ai Automation{" "}
          <span className="text-pink-500">Portfolio</span>
        </h2>
</div>
    </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12">
  
  {/* Card 1 */}
  <Link to="/socail" className="w-full">
    <div className="relative w-full max-w-sm mx-auto bg-[#1c1c1c] rounded-2xl p-6 overflow-hidden shine-box cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="text-white text-base md:text-xl lg:text-2xl font-semibold pb-3 text-center">
        SOCIAL MEDIA CONTENT PUBLISHER
      </div>
      <img
        src="Screenshot_20250916-132643.jpg"
        alt=""
        className="mb-4 w-full rounded-lg object-contain"
      />
      <div className="text-white ">
       An n8n workflow utilizing OpenAI GPT-4 and LangChain 
      </div>
    </div>
  </Link>

  {/* Card 2 */}
   <Link to="/lead" className="w-full">
    <div className="relative w-full max-w-sm mx-auto bg-[#1c1c1c] rounded-2xl p-6 overflow-hidden shine-box cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="text-white text-base md:text-xl lg:text-2xl font-semibold pb-3 text-center">
        LEAD QUALIFICATION AND DEAL CREATION
      </div>
      <img
        src="Screenshot_20250916-132652.jpg"
        alt=""
        className="mb-4 w-full rounded-lg object-contain"
      />
      <div className="text-white ">
       This n8n workflow automates cold email response analysis using Gmail
      </div>
    </div>
  </Link>

  {/* Card 3 */}
   <Link to="/dynamic" className="w-full">
    <div className="relative w-full max-w-sm mx-auto bg-[#1c1c1c] rounded-2xl p-6 overflow-hidden shine-box cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="text-white text-base md:text-xl lg:text-2xl font-semibold pb-3 text-center">
        DYNAMIC USER INTERVIEW WORKFLOW
      </div>
      <img
        src="Screenshot_20250916-132658.jpg"
        alt=""
        className="mb-4 w-full rounded-lg object-contain"
      />
      <div className="text-white ">
       Automates AI-driven user interviews using n8n forms, Groq LLM
      </div>
    </div>
  </Link>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10 px-4 md:px-10 lg:px-20">
  {/* Card 2 */}
   <Link to="/multi" className="w-full">
    <div className="relative w-full max-w-sm mx-auto bg-[#1c1c1c] rounded-2xl p-6 overflow-hidden shine-box cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="text-white text-base md:text-xl lg:text-2xl font-semibold pb-3 text-center">
        MULTI CHANNEL LEAD QUALIFICATION
      </div>
      <img
        src="Screenshot_20250916-132703.jpg"
        alt=""
        className="mb-4 w-full rounded-lg object-contain"
      />
      <div className="text-white ">
       This n8n workflow automates multi-channel lead qualification
      </div>
    </div>
  </Link>

  {/* Card 3 */}
<Link to="/ansa" className="w-full">
    <div className="relative w-full max-w-sm mx-auto bg-[#1c1c1c] rounded-2xl p-6 overflow-hidden shine-box cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="text-white text-base md:text-xl lg:text-2xl font-semibold pb-3 text-center">
        ASANA TASK RESCHEDULER & CLEANER
      </div>
      <img
        src="Screenshot_20250916-132709.jpg"
        alt=""
        className="mb-4 w-full rounded-lg object-contain"
      />
      <div className="text-white ">
       Automates Asana task management by rescheduling overdue
      </div>
    </div>
  </Link>
</div>

      <div className="py-10 relative overflow-hidden">
  <div className="bg-black border-2 border-[#0a0a0a] py-10 rounded-3xl relative text-center px-6 md:px-12 lg:px-20">
    
    {/* Logo */}
    <div className="flex justify-center">
      <img src="logo-light.svg (1).svg" alt="" className="w-28 md:w-32" />
    </div>

    {/* Dots Background */}
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] h-[200px] md:h-[300px] bg-dots rounded-[340px] z-0 opacity-30"></div>

    {/* Headings */}
    <div className="relative z-10">
      <h2 className="font-semibold text-3xl md:text-5xl text-white py-4">Let’s Turn Your</h2>
      <h2 className="font-semibold text-3xl md:text-5xl text-white pb-6">Dream Into Reality</h2>
      
      <p className="font-normal text-base md:text-xl text-[#b0b0b0] max-w-2xl mx-auto pb-7">
        We bring your vision to life with creativity and precision. Let’s make it happen.
      </p>
    </div>

    {/* Gradient Line */}
    <div className="flex justify-center py-4 relative z-10">
      <div className="w-40 md:w-64 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
    </div>

    {/* Button / Image */}
    <div className="flex justify-center relative z-10">
      <img src="Group 31.svg" alt="" className="w-32 md:w-40 h-10" />
    </div>

    {/* Footer Text */}
    <div className="flex justify-center text-[#b0b0b0] font-normal text-sm md:text-[16px] pt-3 relative z-10">
      © 2024 Bitzsol Inc. All rights reserved.
    </div>
  </div>
</div>

    
    </>
  );
}
