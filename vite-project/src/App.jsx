import './App.scss' ;
import  {HeaderComponent} from './components/header/HeaderComponent.jsx' ;
import {MainComponent} from './components/main/MainComponent.jsx' ;
import {FooterComponent} from './components/footer/FooterComponent.jsx' ;
import { NavComponent } from './components/nav/NavComponent.jsx';

const App = () => {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
   </>
  )
}
export default App ;