import Header from "./components/Header";
import Paper from "./components/Paper";
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full flex items-center justify-center">
      <Paper>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Paper>
    </div>
  )
}
