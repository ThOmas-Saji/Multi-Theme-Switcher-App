import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SideBar from './components/Sidebar';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  const isSidebar = theme === "theme2";

  return (
    <div className={`w-full transition-all duration-500 ${isSidebar ? "lg:pl-64" : ""}`}>
      {isSidebar && (
        <SideBar />
      )}

      <Header />

      <main className={`${isSidebar ? "pl-24 sm:pl-0" : ""}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
