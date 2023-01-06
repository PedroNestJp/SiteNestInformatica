import {BrowserRouter} from 'react-router-dom'
import Rotas from './Routes/Routes'
import {Nav, Footer} from './components/Components'

function App() {
  return (
    <>
    
     <BrowserRouter>
     <Nav/>
        <Rotas/>
     </BrowserRouter>
    <Footer/>
    </>
  );
}


export default App;