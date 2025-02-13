import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModeSelection from './pages/ModeSelection';
import AestheticTodo from './pages/AestheticTodo';
import BoostTodo from './pages/BoostTodo';

export default function App() { // Nom de composant en PascalCase
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModeSelection />} />
        
        <Route 
          path="/aesthetic" 
          element={<AestheticTodo backgroundImage="../public/assets/aesthetic.png" />} 
        />
        
        <Route 
          path="/boost" 
          element={<BoostTodo backgroundImage="../public/assets/boost.png" />} 
        />
      </Routes>
    </Router>
  );
}