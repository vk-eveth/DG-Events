import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/i/About-Us" element={<AboutPage />} />
        <Route path="/i/services" element={<ServicesPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}
export default App;