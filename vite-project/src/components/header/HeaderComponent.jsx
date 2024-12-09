import { NavComponent } from "../nav/NavComponent.jsx";
import { HeaderContainerStyled } from "./Header.styled.js";
import { WelcomeComponent } from "../welcome/WelcomeComponent.jsx";

export const HeaderComponent = () => {
    return (
        <HeaderContainerStyled>
                    <h1>Header</h1>
                <NavComponent />
                <WelcomeComponent firstName="John" lastName="Doe" />
                <WelcomeComponent firstName="Jane" lastName="Dose" />
                <WelcomeComponent firstName="Jim" lastName="Dome" />
        </HeaderContainerStyled>
    );
}