import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import CandidateLogin from "./components/pages/CandidateLogin";
import CandidateSignUp from "./components/pages/CandidateSignUp";
import CompanyEndpoint from "./components/pages/CompanyEndpoint";
// import Hire from "./components/pages/Hire";
// import FindJob from "./components/pages/FindJob";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<CandidateLogin />} />
        <Route path="/signup" element={<CandidateSignUp />} />
        <Route path="/hire" element={<CompanyEndpoint />} />
      </Routes>
    </Router>
  );
};
export default App;
