import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Course from './Pages/Course';
import Contact from './Pages/Contact';
import PenetrationTesting from './Pages/subpages/PenetrationTesting';
import AdvancedBugHunting from './Pages/subpages/AdvancedBugHunting';
import DefensiveSecurity from './Pages/subpages/DefensiveSecurity';
import OffensiveSecurity from './Pages/subpages/OffensiveSecurity';
import EthicalHackingEssentials from './Pages/subpages/EthicalHackingEssentials';
import DigitalForensicsEssentials from './Pages/subpages/DigitalForensicsEssentials';

const Navigate = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/penetration-testing" element={<PenetrationTesting />} />
        <Route path="/advanced-bug-hunting" element={<AdvancedBugHunting />} />
        <Route path="/defensive-security" element={<DefensiveSecurity />} />
        <Route path="/offensive-security" element={<OffensiveSecurity />} />
        <Route path="/ethical-hacking-essentials" element={<EthicalHackingEssentials />} />
        <Route path="/digital-forensics-essentials" element={<DigitalForensicsEssentials />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default Navigate;
