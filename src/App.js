import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import AppRoutes from './components/AppRoutes';
import { useState } from 'react'; 
import Navbar from './components/Navbar';
function App() {
  const [ darktheme, setDarktheme ] = useState(false);

  return (
    <div className={darktheme ? 'dark' : ''}>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darktheme={darktheme} setDarktheme = {setDarktheme} />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
