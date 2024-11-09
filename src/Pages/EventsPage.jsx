import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Description from "../components/Description/Description";

const App = () => {
    return (
       <div className="h-screen w-screen flex flex-col bg-black mt-0">
        <div>
        <Navbar />
        </div>
        <div>
        <Description />
        </div>
        <div>
        <Footer />
        </div>
      </div>
    );
  }
  
  export default App;