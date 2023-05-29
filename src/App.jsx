import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { Home, Destination, Crew, Technology } from "./pages";
import Logo from "./assets/shared/logo.svg";
import { path } from "./data";
import { destinations, crew, technology } from "./data/data.json";
import { Grid } from "react-loader-spinner";

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

function Loading() {
  return (
    <div className="absolute inset-0 z-20 flex h-screen items-center justify-center bg-[#0c0e17]">
      <Grid
        height="80"
        width="80"
        color="#fff"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
