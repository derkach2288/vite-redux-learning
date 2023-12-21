import {
  WeatherWrapper,
  NavigationContainer,
  LogoContainer,
  Header,
  Main,
  StyledNavLink,
} from "./styles"
import { WeatherPrpps } from "./types"

function Weather({children}: WeatherPrpps) {
  return (
    <WeatherWrapper>
      <Header>
        <LogoContainer>Weather App</LogoContainer>
        <NavigationContainer>
        <StyledNavLink
            style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}
            to="/"
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            style={({ isActive }) => ({ fontWeight: isActive ? 700 : 400 })}
            to="/weathers"
          >
            Weathers
          </StyledNavLink>        </NavigationContainer>
      </Header>
      <Main>
        {children}
      </Main>
    </WeatherWrapper>
  )
}

export default Weather
