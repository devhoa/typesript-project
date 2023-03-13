import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TiKhonCNhn from "./pages/TiKhonCNhn";
import QunMtKhu from "./pages/QunMtKhu";
import QunMtKhu1 from "./pages/QunMtKhu1";
import SaiMk from "./pages/SaiMk";
import NgNhp from "./pages/NgNhp";
import { useEffect } from "react";

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
      case "/qun-mt-khu":
        title = "";
        metaDescription = "";
        break;
      case "/qun-mt-khu1":
        title = "";
        metaDescription = "";
        break;
      case "/sai-mk":
        title = "";
        metaDescription = "";
        break;
      case "/ng-nhp":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TiKhonCNhn />} />

      <Route path="/qun-mt-khu" element={<QunMtKhu />} />

      <Route path="/qun-mt-khu1" element={<QunMtKhu1 />} />

      <Route path="/sai-mk" element={<SaiMk />} />

      <Route path="/ng-nhp" element={<NgNhp />} />
    </Routes>
  );
}
export default App;
