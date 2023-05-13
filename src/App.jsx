import { Routes, Route } from 'react-router-dom';
import Tabs from './components/Tabs';
import { Home, Destination, Crew, Technology } from './pages';
import Logo from './assets/shared/logo.svg';
import { path } from './data';

const App = () => {
  return (
    <>
      <header>
        <nav>
          <Tabs Logo={Logo} path={path} />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
