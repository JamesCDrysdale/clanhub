import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './screens/LandingPage/LandingPage';
import MyHomework from './screens/MyHomework/MyHomework';


const App = () =>
  <>

    <Header />
    <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/myhomework" element={<MyHomework />} />
        </Routes>
    </main>
    <Footer />

  </>

export default App; 
