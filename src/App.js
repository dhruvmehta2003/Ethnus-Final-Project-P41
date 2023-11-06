import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/nav'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
