import './App.css';
import { Outlet } from 'react-router-dom';
import Hader from './templates/Hader';
import Footer from './templates/Footer';

function App() {



  
  return (
    <div>
      <Hader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
