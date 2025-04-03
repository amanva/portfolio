import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from "./components/Contact"
import Projects from './components/Projects'
import Foot from "./components/Foot"
import LoadingScreen from './components/LoadingScreen/loadingScreen';

function App() {
  return (
   
    <>
    <LoadingScreen></LoadingScreen>
  <Home></Home>
  <About></About>
<Projects></Projects>
<Contact></Contact>
{/* <Foot></Foot> */}
<Layout></Layout>
    </>
    
    
  );
}

export default App;
