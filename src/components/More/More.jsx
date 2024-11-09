import React from 'react'
import leftarm from '../../assets/Images/left-arm.webp';
import rightarm from '../../assets/Images/right-arm.webp';
import { MorphBlendMesh } from 'three/examples/jsm/Addons.js';

const More = () => {
  return (
    
    <div className="bg-black text-white w-full ">
     
      <div className="p-[104px]">
        {/* Title */}
        <h1 className="text-5xl font-bold text-[#FFFF00] mt-[61px] font-gB ">
          Spandan, <span className="text-white">what's that?</span>
        </h1>
        
        {/* Main Content */}
        <div className="flex gap-[100px]">
          {/* Left Column */}
          <div className="pt-[104px]">
            <p className="text-[#535353] font-Exo 2 w-[350px] text-base">
              Welcome to <span className="text-[#FFFF00]">Spandan 3.0</span>, the annual techfest of GBPIET, Pauri-Garhwal, where innovation meets purpose! This year's theme, <span className="italic text-[#FFFF00]">'Rural Revive: Tech Solutions for Rural Challenges'</span> is dedicated to harnessing the power of technology to address the unique challenges faced by rural communities.
               </p>
            <img src={leftarm} alt="Robot Hand Left" class="max-w-s mt-[70px]"/>
          </div>

           {/* Center Text */}
        <div className="pt-[212px]">
          <p className="text-[#535353] font-Exo 2 w-[350px] text-base">
            Spandan 3.0 is an exciting platform for students, innovators, and tech enthusiasts to come together and explore ground-breaking ideas that can uplift rural areas. Through a series of competitions, workshops, and expert talks, participants will tackle real-world issues such as sustainable farming, access to education, healthcare innovations, and smart infrastructure solutions.
          </p>
            
        </div>

          {/* Right Column */}
          <div className="pt-[42px]">
            <p className="text-[#535353] font-Exo 2 w-[250px]">
              <span className="font-bold text-[#FFFF00]">Our goal</span> is to inspire practical, scalable tech solutions that can make a tangible difference in the lives of rural populations. Whether you're a seasoned developer or an emerging thinker, Spandan 3.0 offers a chance to make an impact while celebrating technological progress.
            </p>
            <img src={rightarm} alt="Robot Hand Left" class="max-w-xl mt-[30px] "/>
          </div>
        

       
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center">
          <p className="text-[#FFFF00] font-Exo 2 ">
            Join us in this mission to bridge the urban-rural divide and create a brighter, tech-enabled future for all!
          </p>
        </div>
        </div>
        
      </div>

  )
}

export default More
