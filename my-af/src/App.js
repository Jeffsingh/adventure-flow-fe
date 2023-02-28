import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import SignUp from './components/User/SignUp';
import Trip from './components/Trip';
import LogIn from './components/User/LogIn';
import UserPage from './components/UserPage/UserPage';

function App() {
  return <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/trip" element={<Trip />} />
    <Route path="/user/:id" element={<UserPage />} />
  </Routes>

}

export default App;
