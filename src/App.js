import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Register from './Components/register/Register';
import Home from './Components/home/Home';
import Login from './Login/Login';
import Dashboard from './Dashboard/dashboard/MainDashboard';
import Error from './Components/error/Error';
import Customerlist from './Components/list/Customerlist';
import Robotics from './Components/robotics/Robotics';
import OfficialPage from './Components/official/OfficialPage';
import TwillioPage from './Components/twillio/TwillioPage';
import CustomerGroup from './Components/customergroup/CustomerGroup';
import SendMessage from './Components/sendmessage/SendMessage';
import MessageHistory from './Components/messagehistory/MessageHistory';
import BulkMailing from './Components/bulkmailing/BulkMailing';
import BuyPlan from './Components/buyplan/BuyPlan';
import Paymentpage from './Components/payment/Paymentpage';
import Supportpage from './Components/support/Supportpage';
import UserProfile from './Components/userprofile/UserProfile';
import LeftBar from './Dashboard/leftbar/LeftBar';
import Navbar from './Dashboard/navbar/Navbar';

function App() {
  const isAuthenticated = localStorage.getItem("user");
  const location = useLocation();

  // console.log('isAuthenticated...', isAuthenticated);

  const shouldShowLeftBar = location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !=='/error';
  const shouldShowNavbar = location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/error';

// console.log(location.pathname)

  return (
    <div className="App">
      {shouldShowLeftBar && <LeftBar />}
      {shouldShowNavbar && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/error' element={<Error />} />
      
        {isAuthenticated && (
          <Route path='/dashb' element={<Dashboard />} />
        )}
        <Route path='/customerlist' element={<Customerlist />} />
        <Route path='/robotics' element={<Robotics/>}/>
        <Route path='/officialpage' element={<OfficialPage/>}/>
        <Route path='/twilliopage' element={<TwillioPage/>}/>
        <Route path='/customergroup' element={<CustomerGroup/>}/>
        <Route path='/sendmessagepage' element={<SendMessage/>}/>
        <Route path='/messagehistory' element={<MessageHistory/>}/>
        <Route path='/bulkmailingpage' element={<BulkMailing/>}/>
        <Route path='/buyplanpage' element={<BuyPlan/>}/>
        <Route path='/paymentpage' element={<Paymentpage/>}/>
        <Route path='/supportpage' element={<Supportpage/>}/>
        <Route path='/userprofilepage' element={<UserProfile/>}/>
        {/* Add a catch-all route for undefined routes */}
        <Route path='/*' element={<Navigate to="/error" replace />} />
      </Routes>
    </div>
  );
}

export default App;
