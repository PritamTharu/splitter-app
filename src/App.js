import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navpage from './pages/Navpage';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage'
import Footerpage from './pages/Footerpage'
import Loginsigninpage from './pages/Loginsigninpage';
function App() {
  return (
    <>
    <Navpage/>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path='/loginsigninpage' element={<Loginsigninpage/>}/>
      <Route exact path="/about" element={<Aboutpage/>} />
    </Routes>
    </BrowserRouter>
    <Footerpage/>

    </>
  );
}
export default App;
