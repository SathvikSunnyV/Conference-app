import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Committees from "./pages/Committees/Committees.jsx";
import CallForPapers from "./pages/CallforPapers/CallForPapers.jsx";
import Authors from "./pages/AuthorsInfo/Authors.jsx";
import Keynote from "./pages/KeynoteSpeakers/Keynote.jsx";
import Schedule from "./pages/ProgramSchedule/Schedule.jsx";
import Registration from "./pages/Registration/Registration";
import Travel from "./pages/TravelPlan/Travel.jsx";
import Workshop from "./pages/Workshop/Workshop.jsx";
import SpecialSession from "./pages/SpecialSession/SpecialSession";
import Contact from "./pages/ContactUs/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/cfp" element={<CallForPapers />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/speakers" element={<Keynote />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/special" element={<SpecialSession />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;