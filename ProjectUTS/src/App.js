import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LOGIN from "./pages/LOGIN";
import Profil from "./pages/Profil";
import Beranda from "./pages/Beranda";
import Perpustakaan from "./pages/Perpustakaan";
import Notif from "./pages/Notif";
import Desktop2 from "./pages/Desktop2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profil":
        title = "";
        metaDescription = "";
        break;
      case "/beranda":
        title = "";
        metaDescription = "";
        break;
      case "/perpustakaan1":
        title = "";
        metaDescription = "";
        break;
      case "/notif":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LOGIN />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/beranda" element={<Beranda />} />
      <Route path="/perpustakaan1" element={<Perpustakaan />} />
      <Route path="/notif" element={<Notif />} />
      <Route path="/desktop-2" element={<Desktop2 />} />
    </Routes>
  );
}
export default App;
