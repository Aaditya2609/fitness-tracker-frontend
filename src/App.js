import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ExercisesPage from './Pages/ExercisesPage';
import GoalsPage from './Pages/GoalsPage';
import FoodPage from './Pages/FoodPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinksPage from './Pages/LinksPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/goal" element={<GoalsPage />} />
        <Route path="/links" element={<LinksPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
    
  );
}

export default App;
