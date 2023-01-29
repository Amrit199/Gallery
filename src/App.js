import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Search from "./pages/Search";
import SearchVideos from "./pages/SearchVideos";
import Account from "./pages/Account";
import Protected from "./components/Protected";

function App() {
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  return (
    <AuthContextProvider>
      <Navbar searchTerm={(text) => setSearchText(text)} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home searchText={searchText} />} />
        <Route
          path="/search/:searchText/"
          element={<Search searchText={searchText} />}
        />
        <Route
          path="/search/videos/:searchText"
          element={<SearchVideos searchText={searchText} />}
        />
        <Route path="/videos" element={<Videos searchText={searchText} />} />
        <Route
          path="/account"
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
