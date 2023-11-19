
import './App.css'
import { BrowserRouter,Route,Routes  } from "react-router-dom";

import Refund from './Components/Refund';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import Main from './Components/Main';


function App() {
  return (
    <div>
    <BrowserRouter>      
      <Routes >       
        <Route path="/" element={<Main />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      
      
    </BrowserRouter>
    </div>
      
  
  )
}

export default App
