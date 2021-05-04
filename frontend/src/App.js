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
import Notice from './Notice/Notice';
import NoticePost from './Notice/NoticePost';
import ProfilePayment from './MyProfile/ProfilePayment';
import ProfileMain from './MyProfile/ProfileMain';
import ProfileLimit from './MyProfile/ProfileLimit';
import ProfilePoint from './MyProfile/ProfilePoint';
import ProfileVerification from './MyProfile/ProfileVerification';
import ReviewSelect from './Review/ReviewSelect';
import ReviewFail from './Review/ReviewFail';
import ReviewSuccess from './Review/ReviewSuccess';
import ProfileReview from './MyProfile/ProfileReview';
import WishDealDefault from './Wishdeal/WishDealDefault';
import WishDealNotURL from "./Wishdeal/WishDealNotURL";
import ProfileDelete from './MyProfile/ProfileDelete';
import Signup from './Auth/Signup';


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
        <Route path="/signup" component={Signup} />
        <Route path="/signupprofile" component={SignupProfile} />
        <Route path="/ordersheet" component={OrderSheet} />
        <Route path="/address" component={Address} />
        <Route path="/paymentfail" component={PaymentFail} />
        <Route path="/paymentsuccess" component={PaymentSuccess} />
        <Route path="/review" component={ReviewMain} />
        <Route path="/reviewpost" component={ReviewPost} />
        <Route path="/reviewselect" component={ReviewSelect} />
        <Route path="/reviewwrite" component={ReviewWrite} />
        <Route path="/reviewsuccess" component={ReviewSuccess} />
        <Route path="/reviewfail" component={ReviewFail} />
        <Route path="/servicereview" component={ServiceReview} />
        <Route path="/servicewrite" component={Write} />
        <Route path="/wishdeal" component={WishDeal} />
        <Route path="/wishdealdefault" component={WishDealDefault} />
        <Route path="/wishdealurl" component={WishDealURL} />
        <Route path="/wishdealnoturl" component={WishDealNotURL} />
        <Route path="/notice" component={Notice} />
        <Route path="/noticepost" component={NoticePost} />
        <Route path="/profilemain" component={ProfileMain} />
        <Route path="/profilelimit" component={ProfileLimit} />
        <Route path="/profileverification" component={ProfileVerification} />
        <Route path="/profilereview" component={ProfileReview} />
        <Route path="/profilepoint" component={ProfilePoint} />
        <Route path="/profileedit" component={ProfileEdit} />
        <Route path="/profileaddressedit" component={ProfileAddressEdit} />
        <Route path="/profilepayment" component={ProfilePayment} />
        <Route path="/profilepaymentsuccess" component={ProfilePaymentSuccess} />
        <Route path="/profilepaymentfail" component={ProfilePaymentFail} />
        <Route path="/profilepaymentdetail" component={ProfilePaymentDetail} />
        <Route path="/profileproduct" component={ProfileProduct} />
        <Route path="/profileproductinfo" component={ProfileProductInfo} />
        <Route path="/profiledelete" component={ProfileDelete} />
      </Switch>
    </Router>
  );
}

export default App;
