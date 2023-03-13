import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import SignUp from './components/User/SignUp';
import Trip from './components/Trip';
import LogIn from './components/User/LogIn';
import MyTrips from './components/MyTrips/MyTrips';
import Launch from './components/Launch/Launch';

function App() {
  return <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/trip" element={<Trip />} />
    <Route path="/mytrips" element={<MyTrips />} />
    <Route path="/start" element={<Launch />} />
  </Routes>

}

export default App;
