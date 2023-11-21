import styled from "styled-components"
import { Header } from "../Header/MainNavBar"
import { useNavigate } from "react-router-dom"

const LogoutButton = styled.button`
  background-color: #AD402F;
  color: #fff;
  border: none; !important;
  outline: none !important;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
  border-bottom-right-radius: 0 !important;
  &:hover {
    transition: all ease 0.2s;
    background-color: #D64F3A;
    box-shadow: 1px 1px 20px #D64F3A;
  }

  &:focus {
    outline: none; !important;
  }
  `

function UsersHeader() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('token');

    navigate("/login");
  }

  return (
    <Header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid d-flex justify-content-end" >
          <LogoutButton type="button" className="btn" onClick={logoutHandler}>Sair</LogoutButton>
        </div>
      </nav>
    </Header>
  )
}

export default UsersHeader;