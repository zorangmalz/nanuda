import logo from './logo.svg';
import './App.css';
import { useMediaQuery } from "react-responsive"
import PaymentFail from './Ordersheet/PaymentFail';
import TOrderSheet from './Timedeal/TOrderSheet';

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
    <>
      <WishDealURL />
    </>
  );
}

export default App;
