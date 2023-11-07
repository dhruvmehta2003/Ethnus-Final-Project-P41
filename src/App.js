import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/nav'
import SignIn from './components/Login/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SignIn />
      </BrowserRouter>
    </>
  );
}

export default App;
