import './App.css';
import { useMediaQuery } from "react-responsive";
import Landing from './Auth/Landing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
import OrderSheet from './Ordersheet/OrderSheet';
import Address from './Ordersheet/Address';
import SignupComplete from './Auth/SignupComplete';
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
import PaymentSuccess from './Payment/PaymentSuccess';
import PaymentDetail from './Payment/PaymentDetail';
import ProfileProductInfo from './MyProfile/ProfileProductInfo';
import PaymentHistory from './Payment/PaymentHistory';
import ProfileVerificationSuccess from './MyProfile/ProfileVerificationSuccess';
import ProfileRefund from './MyProfile/ProfileRefund';
import ProfileRefundSuccess from './MyProfile/ProfileRefundSuccess';
import ProfileRefundFail from './MyProfile/ProfileRefundFail';
import Notice from './Notice/Notice';
import NoticePost from './Notice/NoticePost';
import ProfilePayment from './MyProfile/ProfilePayment';
import ProfileMain from './MyProfile/ProfileMain';
import ProfileLimit from './MyProfile/ProfileLimit';
import ProfilePoint from './MyProfile/ProfilePoint';
import ProfileVerification from './MyProfile/ProfileVerification';
import PaymentMethod from "./Payment/PaymentMethod"
import ReviewSelect from './Review/ReviewSelect';
import ReviewFail from './Review/ReviewFail';
import ReviewSuccess from './Review/ReviewSuccess';
import ProfileReview from './MyProfile/ProfileReview';
import WishDealDefault from './Wishdeal/WishDealDefault';
import WishDealNotURL from "./Wishdeal/WishDealNotURL";
import ProfileDelete from './MyProfile/ProfileDelete';
import Signup from './Auth/Signup';
import PaymentAccountVeri from './MyProfile/PaymentAccountVeri';
import PaymentARS from './MyProfile/PaymentARS';
import AlarmPost from './Alarm/AlarmPost';
import PaymentAddAccount from './MyProfile/PaymentAddAccount';
import TimeDeal from './TimeDeal/TimeDeal';
import TimeOrder from "./TimeDeal/TimeOrder"
import Alarm from './Alarm/Alarm';
import TimeDealDetail from "./TimeDeal/TimeDealDetail"
import PaymentSchedule from './Payment/PaymentSchedule';
import PaymentFail from './Payment/PaymentFail';
import PaymentRefundSuccess from './Payment/PaymentRefundSuccess';



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
        <Route path="/signup/main" component={Signup} />
        <Route path="/signupprofile" component={SignupProfile} />
        <Route path="/signup/complete" component={SignupComplete} />
        <Route path="/ordersheet" component={OrderSheet} />
        <Route path="/address" component={Address} />
        <Route path="/review/main" component={ReviewMain} />
        <Route path="/review/post/:pk" component={ReviewPost} />
        <Route path="/review/select" component={ReviewSelect} />
        <Route path="/review/write" component={ReviewWrite} />
        <Route path="/review/success" component={ReviewSuccess} />
        <Route path="/review/fail" component={ReviewFail} />
        <Route path="/service/main" component={ServiceReview} />
        <Route path="/service/write" component={Write} />
        <Route path="/wishdeal/main" component={WishDeal} />
        <Route path="/wishdeal/default" component={WishDealDefault} />
        <Route path="/wishdeal/url/success" component={WishDealURL} />
        <Route path="/wishdeal/url/fail" component={WishDealNotURL} />
        <Route path="/notice" component={Notice} />
        <Route path="/noticepost" component={NoticePost} />
        <Route path="/profile/main" component={ProfileMain} />
        <Route path="/profile/limit" component={ProfileLimit} />
        <Route path="/profile/verification/main" component={ProfileVerification} />
        <Route path="/profile/verification/success" component={ProfileVerificationSuccess} />
        <Route path="/profile/review" component={ProfileReview} />
        <Route path="/profile/point" component={ProfilePoint} />
        <Route path="/profile/edit" component={ProfileEdit} />
        <Route path="/profile/address/edit" component={ProfileAddressEdit} />
        <Route path="/profile/payment/main" component={ProfilePayment} />
        <Route path="/profile/payment/refund" component={ProfileRefund} />
        <Route path="/profile/payment/refundsuccess" component={ProfileRefundSuccess} />
        <Route path="/profile/payment/refundfail" component={ProfileRefundFail} />
        <Route path="/payment/method" component={PaymentMethod} />
        <Route path="/profile/product/info" component={ProfileProductInfo} />
        <Route path="/profile/delete" component={ProfileDelete} />
        <Route path="/payment/schedule" component={PaymentSchedule} />
        <Route path="/payment/detail" component={PaymentDetail} />
        <Route path="/payment/history" component={PaymentHistory} />
        <Route path="/payment/success" component={PaymentSuccess} />
        <Route path="/payment/fail" component={PaymentFail} />
        <Route path="/payment/refund/success" component={PaymentRefundSuccess} />
        <Route path="/paymentaccountveri" component={PaymentAccountVeri} />
        <Route path="/paymentars" component={PaymentARS} />
        <Route path="/alarm" component={Alarm} />
        <Route path="/alarmpost" component={AlarmPost} />
        <Route path="/addaccount" component={PaymentAddAccount} />
        <Route path="/timedeal" component={TimeDeal} />
        <Route path="/timeorder" component={TimeOrder} />
        <Route path="/detail" component={TimeDealDetail} />
      </Switch>
    </Router>
  );
}

export default App;
