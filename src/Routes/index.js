import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../layout/Header';
import Accueil from '../pages/Accueil';
import Presentation from '../pages/Presentation';
import Error from '../pages/Error';
import Footer from '../layout/Footer';
import ScrollToTop from 'react-scroll-to-top';

export default function CustomsRoutes() {
  return (
    <Router>
      <Header />
  

      <Routes>
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/accueil" element={<Accueil />} />
        <Route exact path="/presentationMe" element={<Presentation />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />

      <ScrollToTop />
    </Router>
  );
}
