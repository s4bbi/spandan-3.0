import soon from "../src/assets/soon.webp";
import soon_phone from "../src/assets/soon_phone.webp";
import "./index.css"

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img src={soon} alt="soon img" className="w-screen h-screen object -cover hidden md:flex" />
      <img src={soon_phone} alt="phone img" className="w-screen h-screen object-cover flex md:hidden"/>
    </div>
  );
}


export default App;