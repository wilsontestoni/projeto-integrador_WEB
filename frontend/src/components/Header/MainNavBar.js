import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  max-width: 40px;
  max-height: 40px;
  margin-right: 10px;
`;

export const Header = styled.header`
  margin-bottom: 60px;
`;

const AlterStyleLink = styled(Link)`
  background-color: #122940;
  font-size: 16px;
  font-weight: normal;
  color: white !important;
`;

const Signin = styled(Link)`
  background-color: #002f8e;
  font-size: 16px;
  margin-right: 10px;
  font-weight: normal;
  color: white !important;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 0 !important;
  &:hover {
    background-color: #003fbd;
    box-shadow: 1px 1px 20px #003fbd;
  }

  @media (max-width: 991px) {
  
        width: 100%;
        text-align: center;
    
}
`;

//#003FBD

export const ButtonSignupStyle = styled(AlterStyleLink)`
  color: black;
  background-color: #2BFDBE;
  border: none; !important;
  outline: none;
  color: #000 !important;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 0 !important;
  &:hover {
    background-color: #BADEFF;
    box-shadow: 1px 1px 20px #BADEFF;
  }
`;

function MainNavBar() {
  const [isNavbarShown, setIsNavbarShown] = useState(false);

  const handleToggleClick = () => {
    setIsNavbarShown(!isNavbarShown);
  };

  const handleLinkClick = () => {
    setIsNavbarShown(false);
  };

  return (
    <Header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3001/home/">
            <LogoContainer>
              <LogoImg src={Logo} alt="Logo do Trabalho" class="logo-img" />
              Educa Social
            </LogoContainer>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${
              isNavbarShown ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Signin
                  to={"/login"}
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  Entrar
                </Signin>
              </li>

              <li className="nav-item">
                <ButtonSignupStyle to={"/cadastro"} className="nav-link btn">
                  Cadastre-se
                </ButtonSignupStyle>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Header>
  );
}

export default MainNavBar;
