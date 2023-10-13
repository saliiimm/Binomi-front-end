import {Route,Routes} from 'react-router-dom';
import Page404 from './pages/Page404/Page404';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
