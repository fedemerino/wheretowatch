import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './main.scss'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Body from './Components/Body';
function App() {

  return (
    <>
      <Navbar />
      <Body />
      <Footer />
      <ToastContainer/>
    </>
  )
}

export default App
