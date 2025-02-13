// delete comment

import './App.css';
import WaterPage from './components/screens/learnMorePage/WaterPage.js';
import MicroClimaticPage from './components/screens/learnMorePage/MicroClimaticPage.js';
import AirPage from './components/screens/learnMorePage/AirPage.js';
import RecyclingPage from './components/screens/learnMorePage/RecyclingPage.js';
import CleanlinessPage from './components/screens/learnMorePage/CleanlinessPage.js';
import PowerPage from './components/screens/learnMorePage/PowerPage.js';
import ContactUs from './components/screens/ContactPage.js';
import Staff from './components/screens/StaffPage.js';
import Students from './components/screens/StudentsPage.js';
import NewsPage from './components/screens/NewsPage.js';
import Header from './components/MainHeader.js';
import Chatbot from './components/Chatbot.js';
import Footer from './components/Footer.js';
import MainPage from './components/screens/MainPage.js';
import Login from './components/screens/LoginRegisterPage/LoginPage.js';
import Register from './components/screens/LoginRegisterPage/SignUpPage.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Chatbot
          title='Mapping of Hit College'
          src={'temp'}
          width='90%'
          height='550vh'
          loading='lazy'
        />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/power' element={<PowerPage />} />
          <Route path='/air' element={<AirPage />} />
          <Route path='/water' element={<WaterPage />} />
          <Route
            path='/RecyclingGarbageEfficiency'
            element={<RecyclingPage />}
          />
          <Route path='/microClimatic' element={<MicroClimaticPage />} />
          <Route path='/cleanliness' element={<CleanlinessPage />} />
          <Route path='/students' element={<Students />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
