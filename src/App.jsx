import 'bootstrap/dist/css/bootstrap.min.css';
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
    </>
  )
}

export default App
