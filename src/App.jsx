import soon from "../src/assets/soon.jpeg";
import "./index.css"

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img src={soon} alt="soon img" className="w-screen h-screen object-cover" />
    </div>
  );
}


export default App;