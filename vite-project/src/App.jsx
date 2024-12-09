import './App.scss';
import { HeaderComponent } from './components/header/HeaderComponent.jsx';
import { MainComponent } from './components/main/MainComponent.jsx';
import { FooterComponent } from './components/footer/FooterComponent.jsx';
import { NavComponent } from './components/nav/NavComponent.jsx';
import { Button } from './components/button/ButtonComponent.jsx';
import { WelcomeComponent } from './components/welcome/WelcomeComponent.jsx';
import { DishesComponent } from './components/dishes/DishesComponent.jsx';

const App = () => {

const dishesArr = [
  'Burger',
  'Bøf',
  'Hotdog'
]

  return (
    <>
      <HeaderComponent />
      <MainComponent ><DishesComponent data={dishesArr}/></MainComponent>
      <FooterComponent />
      
    </>
  )
}


export default App;