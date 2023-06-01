import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Logo from "./assets/shared/logo.svg";
import { path } from "./data";
import { destinations, crew, technology } from "./data/data.json";
import Loading from "./components/Loading";

const HomeLazy = lazy(() => import("./pages/Home"));
const DestinationLazy = lazy(() => import("./pages/Destination"));
const CrewLazy = lazy(() => import("./pages/Crew"));
const TechnologyLazy = lazy(() => import("./pages/Technology"));

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname.slice(1);
    const currPage = page.charAt(0).toUpperCase() + page.slice(1);
    if (!currPage) {
      setActiveTab("Home");
    } else {
      setActiveTab(currPage);
    }
  }, [location]);
  return (
    <>
      <header>
        <nav>
          <Navbar
            Logo={Logo}
            path={path}
            activeTab={activeTab}
            onActive={setActiveTab}
          />
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomeLazy />} />
            <Route
              path="/destination"
              element={<DestinationLazy data={destinations} />}
            />
            <Route path="/crew" element={<CrewLazy data={crew} />} />
            <Route
              path="/technology"
              element={<TechnologyLazy data={technology} />}
            />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;
