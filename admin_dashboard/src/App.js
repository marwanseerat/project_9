// import './App.css';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';

// Admin
import Adminlogin from './admin/AdminLogin';
import Dashboard from './admin/Dash';
// Auction
import Question from './admin/Question';
import Unaccepted_question from './admin/Unaccepted_question';
import AddAuctionAdmin from './admin/AddAuctionAdmin';
import EditAuctionAdmin from './admin/EditAuctionAdmin';
// User
import UserAdmin from './admin/user';
import AddUserAdmin from './admin/AddUserAdmin';
import EditUserAdmin from './admin/EditUserAdmin';
//comment
import Comment from './admin/Comment';



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* Admin */}
      <Route path="/loginA" element={<Adminlogin />} />
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/" element={<Unaccepted_question />} /> 
      <Route path="/AddAuctionAdmin" element={<AddAuctionAdmin />} /> 
      <Route path="/EditAuctionAdmin/:id/edit" element={<EditAuctionAdmin />} /> 
      <Route path="/userA" element={<UserAdmin />} /> 
      <Route path="/AddUserAdmin" element={<AddUserAdmin />} /> 
      <Route path="/EditUserAdmin/:id/edit" element={<EditUserAdmin />} /> 
      <Route path="/commentAdmin" element={<Comment />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;