import './App.scss';
// import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from "./components/Contact"
import Foot from "./components/Foot"

// import Contact from './components/Contact'

function App() {
  return (
    // <>
    // <Routes>
    //   <Route path = "/" element={<Layout/>}>
    //   <Route index element={<Home />} />
    //   <Route path = "about" element={<About />} />
    //   <Route path = "contact" element={<Contact />} />
    //   </Route>
    // </Routes>
    // </>
    // <>
    // <Home></Home>
    // <About></About>
    // <Projects></Projects>
    // <Layout></Layout>
    // </>
    // <div>
    <>
  <Home></Home>
  <About></About>
<Projects></Projects>
<Contact></Contact>
<Foot></Foot>
<Layout></Layout>
    </>
    
    
  );
}

export default App;
