
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarPage from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from './pages/Contact';
import ItemList from "./pages/itemList";
import Item from "./pages/item";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Router>
          <NavbarPage/>
          <div className="max-w-6xl mx-auto pt-20">
              <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/about' element={<About/>}></Route>
                  <Route path='/contact' element={<ContactUs/>}></Route>
                  <Route path='/itemList' element={<ItemList/>}></Route>
                  <Route path='/item/:title' element={<Item/>}></Route>
                  <Route path='*' element={<NotFound/>}></Route>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
