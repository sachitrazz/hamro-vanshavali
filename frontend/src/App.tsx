import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Tree from "./pages/Tree";
import MemberProfile from "./pages/MemberProfile";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/members" element={<Members />} />

        <Route path="/tree" element={<Tree />} />

        <Route
          path="/member/:id"
          element={<MemberProfile />}
        />

        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;