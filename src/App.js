import React, { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./Components/Style.scss";
import "./index.scss";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Whatwedo from "./Pages/AboutUs/Whatwedo";
import OurGuarantee from "./Pages/AboutUs/OurGuarantee";
import FlexiFinance from "./Pages/Services/FlexiFinance";
import FinanceCalculator from "./Pages/Services/FinanceCalculator";
import { Provider } from "react-redux";
import FleetManagement from "./Pages/Services/FleetManagement";
import ServiceGuarantee from "./Pages/Services/ServiceGuarantee";
import Newsletter from "./Pages/News/Newsletter";
import Articles from "./Pages/News/Articles";
import ProductDetails from "./Components/ProductCatalogue/ProductDetails";
import ShoppingCart from "./Pages/ShoppingCart";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import Error from "./Pages/Error";
import ExRentClea from "./Pages/Products/Ex-Rental & Clearance/ExRentClea";
import Home from "./Pages/Home";
import { store } from "./Redux/store";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ex-rental-clearance" element={<ExRentClea />}></Route>
          <Route path="/what-we-do" element={<Whatwedo />}></Route>
          <Route path="/our-guarantee" element={<OurGuarantee />}></Route>
          <Route path="/flexikitch-finance" element={<FlexiFinance />}></Route>
          <Route
            path="/finance-calculator"
            element={<FinanceCalculator />}
          ></Route>
          <Route path="/fleet-management" element={<FleetManagement />}></Route>
          <Route path="/services" element={<ServiceGuarantee />}></Route>
          <Route path="/latestnews" element={<Newsletter />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route  path="/products/:path" element={<ProductDetails />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
          <Route path="/checkout/shipping" element={<Checkout />}></Route>
          <Route path="/checkout/payment" element={<Payment/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
