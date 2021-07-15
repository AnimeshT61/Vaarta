import Navbar from "./components/Navbar.js";
import Features from "./components/Features.js";
import Upcoming from "./components/Upcoming.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Features/>
      <Upcoming/>
    </div>
  );
}

export default App;
