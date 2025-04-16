import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoOverlay from "./pages/VideoOverlay";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* {loading ? (
        <VideoOverlay onVideoEnd={() => setLoading(false)} />
      ) : ( */}
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      {/* // )} */}
    </>
  );
};

export default App;
