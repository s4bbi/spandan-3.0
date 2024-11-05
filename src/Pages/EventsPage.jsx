import React from 'react';

const EventsPage = () => {

  const competitions = [
    { name: "Hackathon", image: "src/assets/Images/Hackathon.webp" },
    { name: "Water Rocket Competition", image: "src/assets/Images/waterRocket.webp" },
    { name: "Bridge Design Competition", image: "src/assets/Images/bridgeDes.webp" },
    { name: "Auto-CAD Competition", image: "src/assets/Images/autoCAD.webp" },
    { name: "Project Exhibition", image: "src/assets/Images/projExh.webp" },
    { name: "Case Study", image: "src/assets/Images/caseStudy.webp" },
    { name: "Robo Race", image: "src/assets/Images/roboRace.webp" },
    { name: "Line Following Robot", image: "src/assets/Images/LFR.webp" },
    { name: "UI Designing", image: "src/assets/Images/UID.webp" },
    { name: "Startup Pitch", image: "src/assets/Images/startupP.webp" },
    { name: "Coding Competition", image: "src/assets/Images/UID.webp" },
    { name: "BGMI Event", image: "src/assets/Images/BGMI.webp" },
    { name: "Tech Quiz", image: "src/assets/Images/TechQuiz.webp" },
    { name: "Machine Learning Competition", image: "src/assets/Images/MLComp.webp" },
    { name: "Chess Competition", image: "src/assets/Images/chess.webp" },
    { name: "Egg Drop", image: "src/assets/Images/eggDrop.webp" },
    { name: "Imagine AI", image: "src/assets/Images/imagineAI.webp" },
    { name: "GEN-O-QUEST", image: "" },
  ];
  
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white p-8">
     
      <div className="flex flex-row items-center mt-16 text-left">
        <div className="flex flex-col items-start mr-8">
          <h1 className="text-6xl font-bold font-72 font-mR mb-4">EVENTS</h1>
          <p className="text-gray-300 max-w-lg leading-relaxed">
            Join Spandan 24 at GBPIET, Pauri-Garhwal, where we focus on <span className="text-yellow-400 font-eSB">Rural Revive: Tech Solutions for Rural Challenges.</span> 
            Our events offer a platform for innovation, collaboration, and problem-solving with a futuristic edge.
          </p>
        </div>
        <div>
          <img src="src/assets/Images/eventsHand.webp" alt="Robotic Hand" className="w-1/10 max-w-md" />
        </div>
      </div>
   

    <div className="bg-black min-h-screen p-4 text-center">
      <h1 className="text-yellow-400 text-4xl font-gB mb-8">Competitions</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
        {competitions.map((competition, index) => (
          <div key={index} className="relative bg-black border border-yellow-400 rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300">
            <img
              src={competition.image}
              alt={competition.name}
              className="w-full h-40 object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white font-semibold text-lg">{competition.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
};


export default EventsPage;