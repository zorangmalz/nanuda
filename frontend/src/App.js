import './App.css';
import { useMediaQuery } from "react-responsive";
import Landing from './Auth/Landing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import OrderSheet from './Ordersheet/OrderSheet';
import Address from './Ordersheet/Address';
import PaymentFail from './Ordersheet/PaymentFail';
import PaymentSuccess from './Ordersheet/PaymentSuccess';
import SingupComplete from './Auth/SignupComplete';
import ReviewMain from './Review/ReviewMain';
import ReviewPost from './Review/ReviewPost';
import ReviewWrite from './Review/ReviewWrite';
import ServiceReview from './Service/ServiceReview';
import Write from './Service/Write';
import WishDeal from './Wishdeal/WishDeal';
import WishDealURL from './Wishdeal/WishDealURL';
import SignupProfile from './Auth/SignupProfile';
import ProfileEdit from './MyProfile/ProfileEdit';
import ProfileAddressEdit from './MyProfile/ProfileAddressEdit';
import ProfilePaymentSuccess from './MyProfile/ProfilePaymentSuccess';
import ProfilePaymentFail from './MyProfile/ProfilePaymentFail';
import ProfilePaymentDetail from './MyProfile/ProfilePaymentDetail';
import ProfileProductInfo from './MyProfile/ProfileProductInfo';
import ProfileProduct from './MyProfile/ProfileProduct';


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
        <Route path="/landing" component={Landing} />
        <Route path="/signup" component={SingupComplete} />
        <Route path="/signupprofile" component={SignupProfile} />
        <Route path="/ordersheet" component={OrderSheet} />
        <Route path="/address" component={Address} />
        <Route path="/paymentfail" component={PaymentFail} />
        <Route path="/paymentsuccess" component={PaymentSuccess} />
        <Route path="/review" component={ReviewMain} />
        <Route path="/reviewpost" component={ReviewPost} />
        <Route path="/reviewwrite" component={ReviewWrite} />
        <Route path="/servicereview" component={ServiceReview} />
        <Route path="/servicewrite" component={Write} />
        <Route path="/wishdeal" component={WishDeal} />
        <Route path="/wishdealurl" component={WishDealURL} />
        <Route path="/profileedit" component={ProfileEdit} />
        <Route path="/profileaddressedit" component={ProfileAddressEdit} />
        <Route path="/profilepaymentsuccess" component={ProfilePaymentSuccess} />
        <Route path="/profilepaymentfail" component={ProfilePaymentFail} />
        <Route path="/profilepaymentdetail" component={ProfilePaymentDetail} />
        <Route path="/profileproduct" component={ProfileProduct} />
        <Route path="/profileproductinfo" component={ProfileProductInfo} />
      </Switch>
    </Router>
  );
}

export default App;
