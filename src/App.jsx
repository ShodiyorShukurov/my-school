import { Navigate, Route, Routes } from 'react-router-dom'
import Register from './components/register'
import ThankYou from './components/ThankYou';

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path='/' element={<Navigate to="/register" />} />
      <Route path='/thankyou' element={<ThankYou/>} />
    </Routes>
  );
}

export default App