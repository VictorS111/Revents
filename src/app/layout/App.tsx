import AnimatedOutlet from "../router/AnimatedOutlet";
import Navbar from "./nav/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-10 mt-24">
        <AnimatedOutlet />
      </div>
    </div>
  );
}

export default App;
