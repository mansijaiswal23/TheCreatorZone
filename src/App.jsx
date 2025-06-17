import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
 import Register from './pages/Register';
// import Payment from './pages/Payment';
import PaymentPage from "./pages/PaymentPage";

import FixedComponent from './components/FixedComponent';
import { LayoutProvider } from './context/LayoutContext';

import Terms from './faq/Terms';
import Privacy from './faq/Privacy';
import Contact from './faq/Contact';
import Disclaimer from './faq/Disclaimer';
import Refund from './faq/Refund';
// _app.js or main entry file
import '@fontsource/eb-garamond/400.css';
import '@fontsource/eb-garamond/700.css';



function App() {
  return (
    <LayoutProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<PaymentPage />} />

        {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact Us/>}/>
          <Route path="/disclaimer" element={<Disclaimer />}/>
          <Route path="/refund" element={<Refund Policy />}/>

      </Routes>
              <FixedComponent />
    </Router>
              </LayoutProvider>

    
  );
}

export default App;
