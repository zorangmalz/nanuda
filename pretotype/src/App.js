import './App.css';
import React from "react"
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactPixel from "react-facebook-pixel"
import Home from './Home/Home';
import OrderSheet from './Ordersheet/OrderSheet';
import Address from './Ordersheet/Address';
import PaymentFail from './Ordersheet/PaymentFail';
import PaymentSuccess from './Ordersheet/PaymentSuccess';
import WishDeal from './Wishdeal/WishDeal';
import WishDealURL from './Wishdeal/WishDealURL';
import WishDealDefault from './Wishdeal/WishDealDefault';
import WishDealNotURL from "./Wishdeal/WishDealNotURL";

const advancedMatching = { em: 'jinsungone@haulfree.io' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
const options = {
  autoConfig: true,
  debug: false,
};
ReactPixel.init("2651248475173227", advancedMatching, options);


export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 451 })
  return isNotMobile ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 450 })
  return isMobile ? children : null
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ordersheet" component={OrderSheet} />
        <Route path="/address" component={Address} />
        <Route path="/paymentfail" component={PaymentFail} />
        <Route path="/paymentsuccess" component={PaymentSuccess} />
        <Route path="/wishdeal" component={WishDeal} />
        <Route path="/wishdealdefault" component={WishDealDefault} />
        <Route path="/wishdealurl" component={WishDealURL} />
        <Route path="/wishdealnoturl" component={WishDealNotURL} />
      </Switch>
    </Router>
  );
}

export default App;