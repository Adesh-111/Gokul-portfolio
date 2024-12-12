import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import Experience from "./src/components/Experience/Experience";
import Cybersec from "./src/components/Experience/Cybersec/Cybersec";
import Navbar from "./src/components/Navbar/Navbar";
import Footer from "./src/components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/experience/cybersec",
    element: <>
    <Navbar />
    <Cybersec />
    <Footer />
    </>,
  },
  {
    path: "/experience",
    element: <>
    <Navbar />
    <Experience />
    <Footer />
    </>,
  },
  {
    path: "/contact",
    element: <>
    <Navbar />
    <Contact />
    <Footer />
    </>,
  },
  {
    path: "/about",
    element: <>
    <Navbar />
    <About />
    <Footer />
    </>,
  },
]);

export default router;
