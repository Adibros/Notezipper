
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import CreateNote from './screens/CreateNote/CreateNote';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/register" element={<RegisterScreen/>} />
          <Route path="/createnote" element={<CreateNote/>} />
          <Route path="/mynotes" element={<MyNotes/> } />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
