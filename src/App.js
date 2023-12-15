import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navpage from './pages/Navpage';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage'
import Footerpage from './pages/Footerpage'
import Friendspage from './pages/Friendspage';
function App() {
  return (
    <>
    <Navpage/>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage/>}>
        <Route exact path='/friends' element={<Friendspage/>} />
      </Route>
      <Route exact path="/about" element={<Aboutpage/>} />
    </Routes>
    </BrowserRouter>
    <Footerpage/>

    </>
  );
}
export default App;
