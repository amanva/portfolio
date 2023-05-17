import './App.scss';
// import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from "./components/Contact"
import Projects from './components/Projects'
import Foot from "./components/Foot"
// import Contact from './components/Contact'

function App() {
  return (
   
    <>
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
