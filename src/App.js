import AboutTheGame from "./components/AboutTheGame";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Promote from "./components/Promote";
import Stream from "./components/Stream";
import StreamPage from "./components/StreamPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
    <>
    <Router>
 <div>
{/* <StreamPage/> */}

<Routes>
          <Route path="/aboutus" element ={<AboutUs />}/>
          <Route path="/blog" element={<Blog />}/>
            <Route path="/" element={ <Home />}/>
            <Route path="/stream" element={<Stream/>}/>
            <Route path="/promote" element={<Promote/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/aboutgame" element={<AboutTheGame/>}/>
            <Route path="/streamPage" element={<StreamPage/>}/>
            <Route path="/aboutthegame" element={<AboutTheGame/>}/>
      
        </Routes>



 </div>
 </Router>
 </>
  );
}

export default App;
