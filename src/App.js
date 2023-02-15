import DivContainer from "./styled-components/DivContainer"; 
import '../src/components/navbar/navbar.css'
import Banner from "./styled-components/Banner";
import Skills from "./styled-components/Skills";
import Nav from './styled-components/Nav';
import Footer from "./styled-components/Footer";
import Contact from "./styled-components/Contact";
import Portfolio from './components/portfolio/Portfolio';
import Projects from './styled-components/Projects';
import PersonalCard from './styled-components/PersonalCard'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Test from "./components/Test";


function App() {
  return (
    
<BrowserRouter>

<DivContainer>
      <Nav/>
      <Banner id='home'/>
      <Skills id='skills'/>
      <Projects id='projects'/>

      <Routes>
        <Route>
          <Route path="/projects/" element={<Portfolio/>}/>
          <Route path="/projects/front" element={<PersonalCard/>}/>
          <Route path="/projects/back" element={<Test/>}/>
        </Route>
      </Routes>

      <Contact id='contact'/>
      <Footer/>
    </DivContainer>
</BrowserRouter> 
  );
}

export default App;
