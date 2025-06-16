import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
 import Register from './pages/Register';
// import Payment from './pages/Payment';
import PaymentPage from "./pages/PaymentPage";

import FixedComponent from './components/FixedComponent';

import Terms from './faq/Terms';
// _app.js or main entry file
import '@fontsource/eb-garamond/400.css';
import '@fontsource/eb-garamond/700.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<PaymentPage />} />

        {/* <Route path="/payment" element={<Payment />} /> */}
          <Route path="/terms" element={<Terms />} />

      </Routes>
              <FixedComponent />

    </Router>
    
  );
}

export default App;
