import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const App = () => {
    return (
       <div className="h-screen w-screen flex flex-col bg-black mt-0">
        <Navbar />
        <Footer />
      </div>
    );
  }
  
  export default App;