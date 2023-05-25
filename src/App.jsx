import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, Destination, Crew, Technology } from './pages';
import Logo from './assets/shared/logo.svg';
import { path } from './data';
import { destinations, crew, technology } from './data/data.json';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const handleActiveTabs = (currPage) => {
    console.log(currPage);
    setActiveTab(currPage);
  };

  return (
    <>
      <header>
        <nav>
          <Navbar
            Logo={Logo}
            path={path}
            activeTab={activeTab}
            onActive={handleActiveTabs}
          />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destination"
            element={<Destination data={destinations} />}
          />
          <Route path="/crew" element={<Crew data={crew} />} />
          <Route
            path="/technology"
            element={<Technology data={technology} />}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
