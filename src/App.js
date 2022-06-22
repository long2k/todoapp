import './App.css';
import "./assets/boxicons-2.1.2/css/boxicons.min.css";
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './page/home/Home';
function App() {
  return (
   <BrowserRouter>
      <Routers/>
   </BrowserRouter>
  );
}

export default App;
