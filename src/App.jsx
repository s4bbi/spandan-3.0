import { Routes, Route, BrowserRouter } from "react-router-dom";
// import EventPage from "./Pages/EventsPage";
import Homepage from "./Pages/HomePage";

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index element={<Homepage />}></Route>
          {/* <Route path="/Events" element={<EventPage />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;