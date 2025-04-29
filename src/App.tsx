import Header from "./components/Header";
import Paper from "./components/Paper";
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Articles from "./pages/Articles";
import Artworks from "./pages/Artworks";
import Artwork from "./components/Artwork";

export default function App() {
  return (
    <div className="w-full flex items-center justify-center d-respira">
      <Paper>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="/articles/:slug" element=<Article /> />
            <Route path="/artworks/:slug" element=<Artwork /> />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Paper>
    </div>
  )
}
