import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import Home from "./pages/main";

function App() {
  return (
      <Router>
        <Routes>
          <Route path={'/en'} element={<LandingPage/>} />
            <Route exact path={'/'} element={<Home/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
  );
}

export default App;
