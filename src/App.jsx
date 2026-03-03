import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import RootLayouts from "./components/layouts/RootLayouts";
import Error from "./components/pages/Error";
import About from "./components/Home/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
