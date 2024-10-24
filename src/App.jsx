import soon from "../src/assets/soon.jpeg";

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img src={soon} alt="soon img" className="w-screen h-screen object-fill" />
      <p>ABC</p>
    </div>
  );
}


export default App;